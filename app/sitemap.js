import { PROJECTS } from '@/lib/projects';
import { pagePaths } from '@/lib/seo';
import { absoluteUrl } from '@/lib/site';

/**
 * Every URL, both locales, with the FR/EN pair declared as alternates.
 *
 * Google reads the sitemap's hreflang independently of the ones in <head>, and
 * having both agree is what stops the two language versions being read as
 * duplicates competing for the same query.
 */
export default function sitemap() {
  const entry = (paths, priority, changeFrequency) =>
    ['fr', 'en'].map((lang) => ({
      url: absoluteUrl(paths[lang]),
      lastModified: new Date(),
      changeFrequency,
      priority: lang === 'fr' ? priority : priority - 0.05,
      alternates: {
        languages: { fr: absoluteUrl(paths.fr), en: absoluteUrl(paths.en) },
      },
    }));

  return [
    ...entry(pagePaths.home, 1.0, 'monthly'),
    ...entry(pagePaths.projects, 0.9, 'monthly'),
    ...PROJECTS.flatMap((p) => entry(pagePaths.project(p.slug), 0.8, 'yearly')),
  ];
}
