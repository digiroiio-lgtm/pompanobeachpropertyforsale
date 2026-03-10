import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { mockBlogPosts } from '@/lib/mockData'
import { Calendar, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pompano Beach Real Estate Blog | Market Updates & Guides',
  description:
    'Stay informed with the latest Pompano Beach real estate news, market updates, neighborhood guides, and home buying tips from our local experts.',
}

export default function BlogPage() {
  const [featured, ...rest] = mockBlogPosts

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Real Estate Blog</h1>
        <p className="text-gray-500 text-lg">
          Expert insights, market updates, and guides for Pompano Beach buyers and sellers.
        </p>
      </div>

      {/* Featured Post */}
      <Link href={`/blog/${featured.slug}`} className="group block mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div className="relative h-72 lg:h-auto">
            <Image
              src={featured.coverImage}
              alt={featured.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full inline-block mb-4 w-fit">
              Featured
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-3">
              {featured.title}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5">{featured.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1.5">
                <div className="relative w-7 h-7 rounded-full overflow-hidden">
                  <Image src={featured.author.photo} alt={featured.author.name} fill className="object-cover" sizes="28px" />
                </div>
                <span>{featured.author.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{new Date(featured.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Rest of posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rest.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="group">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h2 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
