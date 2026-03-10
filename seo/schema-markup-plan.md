# Schema Markup Plan

Implement structured data to lift CTRs and help Google understand the Zillow-style inventory.

## Core schemas per slug

1. `WebPage` with `mainEntity` pointing to the featured `RealEstateListing` array.
2. `RealEstateListing` for each featured property with attributes: `name`, `image`, `description`, `address`, `price`, `url`, `numberOfRooms`, `floorSize`. Use `schema:Offer` nested for pricing details.
3. `BreadcrumbList` that mirrors the internal linking hub (e.g., `/homes-for-sale-pompano-beach` > `/pompano-beach-waterfront-homes`).
4. `FAQPage` for every page’s FAQ section.
5. `Place` for neighborhood-focused slugs with `address`, `geo`, and `aggregateRating` when available.
6. `Product` for condo or luxury units marketed like a high-end offering (mainEntityOfPage). Wrap amenities/financing CTA in `AggregateRating` or `Review` if evidence exists.

## Cluster-specific augmentations

- Waterfront: Add `schema:LocationFeatureSpecification` for amenities (boat dock, oceanfront, intracoastal) and `GeoCoordinates` for piers/marinas referenced.
- Luxury: Include `schema:Brand` or `Organization` with affiliation badges and `schema:Service` for concierge tours.
- Budget/Price Tier: Use `schema:Demand` or structured data to mark price range and affordability notes.

## Implementation Notes

- Generate markup server-side or in CMS headless fields using reusable partials.
- Reference the `idxFilters` metadata when building the `offers` array to ensure consistent price ranges.
- Validate every new slug with the Rich Results Test. Automate schema validation in CI using `schema.org` JSON-LD fixtures.
