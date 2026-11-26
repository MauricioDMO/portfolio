import { getCollection, type CollectionEntry } from 'astro:content';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import type { Locale } from '../i18n';

type ContentKind = 'projects' | 'blog';
type Entry = CollectionEntry<'projects'> | CollectionEntry<'blog'>;
const contentFiles = {
  projects: import.meta.glob('../content/projects/**/*.{md,mdx}'),
  blog: import.meta.glob('../content/blog/**/*.{md,mdx}'),
};

/** Validate relationships before filtering so invalid drafts cannot hide mistakes. */
export function validateEntries(entries: Entry[], kind: ContentKind): void {
  const translations = new Set<string>();
  const slugs = new Set<string>();

  for (const entry of entries) {
    const { id, locale, slug } = entry.data;
    const translation = `${id}:${locale}`;
    const localizedSlug = `${locale}:${slug}`;
    if (entry.id !== `${id}/${locale}`) {
      throw new Error(`${kind}: ${entry.id} must be stored at ${id}/${locale}.md`);
    }
    if (translations.has(translation)) {
      throw new Error(`${kind}: duplicate translation ${translation}`);
    }
    if (slugs.has(localizedSlug)) {
      throw new Error(`${kind}: duplicate slug ${localizedSlug}`);
    }
    if (kind === 'projects' && 'gallery' in entry.data) {
      for (const image of entry.data.gallery) {
        if (!existsSync(join(process.cwd(), 'public', image.src))) {
          throw new Error(`${kind}: image not found: ${image.src}`);
        }
      }
    }
    translations.add(translation);
    slugs.add(localizedSlug);
  }
}

export async function getPublishedEntries(kind: ContentKind, locale: Locale): Promise<Entry[]> {
  if (Object.keys(contentFiles[kind]).length === 0) return [];
  const entries = await getCollection(kind);
  validateEntries(entries, kind);
  return entries.filter(({ data }) => data.locale === locale && !data.draft);
}
