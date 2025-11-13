'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Al Namariq Group of Companies</h3>
            <p className="text-gray-300 text-sm">
              Leading provider of building materials, interior décor, insulation, water pump systems, IT solutions, and medical services across the UAE.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link href="/products" className="hover:text-blue-400">Products</Link></li>
              <li><Link href="/services" className="hover:text-blue-400">Services</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-blue-400">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Phone: +971 50 768 3230</li>
              <li>Email: info@namariqgroup.com</li>
              <li>Address: 24 Second Industrial Street, Industrial Area 2, Sharjah, UAE</li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/alnamariqgroup/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/namariqgroup/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.958a3.261 3.261 0 01-3.261 3.261H9.74a3.261 3.261 0 01-3.261-3.261V9.74a3.261 3.261 0 013.261-3.261h4.52a3.261 3.261 0 013.261 3.261v8.218zm-4.52-7.13a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88zm2.51.394a.36.36 0 110 .72.36.36 0 010-.72z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/al-namariq-group" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Al Namariq Group of Companies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
