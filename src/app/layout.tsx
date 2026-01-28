import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Shree Ram Properties | Premium Real Estate',
  description: 'Discover luxury properties and investment opportunities with Shree Ram Properties. Find your dream home today.',
  keywords: 'real estate, properties, apartments, plots, houses, luxury homes',
  openGraph: {
    title: 'Shree Ram Properties | Premium Real Estate',
    description: 'Discover luxury properties and investment opportunities',
    url: 'https://shreeramproperties.com',
    siteName: 'Shree Ram Properties',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
      </head>
      <body className="bg-secondary text-primary antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
