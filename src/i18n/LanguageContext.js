import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState('fr');

  useEffect(() => {
    const saved = localStorage.getItem('lang');
    const initial = saved === 'en' || saved === 'fr' ? saved : 'fr';
    setLangState(initial);
    document.documentElement.lang = initial;
  }, []);

  const setLang = useCallback((l) => {
    setLangState(l);
    localStorage.setItem('lang', l);
    document.documentElement.lang = l;
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === 'fr' ? 'en' : 'fr');
  }, [lang, setLang]);

  // t('home.title') — dot-path lookup with French fallback; returns the raw
  // value (string, array or object) so callers can map over arrays too.
  const t = useCallback(
    (path) => {
      const lookup = (root) => path.split('.').reduce((node, key) => (node == null ? node : node[key]), root);
      const value = lookup(translations[lang]);
      if (value != null) return value;
      const fallback = lookup(translations.fr);
      return fallback == null ? path : fallback;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
