import nodemailer from 'nodemailer'

// Email configuration - will be set via environment variables
const EMAIL_CONFIG = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
}

// WhatsApp configuration
const WHATSAPP_CONFIG = {
  apiUrl: process.env.WHATSAPP_API_URL,
  apiKey: process.env.WHATSAPP_API_KEY,
  phoneNumber: process.env.WHATSAPP_PHONE_NUMBER || '+971501234567',
}

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport(EMAIL_CONFIG)
}

// Email templates
const emailTemplates = {
  contactForm: (data: any) => ({
    subject: `New Contact Form Submission - ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f2937;">New Contact Form Submission</h2>
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #374151;">Contact Details:</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
          <p><strong>Subject:</strong> ${data.subject}</p>
        </div>
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #374151;">Message:</h3>
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
        <p style="color: #6b7280; font-size: 14px;">
          This message was sent from the Namariq Group website contact form.
        </p>
      </div>
    `,
  }),

  enquiryForm: (data: any) => ({
    subject: `New Product/Service Enquiry - ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f2937;">New Product/Service Enquiry</h2>
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #374151;">Enquiry Details:</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
          <p><strong>Subject:</strong> ${data.subject}</p>
        </div>
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #374151;">Message:</h3>
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
        <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #1e40af; font-weight: bold;">
            ⚡ Priority: This enquiry requires immediate attention!
          </p>
        </div>
        <p style="color: #6b7280; font-size: 14px;">
          This enquiry was submitted through the Namariq Group website.
        </p>
      </div>
    `,
  }),
}

// Send email function
export const sendEmail = async (
  to: string,
  template: keyof typeof emailTemplates,
  data: any
): Promise<{ success: boolean; messageId?: string; error?: string }> => {
  try {
    const transporter = createTransporter()
    const templateData = emailTemplates[template](data)

    const mailOptions = {
      from: `"Namariq Group Website" <${EMAIL_CONFIG.auth.user}>`,
      to,
      subject: templateData.subject,
      html: templateData.html,
    }

    const info = await transporter.sendMail(mailOptions)

    console.log('Email sent successfully:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Failed to send email:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown email error'
    }
  }
}

// Send WhatsApp message
export const sendWhatsAppMessage = async (
  message: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    if (!WHATSAPP_CONFIG.apiUrl || !WHATSAPP_CONFIG.apiKey) {
      console.warn('WhatsApp API not configured, skipping WhatsApp message')
      return { success: true } // Don't fail if WhatsApp is not configured
    }

    const response = await fetch(WHATSAPP_CONFIG.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${WHATSAPP_CONFIG.apiKey}`,
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: WHATSAPP_CONFIG.phoneNumber,
        type: 'text',
        text: { body: message },
      }),
    })

    if (!response.ok) {
      throw new Error(`WhatsApp API error: ${response.status}`)
    }

    const result = await response.json()
    console.log('WhatsApp message sent successfully:', result)
    return { success: true }
  } catch (error) {
    console.error('Failed to send WhatsApp message:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown WhatsApp error'
    }
  }
}

// Process contact form submission
export const processContactForm = async (data: any): Promise<{ success: boolean; error?: string }> => {
  try {
    // Send email notification
    const emailResult = await sendEmail(
      process.env.CONTACT_EMAIL || 'info@namariq.com',
      'contactForm',
      data
    )

    if (!emailResult.success) {
      console.error('Failed to send contact email:', emailResult.error)
      // Continue with WhatsApp even if email fails
    }

    // Send WhatsApp notification
    const whatsappMessage = `📧 New Contact Form Submission

👤 Name: ${data.name}
📧 Email: ${data.email}
📱 Phone: ${data.phone}
${data.company ? `🏢 Company: ${data.company}\n` : ''}📝 Subject: ${data.subject}

💬 Message:
${data.message}

---
Sent from Namariq Group website`

    const whatsappResult = await sendWhatsAppMessage(whatsappMessage)

    if (!whatsappResult.success) {
      console.error('Failed to send WhatsApp message:', whatsappResult.error)
      // Continue even if WhatsApp fails
    }

    // Return success if at least email was sent
    return {
      success: emailResult.success || whatsappResult.success,
      error: !emailResult.success && !whatsappResult.success
        ? 'Failed to send both email and WhatsApp notifications'
        : undefined
    }
  } catch (error) {
    console.error('Error processing contact form:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error processing contact form'
    }
  }
}

// Process enquiry form submission
export const processEnquiryForm = async (data: any): Promise<{ success: boolean; error?: string }> => {
  try {
    // Send email notification
    const emailResult = await sendEmail(
      process.env.ENQUIRY_EMAIL || 'sales@namariq.com',
      'enquiryForm',
      data
    )

    if (!emailResult.success) {
      console.error('Failed to send enquiry email:', emailResult.error)
      // Continue with WhatsApp even if email fails
    }

    // Send WhatsApp notification
    const whatsappMessage = `🚨 New Product/Service Enquiry

👤 Name: ${data.name}
📧 Email: ${data.email}
📱 Phone: ${data.phone}
${data.company ? `🏢 Company: ${data.company}\n` : ''}📝 Subject: ${data.subject}

💬 Message:
${data.message}

---
⚡ PRIORITY: Requires immediate attention!
Sent from Namariq Group website`

    const whatsappResult = await sendWhatsAppMessage(whatsappMessage)

    if (!whatsappResult.success) {
      console.error('Failed to send WhatsApp message:', whatsappResult.error)
      // Continue even if WhatsApp fails
    }

    // Return success if at least email was sent
    return {
      success: emailResult.success || whatsappResult.success,
      error: !emailResult.success && !whatsappResult.success
        ? 'Failed to send both email and WhatsApp notifications'
        : undefined
    }
  } catch (error) {
    console.error('Error processing enquiry form:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error processing enquiry form'
    }
  }
}
