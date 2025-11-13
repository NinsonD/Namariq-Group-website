export const mockProducts = [
  {
    id: 1,
    title: 'BOARDS & TILES',
    slug: 'boards-tiles',
    shortDesc: 'Gypsum & Cement Boards, Ceiling Tiles – Gypsum Vinyl & Acoustic',
    category: 'Boards & Tiles',
    image: '/images/gypsum-board.jpg',
    featured: true,
    icon: '🏗️',
    subcategories: [
      {
        title: 'GYPSUM & CEMENT BOARDS',
        items: [
          'REGULAR GYPSUM BOARD',
          'MOISTURE RESISTANT GYPSUM BOARD',
          'FIRE RESISTANT GYPSUM BOARD',
          'FIRE & MOISTURE RESISTANT GYPSUM BOARD',
          'SPECIAL GYPSUM BOARDS',
          'CEMENT FIBRE BOARD'
        ]
      },
      {
        title: 'CEILING TILES – GYPSUM VINYL & ACOUSTIC',
        items: [
          'GYPSUM VINYL TILE SYSTEM'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'ACOUSTIC CEILING SOLUTIONS',
    slug: 'acoustic-ceiling-solutions',
    shortDesc: 'Gypsum Acoustic Tile, Mineral Fibre Acoustical Tile, Metal Ceiling Tile, Mineral Wool Tile, Wood Wool',
    category: 'Acoustic Ceiling Solutions',
    image: '/images/ceiling-tiles.webp',
    featured: true,
    icon: '🏠',
    subcategories: [
      {
        title: 'GYPSUM ACOUSTIC TILE',
        items: []
      },
      {
        title: 'MINERAL FIBRE ACOUSTICAL TILE',
        items: []
      },
      {
        title: 'METAL CEILING TILE',
        items: []
      },
      {
        title: 'MINERAL WOOL TILE',
        items: []
      },
      {
        title: 'WOOD WOOL',
        items: []
      }
    ]
  },
  {
    id: 3,
    title: 'CEILINGS, PARTITION & SPECIAL PROFILES',
    slug: 'ceilings-partition-special-profiles',
    shortDesc: 'Suspended Ceiling Channels, Partition Channels, Special Channels',
    category: 'Ceilings, Partition & Special Profiles',
    image: '/images/valeri-pumps.webp',
    featured: true,
    icon: '💧',
    subcategories: [
      {
        title: 'SUSPENDED CEILING CHANNELS FOR GYPSUM BOARDS',
        items: [
          'WALL ANGLE',
          'FURRING CHANNEL',
          'MAIN CHANNEL',
          'SHADOW WALL ANGLE – F PROFILE'
        ]
      },
      {
        title: 'SUSPENDED CEILING CHANNELS FOR TILES',
        items: [
          'MAIN TEE',
          'CROSS TEE - 120 / 60',
          'WALL ANGLE',
          'SHADOW WALL ANGLE – W PROFILE'
        ]
      },
      {
        title: 'CONCEALED GRID SUSPENSION',
        items: [
          'SPRING TEE',
          'EDGE TRIM /U TRIM',
          'MAIN CHANNEL',
          'WALL ANGLE'
        ]
      },
      {
        title: 'PARTITION CHANNELS',
        items: [
          'STUD',
          'TRACK',
          'DEEP TRACK'
        ]
      },
      {
        title: 'SPECIAL CHANNELS',
        items: [
          'EDGE BEAD',
          'CORNER BEAD',
          'PERFORATED ANGLE BEAD',
          'PVC SHADOW BEAD',
          'MOVEMENT BEAD'
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'GYPSUM ACCESSORIES',
    slug: 'gypsum-accessories',
    shortDesc: 'Screws, Fibre Joint Tapes, Paper Tape, Metal Corner Tape, Joint Compound, Wedge Anchor, Hammer Fixing Screws, Nylon Wall Plugs, Ceiling Dowels, Concrete Screw Bolt, Acoustic Sealant, FR Sealant, Acoustical Sealing Tape, Universal Bracket, CD channel connector clip, Multiconnector, Adjustable clip, Main Channel Connector, Wire Furring Clip',
    category: 'Gypsum Accessories',
    image: '/images/insulation.jpg',
    featured: true,
    icon: '🔥', 
    subcategories: [
      {
        title: 'Screws',
        items: []
      },
      {
        title: 'Fibre Joint Tapes',
        items: []
      },
      {
        title: 'Paper Tape',
        items: []
      },
      {
        title: 'Metal Corner Tape',
        items: []
      },
      {
        title: 'Joint Compound',
        items: []
      },
      {
        title: 'Wedge Anchor',
        items: []
      },
      {
        title: 'Hammer Fixing Screws',
        items: []
      },
      {
        title: 'Nylon Wall Plugs',
        items: []
      },
      {
        title: 'Ceiling Dowels',
        items: []
      },
      {
        title: 'Concrete Screw Bolt',
        items: []
      },
      {
        title: 'Acoustic Sealant',
        items: []
      },
      {
        title: 'FR Sealant',
        items: []
      },
      {
        title: 'Acoustical Sealing Tape',
        items: []
      },
      {
        title: 'Universal Bracket',
        items: []
      },
      {
        title: 'CD channel connector clip',
        items: []
      },
      {
        title: 'Multiconnector',
        items: []
      },
      {
        title: 'Adjustable clip',
        items: []
      },
      {
        title: 'Main Channel Connector',
        items: []
      },
      {
        title: 'Wire Furring Clip',
        items: []
      }
    ]
  },
]

export const mockServices: Array<{
  id: number
  title: string
  summary: string
  image: string
  slug: string
  features: string[]
}> = [
  {
    id: 1,
    title: 'Building Materials Supply & Distribution',
    summary: 'Comprehensive construction materials and supplies across 7 UAE branches',
    image: '/images/nbm-logo.png',
    slug: 'building-materials',
    features: [
      'Premium quality construction materials',
      'Wide distribution network across UAE',
      'Expert product consultation'
    ],
  },
  {
    id: 2,
    title: 'Interior Fit-Out & Ceiling Works',
    summary: 'Custom-designed acoustic, decorative, and functional ceiling systems',
    image: '/images/nbm-logo.png',
    slug: 'interior-fit-out',
    features: [
      'Acoustic & decorative ceiling systems',
      'Custom interior solutions',
      'Professional installation services'
    ],
  },
  {
    id: 3,
    title: 'Thermal & Acoustic Insulation Solutions',
    summary: 'High-performance insulation materials for construction, marine, and industrial sectors',
    image: '/images/nbm-logo.png',
    slug: 'insulation-solutions',
    features: [
      'Thermal insulation materials',
      'Acoustic insulation solutions',
      'Marine & industrial applications'
    ],
  },
  {
    id: 4,
    title: 'Water Pump Design, Sales & Service',
    summary: 'Valeri brand pumps designed for efficiency, durability, and performance',
    image: '/images/nbm-logo.png',
    slug: 'water-pump-solutions',
    features: [
      'Valeri brand premium pumps',
      'Custom pump system design',
      'Maintenance & repair services'
    ],
  },
  {
    id: 5,
    title: 'Healthcare & Aesthetic Treatments',
    summary: 'Excellence in aesthetic dermatology, dentistry, and wellness care at Carewell Clinics',
    image: '/images/nbm-logo.png',
    slug: 'healthcare',
    features: [
      'Aesthetic dermatology',
      'Advanced dental care',
      'Wellness treatments'
    ],
  },
  {
    id: 6,
    title: 'IT & Digital Transformation Solutions',
    summary: 'ERPNext, POS, and AI-based marketing tools for smarter business systems',
    image: '/images/nbm-logo.png',
    slug: 'it-solutions',
    features: [
      'ERPNext implementation',
      'Networking & POS systems',
      'CCTV & security systems'
    ],
  },
]

export const mockTestimonials = [
  {
    id: 1,
    name: 'Ahmed Al-Rashid',
    role: 'Project Manager',
    company: 'Dubai Construction Co.',
    quote: 'Al Namariq Group of Companies provided exceptional quality materials and support for our latest project.',
    rating: 5,
    photo: '/images/testimonial1.jpg',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Operations Director',
    company: 'Gulf Industries Ltd.',
    quote: 'Their specialized materials exceeded our expectations in performance and reliability.',
    rating: 5,
    photo: '/images/testimonial2.jpg',
  },
  {
    id: 3,
    name: 'Mohammed Al-Fayed',
    role: 'CEO',
    company: 'Emirates Building Solutions',
    quote: 'Outstanding service and innovative solutions. Al Namariq has been our trusted partner for years.',
    rating: 5,
    photo: '/images/testimonial3.jpg',
  },
  {
    id: 4,
    name: 'Fatima Al-Zahra',
    role: 'Procurement Manager',
    company: 'Sharjah Infrastructure Ltd.',
    quote: 'The quality of their gypsum boards and insulation materials is unmatched. Highly recommended.',
    rating: 5,
    photo: '/images/testimonial4.jpg',
  },
  {
    id: 5,
    name: 'John Smith',
    role: 'Technical Director',
    company: 'Abu Dhabi Engineering',
    quote: 'Their expertise in acoustic ceiling solutions helped us achieve perfect sound control in our auditorium.',
    rating: 5,
    photo: '/images/testimonial5.jpg',
  },
  {
    id: 6,
    name: 'Layla Hassan',
    role: 'Project Coordinator',
    company: 'Ras Al Khaimah Contractors',
    quote: 'Reliable delivery and excellent customer support. Al Namariq always delivers on time.',
    rating: 5,
    photo: '/images/testimonial6.jpg',
  },
]
