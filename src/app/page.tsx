import {
  ArrowRight,
  BatteryCharging,
  Building2,
  CheckCircle2,
  ChevronRight,
  Factory,
  GraduationCap,
  Heart,
  Home,
  Hotel,
  Landmark,
  Leaf,
  Sun,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  AnimatedCounter,
  FadeIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/motion";
import { HeroSection } from "@/components/sections/HeroSection";
import { Section, SectionHeader } from "@/components/shared/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  applicationSegments,
  customerPartnerships,
} from "@/content/applications";
import { awards } from "@/content/awards";
import {
  companyOverview,
  competitiveAdvantages,
  founders,
  timeline,
} from "@/content/company";
import { faqItems } from "@/content/faq";
import { productSeries } from "@/content/products";
import { siteConfig } from "@/content/navigation";
import { stats } from "@/content/stats";
import { systemFlow } from "@/content/technology";
import { createOrgSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Fedho Power Solution PLC | Reliable Hybrid Power Solutions",
  description:
    "Discover locally assembled FP Hybrid Generators from 2KW to 600KW designed for homes, businesses, institutions, and industrial operations.",
  path: "/",
});

const applicationIcons: Record<string, React.ElementType> = {
  residential: Home,
  commercial: Hotel,
  industrial: Factory,
  government: Landmark,
  healthcare: Heart,
  education: GraduationCap,
};

const flowIcons = [Sun, BatteryCharging, Zap, Building2, Home];

