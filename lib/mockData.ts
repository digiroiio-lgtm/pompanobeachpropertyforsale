import { Property, BlogPost, Neighborhood } from './types'

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Stunning Waterfront Estate with Private Dock',
    address: '1420 S Riverside Dr',
    city: 'Pompano Beach',
    state: 'FL',
    zip: '33062',
    price: 2450000,
    bedrooms: 5,
    bathrooms: 4.5,
    sqft: 4800,
    propertyType: 'house',
    listingType: 'sale',
    description:
      'Magnificent waterfront estate on the Intracoastal Waterway featuring a private dock, resort-style pool, and breathtaking water views. This luxurious 5-bedroom home boasts an open-concept layout, chef\'s kitchen with Sub-Zero appliances, and a master suite with panoramic water views. Located in the exclusive Harbor Village neighborhood, minutes from the beach.',
    images: [
      'https://picsum.photos/seed/prop1a/800/600',
      'https://picsum.photos/seed/prop1b/800/600',
      'https://picsum.photos/seed/prop1c/800/600',
      'https://picsum.photos/seed/prop1d/800/600',
    ],
    lat: 26.2425,
    lng: -80.1023,
    yearBuilt: 2019,
    lotSize: 12500,
    parkingSpaces: 3,
    hasPool: true,
    isWaterfront: true,
    isLuxury: true,
    isNewConstruction: false,
    neighborhood: 'Harbor Village',
    agent: {
      name: 'Jennifer Martinez',
      phone: '(954) 555-0101',
      email: 'jennifer@pompanohomes.com',
      photo: 'https://picsum.photos/seed/agent1/100/100',
    },
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    title: 'New Construction Luxury Pool Home',
    address: '815 NE 7th St',
    city: 'Pompano Beach',
    state: 'FL',
    zip: '33060',
    price: 875000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2950,
    propertyType: 'house',
    listingType: 'sale',
    description:
      'Brand new construction luxury home featuring modern architecture, impact windows, and a gorgeous heated pool. This stunning 4-bedroom home offers an open floor plan with high ceilings, gourmet kitchen, and a 2-car garage. Located in the desirable McNab Plat neighborhood close to top-rated schools and shopping.',
    images: [
      'https://picsum.photos/seed/prop2a/800/600',
      'https://picsum.photos/seed/prop2b/800/600',
      'https://picsum.photos/seed/prop2c/800/600',
      'https://picsum.photos/seed/prop2d/800/600',
    ],
    lat: 26.2398,
    lng: -80.1287,
    yearBuilt: 2024,
    lotSize: 7500,
    parkingSpaces: 2,
    hasPool: true,
    isWaterfront: false,
    isLuxury: true,
    isNewConstruction: true,
    neighborhood: 'McNab Plat',
    agent: {
      name: 'Robert Thompson',
      phone: '(954) 555-0102',
      email: 'robert@pompanohomes.com',
      photo: 'https://picsum.photos/seed/agent2/100/100',
    },
    createdAt: '2024-02-01T10:00:00Z',
    updatedAt: '2024-02-01T10:00:00Z',
  },
  {
    id: '3',
    title: 'Oceanfront Luxury Condo - Direct Beach Access',
    address: '1000 S Ocean Blvd #1205',
    city: 'Pompano Beach',
    state: 'FL',
    zip: '33062',
    price: 1250000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1850,
    propertyType: 'condo',
    listingType: 'sale',
    description:
      'Spectacular 12th-floor oceanfront condo with unobstructed Atlantic Ocean views. This fully renovated unit features floor-to-ceiling windows, a gourmet kitchen with quartz countertops, and a large wraparound balcony. The building offers resort-style amenities including pool, fitness center, and 24-hour security.',
    images: [
      'https://picsum.photos/seed/prop3a/800/600',
      'https://picsum.photos/seed/prop3b/800/600',
      'https://picsum.photos/seed/prop3c/800/600',
      'https://picsum.photos/seed/prop3d/800/600',
    ],
    lat: 26.2312,
    lng: -80.0987,
    yearBuilt: 2008,
    lotSize: 0,
    parkingSpaces: 1,
    hasPool: true,
    isWaterfront: true,
    isLuxury: true,
    isNewConstruction: false,
    neighborhood: 'Pompano Beach Highlands',
    agent: {
      name: 'Sarah Chen',
      phone: '(954) 555-0103',
      email: 'sarah@pompanohomes.com',
      photo: 'https://picsum.photos/seed/agent3/100/100',
    },
    createdAt: '2024-01-28T10:00:00Z',
    updatedAt: '2024-02-10T10:00:00Z',
  },
  {
    id: '4',
    title: 'Charming Family Home in Lighthouse Point',
    address: '2847 NE 26th Ave',
    city: 'Lighthouse Point',
    state: 'FL',
    zip: '33064',
    price: 699000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1920,
    propertyType: 'house',
    listingType: 'sale',
    description:
      'Beautifully updated single-family home in sought-after Lighthouse Point. Features include a renovated kitchen with stainless steel appliances, updated bathrooms, hardwood floors throughout, and a spacious backyard with room for a pool. Walking distance to top-rated schools and the Intracoastal Waterway.',
    images: [
      'https://picsum.photos/seed/prop4a/800/600',
      'https://picsum.photos/seed/prop4b/800/600',
      'https://picsum.photos/seed/prop4c/800/600',
    ],
    lat: 26.2731,
    lng: -80.0895,
    yearBuilt: 1978,
    lotSize: 9200,
    parkingSpaces: 2,
    hasPool: false,
    isWaterfront: false,
    isLuxury: false,
    isNewConstruction: false,
    neighborhood: 'Lighthouse Point',
    agent: {
      name: 'Michael Davis',
      phone: '(954) 555-0104',
      email: 'michael@pompanohomes.com',
      photo: 'https://picsum.photos/seed/agent4/100/100',
    },
    createdAt: '2024-02-05T10:00:00Z',
    updatedAt: '2024-02-05T10:00:00Z',
  },
  {
    id: '5',
    title: 'Intracoastal Townhouse with Boat Slip',
    address: '440 Bayview Dr #12',
    city: 'Pompano Beach',
    state: 'FL',
    zip: '33062',
    price: 985000,
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 2400,
    propertyType: 'townhouse',
    listingType: 'sale',
    description:
      'Rare Intracoastal townhouse with private boat slip and stunning water views from every level. Features include a rooftop deck, private elevator, two-car garage, and a gourmet kitchen. Enjoy the South Florida lifestyle with direct Intracoastal access and proximity to the beach.',
    images: [
      'https://picsum.photos/seed/prop5a/800/600',
      'https://picsum.photos/seed/prop5b/800/600',
      'https://picsum.photos/seed/prop5c/800/600',
    ],
    lat: 26.2356,
    lng: -80.1034,
    yearBuilt: 2015,
    lotSize: 3200,
    parkingSpaces: 2,
    hasPool: false,
    isWaterfront: true,
    isLuxury: true,
    isNewConstruction: false,
    neighborhood: 'Pompano Isles',
    agent: {
      name: 'Jennifer Martinez',
      phone: '(954) 555-0101',
      email: 'jennifer@pompanohomes.com',
      photo: 'https://picsum.photos/seed/agent1/100/100',
    },
    createdAt: '2024-01-20T10:00:00Z',
    updatedAt: '2024-01-25T10:00:00Z',
  },
  {
    id: '6',
    title: 'Modern Condo with Pool Views - Walk to Beach',
    address: '333 N Pompano Beach Blvd #508',
    city: 'Pompano Beach',
    state: 'FL',
    zip: '33062',
    price: 489000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1150,
    propertyType: 'condo',
    listingType: 'sale',
    description:
      'Updated 2-bedroom condo just steps from the beach. Features include an open kitchen with granite countertops, tile floors throughout, and a private balcony with pool and ocean glimpses. Building amenities include heated pool, fitness center, and covered parking.',
    images: [
      'https://picsum.photos/seed/prop6a/800/600',
      'https://picsum.photos/seed/prop6b/800/600',
      'https://picsum.photos/seed/prop6c/800/600',
    ],
    lat: 26.2401,
    lng: -80.1012,
    yearBuilt: 1998,
    lotSize: 0,
    parkingSpaces: 1,
    hasPool: true,
    isWaterfront: false,
    isLuxury: false,
    isNewConstruction: false,
    neighborhood: 'Pompano Beach Highlands',
    agent: {
      name: 'Amanda Wilson',
      phone: '(954) 555-0105',
      email: 'amanda@pompanohomes.com',
      photo: 'https://picsum.photos/seed/agent5/100/100',
    },
    createdAt: '2024-02-12T10:00:00Z',
    updatedAt: '2024-02-12T10:00:00Z',
  },
  {
    id: '7',
    title: 'Renovated Pool Home - No HOA',
    address: '1621 NW 8th Ct',
    city: 'Pompano Beach',
    state: 'FL',
    zip: '33069',
    price: 425000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1680,
    propertyType: 'house',
    listingType: 'sale',
    description:
      'Fully renovated 3-bedroom home with a sparkling pool and no HOA fees. Recent updates include a new roof, AC, kitchen with white shaker cabinets, and both bathrooms. The large fenced backyard with pool and covered patio is perfect for entertaining.',
    images: [
      'https://picsum.photos/seed/prop7a/800/600',
      'https://picsum.photos/seed/prop7b/800/600',
      'https://picsum.photos/seed/prop7c/800/600',
    ],
    lat: 26.2452,
    lng: -80.1423,
    yearBuilt: 1972,
    lotSize: 8100,
    parkingSpaces: 1,
    hasPool: true,
    isWaterfront: false,
    isLuxury: false,
    isNewConstruction: false,
    neighborhood: 'Cresthaven',
    agent: {
      name: 'Robert Thompson',
      phone: '(954) 555-0102',
      email: 'robert@pompanohomes.com',
      photo: 'https://picsum.photos/seed/agent2/100/100',
    },
    createdAt: '2024-02-08T10:00:00Z',
    updatedAt: '2024-02-15T10:00:00Z',
  },
  {
    id: '8',
    title: 'Mega Yacht Waterfront Mansion',
    address: '951 Riviera Dr',
    city: 'Pompano Beach',
    state: 'FL',
    zip: '33062',
    price: 4750000,
    bedrooms: 6,
    bathrooms: 6.5,
    sqft: 7200,
    propertyType: 'house',
    listingType: 'sale',
    description:
      'Trophy waterfront estate on deep water with 120 ft of Intracoastal frontage and a private mega yacht dock. This extraordinary 7,200 sq ft residence features a resort-style pool and spa, summer kitchen, home theater, wine cellar, and elevator. The master suite occupies the entire third floor with 360-degree water views.',
    images: [
      'https://picsum.photos/seed/prop8a/800/600',
      'https://picsum.photos/seed/prop8b/800/600',
      'https://picsum.photos/seed/prop8c/800/600',
      'https://picsum.photos/seed/prop8d/800/600',
    ],
    lat: 26.2289,
    lng: -80.1056,
    yearBuilt: 2021,
    lotSize: 18000,
    parkingSpaces: 4,
    hasPool: true,
    isWaterfront: true,
    isLuxury: true,
    isNewConstruction: false,
    neighborhood: 'Harbor Village',
    agent: {
      name: 'Sarah Chen',
      phone: '(954) 555-0103',
      email: 'sarah@pompanohomes.com',
      photo: 'https://picsum.photos/seed/agent3/100/100',
    },
    createdAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-01-10T10:00:00Z',
  },
  {
    id: '9',
    title: 'New Construction Waterfront Condo',
    address: '200 N Ocean Blvd #901',
    city: 'Pompano Beach',
    state: 'FL',
    zip: '33062',
    price: 1850000,
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2200,
    propertyType: 'condo',
    listingType: 'sale',
    description:
      'Stunning new construction oceanfront condo delivering 2024. Features include 10-foot ceilings, floor-to-ceiling impact glass, chef\'s kitchen with Italian cabinetry, and a massive terrace perfect for entertaining. World-class amenities including rooftop pool, fitness center, concierge, and beach club.',
    images: [
      'https://picsum.photos/seed/prop9a/800/600',
      'https://picsum.photos/seed/prop9b/800/600',
      'https://picsum.photos/seed/prop9c/800/600',
    ],
    lat: 26.2445,
    lng: -80.0981,
    yearBuilt: 2024,
    lotSize: 0,
    parkingSpaces: 2,
    hasPool: true,
    isWaterfront: true,
    isLuxury: true,
    isNewConstruction: true,
    neighborhood: 'Pompano Beach Highlands',
    agent: {
      name: 'Jennifer Martinez',
      phone: '(954) 555-0101',
      email: 'jennifer@pompanohomes.com',
      photo: 'https://picsum.photos/seed/agent1/100/100',
    },
    createdAt: '2024-02-20T10:00:00Z',
    updatedAt: '2024-02-20T10:00:00Z',
  },
  {
    id: '10',
    title: 'Affordable Starter Home Near Beach',
    address: '512 SE 4th St',
    city: 'Pompano Beach',
    state: 'FL',
    zip: '33060',
    price: 379000,
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1050,
    propertyType: 'house',
    listingType: 'sale',
    description:
      'Great opportunity to own a piece of Pompano Beach! This updated 2-bedroom home is just 1.5 miles from the beach. Features include tile floors, updated kitchen and bathroom, a large carport, and a spacious backyard with mature landscaping. Perfect for first-time buyers or investors.',
    images: [
      'https://picsum.photos/seed/prop10a/800/600',
      'https://picsum.photos/seed/prop10b/800/600',
    ],
    lat: 26.2367,
    lng: -80.1198,
    yearBuilt: 1958,
    lotSize: 6500,
    parkingSpaces: 1,
    hasPool: false,
    isWaterfront: false,
    isLuxury: false,
    isNewConstruction: false,
    neighborhood: 'Old Pompano',
    agent: {
      name: 'Michael Davis',
      phone: '(954) 555-0104',
      email: 'michael@pompanohomes.com',
      photo: 'https://picsum.photos/seed/agent4/100/100',
    },
    createdAt: '2024-02-18T10:00:00Z',
    updatedAt: '2024-02-18T10:00:00Z',
  },
  {
    id: '11',
    title: 'Golf Course View Townhouse - Paloma Lakes',
    address: '3890 Oaks Clubhouse Dr #305',
    city: 'Pompano Beach',
    state: 'FL',
    zip: '33069',
    price: 355000,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1740,
    propertyType: 'townhouse',
    listingType: 'sale',
    description:
      'Gorgeous golf course view townhouse in the gated Paloma Lakes community. This 3-bedroom, 2.5-bath end unit features an updated kitchen, vaulted ceilings, a one-car garage, and a private screened patio overlooking the golf course. Community amenities include pool, tennis courts, and gym.',
    images: [
      'https://picsum.photos/seed/prop11a/800/600',
      'https://picsum.photos/seed/prop11b/800/600',
      'https://picsum.photos/seed/prop11c/800/600',
    ],
    lat: 26.2512,
    lng: -80.1534,
    yearBuilt: 2004,
    lotSize: 2800,
    parkingSpaces: 1,
    hasPool: true,
    isWaterfront: false,
    isLuxury: false,
    isNewConstruction: false,
    neighborhood: 'Palm Aire',
    agent: {
      name: 'Amanda Wilson',
      phone: '(954) 555-0105',
      email: 'amanda@pompanohomes.com',
      photo: 'https://picsum.photos/seed/agent5/100/100',
    },
    createdAt: '2024-02-14T10:00:00Z',
    updatedAt: '2024-02-14T10:00:00Z',
  },
  {
    id: '12',
    title: 'Brand New Luxury Estate - Modern Architecture',
    address: '1185 NE 33rd St',
    city: 'Pompano Beach',
    state: 'FL',
    zip: '33064',
    price: 1475000,
    bedrooms: 5,
    bathrooms: 5,
    sqft: 4100,
    propertyType: 'house',
    listingType: 'sale',
    description:
      'Spectacular new construction luxury estate showcasing contemporary architecture at its finest. This 5-bedroom masterpiece features soaring 12-foot ceilings, a chef\'s kitchen with waterfall island, spa-like master bath, and a state-of-the-art smart home system. The outdoor area boasts a custom pool with sunshelf, summer kitchen, and covered lanai.',
    images: [
      'https://picsum.photos/seed/prop12a/800/600',
      'https://picsum.photos/seed/prop12b/800/600',
      'https://picsum.photos/seed/prop12c/800/600',
      'https://picsum.photos/seed/prop12d/800/600',
    ],
    lat: 26.2789,
    lng: -80.1112,
    yearBuilt: 2024,
    lotSize: 11200,
    parkingSpaces: 3,
    hasPool: true,
    isWaterfront: false,
    isLuxury: true,
    isNewConstruction: true,
    neighborhood: 'Lighthouse Point',
    agent: {
      name: 'Robert Thompson',
      phone: '(954) 555-0102',
      email: 'robert@pompanohomes.com',
      photo: 'https://picsum.photos/seed/agent2/100/100',
    },
    createdAt: '2024-02-22T10:00:00Z',
    updatedAt: '2024-02-22T10:00:00Z',
  },
]

