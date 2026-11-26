/**
 * i18n schema: the section registry and the type contract shared by both languages.
 * Spanish (lang/es) is the source of truth for keys; English (lang/en) must provide
 * the exact same keys, enforced by TypeScript through Localized<T>.
 */

export type Locale = 'es' | 'en';

/** One file per section lives under lang/<locale>/<section>.ts; projects live under lang/<locale>/projects/. */
export const sections = [
  'shared',
  'site',
  'seo',
  'projectPage',
  'hero',
  'about',
  'cv',
  'contact',
  'workflow',
  'stack',
  'projectsSection',
  'projects',
  'components',
] as const;

export type SectionName = (typeof sections)[number];

export type Section = Record<string, string>;
export type TranslationSection = Record<string, string | Record<string, string>>;
export type LanguageDictionary = Record<SectionName, TranslationSection>;

/** Same keys as a section, but values may be any string (the translated copy). */
export type SectionShape<T extends Section> = { [K in keyof T]: string };

/** The full shape an English dictionary must satisfy for a given Spanish dictionary. */
export type Localized<T> = {
  [K in keyof T]: { [P in keyof T[K]]: T[K][P] extends string ? string : { [Q in keyof T[K][P]]: string } };
};

/** English project files mirror the Spanish project keys. */
export type LocalizedProjects<T> = {
  [K in keyof T]: { [P in keyof T[K]]: string };
};

/** Flatten nested sections into name-spaced keys used by t(). */
export function flattenTranslations(dict: Record<string, unknown>, prefix = ''): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [key, value] of Object.entries(dict)) {
    if (typeof value === 'string') out[prefix + key] = value;
    else if (value && typeof value === 'object') Object.assign(out, flattenTranslations(value as Record<string, unknown>, prefix + key + '.'));
  }
  return out;
}
