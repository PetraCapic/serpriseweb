// Snima portali-video.html kadar po kadar i slaže MP4. node render.cjs [visina=1350]
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs'), path = require('path');
(async () => {
  const H = +(process.argv[2] || 1350), FPS = 30, DUR = 17.8;
  const only = process.argv[3]; // "shots" = samo kontrolne slike
  const dir = path.join(__dirname, 'frames-' + H); fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir);
  const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 1080, height: H }, deviceScaleFactor: 1 });
  await pg.goto('file://' + path.join(__dirname, 'portali-video.html') + '?t=0'); await pg.evaluate(() => document.fonts.ready);
  if (only === 'shots') {
    for (const t of process.argv.slice(4)) { await pg.evaluate(t => seek(t), +t); await pg.screenshot({ path: path.join(dir, `shot-${t}.png`) }); }
    await b.close(); return;
  }
  const n = Math.round(DUR * FPS);
  for (let i = 0; i < n; i++) { await pg.evaluate(t => seek(t), i * 1000 / FPS); await pg.screenshot({ path: path.join(dir, String(i).padStart(4, '0') + '.png') }); }
  await b.close();
  const out = path.join(__dirname, `serprise-portali-${H === 1350 ? '4x5' : '9x16'}.mp4`);
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', FPS, '-i', path.join(dir, '%04d.png'), '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '17', '-preset', 'slow', '-movflags', '+faststart', out]);
  fs.rmSync(dir, { recursive: true, force: true }); console.log(out);
})();
