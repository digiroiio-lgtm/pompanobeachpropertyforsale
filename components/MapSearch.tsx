'use client'

import { useCallback, useState } from 'react'
import Map, { Marker, Popup, NavigationControl } from 'react-map-gl/mapbox'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Property } from '@/lib/types'
import { formatPrice } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

interface MapSearchProps {
  properties: Property[]
  onPropertyHover?: (propertyId: string | null) => void
}

const POMPANO_BEACH_CENTER = { lat: 26.2379, lng: -80.1248 }

export default function MapSearch({ properties, onPropertyHover }: MapSearchProps) {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

  const handleMarkerClick = useCallback((property: Property) => {
    setSelectedProperty(property)
    onPropertyHover?.(property.id)
  }, [onPropertyHover])

  if (!mapboxToken) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex flex-col items-center justify-center p-8 text-center">
        <div className="text-5xl mb-4">🗺️</div>
        <h3 className="text-xl font-bold text-gray-700 mb-2">Map Preview</h3>
        <p className="text-gray-500 text-sm mb-4">
          Interactive map requires a Mapbox API token.
        </p>
        <p className="text-xs text-gray-400 bg-white/60 px-3 py-2 rounded-lg font-mono">
          Add NEXT_PUBLIC_MAPBOX_TOKEN to .env.local
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 w-full max-w-sm">
          {properties.slice(0, 4).map((p) => (
            <div key={p.id} className="bg-white rounded-lg p-3 shadow-sm text-left">
              <p className="text-xs font-bold text-blue-800">{formatPrice(p.price)}</p>
              <p className="text-xs text-gray-500 truncate">{p.address}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <Map
      initialViewState={{
        longitude: POMPANO_BEACH_CENTER.lng,
        latitude: POMPANO_BEACH_CENTER.lat,
        zoom: 12,
      }}
      style={{ width: '100%', height: '100%', borderRadius: '0.75rem' }}
      mapStyle="mapbox://styles/mapbox/light-v11"
      mapboxAccessToken={mapboxToken}
      onClick={() => setSelectedProperty(null)}
    >
      <NavigationControl position="top-right" />

      {properties.map((property) => (
        <Marker
          key={property.id}
          longitude={property.lng}
          latitude={property.lat}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation()
            handleMarkerClick(property)
          }}
        >
          <div
            className={`px-2 py-1 rounded-full text-xs font-bold cursor-pointer shadow-md transition-all duration-200 hover:scale-110 ${
              selectedProperty?.id === property.id
                ? 'bg-blue-700 text-white scale-110'
                : 'bg-white text-blue-900 border border-blue-200'
            }`}
          >
            {formatPrice(property.price)}
          </div>
        </Marker>
      ))}

      {selectedProperty && (
        <Popup
          longitude={selectedProperty.lng}
          latitude={selectedProperty.lat}
          anchor="bottom"
          offset={40}
          onClose={() => setSelectedProperty(null)}
          closeButton={true}
          className="max-w-xs"
        >
          <Link href={`/property/${selectedProperty.id}`} className="block">
            <div className="relative h-32 -mx-3 -mt-3 mb-2">
              <Image
                src={selectedProperty.images[0] || 'https://picsum.photos/seed/placeholder/400/300'}
                alt={selectedProperty.title}
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
            <p className="font-bold text-blue-800 text-base">{formatPrice(selectedProperty.price)}</p>
            <p className="text-xs text-gray-600 font-medium line-clamp-1 mt-0.5">{selectedProperty.title}</p>
            <p className="text-xs text-gray-500 mt-0.5">{selectedProperty.address}</p>
            <div className="flex gap-3 mt-1.5 text-xs text-gray-600">
              <span>{selectedProperty.bedrooms} bd</span>
              <span>{selectedProperty.bathrooms} ba</span>
              <span>{selectedProperty.sqft.toLocaleString()} sqft</span>
            </div>
          </Link>
        </Popup>
      )}
    </Map>
  )
}
