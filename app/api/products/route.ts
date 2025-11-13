import { NextRequest, NextResponse } from 'next/server'
import { mockProducts } from '../../../lib/mockData'

export async function GET(request: NextRequest) {
  try {
    console.log('Products API called with URL:', request.url)

    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const search = searchParams.get('search')
    const featured = searchParams.get('featured')

    console.log('Query params:', { category, search, featured })

    let filteredProducts = mockProducts

    // Filter by category
    if (category) {
      filteredProducts = filteredProducts.filter(p =>
        p.category?.toLowerCase() === category.toLowerCase()
      )
    }

    // Filter by search term
    if (search) {
      const searchTerm = search.toLowerCase()
      filteredProducts = filteredProducts.filter(p =>
        p.title.toLowerCase().includes(searchTerm) ||
        p.shortDesc.toLowerCase().includes(searchTerm) ||
        p.category?.toLowerCase().includes(searchTerm)
      )
    }

    // Filter by featured
    if (featured !== null) {
      const isFeatured = featured === 'true'
      filteredProducts = filteredProducts.filter(p => p.featured === isFeatured)
    }

    console.log('Returning', filteredProducts.length, 'products')

    return NextResponse.json({
      success: true,
      products: filteredProducts
    })
  } catch (error) {
    console.error('Products API error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
