import type { Metadata } from "next";
import Image from "next/image";

import { PageHero, Section, SectionHeader } from "@/components/shared/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { customerPartnerships } from "@/content/applications";
import { galleryItems } from "@/content/gallery";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
    title: "Installations | Fedho Power Solution PLC",
    description:
        "Explore documented installation photos and customer delivery highlights of FP Hybrid Generators across Ethiopia.",
    path: "/installations",
});

export default function InstallationsPage() {
    const installationItems = galleryItems.filter((item) => item.categories.includes("installations"));

    return (
        <>
            <PageHero
                eyebrow="Installations"
                title="Customer Installations and Delivery Highlights"
                description="A dedicated page for installation-focused evidence and customer deployment snapshots."
            />

            <Section>
                <SectionHeader
                    eyebrow="Installations"
                    title="Project Photos"
                    description="Installations and operational images collected from publicly available company updates."
                />
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {installationItems.map((item) => (
                        <Card key={item.id}>
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={700}
                                height={460}
                                className="h-52 w-full object-cover"
                            />
                            <CardHeader>
                                <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section className="bg-secondary/20">
                <SectionHeader
                    eyebrow="Customer Evidence"
                    title="Partnership and Delivery Highlights"
                    description="Representative customer references in education, healthcare, and institutions."
                />
                <div className="grid gap-4 md:grid-cols-3">
                    {customerPartnerships.map((item) => (
                        <Card key={item.title}>
                            <Image
                                src={item.image}
                                alt={item.imageAlt}
                                width={700}
                                height={460}
                                className="h-48 w-full object-cover"
                            />
                            <CardHeader>
                                <CardTitle>{item.title}</CardTitle>
                                <CardDescription>Documented from public company updates</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section className="pt-0">
                <Card className="mx-auto max-w-4xl border-primary/20 bg-primary/5">
                    <CardHeader>
                        <CardTitle>Installation Process</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm text-muted-foreground">
                        <p>1. Site survey and load assessment</p>
                        <p>2. System design and capacity recommendation</p>
                        <p>3. Installation and commissioning</p>
                        <p>4. Customer training and after-sales support</p>
                    </CardContent>
                </Card>
            </Section>
        </>
    );
}
