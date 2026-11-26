import type { APIRoute } from 'astro';
import { localizedPath, t, type Locale } from '../i18n';
import { getPublishedEntries } from '../lib/content';

type SearchItem = {
  locale: Locale;
  type: 'project' | 'post' | 'page';
  title: string;
  description: string;
  category: string;
  url: string;
};

/** Built once at compile time from the same published collections that generate the pages. */
export const GET: APIRoute = async () => {
  const items: SearchItem[] = [];

  for (const locale of ['es', 'en'] as Locale[]) {
    for (const entry of await getPublishedEntries('projects', locale)) {
      items.push({
        locale,
        type: 'project',
        title: entry.data.title,
        description: entry.data.description,
        category: t(`search.projectCategories.${entry.data.category}`, locale),
        url: localizedPath(`/proyectos/${entry.data.id}`, locale),
      });
    }

    for (const entry of await getPublishedEntries('blog', locale)) {
      items.push({
        locale,
        type: 'post',
        title: entry.data.title,
        description: entry.data.description,
        category: t(`blog.categories.${entry.data.category}`, locale),
        url: localizedPath(`/blog/${entry.data.slug}`, locale),
      });
    }

    const pageCategory = t('search.pageCategory', locale);
    const pages = [
      { path: '', title: t('search.pageHome', locale), description: t('seo.homeDescription', locale) },
      { path: 'proyectos', title: t('projectPage.breadcrumbProjects', locale), description: t('seo.projectsDescription', locale) },
      { path: 'cv', title: t('cv.navLabel', locale), description: t('seo.cvDescription', locale) },
      { path: 'sobre-mi', title: t('about.eyebrow', locale), description: t('seo.aboutDescription', locale) },
      { path: 'blog', title: t('blog.eyebrow', locale), description: t('seo.blogDescription', locale) },
      { path: 'contacto', title: t('contact.eyebrow', locale), description: t('seo.contactDescription', locale) },
    ];
    for (const page of pages) {
      items.push({
        locale,
        type: 'page',
        title: page.title,
        description: page.description,
        category: pageCategory,
        url: localizedPath(page.path, locale),
      });
    }
  }

  return new Response(JSON.stringify(items), {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
};
