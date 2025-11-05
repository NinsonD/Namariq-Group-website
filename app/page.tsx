'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '../components/Hero'
import ProductsSlider from '../components/ProductsSlider'
import ServicesSlider from '../components/ServicesSlider'
import TestimonialsCarousel from '../components/TestimonialsCarousel'
import { mockProducts, mockClients, mockTestimonials } from '../lib/mockData'

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

export default function Home() {
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // GSAP animations for Services section
    if (servicesRef.current) {
      const serviceCards = servicesRef.current.querySelectorAll('.service-card-modern')

      gsap.fromTo(serviceCards,
        {
          opacity: 0,
          x: -50,
          rotationY: -90
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Add floating animation to icons
      serviceCards.forEach((card) => {
        const icon = card.querySelector('.icon-container')

        gsap.to(icon, {
          y: -10,
          duration: 2,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
          delay: Math.random() * 2
        })
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
      <section className="section-padding bg-pattern-dots">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-gradient">About Al Namariq Group of Companies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Established in the United Arab Emirates, Al Namariq Group has evolved into a multi-division enterprise with strong foundations in construction materials trading, interior contracting, insulation systems, pumping solutions, IT technology, and healthcare services.
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              href="/about"
              className="btn-primary transform hover:scale-110 transition-all duration-300 shadow-glow"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Products Spotlight */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 text-gradient">Our Products</h2>
          <ProductsSlider />
        </div>
      </section>

      {/* Services Highlights */}
      <section className="section-padding bg-gradient-to-br from-white to-gray-50" style={{ backgroundImage: 'url(/images/Hire.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 text-gradient">Our Services</h2>
        </div>
        <ServicesSlider />
      </section>  

      {/* Specialized Materials Teaser */}
      {/* <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 text-gradient">Specialized Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockSpecializedMaterials.map((material) => (
              <div key={material.id} className="card-gradient bg-gradient-to-br from-purple-500 to-pink-600 group">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🔥</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">{material.title}</h3>
                <p className="mb-6 text-center text-purple-100">{material.shortDesc}</p>
                <div className="text-center">
                  <Link href="/specialized-materials" className="text-purple-200 hover:text-white font-medium transition-colors duration-300 group-hover:text-white">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Clients Strip */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12 text-gradient">Trusted by Leading Companies</h2>
        </div>
          <div className="logos">
            <div className="logo_items">
              {[
                '/src/brands/Anchor allied.png',
                '/src/brands/Ariston.png',
                '/src/brands/Bosch.png',
                '/src/brands/Davey.png',
                '/src/brands/Ebara.png',
                '/src/brands/ESPA.png',
                '/src/brands/grohe.png',
                '/src/brands/grundfos.png',
                '/src/brands/gyproc.png',
                '/src/brands/gypsemna.png',
                '/src/brands/Hilti.png',
                '/src/brands/KAJ.png',
                '/src/brands/Kanuf Danoline.png',
                '/src/brands/Kanuf.png',
                '/src/brands/Knauf Insolution.png',
                '/src/brands/Osip.png',
                '/src/brands/Rockfon.png',
                '/src/brands/Ruud.png',
                '/src/brands/Saudi Rock Wool.png',
                '/src/brands/Schneider.png',
                '/src/brands/Skyline.png',
                '/src/brands/Stanley.png',
                '/src/brands/USG ME.png',
                '/src/brands/Valeri.png',
                '/src/brands/Visaka.png'
              ].concat([
                '/src/brands/Anchor allied.png',
                '/src/brands/Ariston.png',
                '/src/brands/Bosch.png',
                '/src/brands/Davey.png',
                '/src/brands/Ebara.png',
                '/src/brands/ESPA.png',
                '/src/brands/grohe.png',
                '/src/brands/grundfos.png',
                '/src/brands/gyproc.png',
                '/src/brands/gypsemna.png',
                '/src/brands/Hilti.png',
                '/src/brands/KAJ.png',
                '/src/brands/Kanuf Danoline.png',
                '/src/brands/Kanuf.png',
                '/src/brands/Knauf Insolution.png',
                '/src/brands/Osip.png',
                '/src/brands/Rockfon.png',
                '/src/brands/Ruud.png',
                '/src/brands/Saudi Rock Wool.png',
                '/src/brands/Schneider.png',
                '/src/brands/Skyline.png',
                '/src/brands/Stanley.png',
                '/src/brands/USG ME.png',
                '/src/brands/Valeri.png',
                '/src/brands/Visaka.png'
              ]).concat([
                '/src/brands/Anchor allied.png',
                '/src/brands/Ariston.png',
                '/src/brands/Bosch.png',
                '/src/brands/Davey.png',
                '/src/brands/Ebara.png',
                '/src/brands/ESPA.png',
                '/src/brands/grohe.png',
                '/src/brands/grundfos.png',
                '/src/brands/gyproc.png',
                '/src/brands/gypsemna.png',
                '/src/brands/Hilti.png',
                '/src/brands/KAJ.png',
                '/src/brands/Kanuf Danoline.png',
                '/src/brands/Kanuf.png',
                '/src/brands/Knauf Insolution.png',
                '/src/brands/Osip.png',
                '/src/brands/Rockfon.png',
                '/src/brands/Ruud.png',
                '/src/brands/Saudi Rock Wool.png',
                '/src/brands/Schneider.png',
                '/src/brands/Skyline.png',
                '/src/brands/Stanley.png',
                '/src/brands/USG ME.png',
                '/src/brands/Valeri.png',
                '/src/brands/Visaka.png'
              ]).map((logo, index) => (
                <img
                  key={`${logo}-${index}`}
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                />
              ))}
            </div>
          </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* CTA Section */}
      <section className="cta-modern relative" style={{ backgroundImage: 'url(/images/footer.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shadow"style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white text-opacity-90 leading-relaxed"style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            Operating through 7 branches across the UAE, Al Namariq stands as a symbol of innovation, service excellence, and customer trust in both the construction and technology sectors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-glass transform hover:scale-110 transition-all duration-300 shadow-glow"
            >
              Get a Quote
            </Link>
            <a
              href="https://wa.me/971501234567"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 shadow-depth"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
