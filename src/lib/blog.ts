import { getCollection } from 'astro:content';

// Objavljeni članci, najnoviji prvi. Nacrti (draft: true) se ne prikazuju.
export const getPosts = async () =>
  (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );

export const formatDate = (date: Date) =>
  date.toLocaleDateString('hr-HR', { day: 'numeric', month: 'long', year: 'numeric' });

// Okvirno vrijeme čitanja uz 200 riječi u minuti.
export const readingMinutes = (body = '') => Math.max(1, Math.round(body.trim().split(/\s+/).length / 200));