export const mockNeighborhoods: Neighborhood[] = [
  {
    id: '1',
    name: 'Harbor Village',
    slug: 'harbor-village',
    description:
      'Harbor Village is an exclusive waterfront enclave known for its mega-yacht docks and ultra-luxury estates along the Intracoastal Waterway.',
    avgPrice: 3200000,
    properties: 24,
    image: 'https://picsum.photos/seed/hood1/600/400',
  },
  {
    id: '2',
    name: 'Lighthouse Point',
    slug: 'lighthouse-point',
    description:
      'Lighthouse Point is a charming waterfront city within Pompano Beach, known for its beautiful canals, great schools, and family-friendly atmosphere.',
    avgPrice: 875000,
    properties: 156,
    image: 'https://picsum.photos/seed/hood2/600/400',
  },
  {
    id: '3',
    name: 'Pompano Beach Highlands',
    slug: 'pompano-beach-highlands',
    description:
      'Pompano Beach Highlands offers a mix of oceanfront condos and single-family homes with direct beach access and stunning Atlantic Ocean views.',
    avgPrice: 720000,
    properties: 203,
    image: 'https://picsum.photos/seed/hood3/600/400',
  },
  {
    id: '4',
    name: 'McNab Plat',
    slug: 'mcnab-plat',
    description:
      'McNab Plat is a desirable residential neighborhood featuring newer construction homes, top-rated schools, and convenient access to major highways.',
    avgPrice: 650000,
    properties: 89,
    image: 'https://picsum.photos/seed/hood4/600/400',
  },
  {
    id: '5',
    name: 'Pompano Isles',
    slug: 'pompano-isles',
    description:
      'Pompano Isles is a waterfront community with beautiful canal-front homes, many with private docks, and quick ocean access through Port Everglades.',
    avgPrice: 980000,
    properties: 67,
    image: 'https://picsum.photos/seed/hood5/600/400',
  },
  {
    id: '6',
    name: 'Palm Aire',
    slug: 'palm-aire',
    description:
      'Palm Aire is a master-planned golf community offering condos, townhouses, and single-family homes set around beautiful golf courses and lakes.',
    avgPrice: 380000,
    properties: 312,
    image: 'https://picsum.photos/seed/hood6/600/400',
  },
]

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Pompano Beach Real Estate Market Update: Spring 2024',
    slug: 'pompano-beach-market-update-spring-2024',
    excerpt:
      'The Pompano Beach real estate market continues to show strength with inventory remaining tight and prices holding steady. Here\'s what buyers and sellers need to know.',
    content: `
# Pompano Beach Real Estate Market Update: Spring 2024

The Pompano Beach real estate market continues to demonstrate resilience and strength heading into spring 2024. With limited inventory and strong demand from both local buyers and out-of-state migrants, prices have remained stable with select luxury segments showing appreciation.

## Key Market Trends

**Inventory Remains Tight**
Active listings in Pompano Beach remain approximately 25% below historical averages, creating competitive conditions for buyers. Homes priced correctly are often receiving multiple offers within the first week.

**Waterfront Properties Lead the Way**
Waterfront and Intracoastal properties continue to command premium prices, with average days on market under 30 days for well-priced homes. The appeal of South Florida's boating lifestyle drives strong demand in neighborhoods like Harbor Village and Pompano Isles.

**New Construction Activity**
Several new luxury developments are underway in Pompano Beach, including oceanfront condo towers and high-end single-family home communities. Pre-construction sales have been brisk, with many units selling before completion.

## What Buyers Should Know

- Get pre-approved before starting your search
- Be prepared to move quickly on desirable properties
- Consider expanding your neighborhood search
- Work with a local expert who knows the market

## What Sellers Should Know

- Pricing accurately is more important than ever
- Professional photography and staging pays dividends
- The best time to list is when you're ready
- Serious buyers are active year-round in South Florida

## Outlook

We expect the Pompano Beach market to remain competitive through 2024, with continued interest from buyers relocating from high-tax states. The combination of no state income tax, beautiful weather, and improving urban amenities continues to attract buyers from New York, New Jersey, Illinois, and California.
    `,
    coverImage: 'https://picsum.photos/seed/blog1/800/450',
    publishedAt: '2024-03-01T10:00:00Z',
    author: {
      name: 'Jennifer Martinez',
      photo: 'https://picsum.photos/seed/agent1/100/100',
    },
  },
  {
    id: '2',
    title: 'Top 5 Neighborhoods in Pompano Beach for Families',
    slug: 'top-5-neighborhoods-pompano-beach-families',
    excerpt:
      'Looking for the perfect neighborhood to raise your family in Pompano Beach? We\'ve analyzed school ratings, safety, amenities, and home values to bring you the top picks.',
    content: `
# Top 5 Neighborhoods in Pompano Beach for Families

Pompano Beach has transformed into one of South Florida's most desirable communities for families. With improving schools, family-friendly amenities, and a range of housing options, here are our top neighborhood picks for families.

## 1. Lighthouse Point

Consistently ranked as one of the best cities in Broward County for families, Lighthouse Point offers exceptional schools, beautiful tree-lined streets, and a strong sense of community. The Intracoastal waterways create a safe, intimate environment perfect for raising children.

**Average home price:** $875,000
**Best for:** Families with school-age children

## 2. McNab Plat

McNab Plat has become increasingly popular with young families due to its newer construction homes, larger lots, and proximity to top-rated schools. The neighborhood offers great value compared to the beach-side communities.

**Average home price:** $650,000
**Best for:** Young families, first-time buyers

## 3. Palm Aire

Palm Aire's master-planned community offers a safe, manicured environment with golf courses, lakes, and community amenities. The mix of condos and single-family homes provides options at various price points.

**Average home price:** $380,000
**Best for:** Active families, empty nesters

## 4. Pompano Beach Highlands

With beach access and a laid-back vibe, Pompano Beach Highlands appeals to families who want the quintessential Florida beach lifestyle. The community is walking distance to the beach and close to Pompano's growing restaurant and entertainment scene.

**Average home price:** $720,000
**Best for:** Families who love the beach

## 5. Crystal Lake

Crystal Lake is a well-established neighborhood with mature trees, large lots, and a quiet residential feel. The area offers some of the best value in Pompano Beach with solid schools and convenient access to shopping and highways.

**Average home price:** $480,000
**Best for:** Families seeking value and space
    `,
    coverImage: 'https://picsum.photos/seed/blog2/800/450',
    publishedAt: '2024-02-15T10:00:00Z',
    author: {
      name: 'Michael Davis',
      photo: 'https://picsum.photos/seed/agent4/100/100',
    },
  },
  {
    id: '3',
    title: 'Guide to Buying Waterfront Property in Pompano Beach',
    slug: 'guide-buying-waterfront-property-pompano-beach',
    excerpt:
      'Buying a waterfront home is a dream for many, but it comes with unique considerations. Our comprehensive guide covers everything from water access to insurance costs.',
    content: `
# Guide to Buying Waterfront Property in Pompano Beach

Waterfront living in Pompano Beach offers an unmatched lifestyle – imagine stepping onto your dock each morning, watching manatees glide by, or heading out for a sunset cruise whenever the mood strikes. But buying waterfront property comes with unique considerations that every buyer should understand.

## Types of Waterfront in Pompano Beach

**Oceanfront**
Direct Atlantic Ocean frontage, typically found in condo buildings along A1A. Offers beach access and stunning views but no boating from your property.

**Intracoastal Waterway**
The most sought-after waterfront in Pompano Beach. Deep-water properties can accommodate larger vessels, and the calm waters are perfect for paddleboarding, kayaking, and boating.

**Canal Front**
Canal-front properties offer private docks at a more accessible price point. Check the canal depth and bridge clearances if you plan to keep a boat.

## Key Considerations

### Water Access and Depths
Before buying, always check:
- Canal/waterway depth at low tide
- Fixed bridge clearances
- Navigability to the ocean
- Proximity to boat ramps or marinas

### Insurance Costs
Waterfront properties carry higher insurance costs:
- Flood insurance is typically required
- Windstorm insurance is essential in South Florida
- Budget $8,000-$25,000+ annually for insurance on luxury waterfront homes

### Seawall Condition
A seawall inspection is crucial. Seawall replacement can cost $500-$1,200 per linear foot, making it a significant potential expense.

### Environmental Considerations
- Check for any environmental restrictions
- Some areas have protected mangroves
- Understand building setback requirements from the water

## Working with a Waterfront Specialist

Not all real estate agents understand the nuances of waterfront properties. Work with an agent who can evaluate dock condition, understand water rights, and navigate the unique aspects of waterfront transactions.

## The Bottom Line

Waterfront property in Pompano Beach is a fantastic investment that offers both lifestyle benefits and strong appreciation potential. Do your due diligence, work with experienced professionals, and you'll be enjoying the South Florida waterfront lifestyle in no time.
    `,
    coverImage: 'https://picsum.photos/seed/blog3/800/450',
    publishedAt: '2024-01-30T10:00:00Z',
    author: {
      name: 'Sarah Chen',
      photo: 'https://picsum.photos/seed/agent3/100/100',
    },
  },
]
