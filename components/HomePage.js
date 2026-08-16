'use client';

import { useEffect, useState } from 'react';

import Nav from '@/components/Nav';
import Marquee from '@/components/Marquee';
import Hero from '@/sections/Hero';
import Stats from '@/sections/Stats';
import Origin from '@/sections/Origin';
import Powers from '@/sections/Powers';
import Work from '@/sections/Work';
import CallToAction from '@/sections/CallToAction';
import Contact from '@/sections/Contact';
import SiteFooter from '@/sections/SiteFooter';
import { useLanguage } from '@/lib/LanguageContext';

/** Appears once you're past the hero; returns you to the top. */
const BackToTop = ({ label }) => {
  const [on, setOn] = useState(false);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      setOn(window.scrollY > window.innerHeight * 0.9);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <button
      type="button"
      className={`totop${on ? ' is-on' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={label}
      tabIndex={on ? 0 : -1}
    >
      ▲
    </button>
  );
};

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="page">
      <a className="skip-link" href="#main">
        {t('a11y.skip')}
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <Stats />
        <Marquee text={t('marquee1')} variant="red" />
        <Origin />
        <Powers />
        <Work />
        <Marquee text={t('marquee2')} variant="yellow" />
        <CallToAction />
        <Contact />
      </main>

      <SiteFooter />
      <BackToTop label={t('a11y.top')} />
    </div>
  );
}
