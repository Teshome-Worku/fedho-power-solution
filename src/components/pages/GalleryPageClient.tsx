"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import { PageHero, Section, SectionHeader } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { galleryCategories, galleryItems, type GalleryCategory } from "@/content/gallery";

export function GalleryPageClient() {
    const [category, setCategory] = useState<GalleryCategory>("all");

    const filteredItems = useMemo(() => {
        if (category === "all") return galleryItems;
        return galleryItems.filter((item) => item.categories.includes(category));
    }, [category]);

    return (
        <>
            <PageHero
                eyebrow="Gallery"
                title="Media Library"
                description="Product, installation, customer, founder, and awards visuals from documented public sources."
            />

            <Section>
                <SectionHeader
                    eyebrow="Filter"
                    title="Browse by Category"
                    description="Use category filters to explore the media library."
                    align="left"
                />

                <div className="mb-8 flex flex-wrap gap-2">
                    {galleryCategories.map((item) => (
                        <Button
                            key={item.id}
                            onClick={() => setCategory(item.id)}
                            variant={category === item.id ? "default" : "outline"}
                            className={category === item.id ? "bg-primary text-primary-foreground" : undefined}
                        >
                            {item.label}
                        </Button>
                    ))}
                </div>

                {category === "factory" ? (
                    <Card className="border-dashed">
                        <CardHeader>
                            <CardTitle>Factory Media Coming Soon</CardTitle>
                            <p className="text-sm text-muted-foreground">
                                Factory-specific visuals are planned for a future update once verified media becomes available.
                            </p>
                        </CardHeader>
                    </Card>
                ) : (
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {filteredItems.map((item) => (
                            <Card key={item.id}>
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={840}
                                    height={560}
                                    className="h-56 w-full object-cover"
                                />
                                <CardHeader>
                                    <CardTitle>{item.title}</CardTitle>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                )}
            </Section>
        </>
    );
}
