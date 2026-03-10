export type PropertyType = 'house' | 'condo' | 'townhouse' | 'land'
export type ListingType = 'sale' | 'rent'

export interface Agent {
  name: string
  phone: string
  email: string
  photo: string
}

export interface Property {
  id: string
  title: string
  address: string
  city: string
  state: string
  zip: string
  price: number
  bedrooms: number
  bathrooms: number
  sqft: number
  propertyType: PropertyType
  listingType: ListingType
  description: string
  images: string[]
  lat: number
  lng: number
  yearBuilt: number
  lotSize: number
  parkingSpaces: number
  hasPool: boolean
  isWaterfront: boolean
  isLuxury: boolean
  isNewConstruction: boolean
  neighborhood: string
  agent: Agent
  createdAt: string
  updatedAt: string
}

export interface SearchFilters {
  query?: string
  minPrice?: number
  maxPrice?: number
  minBeds?: number
  maxBeds?: number
  minBaths?: number
  maxBaths?: number
  minSqft?: number
  maxSqft?: number
  propertyType?: PropertyType
  listingType?: ListingType
  hasPool?: boolean
  isWaterfront?: boolean
  isLuxury?: boolean
  isNewConstruction?: boolean
  neighborhood?: string
  sortBy?: 'price_asc' | 'price_desc' | 'newest' | 'sqft_desc'
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  publishedAt: string
  author: {
    name: string
    photo: string
  }
}

export interface Neighborhood {
  id: string
  name: string
  slug: string
  description: string
  avgPrice: number
  properties: number
  image: string
}

export interface PriceHistoryEntry {
  date: string
  price: number
  event: 'listed' | 'sold' | 'price_drop' | 'price_increase'
}
