'use client'

import Link from 'next/link'
import Hero from '../components/Hero'
import { mockProducts, mockServices, mockClients, mockTestimonials } from '../lib/mockData'

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockProducts.map((product) => (
              <div key={product.id} className="product-card-modern group"style={{ backgroundImage: 'url(/images/Hire.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center" style={{ backgroundImage: 'url(/images/Hire.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <span className="text-3xl">{product.icon}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center" >{product.title}</h3>
                <p className="mb-6 text-center text-blue-100">{product.shortDesc}</p>
                <div className="text-center">
                  <Link href="/products" className="text-blue-200 hover:text-white font-medium transition-colors duration-300 group-hover:text-white">
                    View Products →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="section-padding bg-gradient-to-br from-white to-gray-50"style={{ backgroundImage: 'url(/images/Hire.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 text-gradient">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockServices.map((service) => (
              <div key={service.id} className="service-card-modern group">
                <div className="icon-container group-hover:animate-glow">
                  <span className="text-4xl text-white">{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.summary}</p>
              </div>
            ))}
          </div>
        </div>
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
      <section className="section-padding bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 text-gradient">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mockTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card group">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4 shadow-glow">
                    <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
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
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-modern relative" style={{ backgroundImage: 'url(/images/Hire.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shadow">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white text-opacity-90 leading-relaxed">
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
