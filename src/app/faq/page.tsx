import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";

import { FadeIn, ScaleIn } from "@/components/motion/motion";
import { PageHero, Section, SectionHeader } from "@/components/shared/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqItems } from "@/content/faq";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "FAQ | Fedho Power Solution PLC",
  description:
    "Find answers to common questions on FP Hybrid Generators, capacity ranges, technology workflow, and services.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Clear answers to common technical and purchasing questions."
      />

      <Section>
        <div className="mx-auto max-w-4xl">
          {/* Icon banner */}
          <FadeIn>
            <div className="mb-10 flex items-center gap-4 rounded-2xl bg-gradient-to-r from-primary/5 to-[var(--brand-orange)]/5 p-5 border border-border/50">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 shrink-0">
                <HelpCircle className="size-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Have a specific question?</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  If you don't find your answer below,{" "}
                  <Link href="/contact" className="text-[var(--brand-orange)] font-semibold hover:underline">
                    contact our team
                  </Link>{" "}
                  for a personalized response.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Accordion */}
          <FadeIn delay={0.1}>
            <div className="rounded-2xl bg-white ring-1 ring-black/[0.06] shadow-sm divide-y divide-border/60 overflow-hidden">
              <Accordion>
                {faqItems.map((item, i) => (
                  <AccordionItem
                    key={item.question}
                    value={item.question}
                    className="px-2 sm:px-4"
                  >
                    <AccordionTrigger className="text-left text-sm font-semibold text-foreground py-5 hover:text-[var(--brand-orange)] transition-colors">
                      <span className="flex items-start gap-3">
                        <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-lg bg-[var(--brand-orange)]/10 text-xs font-bold text-[var(--brand-orange)] mt-0.5">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5 pl-9">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ===== CTA ===== */}
      <Section className="pt-0">
        <ScaleIn>
          <div className="relative overflow-hidden rounded-3xl bg-[var(--brand-blue)] px-8 py-14 text-white sm:px-14 mx-auto max-w-5xl">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--brand-orange)]/10 rounded-full blur-3xl" aria-hidden="true" />
            <div className="relative">
              <h2 className="text-2xl font-bold sm:text-3xl">Still need specific guidance?</h2>
              <p className="mt-3 text-white/70 max-w-xl">
                Contact the Fedho team for site assessment and generator capacity recommendations.
              </p>
              <Button
                nativeButton={false}
                render={<Link href="/contact" />}
                size="lg"
                className="mt-6 rounded-xl bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-orange-light)] text-white"
              >
                Contact Fedho <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </ScaleIn>
      </Section>
    </>
  );
}
