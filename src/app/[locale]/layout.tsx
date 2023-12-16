import type { Metadata } from "next";
import { Encode_Sans_Condensed, Vazirmatn, Rubik } from "next/font/google";

import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer/Footer";

import { cn } from "@/lib/utils";

import { getCurrentLocale } from "@/locales/server";

import "../globals.css";

const encode_sans_condensed = Encode_Sans_Condensed({
  subsets: ["latin"],
  variable: "--font-english",
  weight: "500",
});

const amatic_sc = Rubik({
  subsets: ["hebrew"],
  variable: "--font-hebrew",
  weight: "500",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-arabic",
});
export const metadata: Metadata = {
  title: "Orwa",

  description:
    "Orwa, a freelancer, making website, mobile apps and custom software.",

  icons: [{ rel: "icon", url: "/favicon.ico", sizes: "any" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = getCurrentLocale();

  return (
    <html
      lang="en"
      className={`${encode_sans_condensed.variable} ${amatic_sc.variable} ${vazirmatn.variable}`}
    >
      <body
        className={cn({
          "font-english ": locale === "en",
          "text-right font-hebrew  ": locale === "he",
          "text-right font-arabic ": locale === "ar",
        })}
      >
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
