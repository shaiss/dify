from typing import cast

import flask_login
from flask import redirect, request
from flask_restful import Resource, reqparse

import services
from configs import dify_config
from constants.languages import languages
from controllers.console import api
from controllers.console.auth.error import (
    EmailCodeError,
    EmailOrPasswordMismatchError,
    EmailPasswordLoginLimitError,
    InvalidEmailError,
    InvalidTokenError,
)
from controllers.console.error import NotAllowedCreateWorkspace, NotAllowedRegister
from controllers.console.setup import setup_required
from events.tenant_event import tenant_was_created
from libs.helper import email, get_remote_ip
from libs.password import valid_password
from models import Account
from services.account_service import AccountService, TenantService
from services.errors.workspace import WorkSpaceNotAllowedCreateError


class LoginApi(Resource):
    """Resource for user login."""

    @setup_required
    def post(self):
        """Authenticate user and login."""
        parser = reqparse.RequestParser()
        parser.add_argument("email", type=email, required=True, location="json")
        parser.add_argument("password", type=valid_password, required=True, location="json")
        parser.add_argument("remember_me", type=bool, required=False, default=False, location="json")
        args = parser.parse_args()

        is_login_error_rate_limit = AccountService.is_login_error_rate_limit(args["email"])
        if is_login_error_rate_limit:
            raise EmailPasswordLoginLimitError()

        try:
            account = AccountService.authenticate(args["email"], args["password"])
        except services.errors.account.AccountLoginError:
            raise NotAllowedRegister()
        except services.errors.account.AccountPasswordError:
            AccountService.add_login_error_rate_limit(args["email"])
            raise EmailOrPasswordMismatchError()
        except services.errors.account.AccountNotFoundError:
            if not dify_config.ALLOW_REGISTER:
                raise NotAllowedRegister()

            token = AccountService.send_reset_password_email(email=args["email"])
            return {"result": "fail", "data": token, "message": "account_not_found"}
        # SELF_HOSTED only have one workspace
        tenants = TenantService.get_join_tenants(account)
        if len(tenants) == 0:
            return {
                "result": "fail",
                "data": "workspace not found, please contact system admin to invite you to join in a workspace",
            }

        token = AccountService.login(account, ip_address=get_remote_ip(request))
        AccountService.reset_login_error_rate_limit(args["email"])
        return {"result": "success", "data": token}


class LogoutApi(Resource):
    @setup_required
    def get(self):
        account = cast(Account, flask_login.current_user)
        token = request.headers.get("Authorization", "").split(" ")[1]
        AccountService.logout(account=account, token=token)
        flask_login.logout_user()
        return {"result": "success"}


class ResetPasswordSendEmailApi(Resource):
    @setup_required
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument("email", type=email, required=True, location="json")
        args = parser.parse_args()

        account = AccountService.get_user_through_email(args["email"])
        if account is None:
            if dify_config.ALLOW_REGISTER:
                token = AccountService.send_reset_password_email(email=args["email"])
            else:
                raise NotAllowedRegister()
        else:
            token = AccountService.send_reset_password_email(account=account)

        return {"result": "success", "data": token}


class EmailCodeLoginSendEmailApi(Resource):
    @setup_required
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument("email", type=email, required=True, location="json")
        args = parser.parse_args()

        account = AccountService.get_user_through_email(args["email"])
        if account is None:
            if dify_config.ALLOW_REGISTER:
                token = AccountService.send_email_code_login_email(email=args["email"])
            else:
                raise NotAllowedRegister()
        else:
            token = AccountService.send_email_code_login_email(account=account)

        return {"result": "success", "data": token}


class EmailCodeLoginApi(Resource):
    @setup_required
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument("email", type=str, required=True, location="json")
        parser.add_argument("code", type=str, required=True, location="json")
        parser.add_argument("token", type=str, required=True, location="json")
        args = parser.parse_args()

        user_email = args["email"]

        token_data = AccountService.get_email_code_login_data(args["token"])
        if token_data is None:
            raise InvalidTokenError()

        if token_data["email"] != args["email"]:
            raise InvalidEmailError()

        if token_data["code"] != args["code"]:
            raise EmailCodeError()

        AccountService.revoke_email_code_login_token(args["token"])
        account = AccountService.get_user_through_email(user_email)
        if account:
            tenant = TenantService.get_join_tenants(account)
            if not tenant:
                if not dify_config.ALLOW_CREATE_WORKSPACE:
                    raise NotAllowedCreateWorkspace()
                else:
                    tenant = TenantService.create_tenant(f"{account.name}'s Workspace")
                    TenantService.create_tenant_member(tenant, account, role="owner")
                    account.current_tenant = tenant
                    tenant_was_created.send(tenant)

        if account is None:
            try:
                account = AccountService.create_account_and_tenant(
                    email=user_email, name=user_email, interface_language=languages[0]
                )
            except WorkSpaceNotAllowedCreateError:
                return redirect(
                    f"{dify_config.CONSOLE_WEB_URL}/signin"
                    "?message=Workspace not found, please contact system admin to invite you to join in a workspace."
                )
        token = AccountService.login(account, ip_address=get_remote_ip(request))
        AccountService.reset_login_error_rate_limit(args["email"])
        return {"result": "success", "data": token}


api.add_resource(LoginApi, "/login")
api.add_resource(LogoutApi, "/logout")
api.add_resource(EmailCodeLoginSendEmailApi, "/email-code-login")
api.add_resource(EmailCodeLoginApi, "/email-code-login/validity")
api.add_resource(ResetPasswordSendEmailApi, "/reset-password")
