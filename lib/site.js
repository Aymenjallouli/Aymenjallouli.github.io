/**
 * Single source of truth for every absolute URL the site emits.
 *
 * Canonical tags, hreflang alternates, the sitemap, robots.txt and the JSON-LD
 * `@id`s all read from SITE_URL — so changing hosts is a one-line change here,
 * with no other file to touch.
 *
 * This must stay in sync with the domain actually attached to the Vercel
 * project: a canonical pointing at a host that does not resolve tells search
 * engines to index a URL that 404s. Override with NEXT_PUBLIC_SITE_URL if you
 * need a build to advertise something else.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://aymenjallouli.dev'
).replace(/\/$/, '');

/** The two locales, in sitemap/hreflang order. French is the default. */
export const LOCALES = ['fr', 'en'];
export const DEFAULT_LOCALE = 'fr';

/** French lives at the root; English is prefixed. Keeps "/" as the strong URL. */
export const localePath = (lang, path = '') => {
  const clean = path.replace(/^\//, '');
  const base = lang === DEFAULT_LOCALE ? '' : `/${lang}`;
  return clean ? `${base}/${clean}` : base || '/';
};

export const absoluteUrl = (path = '/') => `${SITE_URL}${path === '/' ? '' : path}`;

/** Localized segment for the projects collection — real words rank better. */
export const PROJECTS_SEGMENT = { fr: 'projets', en: 'projects' };

export const PERSON = {
  name: 'Aymen Jallouli',
  email: 'aymen.jallouli@esprit.tn',
  phone: '+21629082917',
  jobTitle: { fr: 'Développeur Full Stack & Ingénieur DevOps', en: 'Full Stack Developer & DevOps Engineer' },
  city: 'Tunis',
  region: 'Ariana',
  country: 'TN',
  github: 'https://github.com/Aymenjallouli',
  linkedin: 'https://www.linkedin.com/in/aymen-jallouli-713534254/',
  alumniOf: 'ESPRIT — École Supérieure Privée d’Ingénierie et de Technologies',
  /** Fed to JSON-LD `knowsAbout`; mirrors the skills section. */
  knowsAbout: [
    'React', 'Next.js', 'Node.js', 'Express', 'Django', 'Spring Boot',
    'TypeScript', 'JavaScript', 'Python', 'GraphQL', 'REST APIs',
    'AWS', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'DevOps',
    'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Kafka',
    'Microservices', 'OAuth2', 'JWT', 'WebSockets', 'TailwindCSS',
  ],
  /** Cities the freelance work actually covers — drives the areaServed graph. */
  areaServed: ['Tunis', 'Ariana', 'Gabès', 'Sousse', 'Gammarth', 'Tunisie'],
};
