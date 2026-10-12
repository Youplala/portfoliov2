import { build, createServer } from 'vite';
import { readFile, writeFile } from 'node:fs/promises';

// Keep React's server and browser builds in production mode. Vite's dev loader
// otherwise sets NODE_ENV=development before the client build starts.
process.env.NODE_ENV = 'production';

// Render the same components the browser hydrates, with no browser globals needed.
const server = await createServer({ mode: 'production', server: { middlewareMode: true }, appType: 'custom' });
let pages;
try {
  const { renderPage, textExports } = await server.ssrLoadModule('/scripts/render.tsx');
  pages = { 'index.html': renderPage(), 'resume.html': renderPage(true) };
  for (const [name, content] of Object.entries(textExports())) {
    await writeFile(new URL(`../public/${name}`, import.meta.url), content);
  }
} finally { await server.close(); }
await build();
const template = await readFile('dist/index.html', 'utf8');
for (const [name, { head, body }] of Object.entries(pages)) {
  const html = template.replace('<!--page-head-->', head).replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  await writeFile(`dist/${name}`, html);
  console.log(`Prerendered dist/${name} (${Buffer.byteLength(html)} bytes)`);
}
