'use client'

import { useTranslation } from 'react-i18next'

import DivisionCard from '../../components/cards/DivisionCard'

export default function OurDivisions() {
  const { t } = useTranslation('common')

  const divisions = [
    {
      name: 'Building Materials Division',
      description: 'The foundation of our group, Al Namariq Building Materials Trading, supplies a wide range of construction and interior finishing products to the UAE\'s leading contractors, consultants, and retailers.',
      image: '/Divisions/BuildingMaterials.png',
      services: ['Gypsum & Cement Boards', 'Ceiling Systems & Tiles', 'Channels & Profiles', 'Accessories'],
      color: 'bg-blue-500'
    },
    {
      name: 'Skyline Décor',
      description: 'Established in 1995, Skyline Décor is a leading name in interior cladding, false ceiling, and partition systems across the UAE.',
      image: '/Divisions/Skyline.png',
      services: ['Decorative False Ceilings', 'Acoustic Ceiling Panels', 'Metal & Wooden Ceiling Systems', 'Fire-rated Drywall Partitions'],
      color: 'bg-green-500'
    },
    {
      name: 'Insulation Division' ,
      description: 'We deliver high-performance thermal and acoustic insulation materials to improve comfort, safety, and energy efficiency.',
      image: '/Divisions/InsulationDivision.png',
      services: ['Rockwool Insulation', 'Glass Wool Insulation', 'Phenolic Foam Insulation', 'Installation Services'],
      color: 'bg-orange-500'
    },
    {
      name: 'Water Pump Division',
      description: 'Valeri Water Pump is our own brand, developed with cutting-edge European technology to meet the UAE\'s infrastructure standards.',
      image: '/Divisions/PumpDivision.png',
      services: ['Residential Pumps', 'Commercial Pumps', 'Industrial Pumps', 'Pump Service & Maintenance'],
      color: 'bg-purple-500'
    },
    {
      name: 'Carewell Clinics',
      description: 'Located in JVC Dubai, Carewell Clinics deliver excellence in aesthetic dermatology, dentistry, and wellness care.',
      image: '/Divisions/Carewell.png',
      services: ['Aesthetic Dermatology', 'Dentistry', 'Wellness Care', 'Medical Consultations'],
      color: 'bg-red-500'
    },
    {
      name: 'Al Namariq IT Solutions',
      description: 'Providing ERPNext, POS, and digital transformation solutions. We build smarter business systems, automation, and AI-based marketing tools.',
      image: '/Divisions/IT.png',
      services: ['ERPNext Implementation', 'POS Systems', 'Digital Transformation', 'AI Marketing Tools'],
      color: 'bg-teal-500'
    }
  ]

  return (
    <div>

      {/* Hero Section */}
      <section className="relative text-white py-32" style={{ backgroundImage: 'url(/images/Hero2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6"style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Our Divisions</h1>
            <p className="text-xl md:text-2xl mb-8"style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
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



      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white relative" style={{ backgroundImage: 'url(/images/footer3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4"style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Ready to Work with Our Divisions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto"style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
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
