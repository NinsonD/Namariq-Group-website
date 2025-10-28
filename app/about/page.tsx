'use client'

import { useTranslation } from 'react-i18next'
import Link from 'next/link'
// import Breadcrumbs from '../../components/Breadcrumbs'

const timelineEvents = [
  {
    year: '2010',
    title: 'Company Founded',
    description: 'Al Namariq Group of Companies was established with a vision to provide exceptional construction materials and services.',
  },
  {
    year: '2015',
    title: 'Expansion',
    description: 'Expanded operations across the UAE with multiple branches and increased product portfolio.',
  },
  {
    year: '2018',
    title: 'Specialized Materials Division',
    description: 'Launched specialized materials division focusing on advanced construction solutions.',
  },
  {
    year: '2020',
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

const certifications = [
  { name: 'ISO 9001', image: '/certifications/iso9001.png' },
  { name: 'ISO 14001', image: '/certifications/iso9001.png' },
  { name: 'OHSAS 18001', image: '/certifications/iso9001.png' },
  { name: 'CE Mark', image: '/certifications/iso9001.png' },
  { name: 'UAE Standards', image: '/certifications/iso9001.png' },
  { name: 'GCC Accreditation', image: '../public/certifications/iso9001.png' },
]

export default function About() {
  const { t } = useTranslation('common')

  return (
    <div>
      {/* <Breadcrumbs items={[]} currentPage="About Us" /> */}
      {/* Hero Section */}
      <section className="relative text-white py-32" style={{ backgroundImage: 'url(/images/Hire.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">About Al Namariq Group of Companies</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Established in the United Arab Emirates, Al Namariq Group has evolved into a multi-division enterprise with strong foundations in construction materials trading, interior contracting, insulation systems, pumping solutions, IT technology, and healthcare services.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        {/* Mission */}
        <div className="responsive-container-block bigContainer">
          <div className="responsive-container-block Container">
            <img className="mainImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eaboutus1.svg" />
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
            <img className="mainImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/xpraup2.svg" />
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

      {/* Timeline */}
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

      {/* Team */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">{member.name.charAt(0)}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.department}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Certifications & Accreditations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800">{cert.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r text-white" style={{ backgroundImage: 'url(/images/Hire.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
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
