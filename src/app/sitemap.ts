import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const routes = [
    "",
    "/about",
    "/technology",
    "/products",
    "/applications",
    "/installations",
    "/gallery",
    "/awards",
    "/faq",
    "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: now,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.7,
    }));
}
