import Image from "next/image";
import Link from "next/link";

import { contactInfo } from "@/content/contact";
import { navLinks, siteConfig } from "@/content/navigation";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/media/logo/logo.jpg"
                alt={`${siteConfig.name} logo`}
                width={48}
                height={48}
                className="rounded-lg object-cover"
              />
              <div>
                <p className="font-bold">{siteConfig.shortName}</p>
                <p className="text-sm text-primary-foreground/75">
                  Clean Energy Technology
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/80">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>
            <address className="space-y-2 not-italic text-sm text-primary-foreground/80">
              <p>{contactInfo.headquarters.address}</p>
              <p>
                {contactInfo.headquarters.city}, {contactInfo.headquarters.country}
              </p>
              <p>
                {contactInfo.phone.label}: {contactInfo.phone.value}
              </p>
              <p>
                {contactInfo.email.label}: {contactInfo.email.value}
              </p>
            </address>
            <p className="mt-3 text-xs text-primary-foreground/60">
              {contactInfo.pendingNotice}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Connect
            </h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {contactInfo.social.map((item) => (
                <li key={item.platform}>{item.platform} — To be confirmed</li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/15" />

        <div className="flex flex-col gap-2 text-sm text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p>Designed and Manufactured in Ethiopia</p>
        </div>
      </div>
    </footer>
  );
}
