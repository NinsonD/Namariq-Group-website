'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const downloadItems = [
  {
    id: 1,
    title: 'Company Catalog 2024',
    description: 'Complete catalog of our building materials and construction solutions',
    category: 'Catalogs',
    fileSize: '5.2 MB',
    fileType: 'PDF',
    downloadUrl: '/downloads/company-catalog-2024.pdf',
  },
  {
    id: 2,
    title: 'Product Brochure - Insulation',
    description: 'Detailed brochure on our insulation materials and applications',
    category: 'Brochures',
    fileSize: '2.8 MB',
    fileType: 'PDF',
    downloadUrl: '/downloads/insulation-brochure.pdf',
  },
  {
    id: 3,
    title: 'Technical Specifications - Water Pumps',
    description: 'Technical specifications and installation guide for water pump systems',
    category: 'Technical Docs',
    fileSize: '1.5 MB',
    fileType: 'PDF',
    downloadUrl: '/downloads/water-pumps-specs.pdf',
  },
  {
    id: 4,
    title: 'IT Solutions Overview',
    description: 'Overview of our IT services and digital transformation solutions',
    category: 'Brochures',
    fileSize: '3.1 MB',
    fileType: 'PDF',
    downloadUrl: '/downloads/it-solutions-overview.pdf',
  },
  {
    id: 5,
    title: 'Medical Services Catalog',
    description: 'Comprehensive catalog of our medical equipment and services',
    category: 'Catalogs',
    fileSize: '4.7 MB',
    fileType: 'PDF',
    downloadUrl: '/downloads/medical-services-catalog.pdf',
  },
  {
    id: 6,
    title: 'Safety Data Sheets',
    description: 'Collection of safety data sheets for all our products',
    category: 'Technical Docs',
    fileSize: '8.3 MB',
    fileType: 'ZIP',
    downloadUrl: '/downloads/safety-data-sheets.zip',
  },
]

const categories = ['All', 'Catalogs', 'Brochures', 'Technical Docs']

export default function Downloads() {
  const { t } = useTranslation('common')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredItems = selectedCategory === 'All'
    ? downloadItems
    : downloadItems.filter(item => item.category === selectedCategory)

  const handleDownload = (url: string, title: string) => {
    // In a real application, this would trigger the actual download
    console.log(`Downloading: ${title} from ${url}`)
    // For demo purposes, we'll just log it
    alert(`Download started: ${title}`)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Downloads</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Access our latest catalogs, brochures, and technical documentation to learn more about our products and services.
          </p>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Browse Downloads</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Downloads Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.category === 'Catalogs' ? 'bg-blue-100 text-blue-800' :
                      item.category === 'Brochures' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">{item.fileType} • {item.fileSize}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button
                    onClick={() => handleDownload(item.downloadUrl, item.title)}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No downloads found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Need Help?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Contact our team for personalized assistance and custom documentation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}
