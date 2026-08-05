import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Lightbulb,
  Leaf,
  Star,
  Users,
  ShieldCheck,
  Wrench,
  BookOpen,
} from "lucide-react";

import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "@/components/motion/motion";
import { PageHero, Section, SectionHeader } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  companyOverview,
  founderStory,
  founders,
  timeline,
  visionMission,
} from "@/content/company";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About | Fedho Power Solution PLC",
  description:
    "Learn about Fedho Power Solution PLC, the founders, company timeline, and long-term clean-energy vision for Ethiopia and Africa.",
  path: "/about",
});

const valueIcons: Record<string, React.ElementType> = {
  Innovation: Lightbulb,
  Sustainability: Leaf,
  Quality: Star,
  "Customer Success": Users,
  Integrity: ShieldCheck,
  "Local Manufacturing": Wrench,
  "Continuous Learning": BookOpen,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Building Reliable Hybrid Power in Ethiopia"
        description={companyOverview.summary}
      />

      {/* ===== COMPANY OVERVIEW — Image Right, Text Left ===== */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="left">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-orange)]">
              Who We Are
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Ethiopia&apos;s Clean Energy Pioneer
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {companyOverview.differentiator}
            </p>
            <div className="mt-8 grid gap-2 sm:grid-cols-2">
              {[
                { label: "Headquarters", value: companyOverview.headquarters },
                { label: "Company Type", value: companyOverview.type },
                { label: "Growth Stage", value: companyOverview.growthStage },
                { label: "Operations", value: companyOverview.operations },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-secondary/50 p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <div className="relative">
              <Image
                src="/media/products_and_generators/many_products_together.jpg"
                alt="FP Hybrid Generators product lineup"
                width={700}
                height={500}
                className="rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5 lg:block">
                <p className="text-2xl font-bold text-primary">Dec 2024</p>
                <p className="text-xs text-muted-foreground">PLC Registered</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ===== VISION & MISSION ===== */}
      <section className="relative overflow-hidden bg-[var(--brand-blue)] py-20 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-blue)] via-[var(--brand-blue)] to-[var(--brand-blue-light)]/30" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-orange)]/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Vision & Mission"
            title="Powering Africa's Clean Energy Future"
            dark
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <FadeIn direction="left" delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-orange-light)] mb-3">Vision</p>
                <p className="text-white/90 text-base leading-relaxed">{visionMission.vision}</p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.15}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-orange-light)] mb-3">Mission</p>
                <p className="text-white/90 text-base leading-relaxed">{visionMission.mission}</p>
              </div>
            </FadeIn>
          </div>
          {/* Values */}
          <div className="mt-10">
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6 text-center">Core Values</p>
            <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {visionMission.values.map((value) => {
                const Icon = valueIcons[value.title] || Star;
                return (
                  <StaggerItem key={value.title}>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
                      <Icon className="size-5 text-[var(--brand-orange-light)] mb-3" />
                      <p className="text-sm font-bold text-white">{value.title}</p>
                      <p className="mt-1 text-xs text-white/55 leading-relaxed">{value.description}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ===== FOUNDERS ===== */}
      <Section>
        <SectionHeader
          eyebrow="Leadership"
          title="Meet the Founders"
          description="Fedho combines entrepreneurial vision and deep technical engineering expertise."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {founders.map((founder, i) => (
            <FadeIn key={founder.name} delay={i * 0.15} direction={i === 0 ? "left" : "right"}>
              <div className="premium-card group overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.06]">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={founder.image}
                    alt={founder.imageAlt}
                    width={900}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-5 left-6">
                    <h3 className="text-xl font-bold text-white">{founder.name}</h3>
                    <p className="text-sm text-white/80">{founder.role}</p>
                    <Badge className="mt-2 bg-[var(--brand-orange)] text-white text-xs border-0">{founder.title}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">{founder.overview}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {founder.focus.map((f) => (
                      <Badge key={f} variant="outline" className="text-xs rounded-lg">{f}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ===== FOUNDER STORY ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/20 to-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
            <FadeIn direction="left" className="lg:sticky lg:top-28">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-orange)]">Founder Story</p>
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                From Power Outages to Power Innovation
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{founderStory.intro}</p>
              <Image
                src="/media/products_and_generators/products_with_fedesa_shuma.jpg"
                alt="CEO with FP Hybrid Generators"
                width={600}
                height={400}
                className="mt-8 rounded-2xl object-cover shadow-xl"
              />
            </FadeIn>
            <div className="space-y-5">
              {founderStory.sections.map((part, i) => (
                <FadeIn key={part.title} delay={i * 0.08}>
                  <div className="rounded-2xl bg-white p-6 ring-1 ring-black/[0.06] shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--brand-orange)]/10 shrink-0 mt-0.5">
                        <span className="text-sm font-bold text-[var(--brand-orange)]">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-foreground">{part.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{part.content}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <Section>
        <SectionHeader
          eyebrow="Timeline"
          title="Company Development Journey"
          description="Major milestones based on publicly available information."
        />
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--brand-orange)] via-primary/30 to-[var(--brand-orange)] md:left-1/2 md:-translate-x-px" aria-hidden="true" />
          <div className="space-y-10">
            {timeline.map((event, i) => (
              <FadeIn key={`${event.period}-${event.title}`} delay={i * 0.07} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`relative flex gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-2 z-10">
                    <div className="w-3 h-3 rounded-full bg-[var(--brand-orange)] ring-4 ring-background" />
                  </div>
                  <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-4 md:text-right" : "md:pl-4"}`}>
                    <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-orange)]">{event.period}</p>
                    <h3 className="mt-1 text-base font-bold text-primary">{event.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== CTA ===== */}
      <Section className="pt-0">
        <ScaleIn>
          <div className="relative overflow-hidden rounded-3xl bg-[var(--brand-blue)] px-8 py-14 text-white sm:px-14">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--brand-orange)]/10 rounded-full blur-3xl" aria-hidden="true" />
            <div className="relative max-w-2xl">
              <h2 className="text-2xl font-bold sm:text-3xl">Want to power your future with us?</h2>
              <p className="mt-3 text-white/70">Contact our team to find the right generator for your needs.</p>
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
