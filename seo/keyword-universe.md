# Keyword Universe

Build a single truth table with every long-form, mid-tail, and transactional keyword the Pompano Beach platform should rank for. This lives alongside the page map and feeds the CMS metadata so titles/descriptions follow the measured search demand (500–1500 keywords per city).

## Strategy

1. **Category buckets**: Mirror the page map clusters so you can cross-reference slugs ↔ keywords. Example buckets:
   - Core (e.g., `homes for sale Pompano Beach`, `Pompano Beach real estate market`)
   - Waterfront (canal, oceanfront, intracoastal, luxury waterfront)
   - Condos & rentals
   - Luxury, price tiers, and features (pool, boat dock)
   - Neighborhoods
   - Investment & guides

2. **Keyword attributes**: Capture
   - `keyword` (exact phrase)
   - `intent` (informational, search for listings, transactional)
   - `cluster` (matches the slug)
   - `search volume range` (low/med/high)
   - `priority` (1–3) for implementation sequencing
   - `page` (slug that will own the keyword)

3. **Example seeds** (expand to 500+):
   - homes for sale pompano beach
   - pompano beach waterfront homes
   - pompano beach condos for sale
   - pompano beach luxury waterfront homes
   - pompano beach homes under 500k
   - pompano beach homes with pool
   - pompano beach golf course homes
   - pompano beach investment properties
   - pompano beach rental condos beachfront
   - pompano beach neighborhoods guide

4. **Programmatic expansion**: Use a matrix of property type × price × neighborhood × amenity to generate derivative keywords (e.g., `pompano beach waterfront homes under 1m`, `pompano beach canal homes with boat dock`). Store these variants in a dedicated sheet or CMS table so each slug grabs the keywords it needs for metadata and H2 copy.

## Maintenance

- Refresh every quarter using Search Console insights + third-party tools (SEMrush, ahrefs, Surfer). Mark keywords that drop/enter the top 100 and adjust content priorities.
- Feed the keyword universe into the metadata generator so titles/descriptions keep writing to the highest-volume phrases while still unique per slug.
