import { MetadataRoute } from 'next';
import blogsData from '@/data/blogs.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://drstudents.com';

  // Static routes
  const routes = [
    '',
    '/blog',
    '/join-now',
    '/join-our-mentorship',
    '/test-series',
    '/study-with-us',
    '/top-colleges',
    '/abroad',
    '/exam',
    '/course',
    '/college',
    '/oneshot',
    '/search',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic blog routes
  const blogRoutes = blogsData.map((post) => ({
    url: `${baseUrl}/blog?post=${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...blogRoutes];
}
