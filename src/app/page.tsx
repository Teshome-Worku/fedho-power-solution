import {
  ArrowRight,
  BatteryCharging,
  Building2,
  CheckCircle2,
  Factory,
  GraduationCap,
  Heart,
  Home,
  Hotel,
  Landmark,

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
import {
  AbstractCurve,
  DiagonalCurve,
  InvertedWave,
  LayeredWave,
  OrganicCurve,
  SlantedDivider,
} from "@/components/ui/dividers";
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
// siteConfig import removed; not used in this page
import { stats } from "@/content/stats";
import { systemFlow } from "@/content/technology";
import { createPageMetadata } from "@/lib/seo";

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
  return (
    <>

      {/* ===== HERO ===== */}
      <HeroSection />

      {/* ===== ABOUT — Image Left, Text Right ===== */}
      <Section id="about">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="relative group">
              <div className="absolute -inset-4 rounded-3xl bg-[var(--brand-orange)]/10 blur-2xl transition-all duration-500 group-hover:bg-[var(--brand-orange)]/20" aria-hidden="true" />
              <Image
                src="/media/products_and_generators/products_with_fedesa_shuma.jpg"
                alt="Fedesa Shuma with FP Hybrid Generators"
                width={700}
                height={500}
                className="relative rounded-2xl object-cover shadow-2xl ring-1 ring-black/5"
              />
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5 lg:block transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <p className="text-4xl font-extrabold text-primary tracking-tight">2024</p>
                <p className="mt-1 text-sm font-semibold tracking-widest text-[var(--brand-orange)] uppercase">Founded</p>
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
                className="group mt-8 rounded-xl bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all duration-300"
                size="lg"
              >
                Learn Our Story
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </FadeIn>
        </div>
        <DiagonalCurve fill="var(--brand-blue)" />
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
                <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[var(--brand-orange)]/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-[var(--brand-orange)]/10">
                  <p className="text-4xl font-bold text-white sm:text-5xl tracking-tight">
                    <AnimatedCounter
                      value={item.value}
                      prefix={item.prefix}
                      suffix={item.suffix}
                    />
                  </p>
                  <p className="mt-4 text-sm font-bold tracking-wide uppercase text-white/90">{item.label}</p>
                  {item.description ? (
                    <p className="mt-2 text-xs text-white/60 leading-relaxed">{item.description}</p>
                  ) : null}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <LayeredWave fill="var(--secondary)" className="opacity-30" />
      </section>

      {/* ===== TECHNOLOGY — Workflow Visualization ===== */}
      <Section className="pb-24 sm:pb-32 bg-secondary/30 relative">
        <SectionHeader
          eyebrow="Technology"
          title="How Hybrid Power Works"
          description="Our systems combine solar charging, battery storage, and grid charging with intelligent automatic switching."
        />
        <div className="relative">
          {/* Desktop flow */}
          <div className="hidden lg:block relative max-w-5xl mx-auto mt-8">
            <div className="absolute top-10 left-12 right-12 h-0.5 bg-gradient-to-r from-transparent via-[var(--brand-orange)]/30 to-transparent dashed-line-animated" aria-hidden="true" />
            <div className="flex items-start justify-between relative z-10">
              {systemFlow.map((step, i) => {
                const Icon = flowIcons[i] || Zap;
                return (
                  <FadeIn key={step.label} delay={i * 0.12} direction="up" className="relative w-40">
                    <div className="flex flex-col items-center text-center group cursor-default">
                      <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:ring-[var(--brand-orange)]/30 relative z-20">
                        <Icon className="size-8 text-primary group-hover:text-[var(--brand-orange)] transition-colors duration-300" />
                      </div>
                      <p className="mt-6 text-sm font-extrabold text-foreground tracking-tight">{step.label}</p>
                      <p className="mt-2 text-xs text-muted-foreground max-w-[140px] leading-relaxed">{step.description}</p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
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
        <SlantedDivider fill="var(--background)" />
      </Section>

      {/* ===== PRODUCTS — Premium Cards ===== */}
      <section className="relative overflow-hidden bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Generator Categories"
            title="FP Generator Product Series"
            description="From residential backup to enterprise-scale infrastructure, FP Hybrid Generators are available from 2KW to 600KW."
          />
          <StaggerContainer className="grid gap-6 md:grid-cols-2 auto-rows-fr">
            {productSeries.map((series) => (
              <StaggerItem key={series.id} className="h-full">
                <div className="premium-card group relative overflow-hidden rounded-3xl bg-white shadow-lg shadow-black/[0.03] ring-1 ring-black/[0.06] transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--brand-orange)]/10 hover:ring-[var(--brand-orange)]/30 flex flex-col h-full">
                  <div className="relative overflow-hidden flex-none aspect-[16/9]">
                    <Image
                      src={series.image}
                      alt={series.imageAlt}
                      width={900}
                      height={540}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-60" />
                    <Badge className="absolute bottom-5 left-5 bg-[var(--brand-orange)] text-white border-0 text-xs font-bold tracking-widest uppercase shadow-lg">
                      {series.capacityRange}
                    </Badge>
                  </div>
                  <div className="p-8 flex flex-col grow">
                    <h3 className="text-xl font-extrabold text-primary tracking-tight">{series.name}</h3>
                    <p className="mt-2 text-xs font-semibold tracking-widest text-[var(--brand-orange)] uppercase">
                      For {series.targetCustomer}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {series.description}
                    </p>
                    <div className="mt-auto flex gap-4">
                      <Button
                        nativeButton={false}
                        render={<Link href="/contact" />}
                        className="rounded-xl bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-orange-light)] text-white shadow-lg shadow-[var(--brand-orange)]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[var(--brand-orange)]/40 font-semibold"
                      >
                        Request Quote
                      </Button>
                      <Button
                        nativeButton={false}
                        render={<Link href="/products" />}
                        variant="outline"
                        className="rounded-xl hover:bg-primary hover:text-white transition-colors duration-300"
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
        <OrganicCurve fill="hsl(var(--secondary))" className="opacity-20" />
      </section>

      {/* ===== APPLICATIONS — Grid with Icons + Images ===== */}
      <Section className="bg-secondary/20 relative pb-24 sm:pb-32">
        <SectionHeader
          eyebrow="Applications"
          title="Power for Homes, Businesses, and Institutions"
          description="Fedho serves customers with different operational and infrastructure requirements across Ethiopia."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {applicationSegments.map((seg, i) => {
            const Icon = applicationIcons[seg.id] || Building2;
            return (
              <FadeIn key={seg.id} delay={i * 0.08} className={`${i === 0 || i === 3 ? "lg:col-span-2" : ""} h-full`}>
                <div className="premium-card group flex flex-col h-full overflow-hidden rounded-3xl bg-white shadow-lg shadow-black/[0.03] ring-1 ring-black/[0.06] transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.08] hover:ring-black/[0.1]">
                  {seg.image ? (
                    <div className="relative overflow-hidden flex-none aspect-[16/9]">
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                      <Image
                        src={seg.image}
                        alt={seg.imageAlt || seg.title}
                        width={800}
                        height={600}
                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20" />
                      <div className="absolute bottom-6 left-6 z-30 flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/20">
                          <Icon className="size-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white tracking-tight">{seg.title}</h3>
                          <p className="text-xs font-semibold tracking-widest text-[var(--brand-orange)] uppercase">{seg.products}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-56 bg-gradient-to-br from-primary/[0.02] to-[var(--brand-orange)]/[0.05] relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--brand-orange)_0%,transparent_70%)] opacity-[0.03]" />
                      <Icon className="size-16 text-primary/20 group-hover:text-primary/30 transition-colors duration-500 group-hover:scale-110 transform" />
                    </div>
                  )}
                  <div className="p-8 grow flex flex-col justify-between">
                    {!seg.image && (
                      <div className="mb-4">
                        <h3 className="text-xl font-extrabold text-primary tracking-tight">{seg.title}</h3>
                        <p className="mt-1 text-xs font-semibold tracking-widest text-[var(--brand-orange)] uppercase">{seg.products}</p>
                      </div>
                    )}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {seg.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
        <InvertedWave fill="var(--background)" className="-scale-y-100 top-auto bottom-0" />
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
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--brand-orange)] via-primary/20 to-[var(--brand-orange)] md:left-1/2 md:-translate-x-px" aria-hidden="true" />

            <div className="space-y-12">
              {timeline.map((event, i) => (
                <FadeIn key={`${event.period}-${event.title}`} delay={i * 0.08} direction={i % 2 === 0 ? "left" : "right"}>
                  <div className={`relative flex gap-6 md:gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Dot */}
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-3 z-10">
                      <div className="w-4 h-4 rounded-full bg-[var(--brand-orange)] ring-4 ring-background shadow-lg shadow-[var(--brand-orange)]/30" />
                    </div>
                    {/* Content */}
                    <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${i % 2 === 0 ? "md:text-right md:mr-auto" : "md:text-left md:ml-auto"}`}>
                      <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-orange)]">{event.period}</p>
                      <h3 className="mt-2 text-lg font-extrabold text-primary tracking-tight">{event.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
        <AbstractCurve fill="var(--background)" className="rotate-180 -scale-x-100" />
      </section>

      {/* ===== FOUNDERS — Side by Side ===== */}
      <Section className="relative pb-24 sm:pb-32">
        <SectionHeader
          eyebrow="Leadership"
          title="Meet the Founders"
          description="Fedho combines entrepreneurial vision and technical engineering expertise."
        />
        <div className="grid gap-8 lg:grid-cols-2 auto-rows-fr">
          {founders.map((founder, i) => (
            <FadeIn key={founder.name} delay={i * 0.15} direction={i === 0 ? "left" : "right"}>
              <div className="premium-card group overflow-hidden rounded-3xl bg-white shadow-lg shadow-black/[0.03] ring-1 ring-black/[0.06] transition-all duration-700 hover:shadow-2xl hover:shadow-[var(--brand-orange)]/5 hover:-translate-y-1 flex flex-col h-full">
                <div className="relative overflow-hidden flex-none aspect-[4/3]">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                  <Image
                    src={founder.image}
                    alt={founder.imageAlt}
                    width={900}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-20" />
                  <div className="absolute bottom-8 left-8 z-30">
                    <h3 className="text-3xl font-extrabold text-white tracking-tight">{founder.name}</h3>
                    <p className="mt-2 text-sm font-semibold tracking-widest text-[var(--brand-orange)] uppercase">{founder.role}</p>
                  </div>
                </div>
                <div className="p-8 flex flex-col grow">
                  <p className="text-base text-muted-foreground leading-relaxed">{founder.overview}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {founder.focus.map((f) => (
                      <Badge key={f} variant="secondary" className="text-xs rounded-lg bg-secondary/50 hover:bg-secondary/70 text-foreground transition-colors px-3 py-1">
                        {f}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <DiagonalCurve fill="hsl(var(--secondary))" className="opacity-20 -scale-x-100" />
      </Section>

      {/* ===== AWARDS ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/20 to-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Awards"
            title="Recognition and Public Trust"
            description="Fedho has received awards and recommendation letters from recognized programs and institutions."
          />
          <div className="grid gap-6 md:grid-cols-3 auto-rows-fr">
            {awards.slice(0, 3).map((award, i) => (
              <FadeIn key={award.id} delay={i * 0.1}>
                <div className="premium-card group overflow-hidden rounded-3xl bg-white shadow-md shadow-black/[0.03] ring-1 ring-black/[0.06] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--brand-orange)]/10 hover:ring-[var(--brand-orange)]/30 flex flex-col h-full">
                  <div className="relative overflow-hidden flex-none aspect-[16/9] bg-primary/5 p-8 flex items-center justify-center">
                    <Image
                      src={award.image}
                      alt={award.imageAlt}
                      width={800}
                      height={500}
                      className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-xl"
                    />
                  </div>
                  <div className="p-8 flex flex-col grow">
                    {award.year && (
                      <p className="text-xs font-bold tracking-widest text-[var(--brand-orange)] uppercase mb-2">{award.year}</p>
                    )}
                    <h3 className="text-lg font-extrabold text-primary tracking-tight">{award.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{award.description}</p>
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
        <LayeredWave fill="var(--background)" className="-scale-x-100" />
      </section>

      {/* ===== INSTALLATIONS — Full width image band ===== */}
      <Section className="relative pb-24 sm:pb-32">
        <SectionHeader
          eyebrow="Installations"
          title="Verified Customer Installations"
          description="A sample of customer projects and partnership evidence documented from public updates."
        />
        <div className="grid gap-6 md:grid-cols-3 auto-rows-fr">
          {customerPartnerships.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="premium-card group overflow-hidden rounded-3xl bg-white shadow-md shadow-black/[0.03] ring-1 ring-black/[0.06] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--brand-orange)]/10 hover:ring-[var(--brand-orange)]/30 flex flex-col h-full">
                <div className="relative overflow-hidden flex-none aspect-[16/9]">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={700}
                    height={460}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20" />
                  <h3 className="absolute bottom-6 left-6 z-30 text-lg font-bold text-white tracking-tight">{item.title}</h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <OrganicCurve fill="hsl(var(--secondary))" className="opacity-20" />
      </Section>

      {/* ===== FAQ ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/20 to-background py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Quick answers to common questions about FP Hybrid Generators and services."
          />
          <FadeIn delay={0.1}>
            <Accordion className="space-y-4">
              {faqItems.slice(0, 6).map((item, i) => (
                <AccordionItem
                  key={item.question}
                  value={item.question}
                  className="group/item rounded-2xl border-none bg-white p-2 shadow-sm ring-1 ring-black/[0.06] transition-all duration-300 hover:shadow-md hover:ring-[var(--brand-orange)]/30 data-open:ring-[var(--brand-orange)]/50"
                >
                  <AccordionTrigger className="px-4 py-4 text-left text-sm font-semibold text-foreground transition-colors hover:text-[var(--brand-orange)] data-open:[&>span>span]:bg-[var(--brand-orange)] data-open:[&>span>span]:text-white data-open:text-[var(--brand-orange)] hover:no-underline">
                    <span className="flex items-center gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-orange)]/10 text-xs font-bold text-[var(--brand-orange)] transition-colors duration-300">
                        0{i + 1}
                      </span>
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-2">
                    <div className="pl-12 text-sm leading-relaxed text-muted-foreground">
                      {item.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
          <div className="mt-12 text-center">
            <Button
              nativeButton={false}
              render={<Link href="/faq" />}
              variant="outline"
              className="group rounded-xl shadow-sm hover:shadow-md hover:border-[var(--brand-orange)]/30 transition-all duration-300"
              size="lg"
            >
              View All FAQs
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        <AbstractCurve fill="var(--background)" />
      </section>

      {/* ===== CTA ===== */}
      <Section className="pt-0 pb-28">
        <ScaleIn>
          <div className="relative overflow-hidden mx-auto max-w-6xl rounded-[2rem] bg-gradient-to-br from-[var(--brand-blue)] via-[var(--brand-blue)] to-[#0a1628] px-8 py-20 text-white sm:px-16 sm:py-24 shadow-2xl shadow-primary/20">
            {/* Decorative glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-orange)]/15 rounded-full blur-[100px]" aria-hidden="true" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-[80px]" aria-hidden="true" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--brand-orange)]/5 rounded-full blur-[120px]" aria-hidden="true" />
            <div className="relative max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-orange)] mb-6">Get Started</p>
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl leading-tight">
                Ready to discuss your power requirements?
              </h2>
              <p className="mt-6 max-w-xl text-white/70 text-lg leading-relaxed">
                Request a consultation to identify the right FP Hybrid Generator capacity for your site.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  nativeButton={false}
                  render={<Link href="/contact" />}
                  size="lg"
                  className="group rounded-xl bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-orange-light)] text-white shadow-xl shadow-[var(--brand-orange)]/30 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[var(--brand-orange)]/50 transition-all duration-300 font-bold"
                >
                  Request a Quote
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  nativeButton={false}
                  render={<Link href="/products" />}
                  size="lg"
                  className="group rounded-xl bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm font-semibold"
                >
                  Compare Product Series
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </ScaleIn>
      </Section>
    </>
  );
}
