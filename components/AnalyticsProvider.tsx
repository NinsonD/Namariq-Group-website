'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackPageView } from '../lib/analytics'

const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  useEffect(() => {
    // Track page views on route change
    if (pathname && typeof window !== 'undefined') {
      trackPageView(pathname)
    }
  }, [pathname])

  return <>{children}</>
}

export default AnalyticsProvider
