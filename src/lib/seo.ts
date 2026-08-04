import type { Metadata } from "next";

import { siteConfig } from "@/content/navigation";

const defaultSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

function withBaseUrl(path: string) {
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return new URL(cleanPath, defaultSiteUrl).toString();
}

export function createPageMetadata({
    title,
    description,
    path,
}: {
    title: string;
    description: string;
    path: string;
}): Metadata {
    const absoluteUrl = withBaseUrl(path);

    return {
        metadataBase: new URL(defaultSiteUrl),
        title,
        description,
        alternates: {
            canonical: absoluteUrl,
        },
        openGraph: {
            type: "website",
            url: absoluteUrl,
            title,
            description,
            siteName: siteConfig.name,
            images: [
                {
                    url: withBaseUrl("/media/logo/logo.jpg"),
                    width: 1200,
                    height: 630,
                    alt: `${siteConfig.name} logo`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [withBaseUrl("/media/logo/logo.jpg")],
        },
    };
}

export function createOrgSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.name,
        description: siteConfig.description,
        logo: withBaseUrl("/media/logo/logo.jpg"),
        address: {
            "@type": "PostalAddress",
            addressLocality: "Addis Ababa",
            addressCountry: "Ethiopia",
            streetAddress: "Bole Lemi",
        },
    };
}
