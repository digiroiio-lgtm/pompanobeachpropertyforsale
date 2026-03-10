'use client'

import { useState } from 'react'
import { Search, Sparkles } from 'lucide-react'
import { Property } from '@/lib/types'
import { mockProperties } from '@/lib/mockData'
import PropertyCard from './PropertyCard'

const SUGGESTIONS = [
  'Waterfront with pool',
  'Luxury condo downtown',
  'New construction under $500k',
  'Family home near schools',
  'Beachfront property',
  '3+ bedrooms with garage',
]

interface AIHomeSearchProps {
  onResults?: (results: Property[]) => void
}

export default function AIHomeSearch({ onResults }: AIHomeSearchProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Property[] | null>(null)
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) return
    setIsSearching(true)
    setQuery(searchQuery)

    setTimeout(() => {
      const q = searchQuery.toLowerCase()
      const filtered = mockProperties.filter((p) => {
        if (q.includes('waterfront') || q.includes('water front')) return p.isWaterfront
        if (q.includes('pool')) return p.hasPool
        if (q.includes('luxury')) return p.isLuxury
        if (q.includes('new construction') || q.includes('new build')) return p.isNewConstruction
        if (q.includes('condo')) return p.propertyType === 'condo'
        if (q.includes('house')) return p.propertyType === 'house'
        if (q.includes('under $500') || q.includes('under 500')) return p.price < 500000
        if (q.includes('under $1m') || q.includes('under 1m') || q.includes('under 1 million')) return p.price < 1000000
        if (q.includes('beach')) return p.isWaterfront || p.neighborhood.toLowerCase().includes('beach')
        if (q.includes('bedroom') || q.includes('bed')) {
          const match = q.match(/(\d+)\s*(?:\+\s*)?bedroom/)
          if (match) return p.bedrooms >= parseInt(match[1])
        }
        return (
          p.title.toLowerCase().includes(q) ||
          p.neighborhood.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
        )
      })

      setResults(filtered.length > 0 ? filtered : mockProperties.slice(0, 6))
      onResults?.(filtered)
      setIsSearching(false)
    }, 600)
  }

  return (
    <div className="w-full">
      {/* Search Bar */}
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Sparkles className="w-5 h-5 text-blue-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch(query)}
          placeholder="Describe your dream home... e.g. 'Waterfront home with pool and dock'"
          className="w-full pl-12 pr-32 py-4 text-gray-900 bg-white rounded-xl shadow-xl text-base focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
        />
        <button
          onClick={() => handleSearch(query)}
          disabled={isSearching}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors flex items-center gap-2"
        >
          {isSearching ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <Search className="w-4 h-4" />
          )}
          Search
        </button>
      </div>

      {/* Suggestion Chips */}
      <div className="flex flex-wrap gap-2 justify-center mt-4 max-w-3xl mx-auto">
        {SUGGESTIONS.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => handleSearch(suggestion)}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm px-4 py-1.5 rounded-full border border-white/30 transition-colors"
          >
            {suggestion}
          </button>
        ))}
      </div>

      {/* Results */}
      {results !== null && (
        <div className="mt-12 max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">
              {results.length} homes matching &ldquo;{query}&rdquo;
            </h3>
            <button
              onClick={() => setResults(null)}
              className="text-white/70 hover:text-white text-sm underline"
            >
              Clear results
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
