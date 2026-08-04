import type { Metadata } from "next";
import Image from "next/image";

import { PageHero, Section, SectionHeader } from "@/components/shared/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { awards, awardsHighlight, mediaCoverage } from "@/content/awards";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
    title: "Awards | Fedho Power Solution PLC",
    description:
        "Review documented awards, recognition letters, and public media coverage for Fedho Power Solution PLC.",
    path: "/awards",
});

export default function AwardsPage() {
    return (
        <>
            <PageHero
                eyebrow="Awards and Recognition"
                title="Public Recognition for Hybrid Power Innovation"
                description="Highlights from competitions, institutions, and media references."
            />

            <Section>
                <SectionHeader
                    eyebrow="Highlights"
                    title="Major Recognition"
                    description="Core milestones described in public documentation."
                />
                <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>{awardsHighlight.biruh.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                            {awardsHighlight.biruh.description}
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>{awardsHighlight.international.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                            {awardsHighlight.international.description}
                        </CardContent>
                    </Card>
                </div>
            </Section>

            <Section className="bg-secondary/20">
                <SectionHeader
                    eyebrow="Awards"
                    title="Certificates and Recommendation Letters"
                    description="Visual records from award ceremonies and supporting documents."
                />
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {awards.map((award) => (
                        <Card key={award.id}>
                            <Image
                                src={award.image}
                                alt={award.imageAlt}
                                width={800}
                                height={560}
                                className="h-56 w-full object-cover"
                            />
                            <CardHeader>
                                <CardTitle>{award.title}</CardTitle>
                                <CardDescription>
                                    {award.description}
                                    {award.year ? ` (${award.year})` : ""}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section>
                <SectionHeader
                    eyebrow="References"
                    title="Media Coverage"
                    description="Public channels and articles documenting Fedho activities."
                />
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {mediaCoverage.map((source) => (
                        <Card key={source.source} className="h-full">
                            <CardHeader>
                                <CardTitle>{source.source}</CardTitle>
                                {source.title ? <CardDescription>{source.title}</CardDescription> : null}
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">{source.description}</CardContent>
                        </Card>
                    ))}
                </div>
            </Section>
        </>
    );
}
