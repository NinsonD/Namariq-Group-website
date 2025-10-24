'use client'

import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between ">
        <Link href="/" className="flex items-center">
          <img
            src="/src/logo/main-logo.png"
            alt="Al Namariq Group of Companies Logo"
            className="h-20 w-auto"
          />
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About Us
          </Link>
          <Link href="/our-divisions" className="hover:text-blue-600">
            Our Divisions
          </Link>
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link href="/services" className="hover:text-blue-600">
            Services
          </Link>
          <Link href="/specialized-materials" className="hover:text-blue-600">
            Specialized Materials
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact Us
          </Link>
          <Link href="/downloads" className="hover:text-blue-600">
            Downloads
          </Link>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  )
}
