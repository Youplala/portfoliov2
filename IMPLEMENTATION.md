# Personal portfolio implementation

Work is local to `feat/personal-portfolio-seo`, based on `a074b36`. Nothing is committed, pushed or deployed. The existing main-push FTP workflow is unchanged.

## Compact homepage

The homepage is a personal introduction, not a second CV or an agency landing page. Its 960px outer container uses system fonts, neutral colours and a single muted green accent. The header has a normal-size name, `AI Product Engineer · Paris`, one factual sentence and a 56px GitHub avatar. Five screenshot cards use short captions and permanently visible, 44px-minimum-height public links. They form two columns on desktop and one on mobile. HomeARt has no invented link. Dripin gets the small joke about organising the clothes on your chair.

Two experience entries provide roles and dates without repeating their bullets. Two native FAQ disclosures retain all answers in the initial HTML, acknowledge that there is no universal perfect hire and question whether a personal website needs an FAQ. The small footer contains `jobs@eliebrosset.com`, GitHub, LinkedIn, X and the homepage's single CV link.

The measured initial homepage body is **216 whitespace-delimited words**, including both collapsed answers, link labels and the skip link. The test budget is 350 words. No content is concealed with CSS to meet this budget. The THREE background, progress bar, floating social dock, oversized hero, interests section and full experience paragraphs are no longer rendered. Their unused component files and dependencies are retained to avoid unrelated cleanup.

## Shared facts and CV maintenance

`constants.ts` is the shared public export model, not the master resume. `Project.cardDescription` is only the concise homepage caption. Keep `description`, `tags`, experience bullets, skills and education detailed: `/resume.html`, `resume.md` and the supplementary llms exports still use those canonical fields. The factual 170M transactions, 33.8k downloads, 25% MAPE improvement and Kynto's unpaid January to August 2026 period remain intact.

Reactive Resume at `https://rxresu.me/eliebrosset/ai-product-engineer-portfolio` remains the canonical hosted CV and PDF destination. `/resume.html` remains a separate indexable, print-friendly static export with its own canonical and metadata. Updating the hosted CV does not automatically update the site's shared data.

`pnpm build` server-renders the same React components that hydrate in the browser. It generates `dist/index.html` and `dist/resume.html`, plus tracked public `resume.md`, `llms.txt`, `llms-full.txt`, `robots.txt` and `sitemap.xml`. Edit shared data and rebuild rather than editing generated text exports independently. The sitemap still contains exactly the homepage and `/resume.html`.

## Identity and search

The avatar is downloaded from the exact source `https://avatars.githubusercontent.com/u/32967983?v=4` and stored locally as `public/avatar-github.png`. GitHub returned JPEG bytes; ffmpeg converted those real downloaded pixels to PNG without inventing or retouching a portrait. Its alt text identifies a GitHub avatar, not an application screenshot. There is no runtime avatar or font CDN request.

Root title, description and social copy match the short introduction. Both pages retain distinct initial metadata and Person, WebSite and ProfilePage JSON-LD. No FAQPage markup or rich-result promise is included. `og-personal-v2.png` is the versioned 1200 x 630 social card; its adjacent SVG is the editable source. `pnpm social:image` regenerates it using the existing resvg dependency and local DejaVu Sans font. Existing screenshots, favicon and legacy assets are retained.

`llms.txt` and `llms-full.txt` are supplementary readable exports, not ranking guarantees or instructions to bots. Search engines decide snippets, indexing and AI citations independently. Reference guidance:

- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/updates#removing-faq-rich-result

## Verification

Three vertical test-first slices were exercised: compact body/cards/FAQ, local small avatar, then matching metadata/social card. Each failed on the previous built output before implementation and passed after rebuilding. The first slice measured the old body at 916 words and five FAQ answers.

Final executed checks:

- `pnpm social:image`: generated the new social PNG.
- `pnpm exec tsc --noEmit`: passed.
- `pnpm build`: passed; both static HTML documents generated.
- `pnpm test`: all 11 tests passed, including the public-email and full ChartGPT screenshot regressions.
- `git diff --check`: passed.
- Googlebot-user-agent HTTP requests through the existing preview at `http://127.0.0.1:4838`: homepage and CV both returned 200 and exactly matched the built files. The homepage response contained all five cards, two answers and one canonical hosted-CV link before any JavaScript execution.
- Avatar and social-card image inspection: valid avatar; social text is unclipped and matches the new identity/copy.

Tests cover the homepage budget and links, avatar dimensions/alt/asset, no-JavaScript FAQ and anchor content, route-specific metadata, JSON-LD, full CV facts, consistent detailed text exports, sitemap/robots, screenshot assets, print CSS and absence of stale public email or em dashes.

The existing preview is reused; no new server was started. The revised page passed seven Chromium browser cases: desktop 1440px, mobile 390px/320px, root/CV and JavaScript enabled/disabled. No hydration/page errors, failed requests, broken images or horizontal overflow; FAQ mouse/keyboard toggling passed. Actual desktop/mobile and social-card screenshots were inspected. ChartGPT now uses `object-fit: contain` so its full title and chart remain visible. User approval is still required before publication.
