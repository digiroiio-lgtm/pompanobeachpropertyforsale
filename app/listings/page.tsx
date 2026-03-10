'use client'

import { useState, useMemo } from 'react'
import PropertyCard from '@/components/PropertyCard'
import SearchFilters from '@/components/SearchFilters'
import { mockProperties } from '@/lib/mockData'
import { SearchFilters as SearchFiltersType } from '@/lib/types'
import { LayoutGrid, List } from 'lucide-react'

export default function ListingsPage() {
  const [filters, setFilters] = useState<SearchFiltersType>({})
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filtered = useMemo(() => {
    let results = [...mockProperties]

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
    else if (filters.sortBy === 'sqft_desc') results.sort((a, b) => b.sqft - a.sqft)

    return results
  }, [filters])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Pompano Beach Homes for Sale</h1>
        <p className="text-gray-500 mt-1">{filtered.length} properties found</p>
      </div>

      <div className="flex gap-6">
        {/* Filters Sidebar */}
        <aside className="w-64 flex-shrink-0">
          <SearchFilters filters={filters} onChange={setFilters} />
        </aside>

        {/* Results */}
        <div className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500">
              Showing <strong>{filtered.length}</strong> properties
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-blue-100 text-blue-700' : 'text-gray-400 hover:text-gray-600'}`}
                aria-label="Grid view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-blue-100 text-blue-700' : 'text-gray-400 hover:text-gray-600'}`}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-xl font-medium mb-2">No properties found</p>
              <p className="text-sm">Try adjusting your filters</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5' : 'space-y-4'}>
              {filtered.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
