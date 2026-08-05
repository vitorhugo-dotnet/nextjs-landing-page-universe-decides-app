import { notFound } from "next/navigation";
import { PrivacyPolicyContent } from "../../privacy-policy/privacy-policy-content";
import { isLocale, locales } from "../../translations";
import { buildPrivacyMetadata } from "../../seo";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return buildPrivacyMetadata(locale);
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <PrivacyPolicyContent portuguese={locale === "pt"} backHref={`/${locale}`} />;
}
