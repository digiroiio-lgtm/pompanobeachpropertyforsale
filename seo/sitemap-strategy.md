# Sitemap Strategy

Map the entire 150-page programmatic stack so Google discovers and prioritizes the highest-value clusters first.

## Sitemap breakdown

- `sitemap-main.xml`: includes `/`, `/homes-for-sale-pompano-beach`, `/pompano-beach-real-estate`, `/pompano-beach-property-search`, and top-level guides. Refresh weekly.
- `sitemap-waterfront.xml`: lists every waterfront slug (home, condos, subsets under $1M/$2M, luxury). Prioritize `changefreq=daily` for inventory-heavy pages.
- `sitemap-condos.xml`: all condo slugs plus rental-focused condo pages.
- `sitemap-luxury.xml`: luxury homes, estates, gated communities, and adjacent comparison content.
- `sitemap-budget.xml`: price-tier slugs (`/pompano-beach-homes-under-300k` through `/pompano-beach-homes-under-2m`) and other affordability guides.
- `sitemap-neighborhoods.xml`: neighborhood landing pages, location-specific slugs, and micro guiders (e.g., best neighborhoods, relocation guides).
- `sitemap-investment.xml`: investment, rental, Airbnb, multi-family, and commercial/ROI content.

## Strategy

1. **Split sitemaps by cluster** so Googlebot can crawl high-priority inventory frequently without waiting on the entire 150-page list.
2. **Ping search engines** after deploys and weekly imports (either via CMS hooks or manually using Search Console’s sitemap submission). Keep last-modified tags accurate using IDX update timestamps.
3. **Canonical & hreflang**: each slug points to canonical in head; if you roll out multi-city later, use sitemap to list aliased versions and reference `hreflang` set.
4. **Sitemap index**: `sitemap-index.xml` references all cluster sitemaps. Use dynamic generation so new slugs added to a cluster automatically appear in the right sitemap.
5. **Monitoring**: Track sitemap coverage in Search Console. Flag any `404` or `soft 404` slugs and fix internal linking before re-submitting.
