import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Share2, Link2, Play, Mail, MapPin, Phone, Send } from "lucide-react";

import { FadeIn } from "@/components/motion/motion";
import { PageHero, Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
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

const socialIcons: Record<string, React.ElementType> = {
  Facebook: Share2,
  LinkedIn: Link2,
  TikTok: Play,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a Quote or Consultation"
        description="Share your requirements and the team will help identify the right generator capacity and installation approach."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] items-start">

          {/* ===== LEFT: Contact Info ===== */}
          <FadeIn direction="left">
            <div className="space-y-5">
              {/* Location */}
              <div className="rounded-2xl bg-white p-7 ring-1 ring-black/[0.06] shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/8">
                    <MapPin className="size-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground">Headquarters</h3>
                </div>
                <p className="text-sm text-muted-foreground">{contactInfo.headquarters.address}</p>
                <p className="text-sm text-muted-foreground">
                  {contactInfo.headquarters.city}, {contactInfo.headquarters.country}
                </p>
              </div>

              {/* Contact channels */}
              <div className="rounded-2xl bg-white p-7 ring-1 ring-black/[0.06] shadow-sm">
                <h3 className="text-sm font-bold text-foreground mb-5">Contact Channels</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-secondary shrink-0">
                      <Phone className="size-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">Phone</p>
                      <p className="text-sm text-foreground">{contactInfo.phone.value}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-secondary shrink-0">
                      <Mail className="size-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">Email</p>
                      <p className="text-sm text-foreground">{contactInfo.email.value}</p>
                    </div>
                  </div>
                </div>
                <p className="mt-5 rounded-xl bg-secondary/50 p-3 text-xs text-muted-foreground leading-relaxed">
                  {contactInfo.pendingNotice}
                </p>
              </div>

              {/* Social */}
              <div className="rounded-2xl bg-white p-7 ring-1 ring-black/[0.06] shadow-sm">
                <h3 className="text-sm font-bold text-foreground mb-4">Social Platforms</h3>
                <div className="flex gap-3">
                  {contactInfo.social.map((item) => {
                    const Icon = socialIcons[item.platform] || Building2;
                    return (
                      <div
                        key={item.platform}
                        className="flex items-center justify-center w-11 h-11 rounded-xl bg-secondary/60 text-muted-foreground cursor-default transition-colors hover:bg-secondary"
                        title={`${item.platform} — To be confirmed`}
                      >
                        <Icon className="size-5" />
                      </div>
                    );
                  })}
                </div>
                <p className="mt-3 text-xs text-muted-foreground/60">Social links coming soon</p>
              </div>
            </div>
          </FadeIn>

          {/* ===== RIGHT: Form ===== */}
          <FadeIn direction="right" delay={0.1}>
            <div className="rounded-2xl bg-white p-8 ring-1 ring-black/[0.06] shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-1.5">Send an Inquiry</h2>
              <p className="text-sm text-muted-foreground mb-7">
                Fill in your details and our team will get back to you shortly.
              </p>
              <form className="space-y-5" action="#" method="post">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="Your full name"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                      Company / Organization
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Optional"
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest" className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    Product Interest
                  </Label>
                  <select
                    id="interest"
                    name="interest"
                    className="h-10 w-full rounded-xl border border-input bg-transparent px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a product series</option>
                    {productInterestOptions.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    Project Requirements *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    className="min-h-32 rounded-xl resize-none"
                    placeholder="Describe your load requirements, application context, and preferred installation timeline."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-xl bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-orange-light)] text-white shadow-lg shadow-[var(--brand-orange)]/20 hover:brightness-110 transition-all"
                >
                  <Send className="size-4 mr-2" />
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
