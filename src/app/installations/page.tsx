import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "@/components/motion/motion";
import { PageHero, Section, SectionHeader } from "@/components/shared/section";
import { galleryItems } from "@/content/gallery";
import { customerPartnerships } from "@/content/applications";
import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = createPageMetadata({
  title: "Installations | Fedho Power Solution PLC",
  description:
    "Explore documented installation photos and customer delivery highlights of FP Hybrid Generators across Ethiopia.",
  path: "/installations",
});

const installationSteps = [
  { step: 1, title: "Site Survey & Load Assessment", desc: "Our engineers visit your site to measure electrical load and conditions." },
  { step: 2, title: "System Design & Capacity Recommendation", desc: "We design the right hybrid system configuration for your needs." },
  { step: 3, title: "Professional Installation", desc: "Certified technicians install and configure all components." },
  { step: 4, title: "Commissioning & Training", desc: "Full system commissioning and customer training are provided." },
  { step: 5, title: "After-Sales Support", desc: "Ongoing maintenance, repair, and technical support." },
];

export default function InstallationsPage() {
  const installationItems = galleryItems.filter((item) => item.categories.includes("installations"));

  return (
    <>
      <PageHero
        eyebrow="Installations"
        title="Customer Installations & Delivery Highlights"
        description="A dedicated view of installation evidence and customer deployment snapshots from across Ethiopia."
      />

      {/* ===== INSTALLATION PROCESS ===== */}
      <Section>
        <SectionHeader
          eyebrow="Process"
          title="Our Installation Process"
          description="From site survey to after-sales support — a complete professional service."
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--brand-orange)] via-primary/20 to-[var(--brand-orange)]" aria-hidden="true" />
          <div className="space-y-6">
            {installationSteps.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.08}>
                <div className="relative flex items-start gap-8 pl-14">
                  <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brand-orange)] to-[var(--brand-orange-light)] text-white text-sm font-bold shadow-lg shadow-[var(--brand-orange)]/20">
                    {s.step}
                  </div>
                  <div className="flex-1 rounded-2xl bg-white p-5 ring-1 ring-black/[0.06] shadow-sm">
                    <h3 className="text-sm font-bold text-foreground">{s.title}</h3>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== PROJECT PHOTOS ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/20 to-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Project Photos"
            title="Installation Gallery"
            description="Installations and operational images collected from publicly available company updates."
          />
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {installationItems.map((item) => (
              <StaggerItem key={item.id}>
                <div className="premium-card group overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.06]">
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={700}
                      height={460}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <h3 className="absolute bottom-4 left-5 text-sm font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== CUSTOMER PARTNERSHIPS ===== */}
      <Section>
        <SectionHeader
          eyebrow="Customer Evidence"
          title="Partnership & Delivery Highlights"
          description="Representative customer references in education, healthcare, and institutions."
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <h3 className="text-sm font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-white/70 mt-0.5">Documented partnership</p>
                  </div>
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
              <h2 className="text-2xl font-bold sm:text-3xl">Ready to start your installation?</h2>
              <p className="mt-3 text-white/70 max-w-xl">
                Contact our team for a site survey and professional installation of your FP Hybrid Generator.
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
