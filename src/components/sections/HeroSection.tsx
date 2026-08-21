"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { FadeIn, HeroImageSlider } from "@/components/motion/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const heroImages = [
  { src: "/media/hero/fedho-hybrid-system.png", alt: "Fedho 50 kW silent hybrid power system with battery unit and solar panels", objectPosition: "center center", mobileObjectPosition: "72% center" },
  { src: "/media/products_and_generators/product_in_work.jpg", alt: "Fedho hybrid charging and solar energy system", objectPosition: "center center", mobileObjectPosition: "68% center" },
  { src: "/media/installations/installation_photo.jpg", alt: "Fedho engineers installing solar energy infrastructure in Ethiopia", objectPosition: "center center", mobileObjectPosition: "62% center" },
];

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[570px] overflow-hidden bg-[#061a34] sm:min-h-[600px] lg:min-h-[620px]">
      <HeroImageSlider images={heroImages} interval={8000} />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[58%] bg-gradient-to-r from-[#061a34]/55 via-[#061a34]/20 to-transparent sm:w-[47%] lg:w-[42%]" />

      <div className="relative z-20 mx-auto flex min-h-[570px] w-full max-w-7xl flex-col px-5 py-20 sm:min-h-[600px] sm:px-6 sm:py-24 lg:min-h-[620px] lg:px-8 lg:py-24">
        <div className="flex max-w-xl flex-1 flex-col justify-center lg:max-w-[32rem]">
          <FadeIn direction="up" delay={0.15} duration={0.7}>
            <Badge className="mb-5 w-fit rounded-full border border-white/35 bg-[#061a34]/35 px-3.5 py-1.5 text-[0.68rem] font-bold tracking-[0.12em] text-white shadow-sm backdrop-blur-sm">BUILT IN ETHIOPIA</Badge>
          </FadeIn>
          <FadeIn direction="up" delay={0.3} duration={0.7}>
            <h1 className="max-w-[8ch] text-[2.25rem] font-bold leading-[1.04] tracking-[-0.05em] text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.35)] sm:max-w-[10ch] sm:text-5xl lg:text-[3.65rem]">
              Reliable <span className="text-[var(--brand-orange)]">Hybrid</span> Power
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.45} duration={0.7}>
            <p className="mt-4 max-w-[15rem] text-sm leading-relaxed text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:mt-5 sm:max-w-sm sm:text-[1.05rem]">Silent, intelligent power systems built for a stronger tomorrow.</p>
          </FadeIn>
          <FadeIn direction="up" delay={0.6} duration={0.7}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button nativeButton={false} render={<Link href="/contact" />} size="lg" className="group rounded-full bg-[var(--brand-orange)] px-8 text-sm font-bold text-white shadow-lg shadow-[var(--brand-orange)]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--brand-orange-light)] hover:shadow-xl hover:shadow-[var(--brand-orange)]/35">Request a Quote <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Button>
              <Button nativeButton={false} render={<Link href="/products" />} size="lg" className="rounded-full bg-white/10 px-8 text-sm font-semibold text-white ring-1 ring-white/40 backdrop-blur-sm transition-all duration-300 hover:bg-white/20">Explore Products</Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
