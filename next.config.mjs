/**
 * Projects taken off the site. Their detail pages were indexed, so each URL
 * 301s to the projects index (in its own locale) instead of turning into a 404
 * and throwing away whatever ranking it had.
 */
const RETIRED_SLUGS = [
  'systeme-gestion-restaurant-microservices',
  'pipeline-devops-jenkins-docker',
  'wided-fit-gabes',
  'fit4you-gabes',
  'oconnors-irish-pub-sousse',
  'the-zoo-bar-tunis',
  // removed 2026-11-07
  'platinum-gym-gabes',
  'bel-air-gammarth',
  'pastagram-pasta-bar-sousse',
  'cabinet-dentaire-dr-chaima-harb-gabes',
  'cabinet-salma-kinesitherapie-ariana',
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Long-lived caching for the hashed static chunks; the HTML itself stays
  // revalidated by Vercel so a redeploy is picked up immediately.
  async headers() {
    return [
      {
        source: '/assets/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },

  // English is the default locale and lives at "/", so /en is not a route —
  // but it is the URL people guess and the one the earlier build used. Fold it
  // into the root instead of leaving a 404 behind.
  //
  // The www rule matters more than it looks: Vercel serves both hostnames by
  // default, so without it every page exists at two URLs. The canonical tags
  // would eventually consolidate them, but a 308 settles it up front and keeps
  // aymenjallouli.dev the only host that ever appears in results.
  async redirects() {
    return [
      ...RETIRED_SLUGS.flatMap((slug) => [
        { source: `/projects/${slug}`, destination: '/projects', permanent: true },
        { source: `/en/projects/${slug}`, destination: '/projects', permanent: true },
        { source: `/fr/projets/${slug}`, destination: '/fr/projets', permanent: true },
      ]),
      { source: '/en', destination: '/', permanent: true },
      { source: '/en/projects', destination: '/projects', permanent: true },
      { source: '/en/projects/:slug', destination: '/projects/:slug', permanent: true },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.aymenjallouli.dev' }],
        destination: 'https://aymenjallouli.dev/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
