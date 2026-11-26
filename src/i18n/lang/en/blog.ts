import type { Localized } from '../../schema';
import type { blog as esBlog } from '../../es/blog';

// English translations: blog
export const blog: Localized<typeof esBlog> = {
  eyebrow: "Blog",
  title: "Engineering notes.",
  description: "Experiments, architecture decisions and lessons from real projects. I publish when I have something worth sharing, not to fill the site.",
  emptyTitle: "No posts yet.",
  emptyDescription: "The first notes are on their way. In the meantime, browse the projects or get in touch.",
  publishedOn: "Published on",
  minRead: "min read",
  readPost: "Read post",
  recentEyebrow: "From the blog",
  recentTitle: "Recent notes.",
  viewAll: "View all posts",
  backToBlog: "Back to blog",
  categories: {
    tutorials: "Tutorials",
    engineering: "Engineering",
    experiments: "Experiments",
    insights: "Insights",
    "project-logs": "Project Logs",
  },
};
