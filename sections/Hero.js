'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { WebCorner, WhatsAppIcon } from '@/components/icons';
import TT, { Dual } from '@/components/ThemeText';
import { useQuote } from '@/components/QuoteProvider';
import { whatsappUrl } from '@/lib/pricing';
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
    <span className="hero__l1">
      <Dual spidey="AYMEN" pro="Aymen" />
    </span>
    <span className="hero__l2">
      <Dual spidey="JALLOULI" pro="Jallouli" />
    </span>
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
  const { lang, t, tp } = useLanguage();
  const canHover = useCanHover();
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  const { open: openQuote } = useQuote();
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
      {/* Comic-only decoration: lazy, so the default pro theme (where these are
          display:none) never downloads them. */}
      <img className="hero__lines-a" src={webLines} alt="" aria-hidden="true" loading="lazy" />
      <img className="hero__lines-b" src={webLines} alt="" aria-hidden="true" loading="lazy" />
      <img className="hero__crawler" src={spiderSvg} alt="" aria-hidden="true" loading="lazy" />

      <div className="thread thread--drop" aria-hidden="true">
        <div className="thread__line" />
        <img src={spiderSvg} alt="" loading="lazy" />
      </div>
      <div className="thread thread--swing" aria-hidden="true">
        <div className="thread__line" />
        <img className="thread__spider" src={spiderSvg} alt="" loading="lazy" />
      </div>

      <div className="hero__grid">
        <div className="hero__copy">
          <div className="tag hero__meanwhile">
            <TT k="hero.meanwhile" />
          </div>
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
              <TT k="hero.cta1" />
            </a>
            <button type="button" className="btn btn--yellow" onClick={() => openQuote()}>
              <TT k="hero.cta2" />
            </button>
            <a href={cvHref} download={`Aymen_Jallouli_CV_${lang.toUpperCase()}.pdf`} className="btn btn--ghost">
              <TT k="hero.cta3" />
            </a>
          </div>

          <div className="hero__socials">
            <a className="pill" href="https://github.com/Aymenjallouli" target="_blank" rel="noopener noreferrer">
              GITHUB
            </a>
            <a className="pill" href="https://www.linkedin.com/in/aymen-jallouli-713534254/" target="_blank" rel="noopener noreferrer">
              LINKEDIN
            </a>
            <a className="pill pill--wa" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={15} /> WHATSAPP
            </a>
          </div>
        </div>

        <div className="hero__art">
          {/* Pro theme: a clean portrait card. The comic mask below is hidden
              in that theme, and vice versa. */}
          <div className="pro-portrait th-p">
            <div className="pro-portrait__frame">
              <img className="pro-portrait__img" src={profileCut} alt="Aymen Jallouli" width="1012" height="1024" fetchPriority="high" />
            </div>

            <div className="pro-portrait__chip pro-portrait__chip--a" aria-hidden="true">
              <strong>20+</strong>
              <span>{t('hero.chipProjects')}</span>
            </div>

            {/* rotating "let's work together" seal — opens the quote builder */}
            <button type="button" className="pro-badge" onClick={() => openQuote()} aria-label={tp('hero.cta2')}>
              <svg className="pro-badge__ring" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
                <defs>
                  <path id="pro-badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                </defs>
                <text>
                  <textPath href="#pro-badge-circle" textLength="236" lengthAdjust="spacing">
                    {t('hero.badgeRing')}
                  </textPath>
                </text>
              </svg>
              <span className="pro-badge__core" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </span>
            </button>

            {/* a tiny editor window — the developer's business card */}
            <div className="pro-code" aria-hidden="true">
              <div className="pro-code__bar">
                <i />
                <i />
                <i />
                <span>aymen.ts</span>
              </div>
              <code className="pro-code__body">
                <span className="pro-code__ln">
                  <b className="tk-k">const</b> <b className="tk-v">aymen</b> <b className="tk-p">=</b> {'{'}
                </span>
                <span className="pro-code__ln pro-code__in">
                  stack<b className="tk-p">:</b> [<b className="tk-s">&apos;React&apos;</b>, <b className="tk-s">&apos;Node&apos;</b>,{' '}
                  <b className="tk-s">&apos;AWS&apos;</b>],
                </span>
                <span className="pro-code__ln pro-code__in">
                  experience<b className="tk-p">:</b> <b className="tk-s">&apos;3+ years&apos;</b>,
                </span>
                <span className="pro-code__ln pro-code__in">
                  available<b className="tk-p">:</b> <b className="tk-b">true</b>
                  <i className="pro-code__cursor" />
                </span>
                <span className="pro-code__ln">{'};'}</span>
              </code>
            </div>
          </div>

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
              <img className="mask__img mask__img--hero" src={spiderCutout} alt="Spider-Man" loading="lazy" />
              <img className="mask__img mask__img--face" src={profileCut} alt="Aymen Jallouli" />
              <img className="mask__spider" src={spiderSvg} alt="" aria-hidden="true" loading="lazy" />
              <span className="grabber" aria-hidden="true">
                <span className="grabber__inner">
                  <span className="grabber__thread" />
                  <img className="grabber__spider" src={spiderSvg} alt="" loading="lazy" />
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
