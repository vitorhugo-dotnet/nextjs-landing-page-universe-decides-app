import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { defaultLocale, isLocale } from "./translations";

export default async function Home() {
  const requestHeaders = await headers();
  const accepted = requestHeaders.get("accept-language")?.toLowerCase() ?? "";
  const preferred = accepted
    .split(",")
    .map((entry) => entry.split(";")[0].trim().split("-")[0])
    .find(isLocale);

  redirect(`/${preferred ?? defaultLocale}`);
}
