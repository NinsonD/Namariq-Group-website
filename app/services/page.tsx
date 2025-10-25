'use client'

import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { mockServices } from '../../lib/mockData'
// import Breadcrumbs from '../../components/Breadcrumbs'
import ServiceCard from '../../components/cards/ServiceCard'

const serviceDetails = {
  'Construction Supplies': {
    description: 'We provide comprehensive construction materials and supplies, ensuring timely delivery and quality assurance for all your project needs.',
    process: [
      'Project assessment and requirements analysis',
      'Material selection and procurement',
      'Quality control and testing',
      'Logistics and timely delivery',
      'On-site support and technical assistance'
    ],
    features: [
      'Wide range of construction materials',
      'Quality assurance and certifications',
      'Competitive pricing',
      'Reliable supply chain',
      'Technical support'
    ]
  },
  'Technical Support': {
    description: 'Our expert technical team provides comprehensive support for material selection, application guidance, and troubleshooting.',
    process: [
      'Initial consultation and needs assessment',
      'Technical specifications review',
      'Material recommendations',
      'Application guidance',
      'Ongoing support and follow-up'
    ],
    features: [
      'Expert technical consultation',
      'Material compatibility analysis',
      'Application best practices',
      'Troubleshooting assistance',
      'Training and workshops'
    ]
  },
  'Project Management': {
    description: 'End-to-end project management services ensuring smooth execution from planning to completion.',
    process: [
      'Project planning and scheduling',
      'Resource allocation and procurement',
      'Quality control and monitoring',
      'Risk management',
      'Project completion and handover'
    ],
    features: [
      'Comprehensive project planning',
      'Resource optimization',
      'Quality assurance',
      'Risk mitigation',
      'Progress reporting'
    ]
  }
}

export default function Services() {
  const { t } = useTranslation('common')

  return (
    <div>
      {/* <Breadcrumbs items={[]} currentPage="Services" /> */}
      {/* Hero Section */}
      <section className="relative text-white py-32" style={{ backgroundImage: 'url(/images/hero1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Comprehensive construction solutions and expert support services tailored to meet your project requirements.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From material supply to technical expertise, we provide end-to-end solutions for your construction projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Our Services?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Expertise</h3>
              <p className="text-gray-600">Years of industry experience and technical knowledge</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality</h3>
              <p className="text-gray-600">Premium materials and superior service quality</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Reliability</h3>
              <p className="text-gray-600">Consistent delivery and dependable service</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">Cutting-edge solutions and modern approaches</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to ensure project success from start to finish.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: '01', title: 'Consultation', desc: 'Understanding your project requirements' },
                { step: '02', title: 'Planning', desc: 'Developing comprehensive project plans' },
                { step: '03', title: 'Execution', desc: 'Implementing solutions with precision' },
                { step: '04', title: 'Quality Control', desc: 'Ensuring standards are met' },
                { step: '05', title: 'Support', desc: 'Ongoing assistance and maintenance' }
              ].map((item, index) => (
                <div key={item.step} className="text-center relative">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-200 transform -translate-x-8"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our experts today to discuss your project requirements and discover how our services can help you succeed.
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
