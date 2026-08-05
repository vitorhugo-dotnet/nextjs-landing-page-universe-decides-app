import { notFound } from "next/navigation";
import { copy, isLocale, locales } from "../translations";
import CosmicLanding from "./cosmic-landing";
import { buildLocaleMetadata, buildSoftwareApplicationJsonLd } from "../seo";

type Props = { params: Promise<{ locale: string }> };
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return buildLocaleMetadata(locale);
}

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const jsonLd = JSON.stringify(buildSoftwareApplicationJsonLd(locale)).replace(/</g, "\\u003c");

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    <CosmicLanding locale={locale} content={copy[locale]} />
  </>;
}
