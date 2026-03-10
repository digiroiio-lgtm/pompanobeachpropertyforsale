import Link from 'next/link'
import { Home, Phone, Mail, MapPin } from 'lucide-react'

const footerLinks = {
  explore: [
    { href: '/listings', label: 'Homes for Sale' },
    { href: '/listings?listingType=rent', label: 'Homes for Rent' },
    { href: '/neighborhoods', label: 'Neighborhoods' },
    { href: '/blog', label: 'Real Estate Blog' },
    { href: '/sell', label: 'Sell Your Home' },
  ],
  seo: [
    { href: '/seo/homes-for-sale', label: 'Pompano Beach Homes for Sale' },
    { href: '/seo/condos-for-sale', label: 'Pompano Beach Condos' },
    { href: '/seo/waterfront-homes', label: 'Waterfront Homes' },
    { href: '/seo/luxury-homes', label: 'Luxury Homes' },
    { href: '/seo/new-construction', label: 'New Construction' },
    { href: '/seo/homes-with-pool', label: 'Homes with Pool' },
  ],
  neighborhoods: [
    { href: '/neighborhoods/harbor-village', label: 'Harbor Village' },
    { href: '/neighborhoods/lighthouse-point', label: 'Lighthouse Point' },
    { href: '/neighborhoods/pompano-beach-highlands', label: 'Pompano Beach Highlands' },
    { href: '/neighborhoods/mcnab-plat', label: 'McNab Plat' },
    { href: '/neighborhoods/pompano-isles', label: 'Pompano Isles' },
    { href: '/neighborhoods/palm-aire', label: 'Palm Aire' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0f2540] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-blue-500 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl">
                PompanoHomes<span className="text-blue-400">.com</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Your trusted source for real estate in Pompano Beach, FL. Find your dream home,
              waterfront estate, or luxury condo with our expert local team.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Pompano Beach, FL 33062</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>(954) 555-0100</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>info@pompanohomes.com</span>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2.5">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Neighborhoods */}
          <div>
            <h3 className="text-white font-semibold mb-4">Neighborhoods</h3>
            <ul className="space-y-2.5">
              {footerLinks.neighborhoods.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SEO Links */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-white font-semibold text-sm mb-4">Popular Searches in Pompano Beach</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {footerLinks.seo.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} PompanoHomes.com. All rights reserved. An Equal Housing Opportunity.
          </p>
          <p className="text-gray-600 text-xs text-center">
            Real estate listings held by brokerage firms other than PompanoHomes.com are marked with the IDX logo.
          </p>
        </div>
      </div>
    </footer>
  )
}
