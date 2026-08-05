import type { Metadata } from "next";
import { copy, defaultLocale, locales, type Locale } from "./translations";

export const siteUrl = "https://hugodotnet.dev/the-universe-decides";
const appDescription =
  "Flip a coin, roll dice, draw cards and let real randomness help with everyday decisions.";

function localizedUrl(locale: Locale, suffix = "") {
  return `${siteUrl}/${locale}${suffix}`;
}

function languageAlternates(suffix = "") {
  return Object.fromEntries(locales.map((locale) => [locale, localizedUrl(locale, suffix)]));
}

export function buildLocaleMetadata(locale: Locale): Metadata {
  const title = `The Universe Decides | ${copy[locale].hero[1]} ${copy[locale].hero[2]}`;
  const url = localizedUrl(locale);

  return {
    title,
    description: copy[locale].hero[3],
    alternates: {
      canonical: url,
      languages: { ...languageAlternates(), "x-default": localizedUrl(defaultLocale) },
    },
    openGraph: {
      type: "website",
      locale: locale === "pt" ? "pt_BR" : locale,
      url,
      siteName: "The Universe Decides",
      title,
      description: copy[locale].hero[3],
      images: [{ url: `${siteUrl}/favicon.png`, alt: "The Universe Decides" }],
    },
    twitter: {
      card: "summary",
      title,
      description: copy[locale].hero[3],
      images: [`${siteUrl}/favicon.png`],
    },
    robots: { index: true, follow: true },
  };
}

export function buildPrivacyMetadata(locale: Locale): Metadata {
  const title = `Privacy Policy | The Universe Decides`;
  const url = localizedUrl(locale, "/privacy-policy");

  return {
    title,
    description: "Privacy policy for The Universe Decides.",
    alternates: {
      canonical: url,
      languages: {
        ...languageAlternates("/privacy-policy"),
        "x-default": localizedUrl(defaultLocale, "/privacy-policy"),
      },
    },
    robots: { index: true, follow: true },
  };
}

export function buildSoftwareApplicationJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "The Universe Decides",
    applicationCategory: "GameApplication",
    operatingSystem: "Android",
    description: copy[locale].hero[3] || appDescription,
    url: localizedUrl(locale),
    inLanguage: locale,
    isAccessibleForFree: true,
    downloadUrl: "https://play.google.com/store/apps/details?id=com.hugo.theuniversedecides",
    sameAs: [
      "https://f-droid.org/packages/com.hugo.theuniversedecides",
      "https://github.com/vitorhugo-dotnet/the_universe_decides",
    ],
  };
}
