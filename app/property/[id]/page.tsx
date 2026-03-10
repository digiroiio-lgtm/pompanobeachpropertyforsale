import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { mockProperties } from '@/lib/mockData'
import { formatPrice, formatSqft } from '@/lib/utils'
import { PriceHistoryEntry } from '@/lib/types'
import PropertyGallery from '@/components/PropertyGallery'
import MortgageCalculator from '@/components/MortgageCalculator'
import PriceHistory from '@/components/PriceHistory'
import PropertyCard from '@/components/PropertyCard'
import Image from 'next/image'
import Link from 'next/link'
import { Bed, Bath, Square, Car, Calendar, MapPin, Phone, Mail, Waves, Sparkles, Trees, Shield } from 'lucide-react'

interface PageProps {
  params: { id: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const property = mockProperties.find((p) => p.id === params.id)
  if (!property) return { title: 'Property Not Found' }
  return {
    title: `${property.title} - ${formatPrice(property.price)}`,
    description: `${property.bedrooms} bed, ${property.bathrooms} bath, ${formatSqft(property.sqft)} home at ${property.address}, ${property.city}, FL ${property.zip}. ${property.description.slice(0, 120)}...`,
    openGraph: {
      images: [property.images[0]],
      title: `${property.title} | PompanoHomes.com`,
      description: `${property.bedrooms}bd/${property.bathrooms}ba · ${formatSqft(property.sqft)} · ${formatPrice(property.price)}`,
    },
  }
}

export function generateStaticParams() {
  return mockProperties.map((p) => ({ id: p.id }))
}

const mockPriceHistory: PriceHistoryEntry[] = [
  { date: 'Jan 2022', price: 820000, event: 'listed' },
  { date: 'Mar 2022', price: 795000, event: 'price_drop' },
  { date: 'Jun 2022', price: 810000, event: 'sold' },
  { date: 'Sep 2023', price: 875000, event: 'listed' },
  { date: 'Nov 2023', price: 860000, event: 'price_drop' },
  { date: 'Jan 2024', price: 875000, event: 'price_increase' },
]

export default function PropertyDetailPage({ params }: PageProps) {
  const property = mockProperties.find((p) => p.id === params.id)
  if (!property) notFound()

  const nearby = mockProperties.filter((p) => p.id !== property.id && p.neighborhood === property.neighborhood).slice(0, 3)
  const fallbackNearby = mockProperties.filter((p) => p.id !== property.id).slice(0, 3)
  const nearbyProperties = nearby.length > 0 ? nearby : fallbackNearby

  const features = [
    { label: 'Year Built', value: property.yearBuilt, icon: Calendar },
    { label: 'Lot Size', value: property.lotSize > 0 ? `${property.lotSize.toLocaleString()} sq ft` : 'N/A', icon: MapPin },
    { label: 'Parking', value: `${property.parkingSpaces} spaces`, icon: Car },
    { label: 'Neighborhood', value: property.neighborhood, icon: MapPin },
  ]

  const badges = [
    { show: property.hasPool, label: 'Pool', icon: Trees, color: 'bg-cyan-100 text-cyan-700' },
    { show: property.isWaterfront, label: 'Waterfront', icon: Waves, color: 'bg-blue-100 text-blue-700' },
    { show: property.isLuxury, label: 'Luxury', icon: Shield, color: 'bg-amber-100 text-amber-700' },
    { show: property.isNewConstruction, label: 'New Construction', icon: Sparkles, color: 'bg-emerald-100 text-emerald-700' },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: property.title,
    description: property.description,
    url: `https://pompanohomes.com/property/${property.id}`,
    image: property.images,
    offers: {
      '@type': 'Offer',
      price: property.price,
      priceCurrency: 'USD',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address,
      addressLocality: property.city,
      addressRegion: property.state,
      postalCode: property.zip,
      addressCountry: 'US',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link href="/listings" className="hover:text-blue-600">Listings</Link>
          <span>/</span>
          <span className="text-gray-700 truncate">{property.title}</span>
        </nav>

        {/* Gallery */}
        <PropertyGallery images={property.images} title={property.title} />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                {badges.filter((b) => b.show).map((badge) => (
                  <span key={badge.label} className={`flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full ${badge.color}`}>
                    <badge.icon className="w-3 h-3" />
                    {badge.label}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
              <p className="text-4xl font-extrabold text-[#1a3a5c] mt-2">{formatPrice(property.price)}</p>
              <p className="text-gray-500 mt-1 flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {property.address}, {property.city}, {property.state} {property.zip}
              </p>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 p-5 bg-gray-50 rounded-xl">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-blue-600 mb-1">
                  <Bed className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-gray-900">{property.bedrooms}</p>
                <p className="text-xs text-gray-500">Bedrooms</p>
              </div>
              <div className="text-center border-x border-gray-200">
                <div className="flex items-center justify-center gap-1 text-blue-600 mb-1">
                  <Bath className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-gray-900">{property.bathrooms}</p>
                <p className="text-xs text-gray-500">Bathrooms</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-blue-600 mb-1">
                  <Square className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-gray-900">{property.sqft.toLocaleString()}</p>
                <p className="text-xs text-gray-500">Sq Ft</p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">About This Home</h2>
              <p className="text-gray-600 leading-relaxed">{property.description}</p>
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Property Details</h2>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feat) => (
                  <div key={feat.label} className="flex items-start gap-3">
                    <feat.icon className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">{feat.label}</p>
                      <p className="text-sm font-medium text-gray-800">{feat.value}</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500">Property Type</p>
                    <p className="text-sm font-medium text-gray-800 capitalize">{property.propertyType}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500">Listing Type</p>
                    <p className="text-sm font-medium text-gray-800 capitalize">For {property.listingType}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Price History */}
            <PriceHistory priceHistory={mockPriceHistory} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Agent Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Listing Agent</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={property.agent.photo} alt={property.agent.name} fill className="object-cover" sizes="56px" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{property.agent.name}</p>
                  <p className="text-sm text-blue-600">PompanoHomes.com</p>
                </div>
              </div>
              <div className="space-y-2">
                <a
                  href={`tel:${property.agent.phone}`}
                  className="flex items-center gap-2 w-full bg-[#1a3a5c] text-white py-2.5 px-4 rounded-lg font-medium text-sm hover:bg-blue-800 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {property.agent.phone}
                </a>
                <a
                  href={`mailto:${property.agent.email}`}
                  className="flex items-center gap-2 w-full border border-gray-200 text-gray-700 py-2.5 px-4 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email Agent
                </a>
              </div>
            </div>

            {/* Mortgage Calculator */}
            <MortgageCalculator homePrice={property.price} />
          </div>
        </div>

        {/* Nearby Properties */}
        {nearbyProperties.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nearby Properties</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {nearbyProperties.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
