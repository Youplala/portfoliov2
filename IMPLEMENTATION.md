# Personal portfolio first pass

All changes are local to `feat/personal-portfolio-seo`, based on `f2e01bc`. No deployment or Git publication is part of this work. The existing main-push FTP workflow is unchanged.

## Public content and CV

`constants.ts` holds the shared public portfolio facts, experience, project descriptions, skills, education and FAQ. It is an export model for this site, not a replacement for the master resume. No private employer-targeted material is included. Reactive Resume remains the canonical CV library; portfolio CV actions link to the public `ai-product-engineer-portfolio` version. `/resume.html` is a separate readable export, not a replacement for the master. Changes to the CV library do not automatically regenerate the site: update the shared export model and rebuild when publishing revisions.

`pnpm build` renders the React components through React's server renderer and writes complete `dist/index.html` and `dist/resume.html`. It also regenerates the tracked public exports `resume.md`, `llms.txt`, `llms-full.txt`, `robots.txt` and `sitemap.xml` from the shared data. Edit the shared data, then rebuild; do not edit these generated text exports independently. The existing Markdown resume remains available at its original URL, with factual corrections and additional public projects.

The CV uses `/resume.html`, a real static file with its own canonical and metadata, so no Apache rewrite is required. Both pages hydrate existing content. The three.js background mounts only after hydration; content is visible before JavaScript runs. Native FAQ disclosures keep all answers in the initial HTML. CSS is compiled locally rather than depending on a Tailwind runtime script. The CV has print rules and supports the browser's Print / Save as PDF command without JavaScript.

## Search and AI discovery

`llms.txt` and `llms-full.txt` are supplementary text exports, not ranking guarantees or special instructions for bots. Google says no special AI files or schema are required for AI Search, and its updated guide says Google Search does not use these files:

- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/fundamentals/ai-optimization-guide

Google's former FAQ documentation redirects to its updates page, which documents removal of the FAQ rich-result feature. This implementation deliberately includes no FAQPage structured data:

- https://developers.google.com/search/updates#removing-faq-rich-result

Both pages include Person, WebSite and ProfilePage JSON-LD, stable production URLs and public identity links. No guessed update dates are included. The social card is `og-personal-v1.png` (1200 x 630), inspected after generation; its source is the adjacent SVG. `node scripts/social-image.mjs` regenerates it using resvg and the locally installed DejaVu Sans font. The existing favicon, project screenshots and unused legacy DOCX asset are retained. The obsolete importmap, keyword list and client API-key defines are removed.

## Verification and review

Executed successfully:

- `pnpm install --frozen-lockfile` (also repeated after dependency updates)
- `pnpm exec tsc --noEmit`
- `pnpm build`
- `pnpm test` (six Node tests using parse5 on the built documents)
- `git diff --check`

Tests cover initial HTML, unique titles/canonicals/descriptions, social metadata, language, structured data, all FAQ answers, navigation, current CV links, absence of public em dashes and stale metrics, exact 33.8k/170M facts, text export consistency, production sitemap/robots, images and print CSS. Print styling is checked statically and a Chromium print PDF was generated and text-extracted successfully.

Run `pnpm build && pnpm preview --host 127.0.0.1` and inspect `http://127.0.0.1:4173/` and `http://127.0.0.1:4173/resume.html`. Use preview for the generated metadata and no-JavaScript checks; `pnpm dev` is the client editing server. Browser checks passed at desktop 1440px and mobile 390px/320px widths, with JavaScript enabled and disabled. No horizontal overflow, hydration errors, failed requests or broken images were found. FAQ mouse/keyboard toggling and anchor navigation passed. The visual review confirmed the FAQ hanging indentation and social image, and the contact section now exposes the email address. User approval remains required before publication. Google Fonts remain an external request with local font fallbacks. Search indexing or AI citations cannot be verified before publication and are not promised.
