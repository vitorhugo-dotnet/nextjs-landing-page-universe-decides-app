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
  metadataBase: new URL("https://the-universe-decides.ikkiartz.chatgpt.site"),
  title: {
    default: "The Universe Decides",
    template: "%s | The Universe Decides",
  },
  description:
    "A cosmic decision-making app for flipping coins, rolling dice, drawing cards and choosing from custom lists.",
  applicationName: "The Universe Decides",
  keywords: ["random decision maker", "coin flip", "dice roller", "random picker", "Random.org"],
  authors: [{ name: "Vitor Hugo Alves Ferreira" }],
  creator: "Vitor Hugo Alves Ferreira",
  publisher: "Vitor Hugo Alves Ferreira",
  category: "utilities",
  alternates: {
    canonical: "/en",
    languages: {
      en: "/en",
      pt: "/pt",
      es: "/es",
      de: "/de",
      fr: "/fr",
      hi: "/hi",
      it: "/it",
      tr: "/tr",
      uk: "/uk",
      "x-default": "/en",
    },
  },
  openGraph: {
    type: "website",
    siteName: "The Universe Decides",
    url: "/en",
    title: "The Universe Decides — Let the universe decide",
    description: "A mystical, private decision-making app powered by chance and cosmic entropy.",
    images: [{ url: "/favicon.png", width: 240, height: 240, alt: "The Universe Decides logo" }],
  },
  twitter: {
    card: "summary",
    title: "The Universe Decides — Let the universe decide",
    description: "Flip coins, roll dice, draw cards and choose from custom lists.",
    images: ["/favicon.png"],
  },
  robots: { index: true, follow: true },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "The Universe Decides",
              applicationCategory: "UtilitiesApplication",
              operatingSystem: "Android",
              description: metadata.description,
              url: "https://the-universe-decides.ikkiartz.chatgpt.site/en",
              downloadUrl: "https://play.google.com/store/apps/details?id=com.hugo.theuniversedecides",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
