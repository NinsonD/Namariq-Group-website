interface DivisionCardProps {
  division: {
    name: string
    description: string
    image: string
    services: string[]
    color: string
  }
}

export default function DivisionCard({ division }: DivisionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col h-full">
      <div className="h-48 w-full" style={{ backgroundImage: `url(${division.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-gray-600 mb-4 flex-grow">{division.description}</p>
        <div className="mb-4 flex-grow">
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
      </div>
    </div>
  )
}
