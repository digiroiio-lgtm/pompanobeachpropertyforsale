import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Search, TrendingUp, Home, Users, Clock, ArrowRight } from "lucide-react";
import PropertyCard from "@/components/ui/PropertyCard";
import AIHomeSearch from "@/components/ui/AIHomeSearch";
import { mockProperties } from "@/lib/mockData";
import { POMPANO_NEIGHBORHOODS, POMPANO_STATS, PRICE_RANGES, PROPERTY_TYPES, BEDROOM_OPTIONS } from "@/lib/propertyTypes";

export const metadata: Metadata = {
  title: "Pompano Beach Properties | Homes for Sale in Pompano Beach, FL",
  description: "Find your dream home in Pompano Beach, Florida. Browse waterfront homes, condos, luxury estates, and new construction.",
};

function formatPrice(price: number): string {
  if (price >= 1000000) return "$" + (price / 1000000).toFixed(1) + "M";
  return "$" + Math.round(price / 1000) + "K";
}

function formatNumber(n: number): string {
  return new Intl.NumberFormat("en-US").format(n);
}

export default function HomePage() {
  const featuredProperties = mockProperties.slice(0, 6);

  return (
    <div>
      <section className="relative h-[600px] sm:h-[680px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/pompano-hero/1600/900"
            alt="Pompano Beach Florida"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/50 to-blue-900/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Find Your Dream Home in Pompano Beach
          </h1>
          <p className="text-blue-100 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Discover waterfront estates, beach condos, and luxury homes in one of South Florida&apos;s most sought-after communities.
          </p>

          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-2xl max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Property Type</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50">
                  <option value="">All Types</option>
                  {PROPERTY_TYPES.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Min Price</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50">
                  <option value="">Any</option>
                  {PRICE_RANGES.filter((p) => p.value > 0).slice(0, 8).map((p) => (
                    <option key={p.value} value={p.value}>{p.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Bedrooms</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50">
                  {BEDROOM_OPTIONS.map((b) => (
                    <option key={b.value} value={b.value}>{b.label === "Any" ? "Any Beds" : b.label}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-end">
                <Link
                  href="/search"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2.5 font-semibold text-sm transition-colors"
                >
                  <Search className="w-4 h-4" />
                  Search
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-blue-200">
            <Link href="/seo/waterfront-homes" className="hover:text-white transition-colors">Waterfront Homes</Link>
            <Link href="/seo/luxury-homes" className="hover:text-white transition-colors">Luxury Estates</Link>
            <Link href="/seo/new-construction" className="hover:text-white transition-colors">New Construction</Link>
            <Link href="/seo/condos-for-sale" className="hover:text-white transition-colors">Condos</Link>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <Home className="w-5 h-5 text-blue-200" />
                <p className="text-2xl font-bold">{formatNumber(POMPANO_STATS.propertiesSold)}</p>
              </div>
              <p className="text-blue-200 text-sm">Homes Sold Last Year</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <TrendingUp className="w-5 h-5 text-blue-200" />
                <p className="text-2xl font-bold">{formatPrice(POMPANO_STATS.avgPrice)}</p>
              </div>
              <p className="text-blue-200 text-sm">Avg. Sale Price</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <Clock className="w-5 h-5 text-blue-200" />
                <p className="text-2xl font-bold">{POMPANO_STATS.avgDaysOnMarket}</p>
              </div>
              <p className="text-blue-200 text-sm">Avg. Days on Market</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <Users className="w-5 h-5 text-blue-200" />
                <p className="text-2xl font-bold">+{POMPANO_STATS.priceChangePercent}%</p>
              </div>
              <p className="text-blue-200 text-sm">Year-over-Year Growth</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Properties</h2>
              <p className="text-gray-500 mt-1">Hand-picked listings in Pompano Beach</p>
            </div>
            <Link href="/listings" className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/listings" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 py-3 font-semibold transition-colors">
              View All {mockProperties.length} Listings
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Explore Neighborhoods</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Each neighborhood in Pompano Beach has its own unique character and lifestyle.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {POMPANO_NEIGHBORHOODS.slice(0, 4).map((hood) => (
              <Link key={hood.slug} href="/neighborhoods" className="group relative rounded-xl overflow-hidden bg-gray-100 block" style={{aspectRatio: "4/3"}}>
                <Image
                  src={hood.image}
                  alt={hood.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-bold text-base leading-tight">{hood.name}</p>
                  <p className="text-sm text-white/80">Avg. {formatPrice(hood.avgPrice)}</p>
                  <p className="text-xs text-white/60 mt-0.5">{hood.propertyCount} properties</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/neighborhoods" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
              Explore All Neighborhoods <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Search with AI</h2>
            <p className="text-gray-500">Just describe what you&apos;re looking for in plain English</p>
          </div>
          <AIHomeSearch />
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Property Type</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { href: "/seo/homes-for-sale", label: "Houses", icon: "H", count: mockProperties.filter((p) => p.property_type === "house").length },
              { href: "/seo/condos-for-sale", label: "Condos", icon: "C", count: mockProperties.filter((p) => p.property_type === "condo").length },
              { href: "/seo/waterfront-homes", label: "Waterfront", icon: "W", count: mockProperties.filter((p) => p.is_waterfront).length },
              { href: "/seo/luxury-homes", label: "Luxury", icon: "L", count: mockProperties.filter((p) => p.property_type === "luxury").length },
              { href: "/seo/new-construction", label: "New Build", icon: "N", count: mockProperties.filter((p) => p.property_type === "new-construction").length },
              { href: "/seo/homes-with-pool", label: "Pool Homes", icon: "P", count: mockProperties.filter((p) => p.has_pool).length },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-xl p-4 text-center transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg mx-auto mb-2">{item.icon}</div>
                <p className="font-semibold text-gray-800 group-hover:text-blue-700 text-sm">{item.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{item.count} listings</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Find Your Home?</h2>
          <p className="text-blue-100 mb-8 text-lg">Our local experts know Pompano Beach inside and out. Let us help you find the perfect property.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/listings" className="bg-white text-blue-600 hover:bg-blue-50 rounded-xl px-8 py-3 font-semibold transition-colors">
              Browse Listings
            </Link>
            <Link href="/search" className="bg-blue-700 hover:bg-blue-800 text-white border border-blue-500 rounded-xl px-8 py-3 font-semibold transition-colors">
              Search Properties
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
