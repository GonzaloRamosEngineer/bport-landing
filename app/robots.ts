import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://bportlogistics.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Disallow any private routes here if they exist in the future:
      // disallow: ['/private/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
