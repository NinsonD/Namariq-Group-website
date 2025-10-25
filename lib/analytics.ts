import ReactGA from 'react-ga4'
import ReactPixel from 'react-facebook-pixel'

// Initialize GA4
export const initGA = (measurementId: string) => {
  if (typeof window !== 'undefined') {
    ReactGA.initialize(measurementId)
  }
}

// Initialize Facebook Pixel
export const initFacebookPixel = (pixelId: string) => {
  if (typeof window !== 'undefined') {
    ReactPixel.init(pixelId)
    ReactPixel.pageView()
  }
}

// Track page views
export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined') {
    ReactGA.send({ hitType: 'pageview', page: path })
  }
}

// Track events
export const trackEvent = (category: string, action: string, label?: string) => {
  if (typeof window !== 'undefined') {
    ReactGA.event({
      category,
      action,
      label,
    })
  }
}

// Track custom events
export const trackCustomEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    ReactGA.event(eventName, parameters)
  }
}

// Facebook Pixel tracking
export const trackFacebookEvent = (event: string, data?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    ReactPixel.track(event, data)
  }
}

// Track conversions
export const trackConversion = (conversionId: string) => {
  if (typeof window !== 'undefined') {
    ReactGA.event({
      category: 'conversion',
      action: 'conversion',
      label: conversionId,
    })
  }
}
