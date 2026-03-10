import { Metadata } from 'next'
import Link from 'next/link'
import PropertyCard from '@/components/PropertyCard'
import { mockProperties } from '@/lib/mockData'

export const metadata: Metadata = {
  title: 'New Construction Homes in Pompano Beach FL | Newly Built Houses',
  description:
    'Find new construction homes for sale in Pompano Beach, FL. Browse newly built houses, condos, and townhouses with modern features and builder warranties.',
  keywords: ['new construction Pompano Beach', 'newly built homes Pompano Beach FL', 'new homes for sale Pompano Beach'],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'New Construction Homes in Pompano Beach',
  description: 'New construction listings in Pompano Beach, FL',
  url: 'https://pompanohomes.com/seo/new-construction',
}

export default function NewConstructionPage() {
  const newProperties = mockProperties.filter((p) => p.isNewConstruction)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-emerald-700 to-emerald-500 rounded-2xl p-10 text-white mb-10">
          <p className="text-emerald-200 text-sm font-semibold tracking-wider uppercase mb-2">Brand New</p>
          <h1 className="text-4xl font-extrabold mb-4">
            New Construction Homes in Pompano Beach
          </h1>
          <p className="text-emerald-100 text-lg max-w-3xl leading-relaxed">
            Discover brand-new construction homes in Pompano Beach. Enjoy modern architecture,
            energy-efficient design, smart home technology, and builder warranties. Be the first
            to live in these stunning newly built properties.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {newProperties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of New Construction</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Builder Warranty', desc: 'Most new construction comes with a 1-year warranty on workmanship and 10-year structural warranty.' },
              { title: 'Modern Features', desc: 'Impact-resistant windows, smart home systems, energy-efficient appliances, and designer finishes.' },
              { title: 'No Immediate Repairs', desc: 'Everything is brand new, so you can move in without worrying about deferred maintenance.' },
              { title: 'Customization Options', desc: 'Many builders allow you to choose finishes, flooring, and fixtures during construction.' },
            ].map((b) => (
              <div key={b.title} className="p-4 bg-emerald-50 rounded-xl">
                <h3 className="font-bold text-emerald-800 mb-1">{b.title}</h3>
                <p className="text-sm text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Searches</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/seo/homes-for-sale', label: 'All Homes for Sale' },
              { href: '/seo/luxury-homes', label: 'Luxury New Homes' },
              { href: '/seo/homes-with-pool', label: 'New Homes with Pool' },
              { href: '/neighborhoods/mcnab-plat', label: 'McNab Plat' },
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
