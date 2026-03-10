import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/types";

export const metadata: Metadata = {
  title: "Pompano Beach Real Estate Blog | Market Insights",
  description: "Stay up to date with Pompano Beach real estate market trends, tips for buyers and sellers, and neighborhood guides.",
};

const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "pompano-beach-market-2024",
    title: "Pompano Beach Real Estate Market Update: Mid-2024",
    excerpt: "Discover the latest trends in Pompano Beach real estate. Home prices, days on market, and what it means for buyers and sellers in 2024.",
    content: "",
    author: "Sarah Johnson",
    publishedAt: "2024-06-01",
    image: "https://picsum.photos/seed/blog001/800/400",
    category: "Market Update",
    readTime: 5,
  },
  {
    id: "2",
    slug: "waterfront-homes-guide",
    title: "The Ultimate Guide to Buying Waterfront Homes in Pompano Beach",
    excerpt: "Everything you need to know about purchasing waterfront property in Pompano Beach — from due diligence to dock rights and flood insurance.",
    content: "",
    author: "Michael Torres",
    publishedAt: "2024-05-20",
    image: "https://picsum.photos/seed/blog002/800/400",
    category: "Buyer Guide",
    readTime: 8,
  },
  {
    id: "3",
    slug: "best-neighborhoods-pompano-2024",
    title: "Best Neighborhoods in Pompano Beach for Families in 2024",
    excerpt: "Looking to raise a family in South Florida? Here are the top Pompano Beach neighborhoods with great schools, parks, and community amenities.",
    content: "",
    author: "Jennifer Walsh",
    publishedAt: "2024-05-10",
    image: "https://picsum.photos/seed/blog003/800/400",
    category: "Neighborhood Guide",
    readTime: 6,
  },
  {
    id: "4",
    slug: "new-construction-vs-resale",
    title: "New Construction vs. Resale Homes: What Pompano Beach Buyers Should Know",
    excerpt: "The pros and cons of buying new construction versus an existing home in Pompano Beach. Price points, customization options, and timeline expectations.",
    content: "",
    author: "Carlos Rivera",
    publishedAt: "2024-04-28",
    image: "https://picsum.photos/seed/blog004/800/400",
    category: "Buyer Guide",
    readTime: 7,
  },
  {
    id: "5",
    slug: "condo-market-pompano",
    title: "Pompano Beach Condo Market: Oceanfront vs. Intracoastal Living",
    excerpt: "Comparing ocean-view condos to Intracoastal waterway units. Which offers better value, views, and rental income potential?",
    content: "",
    author: "Patricia Lee",
    publishedAt: "2024-04-15",
    image: "https://picsum.photos/seed/blog005/800/400",
    category: "Market Analysis",
    readTime: 5,
  },
  {
    id: "6",
    slug: "first-time-buyer-tips",
    title: "10 Tips for First-Time Home Buyers in South Florida",
    excerpt: "Navigating the Pompano Beach real estate market as a first-time buyer? These expert tips will help you land your dream home at the right price.",
    content: "",
    author: "Dorothy Singh",
    publishedAt: "2024-04-01",
    image: "https://picsum.photos/seed/blog006/800/400",
    category: "Buyer Tips",
    readTime: 9,
  },
];

const categoryColors: Record<string, string> = {
  "Market Update": "bg-blue-100 text-blue-800",
  "Buyer Guide": "bg-green-100 text-green-800",
  "Neighborhood Guide": "bg-purple-100 text-purple-800",
  "Market Analysis": "bg-amber-100 text-amber-800",
  "Buyer Tips": "bg-pink-100 text-pink-800",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Real Estate Insights</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Expert advice, market updates, and neighborhood guides for Pompano Beach real estate.
        </p>
      </div>

      {/* Featured Post */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-64 lg:h-auto">
            <Image src={featured.image} alt={featured.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <span className={"text-xs font-bold px-3 py-1 rounded-full w-fit mb-3 " + (categoryColors[featured.category] || "bg-gray-100 text-gray-800")}>
              {featured.category}
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">{featured.title}</h2>
            <p className="text-gray-600 mb-4">{featured.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-5">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(featured.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {featured.readTime} min read
              </span>
            </div>
            <Link href={"/blog/" + featured.slug} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
              Read Article <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((post) => (
          <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              <span className={"absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full " + (categoryColors[post.category] || "bg-gray-100 text-gray-800")}>
                {post.category}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime} min
                  </span>
                </div>
                <Link href={"/blog/" + post.slug} className="text-blue-600 hover:underline text-xs font-semibold">
                  Read more
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 bg-blue-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Stay Updated on Pompano Beach Real Estate</h2>
        <p className="text-blue-100 mb-6">Get market updates and new listings delivered to your inbox weekly.</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 rounded-lg text-gray-900 text-sm focus:outline-none" />
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold text-sm transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
