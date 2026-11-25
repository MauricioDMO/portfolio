import { flattenTranslations, type LanguageDictionary } from '../../schema';
import { shared } from './shared';
import { site } from './site';
import { seo } from './seo';
import { projectPage } from './projectPage';
import { hero } from './hero';
import { about } from './about';
import { contact } from './contact';
import { workflow } from './workflow';
import { stack } from './stack';
import { projectsSection } from './projectsSection';
import { projects } from './projects';
import { components } from './components';

/** Spanish source dictionary, grouped by section. */
export const es = {
  shared,
  site,
  seo,
  projectPage,
  hero,
  about,
  contact,
  workflow,
  stack,
  projectsSection,
  projects,
  components,
} satisfies LanguageDictionary;

export type EsSections = typeof es;

/** Flat, name-spaced lookup used by t(). */
export const esFlat: Record<string, string> = flattenTranslations(es);
