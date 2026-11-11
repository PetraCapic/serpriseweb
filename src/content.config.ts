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
    // Jezik članka. Engleski članci nisu na hrvatskom popisu /blog/, nego na /en/blog/.
    lang: z.enum(['hr', 'en']).default('hr'),
    // Vlastiti URL (npr. stari URL s WordPress weba koji ima promet i linkove), umjesto /blog/<ime-datoteke>/.
    path: z.string().regex(/^\/.+\/$/).optional(),
    // Ime datoteke istog članka na drugom jeziku (hreflang i prekidač HR/EN).
    translation: z.string().optional(),
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
    // Pillar/hub članci: teme (schema "about"), članci clustera (schema "hasPart", slugovi) i FAQ (FAQPage + vidljiv blok na dnu).
    about: z.array(z.object({ name: z.string(), sameAs: z.string().url().optional() })).optional(),
    hasPart: z.array(z.string()).optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
    // Izvori na dnu članka (vidljiv popis + schema "citation").
    sources: z.array(z.object({ name: z.string(), url: z.string().url() })).optional(),
    // Koraci za HowTo schemu (isti koraci moraju biti i vidljivi u članku).
    howto: z
      .object({
        name: z.string(),
        steps: z.array(z.string()),
        // Sidro vidljivog postupka u članku (HowToStep url) i trajanje u ISO 8601 (npr. PT45M).
        anchor: z.string().optional(),
        totalTime: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { blog };
