import type { PropertyType, Neighborhood } from '@/types';

export const PROPERTY_TYPES: { value: PropertyType; label: string }[] = [
  { value: 'house', label: 'Single Family Home' },
  { value: 'condo', label: 'Condo' },
  { value: 'townhouse', label: 'Townhouse' },
  { value: 'villa', label: 'Villa' },
  { value: 'waterfront', label: 'Waterfront Home' },
  { value: 'luxury', label: 'Luxury Home' },
  { value: 'new-construction', label: 'New Construction' },
  { value: 'land', label: 'Land / Lot' },
];

export const PRICE_RANGES = [
  { value: 0, label: 'Any' },
  { value: 200000, label: '$200,000' },
  { value: 300000, label: '$300,000' },
  { value: 400000, label: '$400,000' },
  { value: 500000, label: '$500,000' },
  { value: 600000, label: '$600,000' },
  { value: 750000, label: '$750,000' },
  { value: 1000000, label: '$1,000,000' },
  { value: 1500000, label: '$1,500,000' },
  { value: 2000000, label: '$2,000,000' },
  { value: 3000000, label: '$3,000,000' },
  { value: 5000000, label: '$5,000,000' },
];

export const BEDROOM_OPTIONS = [
  { value: 0, label: 'Any' },
  { value: 1, label: '1+' },
  { value: 2, label: '2+' },
  { value: 3, label: '3+' },
  { value: 4, label: '4+' },
  { value: 5, label: '5+' },
];

export const BATHROOM_OPTIONS = [
  { value: 0, label: 'Any' },
  { value: 1, label: '1+' },
  { value: 2, label: '2+' },
  { value: 3, label: '3+' },
  { value: 4, label: '4+' },
];

export const POMPANO_NEIGHBORHOODS: Neighborhood[] = [
  {
    name: 'Downtown Pompano',
    slug: 'downtown-pompano',
    description:
      'The vibrant heart of Pompano Beach featuring restaurants, shops, and easy access to the beach. A mix of condos and historic homes.',
    avgPrice: 485000,
    propertyCount: 142,
    image: 'https://picsum.photos/seed/downtown-pompano/800/600',
    highlights: ['Walkable to beach', 'Restaurants & nightlife', 'Historic district', 'Condo living'],
  },
  {
    name: 'Lighthouse Point Area',
    slug: 'lighthouse-point',
    description:
      'Exclusive waterfront community known for its upscale homes, private docks, and proximity to the Intracoastal Waterway.',
    avgPrice: 1250000,
    propertyCount: 87,
    image: 'https://picsum.photos/seed/lighthouse-point/800/600',
    highlights: ['Deep water docks', 'Luxury waterfront', 'Top-rated schools', 'Quiet streets'],
  },
  {
    name: 'Harbor Village',
    slug: 'harbor-village',
    description:
      'A boater\'s paradise with canal-front homes and direct ocean access. Known for its friendly community and beautiful sunsets.',
    avgPrice: 875000,
    propertyCount: 113,
    image: 'https://picsum.photos/seed/harbor-village/800/600',
    highlights: ['Canal front homes', 'Boat docks', 'Ocean access', 'Active community'],
  },
  {
    name: 'Pompano Isles',
    slug: 'pompano-isles',
    description:
      'Scenic island community surrounded by waterways. Perfect for water sports enthusiasts with many homes featuring private pools.',
    avgPrice: 695000,
    propertyCount: 96,
    image: 'https://picsum.photos/seed/pompano-isles/800/600',
    highlights: ['Island setting', 'Private pools', 'Water sports', 'Family-friendly'],
  },
  {
    name: 'Crystal Lake',
    slug: 'crystal-lake',
    description:
      'Tranquil lakefront community offering peaceful living with beautiful water views and well-maintained properties.',
    avgPrice: 425000,
    propertyCount: 178,
    image: 'https://picsum.photos/seed/crystal-lake/800/600',
    highlights: ['Lake views', 'Peaceful setting', 'Great value', 'Community park'],
  },
  {
    name: 'Collier Manor',
    slug: 'collier-manor',
    description:
      'Established neighborhood with mature trees, spacious lots, and a mix of classic and updated homes at accessible price points.',
    avgPrice: 385000,
    propertyCount: 203,
    image: 'https://picsum.photos/seed/collier-manor/800/600',
    highlights: ['Spacious lots', 'Mature landscaping', 'Affordable prices', 'Good schools'],
  },
  {
    name: 'McNab',
    slug: 'mcnab',
    description:
      'Growing neighborhood with new construction and renovated homes. Excellent location near major highways and shopping.',
    avgPrice: 520000,
    propertyCount: 156,
    image: 'https://picsum.photos/seed/mcnab/800/600',
    highlights: ['New construction', 'Great location', 'Shopping nearby', 'Growing community'],
  },
  {
    name: 'Cypress Head',
    slug: 'cypress-head',
    description:
      'Golf course community featuring luxury homes surrounding the Cypress Head Golf Course. Perfect for golf enthusiasts.',
    avgPrice: 780000,
    propertyCount: 64,
    image: 'https://picsum.photos/seed/cypress-head/800/600',
    highlights: ['Golf course', 'Gated community', 'Luxury homes', 'Club amenities'],
  },
];

export const POMPANO_STATS = {
  propertiesSold: 1247,
  avgPrice: 672000,
  avgDaysOnMarket: 28,
  priceChangePercent: 4.2,
};
