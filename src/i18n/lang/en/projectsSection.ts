import type { SectionShape } from '../../schema';
import type { projects as esProjects } from '../../es/projects';

// English translations: projects
export const projectsSection: SectionShape<typeof esProjects> = {
  eyebrow: "Featured projects",
  title: "Real case studies, not just pretty screenshots.",
  description: "Each project shows context, decisions, and impact. The stack matters, but the real strength is understanding the process and turning it into a maintainable tool.",
  viewCaseCta: "View full case study",
  screenshotPending: "screenshot pending",
};
