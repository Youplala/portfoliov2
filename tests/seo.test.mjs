import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { parse } from 'parse5';

const origin = 'https://eliebrosset.com';
const canonicalCV = 'https://rxresu.me/eliebrosset/ai-product-engineer-portfolio';
const read = name => readFile(`dist/${name}`, 'utf8');
const rootHTML = await read('index.html');
const cvHTML = await read('resume.html');
function nodes(node, tag) {
  return [...(node.tagName === tag ? [node] : []), ...(node.childNodes ?? []).flatMap(child => nodes(child, tag))];
}
function attr(node, key) { return node.attrs?.find(a => a.name === key)?.value; }
function text(node) { return (node.nodeName === '#text' ? node.value : '') + (node.childNodes ?? []).map(text).join(''); }
const root = parse(rootHTML), cv = parse(cvHTML);
const meta = (doc, key) => nodes(doc, 'meta').find(n => attr(n, 'name') === key || attr(n, 'property') === key);
const canonical = doc => attr(nodes(doc, 'link').find(n => attr(n, 'rel') === 'canonical'), 'href');

for (const [label, doc, html, url] of [['portfolio', root, rootHTML, origin + '/'], ['CV', cv, cvHTML, origin + '/resume.html']]) {
  test(`${label}: complete initial content, unique metadata and truthful structured data`, () => {
    assert.equal(attr(nodes(doc, 'html')[0], 'lang'), 'en');
    assert.equal(nodes(doc, 'title').length, 1);
    assert.match(text(nodes(doc, 'title')[0]), /Elie Brosset.*AI Product Engineer/);
    assert.equal(canonical(doc), url);
    assert.ok(attr(meta(doc, 'description'), 'content').length > 70);
    assert.equal(attr(meta(doc, 'og:url'), 'content'), url);
    for (const prefix of ['og', 'twitter']) {
      assert.equal(attr(meta(doc, `${prefix}:title`), 'content'), text(nodes(doc, 'title')[0]));
      assert.equal(attr(meta(doc, `${prefix}:description`), 'content'), attr(meta(doc, 'description'), 'content'));
      assert.equal(attr(meta(doc, `${prefix}:image`), 'content'), origin + '/og-personal-v2.png');
      assert.match(attr(meta(doc, `${prefix}:image:alt`), 'content'), /Elie Brosset/);
    }
    assert.equal(attr(meta(doc, 'twitter:card'), 'content'), 'summary_large_image');
    assert.equal(nodes(doc, 'h1').length, 1);
    const main = nodes(doc, 'main')[0];
    if (label === 'CV') for (const fact of ['170M', '33.8k', 'Data Science Intern', 'unpaid', 'January to August 2026', 'Pierre Fabre', 'MAPE by 25%']) assert.ok(text(main).includes(fact), fact);
    assert.doesNotMatch(html, /—|25k\+|FAQPage|importmap|cdn\.tailwindcss|GEMINI_API_KEY/);
    assert.doesNotMatch(html, /style="[^"]*(?:opacity:\s*0(?:;|"|$)|visibility:\s*hidden|display:\s*none)/);
    assert.ok(nodes(doc, 'a').every(a => !/\.docx(?:$|[?#])/i.test(attr(a, 'href') ?? '')));
    assert.equal(nodes(doc, 'div').filter(n => attr(n, 'id') === 'root').length, 1);
    const json = nodes(doc, 'script').filter(n => attr(n, 'type') === 'application/ld+json');
    assert.equal(json.length, 1);
    const graph = JSON.parse(text(json[0]));
    assert.equal(graph['@context'], 'https://schema.org');
    assert.deepEqual(graph['@graph'].map(n => n['@type']), ['Person', 'WebSite', 'ProfilePage']);
    const [person, site, page] = graph['@graph'];
    assert.equal(person.name, 'Elie Brosset');
    assert.equal(person.jobTitle, 'AI Product Engineer');
    assert.equal(person.subjectOf['@id'], origin + '/resume.html#profile');
    assert.deepEqual(person.sameAs, ['https://github.com/youplala', 'https://linkedin.com/in/eliebrosset', 'https://x.com/eliebrosset']);
    assert.equal(site.url, origin + '/');
    assert.equal(page.url, url);
    assert.equal(page.mainEntity['@id'], person['@id']);
  });
}

test('root and CV have distinct metadata; navigation and FAQ work without JS', () => {
  assert.notEqual(text(nodes(root, 'title')[0]), text(nodes(cv, 'title')[0]));
  assert.notEqual(attr(meta(root, 'description'), 'content'), attr(meta(cv, 'description'), 'content'));
  const details = nodes(root, 'details');
  assert.equal(details.length, 2);
  assert.equal(text(nodes(details[0], 'summary')[0]), 'Why is Elie the perfect hire?');
  assert.match(text(details[0]), /no universal perfect hire/);
  assert.match(text(details[1]), /every website/);
  for (const item of details) assert.ok(text(nodes(item, 'p')[0]).trim().split(/\s+/).length <= 50);
  assert.equal(nodes(root, 'a').filter(n => attr(n, 'href') === canonicalCV).length, 1);
  const ids = [...nodes(root, 'section'), ...nodes(root, 'main'), ...nodes(root, 'footer'), ...nodes(root, 'div')].map(n => attr(n, 'id'));
  for (const a of nodes(root, 'a')) if (attr(a, 'href')?.startsWith('#')) assert.ok(ids.includes(attr(a, 'href').slice(1)));
  assert.ok(nodes(cv, 'a').some(n => attr(n, 'href') === '/'));
  assert.ok(nodes(cv, 'a').some(n => attr(n, 'href') === 'mailto:jobs@eliebrosset.com'));
});

test('homepage is a compact introduction with five complete, crawlable project cards', () => {
  const visibleText = node => ['script', 'style'].includes(node.tagName) ? '' :
    (node.nodeName === '#text' ? node.value : '') + (node.childNodes ?? []).map(visibleText).join(' ');
  const words = visibleText(nodes(root, 'body')[0]).trim().split(/\s+/).length;
  assert.ok(words <= 350, `Homepage has ${words} words, including collapsed answers`);
  assert.equal(text(nodes(root, 'h1')[0]), 'Elie Brosset');
  assert.ok(text(nodes(root, 'main')[0]).includes('AI Product Engineer · Paris'));
  assert.equal(nodes(root, 'canvas').length, 0);
  assert.doesNotMatch(rootHTML, /min-h-screen|fixed top-0|SOCIAL DOCK|group-hover|font-serif/);
  const cards = nodes(root, 'article').filter(n => attr(n, 'id')?.startsWith('project-'));
  assert.deepEqual(cards.map(n => text(nodes(n, 'h3')[0])), ['Dripin', 'Paris GO', 'HomeARt', 'Kynto', 'ChartGPT']);
  const expectedLinks = [
    ['https://apps.apple.com/fr/app/dripin-dressing-styliste-ia/id6788119955', 'https://dripin.app'],
    ['https://github.com/Youplala/reprise'], [], ['https://kyntoai.com'],
    ['https://chartgpt.brosset.li/', 'https://github.com/Youplala/chartgpt']
  ];
  cards.forEach((card, i) => {
    const descriptionWords = text(nodes(card, 'p')[0]).trim().split(/\s+/).length;
    assert.ok(descriptionWords >= 12 && descriptionWords <= 25);
    assert.equal(nodes(card, 'img').length, 1);
    assert.deepEqual(nodes(card, 'a').map(a => attr(a, 'href')), expectedLinks[i]);
  });
  assert.match(text(nodes(root, 'main')[0]), /Advanced Schema.*2023.*Humanitics.ai.*2022/s);
});

test('homepage uses a small local GitHub avatar, separate from project screenshots', async () => {
  const avatar = nodes(root, 'img').find(img => attr(img, 'src') === '/avatar-github.png');
  assert.ok(avatar, 'GitHub avatar must be in the initial HTML');
  assert.equal(attr(avatar, 'alt'), 'Elie Brosset GitHub avatar');
  assert.equal(attr(avatar, 'width'), '56');
  assert.equal(attr(avatar, 'height'), '56');
  const png = await readFile('dist/avatar-github.png');
  assert.equal(png.subarray(1, 4).toString(), 'PNG');
  assert.ok(png.readUInt32BE(16) > 0);
  assert.doesNotMatch(rootHTML, /fonts\.googleapis|fonts\.gstatic/);
});

test('homepage metadata and social card match its short introduction', async () => {
  assert.equal(text(nodes(root, 'title')[0]), 'Elie Brosset | AI Product Engineer · Paris');
  assert.equal(attr(meta(root, 'description'), 'content'), 'Elie Brosset, AI Product Engineer in Paris. I build apps, backend systems and applied AI products. Selected projects, experience and contact.');
  assert.equal(attr(meta(root, 'og:image:alt'), 'content'), 'Elie Brosset. AI Product Engineer · Paris. Apps, backend systems and applied AI products.');
  const socialSVG = await read('og-personal-v2.svg');
  assert.match(socialSVG, /AI Product Engineer · Paris/);
  assert.match(socialSVG, /Apps, backend systems/);
  assert.doesNotMatch(socialSVG, /things I care about|I'm Elie|Clothes\./);
});

test('text exports agree with public content and contain only current CV links', async () => {
  for (const file of ['llms.txt', 'llms-full.txt', 'resume.md']) {
    const content = await read(file);
    assert.match(content, /33\.8k downloads/);
    assert.match(content, /170M transactions/);
    assert.match(content, /Data Science Intern/);
    assert.match(content, /unpaid, part-time/);
    assert.match(content, /January to August 2026/);
    assert.match(content, /MAPE by 25%/);
    if (file !== 'llms.txt') for (const detail of ['MinIO', 'SwiftUI', 'ARKit', 'Vertex AI', 'Stack:']) assert.ok(content.includes(detail), `${file}: ${detail}`);
    assert.ok(content.includes(origin + '/resume.html'));
    assert.ok(content.includes(canonicalCV));
    assert.doesNotMatch(content, /25k\+|—|\.docx|localhost|vercel\.app|25% model accuracy/);
    if (file.startsWith('llms')) {
      for (const detail of nodes(root, 'details')) {
        assert.ok(content.includes(text(nodes(detail, 'summary')[0])));
        const answer = text(nodes(detail, 'p')[0]).split(' Read my CV')[0];
        assert.ok(content.includes(answer));
      }
    }
    assert.equal(content, await readFile(`public/${file}`, 'utf8'));
  }
});

test('sitemap and robots use only production pages, without invented lastmod dates', async () => {
  const sitemap = await read('sitemap.xml');
  assert.match(sitemap, /xmlns="http:\/\/www.sitemaps.org\/schemas\/sitemap\/0.9"/);
  assert.doesNotMatch(sitemap, /lastmod/);
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => new URL(m[1]).href);
  assert.deepEqual(urls, [canonical(root), canonical(cv)]);
  const robots = await read('robots.txt');
  assert.match(robots, /User-agent: \*\nAllow: \/\n/);
  assert.ok(robots.includes('Sitemap: ' + origin + '/sitemap.xml'));
  assert.doesNotMatch(robots, /Disallow:/);
});

test('ChartGPT preview preserves the full screenshot instead of cropping its title and chart', async () => {
  const img = nodes(root, 'img').find(n => attr(n, 'alt') === 'ChartGPT application screenshot');
  assert.equal(attr(img, 'class'), 'project-preview-contain');
  const styles = nodes(root, 'link').find(n => attr(n, 'rel') === 'stylesheet');
  const css = await read(attr(styles, 'href').slice(1));
  const sheet = (await import('postcss')).default.parse(css);
  let fit;
  sheet.walkRules('.project-card img.project-preview-contain', rule => rule.walkDecls('object-fit', declaration => { fit = declaration.value; }));
  assert.equal(fit, 'contain');
});

test('local styles, print CV, project images and social card exist in the build', async () => {
  for (const doc of [root, cv]) {
    const styles = nodes(doc, 'link').filter(n => attr(n, 'rel') === 'stylesheet').map(n => attr(n, 'href')).filter(href => href.startsWith('/'));
    assert.equal(styles.length, 1);
    const css = await read(styles[0].slice(1));
    assert.match(css, /@media print/);
    assert.match(css, /@page/);
    assert.match(css, /break-inside:avoid/);
    assert.match(css, /\.resume-nav/);
    assert.match(css, /prefers-reduced-motion/);
  }
  const screenshots = nodes(root, 'img').filter(img => /application screenshot/.test(attr(img, 'alt')));
  assert.equal(screenshots.length, 5);
  for (const img of screenshots) {
    assert.match(attr(img, 'alt'), /application screenshot/);
    await access(`dist${attr(img, 'src')}`);
  }
  const png = await readFile('dist/og-personal-v2.png');
  assert.equal(png.readUInt32BE(16), 1200);
  assert.equal(png.readUInt32BE(20), 630);
  await access('dist/favicon.svg');
});
