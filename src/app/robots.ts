import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/navigation";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url;

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
