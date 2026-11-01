// Spaja dijelove vodiča u jedan HTML i radi PDF u public/vodic/.
// Pokretanje: node vodic/llm-vidljivost/build.mjs (treba Playwright s Chromiumom).
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const dir = dirname(fileURLToPath(import.meta.url));
const parts = readdirSync(dir).filter((f) => /^\d\d-.*\.html$/.test(f)).sort();
const html = parts.map((f) => readFileSync(join(dir, f), 'utf8')).join('\n');
const full = join(dir, 'vodic.html');
writeFileSync(full, html);

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const out = process.argv[2] ?? join(dir, '../../public/vodic/llm-vidljivost-hrvatska.pdf');
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('file://' + full, { waitUntil: 'networkidle' });
await page.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true });
await browser.close();
console.log('PDF:', out);
