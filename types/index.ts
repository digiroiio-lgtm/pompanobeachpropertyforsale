export type PropertyType =
  | 'house'
  | 'condo'
  | 'townhouse'
  | 'villa'
  | 'waterfront'
  | 'luxury'
  | 'new-construction'
  | 'land';

export interface PriceHistory {
  date: string;
  price: number;
}

export interface NearbySchool {
  name: string;
  type: 'elementary' | 'middle' | 'high' | 'private';
  rating: number;
  distance: number; // miles
}

export interface Property {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  neighborhood: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  lot_size: number; // sq ft
  year_built: number;
  property_type: PropertyType;
  description: string;
  features: string[];
  images: string[];
  lat: number;
  lng: number;
  hoa_fee: number | null;
  tax_amount: number;
  days_on_market: number;
  status: 'active' | 'pending' | 'sold';
  is_waterfront: boolean;
  has_pool: boolean;
  has_garage: boolean;
  garage_spaces: number;
  price_history: PriceHistory[];
  nearby_schools: NearbySchool[];
  listing_date: string;
  mls_number: string;
  agent_name: string;
  agent_phone: string;
  virtual_tour_url?: string;
}

export interface SearchFilters {
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  beds?: number;
  baths?: number;
  propertyType?: PropertyType[];
  waterfront?: boolean;
  pool?: boolean;
  newConstruction?: boolean;
  neighborhood?: string;
  minSqft?: number;
  maxSqft?: number;
  minYearBuilt?: number;
  garage?: boolean;
}

export interface Favorite {
  id: string;
  propertyId: string;
  userId?: string;
  createdAt: string;
}

export interface Lead {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  propertyId?: string;
  type: 'schedule_showing' | 'request_info' | 'general';
  createdAt?: string;
}

export interface EmailAlert {
  id: string;
  email: string;
  filters: SearchFilters;
  frequency: 'daily' | 'weekly' | 'instant';
  createdAt: string;
}

export interface Neighborhood {
  name: string;
  slug: string;
  description: string;
  avgPrice: number;
  propertyCount: number;
  image: string;
  highlights: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  image: string;
  category: string;
  readTime: number;
}

export interface MortgageCalculation {
  homePrice: number;
  downPayment: number;
  downPaymentPercent: number;
  loanAmount: number;
  interestRate: number;
  loanTermYears: number;
  monthlyPayment: number;
  principalAndInterest: number;
  propertyTax: number;
  insurance: number;
  hoa: number;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}
