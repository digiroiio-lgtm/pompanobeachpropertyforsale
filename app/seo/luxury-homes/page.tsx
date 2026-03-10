import type { Metadata } from "next";
import Link from "next/link";
import { mockProperties } from "@/lib/mockData";
import PropertyCard from "@/components/ui/PropertyCard";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Luxury Homes in Pompano Beach, FL",
  description: "Search luxury homes and estates in Pompano Beach, FL. Find premium properties with premium finishes, waterfront access, and resort-style amenities.",
  openGraph: {
    title: "Luxury Homes in Pompano Beach, FL",
    description: "Search luxury homes and estates in Pompano Beach, FL. Find premium properties with premium finishes, waterfront access, and resort-style amenities.",
    images: [{ url: "https://picsum.photos/seed/luxury-homes/1200/630" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Luxury Homes in Pompano Beach, FL",
  description: "Search luxury homes and estates in Pompano Beach, FL. Find premium properties with premium finishes, waterfront access, and resort-style amenities.",
  url: "https://pompanobeachpropertyforsale.com/seo/luxury-homes",
};

export default function LuxuryHomesPage() {
  const properties = mockProperties.filter((p) => p.property_type === "luxury");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* SEO Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Luxury Homes for Sale in Pompano Beach, FL</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">Discover Pompano Beach&apos;s finest luxury estates — featuring designer finishes, private docks, resort pools, and unmatched South Florida living.</p>
        </div>

        {/* Stats bar */}
        <div className="bg-blue-50 rounded-xl p-4 mb-8 flex flex-wrap gap-6 justify-center text-center">
          <div>
            <p className="text-2xl font-bold text-blue-600">{properties.length}</p>
            <p className="text-sm text-gray-500">Active Listings</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-600">
              ${properties.length > 0 ? Math.round(properties.reduce((s, p) => s + p.price, 0) / properties.length / 1000) : 0}K
            </p>
            <p className="text-sm text-gray-500">Avg. Price</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-600">
              {properties.length > 0 ? Math.round(properties.reduce((s, p) => s + p.days_on_market, 0) / properties.length) : 0}
            </p>
            <p className="text-sm text-gray-500">Avg. Days on Market</p>
          </div>
        </div>

        {/* Properties Grid */}
        {properties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-xl mb-10">
            <p className="text-xl font-semibold text-gray-700 mb-2">No listings found</p>
            <Link href="/listings" className="text-blue-600 hover:underline font-medium">
              View all listings
            </Link>
          </div>
        )}

        {/* SEO Content */}
        <div className="prose max-w-none mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">About Luxury Homes for Sale in Pompano Beach, FL</h2>
          <p className="text-gray-600 leading-relaxed">Pompano Beach&apos;s luxury market has seen tremendous growth, attracting discerning buyers from around the world. From contemporary waterfront masterpieces to golf course estates in Lighthouse Point, the area&apos;s high-end properties offer the finest in South Florida living with proximity to Fort Lauderdale-Hollywood International Airport.</p>
        </div>

        {/* Internal Links */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Explore Related Listings</h3>
          <div className="flex flex-wrap gap-3">
              <Link key="/seo/waterfront-homes" href="/seo/waterfront-homes" className="text-blue-600 hover:text-blue-700 hover:underline text-sm">Luxury Waterfront Homes</Link>
              <Link key="/seo/new-construction" href="/seo/new-construction" className="text-blue-600 hover:text-blue-700 hover:underline text-sm">New Luxury Construction</Link>
              <Link key="/neighborhoods#lighthouse-point" href="/neighborhoods#lighthouse-point" className="text-blue-600 hover:text-blue-700 hover:underline text-sm">Lighthouse Point</Link>
              <Link key="/listings" href="/listings" className="text-blue-600 hover:text-blue-700 hover:underline text-sm">All Listings</Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Ready to Find Your Home?</h2>
          <p className="text-blue-100 mb-5">Let our local experts guide you through the Pompano Beach real estate market.</p>
          <Link href="/listings" className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 rounded-xl px-8 py-3 font-semibold transition-colors">
            View All Listings <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
