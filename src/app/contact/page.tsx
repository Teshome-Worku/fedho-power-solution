import type { Metadata } from "next";

import { PageHero, Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo, productInterestOptions } from "@/content/contact";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
    title: "Contact | Fedho Power Solution PLC",
    description:
        "Request a quote or technical consultation for FP Hybrid Generator solutions tailored to your site requirements.",
    path: "/contact",
});

export default function ContactPage() {
    return (
        <>
            <PageHero
                eyebrow="Contact"
                title="Request a Quote or Consultation"
                description="Share your requirements and the team will help identify the right generator capacity and installation approach."
            />

            <Section>
                <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
                    <Card>
                        <CardHeader>
                            <CardTitle>Inquiry Form</CardTitle>
                            <CardDescription>
                                Version 1 includes a validated interface for inquiries. Contact channels remain marked as pending until officially confirmed.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4" action="#" method="post">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="fullName">Full Name</Label>
                                        <Input id="fullName" name="fullName" required placeholder="Your full name" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="company">Company / Organization</Label>
                                        <Input id="company" name="company" placeholder="Optional" />
                                    </div>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" name="email" type="email" required placeholder="you@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone</Label>
                                        <Input id="phone" name="phone" type="tel" placeholder="Your phone number" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="interest">Product Interest</Label>
                                    <select
                                        id="interest"
                                        name="interest"
                                        className="h-10 w-full rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Select an option
                                        </option>
                                        {productInterestOptions.map((item) => (
                                            <option key={item} value={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Project Requirements</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        required
                                        className="min-h-32"
                                        placeholder="Describe your load requirements, application context, and preferred installation timeline."
                                    />
                                </div>

                                <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                                    Submit Inquiry
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <div className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Headquarters</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                <p>{contactInfo.headquarters.address}</p>
                                <p>
                                    {contactInfo.headquarters.city}, {contactInfo.headquarters.country}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Contact Channels</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm text-muted-foreground">
                                <p>
                                    {contactInfo.phone.label}: {contactInfo.phone.value}
                                </p>
                                <p>
                                    {contactInfo.email.label}: {contactInfo.email.value}
                                </p>
                                <p className="rounded-md bg-secondary p-3 text-xs">{contactInfo.pendingNotice}</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Social Platforms</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm text-muted-foreground">
                                {contactInfo.social.map((item) => (
                                    <p key={item.platform}>{item.platform}: To be confirmed</p>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Section>
        </>
    );
}
