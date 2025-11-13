import Link from 'next/link'
import Image from 'next/image'

interface ServiceCardProps {
  service: {
    id: number
    title: string
    summary: string
    image: string
    slug: string
    features: string[]
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer">
      <div className="flex-1">
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <Image src="/src/logo/nbm.png" alt="NBM logo" width={80} height={80} className="object-contain" priority={false} />
          </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
        <p className="text-gray-600">{service.summary}</p>
      </div>
    </div>
  )
}
