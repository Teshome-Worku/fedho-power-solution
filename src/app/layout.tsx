import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Preloader } from "@/components/ui/preloader";
import { createPageMetadata, createOrgSchema } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Fedho Power Solution PLC | Silent Hybrid Power Generators in Ethiopia",
    description:
      "Ethiopian clean-energy company specializing in silent hybrid power generators combining solar energy, battery storage, and grid charging for homes, businesses, and institutions.",
    path: "/",
  }),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(createOrgSchema()),
          }}
        />
        {/* Analytics Hooks Prepared - Add IDs when ready */}
        {/* <Script id="gtm" strategy="afterInteractive">...</Script> */}
        {/* <Script id="ga" strategy="afterInteractive">...</Script> */}
        {/* <Script id="clarity" strategy="afterInteractive">...</Script> */}
        {/* <Script id="pixel" strategy="afterInteractive">...</Script> */}
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <Preloader />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
