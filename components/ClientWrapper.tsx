'use client'

import { useState, useEffect } from 'react'
import Preloader from './Preloader'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading ? <Preloader /> : children}
    </>
  )
}
