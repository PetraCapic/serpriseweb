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
    // Istraživanje s javnim podacima: dodaje Dataset schemu i linkove na CSV datoteke (iz public/).
    dataset: z
      .object({
        name: z.string(),
        description: z.string(),
        measured: z.coerce.date(),
        method: z.string(),
        license: z.string().url(),
        files: z.array(z.object({ name: z.string(), url: z.string() })),
        keywords: z.array(z.string()).default([]),
      })
      .optional(),
    // Česta pitanja za FAQPage schemu (isti tekst mora biti i vidljiv u članku).
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
    // Koraci za HowTo schemu (isti koraci moraju biti i vidljivi u članku).
    howto: z.object({ name: z.string(), steps: z.array(z.string()) }).optional(),
  }),
});

export const collections = { blog };
