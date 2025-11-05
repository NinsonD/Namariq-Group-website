'use client'

import Link from 'next/link'
import ProductSection from '../../components/ProductSection'

export default function Products() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-32" style={{ backgroundImage: 'url(/images/Hero3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6"style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Our Products</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            Discover our comprehensive range of high-quality construction materials and specialized solutions.
          </p>
        </div>
      </section>

      {/* Product Section */}
      <ProductSection />

      {/* CTA Section */}
      <section className="py-16 text-white relative" style={{ backgroundImage: 'url(/images/footer4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4"style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Need Custom Solutions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto"style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            Can't find what you're looking for? Contact our experts for custom material solutions tailored to your project needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Get a Quote
            </Link>
            <a
              href="https://wa.me/971501234567"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 transform hover:scale-105"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
