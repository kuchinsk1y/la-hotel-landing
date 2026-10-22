import type { Metadata, Viewport } from "next";
import { Gilda_Display, Newsreader } from "next/font/google";

import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { siteConfig } from "@/config/site";

import "./globals.css";

// Stand-ins for the licensed Figma fonts (TC Rooms → display, VC Honey → body).
// Swap for `next/font/local` once the font files are available.
const display = Gilda_Display({
  variable: "--font-display-var",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const body = Newsreader({
  variable: "--font-body-var",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#2c4255",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
