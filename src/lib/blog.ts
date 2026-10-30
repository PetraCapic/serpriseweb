import { getCollection } from 'astro:content';

// Objavljeni članci, najnoviji prvi. Članci s draft: true ili datumom u budućnosti se ne prikazuju.
export const getPosts = async () =>
  (await getCollection('blog', ({ data }) => !data.draft && data.date <= new Date())).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

export const formatDate = (d: Date) =>
  d.toLocaleDateString('hr-HR', { day: 'numeric', month: 'long', year: 'numeric' });

// Okvirno vrijeme čitanja (200 riječi u minuti).
export const readingTime = (body = '') => Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / 200));
