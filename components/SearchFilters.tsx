'use client'

import { useState } from 'react'
import { SearchFilters as SearchFiltersType, PropertyType } from '@/lib/types'
import { SlidersHorizontal, X } from 'lucide-react'

interface SearchFiltersProps {
  filters: SearchFiltersType
  onChange: (filters: SearchFiltersType) => void
}

const PRICE_OPTIONS = [
  { label: 'No min', value: undefined },
  { label: '$200k', value: 200000 },
  { label: '$300k', value: 300000 },
  { label: '$500k', value: 500000 },
  { label: '$750k', value: 750000 },
  { label: '$1M', value: 1000000 },
  { label: '$2M', value: 2000000 },
  { label: '$3M', value: 3000000 },
]

const MAX_PRICE_OPTIONS = [
  { label: 'No max', value: undefined },
  { label: '$300k', value: 300000 },
  { label: '$500k', value: 500000 },
  { label: '$750k', value: 750000 },
  { label: '$1M', value: 1000000 },
  { label: '$2M', value: 2000000 },
  { label: '$3M', value: 3000000 },
  { label: '$5M+', value: 5000000 },
]

export default function SearchFilters({ filters, onChange }: SearchFiltersProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const update = (partial: Partial<SearchFiltersType>) => {
    onChange({ ...filters, ...partial })
  }

  const clearAll = () => {
    onChange({})
  }

  const hasActiveFilters = Object.values(filters).some((v) => v !== undefined && v !== '')

  const filterContent = (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-blue-600" />
          <span className="font-semibold text-gray-800">Filters</span>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearAll}
            className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1 font-medium"
          >
            <X className="w-3 h-3" />
            Clear all
          </button>
        )}
      </div>

      {/* Listing Type */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Listing Type</label>
        <div className="flex gap-2">
          {[
            { label: 'For Sale', value: 'sale' },
            { label: 'For Rent', value: 'rent' },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() => update({ listingType: filters.listingType === opt.value ? undefined : (opt.value as 'sale' | 'rent') })}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors border ${
                filters.listingType === opt.value
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Price Range</label>
        <div className="flex gap-2">
          <select
            value={filters.minPrice ?? ''}
            onChange={(e) => update({ minPrice: e.target.value ? Number(e.target.value) : undefined })}
            className="flex-1 border border-gray-200 rounded-lg px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            {PRICE_OPTIONS.map((opt) => (
              <option key={String(opt.value)} value={opt.value ?? ''}>
                {opt.label}
              </option>
            ))}
          </select>
          <span className="self-center text-gray-400">–</span>
          <select
            value={filters.maxPrice ?? ''}
            onChange={(e) => update({ maxPrice: e.target.value ? Number(e.target.value) : undefined })}
            className="flex-1 border border-gray-200 rounded-lg px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            {MAX_PRICE_OPTIONS.map((opt) => (
              <option key={String(opt.value)} value={opt.value ?? ''}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Bedrooms */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Bedrooms</label>
        <div className="flex gap-1">
          {[undefined, 1, 2, 3, 4, 5].map((n) => (
            <button
              key={String(n)}
              onClick={() => update({ minBeds: n })}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors border ${
                filters.minBeds === n
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'
              }`}
            >
              {n === undefined ? 'Any' : `${n}+`}
            </button>
          ))}
        </div>
      </div>

      {/* Bathrooms */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Bathrooms</label>
        <div className="flex gap-1">
          {[undefined, 1, 2, 3].map((n) => (
            <button
              key={String(n)}
              onClick={() => update({ minBaths: n })}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors border ${
                filters.minBaths === n
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'
              }`}
            >
              {n === undefined ? 'Any' : `${n}+`}
            </button>
          ))}
        </div>
      </div>

      {/* Property Type */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Property Type</label>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: 'House', value: 'house' },
            { label: 'Condo', value: 'condo' },
            { label: 'Townhouse', value: 'townhouse' },
            { label: 'Land', value: 'land' },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() => update({ propertyType: filters.propertyType === opt.value ? undefined : (opt.value as PropertyType) })}
              className={`py-2 rounded-lg text-sm font-medium transition-colors border ${
                filters.propertyType === opt.value
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Features */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Features</label>
        <div className="space-y-2">
          {[
            { label: '🏊 Pool', key: 'hasPool' },
            { label: '⛵ Waterfront', key: 'isWaterfront' },
            { label: '✨ Luxury', key: 'isLuxury' },
            { label: '🏗️ New Construction', key: 'isNewConstruction' },
          ].map((feat) => (
            <label key={feat.key} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={!!filters[feat.key as keyof SearchFiltersType]}
                onChange={(e) => update({ [feat.key]: e.target.checked ? true : undefined })}
                className="w-4 h-4 accent-blue-600 rounded"
              />
              <span className="text-sm text-gray-600 group-hover:text-gray-800">{feat.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Sort By</label>
        <select
          value={filters.sortBy ?? ''}
          onChange={(e) => update({ sortBy: e.target.value as SearchFiltersType['sortBy'] || undefined })}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <option value="">Best Match</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="newest">Newest</option>
          <option value="sqft_desc">Largest</option>
        </select>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters {hasActiveFilters && <span className="bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{Object.values(filters).filter(Boolean).length}</span>}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div className="bg-black/40 flex-1" onClick={() => setMobileOpen(false)} />
          <div className="w-80 bg-white p-6 overflow-y-auto">
            {filterContent}
            <button
              onClick={() => setMobileOpen(false)}
              className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold"
            >
              Show Results
            </button>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:block bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
        {filterContent}
      </div>
    </>
  )
}
