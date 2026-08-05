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
    keywords = [],
}: {
    title: string;
    description: string;
    path: string;
    keywords?: string[];
}): Metadata {
    const absoluteUrl = withBaseUrl(path);

    const baseKeywords = [
        "Hybrid Generator Ethiopia",
        "Solar Generator Ethiopia",
        "Backup Power Ethiopia",
        "Silent Generator",
        "Power Backup",
        "Industrial Generator",
        "Renewable Energy Ethiopia",
        "Battery Storage",
        "Solar Power Solutions",
        "Energy Systems",
    ];

    return {
        metadataBase: new URL(defaultSiteUrl),
        title,
        description,
        applicationName: siteConfig.name,
        authors: [{ name: "Fedho Power Solution PLC" }],
        publisher: "Fedho Power Solution PLC",
        keywords: [...baseKeywords, ...keywords],
        alternates: {
            canonical: absoluteUrl,
        },
        openGraph: {
            type: "website",
            url: absoluteUrl,
            title,
            description,
            siteName: siteConfig.name,
            locale: "en_US",
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
            creator: "@FedhoPower",
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
    };
}

export function createOrgSchema() {
    return {
        "@context": "https://schema.org",
        "@type": ["Organization", "LocalBusiness"],
        name: siteConfig.name,
        description: siteConfig.description,
        url: defaultSiteUrl,
        logo: withBaseUrl("/media/logo/logo.jpg"),
        image: withBaseUrl("/media/logo/logo.jpg"),
        address: {
            "@type": "PostalAddress",
            addressLocality: "Addis Ababa",
            addressCountry: "Ethiopia",
            streetAddress: "Bole Lemi",
        },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+251917428514",
            contactType: "customer service",
            areaServed: "ET",
            availableLanguage: ["English", "Amharic"],
        },
        sameAs: [
            "https://www.linkedin.com/in/fedho-power-solution-plc-014a7a3a1/",
            "https://web.facebook.com/fedhopowersolution",
            "https://www.tiktok.com/@fedho2319796111699",
            "https://t.me/+lSw2LwIYjLExOWE0",
        ],
    };
}

export function createFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };
}

export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: withBaseUrl(item.url),
        })),
    };
}
