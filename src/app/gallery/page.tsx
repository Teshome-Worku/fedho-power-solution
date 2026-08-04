import type { Metadata } from "next";
import { GalleryPageClient } from "@/components/pages/GalleryPageClient";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
    title: "Gallery | Fedho Power Solution PLC",
    description:
        "Browse products, installations, founders, awards, customers, and upcoming factory media from Fedho Power Solution PLC.",
    path: "/gallery",
});

export default function GalleryPage() {
    return <GalleryPageClient />;
}
