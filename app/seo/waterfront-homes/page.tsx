import { Metadata } from 'next'
import Link from 'next/link'
import PropertyCard from '@/components/PropertyCard'
import { mockProperties } from '@/lib/mockData'

export const metadata: Metadata = {
  title: 'Waterfront Homes for Sale in Pompano Beach FL | Intracoastal & Ocean',
  description:
    'Browse waterfront homes for sale in Pompano Beach, FL. Find Intracoastal estates, canal-front homes, and oceanfront properties with private docks.',
  keywords: ['waterfront homes Pompano Beach', 'Intracoastal homes Pompano Beach', 'canal homes Pompano Beach FL'],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Waterfront Homes for Sale in Pompano Beach',
  description: 'Waterfront property listings in Pompano Beach, FL',
  url: 'https://pompanohomes.com/seo/waterfront-homes',
}

export default function WaterfrontHomesPage() {
  const waterfrontProperties = mockProperties.filter((p) => p.isWaterfront)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl p-10 text-white mb-10">
          <h1 className="text-4xl font-extrabold mb-4">
            Waterfront Homes for Sale in Pompano Beach
          </h1>
          <p className="text-blue-100 text-lg max-w-3xl leading-relaxed">
            Discover Pompano Beach&apos;s stunning waterfront properties. From mega-yacht docks on the
            deep-water Intracoastal to charming canal-front homes, waterfront living in Pompano
            Beach offers an unmatched Florida lifestyle. Browse our current waterfront listings.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {waterfrontProperties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>

        {/* SEO Content */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            About Waterfront Living in Pompano Beach
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Pompano Beach is renowned for its exceptional waterfront real estate, featuring direct
            Intracoastal Waterway access and quick ocean access through Port Everglades. The city&apos;s
            extensive canal system offers hundreds of properties with private docks, boat lifts, and
            stunning water views.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Popular waterfront neighborhoods include Harbor Village, Pompano Isles, and the canals
            off Riverside Drive. Whether you&apos;re looking for a starter canal home or a mega-yacht
            estate, Pompano Beach offers waterfront options at every price point.
          </p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Explore More</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/seo/luxury-homes', label: 'Luxury Waterfront Homes' },
              { href: '/seo/homes-for-sale', label: 'All Homes for Sale' },
              { href: '/neighborhoods/harbor-village', label: 'Harbor Village' },
              { href: '/neighborhoods/pompano-isles', label: 'Pompano Isles' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="bg-white text-blue-700 border border-blue-200 hover:bg-blue-700 hover:text-white transition-colors px-4 py-2 rounded-lg text-sm font-medium">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
