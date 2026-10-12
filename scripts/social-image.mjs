import { readFile, writeFile } from 'node:fs/promises';
import { Resvg } from '@resvg/resvg-js';
// Regenerate only when the headline changes; inspect the PNG before publishing.
const svg = await readFile('public/og-personal-v2.svg', 'utf8');
const renderer = new Resvg(svg, { font: { defaultFontFamily: 'DejaVu Sans' } });
await writeFile('public/og-personal-v2.png', renderer.render().asPng());
