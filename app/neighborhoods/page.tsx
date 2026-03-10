import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { POMPANO_NEIGHBORHOODS } from "@/lib/propertyTypes";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pompano Beach Neighborhoods | Explore Communities",
  description: "Explore Pompano Beach neighborhoods including Downtown Pompano, Lighthouse Point, Harbor Village, Crystal Lake, and more. Find your perfect community.",
};

function formatPrice(price: number): string {
  if (price >= 1000000) return "$" + (price / 1000000).toFixed(1) + "M";
  return "$" + Math.round(price / 1000) + "K";
}

export default function NeighborhoodsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Pompano Beach Neighborhoods</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Each neighborhood in Pompano Beach offers a unique lifestyle. Explore to find your perfect community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {POMPANO_NEIGHBORHOODS.map((hood) => (
          <div key={hood.slug} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="relative h-56">
              <Image
                src={hood.image}
                alt={hood.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-xl font-bold">{hood.name}</h2>
                <p className="text-sm text-white/80">{hood.propertyCount} properties available</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{hood.description}</p>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-gray-500">Average Price</p>
                  <p className="text-xl font-bold text-blue-600">{formatPrice(hood.avgPrice)}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Properties</p>
                  <p className="text-xl font-bold text-gray-900">{hood.propertyCount}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Highlights</p>
                <div className="grid grid-cols-2 gap-1">
                  {hood.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-1.5 text-xs text-gray-700">
                      <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={"/listings?neighborhood=" + encodeURIComponent(hood.name)}
                className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2.5 text-sm font-medium transition-colors"
              >
                View Properties <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Not Sure Which Neighborhood is Right for You?</h2>
        <p className="text-gray-600 mb-6">Our local experts can help you find the perfect community for your lifestyle and budget.</p>
        <Link href="/listings" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 py-3 font-semibold transition-colors">
          Browse All Listings <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
