# Critical Cluster Template Pairing

This guide maps the Waterfront and Luxury cluster briefs to CMS/template variables so each slug immediately inherits the right metadata, imagery, and IDX filters. The approach assumes shared hero components (`WaterfrontHero`, `LuxuryHero`) and a metadata template engine that can consume these fields via front matter or headless CMS attributes.

## Shared Template Contracts

| Field | Description |
| --- | --- |
| `heroComponent` | Component rendered in hero area (copy + background) |
| `metadata.title` | Title string generated via `{{slugTitle}} | Pompano Beach Real Estate` or more specific brand suffix |
| `metadata.description` | SEO description emphasizing the slug focus and CTA |
| `canonical` | Always match the slug; CMS should mirror slug path to canonical URL |
| `idxFilters` | JSON-ready filter object used to restrict the IDX feed (propertyType, price, waterfrontType, amenity)
| `componentNotes` | Optional instructions for modules (stats strip, gallery, lifestyle list)

## Waterfront Cluster Template Data

| Slug | heroComponent | metadata.title example | metadata.description pattern | canonical | idxFilters | componentNotes |
| --- | --- | --- | --- | --- | --- | --- |
| `/pompano-beach-waterfront-homes` | `WaterfrontHero` | "Waterfront Homes in Pompano Beach | Digiroiio" | "Explore the full waterfront portfolio—canal, intracoastal, oceanfront—plus IDX-matched tours." | Same as slug | `{"waterfront": true}` | Carousel of waterway types + map overlay |
| `/pompano-beach-waterfront-homes-for-sale` | `WaterfrontHero` | "Waterfront Homes for Sale in Pompano Beach" | "See today’s waterfront listings with avg price, DOM, and new/price reductions." | Same | `{"waterfront": true, "status": "for sale"}` | Stats strip (price, DOM), prefilled lead form |
| `/pompano-beach-oceanfront-homes` | `WaterfrontHero` | "Oceanfront Homes in Pompano Beach" | "Private beaches, panoramic views, and curated oceanfront listings." | Same | `{"waterfrontType": "oceanfront"}` | Video hero + trust badges |
| `/pompano-beach-beachfront-homes` | `WaterfrontHero` | "Beachfront Homes in Pompano Beach" | "Family-ready beachfront living—amenities, schools, walkable boardwalks." | Same | `{"waterfrontType": "beachfront"}` | Lifestyle module (beach guide) |
| `/pompano-beach-canal-homes` | `WaterfrontHero` | "Canal Homes in Pompano Beach" | "Boat docks, calm canals, and waterfront condo alternatives." | Same | `{"waterfrontType": "canal", "boatDock": true}` | Canal map + boating filters |
| `/pompano-beach-intercoastal-homes` | `WaterfrontHero` | "Intracoastal Homes in Pompano Beach" | "Sunset views, marina access, and intracoastal-focused inventory." | Same | `{"waterfrontType": "intracoastal"}` | Sunset gallery + recent sale timeline |
| `/pompano-beach-waterfront-condos` | `WaterfrontHero` | "Waterfront Condos in Pompano Beach" | "Condos with water views, resort amenities, and flexible financing." | Same | `{"propertyType": "condo", "waterfront": true}` | Amenity matrix, financing CTA |
| `/pompano-beach-luxury-waterfront-homes` | `WaterfrontHero` | "Luxury Waterfront Homes in Pompano Beach" | "Concierge service, high-end finishes, and deep-water access." | Same | `{"waterfront": true, "priceMin": 1000000}` | Concierge/finance badge block |
| `/pompano-beach-waterfront-homes-under-1m` | `WaterfrontHero` | "Waterfront Homes Under $1M" | "Entry-point waterfront options with IDX price filter and neighborhood highlights." | Same | `{"waterfront": true, "priceMax": 999999}` | Price badge + slider |
| `/pompano-beach-waterfront-homes-under-2m` | `WaterfrontHero` | "Waterfront Homes Under $2M" | "Mid-market waterfront listings with renovation potential." | Same | `{"waterfront": true, "priceMax": 1999999}` | Neighborhood comparison table |

## Luxury Cluster Template Data

