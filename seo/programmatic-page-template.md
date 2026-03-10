# Programmatic Page Template

Every SEO landing page should follow this repeatable structure so the Zillow-style architecture feels cohesive and each page hits the same data-driven modules.

1. **Hero Section**
   - H1 (slug-specific, includes primary keyword)
   - Intro paragraph that touches the target keyword, city, and intent (search/install/guide).
   - Secondary CTA (search listings, request tour).

2. **Property Listings Grid**
   - IDX feed filtered via `idxFilters` (from the template pairing docs).
   - Show price range, beds/baths, and a badge for featured filters (waterfront, pool, price tier) with microdata `Offer` when possible.

3. **Neighborhood Snapshot**
   - Short paragraph describing the neighborhood cluster the slug lives in; highlight walkability, schools, marinas.
   - List or table linking to 2–3 nearby neighborhood or location slugs.

4. **Price Trends + Market Signals**
   - Embed data from the market intelligence service (avg price, DOM, inventory change). Use structured markup (`Dataset` or `Observation`).
   - Graph or bullet list covering price shift vs. last quarter.

5. **Amenity / Feature Modules** (optional)
   - For slugs focusing on pools, docks, luxury, budgets, include modules listing amenities (pool, boat dock, gated, smart home) or price badges.
   - Use data attributes to toggle these modules in the CMS.

6. **FAQ**
   - 3–5 FAQs derived from `keyword-universe` question variants (e.g., "Are there condos with pools in Pompano Beach?").
   - Wrap in `FAQPage` schema.

7. **Internal Links**
   - Place a cluster-specific link block referencing 3 related slugs with descriptive anchor text. Reflect the relationships defined in `internal-linking-map.md`.

8. **CTA / Lead Capture**
   - Contact form or schedule call CTA referencing concierge/local expertise.
   - Encourage users to "Book a waterfront tour" or "Download neighborhood guide" depending on slug.

9. **Footer Reinforcement**
   - Repeat the condensed navigation structure from `footer-architecture.md` to reinforce the cluster.

Use CMS template fields (heroCopy, idxFilters, FAQ items, relatedLinks) to populate every section automatically. Ensure metadata (title/description) references the hero's primary keywords from `keyword-universe.md`. Any exceptions should be documented in the cluster briefs before publishing.
