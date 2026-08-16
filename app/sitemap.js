import { PROJECTS } from '@/lib/projects';
import { pagePaths } from '@/lib/seo';
import { absoluteUrl, LOCALES, DEFAULT_LOCALE } from '@/lib/site';

/**
 * Every URL, both locales, with the EN/FR pair declared as alternates.
 *
 * Google reads the sitemap's hreflang independently of the ones in <head>, and
 * having both agree is what stops the two language versions being read as
 * duplicates competing for the same query.
 */
export default function sitemap() {
  const entry = (paths, priority, changeFrequency) =>
    LOCALES.map((lang) => ({
      url: absoluteUrl(paths[lang]),
      lastModified: new Date(),
      changeFrequency,
      // The default locale edges out the translation; both stay well above the
      // 0.5 midpoint so neither reads as an afterthought.
      priority: lang === DEFAULT_LOCALE ? priority : priority - 0.05,
      alternates: {
        languages: Object.fromEntries(LOCALES.map((l) => [l, absoluteUrl(paths[l])])),
      },
    }));

  return [
    ...entry(pagePaths.home, 1.0, 'monthly'),
    ...entry(pagePaths.projects, 0.9, 'monthly'),
    ...PROJECTS.flatMap((p) => entry(pagePaths.project(p.slug), 0.8, 'yearly')),
  ];
}
