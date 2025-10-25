import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ClientWrapper from '../components/ClientWrapper'
import CookieConsentBanner from '../components/CookieConsent'
import ReCaptchaProvider from '../components/ReCaptchaProvider'
import { generateSEO, generateOrganizationSchema, generateWebsiteSchema } from '../lib/seo'
import Script from 'next/script'
import dynamic from 'next/dynamic'

const AnalyticsProvider = dynamic(() => import('../components/AnalyticsProvider'), {
  ssr: false,
})

  const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = generateSEO()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = generateOrganizationSchema()
  const websiteSchema = generateWebsiteSchema()

  return (
    <html lang="en">
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        <ReCaptchaProvider>
          <AnalyticsProvider>
            <ClientWrapper>
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
              <CookieConsentBanner />
            </ClientWrapper>
          </AnalyticsProvider>
        </ReCaptchaProvider>
      </body>
    </html>
  )
}
