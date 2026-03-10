import { Metadata } from 'next'
import Link from 'next/link'
import PropertyCard from '@/components/PropertyCard'
import { mockProperties } from '@/lib/mockData'

export const metadata: Metadata = {
  title: 'Luxury Homes for Sale in Pompano Beach FL | Estates & Mansions',
  description:
    'Browse luxury homes for sale in Pompano Beach, FL. Find premier waterfront estates, oceanfront condos, and high-end properties in exclusive neighborhoods.',
  keywords: ['luxury homes Pompano Beach', 'Pompano Beach luxury real estate', 'luxury estates Pompano Beach FL'],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Luxury Homes for Sale in Pompano Beach',
  description: 'Luxury real estate listings in Pompano Beach, FL',
  url: 'https://pompanohomes.com/seo/luxury-homes',
}

export default function LuxuryHomesPage() {
  const luxuryProperties = mockProperties.filter((p) => p.isLuxury)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Gold-accent hero */}
        <div className="bg-gradient-to-r from-[#0f2540] to-[#1a3a5c] rounded-2xl p-10 text-white mb-10 border border-amber-400/20">
          <p className="text-amber-400 text-sm font-semibold tracking-wider uppercase mb-2">Exceptional Properties</p>
          <h1 className="text-4xl font-extrabold mb-4">
            Luxury Homes for Sale in Pompano Beach
          </h1>
          <p className="text-blue-200 text-lg max-w-3xl leading-relaxed">
            Explore Pompano Beach&apos;s finest luxury properties — from magnificent waterfront estates
            with private docks to ultra-luxury oceanfront penthouses. These premier homes represent
            the pinnacle of South Florida living.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {luxuryProperties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Pompano Beach Luxury Real Estate Market
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Pompano Beach has emerged as one of South Florida&apos;s premier luxury real estate
            destinations. The city&apos;s rapid revitalization, including new world-class restaurants,
            boutique hotels, and cultural venues, has attracted affluent buyers from New York,
            Chicago, Los Angeles, and international markets.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Luxury properties in Pompano Beach typically feature resort-style pools, smart home
            technology, chef&apos;s kitchens with premium appliances, and expansive outdoor living spaces.
            Waterfront luxury homes often include private docks accommodating mega-yachts.
          </p>
        </div>

        <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Luxury Property Categories</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/seo/waterfront-homes', label: 'Luxury Waterfront Estates' },
              { href: '/seo/new-construction', label: 'New Luxury Construction' },
              { href: '/seo/condos-for-sale', label: 'Luxury Condominiums' },
              { href: '/neighborhoods/harbor-village', label: 'Harbor Village' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="bg-white text-amber-700 border border-amber-200 hover:bg-amber-600 hover:text-white transition-colors px-4 py-2 rounded-lg text-sm font-medium">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
