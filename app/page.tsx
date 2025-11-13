'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '../components/Hero'
import ServicesSlider from '../components/ServicesSlider'
import TestimonialsCarousel from '../components/TestimonialsCarousel'
import { mockProducts, mockServices, mockTestimonials } from '../lib/mockData'
import { Service } from '../types/service'

gsap.registerPlugin(ScrollTrigger)

function ImpressiveProducts(): React.ReactElement {
  const [apiProducts, setApiProducts] = useState<any[]>([])
  const [apiLoaded, setApiLoaded] = useState(false)

  // load products from server to pick images from public/Products
  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        console.log('Fetching products from /api/products')
        const res = await fetch('/api/products')
        console.log('API response status:', res.status)
        if (!res.ok) {
          console.error('API request failed:', res.status, res.statusText)
          throw new Error('failed')
        }
        const data = await res.json()
        console.log('API response data:', data)
        if (!mounted) return
        setApiProducts(data.products || [])
      } catch (e) {
        console.error('Error fetching products:', e)
        setApiProducts([])
      } finally {
        setApiLoaded(true)
      }
    })()
    return () => { mounted = false }
  }, [])

  // build a category -> image map from apiProducts
  const categoryImageMap = apiProducts.reduce<Record<string, string>>((acc, cur) => {
    const cat = (cur.category || '').toString().toUpperCase()
    if (!acc[cat]) acc[cat] = cur.image
    return acc
  }, {})

  const featuredRaw = mockProducts.filter((p) => p.featured)
  // Build display categories (limit to first 6 mock categories)
  const displayCats = mockProducts.slice(0, 6).map((p) => ({
    id: p.id,
    title: p.title,
    category: p.category,
    slug: p.slug,
    image: categoryImageMap[p.category?.toString().toUpperCase()] || p.image,
    shortDesc: p.shortDesc,
  }))

  const [activeIdx, setActiveIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setActiveIdx((i) => (i + 1) % Math.max(displayCats.length, 1)), 4000)
    return () => clearInterval(t)
  }, [displayCats.length])

  const active = displayCats[activeIdx] || displayCats[0] || featuredRaw[0]
  const tilesGridRef = useRef<HTMLDivElement | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)
  const hoverRef = useRef<boolean>(false)

  // animate tiles on scroll/enter
  useEffect(() => {
    if (!tilesGridRef.current) return
    const tiles = Array.from(tilesGridRef.current.querySelectorAll('.impress-tile'))
    if (!tiles.length) return

    gsap.fromTo(
      tiles,
      { y: 24, opacity: 0, scale: 0.98 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current || tilesGridRef.current,
          start: 'top 80%'
        }
      }
    )
  }, [displayCats.length])

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 animate-gradient text-center">Our Products</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-2 rounded-lg overflow-hidden relative shadow-lg" style={{ minHeight: 420 }}>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${active.image})` }} />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-between text-white">
              <div>
                <div className="text-sm uppercase tracking-wide bg-white/10 inline-block px-3 py-1 rounded">{active.category}</div>
                <h3 className="text-3xl md:text-5xl font-bold mt-4 text-primary">{active.title}</h3>
                <p className="mt-4 max-w-2xl text-white/90">{active.shortDesc}</p>
              </div>

              <div className="flex gap-4">
                <Link href={`/products`} className="btn-primary text-white">View Products</Link>
              </div>
            </div>
          </div>

          <aside className="flex flex-col gap-4">
            <div ref={tilesGridRef} className="grid grid-cols-2 gap-4">
              {displayCats.map((cat, i) => (
                <Link
                  key={cat.id}
                  href={`/products?category=${encodeURIComponent(cat.category || '')}`}
                  className="impress-tile block rounded-md overflow-hidden relative h-32 shadow-md transform-gpu transition-transform will-change-transform hover:scale-105"
                  onMouseEnter={() => { setActiveIdx(i); hoverRef.current = true }}
                  onMouseLeave={() => { hoverRef.current = false }}
                  onFocus={() => { setActiveIdx(i); hoverRef.current = true }}
                  onBlur={() => { hoverRef.current = false }}
                >
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${cat.image})` }} />
                  <div className="absolute inset-0 bg-black/35" />
                  <div className="relative z-10 p-3 text-white text-sm font-semibold">{cat.title}</div>
                </Link>
              ))}
            </div>

          </aside>
        </div>
      </div>
      <style>{`
        .btn-primary{ background: linear-gradient(90deg,#0ea5a0,#06b6d4); padding:0.6rem 1.2rem; border-radius:999px; display:inline-block }
        .btn-outline{ border:1px solid rgba(255,255,255,0.18); padding:0.6rem 1.2rem; border-radius:999px; color:white }
      `}</style>
    </section>
  )
}

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
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 animate-gradient">About Al Namariq Group of Companies</h2>
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
        <ImpressiveProducts />

            <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 animate-gradient text-center">Trusted by Leading Companies</h2>
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

      {/* Services Showcase */}
      <section className="section-padding overflow-hidden" style={{ background: 'linear-gradient(165deg, #f8fafc 0%, #e2e8f0 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 animate-gradient">
              Our Services
            </h2>
            <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-teal-400"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions across construction, technology, and healthcare sectors
            </p>
          </div>
          <style jsx>{`
            @keyframes gradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            .animate-gradient {
              background-size: 200% auto;
              animation: gradient 4s ease infinite; 
            }
          `}</style>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockServices.map((service, idx) => (
              <div
                key={service.id}
                className="service-card group relative"
                style={{
                  perspective: '1500px',
                  height: '360px'
                }}
              >
                <div
                  className="absolute inset-0 rounded-2xl transform-gpu transition-transform duration-700 preserve-3d shadow-lg group-hover:shadow-xl will-change-transform"
                  style={{
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Front face */}
                  <div
                    className="absolute inset-0 flex flex-col p-8 rounded-2xl bg-white/90 backdrop-blur-sm"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden'
                    }}
                  >
                    <div className="mb-6 text-5xl animate-float">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-neutral-950 transform transition-all duration-300 group-hover:scale-105 group-hover:text-white">{service.title}</h3>
                    <p className="text-gray-600 flex-grow">{service.summary}</p>
                    <div className="mt-6">
                      <span className="text-sm font-semibold text-primary opacity-75">Hover to learn more →</span>
                    </div>
                  </div>

                  {/* Back face */}
                  <div
                    className="absolute inset-0 flex flex-col p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-white transform-gpu rotate-y-180"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div className="mb-6 text-5xl animate-float-reverse">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                    <ul className="space-y-3 text-gray-300 flex-grow list-inside list-disc">
                      {service.features?.slice(0, 3).map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center text-sm font-semibold text-white hover:text-primary-200"
                      >
                        Explore Service
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .service-card:hover .transform-gpu {
            transform: rotateY(180deg);
          }
          @media (hover: none) {
            .service-card .transform-gpu {
              transform: rotateY(0) !important;
            }
          }
          @media (prefers-reduced-motion) {
            .service-card .transform-gpu {
              transition-duration: 0s;
            }
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          @keyframes float-reverse {
            0% { transform: translateY(-10px); }
            50% { transform: translateY(0px); }
            100% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .animate-float-reverse {
            animation: float-reverse 3s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Specialized Materials section removed */}

      {/* Clients Strip */}

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
