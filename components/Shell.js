import { Anton, Archivo, Bangers, Instrument_Serif } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import '@/styles/spidey.css';
import '@/styles/pro.css';
import '@/styles/ui.css';
import { LanguageProvider } from '@/lib/LanguageContext';
import { QuoteProvider } from '@/components/QuoteProvider';
import { DEFAULT_THEME, THEME_SCRIPT } from '@/lib/theme';

/* Self-hosted by next/font — no cross-origin Google Fonts request on the
   critical path. The variables are consumed by --f-display/--f-comic/--f-body
   in spidey.css and --p-sans/--p-serif in pro.css.

   The two comic display faces are not preloaded: the professional theme is
   the default and never uses them, so they are only fetched once a visitor
   actually switches to the comic edition. */
const anton = Anton({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-anton', preload: false });
const bangers = Bangers({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-bangers', preload: false });
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-archivo',
});
const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-serif',
});

const fontVars = `${anton.variable} ${bangers.variable} ${archivo.variable} ${serif.variable}`;

/**
 * The <html> shell, shared by both locale root layouts.
 *
 * Each locale is its own root layout (see app/(fr) and app/(en)) purely so
 * <html lang> is correct in the prerendered HTML rather than patched in by an
 * effect — search engines and screen readers both read it before any JS runs.
 *
 * `data-theme` is rendered as the default and corrected by THEME_SCRIPT before
 * first paint for visitors who picked the other theme; suppressHydrationWarning
 * covers exactly that one attribute difference on <html>.
 */
export default function Shell({ lang, children }) {
  return (
    <html lang={lang} className={fontVars} data-theme={DEFAULT_THEME} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body>
        {/* Reveal-on-scroll starts at opacity:0 and is switched on by an
            IntersectionObserver. With JS off that would leave the whole page
            invisible, so undo the animation entirely in that case. */}
        <noscript>
          <style>{'.rv{opacity:1 !important;transform:none !important}'}</style>
        </noscript>

        <LanguageProvider lang={lang}>
          <QuoteProvider>{children}</QuoteProvider>
        </LanguageProvider>

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
