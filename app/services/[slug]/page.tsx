    'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { mockServices } from '../../../lib/mockData'

interface ServiceDetailPageProps {
  params: {
    slug: string
  }
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { t } = useTranslation('common')
  const [activeTab, setActiveTab] = useState('overview')

  // Find the service by slug
  const service = mockServices.find(s => s.title.toLowerCase().replace(/\s+/g, '-') === params.slug)

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
        <Link
          href="/services"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
        >
          Back to Services
        </Link>
      </div>
    )
  }

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
      ],
      faqs: [
        {
          question: 'What types of construction materials do you supply?',
          answer: 'We supply a comprehensive range of materials including gypsum boards, cement, steel, concrete, and specialized construction products.'
        },
        {
          question: 'Do you provide delivery services?',
          answer: 'Yes, we offer reliable logistics and timely delivery services to ensure your materials arrive on schedule.'
        },
        {
          question: 'Can you help with material selection?',
          answer: 'Absolutely! Our technical experts provide consultation to help you select the right materials for your specific project requirements.'
        }
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
      ],
      faqs: [
        {
          question: 'What kind of technical support do you offer?',
          answer: 'We provide material selection guidance, application recommendations, troubleshooting, and on-site technical assistance.'
        },
        {
          question: 'Do you offer training for your products?',
          answer: 'Yes, we conduct training workshops and provide detailed documentation for proper material application and usage.'
        },
        {
          question: 'How quickly can I get technical assistance?',
          answer: 'Our technical support team responds within 24 hours and provides urgent assistance for critical project needs.'
        }
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
      ],
      faqs: [
        {
          question: 'What size projects do you manage?',
          answer: 'We manage projects of all sizes, from small renovations to large-scale construction projects.'
        },
        {
          question: 'Do you provide progress reporting?',
          answer: 'Yes, we provide regular progress reports, milestone updates, and comprehensive project documentation.'
        },
        {
          question: 'How do you handle project risks?',
          answer: 'We implement comprehensive risk management strategies, including contingency planning and proactive issue resolution.'
        }
      ]
    }
  }

  const details = serviceDetails[service.title as keyof typeof serviceDetails]

  return (
    <div>
      {/* Breadcrumb */}
      {/* <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-blue-600">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{service.title}</span>
          </nav>
        </div>
      </div> */}

      {/* Service Header */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-5xl">{service.icon}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl md:text-2xl mb-8">{details.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                Get Started
              </button>
              <a
                href="https://wa.me/971501234567"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex justify-center border-b border-gray-200 mb-12">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'process', label: 'Process' },
              { id: 'features', label: 'Features' },
              { id: 'faqs', label: 'FAQs' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 font-medium text-lg border-b-2 transition-colors duration-300 ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-6xl mx-auto">
            {activeTab === 'overview' && (
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Service Overview</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-lg text-gray-600 mb-6">
                      {details.description}
                    </p>
                    <p className="text-lg text-gray-600 mb-8">
                      Our experienced team ensures that every aspect of your project is handled with precision,
                      from initial consultation to final delivery. We combine industry expertise with cutting-edge
                      solutions to deliver exceptional results.
                    </p>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Our {service.title}?</h3>
                      <ul className="text-left space-y-2">
                        <li className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Proven track record of success
                        </li>
                        <li className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Dedicated project managers
                        </li>
                        <li className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Quality assurance guarantee
                        </li>
                        <li className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Competitive pricing
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-lg">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-white text-3xl">{service.icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Get Started?</h3>
                      <p className="text-gray-700 mb-6">
                        Contact our experts today to discuss how we can help with your {service.title.toLowerCase()} needs.
                      </p>
                      <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300">
                        Request Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'process' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Process</h2>
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {details.process.map((step, index) => (
                      <div key={index} className="text-center relative">
                        <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                          {index + 1}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Step {index + 1}</h3>
                        <p className="text-gray-600 text-sm">{step}</p>
                        {index < details.process.length - 1 && (
                          <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-green-200 transform -translate-x-8"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {details.features.map((feature, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature}</h3>
                      <p className="text-gray-600 text-sm">
                        Comprehensive support and expertise in all aspects of {service.title.toLowerCase()}.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'faqs' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto space-y-6">
                  {details.faqs.map((faq, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {mockServices.filter(s => s.id !== service.id).map((relatedService) => (
              <div key={relatedService.id} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-green-600 text-3xl">{relatedService.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{relatedService.title}</h3>
                <p className="text-gray-600 mb-6">{relatedService.summary}</p>
                <Link
                  href={`/services/${relatedService.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our experts today to discuss how our {service.title.toLowerCase()} can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Get a Quote
            </Link>
            <a
              href="https://wa.me/971501234567"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300 transform hover:scale-105"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
