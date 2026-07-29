# The Universe Decides — official landing page

The international landing page for [The Universe Decides](https://github.com/vitorhugo-dotnet/the_universe_decides), a small cosmic randomizer for people who would rather leave everyday decisions to chance.

The page presents the app through a mystical, space-inspired experience with localized routes, parallax effects, scroll-driven animations and a gentle scrollytelling flow. It is available in English, Portuguese, Spanish, German, French, Hindi, Italian, Turkish and Ukrainian.

## The app

The Universe Decides helps users make quick, low-stakes decisions by offering:

- coin flips;
- dice rolls;
- card draws;
- random choices from a custom list;
- true randomness from [Random.org](https://www.random.org/) when available;
- a clearly identified local fallback when the device is offline, Random.org is unavailable or its rate limit is reached.

The app requires no account, contains no ads and does not collect personal data.

| Resource | Link |
| --- | --- |
| Android app — Google Play | [Download on Google Play](https://play.google.com/store/apps/details?id=com.hugo.theuniversedecides) |
| Android app — F-Droid | Coming soon — [tracking issue](https://github.com/vitorhugo-dotnet/the_universe_decides/issues/4) |
| App source code | [the_universe_decides](https://github.com/vitorhugo-dotnet/the_universe_decides) |
| Landing page | [the-universe-decides.ikkiartz.chatgpt.site](https://the-universe-decides.ikkiartz.chatgpt.site) |

## Features of this site

- localized routes: `/en`, `/pt`, `/es`, `/de`, `/fr`, `/hi`, `/it`, `/tr` and `/uk`;
- automatic browser-language detection with English fallback;
- language switcher without losing the current section;
- responsive layout for desktop and mobile;
- CSS parallax and scroll-driven animations for the coin, dice, cards and list;
- scroll snapping with `proximity`, so the page remains controllable;
- `prefers-reduced-motion` support;
- favicon based on the app logo.

## Run locally

### Requirements

- Node.js `>=22.13.0`;
- Linux, WSL or another environment with `flock`, `curl` and GNU `timeout`.

Install the locked dependencies and start the development server:

```bash
npm run install:ci
npm run dev
```

The development server is normally available at `http://localhost:5173`.

Useful commands:

```bash
npm run build              # build and validate the Sites artifact
npm test                   # build, validate and run rendered HTML tests
npm run lint               # run ESLint
npm run start              # start the built application
npm run validate:artifact  # validate an existing artifact
```

The project uses Next-compatible React code executed by [Vinext](https://github.com/cloudflare/vinext), with Vite as the development/build entry point. Application code lives mainly under `app/`.

## Working with GPT Sites

[GPT Sites](https://learn.chatgpt.com/docs/sites) can create, host, refine and share compatible websites from ChatGPT. In this repository, it is the hosted deployment layer rather than the application framework: the site remains normal versioned source code, while Sites builds and deploys a pushed commit.

### The important lifecycle

1. Make a focused change under `app/`, `public/` or the relevant configuration file.
2. Run the smallest useful local checks (`npm run lint`, `npm test` or `npm run build`).
3. Commit and push the exact source state.
4. Save a Sites version from that commit.
5. Deploy the saved version and inspect the production URL.

The deployed version must correspond to the commit that was pushed. Keeping that relationship makes a published site reproducible and makes rollback/debugging much less mysterious.

### Sites project configuration

`.openai/hosting.json` stores the Sites project identity and optional bindings:

```json
{
  "project_id": "appgprj_…",
  "d1": null,
  "r2": null
}
```

Do not invent or change `project_id`: it identifies the existing hosted project. D1 and R2 are `null` here because this landing page does not need a database or object storage.

### Auth headers are optional

Sites can provide request headers such as `oai-authenticated-user-email` to workspace-authenticated sites. This project intentionally keeps its public landing page anonymous and does not use sign-in. If a future feature needs user-specific pages, identity should be read server-side and protected routes should be made dynamic; authentication is not a substitute for workspace membership or authorization checks.

### Practical rules

- keep content and translations in source control;
- do not hard-code secrets in the repository;
- preserve `.openai/hosting.json` when syncing the project;
- deploy only after the source commit and the saved Sites version match;
- test reduced-motion and mobile behavior before publishing animation changes;
- keep the F-Droid button disabled until the package is actually available.

## Project structure

```text
app/                    React/Next-compatible application code
public/                 static assets, including the favicon
tests/                  rendered HTML verification
scripts/                bounded install, build and artifact checks
.openai/hosting.json    GPT Sites project configuration
vite.config.ts          local Vite/Vinext configuration
```

## License

See [LICENSE](LICENSE).
