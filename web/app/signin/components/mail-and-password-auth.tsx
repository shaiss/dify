import Link from 'next/link'
import router from 'next/router'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'next/navigation'
import Button from '@/app/components/base/button'
import Toast from '@/app/components/base/toast'
import { emailRegex } from '@/config'
import { login } from '@/service/common'

type MailAndPasswordAuthProps = {
  isInvite: boolean
}

export default function MailAndPasswordAuth({ isInvite }: MailAndPasswordAuthProps) {
  const { t } = useTranslation()
  const searchParams = useSearchParams()
  const [showPassword, setShowPassword] = useState(false)
  const emailFromLink = searchParams.get('email') as string
  const [email, setEmail] = useState(isInvite ? emailFromLink : '')
  const [password, setPassword] = useState('')

  const [isLoading, setIsLoading] = useState(false)
  const handleEmailPasswordLogin = async () => {
    if (!email) {
      Toast.notify({ type: 'error', message: t('login.error.emailEmpty') })
      return
    }
    if (!emailRegex.test(email)) {
      Toast.notify({
        type: 'error',
        message: t('login.error.emailInValid'),
      })
      return
    }
    try {
      setIsLoading(true)
      const res = await login({
        url: '/login',
        body: {
          email,
          password,
          remember_me: true,
        },
      })
      if (res.result === 'success') {
        localStorage.setItem('console_token', res.data)
        router.replace('/apps')
      }
      else {
        Toast.notify({
          type: 'error',
          message: res.data,
        })
      }
    }
    finally {
      setIsLoading(false)
    }
  }

  return <form onSubmit={() => { }}>
    <div className='mb-3'>
      <label htmlFor="email" className="my-2 block text-sm font-medium text-gray-900">
        {t('login.email')}
      </label>
      <div className="mt-1">
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={isInvite}
          readOnly={isInvite}
          id="email"
          type="email"
          autoComplete="email"
          placeholder={t('login.emailPlaceholder') || ''}
          className={'appearance-none block w-full rounded-lg pl-[14px] px-3 py-2 border border-gray-200 hover:border-gray-300 hover:shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 caret-primary-600 sm:text-sm'}
        />
      </div>
    </div>

    <div className='mb-3'>
      <label htmlFor="password" className="my-2 flex items-center justify-between text-sm font-medium text-gray-900">
        <span>{t('login.password')}</span>
        <Link href='/forgot-password' className='text-primary-600'>
          {t('login.forget')}
        </Link>
      </label>
      <div className="relative mt-1">
        <input
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter')
              handleEmailPasswordLogin()
          }}
          type={showPassword ? 'text' : 'password'}
          autoComplete="current-password"
          placeholder={t('login.passwordPlaceholder') || ''}
          className={'appearance-none block w-full rounded-lg pl-[14px] px-3 py-2 border border-gray-200 hover:border-gray-300 hover:shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 caret-primary-600 sm:text-sm pr-10'}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500"
          >
            {showPassword ? '👀' : '😝'}
          </button>
        </div>
      </div>
    </div>

    <div className='mb-2'>
      <Button
        tabIndex={0}
        variant='primary'
        onClick={handleEmailPasswordLogin}
        disabled={isLoading}
        className="w-full"
      >{t('login.signBtn')}</Button>
    </div>
  </form>
}
