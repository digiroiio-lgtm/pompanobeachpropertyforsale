# Price Cluster Brief

Outlines the affordability/price-tier slugs so each page highlights the right buyers and filters.

| Slug | Narrative Hook | Target Keywords | Component Notes |
| --- | --- | --- | --- |
| `/pompano-beach-homes-under-300k` | Entry-level home segment with financing and renovation tips. | homes under 300k pompano beach, affordable homes pompano beach | Price badge, renovation checklist, loan calculator, IDX filter `priceMax=300000`. |
| `/pompano-beach-homes-under-400k` | Low-mid price bracket; emphasize value vs condos. | homes under 400k pompano beach | Comparison table vs. condos, map of neighborhoods with this price. |
| `/pompano-beach-homes-under-500k` | Balanced mix of updated homes + location. | homes under 500k pompano beach | Renovation stories, IDX `priceMax=500000`, related condo cross-link. |
| `/pompano-beach-homes-under-600k` | Bridge to premium; include financing guidance. | homes under 600k pompano beach | Mortgage CTA with affordability calculator. |
| `/pompano-beach-homes-under-700k` | Upper mid-tier; highlight move-in ready. | homes under 700k pompano beach | Highlight new builds, `priceMax=700000`. |
| `/pompano-beach-homes-under-800k` | Transitional to luxury; mention upgrades. | homes under 800k pompano beach | Amenity badges (pool, dock); price filter. |
| `/pompano-beach-homes-under-900k` | Near-luxury; include builder contact info. | homes under 900k pompano beach | Builder spotlights, `priceMax=900000`. |
| `/pompano-beach-homes-under-1m` | Sub-million luxury; highlight financing for jumbo loans. | homes under 1m pompano beach | Price slider, jumbo mortgage CTA. |
| `/pompano-beach-homes-under-2m` | Mid-range premium; mention luxury features accessible. | homes under 2m pompano beach | Comparison vs. million-dollar listings, `priceMax=2000000`. |
| `/pompano-beach-affordable-homes` | Broad affordable housing narrative, linking to assistance programs, first-time buyer incentives. | affordable homes pompano beach | Link to buyer guides, affordability checklist, contact CTA.

**Implementation notes**
- Use a shared `PriceBadge` module to display min/max, price color coding, and buyer persona (first-time, move-up, investor).
- Titles should include price tier and `Pompano Beach homes` plus brand suffix.
