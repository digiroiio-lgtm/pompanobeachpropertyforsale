'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Heart, Bed, Bath, Square, Waves, Sparkles, Trees, Building2 } from 'lucide-react'
import { Property } from '@/lib/types'
import { formatPrice, formatSqft } from '@/lib/utils'

interface PropertyCardProps {
  property: Property
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [isFavorited, setIsFavorited] = useState(false)

  const propertyTypeLabel: Record<string, string> = {
    house: 'House',
    condo: 'Condo',
    townhouse: 'Townhouse',
    land: 'Land',
  }

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <div className="relative h-56 overflow-hidden">
        <Link href={`/property/${property.id}`}>
          <Image
            src={property.images[0] || 'https://picsum.photos/seed/placeholder/800/600'}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {property.isNewConstruction && (
            <span className="bg-emerald-500 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              New
            </span>
          )}
          {property.isWaterfront && (
            <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
              <Waves className="w-3 h-3" />
              Waterfront
            </span>
          )}
          {property.isLuxury && (
            <span className="bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
              Luxury
            </span>
          )}
          {property.hasPool && (
            <span className="bg-cyan-500 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
              <Trees className="w-3 h-3" />
              Pool
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center hover:scale-110 transition-transform"
          aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            className={`w-4 h-4 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
          />
        </button>

        {/* Property Type */}
        <div className="absolute bottom-3 right-3">
          <span className="bg-black/60 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <Building2 className="w-3 h-3" />
            {propertyTypeLabel[property.propertyType]}
          </span>
        </div>
      </div>

      <div className="p-4">
        <Link href={`/property/${property.id}`}>
          <p className="text-2xl font-bold text-navy-900 text-[#1a3a5c] hover:text-blue-700 transition-colors">
            {formatPrice(property.price)}
          </p>
          <h3 className="text-gray-800 font-medium mt-1 line-clamp-1 hover:text-blue-700 transition-colors">
            {property.title}
          </h3>
          <p className="text-gray-500 text-sm mt-0.5 line-clamp-1">
            {property.address}, {property.city}, {property.state} {property.zip}
          </p>
        </Link>

        <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <Bed className="w-4 h-4 text-blue-600" />
            <span className="font-medium">{property.bedrooms}</span>
            <span>bd</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <Bath className="w-4 h-4 text-blue-600" />
            <span className="font-medium">{property.bathrooms}</span>
            <span>ba</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <Square className="w-4 h-4 text-blue-600" />
            <span className="font-medium">{formatSqft(property.sqft)}</span>
          </div>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={property.agent.photo}
              alt={property.agent.name}
              fill
              className="object-cover"
              sizes="24px"
            />
          </div>
          <span className="text-xs text-gray-500">{property.agent.name}</span>
        </div>
      </div>
    </div>
  )
}
