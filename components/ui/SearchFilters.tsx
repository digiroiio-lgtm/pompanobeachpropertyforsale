'use client';

import { useState, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { SlidersHorizontal, X } from 'lucide-react';
import { PROPERTY_TYPES, PRICE_RANGES, BEDROOM_OPTIONS, BATHROOM_OPTIONS } from '@/lib/propertyTypes';

export default function SearchFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [minPrice, setMinPrice] = useState(searchParams.get('minPrice') ?? '');
  const [maxPrice, setMaxPrice] = useState(searchParams.get('maxPrice') ?? '');
  const [beds, setBeds] = useState(searchParams.get('beds') ?? '');
  const [baths, setBaths] = useState(searchParams.get('baths') ?? '');
  const [selectedTypes, setSelectedTypes] = useState<string[]>(
    searchParams.get('type') ? [searchParams.get('type')!] : []
  );
  const [waterfront, setWaterfront] = useState(searchParams.get('waterfront') === 'true');
  const [pool, setPool] = useState(searchParams.get('pool') === 'true');
  const [newConstruction, setNewConstruction] = useState(searchParams.get('newConstruction') === 'true');
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleType = useCallback((type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }, []);

  const applyFilters = useCallback(() => {
    const params = new URLSearchParams();
    if (minPrice) params.set('minPrice', minPrice);
    if (maxPrice) params.set('maxPrice', maxPrice);
    if (beds) params.set('beds', beds);
    if (baths) params.set('baths', baths);
    if (selectedTypes.length === 1) params.set('type', selectedTypes[0]);
    if (waterfront) params.set('waterfront', 'true');
    if (pool) params.set('pool', 'true');
    if (newConstruction) params.set('newConstruction', 'true');

    router.push(`/search?${params.toString()}`);
    setMobileOpen(false);
  }, [minPrice, maxPrice, beds, baths, selectedTypes, waterfront, pool, newConstruction, router]);

  const resetFilters = useCallback(() => {
    setMinPrice('');
    setMaxPrice('');
    setBeds('');
    setBaths('');
    setSelectedTypes([]);
    setWaterfront(false);
    setPool(false);
    setNewConstruction(false);
    router.push('/search');
  }, [router]);

  const filterContent = (
    <div className="space-y-6">
      {/* Price Range */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-2">Price Range</h3>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Min Price</label>
            <select
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Any</option>
              {PRICE_RANGES.filter((p) => p.value > 0).map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Max Price</label>
            <select
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Any</option>
              {PRICE_RANGES.filter((p) => p.value > 0).map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Bedrooms */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-2">Bedrooms</h3>
        <div className="flex gap-1 flex-wrap">
          {BEDROOM_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setBeds(opt.value === 0 ? '' : String(opt.value))}
              className={`px-3 py-1.5 rounded-lg text-sm border transition-colors ${
                (opt.value === 0 ? beds === '' : beds === String(opt.value))
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bathrooms */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-2">Bathrooms</h3>
        <div className="flex gap-1 flex-wrap">
          {BATHROOM_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setBaths(opt.value === 0 ? '' : String(opt.value))}
              className={`px-3 py-1.5 rounded-lg text-sm border transition-colors ${
                (opt.value === 0 ? baths === '' : baths === String(opt.value))
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Property Types */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-2">Property Type</h3>
        <div className="space-y-1.5">
          {PROPERTY_TYPES.map((pt) => (
            <label key={pt.value} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedTypes.includes(pt.value)}
                onChange={() => toggleType(pt.value)}
                className="w-4 h-4 accent-blue-600 rounded"
              />
              <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
                {pt.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Features */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-2">Features</h3>
        <div className="space-y-2">
          {[
            { key: 'waterfront', label: 'Waterfront', value: waterfront, setter: setWaterfront },
            { key: 'pool', label: 'Pool', value: pool, setter: setPool },
            { key: 'newConstruction', label: 'New Construction', value: newConstruction, setter: setNewConstruction },
          ].map(({ key, label, value, setter }) => (
            <label key={key} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={value}
                onChange={(e) => setter(e.target.checked)}
                className="w-4 h-4 accent-blue-600 rounded"
              />
              <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
                {label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2 pt-2">
        <button
          onClick={applyFilters}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2.5 font-medium text-sm transition-colors"
        >
          Apply Filters
        </button>
        <button
          onClick={resetFilters}
          className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg px-4 py-2.5 font-medium text-sm transition-colors"
        >
          Reset All
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block bg-white rounded-xl border border-gray-200 p-5 h-fit sticky top-20">
        <h2 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-blue-600" />
          Filter Properties
        </h2>
        {filterContent}
      </div>

      {/* Mobile Filter Button & Drawer */}
      <div className="lg:hidden">
        <button
          onClick={() => setMobileOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white rounded-lg px-4 py-2.5 text-sm font-medium"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
          {(minPrice || maxPrice || beds || baths || selectedTypes.length > 0 || waterfront || pool || newConstruction) && (
            <span className="bg-white text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              !
            </span>
          )}
        </button>

        {/* Drawer */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
            <div className="relative ml-auto w-80 max-w-full bg-white h-full overflow-y-auto p-5 shadow-xl">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-blue-600" />
                  Filter Properties
                </h2>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              {filterContent}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
