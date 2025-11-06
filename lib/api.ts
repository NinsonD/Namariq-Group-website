import { mockProducts, mockServices} from './mockData'

// API Base URL - will be configurable via environment variables
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'

// Types for API responses
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
  success: boolean
}

// Product API
export const productApi = {
  async getAll(params?: {
    category?: string
    search?: string
    featured?: boolean
    page?: number
    limit?: number
  }): Promise<PaginatedResponse<any>> {
    // In development, return mock data
    if (process.env.NODE_ENV === 'development') {
      let filteredProducts = mockProducts

      if (params?.category) {
        filteredProducts = filteredProducts.filter(p => p.category === params.category)
      }

      if (params?.search) {
        const searchTerm = params.search.toLowerCase()
        filteredProducts = filteredProducts.filter(p =>
          p.title.toLowerCase().includes(searchTerm) ||
          p.shortDesc.toLowerCase().includes(searchTerm)
        )
      }

      if (params?.featured !== undefined) {
        filteredProducts = filteredProducts.filter(p => p.featured === params.featured)
      }

      const page = params?.page || 1
      const limit = params?.limit || 12
      const startIndex = (page - 1) * limit
      const endIndex = startIndex + limit
      const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

      return {
        data: paginatedProducts,
        pagination: {
          page,
          limit,
          total: filteredProducts.length,
          totalPages: Math.ceil(filteredProducts.length / limit)
        },
        success: true
      }
    }

    // Production API call
    const queryParams = new URLSearchParams()
    if (params?.category) queryParams.append('category', params.category)
    if (params?.search) queryParams.append('search', params.search)
    if (params?.featured !== undefined) queryParams.append('featured', params.featured.toString())
    if (params?.page) queryParams.append('page', params.page.toString())
    if (params?.limit) queryParams.append('limit', params.limit.toString())

    const response = await fetch(`${API_BASE_URL}/products?${queryParams}`)
    return response.json()
  },

  async getBySlug(slug: string): Promise<ApiResponse<any>> {
    if (process.env.NODE_ENV === 'development') {
      const product = mockProducts.find(p => p.slug === slug)
      return {
        data: product,
        success: !!product,
        error: product ? undefined : 'Product not found'
      }
    }

    const response = await fetch(`${API_BASE_URL}/products/${slug}`)
    return response.json()
  },

  async getCategories(): Promise<ApiResponse<string[]>> {
    if (process.env.NODE_ENV === 'development') {
      const categories = [...new Set(mockProducts.map(p => p.category))]
      return {
        data: categories,
        success: true
      }
    }

    const response = await fetch(`${API_BASE_URL}/products/categories`)
    return response.json()
  }
}

// Service API
export const serviceApi = {
  async getAll(): Promise<ApiResponse<any[]>> {
    if (process.env.NODE_ENV === 'development') {
      return {
        data: mockServices,
        success: true
      }
    }

    const response = await fetch(`${API_BASE_URL}/services`)
    return response.json()
  },

  async getBySlug(slug: string): Promise<ApiResponse<any>> {
    if (process.env.NODE_ENV === 'development') {
      const service = mockServices.find(s => s.title.toLowerCase().replace(/\s+/g, '-') === slug)
      return {
        data: service,
        success: !!service,
        error: service ? undefined : 'Service not found'
      }
    }

    const response = await fetch(`${API_BASE_URL}/services/${slug}`)
    return response.json()
  }
}

// Specialized Materials API removed — project no longer includes mockSpecializedMaterials.

// Contact/Lead API
export interface ContactFormData {
  name: string
  email: string
  phone: string
  company?: string
  subject: string
  message: string
  consent: boolean
}

export const contactApi = {
  async submitContactForm(data: ContactFormData): Promise<ApiResponse<any>> {
    if (process.env.NODE_ENV === 'development') {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      // In development, just log and return success
      console.log('Contact form submitted:', data)

      return {
        data: { id: Date.now().toString() },
        success: true,
        message: 'Contact form submitted successfully'
      }
    }

    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    return response.json()
  },

  async submitEnquiryForm(data: ContactFormData): Promise<ApiResponse<any>> {
    if (process.env.NODE_ENV === 'development') {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      // In development, just log and return success
      console.log('Enquiry form submitted:', data)

      return {
        data: { id: Date.now().toString() },
        success: true,
        message: 'Enquiry submitted successfully'
      }
    }

    const response = await fetch(`${API_BASE_URL}/enquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    return response.json()
  }
}

// Utility function for error handling
export const handleApiError = (error: any): string => {
  if (error.response?.data?.message) {
    return error.response.data.message
  }
  if (error.message) {
    return error.message
  }
  return 'An unexpected error occurred'
}

// Generic fetch wrapper with error handling
export const apiRequest = async <T>(
  url: string,
  options?: RequestInit
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers
      },
      ...options
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('API request failed:', error)
    return {
      data: null as T,
      success: false,
      error: handleApiError(error)
    }
  }
}
