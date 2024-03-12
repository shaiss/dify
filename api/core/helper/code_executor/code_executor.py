from os import environ
from typing import Literal, Optional

from httpx import post
from pydantic import BaseModel
from yarl import URL
from core.helper.code_executor.javascript_transformer import NodeJsTemplateTransformer

from core.helper.code_executor.jina2_transformer import Jinja2TemplateTransformer
from core.helper.code_executor.python_transformer import PythonTemplateTransformer

# Code Executor
CODE_EXECUTION_ENDPOINT = environ.get('CODE_EXECUTION_ENDPOINT', '')
CODE_EXECUTION_API_KEY = environ.get('CODE_EXECUTION_API_KEY', '')

class CodeExecutionException(Exception):
    pass

class CodeExecutionResponse(BaseModel):
    class Data(BaseModel):
        stdout: Optional[str]
        error: Optional[str]

    code: int
    message: str
    data: Data

class CodeExecutor:
    @classmethod
    def execute_code(cls, language: Literal['python3', 'javascript', 'jinja2'], code: str, inputs: dict) -> dict:
        """
        Execute code
        :param language: code language
        :param code: code
        :param inputs: inputs
        :return:
        """
        template_transformer = None
        if language == 'python3':
            template_transformer = PythonTemplateTransformer
        elif language == 'jinja2':
            template_transformer = Jinja2TemplateTransformer
        elif language == 'javascript':
            template_transformer = NodeJsTemplateTransformer
        else:
            raise CodeExecutionException('Unsupported language')

        runner = template_transformer.transform_caller(code, inputs)
        url = URL(CODE_EXECUTION_ENDPOINT) / 'v1' / 'sandbox' / 'run'
        headers = {
            'X-Api-Key': CODE_EXECUTION_API_KEY
        }
        data = {
            'language': 'python3' if language == 'jinja2' else
                        'nodejs' if language == 'javascript' else
                        'python3' if language == 'python3' else None,
            'code': runner,
        }

        try:
            response = post(str(url), json=data, headers=headers)
            if response.status_code == 503:
                raise CodeExecutionException('Code execution service is unavailable')
            elif response.status_code != 200:
                raise Exception('Failed to execute code')
        except CodeExecutionException as e:
            raise e
        except Exception as e:
            raise CodeExecutionException('Failed to execute code')
        
        try:
            response = response.json()
        except:
            raise CodeExecutionException('Failed to parse response')

        response = CodeExecutionResponse(**response)

        if response.code != 0:
            raise CodeExecutionException(response.message)
        
        if response.data.error:
            raise CodeExecutionException(response.data.error)
        
        return template_transformer.transform_response(response.data.stdout)