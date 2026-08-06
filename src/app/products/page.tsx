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
        <div className="space-y-16 lg:space-y-32">
          {productSeries.map((series, i) => (
            <div key={series.id} className={`flex flex-col lg:items-center gap-10 lg:gap-16 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
              
              {/* Product Image Side */}
              <FadeIn direction={i % 2 === 0 ? "left" : "right"} className="lg:w-1/2">
                <div className="relative group">
                   <div className="absolute -inset-4 rounded-3xl bg-[var(--brand-orange)]/10 blur-2xl transition-all duration-500 group-hover:bg-[var(--brand-orange)]/20" aria-hidden="true" />
                   <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl ring-1 ring-black/5">
                      <Image
                        src={series.image}
                        alt={series.imageAlt}
                        width={1000}
                        height={750}
                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                      <div className="absolute bottom-6 left-6 flex items-center gap-3 z-20">
                        <Badge className="bg-[var(--brand-orange)] text-white border-0 text-sm px-4 py-1.5 shadow-lg font-bold tracking-widest uppercase">
                          {series.capacityRange}
                        </Badge>
                        <Badge className="bg-white/20 text-white border-0 text-sm px-4 py-1.5 backdrop-blur-md shadow-lg font-bold tracking-widest uppercase">
                          {series.targetCustomer}
                        </Badge>
                      </div>
                   </div>
                </div>
              </FadeIn>

              {/* Product Content Side */}
              <FadeIn direction={i % 2 === 0 ? "right" : "left"} className="lg:w-1/2">
                <div>
                  <h3 className="text-3xl font-extrabold text-primary tracking-tight lg:text-4xl">{series.name}</h3>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-lg">{series.description}</p>

                  <div className="mt-8 grid gap-8 sm:grid-cols-2">
                    {/* Typical Applications */}
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-orange)] mb-3">Target Applications</p>
                      <ul className="space-y-2">
                        {series.applications.map((app) => (
                           <li key={app} className="flex items-start gap-2.5 text-sm font-semibold text-foreground/80">
                             <CheckCircle2 className="size-4 shrink-0 text-[var(--brand-orange)] mt-0.5" />
                             {app}
                           </li>
                        ))}
                      </ul>
                    </div>

                    {/* Capacity options */}
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-orange)] mb-3">Available Capacities</p>
                      <div className="flex flex-wrap gap-2">
                        {series.capacities.map((cap) => (
                          <span key={cap} className="inline-flex items-center rounded-xl bg-secondary/50 px-3 py-1.5 text-sm font-bold text-primary ring-1 ring-black/5">
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="mt-10 flex flex-wrap gap-4">
                    <Button
                      nativeButton={false}
                      render={<Link href="/contact" />}
                      size="lg"
                      className="group rounded-xl bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-orange-light)] text-white shadow-xl shadow-[var(--brand-orange)]/20 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[var(--brand-orange)]/40 transition-all duration-300 font-bold"
                    >
                      Request Quote
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button
                      nativeButton={false}
                      render={<Link href="/technology" />}
                      variant="outline"
                      size="lg"
                      className="group rounded-xl hover:border-[var(--brand-orange)]/30 transition-all duration-300 font-semibold"
                    >
                      How It Works
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 text-[var(--brand-orange)]" />
                    </Button>
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
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
      <Section className="pt-0 pb-24">
        <ScaleIn>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[var(--brand-blue)] via-[var(--brand-blue)] to-[#0a1628] px-8 py-20 text-white sm:px-16 shadow-2xl shadow-primary/20 text-center">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-orange)]/15 rounded-full blur-[100px]" aria-hidden="true" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-[80px]" aria-hidden="true" />
            <div className="relative max-w-3xl mx-auto">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-orange)] mb-5">Professional Consultation</p>
              <h2 className="text-3xl font-extrabold sm:text-4xl tracking-tight">Need help identifying your ideal capacity?</h2>
              <p className="mt-4 text-white/60 text-lg">
                Request a technical consultation to estimate your load requirements and find the right generator series.
              </p>
              <Button
                nativeButton={false}
                render={<Link href="/contact" />}
                size="lg"
                className="group mt-10 rounded-xl bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-orange-light)] text-white shadow-xl shadow-[var(--brand-orange)]/30 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[var(--brand-orange)]/50 transition-all duration-300 font-bold"
              >
                Request Product Consultation <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </ScaleIn>
      </Section>
    </>
  );
}
