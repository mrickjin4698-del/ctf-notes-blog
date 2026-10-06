import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    category: z.string().optional(),
    platform: z.string().optional(),
    status: z.string().optional(),
    sourceTitle: z.string().optional(),
    importedAt: z.coerce.date().optional(),
    sample: z.boolean().default(false),
    sequence: z.number().int().default(0),
  }),
});

const snippets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/snippets' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    language: z.string(),
    noteRef: z.string().optional(),
    sourceTitle: z.string().optional(),
  }),
});

export const collections = { notes, snippets };
