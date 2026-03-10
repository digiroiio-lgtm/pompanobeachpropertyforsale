import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Image from 'next/image'
import { mockNeighborhoods, mockProperties } from '@/lib/mockData'
import { formatPrice } from '@/lib/utils'
import PropertyCard from '@/components/PropertyCard'
import Link from 'next/link'
import { MapPin, Home, TrendingUp } from 'lucide-react'

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const hood = mockNeighborhoods.find((n) => n.slug === params.slug)
  if (!hood) return { title: 'Neighborhood Not Found' }
  return {
    title: `${hood.name} Homes for Sale | Pompano Beach`,
    description: `Browse homes for sale in ${hood.name}, Pompano Beach FL. ${hood.description}`,
  }
}

export function generateStaticParams() {
  return mockNeighborhoods.map((n) => ({ slug: n.slug }))
}

export default function NeighborhoodPage({ params }: PageProps) {
  const hood = mockNeighborhoods.find((n) => n.slug === params.slug)
  if (!hood) notFound()

  const properties = mockProperties.filter((p) => p.neighborhood === hood.name)
  const fallback = mockProperties.slice(0, 4)
  const displayProperties = properties.length > 0 ? properties : fallback

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="relative h-72 rounded-2xl overflow-hidden mb-10">
        <Image src={hood.image} alt={hood.name} fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-8 left-8">
          <nav className="text-white/70 text-sm mb-2 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/neighborhoods" className="hover:text-white">Neighborhoods</Link>
            <span>/</span>
            <span className="text-white">{hood.name}</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white">{hood.name}</h1>
          <p className="text-white/80 mt-1">Pompano Beach, Florida</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Description */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About {hood.name}</h2>
          <p className="text-gray-600 leading-relaxed text-base">{hood.description}</p>
          <p className="text-gray-600 leading-relaxed text-base mt-3">
            {hood.name} is one of Pompano Beach&apos;s most sought-after communities, offering residents
            an exceptional quality of life with easy access to beaches, dining, shopping, and major
            highways. The neighborhood attracts buyers from across the country who are drawn to South
            Florida&apos;s year-round sunshine and no state income tax.
          </p>
        </div>

        {/* Stats */}
        <div className="space-y-4">
          <div className="bg-blue-50 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-600">Average Home Price</span>
            </div>
            <p className="text-3xl font-bold text-[#1a3a5c]">{formatPrice(hood.avgPrice)}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-1">
              <Home className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-600">Active Listings</span>
            </div>
            <p className="text-3xl font-bold text-gray-800">{hood.properties}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-600">Location</span>
            </div>
            <p className="font-semibold text-gray-800">Pompano Beach, FL</p>
          </div>
        </div>
      </div>

      {/* Listings */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Homes for Sale in {hood.name}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayProperties.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </div>
  )
}
