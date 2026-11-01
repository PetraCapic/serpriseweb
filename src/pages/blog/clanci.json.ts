import type { APIRoute } from 'astro';
import { getPosts, readingTime } from '../../lib/blog';
import { site } from '../../lib/site';

// Popis objavljenih članaka za interni SEO dashboard na admin.serprise.agency (čita ga pri svakom otvaranju).
export const GET: APIRoute = async () => {
  const posts = (await getPosts()).map((post) => ({
    slug: post.id,
    url: `${site.url}/blog/${post.id}/`,
    title: post.data.title,
    description: post.data.description,
    date: post.data.date.toISOString().slice(0, 10),
    updated: post.data.updated ? post.data.updated.toISOString().slice(0, 10) : null,
    author: post.data.author,
    words: (post.body ?? '').split(/\s+/).filter(Boolean).length,
    readingMinutes: readingTime(post.body),
  }));
  return new Response(JSON.stringify({ generatedAt: new Date().toISOString(), posts }, null, 2), {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
};
