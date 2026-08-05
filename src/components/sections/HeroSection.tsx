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
    <section className="relative isolate overflow-hidden min-h-screen flex items-center">
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

      <div className="relative mx-auto flex w-full max-w-7xl items-center px-5 pt-[calc(72px+4rem)] pb-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <FadeIn direction="up" delay={0.2} duration={0.8}>
            <Badge className="mb-6 rounded-full bg-white/10 text-white/90 border border-white/20 px-4 py-1.5 text-xs font-semibold backdrop-blur-sm">
              🇪🇹 Powering Ethiopia's Future
            </Badge>
          </FadeIn>

          <FadeIn direction="up" delay={0.4} duration={0.8}>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl lg:leading-[1.05]">
              Reliable{" "}
              <span className="gradient-text">Hybrid Power</span>{" "}
              Solutions
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.6} duration={0.8}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              {siteConfig.description}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.8} duration={0.8}>
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
          </FadeIn>

          {/* Trust badges */}
          <FadeIn direction="up" delay={1.0} duration={0.8}>
            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
              {[
                "Made in Ethiopia",
                "Silent Hybrid Technology",
                "Solar + Grid Charging",
                "2KW–600KW",
              ].map((badge, i) => (
                <div key={badge} className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--brand-orange)]/20">
                    <svg className="h-3 w-3 text-[var(--brand-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-white/80">{badge}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <FadeIn delay={1.5} duration={1} className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <a href="#about" className="group flex flex-col items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Scroll to Explore</span>
          <div className="flex h-8 w-5 items-center justify-center rounded-full border border-white/20 p-1">
            <div className="h-1.5 w-1.5 rounded-full bg-[var(--brand-orange)] animate-bounce" />
          </div>
        </a>
      </FadeIn>

      {/* Curved section divider */}
      <div className="absolute bottom-0 inset-x-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
            fill="var(--background)"
          />
        </svg>
      </div>
    </section>
  );
}
