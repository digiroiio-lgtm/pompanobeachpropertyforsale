import { Metadata } from 'next'
import Link from 'next/link'
import PropertyCard from '@/components/PropertyCard'
import { mockProperties } from '@/lib/mockData'

export const metadata: Metadata = {
  title: 'Pompano Beach Condos for Sale | Oceanfront & Waterfront Condominiums',
  description:
    'Find condos for sale in Pompano Beach, FL. Explore oceanfront condominiums, luxury high-rises, and affordable condo communities near the beach.',
  keywords: ['Pompano Beach condos for sale', 'Pompano Beach condominiums', 'oceanfront condos Pompano Beach FL'],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Pompano Beach Condos for Sale',
  description: 'Condo listings in Pompano Beach, FL',
  url: 'https://pompanohomes.com/seo/condos-for-sale',
}

export default function CondosForSalePage() {
  const condos = mockProperties.filter((p) => p.propertyType === 'condo')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Pompano Beach Condos for Sale
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
            Browse condos for sale in Pompano Beach, Florida. Whether you&apos;re looking for an
            oceanfront high-rise with spectacular Atlantic views, a waterfront unit on the
            Intracoastal, or an affordable condo close to the beach, Pompano Beach has a wide
            range of condo options to suit your needs and budget.
          </p>
        </div>

        {condos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {condos.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400 mb-12">
            <p className="text-xl">Check back soon for new condo listings.</p>
          </div>
        )}

        <div className="bg-blue-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Searches</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/seo/homes-for-sale', label: 'All Homes for Sale' },
              { href: '/seo/waterfront-homes', label: 'Waterfront Properties' },
              { href: '/seo/luxury-homes', label: 'Luxury Condos' },
              { href: '/seo/new-construction', label: 'New Construction Condos' },
              { href: '/neighborhoods/pompano-beach-highlands', label: 'Pompano Beach Highlands' },
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
