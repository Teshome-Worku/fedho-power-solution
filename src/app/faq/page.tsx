import type { Metadata } from "next";
import Link from "next/link";

import { PageHero, Section, SectionHeader } from "@/components/shared/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
                <SectionHeader
                    eyebrow="Questions"
                    title="What Customers Ask Most"
                    description="Information is based on current publicly documented materials."
                />
                <Card className="mx-auto max-w-5xl">
                    <CardContent>
                        <Accordion>
                            {faqItems.map((item) => (
                                <AccordionItem key={item.question} value={item.question}>
                                    <AccordionTrigger>{item.question}</AccordionTrigger>
                                    <AccordionContent>{item.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>
            </Section>

            <Section className="pt-0">
                <div className="mx-auto max-w-4xl rounded-2xl bg-primary px-6 py-10 text-white sm:px-10">
                    <h2 className="text-3xl font-bold">Still need specific guidance?</h2>
                    <p className="mt-3 text-white/85">
                        Contact the Fedho team for site assessment and generator capacity recommendations.
                    </p>
                    <Button
                        nativeButton={false}
                        render={<Link href="/contact" />}
                        size="lg"
                        className="mt-6 bg-[var(--brand-orange)] text-white hover:bg-[var(--brand-orange)]/90"
                    >
                        Contact Fedho
                    </Button>
                </div>
            </Section>
        </>
    );
}
