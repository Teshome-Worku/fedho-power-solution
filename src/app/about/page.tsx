import type { Metadata } from "next";
import Image from "next/image";

import { FadeIn } from "@/components/motion/motion";
import { PageHero, Section, SectionHeader } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    companyOverview,
    founderStory,
    founders,
    organization,
    timeline,
    visionMission,
} from "@/content/company";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
    title: "About | Fedho Power Solution PLC",
    description:
        "Learn about Fedho Power Solution PLC, the founders, company timeline, organization structure, and long-term clean-energy vision.",
    path: "/about",
});

export default function AboutPage() {
    return (
        <>
            <PageHero
                eyebrow="About"
                title="Building Reliable Hybrid Power in Ethiopia"
                description={companyOverview.summary}
            />

            <Section>
                <SectionHeader
                    eyebrow="Company Overview"
                    title="Who We Are"
                    description={companyOverview.differentiator}
                    align="left"
                />
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Industry Focus</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm text-muted-foreground">
                            {companyOverview.industry.map((item) => (
                                <p key={item}>{item}</p>
                            ))}
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Operations</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm text-muted-foreground">
                            <p>{companyOverview.headquarters}</p>
                            <p>{companyOverview.operations}</p>
                            <p>{companyOverview.manufacturing}</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Long-Term Vision</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                            {companyOverview.longTermVision}
                        </CardContent>
                    </Card>
                </div>
            </Section>

            <Section className="bg-secondary/20">
                <SectionHeader
                    eyebrow="Founders"
                    title="Leadership Team"
                    description="Fedho combines entrepreneurial vision and technical engineering expertise."
                />
                <div className="grid gap-4 lg:grid-cols-2">
                    {founders.map((founder) => (
                        <Card key={founder.name}>
                            <Image
                                src={founder.image}
                                alt={founder.imageAlt}
                                width={900}
                                height={600}
                                className="h-72 w-full object-cover"
                            />
                            <CardHeader>
                                <CardTitle>{founder.name}</CardTitle>
                                <CardDescription>
                                    {founder.role} · {founder.title}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4 text-sm text-muted-foreground">{founder.overview}</p>
                                <div className="flex flex-wrap gap-2">
                                    {founder.focus.map((item) => (
                                        <Badge key={item} variant="outline">
                                            {item}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section>
                <SectionHeader
                    eyebrow="Founder Story"
                    title="From Power Outages to Power Innovation"
                    description={founderStory.intro}
                />
                <div className="grid gap-4 md:grid-cols-2">
                    {founderStory.sections.map((part) => (
                        <FadeIn key={part.title}>
                            <Card className="h-full">
                                <CardHeader>
                                    <CardTitle>{part.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground">{part.content}</CardContent>
                            </Card>
                        </FadeIn>
                    ))}
                </div>
            </Section>

            <Section className="bg-secondary/20">
                <SectionHeader
                    eyebrow="Timeline"
                    title="Company Development Journey"
                    description="Major milestones based on publicly available information."
                />
                <div className="space-y-4">
                    {timeline.map((event) => (
                        <Card key={`${event.period}-${event.title}`}>
                            <CardHeader>
                                <CardDescription>{event.period}</CardDescription>
                                <CardTitle>{event.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">{event.description}</CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section>
                <SectionHeader
                    eyebrow="Organization"
                    title="How Fedho Operates"
                    description="Current organization structure and functional responsibilities."
                />
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {organization.map((unit) => (
                        <Card key={unit.name} className="h-full">
                            <CardHeader>
                                <CardTitle>{unit.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    {unit.responsibilities.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section className="pt-0">
                <Card className="mx-auto max-w-5xl border-primary/20 bg-primary/5">
                    <CardHeader>
                        <CardTitle>Vision, Mission and Values</CardTitle>
                        <CardDescription>{visionMission.disclaimer}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm text-muted-foreground">
                        <p>
                            <span className="font-semibold text-foreground">Vision:</span> {visionMission.vision}
                        </p>
                        <p>
                            <span className="font-semibold text-foreground">Mission:</span> {visionMission.mission}
                        </p>
                        <div>
                            <p className="mb-2 font-semibold text-foreground">Core Values</p>
                            <ul className="grid gap-2 md:grid-cols-2">
                                {visionMission.values.map((value) => (
                                    <li key={value.title}>
                                        <span className="font-medium text-foreground">{value.title}:</span>{" "}
                                        {value.description}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </Section>
        </>
    );
}
