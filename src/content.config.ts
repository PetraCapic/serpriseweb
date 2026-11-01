import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Članci bloga: jedna .md datoteka po članku u src/content/blog/. Ime datoteke je URL (/blog/ime-datoteke/).
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default('Jure Kljajić'),
    // Slika iz public/ (npr. /blog/ime-clanka/naslovna.png), koristi se za og:image i na vrhu članka.
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
    // Pillar/hub članci: teme (schema "about"), članci clustera (schema "hasPart", slugovi) i FAQ (FAQPage + vidljiv blok na dnu).
    about: z.array(z.object({ name: z.string(), sameAs: z.string().url().optional() })).optional(),
    hasPart: z.array(z.string()).optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
    // Izvori na dnu članka (vidljiv popis + schema "citation").
    sources: z.array(z.object({ name: z.string(), url: z.string().url() })).optional(),
  }),
});

export const collections = { blog };
