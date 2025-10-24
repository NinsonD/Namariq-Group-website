import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ClientWrapper from '../components/ClientWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Al Namariq Group of Companies',
  description: 'Leading provider of building materials, interior décor, insulation, water pump systems, IT solutions, and medical services across the UAE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        <ClientWrapper>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  )
}
