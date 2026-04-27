import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bportlogistics.com';

  // In an MVP, we only have the home page.
  // When you add more routes (like /about, /services, /blog),
  // you can simply append them to this array.
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
