import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { copy, isLocale, locales } from "../translations";
import CosmicLanding from "./cosmic-landing";

type Props = { params: Promise<{ locale: string }> };
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const current = isLocale(locale) ? locale : "en";
  const content = copy[current];
  const title = `${content.hero[0]} | The Universe Decides`;
  const description = content.hero[3];
  const languages = Object.fromEntries(locales.map((item) => [item, `/${item}`]));
  languages["x-default"] = "/en";

  return {
    title,
    description,
    alternates: {
      canonical: `/${current}`,
      languages,
    },
    openGraph: {
      title,
      description,
      url: `/${current}`,
      locale: current,
      images: [{ url: "/favicon.png", width: 240, height: 240, alt: "The Universe Decides logo" }],
    },
    twitter: { title, description, images: ["/favicon.png"] },
    other: { "content-language": current },
  };
}

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <CosmicLanding locale={locale} content={copy[locale]} />;
}
