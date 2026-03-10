import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPropertyById, mockProperties } from "@/lib/mockData";
import PropertyGallery from "@/components/ui/PropertyGallery";
import MapSearch from "@/components/ui/MapSearch";
import PriceHistoryChart from "@/components/ui/PriceHistory";
import MortgageCalculator from "@/components/ui/MortgageCalculator";
import LeadForm from "@/components/ui/LeadForm";
import { Bed, Bath, Square, Calendar, Tag, DollarSign, School, Phone, Check, Waves } from "lucide-react";

interface PropertyPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return mockProperties.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const property = getPropertyById(params.id);
  if (!property) return { title: "Property Not Found" };

  return {
    title: `${property.address} | ${property.city}, FL - $${property.price.toLocaleString()}`,
    description: property.description.substring(0, 160),
    openGraph: {
      title: `${property.address} - $${property.price.toLocaleString()}`,
      description: property.description.substring(0, 160),
      images: [{ url: property.images[0], width: 800, height: 600 }],
    },
  };
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(price);
}

const typeLabels: Record<string, string> = {
  house: "Single Family Home",
  condo: "Condo",
  townhouse: "Townhouse",
  villa: "Villa",
  waterfront: "Waterfront Home",
  luxury: "Luxury Home",
  "new-construction": "New Construction",
  land: "Land",
};

export default function PropertyPage({ params }: PropertyPageProps) {
  const property = getPropertyById(params.id);
  if (!property) notFound();

  const schoolTypeLabels: Record<string, string> = {
    elementary: "Elementary",
    middle: "Middle",
    high: "High School",
    private: "Private",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.address,
    description: property.description,
    url: `https://pompanobeachpropertyforsale.com/property/${property.id}`,
    image: property.images,
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: "USD",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: property.address,
      addressLocality: property.city,
      addressRegion: property.state,
      postalCode: property.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: property.lat,
      longitude: property.lng,
    },
    numberOfRooms: property.beds,
    floorSize: {
      "@type": "QuantitativeValue",
      value: property.sqft,
      unitCode: "FTK",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4 flex flex-wrap items-center gap-1">
          <a href="/" className="hover:text-blue-600">Home</a>
          <span>/</span>
          <a href="/listings" className="hover:text-blue-600">Listings</a>
          <span>/</span>
          <span className="text-gray-800">{property.address}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <PropertyGallery images={property.images} address={property.address} />

            {/* Title & Price */}
            <div>
              <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                <div>
                  <p className="text-4xl font-bold text-gray-900">{formatPrice(property.price)}</p>
                  {property.hoa_fee && (
                    <p className="text-sm text-gray-500 mt-0.5">HOA: {formatPrice(property.hoa_fee)}/mo</p>
                  )}
                </div>
                <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  {typeLabels[property.property_type] || property.property_type}
                </span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">{property.address}</h1>
              <p className="text-gray-500">{property.city}, {property.state} {property.zip}</p>
              <p className="text-sm text-gray-500 mt-1">
                {property.neighborhood} &bull; MLS# {property.mls_number} &bull; {property.days_on_market} days on market
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Bed, label: "Bedrooms", value: String(property.beds) },
                { icon: Bath, label: "Bathrooms", value: String(property.baths) },
                { icon: Square, label: "Sq Ft", value: property.sqft.toLocaleString() },
                { icon: Calendar, label: "Year Built", value: String(property.year_built) },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                  <Icon className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                  <p className="text-xl font-bold text-gray-900">{value}</p>
                  <p className="text-xs text-gray-500">{label}</p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            {(property.is_waterfront || property.has_pool) && (
              <div className="flex flex-wrap gap-2">
                {property.is_waterfront && (
                  <span className="flex items-center gap-1 bg-cyan-50 text-cyan-700 border border-cyan-200 px-3 py-1.5 rounded-full text-sm font-medium">
                    <Waves className="w-4 h-4" /> Waterfront
                  </span>
                )}
                {property.has_pool && (
                  <span className="flex items-center gap-1 bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1.5 rounded-full text-sm font-medium">
                    Pool
                  </span>
                )}
                {property.has_garage && (
                  <span className="flex items-center gap-1 bg-gray-50 text-gray-700 border border-gray-200 px-3 py-1.5 rounded-full text-sm font-medium">
                    {property.garage_spaces}-Car Garage
                  </span>
                )}
              </div>
            )}

            {/* Description */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">About This Property</h2>
              <p className="text-gray-600 leading-relaxed">{property.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Features & Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {property.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Details */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Financial Details</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { icon: DollarSign, label: "List Price", value: formatPrice(property.price) },
                  { icon: DollarSign, label: "Annual Taxes", value: formatPrice(property.tax_amount) },
                  { icon: Square, label: "Lot Size", value: property.lot_size > 0 ? property.lot_size.toLocaleString() + " sqft" : "N/A" },
                  { icon: DollarSign, label: "HOA Fee", value: property.hoa_fee ? formatPrice(property.hoa_fee) + "/mo" : "None" },
                  { icon: DollarSign, label: "Price/sqft", value: formatPrice(Math.round(property.price / property.sqft)) },
                  { icon: Calendar, label: "Listed", value: new Date(property.listing_date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-1">
                      <Icon className="w-3.5 h-3.5" />
                      {label}
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Location</h2>
              <MapSearch properties={[property]} center={{ lat: property.lat, lng: property.lng }} zoom={15} />
            </div>

            {/* Price History */}
            {property.price_history.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Price History</h2>
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <PriceHistoryChart data={property.price_history} />
                </div>
              </div>
            )}

            {/* Nearby Schools */}
            {property.nearby_schools.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <School className="w-5 h-5 text-blue-600" />
                  Nearby Schools
                </h2>
                <div className="space-y-3">
                  {property.nearby_schools.map((school) => (
                    <div key={school.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <div>
                        <p className="font-medium text-gray-800 text-sm">{school.name}</p>
                        <p className="text-xs text-gray-500">{schoolTypeLabels[school.type]} &bull; {school.distance} mi away</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-blue-600">{school.rating}/10</div>
                        <div className="text-xs text-gray-400">Rating</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mortgage Calculator */}
            <MortgageCalculator homePrice={property.price} hoa={property.hoa_fee} taxAmount={property.tax_amount} />
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-5">
            {/* Lead Form */}
            <div className="sticky top-20">
              <LeadForm propertyId={property.id} propertyAddress={property.address} />

              {/* Agent Info */}
              <div className="mt-4 bg-gray-50 rounded-xl border border-gray-200 p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Listed By</p>
                <p className="font-semibold text-gray-800">{property.agent_name}</p>
                <a href={"tel:" + property.agent_phone} className="flex items-center gap-2 text-blue-600 text-sm mt-1 hover:underline">
                  <Phone className="w-4 h-4" />
                  {property.agent_phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
