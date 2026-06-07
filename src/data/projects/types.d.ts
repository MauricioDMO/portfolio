import type { TechKey } from '../techs';

export type ProjectIconKey =
  | 'arrow-up-right'
  | 'bolt'
  | 'brain'
  | 'building-store'
  | 'code'
  | 'package'
  | 'receipt-tax'
  | 'shield-check'
  | 'target-arrow'
  | 'user-check';

export type ProjectDetailContent =
  | {
      text: string;
    }
  | {
      list: string[];
    };

export type ProjectDetail = {
  id: string;
  eyebrow: string;
  title: string;
  icon?: ProjectIconKey;
  content: ProjectDetailContent[];
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  intro?: string;
  icon: ProjectIconKey;
  images?: {
    src: string;
    alt: string;
  }[];
  stack: TechKey[];
  details: ProjectDetail[];
};
