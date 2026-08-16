'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

import { useLanguage } from '@/lib/LanguageContext';
import { pagePaths } from '@/lib/seo';
import { SpiderMark } from './icons';

const SECTIONS = [
  { id: 'home', key: 'home' },
  { id: 'origin', key: 'about' },
  { id: 'powers', key: 'powers' },
  { id: 'projects', key: 'projects' },
  { id: 'contact', key: 'contact' },
];

/**
 * @param base   Prefix for the in-page anchors. Empty on the home page; set to
 *               "/" or "/en" on sub-pages so the links jump back home first.
 * @param paths  {fr, en} URLs for the *current* page, so switching language
 *               keeps you where you are instead of dumping you on the home page.
 * @param spy    Scroll-spy only makes sense where the sections actually exist.
 */
const Nav = ({ base = '', paths = pagePaths.home, spy = true }) => {
  const { lang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  /* Scroll-spy: the active link is the last section whose top has passed the nav. */
  useEffect(() => {
    if (!spy) return undefined;
    let frame = 0;
    const measure = () => {
      frame = 0;
      const line = window.innerHeight * 0.32;
      let current = SECTIONS[0].id;
      SECTIONS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      });
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [spy]);

  /* Drawer: lock the page behind it, close on Esc or when we grow past mobile. */
  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 980) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);
  const href = (id) => `${base}#${id}`;

  /* Language is a URL, not a toggle — each locale is separately crawlable, so
     these have to be real links rather than buttons flipping client state.
     hrefLang tells crawlers what sits on the other end. */
  const langLinks = (
    <div className="lang" role="group" aria-label={t('a11y.lang')}>
      <Link href={paths.fr} hrefLang="fr" className={lang === 'fr' ? 'is-on' : ''} aria-current={lang === 'fr' ? 'true' : undefined}>
        FR
      </Link>
      <Link href={paths.en} hrefLang="en" className={lang === 'en' ? 'is-on' : ''} aria-current={lang === 'en' ? 'true' : undefined}>
        EN
      </Link>
    </div>
  );

  return (
    <>
      <nav className="nav">
        <a href={href('home')} className="nav__brand" onClick={close}>
          <span className="nav__mark">
            <SpiderMark size={24} />
          </span>
          <span className="nav__name">AYMEN JALLOULI</span>
          <span className="nav__num">N° 26</span>
        </a>

        <div className="nav__right">
          <div className="nav__links">
            {SECTIONS.map((s) => (
              <a key={s.id} href={href(s.id)} className={`nav__link${active === s.id ? ' is-active' : ''}`}>
                {t(`nav.${s.key}`)}
              </a>
            ))}
          </div>
          {langLinks}
          <button
            type="button"
            className={`burger${open ? ' is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t('a11y.menuClose') : t('a11y.menu')}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`drawer${open ? ' is-open' : ''}`}>
        {SECTIONS.map((s) => (
          <a key={s.id} href={href(s.id)} className={active === s.id ? 'is-active' : ''} onClick={close}>
            {t(`nav.${s.key}`)}
          </a>
        ))}
        <div className="drawer__foot">
          <a className="pill" href="https://github.com/Aymenjallouli" target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
          <a className="pill" href="https://www.linkedin.com/in/aymen-jallouli-713534254/" target="_blank" rel="noopener noreferrer">
            LINKEDIN
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
