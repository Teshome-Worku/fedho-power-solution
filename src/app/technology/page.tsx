import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  Building2,
  CheckCircle2,
  ChevronRight,
  Home,
  RefreshCw,
  Sun,
  Zap,
} from "lucide-react";

import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "@/components/motion/motion";
import { PageHero, Section, SectionHeader } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  energySources,
  hybridBenefits,
  hybridOverview,
  intelligentManagement,
  powerPriority,
  systemFlow,
  workflowSteps,
  dieselComparison,
} from "@/content/technology";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Technology | Fedho Power Solution PLC",
  description:
    "Learn how FP Hybrid Generators combine solar energy, battery storage, and grid charging through intelligent power management.",
  path: "/technology",
});

const sourceIcons = [Sun, Zap, BatteryCharging, Building2];
const flowIcons = [Sun, BatteryCharging, Zap, Building2, Home];
const phaseColors: Record<string, string> = {
  daytime: "bg-yellow-100 text-yellow-800 border-yellow-200",
  night: "bg-blue-100 text-blue-800 border-blue-200",
  continuous: "bg-green-100 text-green-800 border-green-200",
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="How Hybrid Power Works"
        description={hybridOverview.summary}
      />

      {/* ===== ENERGY SOURCES ===== */}
      <Section>
        <SectionHeader
          eyebrow="Energy Sources"
          title="Multiple Sources, One Intelligent System"
          description="FP Generators intelligently combine three energy sources to ensure uninterrupted power."
        />
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {energySources.map((source, i) => {
            const Icon = sourceIcons[i] || Zap;
            return (
              <StaggerItem key={source.title}>
                <div className="premium-card group h-full rounded-2xl bg-white p-7 ring-1 ring-black/[0.06] hover:ring-[var(--brand-orange)]/20">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-[var(--brand-orange)]/10 mb-5 group-hover:shadow-lg transition-all duration-300">
                    <Icon className="size-7 text-primary group-hover:text-[var(--brand-orange)] transition-colors" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{source.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{source.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Section>

      {/* ===== SYSTEM FLOW — Visual Chain ===== */}
      <section className="relative overflow-hidden bg-[var(--brand-blue)] py-20 sm:py-24">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[var(--brand-orange)]/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="System Flow"
            title="End-to-End Power Delivery"
            description="The complete path from energy generation to your home or business."
            dark
          />
          {/* Desktop horizontal chain */}
          <div className="hidden lg:flex items-center justify-center gap-0 max-w-5xl mx-auto">
            {systemFlow.map((step, i) => {
              const Icon = flowIcons[i] || Zap;
              return (
                <div key={step.label} className="flex items-center">
                  <div className="flex flex-col items-center text-center group">
                    <div className="flex items-center justify-center w-20 h-20 rounded-2xl border border-white/10 bg-white/8 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/15 group-hover:border-white/20">
                      <Icon className="size-8 text-[var(--brand-orange-light)]" />
                    </div>
                    <p className="mt-4 text-sm font-bold text-white">{step.label}</p>
                    <p className="mt-1 text-xs text-white/50 max-w-[110px]">{step.description}</p>
                  </div>
                  {i < systemFlow.length - 1 && (
                    <ChevronRight className="size-6 text-[var(--brand-orange)]/40 mx-4 shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
          {/* Mobile stacked */}
          <div className="flex flex-col gap-3 lg:hidden">
            {systemFlow.map((step, i) => {
              const Icon = flowIcons[i] || Zap;
              return (
                <div key={step.label} className="flex items-center gap-5 rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 shrink-0">
                    <Icon className="size-6 text-[var(--brand-orange-light)]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{step.label}</p>
                    <p className="text-xs text-white/50">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== WORKFLOW STEPS ===== */}
      <Section>
        <SectionHeader
          eyebrow="How It Works"
          title="Step-by-Step Workflow"
          description="How FP Generators manage power through day, night, and outage scenarios."
        />
        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workflowSteps.map((step) => (
            <StaggerItem key={step.step}>
              <div className="premium-card rounded-2xl bg-white p-6 ring-1 ring-black/[0.06]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/8 text-sm font-bold text-primary shrink-0">
                    {step.step}
                  </span>
                  <Badge variant="outline" className={`text-xs rounded-lg border ${phaseColors[step.phase]}`}>
                    {step.phase}
                  </Badge>
                </div>
                <p className="text-sm font-semibold text-foreground leading-snug">{step.title}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ===== POWER PRIORITY + INTELLIGENT MGMT — Side by Side ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/20 to-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-orange)]">Power Priority</p>
              <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">Smart Source Selection</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                The system automatically selects the most efficient energy source at any time.
              </p>
              <div className="mt-8 space-y-4">
                {powerPriority.map((p) => (
                  <div key={p.source} className="flex items-center gap-4 rounded-xl bg-white p-5 ring-1 ring-black/[0.06]">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--brand-orange)]/10 shrink-0">
                      <span className="text-lg font-bold text-[var(--brand-orange)]">{p.order}</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">{p.source}</p>
                      <p className="text-xs text-muted-foreground">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.15}>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-orange)]">Intelligent Management</p>
              <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">{intelligentManagement.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intelligentManagement.summary}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{intelligentManagement.automaticSwitching}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {intelligentManagement.userBenefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="size-4 shrink-0 text-[var(--brand-orange)]" />
                    {b}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== HYBRID vs DIESEL COMPARISON ===== */}
      <Section>
        <SectionHeader
          eyebrow="Comparison"
          title="Hybrid vs. Conventional Diesel"
          description="A clear look at the advantages of FP Hybrid Generators."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="rounded-2xl bg-gradient-to-br from-green-50 to-green-100/50 p-8 ring-1 ring-green-200/60">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-green-500/10">
                  <CheckCircle2 className="size-5 text-green-600" />
                </div>
                <p className="font-bold text-foreground">FP Hybrid Generator</p>
              </div>
              <ul className="space-y-3">
                {dieselComparison.hybrid.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <CheckCircle2 className="size-4 shrink-0 text-green-500 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <div className="rounded-2xl bg-gradient-to-br from-secondary/30 to-secondary/10 p-8 ring-1 ring-border">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-muted">
                  <RefreshCw className="size-5 text-muted-foreground" />
                </div>
                <p className="font-bold text-foreground">Conventional Diesel</p>
              </div>
              <ul className="space-y-3">
                {dieselComparison.diesel.map((d) => (
                  <li key={d} className="text-sm text-muted-foreground flex items-start gap-2.5">
                    <span className="w-4 h-4 shrink-0 mt-0.5 flex items-center justify-center rounded-full bg-muted text-muted-foreground text-xs">—</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ===== BENEFITS ===== */}
      <section className="relative overflow-hidden bg-[var(--brand-blue)] py-16 sm:py-20">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Why Hybrid" title="Benefits at a Glance" dark />
          <StaggerContainer className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {hybridBenefits.map((b) => (
              <StaggerItem key={b}>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                  <CheckCircle2 className="size-4 text-[var(--brand-orange-light)] shrink-0" />
                  <p className="text-sm font-medium text-white/90">{b}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <Section>
        <ScaleIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 to-[var(--brand-orange)]/5 border p-10 sm:p-14 text-center">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">See It in Action</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Contact our team to request a demo or discuss your specific power requirements.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row items-center justify-center">
              <Button
                nativeButton={false}
                render={<Link href="/contact" />}
                size="lg"
                className="rounded-xl bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-orange-light)] text-white"
              >
                Request a Quote <ArrowRight className="size-4" />
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="/products" />}
                variant="outline"
                size="lg"
                className="rounded-xl"
              >
                View Products
              </Button>
            </div>
          </div>
        </ScaleIn>
      </Section>
    </>
  );
}
