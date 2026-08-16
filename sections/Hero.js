'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { WebCorner } from '@/components/icons';
import { useCanHover, useReducedMotion } from '@/lib/useMedia';

/* Served straight from public/ — plain <img> keeps the comic-panel CSS in
   charge of layout, which next/image would otherwise wrap and override. */
const spiderCutout = '/assets/spidey/spiderman-cutout.webp';
const profileCut = '/assets/spidey/profile-cut.webp';
const webLines = '/assets/spidey/web-lines.webp';
const spiderSvg = '/assets/spidey/spider.svg';
const cvFr = '/assets/Aymen_Jallouli_CV_FR.pdf';
const cvEn = '/assets/Aymen_Jallouli_CV_EN.pdf';

/* Two stacked lines with the surname stepped in, comic-cover style. Shared by
   the real heading and both glitch layers so all three stay pixel-identical. */
const NAME = (
  <>
    <span className="hero__l1">AYMEN</span>
    <span className="hero__l2">JALLOULI</span>
  </>
);

/** Types a role, holds, deletes it, then moves to the next one. */
function useTypewriter(words, enabled) {
  const [typed, setTyped] = useState('');

  useEffect(() => {
    if (!words || !words.length) return undefined;
    if (!enabled) {
      setTyped(words[0]);
      return undefined;
    }
    let timer;
    let current = '';
    let idx = 0;
    let deleting = false;

    const tick = () => {
      const target = words[idx % words.length];
      let delay;
      if (!deleting) {
        current = target.slice(0, current.length + 1);
        delay = current === target ? 1600 : 55;
        if (current === target) deleting = true;
      } else {
        current = current.slice(0, -1);
        delay = 28;
        if (!current) {
          deleting = false;
          delay = 380;
          idx += 1;
        }
      }
      setTyped(current);
      timer = setTimeout(tick, delay);
    };

    setTyped('');
    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, [words, enabled]);

  return typed;
}

const Hero = () => {
  const { lang, t } = useLanguage();
  const canHover = useCanHover();
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  const typed = useTypewriter(t('hero.roles'), !reduced);
  const titleRef = useRef(null);

  const cvHref = lang === 'fr' ? cvFr : cvEn;
  const closedCaption = canHover ? t('hero.maskCap') : t('hero.maskCapTouch');
  const caption = open ? t('hero.unmaskCap') : closedCaption;

  return (
    <section id="home" className="hero">
      <div className="dots hero__rays" />
      <div className="dots hero__halftone" />
      <WebCorner className="hero__web-tl" />
      <img className="hero__lines-a" src={webLines} alt="" aria-hidden="true" />
      <img className="hero__lines-b" src={webLines} alt="" aria-hidden="true" />
      <img className="hero__crawler" src={spiderSvg} alt="" aria-hidden="true" />

      <div className="thread thread--drop" aria-hidden="true">
        <div className="thread__line" />
        <img src={spiderSvg} alt="" />
      </div>
      <div className="thread thread--swing" aria-hidden="true">
        <div className="thread__line" />
        <img className="thread__spider" src={spiderSvg} alt="" />
      </div>

      <div className="hero__grid">
        <div className="hero__copy">
          <div className="tag hero__meanwhile">{t('hero.meanwhile')}</div>
          <div className="hero__friendly">{t('hero.friendly')}</div>

          <div className="hero__title-wrap" ref={titleRef}>
            <h1 className="hero__title">{NAME}</h1>
            <h1 className="hero__glitch hero__glitch--a" aria-hidden="true">
              {NAME}
            </h1>
            <h1 className="hero__glitch hero__glitch--b" aria-hidden="true">
              {NAME}
            </h1>
          </div>

          {/* The animation is decorative — screen readers get the full list once
              instead of a character-by-character stream. */}
          <div className="hero__typed" aria-hidden="true">
            {typed}
            <span className="hero__caret">▮</span>
          </div>
          <p className="sr-only">{t('hero.roles').join(' · ')}</p>

          <div className="status">
            <span className="status__dot" aria-hidden="true" />
            {t('hero.status')}
          </div>

          <p className="hero__desc">{t('hero.desc')}</p>

          <ul className="hero__ach">
            {t('hero.ach').map((a) => (
              <li key={a}>
                <span aria-hidden="true">▸</span>
                {a}
              </li>
            ))}
          </ul>

          <div className="hero__ctas">
            <a href="#projects" className="btn btn--red">
              {t('hero.cta1')}
            </a>
            <a href={cvHref} download={`Aymen_Jallouli_CV_${lang.toUpperCase()}.pdf`} className="btn btn--yellow">
              {t('hero.cta2')}
            </a>
            <a href="#contact" className="btn btn--ghost">
              {t('hero.cta3')}
            </a>
          </div>

          <div className="hero__socials">
            <a className="pill" href="https://github.com/Aymenjallouli" target="_blank" rel="noopener noreferrer">
              GITHUB
            </a>
            <a className="pill" href="https://www.linkedin.com/in/aymen-jallouli-713534254/" target="_blank" rel="noopener noreferrer">
              LINKEDIN
            </a>
          </div>
        </div>

        <div className="hero__art">
          <div className="pow pow--thwip" aria-hidden="true">
            THWIP !
          </div>
          <div className="pow pow--pow" aria-hidden="true">
            POW !
          </div>

          <button
            type="button"
            className={`mask${open ? ' is-open' : ''}`}
            aria-pressed={open}
            aria-label={caption}
            onClick={() => setOpen((v) => !v)}
            onMouseEnter={canHover ? () => setOpen(true) : undefined}
            onMouseLeave={canHover ? () => setOpen(false) : undefined}
          >
            <span className="mask__stage">
              <span className="mask__glow" aria-hidden="true" />
              <img className="mask__img mask__img--hero" src={spiderCutout} alt="Spider-Man" />
              <img className="mask__img mask__img--face" src={profileCut} alt="Aymen Jallouli" />
              <img className="mask__spider" src={spiderSvg} alt="" aria-hidden="true" />
              <span className="grabber" aria-hidden="true">
                <span className="grabber__inner">
                  <span className="grabber__thread" />
                  <img className="grabber__spider" src={spiderSvg} alt="" />
                </span>
              </span>
            </span>
            <span className="mask__badge">{t('hero.badge')}</span>
            <span className="mask__cap" aria-hidden="true">
              <span className="mask__cap-t mask__cap-t--closed">{closedCaption}</span>
              <span className="mask__cap-t mask__cap-t--open">{t('hero.unmaskCap')}</span>
            </span>
          </button>
        </div>
      </div>

      <div className="hero__scroll">
        {t('hero.scroll')}
        <span aria-hidden="true">▼</span>
      </div>
    </section>
  );
};

export default Hero;
