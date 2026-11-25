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

/**
 * Stable project identifiers. The Spanish id is the internal source of truth;
 * the English slug is the public segment used under /en/projects/.
 */
const projectSlugs: Record<string, string> = {
  'facturacion-electronica-dte': 'electronic-invoicing',
  'sistema-inventario': 'inventory-management',
  'sistema-rma-garantias': 'warranty-management',
  'construfijaciones-web': 'construfijaciones-web',
};

const slugToId: Record<string, string> = Object.fromEntries(
  Object.entries(projectSlugs).map(([id, slug]) => [slug, id]),
);

/** English public slug for a Spanish project id (identity when unmapped). */
export function projectEnSlug(id: string): string {
  return projectSlugs[id] ?? id;
}

/** Spanish id for an English project slug or a Spanish id (identity when unmapped). */
export function projectEsId(slugOrId: string): string {
  return slugToId[slugOrId] ?? slugOrId;
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
