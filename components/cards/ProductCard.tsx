 import Link from 'next/link'

interface ProductCardProps {
  product: {
    id: number
    title: string
    category: string
    shortDesc: string
    slug: string
    featured?: boolean
    subcategories?: {
      title: string
      items: string[]
    }[]
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer">
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center relative overflow-hidden">
        <img
          src="/images/Rock-wool.webp"
          alt="Rock Wool Material"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <span className="text-white text-4xl font-bold">{product.title.charAt(0)}</span>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-blue-600 font-medium bg-blue-100 px-2 py-1 rounded">
              {product.category}
            </span>
            {product.featured && (
              <span className="text-xs text-orange-600 font-medium bg-orange-100 px-2 py-1 rounded">
                Featured
              </span>
            )}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
          <p className="text-gray-600 mb-4">{product.shortDesc}</p>
          {product.subcategories && product.subcategories.length > 0 && (
            <div className="space-y-2">
              {product.subcategories.map((sub, index) => (
                <div key={index}>
                  <h4 className="text-sm font-medium text-gray-700 mb-1">{sub.title}</h4>
                  <ul className="text-xs text-gray-500 space-y-1">
                    {sub.items.slice(0, 3).map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                    {sub.items.length > 3 && (
                      <li className="text-xs text-gray-400">+{sub.items.length - 3} more...</li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-2 mt-4">
          <Link
            href={`/products/${product.slug}`}
          >
            View Details
          </Link>
          <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
