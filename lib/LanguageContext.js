'use client';

import { createContext, useContext, useMemo } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

/**
 * Language is owned by the URL, not by component state.
 *
 * The old CRA build picked the locale from localStorage inside an effect, which
 * meant the server could never know which copy to render — the whole point of
 * moving to Next. Now `/` is French and `/en` is English, each prerendered with
 * its own <html lang>, canonical and hreflang. Switching locale is a real
 * navigation, so both versions are independently crawlable and linkable.
 */
export const LanguageProvider = ({ lang, children }) => {
  const value = useMemo(() => {
    // t('hero.desc') — dot-path lookup with French fallback. Returns the raw
    // value (string, array or object) so callers can map over arrays too.
    const t = (path) => {
      const lookup = (root) => path.split('.').reduce((node, key) => (node == null ? node : node[key]), root);
      const found = lookup(translations[lang]);
      if (found != null) return found;
      const fallback = lookup(translations.fr);
      return fallback == null ? path : fallback;
    };
    return { lang, t };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
};
