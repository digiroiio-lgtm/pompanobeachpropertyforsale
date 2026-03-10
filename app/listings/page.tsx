import type { Metadata } from "next";
import Link from "next/link";
import { mockProperties } from "@/lib/mockData";
import PropertyCard from "@/components/ui/PropertyCard";
import SearchFilters from "@/components/ui/SearchFilters";
import MapSearch from "@/components/ui/MapSearch";
import type { Property, PropertyType } from "@/types";

export const metadata: Metadata = {
  title: "All Listings | Pompano Beach Properties",
  description: "Browse all properties for sale in Pompano Beach, FL. Filter by price, bedrooms, property type, and more.",
};

interface ListingsPageProps {
  searchParams: {
    type?: string;
    minPrice?: string;
    maxPrice?: string;
    beds?: string;
    baths?: string;
    waterfront?: string;
    pool?: string;
    newConstruction?: string;
    neighborhood?: string;
  };
}

function filterProps(properties: Property[], params: ListingsPageProps["searchParams"]): Property[] {
  return properties.filter((p) => {
    if (params.type && params.type !== "all" && p.property_type !== (params.type as PropertyType)) return false;
    if (params.minPrice && p.price < Number(params.minPrice)) return false;
    if (params.maxPrice && p.price > Number(params.maxPrice)) return false;
    if (params.beds && p.beds < Number(params.beds)) return false;
    if (params.baths && p.baths < Number(params.baths)) return false;
    if (params.waterfront === "true" && !p.is_waterfront) return false;
    if (params.pool === "true" && !p.has_pool) return false;
    if (params.newConstruction === "true" && p.property_type !== "new-construction") return false;
    if (params.neighborhood && p.neighborhood !== params.neighborhood) return false;
    return true;
  });
}

export default function ListingsPage({ searchParams }: ListingsPageProps) {
  const filtered = filterProps(mockProperties, searchParams);
  const hasFilters = Object.values(searchParams).some(Boolean);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Homes for Sale in Pompano Beach, FL</h1>
        <p className="text-gray-500 mt-1">
          {filtered.length} {filtered.length === 1 ? "property" : "properties"} available
          {hasFilters && " (filtered)"}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full lg:w-72 flex-shrink-0">
          <SearchFilters />
        </aside>

        {/* Main */}
        <div className="flex-1 min-w-0">
          {/* Map */}
          <div className="mb-6">
            <MapSearch properties={filtered} />
          </div>

          {/* Sort bar */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-600">
              Showing <span className="font-semibold">{filtered.length}</span> properties
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-xl">
              <p className="text-xl font-semibold text-gray-700 mb-2">No properties found</p>
              <p className="text-gray-500 mb-4">Try adjusting your filters</p>
              <Link href="/listings" className="text-blue-600 hover:underline font-medium">
                Clear all filters
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
