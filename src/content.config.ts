import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Blog članci su Markdown datoteke u src/content/blog/. Naziv datoteke je URL (slug).
// Datoteke koje počinju s "_" (npr. _predlozak.md) se ne objavljuju.
const blog = defineCollection({
  loader: glob({ pattern: '[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().max(170),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Jure Kljajić'),
    keyword: z.string().optional(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
