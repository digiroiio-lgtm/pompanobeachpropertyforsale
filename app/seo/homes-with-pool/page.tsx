import type { Metadata } from "next";
import Link from "next/link";
import { mockProperties } from "@/lib/mockData";
import PropertyCard from "@/components/ui/PropertyCard";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Homes with Pool in Pompano Beach, FL",
  description: "Search homes with swimming pools for sale in Pompano Beach, FL. Find single-family homes, waterfront estates, and luxury properties with private pools.",
  openGraph: {
    title: "Homes with Pool in Pompano Beach, FL",
    description: "Search homes with swimming pools for sale in Pompano Beach, FL. Find single-family homes, waterfront estates, and luxury properties with private pools.",
    images: [{ url: "https://picsum.photos/seed/homes-with-pool/1200/630" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Homes with Pool in Pompano Beach, FL",
  description: "Search homes with swimming pools for sale in Pompano Beach, FL. Find single-family homes, waterfront estates, and luxury properties with private pools.",
  url: "https://pompanobeachpropertyforsale.com/seo/homes-with-pool",
};

export default function HomesWithPoolPage() {
  const properties = mockProperties.filter((p) => p.has_pool);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* SEO Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Homes with Pool for Sale in Pompano Beach, FL</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">Enjoy the ultimate Florida outdoor lifestyle in a Pompano Beach home with a private pool. Perfect for entertaining and relaxing year-round.</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">About Homes with Pool for Sale in Pompano Beach, FL</h2>
          <p className="text-gray-600 leading-relaxed">In Pompano Beach&apos;s sunny climate, a private pool is one of the most sought-after home features. Whether you&apos;re looking for a simple splash pool or a resort-style oasis with spa, sun shelf, and summer kitchen, you&apos;ll find the perfect pool home in this South Florida community.</p>
        </div>

        {/* Internal Links */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Explore Related Listings</h3>
          <div className="flex flex-wrap gap-3">
              <Link key="/seo/waterfront-homes" href="/seo/waterfront-homes" className="text-blue-600 hover:text-blue-700 hover:underline text-sm">Waterfront Pool Homes</Link>
              <Link key="/seo/luxury-homes" href="/seo/luxury-homes" className="text-blue-600 hover:text-blue-700 hover:underline text-sm">Luxury Pool Estates</Link>
              <Link key="/seo/new-construction" href="/seo/new-construction" className="text-blue-600 hover:text-blue-700 hover:underline text-sm">New Pool Homes</Link>
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
