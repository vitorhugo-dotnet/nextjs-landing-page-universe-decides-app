import { PrivacyPolicyContent } from "./privacy-policy-content";
import { buildPrivacyMetadata } from "../seo";

export const metadata = buildPrivacyMetadata("pt");

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent portuguese backHref="/pt" />;
}
