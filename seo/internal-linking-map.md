# Internal Linking Map

This map defines the crawl paths and topical flow between every programmatic slug so Google sees how authority distributes across the Zillow-style architecture.

## Principles

- Keep most slugs within two internal clicks from `/homes-for-sale-pompano-beach` (hub). Use a hub-and-spoke approach where cluster hubs link to their subpages and interlink where cross-cluster intent exists.
- Use descriptive anchor text matching the target slug’s focus rather than "Learn more."
- Include footer, sidebar, and body-level contextual links (e.g., a luxury page links to `pompano-beach-waterfront-homes` when highlighting oceanfront opportunities).

## Sample flows (expand to all 150 slugs)

```
/home search hub (/) -> /homes-for-sale-pompano-beach
/home search hub -> /pompano-beach-real-estate-market
/home search hub -> /bossland-luxury (if upcoming) 

/home hub -> /pompano-beach-waterfront-homes
/pompano-beach-waterfront-homes -> /pompano-beach-oceanfront-homes
/pompano-beach-waterfront-homes -> /pompano-beach-waterfront-homes-under-1m
/pompano-beach-waterfront-homes-under-1m -> /pompano-beach-waterfront-condos

/home hub -> /pompano-beach-condos-for-sale
/pompano-beach-condos-for-sale -> /pompano-beach-oceanfront-condos
/pompano-beach-condos-for-sale -> /pompano-beach-condos-with-pool
/pompano-beach-condos-under-500k -> /pompano-beach-homes-under-500k

/pompano-beach-luxury-homes -> /pompano-beach-luxury-waterfront-homes
/pompano-beach-luxury-homes -> /pompano-beach-gated-community-homes
/pompano-beach-luxury-homes -> /pompano-beach-modern-luxury-homes

/pompano-beach-homes-under-400k -> /pompano-beach-condos-under-500k
/pompano-beach-homes-under-400k -> /pompano-beach-investment-property

/pompano-beach-neighborhoods -> /pompano-beach-garden-isles-homes
/pompano-beach-neighborhoods -> /pompano-beach-east-pompano-homes
/pompano-beach-neighborhoods -> /pompano-beach-west-pompano-homes (if slug exists)
```

## How to use

1. Feed this map into the CMS link builder so the related blocks automatically output the linking pattern above.
2. Produce a `linkPriority` field for each slug (`high`, `medium`, `low`). Use it to decide which slugs get a second internal link (e.g., newsletter CTA referencing a trending neighborhood page).
3. Audit monthly with Screaming Frog to ensure no orphaned landing pages and that the anchor text set matches the keywords in `keyword-universe.md`.
