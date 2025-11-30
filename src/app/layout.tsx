

import type { Metadata } from "next";
import "./globals.css";
import "../styles/reveal.css";
import { Poppins, Outfit } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import ScrollPopupWrapper from "@/components/helpers/ScrollPopupWrapper";

export const metadata: Metadata = {
  title: {
    default: "Dr Students - Medical & Engineering Guidance",
    template: "%s | Dr Students",
  },
  description: "Your trusted partner for Medical and Engineering college admissions, mentorship, and career guidance.",
  keywords: ["medical", "engineering", "admissions", "mentorship", "NEET", "JEE", "counselling"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://drstudents.com",
    siteName: "Dr Students",
    title: "Dr Students - Medical & Engineering Guidance",
    description: "Your trusted partner for Medical and Engineering college admissions, mentorship, and career guidance.",
    images: [
      {
        url: "/drstudents.png",
        width: 800,
        height: 600,
        alt: "Dr Students Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Students - Medical & Engineering Guidance",
    description: "Your trusted partner for Medical and Engineering college admissions, mentorship, and career guidance.",
    images: ["/drstudents.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://drstudents.com"),
  alternates: {
    canonical: "/",
  },
};

const PoppinsFont = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const OutfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "700"],
});

import { headers } from "next/headers";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  // Check if the path is exactly /join-now or starts with /join-now/ (if there are subpages)
  // User said "Fix the /join-now issue", assuming it's the page at /join-now.
  const isJoinNowPage = pathname === "/join-now";

  return (
    <html lang="en">
      <body className={`${PoppinsFont.variable} ${OutfitFont.variable} antialiased`}>
        {!isJoinNowPage && !pathname.startsWith("/admin") && <Navbar />}

        <ScrollPopupWrapper />

        {children}

        {!isJoinNowPage && !pathname.startsWith("/admin") && <Footer />}
      </body>
    </html>
  );
}
