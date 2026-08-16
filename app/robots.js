import { SITE_URL, absoluteUrl } from '@/lib/site';

/**
 * Everything is public and worth indexing, so the only real job here is
 * advertising the sitemap and the canonical host.
 *
 * AI assistants are increasingly how freelance work gets shortlisted, and their
 * crawlers are opt-out rather than opt-in — leaving them allowed is deliberate.
 */
export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: SITE_URL,
  };
}
