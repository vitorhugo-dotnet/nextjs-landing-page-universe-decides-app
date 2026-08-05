# Technical SEO design

## Goal

Make The Universe Decides landing page reliably discoverable and shareable without changing its visual experience or locale routing.

## Approach

Use Next.js metadata APIs as the source of truth. Each localized landing route emits its own title, description, canonical URL, language alternates, Open Graph and Twitter metadata. Root-level files provide crawler policy and the complete localized sitemap.

## Structure

- `app/seo.ts`: centralizes the public origin, per-locale metadata and JSON-LD generation.
- `app/[locale]/page.tsx`: exports route metadata and JSON-LD while preserving the existing landing component.
- `app/robots.ts`: allows public indexing, blocks internal framework paths, and declares the sitemap.
- `app/sitemap.ts`: lists every supported locale plus the privacy-policy pages.
- `tests/rendered-html.test.mjs`: asserts canonical, social metadata and structured data in a rendered localized page; source tests assert robots and sitemap coverage.

## Data and error handling

Only valid configured locales produce metadata, canonical URLs, or sitemap entries. Invalid locale paths keep the existing 404 behavior. URLs use `https://hugodotnet.dev/the-universe-decides` as the public origin, matching the existing privacy-policy links.

## Validation

Tests first verify that required SEO output is missing, then assert the expected production HTML and generated crawler routes. The full project test script remains the final gate.
