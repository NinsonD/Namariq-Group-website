'use client'

import dynamic from 'next/dynamic'

const GoogleReCaptchaProvider = dynamic(
  () => import('react-google-recaptcha-v3').then(mod => mod.GoogleReCaptchaProvider),
  {
    ssr: false,
  }
)

interface ReCaptchaProviderProps {
  children: React.ReactNode
}

export default function ReCaptchaProvider({ children }: ReCaptchaProviderProps) {
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  if (!recaptchaKey) {
    console.warn('NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set. reCAPTCHA will not work.')
    return <>{children}</>
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaKey}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  )
}
