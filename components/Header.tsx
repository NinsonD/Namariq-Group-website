'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function Header() {
  const pathname = usePathname()
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
            className="h-12 md:h-16 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className={`font-bold transition-all duration-300 hover:scale-110 hover:underline underline-offset-4 ${
            pathname === '/' ? 'underline' : ''
          } ${
            isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-300'
          }`}>
            Home
          </Link>
          <Link href="/about" className={`font-bold transition-all duration-300 hover:scale-110 hover:underline underline-offset-4 ${
            pathname === '/about' ? 'underline' : ''
          } ${
            isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-300'
          }`}>
            About Us
          </Link>
          <Link href="/our-divisions" className={`font-bold transition-all duration-300 hover:scale-110 hover:underline underline-offset-4 ${
            pathname === '/our-divisions' ? 'underline' : ''
          } ${
            isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-300'
          }`}>
            Our Divisions
          </Link>
          <Link href="/products" className={`font-bold transition-all duration-300 hover:scale-110 hover:underline underline-offset-4 ${
            pathname === '/products' ? 'underline' : ''
          } ${
            isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-300'
          }`}>
            Products
          </Link>
          <Link href="/services" className={`font-bold transition-all duration-300 hover:scale-110 hover:underline underline-offset-4 ${
            pathname === '/services' ? 'underline' : ''
          } ${
            isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-300'
          }`}>
            Services
          </Link>
          {/* <Link href="/specialized-materials" className={`font-bold transition-all duration-300 hover:scale-110 hover:underline underline-offset-4 ${
            pathname === '/specialized-materials' ? 'underline' : ''
          } ${
            isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-300'
          }`}>
            Specialized Materials
          </Link> */}
          <Link href="/contact" className={`font-bold transition-all duration-300 hover:scale-110 hover:underline underline-offset-4 ${
            pathname === '/contact' ? 'underline' : ''
          } ${
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
          <a href="https://shop.namariqgroup.com" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 bg-primary text-white hover:bg-red-600`}>
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Shop
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-black bg-opacity-50 z-40" onClick={closeMobileMenu}>
          <div className="bg-white shadow-lg mx-4 mt-4 rounded-lg overflow-hidden">
            <nav className="flex flex-col py-4">
              <Link href="/" className={`px-6 py-3 transition-colors duration-300 ${
                pathname === '/' ? 'bg-blue-100 text-blue-600' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'
              }`} onClick={closeMobileMenu}>
                Home
              </Link>
              <Link href="/about" className={`px-6 py-3 transition-colors duration-300 ${
                pathname === '/about' ? 'bg-blue-100 text-blue-600' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'
              }`} onClick={closeMobileMenu}>
                About Us
              </Link>
              <Link href="/our-divisions" className={`px-6 py-3 transition-colors duration-300 ${
                pathname === '/our-divisions' ? 'bg-blue-100 text-blue-600' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'
              }`} onClick={closeMobileMenu}>
                Divisions
              </Link>
              <Link href="/products" className={`px-6 py-3 transition-colors duration-300 ${
                pathname === '/products' ? 'bg-blue-100 text-blue-600' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'
              }`} onClick={closeMobileMenu}>
                Products
              </Link>
              <Link href="/services" className={`px-6 py-3 transition-colors duration-300 ${
                pathname === '/services' ? 'bg-blue-100 text-blue-600' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'
              }`} onClick={closeMobileMenu}>
                Services
              </Link>
              <Link href="/contact" className={`px-6 py-3 transition-colors duration-300 ${
                pathname === '/contact' ? 'bg-blue-100 text-blue-600' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'
              }`} onClick={closeMobileMenu}>
                Contact Us
              </Link>
              <div className="px-6 py-3 border-t border-gray-200">
                 <a href="https://shop.namariqgroup.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 mx-2 rounded-full font-semibold bg-primary text-white hover:bg-red-600 transition-colors duration-300" onClick={closeMobileMenu}>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Shop
              </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
