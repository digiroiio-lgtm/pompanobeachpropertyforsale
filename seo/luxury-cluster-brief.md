# Luxury Cluster Brief

Detailing hero narratives, keywords, and component swaps for the luxury-focused slugs so each high-touch page matches the Zillow-style experience.

| Slug | Narrative Hook | Target Keywords | Component Notes |
| --- | --- | --- | --- |
| `/pompano-beach-luxury-homes` | "Concierge-level match-making" with testimonial slider and private tour CTA. | luxury homes pompano beach, pompano beach luxury real estate | `LuxuryHero`, testimonials, CTA to book concierge tour, price slider min $1M. |
| `/pompano-beach-luxury-waterfront-homes` | Oceanfront estates + private docks; highlight yacht lifestyle. | luxury waterfront homes pompano beach | Connect to `WaterfrontHero`, highlight deep-water access and waterfront amenities. |
| `/pompano-beach-million-dollar-homes` | Properties priced above $1M; include financial partners. | million dollar homes pompano beach | Jumbo mortgage CTA, lender badges, price range slider starting at $1M. |
| `/pompano-beach-luxury-condos` | Penthouse towers and resort-style services. | luxury condos pompano beach, penthouse condos | Amenity comparison table, concierge services list, floor plans download. |
| `/pompano-beach-gated-community-homes` | Security & exclusivity messaging; link to HOA details. | gated community homes pompano beach | Security module, HOA snapshot, `data-filter` for gated. |
| `/pompano-beach-golf-course-homes` | Course-focused living; highlight memberships. | golf course homes pompano beach | Course proximity map, membership CTA, lifestyle list (yacht, beach). |
| `/pompano-beach-luxury-estates` | Estate-living with staff/guest houses. | luxury estates pompano beach | Builder spotlights, aerial gallery, private garden imagery. |
| `/pompano-beach-modern-luxury-homes` | Contemporary architecture + smart-home features. | modern luxury homes pompano beach | Design slider, architect quotes, smart-home badges. |
| `/pompano-beach-luxury-homes-with-pool` | Resort pools + outdoor kitchens. | luxury homes with pool pompano beach | Pool heatmap, amenity icons, vendor referrals. |
| `/pompano-beach-oceanfront-luxury-homes` | Pinnacle oceanfront estates; include private pier specs. | oceanfront luxury homes pompano beach | Pier depth callout, luxury gallery, `waterfrontType=oceanfront`. |

**Implementation notes**
- Build component palette (hero, testimonial, financial CTA, amenity matrix) to mix and match per slug. Wire `heroComponent` and `componentNotes` in CMS so the template knows which modules to render.
- Metadata should lead with the slug’s focus followed by the brand (e.g., "Oceanfront Luxury Homes | Digiroiio Real Estate"). Include the keyword from `keyword-universe.md` for match.
