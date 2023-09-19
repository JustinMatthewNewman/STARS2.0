import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://google.com",
      lastModified: new Date(),
    },
    {
      url: "https://google.com",
      lastModified: new Date(),
    },
  ];
}
