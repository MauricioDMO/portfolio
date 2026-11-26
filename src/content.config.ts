import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const identifier = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const text = z.string().trim().min(1);
const locale = z.enum(['es', 'en']);
const date = z.union([z.iso.date(), z.date()]).transform((value) =>
  typeof value === 'string' ? new Date(`${value}T00:00:00Z`) : value
);
const loader = (base: string) => glob({
  base,
  pattern: '**/*.md',
  generateId: ({ entry }) => entry.replace(/\.md$/, ''),
});

const projects = defineCollection({
  loader: loader('./src/content/projects'),
  schema: ({ image }) => z.object({
    id: identifier,
    locale,
    slug: identifier,
    title: text,
    description: text,
    category: z.enum(['business-software', 'developer-tools', 'infrastructure', 'experiments']),
    status: z.enum(['production', 'in-development', 'experimental', 'completed', 'archived']).optional(),
    featuredOrder: z.number().int().nonnegative().optional(),
    draft: z.boolean().default(true),
    technologies: z.array(text).default([]),
    eyebrow: text.optional(),
    icon: text.optional(),
    summary: text.optional(),
    intro: text.optional(),
    navigationLabels: z.array(text).default([]),
    impact: z.array(text).default([]),
    gallery: z.array(z.object({
      src: z.string().regex(/^\/projects\/[a-zA-Z0-9_./-]+\.(?:webp|png|jpe?g|avif)$/)
        .refine((value) => !value.split('/').includes('..'), 'Invalid image path'),
      alt: text,
    })).default([]),
    cover: image().nullish(),
    coverAlt: text.nullish(),
    repository: z.url().nullish(),
    website: z.url().nullish(),
    openSource: z.boolean().optional(),
  }).refine((data) => !data.cover || !!data.coverAlt, {
    message: 'coverAlt is required when a cover image is supplied',
    path: ['coverAlt'],
  }),
});

const blog = defineCollection({
  loader: loader('./src/content/blog'),
  schema: ({ image }) => z.object({
    id: identifier,
    locale,
    slug: identifier,
    title: text,
    description: text,
    category: z.enum(['tutorials', 'engineering', 'experiments', 'insights', 'project-logs']),
    tags: z.array(text).default([]),
    publishedAt: date.nullish(),
    updatedAt: date.nullish(),
    draft: z.boolean().default(true),
    cover: image().nullish(),
    coverAlt: text.nullish(),
  }).superRefine((data, ctx) => {
    if (data.cover && !data.coverAlt) {
      ctx.addIssue({ code: 'custom', path: ['coverAlt'], message: 'coverAlt is required when a cover image is supplied' });
    }
    if (!data.draft && !data.publishedAt) {
      ctx.addIssue({ code: 'custom', path: ['publishedAt'], message: 'publishedAt is required for published posts' });
    }
    if (data.updatedAt && data.publishedAt && data.updatedAt < data.publishedAt) {
      ctx.addIssue({ code: 'custom', path: ['updatedAt'], message: 'updatedAt must not precede publishedAt' });
    }
  }),
});

export const collections = { projects, blog };
