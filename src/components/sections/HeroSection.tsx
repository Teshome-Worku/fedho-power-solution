"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { EnergyParticles, FadeIn, HeroImageSlider } from "@/components/motion/motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/content/navigation";

const heroImages = [
  { src: "/media/products_and_generators/many_products_together.jpg", alt: "FP Hybrid Generators lineup" },
  { src: "/media/products_and_generators/product_in_work.jpg", alt: "FP Generator in operation" },
  { src: "/media/products_and_generators/product3.jpg", alt: "FP Commercial Generator" },
  { src: "/media/installations/installation_photo.jpg", alt: "FP Generator installation" },
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden min-h-[90vh] flex items-center">
      {/* Background image slider with Ken Burns */}
      <HeroImageSlider images={heroImages} interval={7000} />

      {/* Gradient overlay — lighter than before so product is visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue)]/85 via-[var(--brand-blue)]/60 to-[var(--brand-blue)]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-blue)]/60 via-transparent to-[var(--brand-blue)]/20" />

      {/* Energy particles */}
      <EnergyParticles />

      {/* Glowing orb effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--brand-orange)]/15 rounded-full blur-[120px] animate-glow-pulse" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-white/5 rounded-full blur-[100px]" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-7xl items-center px-5 py-32 sm:px-6 lg:px-8">
        <FadeIn className="max-w-2xl" direction="up" duration={0.8}>
          <Badge className="mb-6 rounded-full bg-white/10 text-white/90 border border-white/20 px-4 py-1.5 text-xs font-semibold backdrop-blur-sm">
            🇪🇹 Designed & Manufactured in Ethiopia
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl lg:leading-[1.05]">
            Reliable{" "}
            <span className="gradient-text">Hybrid Power</span>{" "}
            Solutions
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {siteConfig.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              nativeButton={false}
              render={<Link href="/contact" />}
              size="lg"
              className="rounded-xl bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-orange-light)] text-white shadow-xl shadow-[var(--brand-orange)]/25 hover:shadow-2xl hover:brightness-110 transition-all duration-300 text-sm font-semibold px-8"
            >
              Request a Quote
              <ArrowRight className="size-4" />
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="/products" />}
              size="lg"
              className="rounded-xl bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-sm font-semibold px-8"
            >
              Explore Products
            </Button>
          </div>

          {/* Quick stats */}
          <div className="mt-14 flex gap-10 border-t border-white/10 pt-8">
            <div>
              <p className="text-2xl font-bold text-white">2–600<span className="text-base font-normal text-white/60">KW</span></p>
              <p className="text-xs text-white/50 mt-0.5">Power Range</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">4</p>
              <p className="text-xs text-white/50 mt-0.5">Product Series</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">0</p>
              <p className="text-xs text-white/50 mt-0.5">Diesel Required</p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
