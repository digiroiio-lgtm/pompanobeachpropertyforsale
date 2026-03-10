'use client'

import { useState, useMemo } from 'react'
import dynamic from 'next/dynamic'
import PropertyCard from '@/components/PropertyCard'
import SearchFilters from '@/components/SearchFilters'
import { mockProperties } from '@/lib/mockData'
import { SearchFilters as SearchFiltersType } from '@/lib/types'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const MapSearch = dynamic(() => import('@/components/MapSearch'), { ssr: false })

function SearchPageContent() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('query') || ''
  const [filters, setFilters] = useState<SearchFiltersType>({ query: initialQuery })
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const filtered = useMemo(() => {
    let results = [...mockProperties]

    if (filters.query) {
      const q = filters.query.toLowerCase()
      results = results.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.address.toLowerCase().includes(q) ||
          p.neighborhood.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
    }
    if (filters.listingType) results = results.filter((p) => p.listingType === filters.listingType)
    if (filters.propertyType) results = results.filter((p) => p.propertyType === filters.propertyType)
    if (filters.minPrice) results = results.filter((p) => p.price >= filters.minPrice!)
    if (filters.maxPrice) results = results.filter((p) => p.price <= filters.maxPrice!)
    if (filters.minBeds) results = results.filter((p) => p.bedrooms >= filters.minBeds!)
    if (filters.minBaths) results = results.filter((p) => p.bathrooms >= filters.minBaths!)
    if (filters.hasPool) results = results.filter((p) => p.hasPool)
    if (filters.isWaterfront) results = results.filter((p) => p.isWaterfront)
    if (filters.isLuxury) results = results.filter((p) => p.isLuxury)
    if (filters.isNewConstruction) results = results.filter((p) => p.isNewConstruction)

    if (filters.sortBy === 'price_asc') results.sort((a, b) => a.price - b.price)
    else if (filters.sortBy === 'price_desc') results.sort((a, b) => b.price - a.price)
    else if (filters.sortBy === 'newest') results.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

    return results
  }, [filters])

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden">
      {/* Left Panel */}
      <div className="w-full lg:w-[560px] flex-shrink-0 flex flex-col overflow-hidden">
        {/* Filters */}
        <div className="p-4 border-b border-gray-200 bg-white">
          <div className="flex items-center justify-between mb-3">
            <h1 className="font-bold text-gray-900 text-lg">
              {filtered.length} Homes in Pompano Beach
            </h1>
          </div>
          <SearchFilters filters={filters} onChange={setFilters} />
        </div>

        {/* Listings */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <p className="text-lg font-medium">No properties match your search</p>
              <button
                onClick={() => setFilters({})}
                className="mt-3 text-sm text-blue-600 underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            filtered.map((property) => (
              <div
                key={property.id}
                className={`transition-all ${hoveredId === property.id ? 'ring-2 ring-blue-500 rounded-xl' : ''}`}
              >
                <PropertyCard property={property} />
              </div>
            ))
          )}
        </div>
      </div>

      {/* Map */}
      <div className="hidden lg:flex flex-1 p-4 bg-gray-100">
        <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
          <MapSearch
            properties={filtered}
            onPropertyHover={(id) => setHoveredId(id)}
          />
        </div>
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
      <SearchPageContent />
    </Suspense>
  )
}
