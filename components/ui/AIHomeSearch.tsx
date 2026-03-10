'use client';

import { useState } from 'react';
import { Search, Sparkles, Loader2 } from 'lucide-react';
import PropertyCard from './PropertyCard';
import type { Property } from '@/types';

const EXAMPLE_QUERIES = [
  'Waterfront home with pool under $1 million',
  '3 bedroom house in Lighthouse Point',
  'New construction condo near the beach',
  'Luxury home with boat dock over $2 million',
];

export default function AIHomeSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Property[]>([]);
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (q: string = query) => {
    if (!q.trim()) return;
    setLoading(true);
    setError('');
    setSearched(false);

    try {
      const res = await fetch('/api/ai-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q }),
      });

      if (!res.ok) throw new Error('Search failed');

      const data = (await res.json()) as { properties: Property[]; summary: string };
      setResults(data.properties ?? []);
      setSummary(data.summary ?? '');
      setSearched(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleExample = (example: string) => {
    setQuery(example);
    handleSearch(example);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-bold text-gray-900">AI Property Search</h3>
      </div>
      <p className="text-gray-500 text-sm mb-5">
        Describe your dream home in plain English and we&apos;ll find it for you.
      </p>

      {/* Search Input */}
      <div className="flex gap-2 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="e.g., Waterfront 3-bedroom under $900k with a pool..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={() => handleSearch()}
          disabled={loading || !query.trim()}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white rounded-xl px-5 py-3 font-medium text-sm transition-colors flex items-center gap-2"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
          Search
        </button>
      </div>

      {/* Example queries */}
      {!searched && !loading && (
        <div className="mb-6">
          <p className="text-xs text-gray-500 mb-2 font-medium">Try these examples:</p>
          <div className="flex flex-wrap gap-2">
            {EXAMPLE_QUERIES.map((ex) => (
              <button
                key={ex}
                onClick={() => handleExample(ex)}
                className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100 px-3 py-1.5 rounded-full transition-colors border border-blue-100"
              >
                {ex}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="bg-red-50 text-red-700 text-sm rounded-lg p-3 mb-4">{error}</div>
      )}

      {/* Loading */}
      {loading && (
        <div className="text-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-3" />
          <p className="text-gray-500 text-sm">Searching with AI...</p>
        </div>
      )}

      {/* Results */}
      {searched && !loading && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-medium text-gray-800">{summary}</p>
              <p className="text-sm text-gray-500">
                {results.length} {results.length === 1 ? 'property' : 'properties'} found
              </p>
            </div>
            <button
              onClick={() => { setSearched(false); setResults([]); setQuery(''); }}
              className="text-sm text-blue-600 hover:underline"
            >
              Clear
            </button>
          </div>

          {results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 text-gray-500">
              <p className="text-lg mb-2">No properties found</p>
              <p className="text-sm">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
