import nodemailer from 'nodemailer';
import type { Config } from '@netlify/functions';
import kviz from '../../src/data/ai-kviz.json';

// Šalje besplatni vodič na e-mail nakon što je forma na /vodic-llm-vidljivost/ upisala lead u Supabase.
// S kind: 'kviz' šalje rezultat kviza "Koliko ste spremni za AI odgovore?" (/blog/llm-vidljivost/).
// Ocjene i korake računa ovdje iz src/data/ai-kviz.json, iz preglednika dolaze samo odgovori da/ne.
// Treba Netlify varijable (scope: Functions): SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, opcionalno SMTP_FROM.
// Dok SMTP nije postavljen vraća { sent: false }, a stranica tada odmah pokaže link za preuzimanje.

const PDF_PATH = '/vodic/llm-vidljivost-hrvatska.pdf';
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export default async (req: Request) => {
  if (req.method !== 'POST') return json({ error: 'method' }, 405);
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: 'json' }, 400);
  }
  const email = String(body.email ?? '').trim();
  const firstName = String(body.firstName ?? '').trim().slice(0, 60);
  if (!EMAIL_RE.test(email) || email.length > 200 || firstName.length < 1) return json({ error: 'input' }, 400);
  // Zamka za botove (isto polje kao na kontakt formi)
  if (body.fax) return json({ sent: true });

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return json({ sent: false, reason: 'smtp' });

  const origin = new URL(req.url).origin;
  const transportFor = () => {
    const port = Number(SMTP_PORT ?? 465);
    return nodemailer.createTransport({ host: SMTP_HOST, port, secure: port === 465, auth: { user: SMTP_USER, pass: SMTP_PASS } });
  };

  if (body.kind === 'kviz') {
    const raw = (body.answers ?? {}) as Record<string, unknown>;
    const yes = (id: string) => raw[id] === true;
    const scores = kviz.pillars.map((p) => {
      const qs = kviz.questions.filter((q) => q.pillar === p.id);
      return { ...p, score: Math.round((qs.filter((q) => yes(q.id)).length / qs.length) * 100) };
    });
    const total = Math.round((kviz.questions.filter((q) => yes(q.id)).length / kviz.questions.length) * 100);
    const steps = kviz.questions.filter((q) => !yes(q.id)).sort((a, b) => a.priority - b.priority).slice(0, 3);
    const url = (path: string) => `${origin}${path}${path.includes('#') ? '' : '?utm_source=email&utm_medium=kviz&utm_campaign=ai-kviz'}`;
    const text = `Pozdrav ${firstName},

vaš rezultat kviza "Koliko ste spremni za AI odgovore?": ${total}/100.

${scores.map((s) => `${s.name}: ${s.score}/100`).join('\n')}

Tri najvažnija sljedeća koraka:
${steps.length ? steps.map((s, i) => `${i + 1}. ${s.step}\n   ${url(s.link)}`).join('\n') : 'Na sva pitanja ste odgovorili s da. Mjerite svaki mjesec i pratite koga ChatGPT citira umjesto vas.'}

Cijeli vodič: ${origin}/blog/llm-vidljivost/

Ako želite da isti test napravimo s pitanjima vaših kupaca, samo odgovorite na ovaj e-mail.

Jure Kljajić
SERPRise · serprise.agency`;
    const html = `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#102b43;max-width:560px">
<p>Pozdrav ${esc(firstName)},</p>
<p>vaš rezultat kviza <b>„Koliko ste spremni za AI odgovore?"</b>: <b style="font-size:20px">${total}/100</b></p>
<table style="border-collapse:collapse;margin:8px 0 16px">${scores.map((s) => `<tr><td style="padding:4px 16px 4px 0">${esc(s.name)}</td><td style="padding:4px 0"><b>${s.score}</b>/100</td></tr>`).join('')}</table>
<p><b>Tri najvažnija sljedeća koraka</b></p>
${steps.length ? `<ol>${steps.map((s) => `<li style="margin-bottom:8px">${esc(s.step)}<br><a href="${url(s.link)}" style="color:#ba2525">${esc(s.linkText)}</a></li>`).join('')}</ol>` : '<p>Na sva pitanja ste odgovorili s da. Mjerite svaki mjesec i pratite koga ChatGPT citira umjesto vas.</p>'}
<p>Ako želite da isti test napravimo s pitanjima vaših kupaca, samo odgovorite na ovaj e-mail.</p>
<p>Jure Kljajić<br>SERPRise · <a href="${origin}" style="color:#ba2525">serprise.agency</a></p>
</div>`;
    try {
      await transportFor().sendMail({
        from: SMTP_FROM || `Jure Kljajić, SERPRise <${SMTP_USER}>`,
        to: email,
        subject: `Vaš rezultat: ${total}/100 za AI vidljivost`,
        text,
        html,
      });
      return json({ sent: true });
    } catch (e) {
      console.error('kviz mail', e);
      return json({ sent: false, reason: 'send' });
    }
  }

  const link = `${origin}${PDF_PATH}?utm_source=email&utm_medium=vodic&utm_campaign=llm-vidljivost`;
  const transport = transportFor();

  const text = `Pozdrav ${firstName},

hvala što ste preuzeli vodič "Kako povećati svoju LLM vidljivost u Hrvatskoj".

Vodič (PDF, 33 stranice) preuzmite ovdje:
${link}

Ako želite da za vaša pitanja napravimo Korake 2 i 3 iz vodiča (tko je citiran umjesto vas i gdje ste vi), samo odgovorite na ovaj e-mail.

Jure Kljajić
SERPRise · serprise.agency`;

  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#102b43;max-width:560px">
<p>Pozdrav ${esc(firstName)},</p>
<p>hvala što ste preuzeli vodič <b>„Kako povećati svoju LLM vidljivost u Hrvatskoj"</b>.</p>
<p><a href="${link}" style="display:inline-block;background:#ba2525;color:#fff;text-decoration:none;padding:12px 20px;border-radius:6px;font-weight:bold">Preuzmite vodič (PDF)</a></p>
<p>U vodiču je 9 koraka: od izbora pitanja i besplatnih imenika do objava na portalima, praćenja i mjerenja.</p>
<p>Ako želite da za vaša pitanja napravimo Korake 2 i 3 (tko je citiran umjesto vas i gdje ste vi), samo odgovorite na ovaj e-mail.</p>
<p>Jure Kljajić<br>SERPRise · <a href="${origin}" style="color:#ba2525">serprise.agency</a></p>
</div>`;

  try {
    await transport.sendMail({
      from: SMTP_FROM || `Jure Kljajić, SERPRise <${SMTP_USER}>`,
      to: email,
      subject: 'Vaš vodič: Kako povećati svoju LLM vidljivost u Hrvatskoj',
      text,
      html,
    });
    return json({ sent: true });
  } catch (e) {
    console.error('vodic mail', e);
    return json({ sent: false, reason: 'send' });
  }
};

export const config: Config = { path: '/api/vodic' };
