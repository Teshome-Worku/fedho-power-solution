import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Factory,
  GraduationCap,
  Heart,
  Home,
  Hotel,
  Landmark,
  AlertCircle,
} from "lucide-react";

import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "@/components/motion/motion";
import { PageHero, Section, SectionHeader } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

const applicationIcons: Record<string, React.ElementType> = {
  residential: Home,
  commercial: Hotel,
  industrial: Factory,
  government: Landmark,
  healthcare: Heart,
  education: GraduationCap,
};

export default function ApplicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Applications"
        title="Power Solutions by Customer Need"
        description="Every segment has different continuity requirements, operating profiles, and expansion plans."
      />

      {/* ===== PROBLEMS → SOLUTIONS ===== */}
      <Section>
        <SectionHeader
          eyebrow="Problem to Solution"
          title="Why Customers Seek Hybrid Power"
          description="Real electricity challenges that FP Hybrid Generators are built to solve."
        />
        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {customerProblems.map((item) => (
            <StaggerItem key={item.problem}>
              <div className="premium-card h-full rounded-2xl bg-white p-6 ring-1 ring-black/[0.06]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 shrink-0">
                    <AlertCircle className="size-4 text-red-500" />
                  </div>
                  <p className="text-sm font-bold text-foreground">{item.problem}</p>
                </div>
                <div className="h-px bg-border mb-4" />
                <div className="flex items-start gap-2">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 shrink-0 mt-0.5">
                    <span className="text-[10px] font-bold text-green-600">✓</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.solution}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ===== CUSTOMER SEGMENTS ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/20 to-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Market Segments"
            title="Who We Serve"
            description="Capacity ranges and use patterns vary by industry and infrastructure scale."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {applicationSegments.map((segment, i) => {
              const Icon = applicationIcons[segment.id] || Building2;
              return (
                <FadeIn key={segment.id} delay={i * 0.08}>
                  <div className="premium-card group h-full overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.06]">
                    {segment.image ? (
                      <div className="relative h-44 overflow-hidden">
                        <Image
                          src={segment.image}
                          alt={segment.imageAlt || segment.title}
                          width={600}
                          height={400}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-32 bg-gradient-to-br from-primary/[0.06] to-[var(--brand-orange)]/[0.06]">
                        <Icon className="size-12 text-primary/20" />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/8 shrink-0">
                          <Icon className="size-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-foreground">{segment.title}</h3>
                          <p className="text-xs text-[var(--brand-orange)] font-semibold">{segment.products}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{segment.description}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {segment.typicalUses.map((u) => (
                          <Badge key={u} variant="secondary" className="text-xs rounded-lg">{u}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}

            {/* Hospitality extra card */}
            <FadeIn delay={applicationSegments.length * 0.08}>
              <div className="premium-card h-full overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.06]">
                <div className="flex items-center justify-center h-32 bg-gradient-to-br from-primary/[0.06] to-[var(--brand-orange)]/[0.06]">
                  <Hotel className="size-12 text-primary/20" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/8 shrink-0">
                      <Hotel className="size-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">{hospitalitySegment.title}</h3>
                      <p className="text-xs text-[var(--brand-orange)] font-semibold">{hospitalitySegment.products}</p>
                    </div>
                  </div>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {hospitalitySegment.applications.map((a) => (
                      <Badge key={a} variant="secondary" className="text-xs rounded-lg">{a}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== PARTNERSHIPS / INSTALLATIONS ===== */}
      <Section>
        <SectionHeader
          eyebrow="Partnership Evidence"
          title="Real Customer Highlights"
          description="Documented examples from public company updates."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {customerPartnerships.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="premium-card group overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.06]">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={700}
                    height={480}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 text-sm font-bold text-white">{item.title}</h3>
                </div>
              </div>
            </FadeIn>
          ))}
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
                Request a technical consultation to estimate load requirements and the right generator series.
              </p>
              <Button
                nativeButton={false}
                render={<Link href="/contact" />}
                size="lg"
                className="mt-6 rounded-xl bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-orange-light)] text-white"
              >
                Request a Quote <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </ScaleIn>
      </Section>
    </>
  );
}
