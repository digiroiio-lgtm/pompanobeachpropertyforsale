'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Bed, Bath, Square, Tag } from 'lucide-react';
import type { Property } from '@/types';
import clsx from 'clsx';

interface PropertyCardProps {
  property: Property;
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price);
}

function formatSqft(sqft: number): string {
  return new Intl.NumberFormat('en-US').format(sqft);
}

const typeLabels: Record<string, string> = {
  house: 'House',
  condo: 'Condo',
  townhouse: 'Townhouse',
  villa: 'Villa',
  waterfront: 'Waterfront',
  luxury: 'Luxury',
  'new-construction': 'New Construction',
  land: 'Land',
};

const typeBadgeColors: Record<string, string> = {
  house: 'bg-blue-100 text-blue-800',
  condo: 'bg-purple-100 text-purple-800',
  townhouse: 'bg-indigo-100 text-indigo-800',
  villa: 'bg-pink-100 text-pink-800',
  waterfront: 'bg-cyan-100 text-cyan-800',
  luxury: 'bg-amber-100 text-amber-800',
  'new-construction': 'bg-green-100 text-green-800',
  land: 'bg-gray-100 text-gray-800',
};

export default function PropertyCard({ property }: PropertyCardProps) {
  const [favorited, setFavorited] = useState(false);
  const isNew = property.days_on_market <= 7;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Link href={`/property/${property.id}`}>
          <Image
            src={property.images[0]}
            alt={property.address}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          {isNew && (
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-md">
              NEW
            </span>
          )}
          {property.is_waterfront && (
            <span className="bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded-md">
              WATERFRONT
            </span>
          )}
        </div>

        {/* Favorite */}
        <button
          onClick={() => setFavorited((prev) => !prev)}
          className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow hover:scale-110 transition-transform"
          aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            className={clsx('w-5 h-5 transition-colors', favorited ? 'fill-red-500 text-red-500' : 'text-gray-400')}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Price */}
        <div className="flex items-start justify-between mb-1">
          <p className="text-2xl font-bold text-gray-900">{formatPrice(property.price)}</p>
          <span className={clsx('text-xs font-semibold px-2 py-1 rounded-full', typeBadgeColors[property.property_type] ?? 'bg-gray-100 text-gray-800')}>
            <Tag className="inline w-3 h-3 mr-1" />
            {typeLabels[property.property_type] ?? property.property_type}
          </span>
        </div>

        {/* Address */}
        <Link href={`/property/${property.id}`} className="hover:text-blue-600 transition-colors">
          <p className="text-gray-800 font-medium text-sm leading-snug">
            {property.address}
          </p>
          <p className="text-gray-500 text-xs">
            {property.city}, {property.state} {property.zip}
          </p>
        </Link>

        {/* Stats */}
        <div className="flex items-center gap-4 mt-3 text-sm text-gray-600 border-t border-gray-100 pt-3">
          <span className="flex items-center gap-1">
            <Bed className="w-4 h-4 text-gray-400" />
            {property.beds} bd
          </span>
          <span className="flex items-center gap-1">
            <Bath className="w-4 h-4 text-gray-400" />
            {property.baths} ba
          </span>
          <span className="flex items-center gap-1">
            <Square className="w-4 h-4 text-gray-400" />
            {formatSqft(property.sqft)} sqft
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-gray-400">
            {property.days_on_market === 0 ? 'Listed today' : `${property.days_on_market} days on market`}
          </span>
          <Link
            href={`/property/${property.id}`}
            className="text-blue-600 text-xs font-semibold hover:underline"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
