# Critical Cluster Editorial Briefs

This capture focuses on the Waterfront and Luxury clusters so the content, components, and data integrations are ready for implementation before scaling to the rest of the slugs. Each section highlights hero messaging, SEO targets, IDX query hints, and component data requirements.

---

## Waterfront Cluster

| Slug | Primary Narrative | Target Keywords | Data / Component Notes |
| --- | --- | --- | --- |
| `/pompano-beach-waterfront-homes` | "Live the waterfront dream" hero + overview of canal, intracoastal, and beachfront options. | waterfront homes Pompano Beach, canal homes for sale | Hero banner with rotating hero image; listing carousel fed by IDX waterfront filter; map highlights waterway types. |
| `/pompano-beach-waterfront-homes-for-sale` | "See every current waterfront listing" with quick stats (new, price ranges, avg DOM). | waterfront homes for sale Pompano Beach, luxury waterfront listings | Stats strip (avg price, DOM) updated daily via IDX; lead form that pre-fills waterfront preference. |
| `/pompano-beach-oceanfront-homes` | Emphasize private beaches + resort lifestyle. | oceanfront homes Pompano Beach, oceanfront real estate | Video hero with ocean view; component showing "oceanfront-only" IDX feed; trust badges for waterfront expertise. |
| `/pompano-beach-beachfront-homes` | Family/beach-living angle with lifestyle bullet list. | beachfront homes Pompano Beach, beachfront property | Lifestyle module (things to do at beach); CTA linking to beach area guide. |
| `/pompano-beach-canal-homes` | Canal living (boating, dock options). | canal homes for sale Pompano Beach, homes with boat dock | Boating filter (dock depth, slip); map of canal-access neighborhoods. |
| `/pompano-beach-intercoastal-homes` | Intracoastal views + sunset experiences. | intracoastal homes Pompano Beach, waterfront views | Sunset imagery; IDX filter for Intracoastal; timeline for recent sales. |
| `/pompano-beach-waterfront-condos` | Condos on navigable waterways and beachfront towers. | waterfront condos Pompano Beach | Condo amenities matrix; financing CTA for condoprojects. |
| `/pompano-beach-luxury-waterfront-homes` | Ultra-luxury waterfront estates + concierge services. | luxury waterfront homes Pompano Beach, estate waterfront | Concierge feature; lending callouts (construction to permanent). |
| `/pompano-beach-waterfront-homes-under-1m` | Entry-level waterfront options; focus on affordability. | waterfront homes under 1m Pompano Beach | Price-bracket badge; slider showing mix of canal and bayfront. |
| `/pompano-beach-waterfront-homes-under-2m` | Mid-market waterfront with mention of upgrades. | waterfront homes under 2m Pompano Beach | Comparison table of neighborhoods at this price point. |

**Implementation notes**
- Use a shared `WaterfrontHero` component for imagery/CTA but swap in slug-specific copy.
- Metadata templates: `<slug focus> | Pompano Beach Waterfront Realty` for titles and a canonical structure `pompano-beach-waterfront/<specific>`.
- IDX calls should include boolean flags for `waterfrontType` (canal, oceanfront, etc.) and price filters for sub-$1M/$2M pages.

---

## Luxury Cluster

| Slug | Narrative Focus | Target Keywords | Component/Data Needs |
| --- | --- | --- | --- |
| `/pompano-beach-luxury-homes` | Brand positioning around concierge-level service + curated estates. | luxury homes Pompano Beach, luxury real estate | Case studies of recent sales; CTA to request private tour. |
| `/pompano-beach-luxury-waterfront-homes` | Combine luxury + waterfront for the highest touch experiences. | luxury waterfront homes Pompano Beach | Lifestyle gallery (yachts, pools); trust indicators (awards). |
| `/pompano-beach-million-dollar-homes` | Showcase properties above $1M with financing support. | million dollar homes Pompano Beach, million dollar property | Price range slider; lender spotlight for jumbo mortgages. |
| `/pompano-beach-luxury-condos` | Penthouse condos and resort towers. | luxury condos Pompano Beach | Amenity matrix, floor plan downloads. |
| `/pompano-beach-gated-community-homes` | Security + exclusivity messaging. | gated community homes Pompano Beach | Neighborhood security details, HOA snapshots. |
| `/pompano-beach-golf-course-homes` | Golf access + luxury course living. | golf course homes Pompano Beach | Course proximity map, membership notes. |
| `/pompano-beach-luxury-estates` | Large-lot estates with service staff quarters + green space. | luxury estates Pompano Beach | Estate feature callouts; builder/developer spotlights. |
| `/pompano-beach-modern-luxury-homes` | Contemporary architectural assets. | modern luxury homes Pompano Beach | Design slider with architect quotes. |
| `/pompano-beach-luxury-homes-with-pool` | Pool-focused amenities. | luxury homes with pool Pompano Beach | Pool feature badges; heatmap of properties with pools. |
| `/pompano-beach-oceanfront-luxury-homes` | Pinnacle oceanfront living. | oceanfront luxury homes Pompano Beach | Waterfront depth, private pier highlight. |

**Implementation notes**
- Combine `LuxuryHero` with testimonials to convey trust. Keep CTA "Book private showing" across pages.
- IDX filters should highlight `price >= 1M`, `roofType`, `pool`, `smartHome` fields depending on slug.
- Create SEO metadata referencing "Pompano Beach luxury real estate" + slug-specific refinement (e.g., gated, oceanfront). Canonical pattern `/luxury/<slug-target>`.

---

## Scaling Guidance for Remaining Slugs

1. **Content scaffolding**: Follow the same table structure (Slug / Narrative / Keywords / Components). For each cluster, identify the unique hook (e.g., affordability for budget, lifestyle for neighborhoods). Reuse hero components but swap copy + imagery.
2. **Metadata & IDX templates**: Use the `<ClusterName> | Pompano Beach Real Estate` title pattern and ensure meta descriptions mention the focus keywords and include a CTA ("See listings", "Compare neighborhoods"). Configure IDX query presets tied to each slug filter (price, property type, amenities).
3. **Component reuse**: Build shared modules for stats (avg price, DOM), listings grid, CTA, neighborhood spotlights, and buyer guide resources to keep page weight manageable while allowing content variation.
4. **Editorial workflow**: Before flagging a slug as ready, confirm hero copy, data tags, CTA, and metadata match the brief. Log any missing IDX facets so development can wire them into the feed.

Use this document as the source of truth when onboarding writers, designers, and engineers for the remaining slugs.