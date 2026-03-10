import Link from 'next/link';
import { Home, Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <Home className="w-6 h-6 text-blue-400" />
              PompanoBeach Homes
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Your trusted source for real estate in Pompano Beach, Florida. Find your dream home
              today.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-300 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/listings', label: 'All Listings' },
                { href: '/search', label: 'Search Homes' },
                { href: '/neighborhoods', label: 'Neighborhoods' },
                { href: '/blog', label: 'Market Insights' },
                { href: '/seo/homes-for-sale', label: 'Homes for Sale' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-white font-semibold mb-4">Property Types</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/seo/homes-for-sale', label: 'Single Family Homes' },
                { href: '/seo/condos-for-sale', label: 'Condos' },
                { href: '/seo/waterfront-homes', label: 'Waterfront Homes' },
                { href: '/seo/luxury-homes', label: 'Luxury Homes' },
                { href: '/seo/new-construction', label: 'New Construction' },
                { href: '/seo/homes-with-pool', label: 'Homes with Pool' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>
                  100 N Federal Hwy, Suite 200
                  <br />
                  Pompano Beach, FL 33060
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="tel:+19545550100" className="hover:text-blue-400 transition-colors">
                  (954) 555-0100
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:info@pompanobeachhomes.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  info@pompanobeachhomes.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-white font-medium mb-1 text-sm">Neighborhoods</h4>
              <ul className="space-y-1 text-sm">
                {['Downtown Pompano', 'Lighthouse Point', 'Harbor Village', 'Crystal Lake'].map(
                  (n) => (
                    <li key={n}>
                      <Link
                        href="/neighborhoods"
                        className="hover:text-blue-400 transition-colors"
                      >
                        {n}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} PompanoBeach Homes. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Fair Housing</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
