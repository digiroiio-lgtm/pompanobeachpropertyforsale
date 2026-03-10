import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { mockBlogPosts } from '@/lib/mockData'
import { Calendar, User, ArrowLeft } from 'lucide-react'

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = mockBlogPosts.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Post Not Found' }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.coverImage] },
  }
}

export function generateStaticParams() {
  return mockBlogPosts.map((p) => ({ slug: p.slug }))
}

export default function BlogPostPage({ params }: PageProps) {
  const post = mockBlogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const related = mockBlogPosts.filter((p) => p.id !== post.id).slice(0, 2)

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Back link */}
      <Link href="/blog" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium mb-8">
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </Link>

      {/* Cover Image */}
      <div className="relative h-80 rounded-2xl overflow-hidden mb-8">
        <Image src={post.coverImage} alt={post.title} fill className="object-cover" sizes="100vw" priority />
      </div>

      {/* Article Header */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{post.title}</h1>
      <div className="flex items-center gap-5 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image src={post.author.photo} alt={post.author.name} fill className="object-cover" sizes="32px" />
          </div>
          <span className="font-medium text-gray-700">{post.author.name}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4" />
          {new Date(post.publishedAt).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed">
        {post.content.split('\n').map((line, i) => {
          if (line.startsWith('# ')) {
            return <h1 key={i} className="text-3xl font-bold text-gray-900 mt-8 mb-4">{line.slice(2)}</h1>
          }
          if (line.startsWith('## ')) {
            return <h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-3">{line.slice(3)}</h2>
          }
          if (line.startsWith('### ')) {
            return <h3 key={i} className="text-xl font-bold text-gray-900 mt-6 mb-2">{line.slice(4)}</h3>
          }
          if (line.startsWith('**') && line.endsWith('**')) {
            return <p key={i} className="font-bold text-gray-800 mt-3">{line.slice(2, -2)}</p>
          }
          if (line.startsWith('- ')) {
            return <li key={i} className="ml-4 mb-1">{line.slice(2)}</li>
          }
          if (line.trim() === '') {
            return <br key={i} />
          }
          return <p key={i} className="mb-3">{line}</p>
        })}
      </div>

      {/* Related Posts */}
      {related.length > 0 && (
        <div className="mt-16 pt-10 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {related.map((relPost) => (
              <Link key={relPost.id} href={`/blog/${relPost.slug}`} className="group">
                <div className="bg-gray-50 rounded-xl overflow-hidden hover:bg-gray-100 transition-colors">
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={relPost.coverImage}
                      alt={relPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="50vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 group-hover:text-blue-700 transition-colors line-clamp-2">
                      {relPost.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-gray-400 mt-2">
                      <User className="w-3 h-3" />
                      <span>{relPost.author.name}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
