import { getCollection } from 'astro:content';

// Objavljeni članci, najnoviji prvi. Članci s draft: true ili datumom u budućnosti se ne prikazuju.
// Zadano samo hrvatski članci (popis /blog/, izbornik, sitemap bloga); 'all' za sve jezike.
export const getPosts = async (lang: 'hr' | 'en' | 'all' = 'hr') =>
  (
    await getCollection(
      'blog',
      ({ data }) => !data.draft && data.date <= new Date() && (lang === 'all' || data.lang === lang),
    )
  ).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

type Post = Awaited<ReturnType<typeof getPosts>>[number];

// URL članka: vlastiti path iz frontmattera ili /blog/<ime-datoteke>/.
export const postUrl = (post: Post) => post.data.path ?? `/blog/${post.id}/`;

export const formatDate = (d: Date, lang: 'hr' | 'en' = 'hr') =>
  d.toLocaleDateString(lang === 'en' ? 'en-GB' : 'hr-HR', { day: 'numeric', month: 'long', year: 'numeric' });

// Okvirno vrijeme čitanja (200 riječi u minuti).
export const readingTime = (body = '') => Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / 200));
