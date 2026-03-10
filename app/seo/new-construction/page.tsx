import type { Metadata } from "next";
import Link from "next/link";
import { mockProperties } from "@/lib/mockData";
import PropertyCard from "@/components/ui/PropertyCard";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "New Construction Homes in Pompano Beach, FL",
  description: "Find new construction homes for sale in Pompano Beach, FL. Brand new builds with modern amenities, builder warranties, and customization options.",
  openGraph: {
    title: "New Construction Homes in Pompano Beach, FL",
    description: "Find new construction homes for sale in Pompano Beach, FL. Brand new builds with modern amenities, builder warranties, and customization options.",
    images: [{ url: "https://picsum.photos/seed/new-construction/1200/630" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "New Construction Homes in Pompano Beach, FL",
  description: "Find new construction homes for sale in Pompano Beach, FL. Brand new builds with modern amenities, builder warranties, and customization options.",
  url: "https://pompanobeachpropertyforsale.com/seo/new-construction",
};

export default function NewConstructionPage() {
  const properties = mockProperties.filter((p) => p.property_type === "new-construction");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* SEO Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">New Construction Homes in Pompano Beach, FL</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">Move into a brand-new home in Pompano Beach. Choose from custom builds, spec homes, and new community developments with modern amenities.</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">About New Construction Homes in Pompano Beach, FL</h2>
          <p className="text-gray-600 leading-relaxed">Pompano Beach is experiencing a new construction boom, with innovative developers bringing modern designs and cutting-edge amenities to this desirable South Florida market. New construction homes offer energy efficiency, smart home technology, and builder warranties that give buyers peace of mind.</p>
        </div>

        {/* Internal Links */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Explore Related Listings</h3>
          <div className="flex flex-wrap gap-3">
              <Link key="/seo/homes-for-sale" href="/seo/homes-for-sale" className="text-blue-600 hover:text-blue-700 hover:underline text-sm">All Homes for Sale</Link>
              <Link key="/seo/luxury-homes" href="/seo/luxury-homes" className="text-blue-600 hover:text-blue-700 hover:underline text-sm">Luxury New Homes</Link>
              <Link key="/neighborhoods" href="/neighborhoods" className="text-blue-600 hover:text-blue-700 hover:underline text-sm">Developing Neighborhoods</Link>
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
