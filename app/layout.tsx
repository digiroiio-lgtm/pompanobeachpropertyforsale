import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: {
    default: 'Pompano Beach Homes for Sale | PompanoHomes.com',
    template: '%s | PompanoHomes.com',
  },
  description:
    'Search Pompano Beach real estate listings. Find homes for sale, condos, waterfront properties, luxury estates and new construction in Pompano Beach, FL.',
  keywords: [
    'Pompano Beach homes for sale',
    'Pompano Beach real estate',
    'Pompano Beach condos',
    'waterfront homes Pompano Beach',
    'luxury homes Pompano Beach',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pompanohomes.com',
    siteName: 'PompanoHomes.com',
    title: 'Pompano Beach Homes for Sale | PompanoHomes.com',
    description:
      'Search Pompano Beach real estate listings. Find homes for sale, condos, waterfront properties, luxury estates and new construction.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pompano Beach Homes for Sale | PompanoHomes.com',
    description: 'Find your dream home in Pompano Beach, FL.',
  },
  metadataBase: new URL('https://pompanohomes.com'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased bg-gray-50 text-gray-900`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
