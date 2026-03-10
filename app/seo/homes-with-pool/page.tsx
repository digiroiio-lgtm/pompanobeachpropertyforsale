import { Metadata } from 'next'
import Link from 'next/link'
import PropertyCard from '@/components/PropertyCard'
import { mockProperties } from '@/lib/mockData'

export const metadata: Metadata = {
  title: 'Homes with Pool for Sale in Pompano Beach FL | Pool Houses',
  description:
    'Find homes with pools for sale in Pompano Beach, FL. Browse single-family homes and condos featuring private pools, heated pools, and resort-style outdoor living.',
  keywords: ['homes with pool Pompano Beach', 'pool homes for sale Pompano Beach FL', 'houses with pool Pompano Beach'],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Homes with Pool for Sale in Pompano Beach',
  description: 'Pool home listings in Pompano Beach, FL',
  url: 'https://pompanohomes.com/seo/homes-with-pool',
}

export default function HomesWithPoolPage() {
  const poolProperties = mockProperties.filter((p) => p.hasPool)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-cyan-700 to-blue-600 rounded-2xl p-10 text-white mb-10">
          <p className="text-cyan-200 text-sm font-semibold tracking-wider uppercase mb-2">🏊 Pool Homes</p>
          <h1 className="text-4xl font-extrabold mb-4">
            Homes with Pool for Sale in Pompano Beach
          </h1>
          <p className="text-cyan-100 text-lg max-w-3xl leading-relaxed">
            Dive into the ultimate South Florida lifestyle with a pool home in Pompano Beach.
            From modest heated pools to resort-style oases with sun shelves, spas, and summer
            kitchens, we have pool homes for every taste and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {poolProperties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pool Homes in South Florida</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            With Pompano Beach&apos;s year-round warm weather, a private pool is one of the most
            desirable features in South Florida real estate. Pool homes command premium prices and
            are consistently among the fastest-selling properties in Pompano Beach.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Many Pompano Beach pool homes also feature covered lanais, outdoor kitchens, and
            tropical landscaping that create true resort-style backyard retreats. Whether you
            prefer a simple plunge pool or a full resort-style oasis, you&apos;ll find it here.
          </p>
        </div>

        <div className="bg-cyan-50 rounded-2xl p-8 border border-cyan-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Searches</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/seo/homes-for-sale', label: 'All Homes for Sale' },
              { href: '/seo/luxury-homes', label: 'Luxury Pool Homes' },
              { href: '/seo/waterfront-homes', label: 'Waterfront Pool Homes' },
              { href: '/seo/new-construction', label: 'New Construction with Pool' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="bg-white text-cyan-700 border border-cyan-200 hover:bg-cyan-600 hover:text-white transition-colors px-4 py-2 rounded-lg text-sm font-medium">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
