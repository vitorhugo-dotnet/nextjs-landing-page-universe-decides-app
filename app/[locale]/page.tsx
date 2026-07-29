import { notFound } from "next/navigation";
import { copy, isLocale, locales } from "../translations";
import CosmicLanding from "./cosmic-landing";

type Props = { params: Promise<{ locale: string }> };
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <CosmicLanding locale={locale} content={copy[locale]} />;
}
