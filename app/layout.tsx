import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kristina Vogli | Portfolio",
  description: "Portfolio of Krista Vogli – Web Developer and Designer",
  icons: {
    icon: "/favicon.png", // place favicon in public/
  },
  openGraph: {
    title: "Krista Vogli | Portfolio",
    description: "Portfolio of Krista Vogli – Web Developer and Designer",
    url: "https://my-portfolio-six-dun-65.vercel.app/",
    siteName: "Krista Vogli | Portfolio",
    images: [
      {
        url: "/og-image.jpeg", // optional social preview image
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
    images: ["/og-image.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
