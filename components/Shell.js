import { Anton, Archivo, Bangers } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import '@/styles/spidey.css';
import { LanguageProvider } from '@/lib/LanguageContext';

/* Self-hosted by next/font — no cross-origin Google Fonts request on the
   critical path. The variables are consumed by --f-display/--f-comic/--f-body
   in spidey.css, so the design system keeps its single point of control. */
const anton = Anton({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-anton' });
const bangers = Bangers({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-bangers' });
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-archivo',
});

const fontVars = `${anton.variable} ${bangers.variable} ${archivo.variable}`;

/**
 * The <html> shell, shared by both locale root layouts.
 *
 * Each locale is its own root layout (see app/(fr) and app/(en)) purely so
 * <html lang> is correct in the prerendered HTML rather than patched in by an
 * effect — search engines and screen readers both read it before any JS runs.
 */
export default function Shell({ lang, children }) {
  return (
    <html lang={lang} className={fontVars}>
      <body>
        {/* Reveal-on-scroll starts at opacity:0 and is switched on by an
            IntersectionObserver. With JS off that would leave the whole page
            invisible, so undo the animation entirely in that case. */}
        <noscript>
          <style>{'.rv{opacity:1 !important;transform:none !important}'}</style>
        </noscript>

        <LanguageProvider lang={lang}>{children}</LanguageProvider>

        {/* Both use the /next entry rather than /react so route changes are
            attributed to the URL they land on. The /react build reads the
            path once at mount, which would file every navigation between
            /, /projects and the project pages under the entry URL. */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