export default function HomePage() {
  const orgSchema = createOrgSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* ===== HERO ===== */}
      <HeroSection />

      {/* ===== ABOUT — Image Left, Text Right ===== */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="relative">
              <Image
                src="/media/products_and_generators/products_with_fedesa_shuma.jpg"
                alt="Fedesa Shuma with FP Hybrid Generators"
                width={700}
                height={500}
                className="rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-white p-5 shadow-xl ring-1 ring-black/5 lg:block">
                <p className="text-3xl font-bold text-primary">2024</p>
                <p className="text-sm text-muted-foreground">Founded</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-orange)]">
                About Fedho
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                An Ethiopian Clean-Energy Technology Company
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {companyOverview.summary}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {companyOverview.differentiator}
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {competitiveAdvantages.slice(0, 6).map((a) => (
                  <li key={a} className="flex items-center gap-2.5 text-sm font-medium text-foreground/80">
                    <CheckCircle2 className="size-4 shrink-0 text-[var(--brand-orange)]" />
                    {a}
                  </li>
                ))}
              </ul>
              <Button
                nativeButton={false}
                render={<Link href="/about" />}
                className="mt-8 rounded-xl bg-primary text-white hover:bg-primary/90"
                size="lg"
              >
                Learn Our Story
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ===== STATS — Full-width dark band ===== */}
      <section className="relative overflow-hidden bg-[var(--brand-blue)] py-20 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-blue-light)]/20 to-[var(--brand-blue)]" aria-hidden="true" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--brand-orange)]/8 rounded-full blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Key Facts"
            title="Fedho by the Numbers"
            description="Current publicly available information about Fedho Power Solution PLC."
            dark
          />
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.1}>
                <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                  <p className="text-4xl font-bold text-white sm:text-5xl">
                    <AnimatedCounter
                      value={item.value}
                      prefix={item.prefix}
                      suffix={item.suffix}
                    />
                  </p>
                  <p className="mt-3 text-sm font-semibold text-white/90">{item.label}</p>
                  {item.description ? (
                    <p className="mt-1.5 text-xs text-white/50">{item.description}</p>
                  ) : null}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGY — Workflow Visualization ===== */}
      <Section>
        <SectionHeader
          eyebrow="Technology"
          title="How Hybrid Power Works"
          description="Our systems combine solar charging, battery storage, and grid charging with intelligent automatic switching."
        />
        <div className="relative">
          {/* Desktop flow */}
          <div className="hidden lg:flex items-center justify-between gap-2 max-w-5xl mx-auto">
            {systemFlow.map((step, i) => {
              const Icon = flowIcons[i] || Zap;
              return (
                <FadeIn key={step.label} delay={i * 0.12} direction="up">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center text-center group">
                      <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-[var(--brand-orange)]/10 ring-1 ring-primary/10 transition-all duration-300 group-hover:shadow-xl group-hover:ring-[var(--brand-orange)]/30">
                        <Icon className="size-8 text-primary group-hover:text-[var(--brand-orange)] transition-colors" />
                      </div>
                      <p className="mt-4 text-sm font-bold text-foreground">{step.label}</p>
                      <p className="mt-1 text-xs text-muted-foreground max-w-[120px]">{step.description}</p>
                    </div>
                    {i < systemFlow.length - 1 && (
                      <ChevronRight className="size-6 text-[var(--brand-orange)]/50 shrink-0 mx-2" />
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>
          {/* Mobile flow */}
          <div className="flex flex-col gap-4 lg:hidden">
            {systemFlow.map((step, i) => {
              const Icon = flowIcons[i] || Zap;
              return (
                <FadeIn key={step.label} delay={i * 0.08}>
                  <div className="flex items-center gap-5 rounded-2xl border bg-card p-5">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-[var(--brand-orange)]/10 shrink-0">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">{step.label}</p>
                      <p className="text-xs text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button
            nativeButton={false}
            render={<Link href="/technology" />}
            className="rounded-xl bg-primary text-white hover:bg-primary/90"
            size="lg"
          >
            Explore Technology
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </Section>

      {/* ===== PRODUCTS — Premium Cards ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 via-background to-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Generator Categories"
            title="FP Generator Product Series"
            description="From residential backup to enterprise-scale infrastructure, FP Hybrid Generators are available from 2KW to 600KW."
          />
          <StaggerContainer className="grid gap-6 md:grid-cols-2">
            {productSeries.map((series) => (
              <StaggerItem key={series.id}>
                <div className="premium-card group relative overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.06] hover:ring-[var(--brand-orange)]/20">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={series.image}
                      alt={series.imageAlt}
                      width={900}
                      height={540}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <Badge className="absolute bottom-4 left-4 bg-[var(--brand-orange)] text-white border-0 text-xs">
                      {series.capacityRange}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary">{series.name}</h3>
                    <p className="mt-1 text-xs font-medium text-muted-foreground">
                      For {series.targetCustomer}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {series.description}
                    </p>
                    <div className="mt-5 flex gap-3">
                      <Button
                        nativeButton={false}
                        render={<Link href="/contact" />}
                        size="sm"
                        className="rounded-lg bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-orange-light)] text-white text-xs"
                      >
                        Request Quote
                      </Button>
                      <Button
                        nativeButton={false}
                        render={<Link href="/products" />}
                        variant="outline"
                        size="sm"
                        className="rounded-lg text-xs"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== APPLICATIONS — Grid with Icons + Images ===== */}
      <Section>
        <SectionHeader
          eyebrow="Applications"
          title="Power for Homes, Businesses, and Institutions"
          description="Fedho serves customers with different operational and infrastructure requirements across Ethiopia."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {applicationSegments.map((seg, i) => {
            const Icon = applicationIcons[seg.id] || Building2;
            return (
              <FadeIn key={seg.id} delay={i * 0.08}>
                <div className="premium-card group overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.06]">
                  {seg.image ? (
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={seg.image}
                        alt={seg.imageAlt || seg.title}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-40 bg-gradient-to-br from-primary/[0.06] to-[var(--brand-orange)]/[0.06]">
                      <Icon className="size-12 text-primary/30" />
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/8">
                        <Icon className="size-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-foreground">{seg.title}</h3>
                        <p className="text-xs text-[var(--brand-orange)] font-semibold">{seg.products}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{seg.description}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* ===== TIMELINE — Company Story ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Company Journey"
            title="From Power Outages to Power Innovation"
            description="Major milestones in the Fedho Power Solution story."
          />
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--brand-orange)] via-primary/30 to-[var(--brand-orange)] md:left-1/2 md:-translate-x-px" aria-hidden="true" />

            <div className="space-y-10">
              {timeline.map((event, i) => (
                <FadeIn key={`${event.period}-${event.title}`} delay={i * 0.08} direction={i % 2 === 0 ? "left" : "right"}>
                  <div className={`relative flex gap-6 md:gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Dot */}
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-2 z-10">
                      <div className="w-3 h-3 rounded-full bg-[var(--brand-orange)] ring-4 ring-background" />
                    </div>
                    {/* Content */}
                    <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:text-right md:pr-4" : "md:text-left md:pl-4"}`}>
                      <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-orange)]">{event.period}</p>
                      <h3 className="mt-1 text-base font-bold text-primary">{event.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOUNDERS — Side by Side ===== */}
      <Section>
        <SectionHeader
          eyebrow="Leadership"
          title="Meet the Founders"
          description="Fedho combines entrepreneurial vision and technical engineering expertise."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {founders.map((founder, i) => (
            <FadeIn key={founder.name} delay={i * 0.15} direction={i === 0 ? "left" : "right"}>
              <div className="premium-card group overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.06]">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={founder.image}
                    alt={founder.imageAlt}
                    width={900}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <h3 className="text-lg font-bold text-white">{founder.name}</h3>
                    <p className="text-sm text-white/80">{founder.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{founder.overview}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {founder.focus.slice(0, 4).map((f) => (
                      <Badge key={f} variant="outline" className="text-xs rounded-lg">{f}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ===== AWARDS ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/20 to-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Awards"
            title="Recognition and Public Trust"
            description="Fedho has received awards and recommendation letters from recognized programs and institutions."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {awards.slice(0, 3).map((award, i) => (
              <FadeIn key={award.id} delay={i * 0.1}>
                <div className="premium-card group overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.06]">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={award.image}
                      alt={award.imageAlt}
                      width={800}
                      height={500}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    {award.year && (
                      <p className="text-xs font-bold text-[var(--brand-orange)] mb-1">{award.year}</p>
                    )}
                    <h3 className="text-sm font-bold text-foreground">{award.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{award.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button
              nativeButton={false}
              render={<Link href="/awards" />}
              variant="outline"
              className="rounded-xl"
              size="lg"
            >
              View All Awards
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ===== INSTALLATIONS — Full width image band ===== */}
      <Section>
        <SectionHeader
          eyebrow="Installations"
          title="Verified Customer Installations"
          description="A sample of customer projects and partnership evidence documented from public updates."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {customerPartnerships.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="premium-card group overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.06]">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={700}
                    height={460}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 text-sm font-bold text-white">{item.title}</h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ===== FAQ ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/20 to-background py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Quick answers to common questions about FP Hybrid Generators and services."
          />
          <div className="rounded-2xl border bg-white p-6 sm:p-8 shadow-sm">
            <Accordion>
              {faqItems.slice(0, 6).map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="mt-8 text-center">
            <Button
              nativeButton={false}
              render={<Link href="/faq" />}
              variant="outline"
              className="rounded-xl"
              size="lg"
            >
              View All FAQs
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <Section className="pt-0 pb-20">
        <ScaleIn>
          <div className="relative overflow-hidden mx-auto max-w-6xl rounded-3xl bg-[var(--brand-blue)] px-8 py-16 text-white sm:px-14">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--brand-orange)]/10 rounded-full blur-3xl" aria-hidden="true" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to discuss your power requirements?
              </h2>
              <p className="mt-4 max-w-2xl text-white/75 text-lg">
                Request a consultation to identify the right FP Hybrid Generator capacity for your site.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  nativeButton={false}
                  render={<Link href="/contact" />}
                  size="lg"
                  className="rounded-xl bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-orange-light)] text-white shadow-xl hover:brightness-110"
                >
                  Request a Quote
                </Button>
                <Button
                  nativeButton={false}
                  render={<Link href="/products" />}
                  size="lg"
                  className="rounded-xl bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20"
                >
                  Compare Product Series
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </ScaleIn>
      </Section>
    </>
  );
}
