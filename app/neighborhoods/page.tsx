import Link from 'next/link'
import Image from 'next/image'
import { mockNeighborhoods } from '@/lib/mockData'
import { formatPrice } from '@/lib/utils'
import { Metadata } from 'next'
import { MapPin, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pompano Beach Neighborhoods | Find Your Perfect Community',
  description:
    'Explore Pompano Beach neighborhoods including Harbor Village, Lighthouse Point, Pompano Isles and more. Find homes for sale in every community.',
}

export default function NeighborhoodsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Pompano Beach Neighborhoods
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Explore our diverse communities — from ultra-luxury waterfront estates to charming
          family neighborhoods and resort-style golf communities.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockNeighborhoods.map((hood) => (
          <Link key={hood.id} href={`/neighborhoods/${hood.slug}`} className="group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={hood.image}
                  alt={hood.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h2 className="text-white font-bold text-2xl">{hood.name}</h2>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
                  {hood.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Home className="w-4 h-4 text-blue-500" />
                    <span>{hood.properties} homes</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-semibold text-[#1a3a5c]">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>Avg {formatPrice(hood.avgPrice)}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
