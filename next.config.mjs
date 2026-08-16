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

  // The old CRA one-pager lived at "/" with in-page anchors only, so there are
  // no legacy deep links to preserve — but the French copy used to be the only
  // thing served, and /fr is the URL people will guess. Send it to the canonical
  // root rather than serving the same page twice.
  //
  // The www rule matters more than it looks: Vercel serves both hostnames by
  // default, so without it every page exists at two URLs. The canonical tags
  // would eventually consolidate them, but a 308 settles it up front and keeps
  // aymenjallouli.dev the only host that ever appears in results.
  async redirects() {
    return [
      { source: '/fr', destination: '/', permanent: true },
      { source: '/fr/:path*', destination: '/:path*', permanent: true },
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
