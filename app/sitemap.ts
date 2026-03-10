import { MetadataRoute } from 'next'
import { mockProperties, mockNeighborhoods, mockBlogPosts } from '@/lib/mockData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pompanohomes.com'

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/listings`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/search`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/neighborhoods`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/seo/homes-for-sale`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/seo/condos-for-sale`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/seo/waterfront-homes`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/seo/luxury-homes`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/seo/new-construction`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/seo/homes-with-pool`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
  ]

  const propertyRoutes: MetadataRoute.Sitemap = mockProperties.map((p) => ({
    url: `${baseUrl}/property/${p.id}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const neighborhoodRoutes: MetadataRoute.Sitemap = mockNeighborhoods.map((n) => ({
    url: `${baseUrl}/neighborhoods/${n.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const blogRoutes: MetadataRoute.Sitemap = mockBlogPosts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...propertyRoutes, ...neighborhoodRoutes, ...blogRoutes]
}
