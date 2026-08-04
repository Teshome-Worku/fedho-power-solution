"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, siteConfig } from "@/content/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !isHome;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-border/60 bg-background/95 shadow-sm backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/media/logo/logo.jpg"
            alt={`${siteConfig.name} logo`}
            width={40}
            height={40}
            className="rounded-lg object-cover"
            priority
          />
          <span
            className={cn(
              "hidden text-sm font-bold leading-tight sm:block",
              solid ? "text-primary" : "text-white",
            )}
          >
            {siteConfig.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? solid
                    ? "bg-primary/10 text-primary"
                    : "bg-white/15 text-white"
                  : solid
                    ? "text-foreground/80 hover:bg-muted hover:text-foreground"
                    : "text-white/85 hover:bg-white/10 hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            nativeButton={false}
            render={<Link href="/contact" />}
            className={cn(
              solid
                ? "bg-[var(--brand-orange)] text-white hover:bg-[var(--brand-orange)]/90"
                : "bg-white text-primary hover:bg-white/90",
            )}
            size="lg"
          >
            Request a Quote
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon-lg"
                className={cn(
                  "lg:hidden",
                  !solid && "text-white hover:bg-white/10 hover:text-white",
                )}
                aria-label="Open menu"
              />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm">
            <SheetHeader>
              <SheetTitle>{siteConfig.shortName}</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-muted",
                    pathname === link.href && "bg-primary/10 text-primary",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                nativeButton={false}
                render={<Link href="/contact" onClick={() => setOpen(false)} />}
                className="mt-4 w-full bg-[var(--brand-orange)] text-white hover:bg-[var(--brand-orange)]/90"
                size="lg"
              >
                Request a Quote
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
