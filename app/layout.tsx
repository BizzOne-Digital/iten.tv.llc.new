import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "iTEN.TV | America's Wildest Baggers",
    template: "%s | iTEN.TV",
  },
  description:
    "iTEN.TV is home to Bagged & Tagged — original documentary films chronicling America's wildest bagger motorcycle culture.",
  icons: {
    icon: [
      { url: "/bagtag/assets/img/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/bagtag/assets/img/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/bagtag/assets/img/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/bagtag/assets/img/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/bagtag/assets/img/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
