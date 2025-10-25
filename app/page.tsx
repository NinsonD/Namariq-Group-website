'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '../components/Hero'
import { mockProducts, mockServices, mockClients, mockTestimonials } from '../lib/mockData'
import { generateSEO } from '../lib/seo'
import type { Metadata } from 'next'

gsap.registerPlugin(ScrollTrigger)

const mockSpecializedMaterials = [
  {
    id: 1,
    title: 'Fire Resistant Panels',
    shortDesc: 'Advanced fire protection materials for construction safety',
    category: 'Safety Materials',
  },
  {
    id: 2,
    title: 'Thermal Insulation Boards',
    shortDesc: 'High-performance thermal insulation for energy efficiency',
    category: 'Insulation',
  },
  {
    id: 3,
    title: 'Waterproofing Membranes',
    shortDesc: 'Premium waterproofing solutions for construction',
    category: 'Waterproofing',
  },
]

export const metadata: Metadata = generateSEO({
  title: 'Home',
  description: 'Welcome to Al Namariq Group of Companies - Your trusted partner for building materials, interior décor, insulation, water pump systems, IT solutions, and medical services across the UAE.',
  url: 'https://alnamariq.com',
})

export default function Home() {
  const aboutRef = useRef<HTMLElement>(null)
  const productsRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const materialsRef = useRef<HTMLElement>(null)
  const clientsRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // GSAP animations for scroll-triggered effects
    const sections = [
      { ref: aboutRef, delay: 0.1 },
      { ref: productsRef, delay: 0.2 },
      { ref: servicesRef, delay: 0.3 },
      { ref: materialsRef, delay: 0.4 },
      { ref: clientsRef, delay: 0.5 },
      { ref: testimonialsRef, delay: 0.6 },
      { ref: ctaRef, delay: 0.7 },
    ]

    sections.forEach(({ ref, delay }) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    })

    // Stagger animation for product cards
    if (productsRef.current) {
      const productCards = productsRef.current.querySelectorAll('.product-card')
      gsap.fromTo(
        productCards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: productsRef.current,
            start: 'top 80%',
          },
        }
      )
    }

    // Stagger animation for service cards
    if (servicesRef.current) {
      const serviceCards = servicesRef.current.querySelectorAll('.service-card')
      gsap.fromTo(
        serviceCards,
        { opacity: 0, scale: 0.8, rotation: -10 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
          },
        }
      )
    }

    // Floating animation for CTA buttons
    if (ctaRef.current) {
      const ctaButtons = ctaRef.current.querySelectorAll('a, button')
      gsap.to(ctaButtons, {
        y: 'random(-10, 10)',
        duration: 'random(2, 3)',
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div>
      <Hero />

      {/* About Teaser */}
      <section ref={aboutRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Al Namariq Group of Companies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Established in the United Arab Emirates, Al Namariq Group has evolved into a multi-division enterprise with strong foundations in construction materials trading, interior contracting, insulation systems, pumping solutions, IT technology, and healthcare services.
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              href="/about"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Products Spotlight */}
      <section ref={productsRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockProducts.map((product) => (
              <div key={product.id} className="product-card bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4">{product.title}</h3>
                <p className="mb-4">{product.shortDesc}</p>
                <Link href="/products" className="text-blue-200 hover:text-white font-medium">View Products →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section ref={servicesRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockServices.map((service) => (
              <div key={service.id} className="service-card text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-4xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Materials Teaser */}
      <section ref={materialsRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Specialized Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockSpecializedMaterials.map((material) => (
              <div key={material.id} className="bg-gradient-to-br from-purple-500 to-pink-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4">{material.title}</h3>
                <p className="mb-4">{material.shortDesc}</p>
                <Link href="/specialized-materials" className="text-purple-200 hover:text-white font-medium">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Strip */}
      <section ref={clientsRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">Trusted by Leading Companies</h2>
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {[
                '/src/brands/Ariston.png',
                '/src/brands/ESPA.png',
                '/src/brands/grohe.png',
                '/src/brands/grundfos.png',
                '/src/brands/gyproc.png',
                '/src/brands/gypsemna.png',
                '/src/brands/KAJ.png',
                '/src/brands/Kanuf Danoline.png',
                '/src/brands/Kanuf.png',
                '/src/brands/Rockfon.png',
                '/src/brands/Skyline.jpg',
                '/src/brands/USG ME.png',
                '/src/brands/Valeri.png'
              ].map((logo, index) => (
                <div key={`${logo}-${index}`} className="flex-shrink-0 w-32 h-16 mx-8 flex items-center justify-center bg-white rounded-lg shadow-md p-2">
                  <img
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section ref={testimonialsRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mockTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Operating through 7 branches across the UAE, Al Namariq stands as a symbol of innovation, service excellence, and customer trust in both the construction and technology sectors.
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
