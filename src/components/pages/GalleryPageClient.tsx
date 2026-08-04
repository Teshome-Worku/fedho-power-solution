"use client";

import { useMemo, useState, useCallback } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { PageHero, Section, SectionHeader } from "@/components/shared/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/motion";
import { galleryCategories, galleryItems, type GalleryCategory } from "@/content/gallery";
import { cn } from "@/lib/utils";

export function GalleryPageClient() {
  const [category, setCategory] = useState<GalleryCategory>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (category === "all") return galleryItems;
    return galleryItems.filter((item) => item.categories.includes(category));
  }, [category]);

  const openLightbox = useCallback((i: number) => setLightbox(i), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : 0)), [filtered.length]);
  const next = useCallback(() => setLightbox((i) => (i !== null ? (i + 1) % filtered.length : 0)), [filtered.length]);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Media Library"
        description="Product, installation, customer, founder, and awards visuals from documented public sources."
      />

      <Section>
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {galleryCategories.map((item) => (
            <button
              key={item.id}
              onClick={() => setCategory(item.id)}
              className={cn(
                "rounded-xl px-5 py-2 text-sm font-semibold transition-all duration-300",
                category === item.id
                  ? "bg-[var(--brand-orange)] text-white shadow-lg shadow-[var(--brand-orange)]/20"
                  : "bg-white text-foreground/65 ring-1 ring-border hover:text-foreground hover:ring-foreground/20",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Factory Placeholder */}
        {category === "factory" ? (
          <FadeIn className="rounded-2xl border-2 border-dashed border-border/50 p-16 text-center">
            <p className="text-lg font-semibold text-muted-foreground">Factory Media Coming Soon</p>
            <p className="mt-2 text-sm text-muted-foreground/70">
              Factory-specific visuals are planned for a future update once verified media becomes available.
            </p>
          </FadeIn>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="masonry-grid"
            >
              {filtered.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => openLightbox(i)}
                  className="group relative block w-full overflow-hidden rounded-2xl bg-secondary focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)]"
                  aria-label={`View ${item.title}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={840}
                    height={560}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4">
                    <p className="text-sm font-bold text-white">{item.title}</p>
                    <ZoomIn className="absolute top-4 right-4 size-5 text-white" />
                  </div>
                </button>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="size-5" />
            </button>

            {/* Prev / Next */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 p-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors text-xl font-bold"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-14 p-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors text-xl font-bold"
              aria-label="Next"
            >
              ›
            </button>

            <motion.div
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] max-w-5xl w-full"
            >
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                width={1200}
                height={800}
                className="rounded-2xl object-contain max-h-[80vh] mx-auto"
              />
              <p className="mt-4 text-center text-sm text-white/80">{filtered[lightbox].title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
