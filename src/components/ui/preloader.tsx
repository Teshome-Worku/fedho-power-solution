"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Preloader() {
  // Initialize from sessionStorage to avoid setting state synchronously in an effect
  const [isLoading, setIsLoading] = useState(() => {
    try {
      return !sessionStorage.getItem("fedho-preloader-seen");
    } catch {
      return true;
    }
  });

  // Dismiss helper (also used for tap-to-skip)
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dismiss = () => {
    try {
      if (containerRef.current) containerRef.current.style.pointerEvents = "none";
    } catch {
      /* ignore */
    }
    setIsLoading(false);
    try {
      sessionStorage.setItem("fedho-preloader-seen", "true");
    } catch {
      /* ignore */
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      dismiss();
    }
  };

  useEffect(() => {
    if (!isLoading) return;

    const timer = setTimeout(() => {
      dismiss();
    }, 1200); // shorten to ~1.2s for faster mobile UX

    return () => clearTimeout(timer);
  }, [isLoading]);

  // Auto-dismiss preloader immediately on small viewports (mobile-first)
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.innerWidth <= 480) {
        dismiss();
      }
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.32, ease: "easeInOut" } }}
          data-testid="preloader"
          ref={containerRef}
          onClick={dismiss}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a1128] overflow-hidden"
        >
          {/* Subtle moving background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1128] via-[#0f1b3d] to-[#0a1128] opacity-80" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[var(--brand-orange)]/10 rounded-full blur-[120px] pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo with energy pulse */}
            <div className="relative flex items-center justify-center mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-2xl z-10 bg-white p-2"
              >
                <Image
                  src="/media/logo/logo.jpg"
                  alt="Fedho Power Solution PLC"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Energy pulse rings */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.2 }}
                className="absolute inset-0 border-2 border-[var(--brand-orange)] rounded-2xl"
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
                className="absolute inset-0 border border-[var(--brand-orange)]/50 rounded-2xl"
              />
            </div>

            {/* Tagline */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-white/90 text-lg sm:text-xl font-medium tracking-wide mb-12 text-center px-4 font-space-grotesk"
            >
              Powering Ethiopia&apos;s Clean Energy Future
            </motion.h1>

            {/* Progress Line */}
            <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2.4, ease: "easeInOut", delay: 0.2 }}
                className="w-full h-full bg-gradient-to-r from-transparent via-[var(--brand-orange)] to-[var(--brand-orange-light)] rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
