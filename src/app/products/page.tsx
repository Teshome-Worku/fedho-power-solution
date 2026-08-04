import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "@/components/motion/motion";
import { PageHero, Section, SectionHeader } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

      {/* ===== PRODUCT CARDS ===== */}
      <Section>
        <SectionHeader
          eyebrow="Generator Series"
          title="Choose the Right Capacity Range"
          description="A professional site assessment is recommended before purchase."
        />
        <StaggerContainer className="grid gap-8 md:grid-cols-2">
          {productSeries.map((series) => (
            <StaggerItem key={series.id}>
              <div className="premium-card group overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.06] hover:ring-[var(--brand-orange)]/20">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={series.image}
                    alt={series.imageAlt}
                    width={900}
                    height={540}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5 flex items-center gap-3">
                    <Badge className="bg-[var(--brand-orange)] text-white border-0 text-xs px-3">
                      {series.capacityRange}
                    </Badge>
                    <Badge className="bg-white/20 text-white border-0 text-xs px-3 backdrop-blur-sm">
                      {series.targetCustomer}
                    </Badge>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-primary">{series.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{series.description}</p>

                  {/* Typical Applications */}
                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Typical Applications</p>
                    <div className="flex flex-wrap gap-2">
                      {series.applications.map((app) => (
                        <Badge key={app} variant="secondary" className="text-xs rounded-lg">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Capacity options */}
                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Available Capacities</p>
                    <div className="flex flex-wrap gap-2">
                      {series.capacities.map((cap) => (
                        <span key={cap} className="inline-flex items-center rounded-lg border border-border px-3 py-1 text-xs font-semibold text-foreground/70">
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="mt-6 flex gap-3">
                    <Button
                      nativeButton={false}
                      render={<Link href="/contact" />}
                      size="sm"
                      className="rounded-xl bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-orange-light)] text-white"
                    >
                      Request Quote
                    </Button>
                    <Button
                      nativeButton={false}
                      render={<Link href="/technology" />}
                      variant="outline"
                      size="sm"
                      className="rounded-xl"
                    >
                      How It Works
                    </Button>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ===== COMPARISON TABLE ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Comparison"
            title="Series at a Glance"
            description="Quick selection guide by capacity, customer type, and typical use."
          />
          <div className="overflow-x-auto rounded-2xl bg-white ring-1 ring-black/[0.06] shadow-sm">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead>
                <tr className="border-b bg-secondary/50">
                  <th className="py-4 pl-6 pr-4 text-xs font-bold uppercase tracking-wider text-foreground/60">Series</th>
                  <th className="py-4 pr-4 text-xs font-bold uppercase tracking-wider text-foreground/60">Capacity</th>
                  <th className="py-4 pr-4 text-xs font-bold uppercase tracking-wider text-foreground/60">Target Customer</th>
                  <th className="py-4 pr-6 text-xs font-bold uppercase tracking-wider text-foreground/60">Applications</th>
                </tr>
              </thead>
              <tbody>
                {productComparison.map((row, i) => (
                  <tr key={row.series} className={`border-b last:border-0 transition-colors hover:bg-secondary/20 ${i % 2 === 1 ? "bg-secondary/10" : ""}`}>
                    <td className="py-4 pl-6 pr-4 font-bold text-foreground">{row.series}</td>
                    <td className="py-4 pr-4">
                      <Badge className="bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] border-0 text-xs">
                        {row.capacity}
                      </Badge>
                    </td>
                    <td className="py-4 pr-4 text-muted-foreground">{row.targetCustomer}</td>
                    <td className="py-4 pr-6 text-muted-foreground">{row.typicalApplications}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== SPECS + FEATURES ===== */}
      <Section>
        <SectionHeader
          eyebrow="Specifications"
          title="Common Technical Specifications"
          description="Current published product family details for FP Hybrid Generators."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="rounded-2xl bg-white p-8 ring-1 ring-black/[0.06] shadow-sm">
              <h3 className="text-base font-bold text-foreground mb-5">Technical Baseline</h3>
              <div className="space-y-3">
                {technicalSpecs.map((spec) => (
                  <div key={spec.label} className="flex flex-col gap-0.5 border-b border-border/50 pb-3 last:border-0 last:pb-0">
                    <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{spec.label}</p>
                    <p className="text-sm text-foreground/80">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <div className="rounded-2xl bg-white p-8 ring-1 ring-black/[0.06] shadow-sm">
              <h3 className="text-base font-bold text-foreground mb-5">Common Features</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {commonFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 shrink-0 text-[var(--brand-orange)]" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-xl bg-primary/[0.04] border border-primary/10 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-primary/60 mb-2">Selection Recommendation</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{productRecommendation}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ===== CTA ===== */}
      <Section className="pt-0">
        <ScaleIn>
          <div className="relative overflow-hidden rounded-3xl bg-[var(--brand-blue)] px-8 py-14 text-white sm:px-14">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--brand-orange)]/10 rounded-full blur-3xl" aria-hidden="true" />
            <div className="relative">
              <h2 className="text-2xl font-bold sm:text-3xl">Need help identifying your ideal capacity?</h2>
              <p className="mt-3 text-white/70 max-w-xl">
                Request a technical consultation to estimate your load requirements and find the right generator series.
              </p>
              <Button
                nativeButton={false}
                render={<Link href="/contact" />}
                size="lg"
                className="mt-6 rounded-xl bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-orange-light)] text-white"
              >
                Request Product Consultation <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </ScaleIn>
      </Section>
    </>
  );
}
