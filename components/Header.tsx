'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50)
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
          <img
            src="/src/logo/main-logo.png"
            alt="Al Namariq Group of Companies Logo"
            className="h-16 md:h-24 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
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

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className={`md:hidden p-2 rounded-md transition-colors duration-300 ${
            isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white hover:bg-opacity-20'
          }`}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        <div className="hidden md:block">
          <LanguageSwitcher isScrolled={isScrolled} />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-black bg-opacity-50 z-40" onClick={closeMobileMenu}>
          <div className="bg-white shadow-lg mx-4 mt-4 rounded-lg overflow-hidden">
            <nav className="flex flex-col py-4">
              <Link href="/" className="px-6 py-3 text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-300" onClick={closeMobileMenu}>
                Home
              </Link>
              <Link href="/about" className="px-6 py-3 text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-300" onClick={closeMobileMenu}>
                About Us
              </Link>
              <Link href="/our-divisions" className="px-6 py-3 text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-300" onClick={closeMobileMenu}>
                Our Divisions
              </Link>
              <Link href="/products" className="px-6 py-3 text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-300" onClick={closeMobileMenu}>
                Products
              </Link>
              <Link href="/services" className="px-6 py-3 text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-300" onClick={closeMobileMenu}>
                Services
              </Link>
              <Link href="/specialized-materials" className="px-6 py-3 text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-300" onClick={closeMobileMenu}>
                Specialized Materials
              </Link>
              <Link href="/contact" className="px-6 py-3 text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-300" onClick={closeMobileMenu}>
                Contact Us
              </Link>
              <div className="px-6 py-3 border-t border-gray-200">
                <LanguageSwitcher isScrolled={true} />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
