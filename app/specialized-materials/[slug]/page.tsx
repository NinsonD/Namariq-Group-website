'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { mockSpecializedMaterials } from '../../../lib/mockData'

interface SpecializedMaterialDetailPageProps {
  params: {
    slug: string
  }
}

export default function SpecializedMaterialDetailPage({ params }: SpecializedMaterialDetailPageProps) {
  const { t } = useTranslation('common')
  const [activeTab, setActiveTab] = useState('overview')

  // Find the material by slug
  const material = mockSpecializedMaterials.find(m => m.slug === params.slug)

  if (!material) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Material Not Found</h1>
        <p className="text-gray-600 mb-8">The specialized material you're looking for doesn't exist.</p>
        <Link
          href="/specialized-materials"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-300"
        >
          Back to Specialized Materials
        </Link>
      </div>
    )
  }

  const materialDetails = {
    'fire-resistant-panels': {
      description: 'Advanced fire protection materials engineered for superior safety and performance in construction applications.',
      technicalSpecs: [
        { label: 'Fire Rating', value: 'Class A (ASTM E84)' },
        { label: 'Thickness', value: '6mm - 25mm' },
        { label: 'Density', value: '650-850 kg/m³' },
        { label: 'Thermal Conductivity', value: '0.19 W/m·K' },
        { label: 'Moisture Content', value: '< 2%' }
      ],
      caseStudies: [
        {
          title: 'Dubai Mall Fire Protection System',
          description: 'Installed fire-resistant panels throughout the shopping complex, providing 2-hour fire rating protection.',
          results: ['Zero fire incidents', 'Enhanced safety compliance', 'Improved insurance ratings']
        },
        {
          title: 'Abu Dhabi Airport Expansion',
          description: 'Supplied specialized fire panels for the new terminal construction, meeting international aviation standards.',
          results: ['FST compliance achieved', 'Reduced installation time by 30%', 'Cost savings of 15%']
        }
      ],
      applications: [
        {
          sector: 'Commercial Buildings',
          details: 'Office complexes, shopping centers, hotels',
          benefits: ['Enhanced occupant safety', 'Regulatory compliance', 'Insurance cost reduction']
        },
        {
          sector: 'Industrial Facilities',
          details: 'Manufacturing plants, warehouses, chemical processing',
          benefits: ['Fire containment', 'Equipment protection', 'Business continuity']
        },
        {
          sector: 'Residential Complexes',
          details: 'High-rise apartments, condominiums, mixed-use developments',
          benefits: ['Life safety', 'Property protection', 'Peace of mind']
        }
      ]
    },
    'thermal-insulation-boards': {
      description: 'High-performance thermal insulation solutions designed for energy efficiency and temperature control.',
      technicalSpecs: [
        { label: 'Thermal Resistance', value: 'R-4.0 to R-8.0' },
        { label: 'Compressive Strength', value: '≥ 100 kPa' },
        { label: 'Water Absorption', value: '< 5%' },
        { label: 'Operating Temperature', value: '-50°C to +110°C' },
        { label: 'Service Life', value: '50+ years' }
      ],
      caseStudies: [
        {
          title: 'Cold Storage Facility - Dubai',
          description: 'Implemented advanced thermal insulation for a 10,000 sqm cold storage warehouse.',
          results: ['Energy savings of 40%', 'Temperature stability ±0.5°C', 'ROI achieved in 18 months']
        },
        {
          title: 'Green Building Certification Project',
          description: 'Supplied insulation materials for LEED Platinum certified office building.',
          results: ['LEED points achieved', 'Energy efficiency rating A+', 'Carbon footprint reduced by 35%']
        }
      ],
      applications: [
        {
          sector: 'Roofing Systems',
          details: 'Flat roofs, pitched roofs, green roofs',
          benefits: ['Heat reduction', 'Energy savings', 'Extended roof life']
        },
        {
          sector: 'Wall Insulation',
          details: 'External walls, internal partitions, curtain walls',
          benefits: ['Thermal comfort', 'Sound insulation', 'Moisture control']
        },
        {
          sector: 'Cold Storage',
          details: 'Refrigerated warehouses, food processing, pharmaceuticals',
          benefits: ['Temperature maintenance', 'Energy efficiency', 'Product safety']
        }
      ]
    },
    'acoustic-panels': {
      description: 'Sound-absorbing panels engineered for superior noise control and acoustic performance.',
      technicalSpecs: [
        { label: 'NRC Rating', value: '0.85 - 0.95' },
        { label: 'Sound Absorption', value: '125Hz - 4000Hz' },
        { label: 'Fire Rating', value: 'Class A' },
        { label: 'Humidity Resistance', value: '95% RH' },
        { label: 'Light Reflectance', value: '85%' }
      ],
      caseStudies: [
        {
          title: 'Dubai Opera House Acoustics',
          description: 'Installed custom acoustic panels for optimal sound quality in the performing arts venue.',
          results: ['Perfect reverberation time', 'Enhanced sound clarity', 'Acoustic excellence award']
        },
        {
          title: 'Corporate Headquarters Open Office',
          description: 'Designed acoustic solution for 500-person open office space reducing noise by 60%.',
          results: ['Productivity increase 25%', 'Employee satisfaction improved', 'Absenteeism reduced']
        }
      ],
      applications: [
        {
          sector: 'Auditoriums',
          details: 'Concert halls, theaters, lecture rooms',
          benefits: ['Sound quality optimization', 'Speech intelligibility', 'Audience experience']
        },
        {
          sector: 'Offices',
          details: 'Open plan offices, meeting rooms, call centers',
          benefits: ['Noise reduction', 'Privacy enhancement', 'Concentration improvement']
        },
        {
          sector: 'Educational Facilities',
          details: 'Classrooms, libraries, laboratories',
          benefits: ['Learning environment', 'Acoustic comfort', 'Regulatory compliance']
        }
      ]
    },
    'waterproofing-membranes': {
      description: 'Premium waterproofing solutions engineered for long-term protection against water ingress.',
      technicalSpecs: [
        { label: 'Tensile Strength', value: '≥ 500 N/50mm' },
        { label: 'Elongation', value: '≥ 400%' },
        { label: 'Water Permeability', value: '0.001 g/m²·24h' },
        { label: 'UV Resistance', value: '5000 hours' },
        { label: 'Service Temperature', value: '-30°C to +80°C' }
      ],
      caseStudies: [
        {
          title: 'Burj Khalifa Waterproofing System',
          description: 'Supplied advanced waterproofing membranes for the world\'s tallest building.',
          results: ['Zero water ingress', '50-year warranty', 'International recognition']
        },
        {
          title: 'Metro Station Rehabilitation',
          description: 'Complete waterproofing renovation of underground metro stations in Abu Dhabi.',
          results: ['Waterproof integrity restored', 'Service life extended 30 years', 'Maintenance costs reduced 70%']
        }
      ],
      applications: [
        {
          sector: 'Roofing',
          details: 'Flat roofs, terraces, balconies',
          benefits: ['Water protection', 'UV stability', 'Long service life']
        },
        {
          sector: 'Basements',
          details: 'Below-grade structures, parking garages, foundations',
          benefits: ['Moisture control', 'Structural protection', 'Indoor air quality']
        },
        {
          sector: 'Tunnels',
          details: 'Road tunnels, metro systems, utility tunnels',
          benefits: ['Water exclusion', 'Corrosion prevention', 'Structural integrity']
        }
      ]
    },
    'corrosion-resistant-coatings': {
      description: 'Advanced protective coatings engineered for superior corrosion resistance in harsh environments.',
      technicalSpecs: [
        { label: 'Dry Film Thickness', value: '200-500 μm' },
        { label: 'Adhesion Strength', value: '≥ 10 MPa' },
        { label: 'Salt Spray Resistance', value: '5000+ hours' },
        { label: 'Chemical Resistance', value: 'Excellent' },
        { label: 'Abrasion Resistance', value: 'High' }
      ],
      caseStudies: [
        {
          title: 'Oil Platform Protection - Persian Gulf',
          description: 'Applied corrosion-resistant coatings to offshore oil platform extending service life by 15 years.',
          results: ['Corrosion rate reduced 95%', 'Maintenance intervals extended', 'Cost savings of $2M annually']
        },
        {
          title: 'Chemical Processing Plant',
          description: 'Complete coating system for corrosive environment in chemical manufacturing facility.',
          results: ['Zero corrosion failures', 'Equipment life extended', 'Safety compliance maintained']
        }
      ],
      applications: [
        {
          sector: 'Oil & Gas',
          details: 'Platforms, pipelines, refineries, storage tanks',
          benefits: ['Corrosion protection', 'Extended asset life', 'Safety enhancement']
        },
        {
          sector: 'Marine Structures',
          details: 'Ships, offshore platforms, harbor facilities',
          benefits: ['Saltwater resistance', 'Biofouling prevention', 'Structural integrity']
        },
        {
          sector: 'Industrial Equipment',
          details: 'Processing equipment, storage vessels, structural steel',
          benefits: ['Chemical resistance', 'Wear protection', 'Maintenance reduction']
        }
      ]
    },
    'high-strength-concrete-admixtures': {
      description: 'Specialized concrete admixtures engineered for superior strength, durability, and performance.',
      technicalSpecs: [
        { label: 'Compressive Strength', value: '80-120 MPa' },
        { label: 'Workability Retention', value: '2-4 hours' },
        { label: 'Slump Retention', value: '≥ 180mm' },
        { label: 'Air Content', value: '2-6%' },
        { label: 'Chloride Content', value: '< 0.1%' }
      ],
      caseStudies: [
        {
          title: 'Dubai Creek Tower Foundation',
          description: 'Supplied high-strength concrete admixtures for the world\'s tallest building foundation.',
          results: ['Strength achieved 110 MPa', 'Construction accelerated', 'Quality standards exceeded']
        },
        {
          title: 'Abu Dhabi Highway Project',
          description: 'High-performance concrete for 50km highway with extended service life requirements.',
          results: ['Durability increased 2x', 'Maintenance costs reduced', 'Sustainability improved']
        }
      ],
      applications: [
        {
          sector: 'High-rise Buildings',
          details: 'Skyscrapers, residential towers, mixed-use developments',
          benefits: ['Structural strength', 'Construction efficiency', 'Long-term durability']
        },
        {
          sector: 'Bridges',
          details: 'Highway bridges, railway bridges, pedestrian bridges',
          benefits: ['Load capacity', 'Crack resistance', 'Service life extension']
        },
        {
          sector: 'Precast Elements',
          details: 'Beams, columns, panels, foundations',
          benefits: ['Quality consistency', 'Production efficiency', 'Installation speed']
        }
      ]
    }
  }

  const details = materialDetails[material.slug as keyof typeof materialDetails]

  return (
    <div>
      {/* Breadcrumb */}
      {/* <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-purple-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/specialized-materials" className="hover:text-purple-600">Specialized Materials</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{material.title}</span>
          </nav>
        </div>
      </div> */}

      {/* Material Header */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-5xl font-bold">{material.title.charAt(0)}</span>
            </div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-sm bg-white bg-opacity-20 text-white px-3 py-1 rounded-full">
                {material.category}
              </span>
              {material.featured && (
                <span className="text-sm bg-orange-500 text-white px-3 py-1 rounded-full">
                  Featured
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{material.title}</h1>
            <p className="text-xl md:text-2xl mb-8">{details.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                Request Technical Data
              </button>
              <a
                href="https://wa.me/971501234567"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300 transform hover:scale-105"
              >
                Technical Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Material Details Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex justify-center border-b border-gray-200 mb-12">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'specifications', label: 'Specifications' },
              { id: 'applications', label: 'Applications' },
              { id: 'case-studies', label: 'Case Studies' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 font-medium text-lg border-b-2 transition-colors duration-300 ${
                  activeTab === tab.id
                    ? 'border-purple-500 text-purple-600'
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
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Material Overview</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-lg text-gray-600 mb-6">
                      {details.description}
                    </p>
                    <p className="text-lg text-gray-600 mb-8">
                      Our specialized materials are engineered using cutting-edge technology and undergo rigorous testing
                      to ensure they meet the highest industry standards and performance requirements.
                    </p>
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Benefits</h3>
                      <ul className="text-left space-y-2">
                        <li className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Superior performance characteristics
                        </li>
                        <li className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Internationally certified quality
                        </li>
                        <li className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Long-term reliability
                        </li>
                        <li className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Sustainable and eco-friendly
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gray-200 p-8 rounded-lg relative overflow-hidden">
                    <img
                      src="/images/Rock-wool.webp"
                      alt="Rock Wool Material"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="relative z-10 bg-black bg-opacity-40 p-8 rounded-lg">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                          <span className="text-white text-3xl font-bold">{material.title.charAt(0)}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Technical Excellence</h3>
                        <p className="text-white mb-6">
                          Engineered for demanding applications where performance and reliability are critical.
                        </p>
                        <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                          Download Technical Sheet
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Technical Specifications</h2>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      {details.technicalSpecs.map((spec, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-6 py-4 font-medium text-gray-800 border-b border-gray-200">
                            {spec.label}
                          </td>
                          <td className="px-6 py-4 text-gray-600 border-b border-gray-200">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Certifications */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Certifications & Compliance</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {material.certifications.map((cert, index) => (
                      <div key={index} className="bg-green-50 p-4 rounded-lg text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-gray-800 text-sm">{cert}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'applications' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Applications & Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {details.applications.map((app, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{app.sector}</h3>
                      <p className="text-gray-600 mb-4">{app.details}</p>
                      <h4 className="font-medium text-gray-800 mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {app.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <svg className="w-4 h-4 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'case-studies' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Case Studies & Success Stories</h2>
                <div className="space-y-8">
                  {details.caseStudies.map((study, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{study.title}</h3>
                      <p className="text-gray-600 mb-6">{study.description}</p>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-center text-gray-700">
                              <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Materials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Related Specialized Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {mockSpecializedMaterials.filter(m => m.id !== material.id && m.category === material.category).slice(0, 3).map((relatedMaterial) => (
              <div key={relatedMaterial.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-32 bg-gray-200 flex items-center justify-center relative overflow-hidden mb-4">
                  <img
                    src="/images/Rock-wool.webp"
                    alt="Rock Wool Material"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{relatedMaterial.title.charAt(0)}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{relatedMaterial.title}</h3>
                <p className="text-gray-600 mb-4">{relatedMaterial.shortDesc}</p>
                <Link
                  href={`/specialized-materials/${relatedMaterial.slug}`}
                  className="inline-block bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Specialized Solutions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our technical experts can help you select the right specialized materials for your specific project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Get Technical Consultation
            </Link>
            <a
              href="https://wa.me/971501234567"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300 transform hover:scale-105"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
