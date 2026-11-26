import { flattenTranslations, type Localized } from '../../schema';
import type { EsSections } from '../es';
import { shared } from './shared';
import { site } from './site';
import { seo } from './seo';
import { projectPage } from './projectPage';
import { hero } from './hero';
import { about } from './about';
import { cv } from './cv';
import { contact } from './contact';
import { workflow } from './workflow';
import { stack } from './stack';
import { projectsSection } from './projectsSection';
import { projects } from './projects';
import { components } from './components';

/** English dictionary, grouped by section; keys mirror the Spanish source. */
export const en: Localized<EsSections> = {
  shared,
  site,
  seo,
  projectPage,
  hero,
  about,
  cv,
  contact,
  workflow,
  stack,
  projectsSection,
  projects,
  components,
};

export type EnSections = typeof en;

/** Flat, name-spaced lookup used by t(). */
export const enFlat: Record<string, string> = flattenTranslations(en);
