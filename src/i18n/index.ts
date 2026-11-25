import { enFlat } from './lang/en';
import { esFlat } from './lang/es';
import type { Locale } from './schema';
import { sourceKeys } from './source-keys';

export type { Locale } from './schema';
export type { LanguageDictionary, Section, SectionName } from './schema';

export const locales = ['es', 'en'] as const;
export const defaultLocale: Locale = 'es';

export const localeMeta: Record<
  Locale,
  { lang: string; ogLocale: string; label: string; name: string }
> = {
  es: { lang: 'es', ogLocale: 'es_SV', label: 'ES', name: 'Español' },
  en: { lang: 'en', ogLocale: 'en_US', label: 'EN', name: 'English' },
};

/** Resolve Astro.currentLocale (or any raw locale string) to a supported Locale. */
export function getLocale(currentLocale: string | undefined): Locale {
  return currentLocale === 'en' ? 'en' : defaultLocale;
}

/**
 * Translate a Spanish source string into the requested locale.
 * Spanish is the source of truth: unknown strings pass through unchanged.
 */
export function t(text: string, lang: Locale): string {
  const dict = lang === 'es' ? esFlat : enFlat;
  const key = text in dict ? text : sourceKeys[text];
  return (key && dict[key]) || text;
}

/** Build a locale-aware absolute-site path from a root-relative path. */
export function localizedPath(path: string, lang: Locale): string {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return lang === 'es' ? `/${clean}` : `/en/${clean}`;
}

/** Given the current pathname, produce the equivalent path in another locale. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const bare = pathname.replace(/^\/en(?=\/|$)/, '');
  return localizedPath(bare, target);
}
