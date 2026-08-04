import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageHero, Section, SectionHeader } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    applicationSegments,
    customerPartnerships,
    customerProblems,
    hospitalitySegment,
} from "@/content/applications";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
    title: "Applications | Fedho Power Solution PLC",
    description:
        "See how FP Hybrid Generators are applied across residential, commercial, industrial, institutional, and healthcare use cases.",
    path: "/applications",
});

export default function ApplicationsPage() {
    return (
        <>
            <PageHero
                eyebrow="Applications"
                title="Power Solutions by Customer Need"
                description="Every segment has a different continuity requirement, operating profile, and expansion plan."
            />

            <Section>
                <SectionHeader
                    eyebrow="Problem to Solution"
                    title="Why Customers Seek Hybrid Power"
                    description="We start with the operational problems customers face, then map them to practical power outcomes."
                />
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {customerProblems.map((item) => (
                        <Card key={item.problem} className="h-full">
                            <CardHeader>
                                <CardTitle>{item.problem}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">{item.solution}</CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section className="bg-secondary/20">
                <SectionHeader
                    eyebrow="Segments"
                    title="Customer Segments"
                    description="Capacity ranges and use patterns vary by industry and infrastructure scale."
                />
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {applicationSegments.map((segment) => (
                        <Card key={segment.id} className="h-full">
                            <CardHeader>
                                <CardTitle>{segment.title}</CardTitle>
                                <CardDescription>{segment.products}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3 text-sm text-muted-foreground">
                                <p>{segment.description}</p>
                                <p>
                                    <span className="font-medium text-foreground">Typical Uses:</span>{" "}
                                    {segment.typicalUses.join(", ")}
                                </p>
                                <p>
                                    <span className="font-medium text-foreground">Needs:</span>{" "}
                                    {segment.needs.join(", ")}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Card className="mt-4">
                    <CardHeader>
                        <CardTitle>{hospitalitySegment.title}</CardTitle>
                        <CardDescription>{hospitalitySegment.products}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        <p>
                            <span className="font-medium text-foreground">Applications:</span>{" "}
                            {hospitalitySegment.applications.join(", ")}
                        </p>
                        <p className="mt-2">
                            <span className="font-medium text-foreground">Needs:</span>{" "}
                            {hospitalitySegment.needs.join(", ")}
                        </p>
                    </CardContent>
                </Card>
            </Section>

            <Section>
                <SectionHeader
                    eyebrow="Partnership Evidence"
                    title="Recent Customer Highlights"
                    description="Documented examples from public company updates."
                />
                <div className="grid gap-4 md:grid-cols-3">
                    {customerPartnerships.map((item) => (
                        <Card key={item.title}>
                            <Image
                                src={item.image}
                                alt={item.imageAlt}
                                width={700}
                                height={480}
                                className="h-48 w-full object-cover"
                            />
                            <CardHeader>
                                <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section className="pt-0">
                <div className="mx-auto max-w-5xl rounded-2xl bg-primary px-6 py-10 text-white sm:px-10">
                    <h2 className="text-3xl font-bold">Need help identifying your ideal capacity?</h2>
                    <p className="mt-3 text-white/85">
                        Request a technical consultation to estimate load requirements and the right generator series.
                    </p>
                    <Button
                        nativeButton={false}
                        render={<Link href="/contact" />}
                        size="lg"
                        className="mt-6 bg-[var(--brand-orange)] text-white hover:bg-[var(--brand-orange)]/90"
                    >
                        Request a Quote
                    </Button>
                </div>
            </Section>
        </>
    );
}
