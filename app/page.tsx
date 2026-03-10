import Link from 'next/link'
import Image from 'next/image'
import AIHomeSearch from '@/components/AIHomeSearch'
import PropertyCard from '@/components/PropertyCard'
import { mockProperties, mockNeighborhoods } from '@/lib/mockData'
import { formatPrice } from '@/lib/utils'
import { TrendingUp, MapPin, Home, Star, Waves, Sun, Shield } from 'lucide-react'

export default function HomePage() {
  const featuredProperties = mockProperties.slice(0, 6)
  const stats = [
    { label: 'Average Home Price', value: formatPrice(875000), icon: TrendingUp },
    { label: 'Active Listings', value: '284+', icon: Home },
    { label: 'Neighborhoods', value: '12', icon: MapPin },
    { label: 'Days on Market', value: '28 avg', icon: Star },
  ]

  const benefits = [
    {
      icon: Waves,
      title: 'Beach & Waterfront Living',
      desc: 'Miles of pristine Atlantic Ocean beaches and Intracoastal Waterway access for boating, fishing, and water sports.',
    },
    {
      icon: Sun,
      title: 'Year-Round Sunshine',
      desc: '3,000+ hours of sunshine per year. Enjoy outdoor dining, golf, tennis, and the South Florida lifestyle every day.',
    },
    {
      icon: Shield,
      title: 'No State Income Tax',
      desc: 'Florida has no state income tax, making Pompano Beach a financially smart choice for individuals and families.',
    },
    {
      icon: TrendingUp,
      title: 'Strong Real Estate Market',
      desc: "Pompano Beach's real estate market has shown consistent appreciation, making it a smart investment destination.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0f2540] via-[#1a3a5c] to-[#1e5799] py-24 px-4 overflow-hidden">
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 text-sm font-medium px-4 py-2 rounded-full mb-6 border border-blue-400/30">
            <span>🌴</span> Pompano Beach, Florida
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Find Your Dream Home in{' '}
            <span className="text-blue-400">Pompano Beach</span>
          </h1>
          <p className="text-blue-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Explore waterfront estates, luxury condos, and family homes with AI-powered search
          </p>
          <AIHomeSearch />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100 py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl md:text-3xl font-bold text-[#1a3a5c]">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Listings</h2>
            <p className="text-gray-500 mt-1">Hand-picked properties in Pompano Beach</p>
          </div>
          <Link
            href="/listings"
            className="hidden sm:flex items-center gap-1 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
          >
            View all listings →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/listings"
            className="inline-block bg-[#1a3a5c] text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-800 transition-colors"
          >
            Browse All Properties
          </Link>
        </div>
      </section>

      {/* Why Pompano Beach */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Pompano Beach?</h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">
              Discover why thousands choose Pompano Beach as their home
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                  <benefit.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Explore Neighborhoods</h2>
            <p className="text-gray-500 mt-1">Find the perfect community in Pompano Beach</p>
          </div>
          <Link href="/neighborhoods" className="hidden sm:flex items-center gap-1 text-blue-600 font-semibold hover:text-blue-800">
            All neighborhoods →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockNeighborhoods.map((hood) => (
            <Link key={hood.id} href={`/neighborhoods/${hood.slug}`} className="group">
              <div className="relative h-52 rounded-xl overflow-hidden shadow-md">
                <Image
                  src={hood.image}
                  alt={hood.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold text-xl">{hood.name}</h3>
                  <p className="text-white/80 text-sm">
                    {hood.properties} listings · avg {formatPrice(hood.avgPrice)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#1a3a5c] to-blue-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Pompano Beach Home?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Connect with our local experts and start your home search today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/listings"
              className="bg-white text-[#1a3a5c] font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Browse Listings
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              Contact an Agent
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
