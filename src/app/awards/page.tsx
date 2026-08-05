import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trophy, Medal, FileText } from "lucide-react";

import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "@/components/motion/motion";
import { PageHero, Section, SectionHeader } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
        eyebrow="Awards & Recognition"
        title="Public Recognition for Hybrid Power Innovation"
        description="Highlights from competitions, institutions, and media references."
      />

      {/* ===== HIGHLIGHT BANNERS ===== */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--brand-orange)]/10 to-[var(--brand-orange)]/5 p-8 ring-1 ring-[var(--brand-orange)]/20">
              <Trophy className="size-10 text-[var(--brand-orange)] mb-4" />
              <h3 className="text-xl font-bold text-foreground">{awardsHighlight.biruh.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{awardsHighlight.biruh.description}</p>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-8 ring-1 ring-primary/20">
              <Medal className="size-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground">{awardsHighlight.international.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{awardsHighlight.international.description}</p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ===== AWARD CARDS ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/20 to-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Certificates & Letters"
            title="Awards and Recommendation Letters"
            description="Visual records from award ceremonies and supporting documents."
          />
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {awards.map((award) => (
              <StaggerItem key={award.id}>
                <div className="premium-card group overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.06] h-full">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={award.image}
                      alt={award.imageAlt}
                      width={800}
                      height={560}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    {award.year && (
                      <Badge className="absolute bottom-3 left-4 bg-[var(--brand-orange)] text-white border-0">
                        {award.year}
                      </Badge>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-bold text-foreground">{award.title}</h3>
                    <p className="mt-1.5 text-xs text-muted-foreground">{award.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== MEDIA COVERAGE ===== */}
      <Section>
        <SectionHeader
          eyebrow="Media References"
          title="Public Media Coverage"
          description="Public channels and articles documenting Fedho activities."
        />
        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mediaCoverage.map((source) => (
            <StaggerItem key={source.source}>
              <div className="premium-card h-full rounded-2xl bg-white p-6 ring-1 ring-black/[0.06]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/8 shrink-0">
                    <FileText className="size-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground">{source.source}</h3>
                </div>
                {"title" in source && source.title && (
                  <p className="text-xs font-semibold text-[var(--brand-orange)] mb-2 leading-snug">&ldquo;{source.title}&rdquo;</p>
                )}
                <p className="text-xs text-muted-foreground leading-relaxed">{source.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ===== CTA ===== */}
      <Section className="pt-0">
        <ScaleIn>
          <div className="relative overflow-hidden rounded-3xl bg-[var(--brand-blue)] px-8 py-14 text-white sm:px-14">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--brand-orange)]/10 rounded-full blur-3xl" aria-hidden="true" />
            <div className="relative">
              <h2 className="text-2xl font-bold sm:text-3xl">Partner with an Award-Winning Company</h2>
              <p className="mt-3 text-white/70 max-w-xl">
                Contact us to discuss your power requirements and join our growing list of satisfied customers.
              </p>
              <Button
                nativeButton={false}
                render={<Link href="/contact" />}
                size="lg"
                className="mt-6 rounded-xl bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-orange-light)] text-white"
              >
                Get in Touch <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </ScaleIn>
      </Section>
    </>
  );
}
