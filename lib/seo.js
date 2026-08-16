import { SITE_URL, absoluteUrl, PERSON, DEFAULT_LOCALE } from './site';
import { PROJECTS } from './projects';

/**
 * Both public URLs for one logical page, used for canonical + hreflang.
 *
 * English is the default locale so it holds the bare paths; French is prefixed
 * and keeps its own translated segment (/fr/projets, not /fr/projects) because
 * a real French word is what a French query actually matches.
 */
export const pagePaths = {
  home: { en: '/', fr: '/fr' },
  projects: { en: '/projects', fr: '/fr/projets' },
  project: (slug) => ({ en: `/projects/${slug}`, fr: `/fr/projets/${slug}` }),
};

/**
 * Assembles the Next `metadata` object for a page.
 *
 * Every page gets a self-referencing canonical plus a full hreflang set — the
 * FR and EN copies say the same thing, so without `alternates.languages` they
 * would compete with each other instead of pooling their signals.
 */
export function buildMetadata({ lang, title, description, paths, image, type = 'website', keywords }) {
  const url = absoluteUrl(paths[lang]);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: url,
      languages: {
        en: absoluteUrl(paths.en),
        fr: absoluteUrl(paths.fr),
        // x-default is what gets served to a visitor whose language we have no
        // rule for, so it tracks the default locale rather than being hardcoded.
        'x-default': absoluteUrl(paths[DEFAULT_LOCALE]),
      },
    },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: PERSON.name,
      locale: lang === 'fr' ? 'fr_FR' : 'en_US',
      alternateLocale: lang === 'fr' ? 'en_US' : 'fr_FR',
      images: [{ url: image || '/og.png', width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image || '/og.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    },
    authors: [{ name: PERSON.name, url: SITE_URL }],
    creator: PERSON.name,
  };
}

/** Trim to a length search engines will actually show, without cutting a word. */
const clamp = (text, max = 158) => {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
};

/**
 * Title + description for one project page.
 *
 * The showcase-site projects are the ones with a real shot at ranking, because
 * "site vitrine <ville>" is a query actual clients type and nobody big is
 * competing for it — so those get the city in the title rather than a generic
 * "project" label.
 */
export function projectMeta(project, lang) {
  const isShowcase = project.cats.includes('Sites Vitrines');
  const [name] = project.t.split(' — ');

  let title;
  if (isShowcase && project.city) {
    title = lang === 'fr'
      ? `${name} à ${project.city} — création de site vitrine | Aymen Jallouli`
      : `${name} in ${project.city} — showcase website design | Aymen Jallouli`;
  } else {
    const lead = project.tech.slice(0, 3).join(', ');
    title = lang === 'fr'
      ? `${project.t} — projet ${lead} | Aymen Jallouli`
      : `${project.t} — ${lead} project | Aymen Jallouli`;
  }

  return { title, description: clamp(project[lang]) };
}

/* ---------------------------------------------------------------------------
   JSON-LD
   --------------------------------------------------------------------------- */

const personId = `${SITE_URL}/#person`;
const siteId = `${SITE_URL}/#website`;

/**
 * The entity graph for the home page.
 *
 * `Person` is the anchor — a stable @id that everything else references, which
 * is what lets Google treat "Aymen Jallouli" as an entity rather than a string.
 * `ProfessionalService` carries the freelance/geo signal (areaServed), and
 * `WebSite` ties the two locales together under one property.
 */
