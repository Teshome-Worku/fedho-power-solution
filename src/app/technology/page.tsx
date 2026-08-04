import { ArrowRightLeft, BatteryCharging, PlugZap, Sun } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { PageHero, Section, SectionHeader } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    continuousOperationGoal,
    dieselComparison,
    energySources,
    hybridBenefits,
    hybridOverview,
    intelligentManagement,
    powerPriority,
    systemFlow,
    workflowAdvantages,
    workflowSteps,
} from "@/content/technology";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
    title: "Technology | Fedho Power Solution PLC",
    description:
        "Understand how FP Hybrid Generators combine solar, battery, and grid charging with intelligent automatic switching.",
    path: "/technology",
});

const iconByTitle: Record<string, ComponentType<{ className?: string }>> = {
    "Solar Energy": Sun,
    "Grid Electricity": PlugZap,
    "Battery Storage": BatteryCharging,
    "AC Output": ArrowRightLeft,
};

export default function TechnologyPage() {
    return (
        <>
            <PageHero
                eyebrow="Technology"
                title={hybridOverview.title}
                description={hybridOverview.summary}
            />

            <Section>
                <SectionHeader
                    eyebrow="Overview"
                    title="A Multi-Source Intelligent Power System"
                    description={hybridOverview.result}
                />
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {energySources.map((source) => {
                        const Icon = iconByTitle[source.title] ?? ArrowRightLeft;
                        return (
                            <Card key={source.title} className="h-full">
                                <CardHeader>
                                    <Icon className="mb-2 size-6 text-[var(--brand-orange)]" />
                                    <CardTitle>{source.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground">{source.description}</CardContent>
                            </Card>
                        );
                    })}
                </div>
            </Section>

            <Section className="bg-secondary/20">
                <SectionHeader
                    eyebrow="Workflow"
                    title="Solar + Grid Charging Workflow"
                    description={continuousOperationGoal}
                />
                <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
                    <Card>
                        <CardHeader>
                            <CardTitle>System Flow</CardTitle>
                            <CardDescription>Solar to business-ready AC power</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap items-center gap-2 text-sm">
                                {systemFlow.map((node, index) => (
                                    <div key={node.label} className="flex items-center gap-2">
                                        <Badge variant="outline">{node.label}</Badge>
                                        {index < systemFlow.length - 1 ? (
                                            <span className="text-muted-foreground">→</span>
                                        ) : null}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Day and Night Sequence</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm text-muted-foreground">
                            {workflowSteps.map((step) => (
                                <p key={step.step}>
                                    <span className="font-medium text-foreground">{step.step}. </span>
                                    {step.title}
                                </p>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </Section>

            <Section>
                <SectionHeader
                    eyebrow="Intelligent Management"
                    title={intelligentManagement.title}
                    description={intelligentManagement.summary}
                />
                <div className="grid gap-4 lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Power Priority</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm text-muted-foreground">
                            {powerPriority.map((source) => (
                                <p key={source.source}>
                                    <span className="font-medium text-foreground">{source.order}. {source.source}</span> - {source.description}
                                </p>
                            ))}
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Automatic Switching</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                            {intelligentManagement.automaticSwitching}
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Battery Protection Monitoring</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm text-muted-foreground">
                            {intelligentManagement.batteryProtection.map((item) => (
                                <p key={item}>{item}</p>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </Section>

            <Section className="bg-secondary/20">
                <SectionHeader
                    eyebrow="Benefits"
                    title="Operational and Cost Advantages"
                    description="Hybrid technology helps reduce downtime, simplify operations, and improve long-term power resilience."
                />
                <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Hybrid Benefits</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {hybridBenefits.map((item) => (
                                <Badge key={item} variant="secondary">
                                    {item}
                                </Badge>
                            ))}
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Workflow Advantages</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {workflowAdvantages.map((item) => (
                                <Badge key={item} variant="outline">
                                    {item}
                                </Badge>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </Section>

            <Section>
                <SectionHeader
                    eyebrow="Comparison"
                    title={dieselComparison.title}
                    description={dieselComparison.note}
                />
                <div className="grid gap-4 lg:grid-cols-2">
                    <Card className="border-primary/20 bg-primary/5">
                        <CardHeader>
                            <CardTitle>FP Hybrid Generators</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm text-muted-foreground">
                            {dieselComparison.hybrid.map((item) => (
                                <p key={item}>{item}</p>
                            ))}
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Conventional Diesel Generators</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm text-muted-foreground">
                            {dieselComparison.diesel.map((item) => (
                                <p key={item}>{item}</p>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </Section>

            <Section className="pt-0">
                <div className="mx-auto max-w-5xl rounded-2xl bg-primary px-6 py-10 text-white sm:px-10">
                    <h2 className="text-3xl font-bold">Need a Site-Specific Technical Assessment?</h2>
                    <p className="mt-3 text-white/85">
                        Our team can recommend a capacity range and installation approach based on your load profile.
                    </p>
                    <Button
                        nativeButton={false}
                        render={<Link href="/contact" />}
                        size="lg"
                        className="mt-6 bg-[var(--brand-orange)] text-white hover:bg-[var(--brand-orange)]/90"
                    >
                        Contact the Team
                    </Button>
                </div>
            </Section>
        </>
    );
}
