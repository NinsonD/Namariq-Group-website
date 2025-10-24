import Link from 'next/link'

interface ServiceCardProps {
  service: {
    id: number
    title: string
    summary: string
    icon: string
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300">
      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-blue-600 text-4xl">{service.icon}</span>
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-6">{service.summary}</p>
      <Link
        href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
      >
        Learn More
      </Link>
    </div>
  )
}
