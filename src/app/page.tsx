import {
  ArrowRight,
  BatteryCharging,
  Building2,
  CheckCircle2,
  Leaf,
  Sun,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  AnimatedCounter,
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/motion";
import { Section, SectionHeader } from "@/components/shared/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { applicationSegments, customerProblems, customerPartnerships } from "@/content/applications";
import { awards } from "@/content/awards";
import { companyOverview, competitiveAdvantages } from "@/content/company";
import { faqItems } from "@/content/faq";
import { productSeries } from "@/content/products";
import { siteConfig } from "@/content/navigation";
import { stats } from "@/content/stats";
import { energySources } from "@/content/technology";
import { createOrgSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Fedho Power Solution PLC | Reliable Hybrid Power Solutions",
  description:
    "Discover locally assembled FP Hybrid Generators from 2KW to 600KW designed for homes, businesses, institutions, and industrial operations.",
  path: "/",
});

const iconMap = {
  Solar: Sun,
  Battery: BatteryCharging,
  Grid: Building2,
  Benefits: Leaf,
};

export default function Home() {
  const orgSchema = createOrgSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <section className="relative isolate overflow-hidden bg-primary text-white">
        <Image
          src="/media/products_and_generators/many_products_together.jpg"
          alt="FP Hybrid Generators by Fedho Power Solution PLC"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/70" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <Badge className="mb-6 bg-white/15 text-white">Official Website Version 1</Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Reliable Hybrid Power Solutions Designed and Manufactured in Ethiopia
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
              {siteConfig.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                nativeButton={false}
                render={<Link href="/contact" />}
                size="lg"
                className="bg-[var(--brand-orange)] text-white hover:bg-[var(--brand-orange)]/90"
              >
                Request a Quote
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="/products" />}
                size="lg"
                className="bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20"
              >
                Explore Products
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Section>
        <SectionHeader
          eyebrow="Customer Problems"
          title="Built Around Real Electricity Challenges"
          description="FP Hybrid Generators are designed to solve recurring power interruptions, high diesel costs, and unreliable backup systems."
        />
        <StaggerContainer className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {customerProblems.map((item) => (
            <StaggerItem key={item.problem}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{item.problem}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Solution: {item.solution}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section className="bg-gradient-to-b from-background via-secondary/25 to-background">
        <SectionHeader
          eyebrow="About Fedho"
          title="An Ethiopian Clean-Energy Technology Company"
          description={companyOverview.summary}
        />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Card>
            <CardHeader>
              <CardTitle>Why Organizations Choose Fedho</CardTitle>
              <CardDescription>{companyOverview.differentiator}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-3 sm:grid-cols-2">
                {competitiveAdvantages.map((advantage) => (
                  <li key={advantage} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 text-[var(--brand-orange)]" />
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>At a Glance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Headquarters:</span>{" "}
                {companyOverview.headquarters}
              </p>
              <p>
                <span className="font-medium text-foreground">Company Type:</span>{" "}
                {companyOverview.type}
              </p>
              <p>
                <span className="font-medium text-foreground">Growth Stage:</span>{" "}
                {companyOverview.growthStage}
              </p>
              <p>
                <span className="font-medium text-foreground">Operations:</span>{" "}
                {companyOverview.operations}
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Statistics"
          title="Key Facts"
          description="Current publicly available information about Fedho Power Solution PLC."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <Card key={item.label} className="h-full">
              <CardContent className="pt-2">
                <p className="text-4xl font-bold text-primary">
                  <AnimatedCounter
                    value={item.value}
                    prefix={item.prefix}
                    suffix={item.suffix}
                  />
                </p>
                <p className="mt-2 text-sm font-semibold">{item.label}</p>
                {item.description ? (
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/30">
        <SectionHeader
          eyebrow="Technology"
          title="How Hybrid Power Works"
          description="Our systems combine solar charging, battery storage, and grid charging with intelligent automatic switching."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {energySources.map((source) => {
            const Icon =
              source.title === "Solar Energy"
                ? iconMap.Solar
                : source.title === "Battery Storage"
                  ? iconMap.Battery
                  : source.title === "Grid Electricity"
                    ? iconMap.Grid
                    : iconMap.Benefits;

            return (
              <Card key={source.title} className="h-full">
                <CardHeader>
                  <Icon className="mb-2 size-6 text-[var(--brand-orange)]" />
                  <CardTitle>{source.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{source.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Generator Categories"
          title="FP Generator Product Series"
          description="From residential backup to enterprise-scale infrastructure, FP Hybrid Generators are available from 2KW to 600KW."
        />
        <StaggerContainer className="grid gap-4 md:grid-cols-2">
          {productSeries.map((series) => (
            <StaggerItem key={series.id}>
              <Card className="h-full">
                <Image
                  src={series.image}
                  alt={series.imageAlt}
                  width={900}
                  height={540}
                  className="h-44 w-full object-cover"
                />
                <CardHeader>
                  <CardTitle>{series.name}</CardTitle>
                  <CardDescription>{series.capacityRange}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{series.description}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section className="bg-secondary/20">
        <SectionHeader
          eyebrow="Applications"
          title="Power for Homes, Businesses, and Institutions"
          description="Fedho serves customers with different operational and infrastructure requirements across Ethiopia."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {applicationSegments.map((segment) => (
            <Card key={segment.id} className="h-full">
              <CardHeader>
                <CardTitle>{segment.title}</CardTitle>
                <CardDescription>{segment.products}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{segment.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Awards"
          title="Recognition and Public Trust"
          description="Fedho has received awards and recommendation letters from recognized programs and institutions."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {awards.slice(0, 3).map((award) => (
            <Card key={award.id} className="h-full">
              <Image
                src={award.image}
                alt={award.imageAlt}
                width={800}
                height={500}
                className="h-44 w-full object-cover"
              />
              <CardHeader>
                <CardTitle>{award.title}</CardTitle>
                <CardDescription>{award.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/25">
        <SectionHeader
          eyebrow="Installations"
          title="Verified Customer Installations"
          description="A sample of customer projects and partnership evidence documented from public updates."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {customerPartnerships.map((item) => (
            <Card key={item.title}>
              <Image
                src={item.image}
                alt={item.imageAlt}
                width={700}
                height={460}
                className="h-44 w-full object-cover"
              />
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Quick answers to common questions about FP Hybrid Generators and services."
        />
        <div className="mx-auto max-w-4xl rounded-xl border bg-card p-6">
          <Accordion>
            {faqItems.slice(0, 5).map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <Section className="pt-0">
        <FadeIn>
          <div className="mx-auto max-w-6xl rounded-2xl bg-primary px-6 py-12 text-white sm:px-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to discuss your power requirements?
            </h2>
            <p className="mt-4 max-w-2xl text-white/85">
              Request a consultation to identify the right FP Hybrid Generator capacity for your site.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button
                nativeButton={false}
                render={<Link href="/contact" />}
                size="lg"
                className="bg-[var(--brand-orange)] text-white hover:bg-[var(--brand-orange)]/90"
              >
                Request a Quote
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="/products" />}
                size="lg"
                className="bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20"
              >
                Compare Product Series
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
