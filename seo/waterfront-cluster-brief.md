# Waterfront Cluster Brief

This focused brief expands the previously collected tables into a standalone asset so the team can iterate the waterfront cluster independently of the other documents.

| Slug | Narrative Hook | Target Keywords | Component Needs |
| --- | --- | --- | --- |
| `/pompano-beach-waterfront-homes` | "Live every day on the water" hero with dynamic slider featuring canal, intracoastal, and oceanfront shots. | waterfront homes pompano beach, pompano beach water view homes | Shared `WaterfrontHero`, listing carousel, stats strip (avg price/DOM), map overlay showing canal vs oceanfront access. |
| `/pompano-beach-waterfront-homes-for-sale` | "Active listings, priced for now" with new/price reduction callouts + filter tags (new, price drop). | waterfront homes for sale pompano beach, waterfront property listings | IDX grid with badge for new/price drop, CTA to request showing, `idxFilters` to limit to active listings. |
| `/pompano-beach-oceanfront-homes` | Emphasis on private beaches + sunrises; use video hero. | oceanfront homes pompano beach, oceanfront real estate | `VideoHero`, trust badges, hero overlay list of amenities (concierge, docks). |
| `/pompano-beach-beachfront-homes` | Family-friendly beachfront living; highlight saved beaches/parks. | beachfront homes pompano beach, beach homes | Lifestyle module (beach access checklist), note on walkable boardwalks. |
| `/pompano-beach-canal-homes` | Boating lifestyle with dock depth info. | canal homes for sale pompano beach, homes with boat dock | Interactive canal map, `dockDepth` callout component, filter: `waterfrontType=canal`. |
| `/pompano-beach-intercoastal-homes` | Sunset cruise vibe, marina access. | intracoastal homes pompano beach, intracoastal homes for sale | Gallery of intracoastal views, timeline of latest sales, CTA linking to marina guides. |
| `/pompano-beach-waterfront-condos` | Condos with water views; highlight amenities. | waterfront condos pompano beach | Card grid for towers, amenity badges, financing CTA. |
| `/pompano-beach-luxury-waterfront-homes` | Concierge offerings + ultra finishes. | luxury waterfront homes pompano beach | Luxury gallery, concierge CTA, `idxFilters` for price > $1M + waterfront. |
| `/pompano-beach-waterfront-homes-under-1m` | Entry-level waterfront focus; mention financing + renovation potential. | waterfront homes under 1m pompano beach | Price badge slider, renovation checklist, `priceMax=999999`. |
| `/pompano-beach-waterfront-homes-under-2m` | Mid-tier waterfront with upgrade stories. | waterfront homes under 2m pompano beach | Comparison table of neighborhoods/prices, `priceMax=1999999`. |

**Implementation notes**
- Keep hero component copy, metadata, and CTA consistent by wiring `heroCopy` fields from this brief into the CMS.
- Provide `idxFilters` JSON field for price/amenity-specific slugs.
- Include `componentNotes` instructions (map overlays, gallery, price badges) so templates know what modules to render.
