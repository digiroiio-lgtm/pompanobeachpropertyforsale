import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: {
    default: 'Pompano Beach Properties | Homes for Sale in Pompano Beach, FL',
    template: '%s | Pompano Beach Properties',
  },
  description:
    'Find homes, condos, and waterfront properties for sale in Pompano Beach, Florida. Browse listings, view photos, and connect with local real estate agents.',
  keywords: [
    'Pompano Beach real estate',
    'homes for sale Pompano Beach',
    'condos Pompano Beach FL',
    'waterfront homes Pompano Beach',
    'Pompano Beach property listings',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pompanobeachpropertyforsale.com',
    siteName: 'Pompano Beach Properties',
    title: 'Pompano Beach Properties | Homes for Sale in Pompano Beach, FL',
    description:
      'Find your dream home in Pompano Beach, Florida. Browse hundreds of listings including waterfront homes, condos, and luxury estates.',
    images: [
      {
        url: 'https://picsum.photos/seed/pompano-og/1200/630',
        width: 1200,
        height: 630,
        alt: 'Pompano Beach Properties',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pompano Beach Properties',
    description: 'Find homes for sale in Pompano Beach, FL',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
