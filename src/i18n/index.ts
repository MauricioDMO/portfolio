import { projectEnSlug, projectEsId } from '../data/project-slugs';
import { enFlat } from './lang/en';
import { esFlat } from './lang/es';
import type { Locale } from './schema';

export { projectEnSlug, projectEsId } from '../data/project-slugs';

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

/** Reverse lookup built from the Spanish source dictionary, so no manual key map is needed. */
const sourceToKey: Record<string, string> = {};
// ponytail: primera ocurrencia gana si dos claves comparten el mismo texto; las traducciones pueden diferir.
for (const [key, value] of Object.entries(esFlat)) {
  if (!(value in sourceToKey)) sourceToKey[value] = key;
}

/**
 * Translate a Spanish source string into the requested locale.
 * Spanish is the source of truth: unknown strings pass through unchanged.
 */
export function t(text: string, lang: Locale): string {
  const dict = lang === 'es' ? esFlat : enFlat;
  const key = text in dict ? text : sourceToKey[text];
  return (key && dict[key]) || text;
}

/** Separate query/hash from the path so the suffix survives a locale switch. */
function splitSuffix(path: string): { pathPart: string; suffix: string } {
  const index = path.search(/[?#]/);
  return index === -1
    ? { pathPart: path, suffix: '' }
    : { pathPart: path.slice(0, index), suffix: path.slice(index) };
}

/** Strip leading slashes, an optional /es or /en prefix, and trailing slashes. */
function barePath(path: string): string {
  return path
    .replace(/^\/+/, '')
    .replace(/^(?:es|en)(?=\/|$)\/?/, '')
    .replace(/\/+$/, '');
}

/** Build a localized path from an unprefixed, locale-neutral path. */
function buildLocalizedPath(bare: string, lang: Locale): string {
  const base = `/${lang}/`;
  if (!bare) return base;

  if (bare === 'proyectos' || bare === 'projects') {
    return `${base}${lang === 'en' ? 'projects' : 'proyectos'}/`;
  }

  if (bare === 'sobre-mi' || bare === 'about') {
    return `${base}${lang === 'en' ? 'about' : 'sobre-mi'}/`;
  }

  const project = bare.match(/^(?:proyectos|projects)\/([^/]+)$/);
  if (project) {
    const id = projectEsId(project[1]);
    const segment = lang === 'en' ? projectEnSlug(id) : id;
    const folder = lang === 'en' ? 'projects' : 'proyectos';
    return `${base}${folder}/${segment}/`;
  }

  return `${base}${bare}/`;
}

/**
 * Build a locale-aware absolute-site path from a root-relative path.
 * Accepts existing `proyectos/{id}` calls and preserves ?/# suffixes.
 */
export function localizedPath(path: string, lang: Locale): string {
  const { pathPart, suffix } = splitSuffix(path);
  return buildLocalizedPath(barePath(pathPart), lang) + suffix;
}

/**
 * Given the current pathname, produce the equivalent path in another locale.
 * Handles /es/proyectos/{id}, /en/projects/{slug}, legacy /proyectos/{id} and
 * legacy /en/proyectos/{id}, preserving ?/# suffixes.
 */
export function switchLocalePath(pathname: string, target: Locale): string {
  const { pathPart, suffix } = splitSuffix(pathname);
  return buildLocalizedPath(barePath(pathPart), target) + suffix;
}
