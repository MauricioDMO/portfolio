import type { SectionShape } from '../../schema';
import type { projects as esProjects } from '../../es/projects';

// English translations: projects
export const projectsSection: SectionShape<typeof esProjects> = {
  eyebrow: "Featured projects",
  title: "Ideas turned into software.",
  description: "From business systems to web experiences, these projects show how I turn real needs into useful, maintainable solutions.",
  viewAllCta: "View all projects",
  workTogetherCta: "Work with me",
  viewCaseCta: "View full case study",
  screenshotPending: "screenshot pending",
};
