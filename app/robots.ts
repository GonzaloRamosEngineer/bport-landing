import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://bportlogistics.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Demo del portal con datos ficticios: fuera de los índices hasta la fase real.
        disallow: ["/portal", "/portal/admin"],
      },
      {
        userAgent: "facebookexternalhit",
        allow: "/",
      },
      {
        userAgent: "Facebot",
        allow: "/",
      },
      {
        userAgent: "Twitterbot",
        allow: "/",
      },
      {
        userAgent: "LinkedInBot",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}