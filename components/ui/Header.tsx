'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Home, Menu, X, Search } from 'lucide-react';

const navLinks = [
  { href: '/listings', label: 'Buy' },
  { href: '/listings?type=condo', label: 'Condos' },
  { href: '/neighborhoods', label: 'Neighborhoods' },
  { href: '/blog', label: 'Blog' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-blue-600 font-bold text-xl">
            <Home className="w-6 h-6" />
            <span className="hidden sm:block">PompanoBeach Homes</span>
            <span className="sm:hidden">PB Homes</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/search"
              className="hidden md:flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </Link>
            <Link
              href="/listings"
              className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg px-4 py-2 transition-colors"
            >
              View Listings
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/listings"
            className="block bg-blue-600 hover:bg-blue-700 text-white text-center font-medium rounded-lg px-4 py-2 mt-2 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            View All Listings
          </Link>
        </div>
      )}
    </header>
  );
}
