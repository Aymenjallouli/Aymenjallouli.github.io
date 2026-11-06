'use client';

import { useEffect } from 'react';
import { track } from '@vercel/analytics';

import { useLanguage } from '@/lib/LanguageContext';
import { THEMES, THEME_KEY, getTheme, setTheme } from '@/lib/theme';
import { BriefcaseIcon, SpiderMark } from './icons';

/**
 * Pro ⇄ comic switch. Both faces are rendered and CSS shows the one that
 * matches the current theme, so the button is right from the first paint.
 * `data-tour` lets the guided tour point at it.
 */
export default function ThemeToggle() {
  const { t } = useLanguage();

  /* Safety net: the <head> script sets the saved theme before paint, but if
     React ever has to re-render <html> from scratch (a hydration mismatch
     anywhere on the page does that) the attribute falls back to the default.
     Re-assert the visitor's choice once we are mounted. */
  useEffect(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (THEMES.includes(saved) && document.documentElement.getAttribute('data-theme') !== saved) {
        document.documentElement.setAttribute('data-theme', saved);
      }
    } catch (e) {
      /* storage blocked */
    }
  }, []);

  const flip = (e) => {
    const next = getTheme() === 'pro' ? 'spidey' : 'pro';
    setTheme(next, e.currentTarget);
    track('theme_switch', { to: next });
  };

  return (
    <button type="button" className="theme-toggle" data-tour="theme" onClick={flip}>
      <span className="th-p theme-toggle__face">
        <SpiderMark size={16} />
        <span className="theme-toggle__txt" aria-hidden="true">
          {t('theme.toComic')}
        </span>
        <span className="sr-only">{t('theme.toComicLabel')}</span>
      </span>
      <span className="th-s theme-toggle__face">
        <BriefcaseIcon size={16} />
        <span className="theme-toggle__txt" aria-hidden="true">
          {t('theme.toPro')}
        </span>
        <span className="sr-only">{t('theme.toProLabel')}</span>
      </span>
    </button>
  );
}
