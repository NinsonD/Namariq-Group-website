'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="/src/logo/main-logo.png"
            alt="Al Namariq Group of Companies Logo"
            className="h-24 w-auto"
          />
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className={`transition-all duration-300 hover:scale-110 hover:underline underline-offset-4 ${
            isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-300'
          }`}>
            Home
          </Link>
          <Link href="/about" className={`transition-all duration-300 hover:scale-110 hover:underline underline-offset-4 ${
            isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-300'
          }`}>
            About Us
          </Link>
          <Link href="/our-divisions" className={`transition-all duration-300 hover:scale-110 hover:underline underline-offset-4 ${
            isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-300'
          }`}>
            Our Divisions
          </Link>
          <Link href="/products" className={`transition-all duration-300 hover:scale-110 hover:underline underline-offset-4 ${
            isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-300'
          }`}>
            Products
          </Link>
          <Link href="/services" className={`transition-all duration-300 hover:scale-110 hover:underline underline-offset-4 ${
            isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-300'
          }`}>
            Services
          </Link>
          <Link href="/specialized-materials" className={`transition-all duration-300 hover:scale-110 hover:underline underline-offset-4 ${
            isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-300'
          }`}>
            Specialized Materials
          </Link>
          <Link href="/contact" className={`transition-all duration-300 hover:scale-110 hover:underline underline-offset-4 ${
            isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-300'
          }`}>
            Contact Us
          </Link>
        </nav>
        <LanguageSwitcher isScrolled={isScrolled} />
      </div>
    </header>
  )
}
