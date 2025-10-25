import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

export const useReCaptcha = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const executeCaptcha = async (action: string = 'submit') => {
    if (!executeRecaptcha) {
      console.warn('reCAPTCHA not loaded yet')
      return null
    }

    try {
      const token = await executeRecaptcha(action)
      return token
    } catch (error) {
      console.error('reCAPTCHA execution failed:', error)
      return null
    }
  }

  return { executeCaptcha }
}

// Verify reCAPTCHA token on the server side
export const verifyRecaptcha = async (token: string, secretKey: string) => {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    })

    const data = await response.json()
    return {
      success: data.success,
      score: data.score,
      errorCodes: data['error-codes'],
    }
  } catch (error) {
    console.error('reCAPTCHA verification failed:', error)
    return { success: false, errorCodes: ['verification-failed'] }
  }
}
