"use client";

import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/content/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Defer closing mobile menu to avoid synchronous state update in effect
    const id = setTimeout(() => setMobileOpen(false), 0);
    return () => clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300 transform-gpu bg-white shadow-sm border-b border-black/5"
        )}
      >
        {/* ===== PREMIUM TOP INFORMATION BAR ===== */}
        <AnimatePresence initial={false}>
          {!scrolled && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="hidden lg:block w-full bg-[#0a1628] border-b border-white/5 overflow-hidden"
            >
              <div className="mx-auto flex h-[38px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
                
                {/* Left Side: Contact Info */}
                <div className="flex items-center text-[11px] font-medium text-white/80 tracking-wide">
                  <a href="tel:+251917428514" className="flex items-center gap-1.5 hover:text-white group transition-colors">
                    <Phone className="size-3.5 text-[var(--brand-orange)]" />
                    <span className="group-hover:underline decoration-[var(--brand-orange)]/50 underline-offset-4">+251 917 428 514</span>
                  </a>
                  <span className="mx-4 h-3 w-px bg-white/20" aria-hidden="true" />
                  <a href="mailto:info@fedhopowersolution.com" className="flex items-center gap-1.5 hover:text-white group transition-colors">
                    <Mail className="size-3.5 text-[var(--brand-orange)]" />
                    <span className="group-hover:underline decoration-[var(--brand-orange)]/50 underline-offset-4">info@fedhopowersolution.com</span>
                  </a>
                  <span className="mx-4 h-3 w-px bg-white/20" aria-hidden="true" />
                  <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
                    <MapPin className="size-3.5 text-[var(--brand-orange)]" />
                    <span>Bole Lemi, Addis Ababa, Ethiopia</span>
                  </div>
                </div>

                {/* Right Side: Social Icons */}
                <div className="flex items-center gap-4">
                  {[
                    { 
                      icon: (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>, 
                      href: "https://www.linkedin.com/in/fedho-power-solution-plc-014a7a3a1/", 
                      label: "LinkedIn" 
                    },
                    { 
                      icon: (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>, 
                      href: "https://web.facebook.com/fedhopowersolution", 
                      label: "Facebook" 
                    },
                    { 
                      icon: (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="22" x2="11" y1="2" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>, 
                      href: "https://t.me/+lSw2LwIYjLExOWE0", 
                      label: "Telegram" 
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="text-white/60 transition-all duration-300 hover:text-[var(--brand-orange)] hover:-translate-y-0.5 hover:scale-110"
                    >
                      <social.icon className="size-[15px]" />
                    </a>
                  ))}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/media/logo/logo.jpg"
                alt={`${siteConfig.name} logo`}
                width={44}
                height={44}
                style={{ height: "auto" }}
                className="rounded-xl object-cover ring-2 ring-primary/10 transition-all duration-300 group-hover:ring-primary/30"
                priority
              />
            </div>
            <div className="block whitespace-nowrap">
              <span className="block text-[13px] sm:text-sm font-bold tracking-tight text-primary">
                Fedho Power Solution
              </span>
              <span className="block text-[10px] sm:text-[11px] font-medium text-muted-foreground/70">
                Clean Energy Technology
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-[13px] font-semibold transition-all duration-300",
                    isActive
                      ? "text-primary"
                      : "text-foreground/65 hover:text-foreground",
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute inset-x-1 -bottom-[1px] h-[2px] rounded-full bg-[var(--brand-orange)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Button
              nativeButton={false}
              render={<Link href="/contact" />}
              className="hidden lg:inline-flex bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-orange-light)] text-white shadow-lg shadow-[var(--brand-orange)]/20 hover:shadow-xl hover:shadow-[var(--brand-orange)]/30 hover:brightness-105 transition-all duration-300 rounded-xl"
              size="lg"
            >
              Request a Quote
            </Button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative z-50 p-2 rounded-xl text-foreground hover:bg-muted transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 z-40 h-full w-full max-w-sm bg-white shadow-2xl lg:hidden"
          >
            <div className="flex flex-col h-full pt-24 px-6 pb-8">
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-base font-semibold transition-all duration-200",
                        pathname === link.href
                          ? "bg-primary/8 text-primary border-l-3 border-[var(--brand-orange)]"
                          : "text-foreground/70 hover:bg-muted hover:text-foreground",
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto pt-6">
                <Button
                  nativeButton={false}
                  render={<Link href="/contact" onClick={() => setMobileOpen(false)} />}
                  className="w-full bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-orange-light)] text-white rounded-xl shadow-lg"
                  size="lg"
                >
                  Request a Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
