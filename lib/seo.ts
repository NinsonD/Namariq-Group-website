import { Metadata } from 'next'

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

// Base SEO configuration
export const baseSEO: SEOProps = {
  title: 'Al Namariq Group of Companies',
  description: 'Leading provider of building materials, interior décor, insulation, water pump systems, IT solutions, and medical services across the UAE',
  keywords: [
    'building materials UAE',
    'interior decoration Dubai',
    'insulation materials',
    'water pump systems',
    'IT solutions UAE',
    'medical services Dubai',
    'construction materials',
    'Al Namariq Group',
    'building supplies UAE'
  ],
  image: '/images/hero1.webp',
  url: 'https://alnamariq.com',
  type: 'website'
}

// Generate metadata for pages
export function generateSEO(props: SEOProps = {}): Metadata {
  const seo = { ...baseSEO, ...props }

  const title = seo.title ? `${seo.title} | ${baseSEO.title}` : baseSEO.title
  const description = seo.description || baseSEO.description
  const image = seo.image || baseSEO.image
  const url = seo.url || baseSEO.url

  return {
    title,
    description,
    keywords: seo.keywords?.join(', '),
    authors: seo.author ? [{ name: seo.author }] : [{ name: 'Al Namariq Group' }],
    creator: 'Al Namariq Group',
    publisher: 'Al Namariq Group',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://alnamariq.com'),
    alternates: {
      canonical: url || baseSEO.url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: baseSEO.title,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: seo.type,
      ...(seo.publishedTime && { publishedTime: seo.publishedTime }),
      ...(seo.modifiedTime && { modifiedTime: seo.modifiedTime }),
      ...(seo.author && { authors: [seo.author] }),
      ...(seo.section && { section: seo.section }),
      ...(seo.tags && { tags: seo.tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image || baseSEO.image],
      creator: '@alnamariq',
      site: '@alnamariq',
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-site-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
  }
}

// JSON-LD structured data generators
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Al Namariq Group of Companies',
    url: 'https://alnamariq.com',
    logo: 'https://alnamariq.com/images/logo/main-logo.png',
    description: baseSEO.description,
    foundingDate: '1990', // Update with actual founding date
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AE',
      addressRegion: 'Dubai',
      addressLocality: 'Dubai',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+971-XX-XXX-XXXX', // Update with actual phone
      contactType: 'customer service',
      availableLanguage: ['English', 'Arabic'],
    },
    sameAs: [
      'https://www.facebook.com/alnamariq',
      'https://www.instagram.com/alnamariq',
      'https://www.linkedin.com/company/alnamariq',
    ],
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: baseSEO.title,
    url: baseSEO.url,
    description: baseSEO.description,
    publisher: {
      '@type': 'Organization',
      name: 'Al Namariq Group of Companies',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://alnamariq.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
}

export function generateProductSchema(product: {
  name: string
  description: string
  image: string
  url: string
  sku: string
  brand: string
  category: string
  price?: number
  currency?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    url: product.url,
    sku: product.sku,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    category: product.category,
    ...(product.price && {
      offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: product.currency || 'AED',
        availability: 'https://schema.org/InStock',
      },
    }),
  }
}
