'use client'

import { useTranslation } from 'react-i18next'
import Link from 'next/link'


const timelineEvents = [
  {
    year: '1996',
    title: 'Company Founded',
    description: 'Al Namariq Group of Companies was established with a vision to provide exceptional construction materials and services.',
  },
  {
    year: '2005',
    title: 'Expansion',
    description: 'Expanded operations across the UAE with multiple branches and increased product portfolio.',
  },
  {
    year: '2010',
    title: 'Specialized Materials Division',
    description: 'Launched specialized materials division focusing on advanced construction solutions.',
  },
  {
    year: '2015',
    title: 'Digital Transformation',
    description: 'Implemented modern digital systems and online platforms for better customer service.',
  },
  {
    year: '2023',
    title: 'Innovation Center',
    description: 'Established research and development center for innovative construction solutions.',
  },
]

const teamMembers = [
  {
    name: 'Hari Prasad',
    role: 'MD & Founder',
    department: 'Executive',
    image: '/team/ahmed.jpg',
  },
  {
    name: 'Indhu Prasad',
    role: 'Operations Manager',
    department: 'Operations',
    image: '/team/ahmed.jpg',
  },
  {
    name: 'Chandhu Prasad',
    role: 'Sales Head',
    department: 'Sales',
    image: '/team/ahmed.jpg',
  },
] 

export default function About() {
  const { t } = useTranslation('common')

  return (
    <div>

      {/* Hero Section */}
  <section className="relative text-white py-32" style={{ backgroundImage: 'url(/images/hero1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6"style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>About Al Namariq Group of Companies</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            Established in the United Arab Emirates, Al Namariq Group has evolved into a multi-division enterprise with strong foundations in construction materials trading, interior contracting, insulation systems, pumping solutions, IT technology, and healthcare services.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        {/* Mission */}
        <div className="responsive-container-block bigContainer">
          <div className="responsive-container-block Container">
            <img className="mainImg" src="/images/mission.jpg" />
            <div className="allText aboveText">
              <p className="text-blk headingText">
                Our Mission
              </p>
              <p className="text-blk subHeadingText">
                To be the leading provider of comprehensive construction solutions in the UAE, delivering exceptional quality, innovation, and customer satisfaction across all our divisions.
              </p>
              <p className="text-blk description">
                We are committed to providing superior construction materials, specialized solutions, and professional services that exceed our clients' expectations while maintaining the highest standards of safety, sustainability, and ethical business practices.
              </p>
            </div>
          </div>
          <div className="responsive-container-block Container bottomContainer">
            <img className="mainImg" src="/images/vision.jpg" />
            <div className="allText bottomText">
              <p className="text-blk headingText">
                Our Vision
              </p>
              <p className="text-blk subHeadingText">
                To become the most trusted and innovative multi-sector enterprise in the Middle East, setting new standards in construction, technology, and healthcare industries.
              </p>
              <p className="text-blk description">
                We envision a future where our comprehensive solutions drive sustainable development, technological advancement, and superior healthcare services, creating lasting value for our clients, partners, and communities across the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Time  line */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-600"></div>
            {timelineEvents.map((event, index) => (
              <div key={event.year} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8 md:pr-16' : 'pl-8 md:pl-16'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-blue-600 font-bold text-lg mb-2">{event.year}</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r text-white relative" style={{ backgroundImage: 'url(/images/footer2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4"style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Join Our Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            We're always looking for talented individuals to join our growing team. Explore career opportunities with Al Namariq Group of Companies.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
