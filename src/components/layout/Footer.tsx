import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { FacebookIcon, LinkedinIcon, TiktokIcon, TelegramIcon } from "@/components/ui/social-icons";
import { contactInfo } from "@/content/contact";
import { navLinks, siteConfig } from "@/content/navigation";
import { productSeries } from "@/content/products";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[var(--brand-blue)] text-white">
      {/* Footer wave divider */}
      <div className="absolute top-0 inset-x-0 w-full overflow-hidden leading-[0] rotate-180 -translate-y-px">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.22,34.46,120.35,53.28,193.38,62.83,236.4,68.4,279.74,64.21,321.39,56.44Z"
            fill="var(--brand-blue)"
          />
        </svg>
      </div>
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-orange)]/8 rounded-full blur-[100px]" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-[80px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Top CTA Banner */}
        <div className="border-b border-white/10 py-16 sm:py-20">
          <div className="flex flex-col items-center text-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Ready to power your future?
              </h2>
              <p className="mt-3 text-white/60 max-w-xl text-lg">
                Get a consultation to find the right FP Hybrid Generator for your home, business, or institution.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-orange-light)] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-[var(--brand-orange)]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[var(--brand-orange)]/40"
            >
              Request a Quote
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 text-center lg:text-left">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Image
                src="/media/logo/logo.jpg"
                alt={`${siteConfig.name} logo`}
                width={52}
                height={52}
                style={{ height: "auto" }}
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
          <div className="lg:text-left">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/40">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-all duration-300 hover:text-white hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-white/60 transition-all duration-300 hover:text-white hover:translate-x-1 inline-block"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="lg:text-left">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/40">
              Products
            </h3>
            <ul className="space-y-3">
              {productSeries.map((series) => (
                <li key={series.id}>
                  <Link
                    href="/products"
                    className="text-sm text-white/60 transition-all duration-300 hover:text-white hover:translate-x-1 inline-block"
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
          <div className="lg:text-left">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/40">
              Contact
            </h3>
            <address className="space-y-3 not-italic text-sm text-white/65">
              <p>{contactInfo.headquarters.address}</p>
              <p>
                {contactInfo.headquarters.city}, {contactInfo.headquarters.country}
              </p>
              <div className="pt-2">
                {contactInfo.phone.values.map(phone => (
                  <p key={phone}>{phone}</p>
                ))}
              </div>
            </address>

            {/* Social */}
            <div className="mt-6 flex gap-3 justify-center lg:justify-start">
              {contactInfo.social.map((item) => {
                const Icon = item.platform === "Facebook" ? FacebookIcon :
                  item.platform === "LinkedIn" ? LinkedinIcon :
                    item.platform === "TikTok" ? TiktokIcon :
                      item.platform === "Telegram" ? TelegramIcon : null;

                if (!Icon) return null;

                return (
                  <Link
                    key={item.platform}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-white/70 transition-all hover:bg-[var(--brand-orange)] hover:text-white"
                    title={item.label}
                  >
                    <Icon className="size-4" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col gap-3 text-xs text-white/45 items-center text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-white/35">Designed and Manufactured in Ethiopia</p>
        </div>
      </div>
    </footer>
  );
}
