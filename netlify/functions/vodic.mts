import nodemailer from 'nodemailer';
import type { Config } from '@netlify/functions';

// Šalje besplatni vodič na e-mail nakon što je forma na /vodic-llm-vidljivost/ upisala lead u Supabase.
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
  const link = `${origin}${PDF_PATH}?utm_source=email&utm_medium=vodic&utm_campaign=llm-vidljivost`;
  const port = Number(SMTP_PORT ?? 465);
  const transport = nodemailer.createTransport({ host: SMTP_HOST, port, secure: port === 465, auth: { user: SMTP_USER, pass: SMTP_PASS } });

  const text = `Pozdrav ${firstName},

hvala što ste preuzeli vodič "Kako povećati svoju LLM vidljivost u Hrvatskoj".

Vodič (PDF, 28 stranica) preuzmite ovdje:
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
