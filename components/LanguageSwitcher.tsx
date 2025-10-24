'use client'

import { useRouter, usePathname } from 'next/navigation'

interface LanguageSwitcherProps {
  isScrolled?: boolean
}

export default function LanguageSwitcher({ isScrolled = false }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()

  const changeLanguage = (locale: string) => {
    router.replace(`/${locale}${pathname}`)
  }

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded transition-colors backdrop-blur-sm ${
          isScrolled
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('ar')}
        className={`px-3 py-1 rounded transition-colors backdrop-blur-sm ${
          isScrolled
            ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
        }`}
      >
        AR
      </button>
    </div>
  )
}
