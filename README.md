# Pompano Beach Property For Sale

AI-powered Pompano Beach real estate platform. Zillow-style property search, IDX listing integration, SEO-driven landing pages, and programmatic city-level real estate content architecture.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Supabase** (database and auth)
- **Mapbox** (property maps via react-map-gl)

## Features

- Property search with advanced filters (price, beds, baths, type, pool, waterfront, etc.)
- Interactive map search with Mapbox markers
- Property detail pages with gallery, mortgage calculator, price history
- AI-powered home search with natural language queries
- Programmatic SEO pages for all property types
- Neighborhoods directory
- Real estate blog
- Sitemap and robots.txt generation
- Schema markup (RealEstateListing, ItemList)

## Project Structure

```
/app
  /listings          - All listings page
  /property/[id]     - Property detail page
  /search            - Map + list search page
  /neighborhoods     - Neighborhoods directory
  /blog              - Real estate blog
  /seo               - Programmatic SEO landing pages
    /homes-for-sale
    /condos-for-sale
    /waterfront-homes
    /luxury-homes
    /new-construction
    /homes-with-pool
/components          - Reusable UI components
/lib                 - Utilities, types, Supabase client, mock data
```

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your credentials:

```bash
cp .env.local.example .env.local
```

Required variables:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key
- `NEXT_PUBLIC_MAPBOX_TOKEN` - Your Mapbox public token

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
