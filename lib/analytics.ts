import ReactGA from 'react-ga4'
import ReactPixel from 'react-facebook-pixel'

// Initialize GA4
export const initGA = (measurementId: string) => {
  if (typeof window !== 'undefined') {
    try {
      ReactGA.initialize(measurementId)
    } catch (error) {
      console.warn('GA4 initialization failed:', error)
    }
  }
}

// Initialize Facebook Pixel
export const initFacebookPixel = (pixelId: string) => {
  if (typeof window !== 'undefined') {
    try {
      ReactPixel.init(pixelId)
      ReactPixel.pageView()
    } catch (error) {
      console.warn('Facebook Pixel initialization failed:', error)
    }
  }
}

// Track page views
export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined') {
    try {
      ReactGA.send({ hitType: 'pageview', page: path })
    } catch (error) {
      console.warn('Page view tracking failed:', error)
    }
  }
}

// Track events
export const trackEvent = (category: string, action: string, label?: string) => {
  if (typeof window !== 'undefined') {
    try {
      ReactGA.event({
        category,
        action,
        label,
      })
    } catch (error) {
      console.warn('Event tracking failed:', error)
    }
  }
}

// Track custom events
export const trackCustomEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    try {
      ReactGA.event(eventName, parameters)
    } catch (error) {
      console.warn('Custom event tracking failed:', error)
    }
  }
}

// Facebook Pixel tracking
export const trackFacebookEvent = (event: string, data?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    try {
      ReactPixel.track(event, data)
    } catch (error) {
      console.warn('Facebook event tracking failed:', error)
    }
  }
}

// Track conversions
export const trackConversion = (conversionId: string) => {
  if (typeof window !== 'undefined') {
    try {
      ReactGA.event({
        category: 'conversion',
        action: 'conversion',
        label: conversionId,
      })
    } catch (error) {
      console.warn('Conversion tracking failed:', error)
    }
  }
}
