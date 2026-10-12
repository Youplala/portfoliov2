import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { parse } from 'parse5';
function walk(node, tag) { return [...(node.tagName === tag ? [node] : []), ...(node.childNodes ?? []).flatMap(n => walk(n, tag))]; }
const attr = (n, k) => n.attrs?.find(a => a.name === k)?.value;
test('public portfolio contact and text exports use jobs@eliebrosset.com', async () => {
 for (const file of ['index.html', 'resume.html']) {
  const html = await readFile(`dist/${file}`, 'utf8');
  assert.ok(walk(parse(html), 'a').some(a => attr(a, 'href') === 'mailto:jobs@eliebrosset.com'), file);
  assert.ok(!html.includes('eliebrosset@gmail.com'), file);
 }
 for (const file of ['resume.md', 'llms.txt', 'llms-full.txt']) {
  const txt=await readFile(`dist/${file}`, 'utf8');
  assert.ok(!txt.includes('eliebrosset@gmail.com'),file);
 }
});
