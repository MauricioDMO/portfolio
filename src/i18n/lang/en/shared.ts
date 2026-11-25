import type { SectionShape } from '../../schema';
import type { shared as esShared } from '../../es/shared';

export const shared: SectionShape<typeof esShared> = {
  stack: "Stack",
  frontend: "Frontend",
  astro: "Astro",
  nextjs: "Next.js",
  typescript: "TypeScript",
};
