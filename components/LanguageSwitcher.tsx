'use client'

import { useRouter, usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()

  const changeLanguage = (locale: string) => {
    router.replace(`/${locale}${pathname}`)
  }

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => changeLanguage('en')}
        className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('ar')}
        className="px-3 py-1 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
      >
        AR
      </button>
    </div>
  )
}
