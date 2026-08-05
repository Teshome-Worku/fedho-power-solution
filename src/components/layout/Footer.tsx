import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { contactInfo } from "@/content/contact";
import { navLinks, siteConfig } from "@/content/navigation";
import { productSeries } from "@/content/products";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[var(--brand-blue)] text-white">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-orange)]/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Top CTA Banner */}
        <div className="border-b border-white/10 py-12 sm:py-16">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Ready to power your future?
              </h2>
              <p className="mt-2 text-white/70 max-w-xl">
                Get a consultation to find the right FP Hybrid Generator for your home, business, or institution.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-orange-light)] px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[var(--brand-orange)]/20 transition-all duration-300 hover:brightness-110 hover:shadow-2xl"
            >
              Request a Quote
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Image
                src="/media/logo/logo.jpg"
                alt={`${siteConfig.name} logo`}
                width={52}
                height={52}
                className="rounded-xl object-cover ring-2 ring-white/10"
              />
              <div>
                <p className="text-base font-bold">Fedho Power Solution</p>
                <p className="text-xs text-white/60 font-medium">
                  Clean Energy Technology
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/65 max-w-xs">
              Ethiopian clean-energy company specializing in silent hybrid power generators for homes, businesses, and institutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/40">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/40">
              Products
            </h3>
            <ul className="space-y-3">
              {productSeries.map((series) => (
                <li key={series.id}>
                  <Link
                    href="/products"
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {series.name}
                    <span className="ml-2 text-xs text-white/40">
                      {series.capacityRange}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/40">
              Contact
            </h3>
            <address className="space-y-3 not-italic text-sm text-white/65">
              <p>{contactInfo.headquarters.address}</p>
              <p>
                {contactInfo.headquarters.city}, {contactInfo.headquarters.country}
              </p>
            </address>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              {contactInfo.social.map((item) => (
                <div
                  key={item.platform}
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/8 text-white/60 text-xs font-bold transition-all hover:bg-white/15 hover:text-white cursor-default"
                  title={item.platform}
                >
                  {item.platform.charAt(0)}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col gap-3 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-white/35">Designed and Manufactured in Ethiopia</p>
        </div>
      </div>
    </footer>
  );
}
