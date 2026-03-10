import { NextRequest, NextResponse } from 'next/server';
import type { Favorite } from '@/types';

// In-memory storage for favorites (resets on server restart)
const favoritesStore: Map<string, Favorite> = new Map();

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId') ?? 'anonymous';

  const userFavorites = Array.from(favoritesStore.values()).filter(
    (f) => f.userId === userId
  );

  return NextResponse.json({ favorites: userFavorites });
}

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { propertyId, userId = 'anonymous' } = body as { propertyId: string; userId?: string };

  if (!propertyId) {
    return NextResponse.json({ error: 'propertyId is required' }, { status: 400 });
  }

  const key = `${userId}-${propertyId}`;
  if (favoritesStore.has(key)) {
    return NextResponse.json({ message: 'Already favorited' }, { status: 200 });
  }

  const favorite: Favorite = {
    id: key,
    propertyId,
    userId,
    createdAt: new Date().toISOString(),
  };

  favoritesStore.set(key, favorite);

  return NextResponse.json({ favorite }, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const propertyId = searchParams.get('propertyId');
  const userId = searchParams.get('userId') ?? 'anonymous';

  if (!propertyId) {
    return NextResponse.json({ error: 'propertyId is required' }, { status: 400 });
  }

  const key = `${userId}-${propertyId}`;
  const deleted = favoritesStore.delete(key);

  if (!deleted) {
    return NextResponse.json({ error: 'Favorite not found' }, { status: 404 });
  }

  return NextResponse.json({ message: 'Favorite removed' });
}
