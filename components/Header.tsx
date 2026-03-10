'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Menu, X, Home } from 'lucide-react'
import { useRouter } from 'next/navigation'

const navLinks = [
  { href: '/listings', label: 'Buy' },
  { href: '/listings?listingType=rent', label: 'Rent' },
  { href: '/sell', label: 'Sell' },
  { href: '/neighborhoods', label: 'Neighborhoods' },
  { href: '/blog', label: 'Blog' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-[#1a3a5c] rounded-lg flex items-center justify-center">
              <Home className="w-4 h-4 text-white" />
            </div>
            <span className="text-[#1a3a5c] font-bold text-lg hidden sm:block">
              PompanoHomes<span className="text-blue-500">.com</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-gray-600 hover:text-[#1a3a5c] hover:bg-gray-50 rounded-lg font-medium text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden lg:flex items-center relative">
            <Search className="absolute left-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Pompano Beach..."
              className="pl-9 pr-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition-all w-56 xl:w-72"
            />
          </form>

          {/* Sign In */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-[#1a3a5c] font-medium text-sm hover:text-blue-600 transition-colors">
              Sign In
            </button>
            <button className="bg-[#1a3a5c] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
              List Property
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1">
          <form onSubmit={handleSearch} className="flex items-center relative mb-3">
            <Search className="absolute left-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Pompano Beach..."
              className="w-full pl-9 pr-4 py-2.5 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </form>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-gray-700 hover:text-[#1a3a5c] hover:bg-gray-50 rounded-lg font-medium"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100 flex gap-3">
            <button className="flex-1 text-center py-2.5 text-[#1a3a5c] font-medium text-sm border border-[#1a3a5c] rounded-lg">
              Sign In
            </button>
            <button className="flex-1 text-center py-2.5 bg-[#1a3a5c] text-white font-medium text-sm rounded-lg">
              List Property
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
