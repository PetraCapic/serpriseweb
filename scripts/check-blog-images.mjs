// Provjera prije builda: engleski i hrvatski članak ne smiju koristiti istu sliku.
// Slike s tekstom rade se posebno za svaki jezik. Slika bez teksta (npr. snimka zaslona
// stranog sučelja) može se dijeliti samo ako je upisana u scripts/shared-images.json.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const dir = 'src/content/blog';
const allow = new Set(JSON.parse(readFileSync('scripts/shared-images.json', 'utf8')));
const used = new Map(); // slika -> { hr: [članci], en: [članci] }
const missing = [];

for (const file of readdirSync(dir).filter((f) => f.endsWith('.md'))) {
  const text = readFileSync(join(dir, file), 'utf8');
  const lang = /^lang:\s*["']?en/m.test(text.split('\n---')[0]) ? 'en' : 'hr';
  const images = new Set(text.match(/\/blog\/[^\s)"']+\.(?:png|jpe?g|webp|gif|svg|avif)/gi) ?? []);
  for (const img of images) {
    if (!existsSync(join('public', img))) missing.push(`${file}: ${img}`);
    if (!used.has(img)) used.set(img, { hr: [], en: [] });
    used.get(img)[lang].push(file);
  }
}

const shared = [...used].filter(([img, u]) => u.hr.length && u.en.length && !allow.has(img));
if (shared.length || missing.length) {
  for (const [img, u] of shared) console.error(`Ista slika u HR i EN članku: ${img}\n  HR: ${u.hr.join(', ')}\n  EN: ${u.en.join(', ')}`);
  for (const m of missing) console.error(`Slika ne postoji: ${m}`);
  console.error('\nNapravite englesku verziju slike ili, ako slika nema teksta, dodajte je u scripts/shared-images.json.');
  process.exit(1);
}
console.log(`Slike bloga: ${used.size} provjereno, nijedna se ne dijeli između jezika.`);