export function homeJsonLd(lang) {
  const t = lang === 'fr'
    ? {
        desc:
          'Développeur Full Stack et ingénieur DevOps basé à Tunis. React, Next.js, Node.js, Django, Spring Boot, AWS et Docker — applications web et sites vitrines livrés de bout en bout.',
        service: 'Développement web freelance — applications full stack, sites vitrines, DevOps',
      }
    : {
        desc:
          'Full Stack Developer and DevOps engineer based in Tunis. React, Next.js, Node.js, Django, Spring Boot, AWS and Docker — web applications and showcase sites delivered end to end.',
        service: 'Freelance web development — full stack applications, showcase sites, DevOps',
      };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: PERSON.name,
        url: SITE_URL,
        email: `mailto:${PERSON.email}`,
        telephone: PERSON.phone,
        jobTitle: PERSON.jobTitle[lang],
        description: t.desc,
        image: absoluteUrl('/assets/spidey/profile-cut.webp'),
        sameAs: [PERSON.github, PERSON.linkedin],
        knowsAbout: PERSON.knowsAbout,
        knowsLanguage: ['fr', 'en', 'ar'],
        alumniOf: { '@type': 'CollegeOrUniversity', name: PERSON.alumniOf },
        address: {
          '@type': 'PostalAddress',
          addressLocality: PERSON.city,
          addressRegion: PERSON.region,
          addressCountry: PERSON.country,
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}/#service`,
        name: `${PERSON.name} — ${t.service}`,
        description: t.desc,
        url: SITE_URL,
        provider: { '@id': personId },
        founder: { '@id': personId },
        areaServed: PERSON.areaServed.map((n) => ({ '@type': 'Place', name: n })),
        serviceType: [
          'Web development',
          'Full stack development',
          'Frontend development',
          'DevOps',
          'Cloud architecture',
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: PERSON.city,
          addressRegion: PERSON.region,
          addressCountry: PERSON.country,
        },
      },
      {
        '@type': 'WebSite',
        '@id': siteId,
        url: SITE_URL,
        name: `${PERSON.name} — ${PERSON.jobTitle[lang]}`,
        inLanguage: lang,
        publisher: { '@id': personId },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${absoluteUrl(pagePaths.home[lang])}#profilepage`,
        url: absoluteUrl(pagePaths.home[lang]),
        name: `${PERSON.name} — ${PERSON.jobTitle[lang]}`,
        inLanguage: lang,
        isPartOf: { '@id': siteId },
        about: { '@id': personId },
        mainEntity: { '@id': personId },
      },
    ],
  };
}

/** Collection page listing every project — helps the index URL earn its place. */
export function projectsJsonLd(lang) {
  const paths = pagePaths.projects;
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${absoluteUrl(paths[lang])}#collection`,
    url: absoluteUrl(paths[lang]),
    name: lang === 'fr' ? 'Projets — Aymen Jallouli' : 'Projects — Aymen Jallouli',
    inLanguage: lang,
    isPartOf: { '@id': siteId },
    about: { '@id': personId },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: PROJECTS.length,
      itemListElement: PROJECTS.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: absoluteUrl(pagePaths.project(p.slug)[lang]),
        name: p.t,
      })),
    },
  };
}

/** A single project, as a CreativeWork authored by the Person entity. */
export function projectJsonLd(project, lang) {
  const paths = pagePaths.project(project.slug);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        '@id': `${absoluteUrl(paths[lang])}#work`,
        name: project.t,
        headline: project.t,
        description: project[lang],
        url: absoluteUrl(paths[lang]),
        image: absoluteUrl(project.img),
        inLanguage: lang,
        author: { '@id': personId },
        creator: { '@id': personId },
        keywords: [...project.tech, ...project.cats, project.city].filter(Boolean).join(', '),
        ...(project.live ? { sameAs: [project.live] } : {}),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: lang === 'fr' ? 'Accueil' : 'Home', item: absoluteUrl(pagePaths.home[lang]) },
          { '@type': 'ListItem', position: 2, name: lang === 'fr' ? 'Projets' : 'Projects', item: absoluteUrl(pagePaths.projects[lang]) },
          { '@type': 'ListItem', position: 3, name: project.t },
        ],
      },
    ],
  };
}

/**
 * Renders a JSON-LD block inline in the prerendered HTML.
 *
 * The payload is built entirely from in-repo constants, but `<` is escaped
 * regardless: a literal `</script>` anywhere in a project title or description
 * would otherwise close the tag early and spill the rest as markup. The escape
 * is transparent to JSON parsers, so consumers still read the same object.
 */
export const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
  />
);
