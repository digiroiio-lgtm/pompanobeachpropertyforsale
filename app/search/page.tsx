import type { Metadata } from "next";
import Link from "next/link";
import { mockProperties } from "@/lib/mockData";
import PropertyCard from "@/components/ui/PropertyCard";
import SearchFilters from "@/components/ui/SearchFilters";
import MapSearch from "@/components/ui/MapSearch";
import type { Property, PropertyType } from "@/types";

export const metadata: Metadata = {
  title: "Search Properties | Pompano Beach Properties",
  description: "Search homes for sale in Pompano Beach, FL by price, bedrooms, property type, and features.",
};

interface SearchPageProps {
  searchParams: {
    location?: string;
    minPrice?: string;
    maxPrice?: string;
    beds?: string;
    baths?: string;
    type?: string;
    waterfront?: string;
    pool?: string;
    newConstruction?: string;
    neighborhood?: string;
  };
}

function filterProps(properties: Property[], params: SearchPageProps["searchParams"]): Property[] {
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
    if (params.location) {
      const loc = params.location.toLowerCase();
      const matches =
        p.address.toLowerCase().includes(loc) ||
        p.neighborhood.toLowerCase().includes(loc) ||
        p.city.toLowerCase().includes(loc);
      if (!matches) return false;
    }
    return true;
  });
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const filtered = filterProps(mockProperties, searchParams);
  const hasFilters = Object.values(searchParams).some(Boolean);

  const titleParts: string[] = [];
  if (searchParams.beds) titleParts.push(searchParams.beds + "+ Bed");
  if (searchParams.type && searchParams.type !== "all") titleParts.push(searchParams.type.replace("-", " "));
  titleParts.push("Properties in Pompano Beach");
  const pageTitle = titleParts.join(" ");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 capitalize">{pageTitle}</h1>
        <p className="text-gray-500 mt-1">
          {filtered.length} {filtered.length === 1 ? "property" : "properties"} found
          {hasFilters && " matching your criteria"}
        </p>
        {hasFilters && (
          <div className="flex flex-wrap gap-2 mt-3">
            {searchParams.type && searchParams.type !== "all" && (
              <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full capitalize">
                {searchParams.type.replace("-", " ")}
              </span>
            )}
            {(searchParams.minPrice || searchParams.maxPrice) && (
              <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                {searchParams.minPrice ? "$" + Number(searchParams.minPrice).toLocaleString() : "Any"} &mdash;{" "}
                {searchParams.maxPrice ? "$" + Number(searchParams.maxPrice).toLocaleString() : "Any"}
              </span>
            )}
            {searchParams.beds && (
              <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                {searchParams.beds}+ beds
              </span>
            )}
            {searchParams.waterfront === "true" && (
              <span className="bg-cyan-100 text-cyan-800 text-xs px-3 py-1 rounded-full">Waterfront</span>
            )}
            {searchParams.pool === "true" && (
              <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Pool</span>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <aside className="w-full lg:w-72 flex-shrink-0">
          <SearchFilters />
        </aside>

        <div className="flex-1 min-w-0">
          <div className="mb-6">
            <MapSearch properties={filtered.length > 0 ? filtered : mockProperties} />
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-xl">
              <p className="text-xl font-semibold text-gray-700 mb-2">No properties found</p>
              <p className="text-gray-500 mb-4">Try broadening your search criteria</p>
              <Link href="/listings" className="text-blue-600 hover:underline font-medium">
                View all listings
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
