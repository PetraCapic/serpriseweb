// Spaja dijelove vodiča u jedan HTML i radi PDF u public/vodic/.
// Pokretanje: NODE_PATH=$(npm root -g) node vodic/llm-vidljivost/build.mjs (treba Playwright s Chromiumom).
// Citati: u HTML-u pišite [@kljuc] ili [@kljuc1,kljuc2] (ključevi u sources.mjs).
// Brojevi se dodjeljuju redom prvog pojavljivanja, a popis se upisuje na mjesto <!--IZVORI-->.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { sources } from './sources.mjs';

const dir = dirname(fileURLToPath(import.meta.url));
const parts = readdirSync(dir).filter((f) => /^\d\d-.*\.html$/.test(f)).sort();
let html = parts.map((f) => readFileSync(join(dir, f), 'utf8')).join('\n');

const order = [];
html = html.replace(/\[@([a-z0-9,\s-]+)\]/g, (_, keys) =>
  keys
    .split(',')
    .map((k) => k.trim())
    .map((k) => {
      if (!sources[k]) throw new Error(`Nepoznat izvor: ${k}`);
      if (!order.includes(k)) order.push(k);
      const n = order.indexOf(k) + 1;
      return `<a class="c" href="#i${n}">[${n}]</a>`;
    })
    .join(''),
);
const unused = Object.keys(sources).filter((k) => !order.includes(k));
if (unused.length) console.warn('Izvori bez citata (nisu na popisu):', unused.join(', '));

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const list = order
  .map((k, i) => {
    const s = sources[k];
    const link = s.url
      ? `<br><a href="${s.url}">${esc(s.url.replace(/^https?:\/\//, ''))}</a>`
      : '<br><span class="muted">Interni zapis, dostupan na upit.</span>';
    return `<li id="i${i + 1}"><b>[${i + 1}]</b> ${esc(s.org)}: <i>${esc(s.title)}</i>${/[?!.]$/.test(s.title) ? '' : '.'} ${esc(s.note)}${link}</li>`;
  })
  .join('\n');
if (!html.includes('<!--IZVORI-->')) throw new Error('Nedostaje <!--IZVORI--> oznaka');
html = html.replace('<!--IZVORI-->', `<ol class="sources">\n${list}\n</ol>`);

const full = join(dir, 'vodic.html');
writeFileSync(full, html);

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const out = process.argv[2] ?? join(dir, '../../public/vodic/llm-vidljivost-hrvatska.pdf');
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('file://' + full, { waitUntil: 'networkidle' });
await page.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true, outline: true, tagged: true });
await browser.close();
console.log(`PDF: ${out} (${order.length} izvora)`);
