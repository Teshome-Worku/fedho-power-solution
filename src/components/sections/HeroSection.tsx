"use client";

import { ArrowRight, Settings, ShieldCheck, Sun, Zap } from "lucide-react";
import Link from "next/link";

import { FadeIn, HeroImageSlider } from "@/components/motion/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/navigation";

// Portrait and ambiguous gallery shots are intentionally excluded: each slide must read as power technology at a glance.
const heroImages = [
  { src: "/media/hero/fedho-hybrid-system.png", alt: "Fedho 50 kW silent hybrid power system beside solar panels", objectPosition: "center center" },
  { src: "/media/products_and_generators/product2_at_EDI.jpg", alt: "Fedho hybrid generator installed at Ethiopian Defence University", objectPosition: "72% center" },
  { src: "/media/products_and_generators/product_in_work.jpg", alt: "Fedho generator powering a commercial facility", objectPosition: "70% center" },
];

const features = [
  { icon: Zap, title: "Silent Technology", desc: "Low noise. High performance." },
  { icon: Sun, title: "Solar + Grid Charging", desc: "Intelligent hybrid energy management." },
  { icon: ShieldCheck, title: "Built in Ethiopia", desc: "Locally assembled with global quality standards." },
  { icon: Settings, title: "2kW – 500kW", desc: "Power solutions for every need and scale." },
];

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[760px] overflow-hidden bg-[#061a34] sm:min-h-[790px] lg:min-h-[820px]">
      <HeroImageSlider images={heroImages} interval={8000} />

      {/* A directional reading gradient protects copy without turning the product image into a dark backdrop. */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061a34]/95 via-[#061a34]/72 via-[55%] to-[#061a34]/5 to-[86%]" />
      <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-[#061a34]/70 to-transparent" />

      <div className="relative z-20 mx-auto flex min-h-[760px] w-full max-w-7xl flex-col px-5 pb-20 pt-[148px] sm:min-h-[790px] sm:px-6 lg:min-h-[820px] lg:px-8 lg:pb-24 lg:pt-[172px]">
        <div className="flex max-w-xl flex-1 flex-col justify-center pb-8 sm:max-w-2xl sm:pb-10 lg:max-w-[39rem]">
          <FadeIn direction="up" delay={0.15} duration={0.7}>
            <Badge className="mb-6 w-fit rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/95 shadow-sm backdrop-blur-sm">
              🇪🇹 Powering Ethiopia&apos;s Future
            </Badge>
          </FadeIn>

          <FadeIn direction="up" delay={0.3} duration={0.7}>
            <h1 className="max-w-[11ch] text-[2.7rem] font-bold tracking-[-0.045em] text-white sm:text-5xl lg:text-[4.15rem] lg:leading-[1.06]">
              Reliable <span className="text-[var(--brand-orange)]">Hybrid</span> Power Solutions
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.45} duration={0.7}>
            <p className="mt-5 block max-w-md text-base leading-relaxed text-white/90 sm:hidden">
              Reliable, silent hybrid generators combining solar, battery storage, and grid charging.
            </p>
            <p className="mt-6 hidden max-w-xl text-[1.05rem] leading-relaxed text-white/85 sm:block">
              {siteConfig.description}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.6} duration={0.7}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button nativeButton={false} render={<Link href="/contact" />} size="lg" className="group rounded-full bg-[var(--brand-orange)] px-8 text-sm font-bold text-white shadow-lg shadow-[var(--brand-orange)]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--brand-orange-light)] hover:shadow-xl hover:shadow-[var(--brand-orange)]/35">
                Request a Quote <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button nativeButton={false} render={<Link href="/products" />} size="lg" className="rounded-full bg-white/5 px-8 text-sm font-semibold text-white ring-1 ring-white/40 backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
                Explore Products
              </Button>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.75} duration={0.7}>
            <div className="mt-10 hidden flex-wrap gap-x-6 gap-y-3 sm:flex lg:hidden">
              {["Made in Ethiopia", "Silent Hybrid Technology", "Solar + Grid Charging", "2kW – 500kW"].map((item) => (
                <span key={item} className="flex items-center gap-2 text-xs font-medium text-white/85">
                  <span className="size-1.5 rounded-full bg-[var(--brand-orange)]" />{item}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.85} duration={0.7} className="hidden w-full lg:block">
          <div className="grid grid-cols-4 divide-x divide-white/20 rounded-[1.65rem] border border-white/20 bg-[#102b4b]/78 p-5 shadow-2xl shadow-[#061a34]/30 backdrop-blur-md">
            {features.map((feature) => (
              <div key={feature.title} className="group flex items-start gap-3 px-4 first:pl-1 last:pr-1">
                <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-[var(--brand-orange)] transition-colors group-hover:border-[var(--brand-orange)]/60 group-hover:bg-[var(--brand-orange)]/10">
                  <feature.icon className="size-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold tracking-tight text-white">{feature.title}</h2>
                  <p className="mt-1 text-xs leading-relaxed text-white/70">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 w-full overflow-hidden leading-[0]">
        <svg className="relative block h-[60px] w-[calc(100%+1.3px)] sm:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" fill="var(--background)" />
        </svg>
      </div>
    </section>
  );
}
