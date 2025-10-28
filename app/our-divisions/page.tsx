'use client'

import { useTranslation } from 'react-i18next'
// import Breadcrumbs from '../../components/Breadcrumbs'
import DivisionCard from '../../components/cards/DivisionCard'

export default function OurDivisions() {
  const { t } = useTranslation('common')

  const divisions = [
    {
      name: 'Building Materials Trading',
      description: 'The foundation of our group, Al Namariq Building Materials Trading, supplies a wide range of construction and interior finishing products to the UAE\'s leading contractors, consultants, and retailers.',
      icon: '🏗️',
      services: ['Gypsum & Cement Boards', 'Ceiling Systems & Tiles', 'Channels & Profiles', 'Accessories'],
      color: 'bg-blue-500'
    },
    {
      name: 'Skyline Décor',
      description: 'Established in 1995, Skyline Décor is a leading name in interior cladding, false ceiling, and partition systems across the UAE.',
      icon: '🔧',
      services: ['Decorative False Ceilings', 'Acoustic Ceiling Panels', 'Metal & Wooden Ceiling Systems', 'Fire-rated Drywall Partitions'],
      color: 'bg-green-500'
    },
    {
      name: 'Insulation Division' ,
      description: 'We deliver high-performance thermal and acoustic insulation materials to improve comfort, safety, and energy efficiency.',
      icon: '📋',
      services: ['Rockwool Insulation', 'Glass Wool Insulation', 'Phenolic Foam Insulation', 'Installation Services'],
      color: 'bg-orange-500'
    },                                                                                                                                                                            
    {
      name: 'Water Pump Division',
      description: 'Valeri Water Pump is our own brand, developed with cutting-edge European technology to meet the UAE\'s infrastructure standards.',
      icon: '💧',
      services: ['Residential Pumps', 'Commercial Pumps', 'Industrial Pumps', 'Pump Service & Maintenance'],
      color: 'bg-purple-500'
    },
    {
      name: 'Carewell Clinics',
      description: 'Located in JVC Dubai, Carewell Clinics deliver excellence in aesthetic dermatology, dentistry, and wellness care.',
      icon: '🏥',
      services: ['Aesthetic Dermatology', 'Dentistry', 'Wellness Care', 'Medical Consultations'],
      color: 'bg-red-500'
    },
    {
      name: 'Namariq IT Solutions',
      description: 'Providing ERPNext, POS, and digital transformation solutions. We build smarter business systems, automation, and AI-based marketing tools.',
      icon: '💻',
      services: ['ERPNext Implementation', 'POS Systems', 'Digital Transformation', 'AI Marketing Tools'],
      color: 'bg-teal-500'
    }
  ]

  return (
    <div>
      {/* <Breadcrumbs items={[]} currentPage="Our Divisions" /> */}
      {/* Hero Section */}
      <section className="relative text-white py-32" style={{ backgroundImage: 'url(/images/Hire.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Divisions</h1>
            <p className="text-xl md:text-2xl mb-8">
              Operating through 7 branches across the UAE, Al Namariq stands as a symbol of innovation, service excellence, and customer trust in both the construction and technology sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#divisions"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Explore Divisions
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Grid */}
      <section id="divisions" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Specialized Divisions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Al Namariq Group of Companies operates through multiple specialized divisions, each focused on delivering excellence in their respective fields.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {divisions.map((division, index) => (
              <DivisionCard key={index} division={division} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Divisions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Divisions?</h2>
              <p className="text-lg text-gray-600">
                Each division brings specialized expertise and comprehensive solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Expertise</h3>
                <p className="text-gray-600 text-sm">Specialized knowledge in each field</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality</h3>
                <p className="text-gray-600 text-sm">Premium products and services</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Efficiency</h3>
                <p className="text-gray-600 text-sm">Streamlined processes and delivery</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Reliability</h3>
                <p className="text-gray-600 text-sm">Trusted partner for your projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white" style={{ backgroundImage: 'url(/images/Hire.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Our Divisions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our specialized divisions can support your construction project needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us
            </a>
            <a
              href="https://wa.me/971501234567"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
