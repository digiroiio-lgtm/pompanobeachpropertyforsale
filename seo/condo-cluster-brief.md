# Condo Cluster Editorial & Component Brief

This brief extends the structure used for the Waterfront and Luxury clusters and targets every condo-specific slug. Each row pairs the narrative hook, long-tail keywords, and the supporting component/data expectations so the CMS templates can quickly consume the right metadata, copy, IDX filters, and modules before the editors draft full content.

| Slug | Narrative + Hook | Target Keywords | Component / Data Notes |
| --- | --- | --- | --- |
| `/pompano-beach-condos-for-sale` | "Sea, city, and investment-ready condos" hero with inventory overview and comparison to single-family homes. | condos for sale Pompano Beach, Pompano Beach condo listings | Condo listings grid; comparison module vs. homes; CTA to schedule condo tour. |
| `/pompano-beach-oceanfront-condos` | "Wake up to ocean panoramas" hero featuring high-rise towers and amenity lifestyle. | oceanfront condos Pompano Beach, beachfront condo living | Hero video; amenities carousel; IDX filter `waterfrontType=oceanfront`. |
| `/pompano-beach-luxury-condos` | "Resort-grade condos" focusing on concierge, high Ceilings, and concierge. | luxury condos Pompano Beach, penthouse condos | Amenity matrix, financing CTA, vertical scroll story of tower distinctions. |
| `/pompano-beach-beach-condos` | "Beachside living where the sand meets your doorstep" with walkthrough of beach parks. | beach condos Pompano Beach, condos near beach | Lifestyle module (park/beach access); CTA linking to beach guide. |
| `/pompano-beach-condos-under-300k` | Budget condo options for investors and first-time buyers. | condos under 300k Pompano Beach, affordable condos | Price badge slider, affordability checklist, IDX filter `priceMax=300000`. |
| `/pompano-beach-condos-under-500k` | Mid-tier condos balancing updates + location. | condos under 500k Pompano Beach | Renovation potential note; IDX filter `priceMax=500000`. |
| `/pompano-beach-condos-under-700k` | Upscale yet value-minded condos. | condos under 700k Pompano Beach | Design gallery; IDX filter `priceMax=700000`. |
| `/pompano-beach-condos-with-ocean-view` | "View-forward living" with rooftop decks and balconies. | condos with ocean view Pompano Beach | View badge; hero slider; IDX `oceanView=true`. |
| `/pompano-beach-new-condos` | "Move-in ready" new construction towers + pre-construction options. | new condos Pompano Beach, new construction condos | Launch dates; inventory countdown; developer contact CTA. |
| `/pompano-beach-condos-with-pool` | Emphasize resort pools, cabanas, and summer lifestyle. | condos with pool Pompano Beach | Amenity filter `pool=true`; heatmap of pool towers; maintenance notes. |

**Implementation notes**
1. **Metadata**: Follow the pattern `{{focus}} Condos in Pompano Beach | Pompano Beach Property for Sale`. Description should highlight the condo lifestyle + CTA (e.g., "Explore new condo towers with ocean views and schedule a private tour").
2. **Hero Component**: Reuse a `CondoHero` that accepts `heroCopy`, `heroImage`, and `heroBadge` props. Swap copy per slug to stress affordability, waterfront, or luxury accordingly.
3. **IDX filters**: Mirror the `target keywords` focus with `idxFilters` (e.g., `priceMax`, `waterfrontType`, `amenities`). Use CMS JSON field to store filter objects for each slug. For `new-condos`, include `newConstruction=true` and optionally `preConstructionStatus`.
4. **Supporting modules**: Provide `componentNotes` for modules such as affordability checklists, lifestyle spotlights, amenity matrices, and sales/builder contact CTA. Add a `listingStats` module (avg price, DOM, ocations) for the overview slug.
5. **Content scaling**: Use this table as the source of truth when turning slugs into CMS entries. Once the mapping is created, the editorial team can populate copy blocks based on the focus/narrative column.

Use this brief with the existing template pairings to ensure each condo slug inherits the right metadata, IDX logic, and component data before authoring the remaining cluster content.