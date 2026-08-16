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
