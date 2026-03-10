import { NextRequest, NextResponse } from 'next/server';
import { parsePropertySearch } from '@/lib/openai';
import { filterProperties } from '@/lib/mockData';

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { query } = body as { query?: string };

  if (!query || typeof query !== 'string' || query.trim().length === 0) {
    return NextResponse.json({ error: 'query is required' }, { status: 400 });
  }

  try {
    const { filters, summary } = await parsePropertySearch(query.trim());

    const properties = filterProperties({
      type: filters.propertyType?.[0],
      minPrice: filters.minPrice,
      maxPrice: filters.maxPrice,
      beds: filters.beds,
      baths: filters.baths,
      waterfront: filters.waterfront,
      pool: filters.pool,
      neighborhood: filters.neighborhood,
      newConstruction: filters.newConstruction,
    });

    return NextResponse.json({ properties, summary, filters, total: properties.length });
  } catch {
    return NextResponse.json({ error: 'Search processing failed' }, { status: 500 });
  }
}
