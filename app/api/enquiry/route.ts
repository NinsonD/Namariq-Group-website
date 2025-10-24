import { NextRequest, NextResponse } from 'next/server'
import { processEnquiryForm } from '../../../lib/email'
import { contactApi } from '../../../lib/api'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Basic validation
    const requiredFields = ['name', 'email', 'phone', 'subject', 'message', 'consent']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `${field} is required` },
          { status: 400 }
        )
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Phone validation (basic)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    if (!phoneRegex.test(body.phone.replace(/\s+/g, ''))) {
      return NextResponse.json(
        { success: false, error: 'Invalid phone number' },
        { status: 400 }
      )
    }

    // Consent validation
    if (!body.consent) {
      return NextResponse.json(
        { success: false, error: 'You must accept the terms and conditions' },
        { status: 400 }
      )
    }

    // Process the enquiry form
    const result = await processEnquiryForm(body)

    if (result.success) {
      // Also save to database if configured
      try {
        await contactApi.submitEnquiryForm(body)
      } catch (dbError) {
        console.warn('Failed to save to database:', dbError)
        // Don't fail the request if DB save fails
      }

      return NextResponse.json({
        success: true,
        message: 'Enquiry submitted successfully'
      })
    } else {
      return NextResponse.json(
        { success: false, error: result.error || 'Failed to send enquiry' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Enquiry form API error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
