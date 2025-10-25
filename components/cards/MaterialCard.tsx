import Link from 'next/link'

interface MaterialCardProps {
  material: {
    id: number
    title: string
    category: string
    shortDesc: string
    slug: string
    featured?: boolean
    applications?: string[]
    certifications?: string[]
  }
}

export default function MaterialCard({ material }: MaterialCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer">
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center relative overflow-hidden">
        <img
          src="/images/Rock-wool.webp"
          alt="Rock Wool Material"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <span className="text-white text-4xl font-bold">{material.title.charAt(0)}</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-purple-600 font-medium bg-purple-100 px-2 py-1 rounded">
            {material.category}
          </span>
          {material.featured && (
            <span className="text-xs text-orange-600 font-medium bg-orange-100 px-2 py-1 rounded">
              Featured
            </span>
          )}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{material.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{material.shortDesc}</p>

        {material.applications && material.applications.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">Applications:</h4>
            <div className="flex flex-wrap gap-1">
              {material.applications.slice(0, 3).map((app, index) => (
                <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  {app}
                </span>
              ))}
              {material.applications.length > 3 && (
                <span className="text-xs text-gray-500">+{material.applications.length - 3} more</span>
              )}
            </div>
          </div>
        )}

        {material.certifications && material.certifications.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">Certifications:</h4>
            <div className="flex flex-wrap gap-1">
              {material.certifications.slice(0, 2).map((cert, index) => (
                <span key={index} className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                  {cert}
                </span>
              ))}
              {material.certifications.length > 2 && (
                <span className="text-xs text-gray-500">+{material.certifications.length - 2} more</span>
              )}
            </div>
          </div>
        )}

        <div className="flex gap-2 mt-auto">
          <Link
            href={`/specialized-materials/${material.slug}`}
            className="flex-1 bg-purple-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-300"
          >
            View Details
          </Link>
          <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
