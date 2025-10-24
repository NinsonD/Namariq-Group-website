interface DivisionCardProps {
  division: {
    name: string
    description: string
    icon: string
    services: string[]
    color: string
  }
}

export default function DivisionCard({ division }: DivisionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className={`${division.color} p-6 text-white`}>
        <div className="text-4xl mb-4">{division.icon}</div>
        <h3 className="text-xl font-bold mb-2">{division.name}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{division.description}</p>
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Key Services:</h4>
          <ul className="space-y-1">
            {division.services.map((service, serviceIndex) => (
              <li key={serviceIndex} className="text-sm text-gray-600 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {service}
              </li>
            ))}
          </ul>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  )
}
