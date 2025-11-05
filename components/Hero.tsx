'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const slides = [
  {
    title: 'Al Namariq Group',
    subtitle: 'Established in the UAE, a multi-division enterprise specializing in construction materials trading, interior contracting, insulation systems, pumping solutions, IT technology, and healthcare services.',
    cta: 'Learn More About Us',
    ctaLink: '/about',
    image: '/images/hero1.jpg',
  },
  {
    title: 'Our Divisions',
    subtitle: 'Operating through 7 branches across the UAE, we provide comprehensive solutions in construction, technology, and healthcare sectors with strong foundations in innovation and customer trust.',
    cta: 'Explore Divisions',
    ctaLink: '/our-divisions',
    image: '/images/hero2.jpg',
  },
  {
    title: 'Products & Services',
    subtitle: 'From building materials trading to specialized solutions, we deliver quality and innovation across all our offerings including interior contracting, insulation systems, and pumping solutions.',
    cta: 'View Products',
    ctaLink: '/products',
    image: '/images/hero3.jpg',
  },
  {
    title: 'Specialized Materials',
    subtitle: 'Advanced fire resistant panels, thermal insulation boards, and waterproofing membranes engineered for superior performance, safety, and sustainability in demanding applications.',
    cta: 'Learn More',
    ctaLink: '/specialized-materials',
    image: '/images/hero4.jpg',
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-25"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white px-4 max-w-4xl mx-auto min-h-[400px] flex flex-col justify-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={slide.ctaLink}
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
                >
                  {slide.cta}
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 transform hover:scale-105"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-40 hover:bg-opacity-60 text-black p-3 rounded-full transition-all duration-300 border-2 border-white shadow-lg"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-40 hover:bg-opacity-60 text-black p-3 rounded-full transition-all duration-300 border-2 border-white shadow-lg"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 border-2 border-white shadow-lg ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce" style={{ filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.8))' }}>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
