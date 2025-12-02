import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://my-portfolio-six-dun-65.vercel.app"),
  title: "Kristina Vogli | Portfolio",
  description: "Portfolio of Krista Vogli – Web Developer and Designer",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Krista Vogli | Portfolio",
    description: "Portfolio of Krista Vogli – Web Developer and Designer",
    url: "https://my-portfolio-six-dun-65.vercel.app/og-image.png",
    siteName: "Krista Vogli | Portfolio",
    images: [
      {
        url: "/og-image-v2.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krista Vogli | Portfolio",
    description: "Portfolio of Krista Vogli – Web Developer and Designer",
    images: ["/og-image-v2.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#262626] text-[#E2E8CE]">
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
