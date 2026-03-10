import { NextRequest, NextResponse } from 'next/server';
import { getPropertyById } from '@/lib/mockData';

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const property = getPropertyById(params.id);

  if (!property) {
    return NextResponse.json({ error: 'Property not found' }, { status: 404 });
  }

  return NextResponse.json({ property });
}
