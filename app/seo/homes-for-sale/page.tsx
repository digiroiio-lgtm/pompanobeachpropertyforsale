import { Metadata } from 'next'
import Link from 'next/link'
import PropertyCard from '@/components/PropertyCard'
import { mockProperties } from '@/lib/mockData'

export const metadata: Metadata = {
  title: 'Pompano Beach Homes for Sale | Houses & Properties - PompanoHomes.com',
  description:
    'Search all homes for sale in Pompano Beach, FL. Browse single-family houses, condos, townhouses and more. Find your perfect home today.',
  keywords: ['Pompano Beach homes for sale', 'houses for sale Pompano Beach', 'Pompano Beach real estate listings'],
  openGraph: {
    title: 'Pompano Beach Homes for Sale',
    description: 'Browse all available homes for sale in Pompano Beach, Florida.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Pompano Beach Homes for Sale',
  description: 'Real estate listings in Pompano Beach, FL',
  url: 'https://pompanohomes.com/seo/homes-for-sale',
  numberOfItems: mockProperties.length,
}

export default function HomesForSalePage() {
  const properties = mockProperties.filter((p) => p.listingType === 'sale')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Pompano Beach Homes for Sale
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
            Discover an exceptional selection of homes for sale in Pompano Beach, Florida. From
            charming starter homes to luxury waterfront estates, Pompano Beach offers real estate
            options for every lifestyle and budget. Browse our current listings below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>

        {/* Internal Links */}
        <div className="bg-blue-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Explore More Pompano Beach Properties</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/seo/condos-for-sale', label: 'Condos for Sale' },
              { href: '/seo/waterfront-homes', label: 'Waterfront Homes' },
              { href: '/seo/luxury-homes', label: 'Luxury Homes' },
              { href: '/seo/new-construction', label: 'New Construction' },
              { href: '/seo/homes-with-pool', label: 'Homes with Pool' },
              { href: '/neighborhoods', label: 'Browse Neighborhoods' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-white text-blue-700 border border-blue-200 hover:bg-blue-700 hover:text-white transition-colors px-4 py-2 rounded-lg text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
