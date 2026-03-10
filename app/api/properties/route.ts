import { NextRequest, NextResponse } from 'next/server';
import { mockProperties, filterProperties } from '@/lib/mockData';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const type = searchParams.get('type') ?? undefined;
  const minPrice = searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : undefined;
  const maxPrice = searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined;
  const beds = searchParams.get('beds') ? Number(searchParams.get('beds')) : undefined;
  const baths = searchParams.get('baths') ? Number(searchParams.get('baths')) : undefined;
  const waterfront = searchParams.get('waterfront') === 'true' ? true : undefined;
  const pool = searchParams.get('pool') === 'true' ? true : undefined;
  const neighborhood = searchParams.get('neighborhood') ?? undefined;
  const newConstruction = searchParams.get('newConstruction') === 'true' ? true : undefined;

  // Return all if no filters
  const hasFilters = type || minPrice || maxPrice || beds || baths || waterfront || pool || neighborhood || newConstruction;

  const properties = hasFilters
    ? filterProperties({ type, minPrice, maxPrice, beds, baths, waterfront, pool, neighborhood, newConstruction })
    : mockProperties;

  return NextResponse.json({ properties, total: properties.length });
}
