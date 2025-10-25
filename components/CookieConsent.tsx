'use client'

import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { initGA, initFacebookPixel } from '../lib/analytics'

const CookieConsent = dynamic(() => import('react-cookie-consent'), {
  ssr: false,
})

const CookieConsentBanner = () => {
  const handleAccept = () => {
    // Initialize analytics after consent
    if (typeof window !== 'undefined') {
      if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
        initGA(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID)
      }
      if (process.env.NEXT_PUBLIC_FB_PIXEL_ID) {
        initFacebookPixel(process.env.NEXT_PUBLIC_FB_PIXEL_ID)
      }
    }
  }

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All"
      declineButtonText="Decline"
      cookieName="namariq-consent"
      style={{
        background: '#2B373B',
        color: '#fff',
        fontSize: '14px',
        textAlign: 'center',
      }}
      buttonStyle={{
        background: '#4CAF50',
        color: '#fff',
        fontSize: '14px',
        borderRadius: '4px',
        padding: '8px 16px',
      }}
      declineButtonStyle={{
        background: '#f44336',
        color: '#fff',
        fontSize: '14px',
        borderRadius: '4px',
        padding: '8px 16px',
      }}
      expires={365}
      onAccept={handleAccept}
      enableDeclineButton
    >
      We use cookies to enhance your experience, analyze site traffic, and personalize content. By continuing to use our site, you agree to our{' '}
      <a href="/privacy-policy" style={{ color: '#4CAF50' }}>
        Privacy Policy
      </a>
      .
    </CookieConsent>
  )
}

export default CookieConsentBanner