| Slug | heroComponent | metadata.title example | metadata.description pattern | canonical | idxFilters | componentNotes |
| --- | --- | --- | --- | --- | --- | --- |
| `/pompano-beach-luxury-homes` | `LuxuryHero` | "Luxury Homes in Pompano Beach" | "Concierge-level service + curated estates ready for private showings." | Same | `{"priceMin": 1000000}` | Case studies, CTA to book tour |
| `/pompano-beach-luxury-waterfront-homes` | `LuxuryHero` | "Luxury Waterfront Homes" | "High-touch waterfront estates with yacht berths and service staff." | Same | `{"waterfront": true, "priceMin": 1000000}` | Lifestyle gallery, awards |
| `/pompano-beach-million-dollar-homes` | `LuxuryHero` | "Million Dollar Homes in Pompano Beach" | "Properties above $1M with jumbo financing partners." | Same | `{"priceMin": 1000000}` | Jumbo mortgage CTA, slider |
| `/pompano-beach-luxury-condos` | `LuxuryHero` | "Luxury Condos in Pompano Beach" | "Penthouse towers, amenity-rich living, and concierge service." | Same | `{"propertyType": "condo", "priceMin": 800000}` | Amenity matrix, floor plans |
| `/pompano-beach-gated-community-homes` | `LuxuryHero` | "Gated Community Homes" | "Secure estates with golf, guard, and premium amenities." | Same | `{"gated": true, "priceMin": 800000}` | Security & HOA snapshot |
| `/pompano-beach-golf-course-homes` | `LuxuryHero` | "Golf Course Homes in Pompano Beach" | "Fairway-side living with membership highlights." | Same | `{"nearGolfCourse": true, "priceMin": 800000}` | Course proximity map |
| `/pompano-beach-luxury-estates` | `LuxuryHero` | "Luxury Estates" | "Large-lot estates with service quarters and privacy." | Same | `{"lotSizeMin": 10000, "priceMin": 1200000}` | Builder spotlights |
| `/pompano-beach-modern-luxury-homes` | `LuxuryHero` | "Modern Luxury Homes" | "Clean lines, smart-home automation, and contemporary finishes." | Same | `{"style": "modern", "priceMin": 900000}` | Design slider with architect quotes |
| `/pompano-beach-luxury-homes-with-pool` | `LuxuryHero` | "Luxury Homes with Pool" | "Resort-like pools, outdoor kitchens, and pool service partners." | Same | `{"amenities": ["pool"], "priceMin": 900000}` | Pool badges, heatmap |
| `/pompano-beach-oceanfront-luxury-homes` | `LuxuryHero` | "Oceanfront Luxury Homes" | "Premiere oceanfront estates with private piers and concierge." | Same | `{"waterfrontType": "oceanfront", "priceMin": 1500000}` | Pier depth, luxury gallery |

## CMS Integration Notes

1. **Hero wiring**: Each CMS entry selects a hero component and populates the `heroCopy`/`heroImage` fields. Frontend renders `WaterfrontHero` or `LuxuryHero` with copy stored in `heroCopy` derived from the `metadata.description pattern` above.
2. **Metadata generation**: Use the shared title + description pattern, replacing placeholders like `{{focus}}` with the slug focus (e.g., "Waterfront homes" or "Concierge waterfront homes"). Meta descriptions should follow the pattern on each row. Ensure `metadata.title` ends with `| Pompano Beach Real Estate` or your brand suffix.
3. **IDX filter binding**: Map `idxFilters` directly into your listing API call. For price-level slugs, apply `priceMin`/`priceMax` ranges; for lifestyle filters, set amenity flags (`boatDock`, `pool`, `gated`). Keep the JSON structure mirrored in the CMS field so the template can stringify it at render time.
4. **Canonical structure**: Keep the `canonical` field identical to the slug and enforce in the template engine. This prevents duplicate URLs when bundling clusters under folders.
5. **Component modules**: Use `componentNotes` to pick supporting modules (stats, gallery, timeline, etc.). If a module is shared among multiple slugs, treat it as a component with props driven by the CMS copy (e.g., `statsStrip` receives `avgPrice`, `dom`, `newListings`).

Use this pairing guide alongside `pompano-beach-seo-page-map.md` and `critical-cluster-briefs.md` to connect CMS data modeling, SEO metadata, and IDX filter wiring before rolling out the other clusters.