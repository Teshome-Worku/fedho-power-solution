import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageHero, Section, SectionHeader } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    commonFeatures,
    productComparison,
    productRecommendation,
    productSeries,
    technicalSpecs,
} from "@/content/products";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
    title: "Products | Fedho Power Solution PLC",
    description:
        "Explore FP Hybrid Generator series from Residential to Enterprise with capacities from 2KW to 600KW.",
    path: "/products",
});

export default function ProductsPage() {
    return (
        <>
            <PageHero
                eyebrow="Products"
                title="FP Hybrid Generator Product Lineup"
                description="Generator capacities are grouped by customer need, application environment, and operational scale."
            />

            <Section>
                <SectionHeader
                    eyebrow="Series"
                    title="Choose the Right Capacity Range"
                    description="A professional site assessment is recommended before purchase."
                />
                <div className="grid gap-4 md:grid-cols-2">
                    {productSeries.map((series) => (
                        <Card key={series.id} className="h-full">
                            <Image
                                src={series.image}
                                alt={series.imageAlt}
                                width={900}
                                height={540}
                                className="h-44 w-full object-cover"
                            />
                            <CardHeader>
                                <CardTitle>{series.name}</CardTitle>
                                <CardDescription>
                                    {series.capacityRange} · {series.targetCustomer}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <p className="text-sm text-muted-foreground">{series.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {series.capacities.map((capacity) => (
                                        <Badge key={capacity} variant="outline">
                                            {capacity}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section className="bg-secondary/20">
                <SectionHeader
                    eyebrow="Comparison"
                    title="Series Comparison"
                    description="Quick selection guide by capacity, customer type, and typical use."
                />
                <Card className="overflow-x-auto">
                    <CardContent className="pt-2">
                        <table className="w-full min-w-[760px] text-left text-sm">
                            <thead>
                                <tr className="border-b text-foreground">
                                    <th className="pb-3 pr-4">Series</th>
                                    <th className="pb-3 pr-4">Capacity</th>
                                    <th className="pb-3 pr-4">Target Customer</th>
                                    <th className="pb-3">Typical Applications</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productComparison.map((row) => (
                                    <tr key={row.series} className="border-b/60 text-muted-foreground">
                                        <td className="py-3 pr-4 font-medium text-foreground">{row.series}</td>
                                        <td className="py-3 pr-4">{row.capacity}</td>
                                        <td className="py-3 pr-4">{row.targetCustomer}</td>
                                        <td className="py-3">{row.typicalApplications}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </CardContent>
                </Card>
            </Section>

            <Section>
                <SectionHeader
                    eyebrow="Specifications"
                    title="Common Technical Specifications"
                    description="Current published product family details for FP Hybrid Generators."
                />
                <div className="grid gap-4 lg:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Technical Baseline</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm text-muted-foreground">
                            {technicalSpecs.map((spec) => (
                                <p key={spec.label}>
                                    <span className="font-medium text-foreground">{spec.label}:</span> {spec.value}
                                </p>
                            ))}
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Common Features</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {commonFeatures.map((feature) => (
                                <Badge key={feature} variant="secondary">
                                    {feature}
                                </Badge>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </Section>

            <Section className="pt-0">
                <Card className="mx-auto max-w-5xl border-primary/20 bg-primary/5">
                    <CardHeader>
                        <CardTitle>Selection Recommendation</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        {productRecommendation}
                    </CardContent>
                </Card>

                <div className="mt-8 flex justify-center">
                    <Button
                        nativeButton={false}
                        render={<Link href="/contact" />}
                        size="lg"
                        className="bg-[var(--brand-orange)] text-white hover:bg-[var(--brand-orange)]/90"
                    >
                        Request Product Consultation
                    </Button>
                </div>
            </Section>
        </>
    );
}
