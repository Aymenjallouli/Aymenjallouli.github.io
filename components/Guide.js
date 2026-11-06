'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { track } from '@vercel/analytics';

import { useLanguage } from '@/lib/LanguageContext';
import { useReducedMotion } from '@/lib/useMedia';
import { whatsappUrl } from '@/lib/pricing';
import { useQuote } from './QuoteProvider';
import { WhatsAppIcon } from './icons';

/* Set only when the visitor closes the guide themselves. A new key (the old
   one was "aj-guide") so everyone sees the always-on guide at least once. */
const CLOSED_KEY = 'aj-guide-closed';

/**
 * What each tour step points at, in order. Lines up index-for-index with
 * `guide.steps` in translations; a step whose target is missing from the page
 * is dropped rather than leaving the spotlight on nothing.
 */
const STEP_TARGETS = [
  '.hero__copy',
  '.stats__grid',
  '#origin .two-col',
  '.powers__grid',
  '#projects .projects__grid',
  '#services .svc__grid',
  '[data-tour="theme"]',
  '#contact .two-col',
];

const greetingKey = () => {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return 'greetMorning';
  if (h >= 12 && h < 18) return 'greetAfternoon';
  return 'greetEvening';
};

/** Aymen in the pro theme, Spider-Man in the comic one — CSS picks. */
const Avatar = ({ size }) => (
  <span className="g-avatar" style={{ width: size, height: size }} aria-hidden="true">
    <img className="th-p" src="/assets/guide-aymen.webp" alt="" width={size} height={size} />
    <img className="th-s" src="/assets/guide-spidey.webp" alt="" width={size} height={size} loading="lazy" />
  </span>
);

const CompassIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
  </svg>
);

const TagIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9-9-9z" />
    <circle cx="8" cy="8" r="1.6" />
  </svg>
);

/* =========================================================================
   The tour: a spotlight on one part of the page at a time, with a card that
   explains it. Previous / Next buttons, ← → keys, Esc to leave.
   ========================================================================= */
function Tour({ steps, index, setIndex, onEnd, onQuote }) {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const cardRef = useRef(null);
  const [rect, setRect] = useState(null);
  const [view, setView] = useState({ w: window.innerWidth, h: window.innerHeight });

  const step = steps[index];
  const last = index === steps.length - 1;
  const go = useCallback((d) => setIndex((i) => Math.min(steps.length - 1, Math.max(0, i + d))), [steps.length, setIndex]);

  useEffect(() => {
    cardRef.current?.focus({ preventScroll: true });
  }, []);

  /* Bring the step's target into view. Small targets are centred in the room
     left over; tall ones start just under the nav. On phones the card is a
     bottom sheet, so its height comes off that room too. */
  useEffect(() => {
    const el = document.querySelector(step.sel);
    if (!el || el.closest('.nav')) return;
    const r = el.getBoundingClientRect();
    const nav = document.querySelector('.nav');
    const navH = nav ? nav.getBoundingClientRect().height : 70;
    const sheet = window.innerWidth < 720 && cardRef.current ? cardRef.current.offsetHeight + 16 : 0;
    const room = window.innerHeight - navH - sheet - 24;
    let top = r.top + window.scrollY - navH - 12;
    if (r.height < room) top -= (room - r.height) / 2;
    window.scrollTo({ top: Math.max(0, top), behavior: reduced ? 'auto' : 'smooth' });
  }, [step.sel, reduced]);

  /* The spotlight follows its target every frame — through the smooth
     scroll, reveal animations and any scrolling the visitor does. */
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const el = document.querySelector(step.sel);
      if (el) {
        const r = el.getBoundingClientRect();
        setRect((p) =>
          p && Math.abs(p.top - r.top) < 0.5 && Math.abs(p.left - r.left) < 0.5 && Math.abs(p.width - r.width) < 0.5 && Math.abs(p.height - r.height) < 0.5
            ? p
            : { top: r.top, left: r.left, width: r.width, height: r.height }
        );
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [step.sel]);

  useEffect(() => {
    const onResize = () => setView({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      const tag = (e.target && e.target.tagName ? e.target.tagName : '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
      if (e.key === 'ArrowRight' && !last) {
        e.preventDefault();
        go(1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      } else if (e.key === 'Escape') {
        onEnd(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, last, onEnd]);

  const PAD = 10;
  let spot = null;
  if (rect) {
    const top = Math.max(4, rect.top - PAD);
    const left = Math.max(4, rect.left - PAD);
    const bottom = Math.min(view.h - 4, rect.top + rect.height + PAD);
    const right = Math.min(view.w - 4, rect.left + rect.width + PAD);
    spot = { top, left, width: Math.max(0, right - left), height: Math.max(0, bottom - top) };
  }

  /* Where the card sits: a bottom sheet on phones; on larger screens, under a
     target in the nav bar, or in the bottom corner away from the target. */
  let place = 'br';
  let cardStyle;
  if (view.w < 720) place = 'sheet';
  else if (rect && rect.top < 100 && rect.height < 90) {
    place = 'below';
    cardStyle = { top: rect.top + rect.height + 18, right: Math.max(16, view.w - (rect.left + rect.width) - 10) };
  } else if (rect && rect.left + rect.width / 2 > view.w * 0.55 && rect.width < view.w * 0.6) {
    place = 'bl';
  }

  return (
    <>
      <div className="tour__shade" aria-hidden="true" style={spot || undefined} />
      <div
        ref={cardRef}
        className={`tour__card tour__card--${place}`}
        style={cardStyle}
        role="dialog"
        aria-modal="false"
        aria-labelledby="tour-title"
        aria-describedby="tour-text"
        tabIndex={-1}
      >
        <div className="tour__top">
          <Avatar size={38} />
          <div className="tour__who">
            <strong>Aymen</strong>
            <span>{t('guide.role')}</span>
          </div>
          <span className="tour__count">
            {index + 1} / {steps.length}
          </span>
          <button type="button" className="tour__x" onClick={() => onEnd(false)} aria-label={t('guide.skip')}>
            ×
          </button>
        </div>

        <div className="tour__bar" aria-hidden="true">
          <span style={{ width: `${((index + 1) / steps.length) * 100}%` }} />
        </div>

        <div className="tour__copy" key={index} aria-live="polite">
          <h3 id="tour-title" className="tour__title">
            {step.title}
          </h3>
          <p id="tour-text" className="tour__text">
            {step.text}
          </p>
        </div>

        <div className="tour__nav">
          <button type="button" className="g-btn g-btn--ghost" onClick={() => go(-1)} disabled={index === 0}>
            ← {t('guide.prev')}
          </button>
          <div className="tour__nav-end">
            {last ? (
              <>
                <button type="button" className="g-btn g-btn--ghost" onClick={() => onEnd(true)}>
                  {t('guide.finish')}
                </button>
                <button type="button" className="g-btn g-btn--primary" onClick={onQuote}>
                  {t('guide.quote')}
                </button>
              </>
            ) : (
              <button type="button" className="g-btn g-btn--primary" onClick={() => go(1)}>
                {t('guide.next')} →
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

/* =========================================================================
   The guide: the character pops up on every visit and asks whether the
   visitor wants a tour or to explore alone. It never hides by itself — the
   bubble stays until the visitor closes it (×, the avatar, or Esc), and only
   that explicit close is remembered. Closed, it stays docked as a launcher
   offering the tour, the quote builder and WhatsApp.
   ========================================================================= */
export default function Guide() {
  const { t } = useLanguage();
  const { open: openQuote, isOpen: quoteOpen } = useQuote();
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState('off'); // off | welcome | alone | menu | tour
  const [typing, setTyping] = useState(false);
  const [greet, setGreet] = useState('greetMorning');
  const [steps, setSteps] = useState([]);
  const [index, setIndex] = useState(0);

  /* Wait a beat for the hero to land, then say hello — unless this visitor
     has closed the guide before. */
  useEffect(() => {
    setMounted(true);
    setGreet(greetingKey());
    let closed = false;
    try {
      closed = localStorage.getItem(CLOSED_KEY) === '1';
    } catch (e) {
      /* storage blocked — show the guide */
    }
    if (closed) return undefined;
    const id = setTimeout(() => {
      setMode((m) => (m === 'off' ? 'welcome' : m));
      setTyping(true);
    }, 1800);
    return () => clearTimeout(id);
  }, []);

  /* A short "typing…" beat before the message, like a real chat. */
  useEffect(() => {
    if (!typing) return undefined;
    const id = setTimeout(() => setTyping(false), 1100);
    return () => clearTimeout(id);
  }, [typing]);

  /* The visitor's explicit "go away" — the only thing that hides the bubble. */
  const close = useCallback(() => {
    try {
      localStorage.setItem(CLOSED_KEY, '1');
    } catch (e) {
      /* ignore */
    }
    setMode('off');
  }, []);

  useEffect(() => {
    if (mode !== 'welcome' && mode !== 'menu' && mode !== 'alone') return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mode, close]);

  const startTour = () => {
    const copy = t('guide.steps');
    const list = STEP_TARGETS.map((sel, i) => ({ sel, ...copy[i] })).filter((s) => document.querySelector(s.sel));
    if (!list.length) return;
    setSteps(list);
    setIndex(0);
    setMode('tour');
    track('tour_start');
  };

  /* "Explore alone" keeps the bubble open with the shortcuts, until closed. */
  const goAlone = () => {
    setMode('alone');
    track('tour_declined');
  };

  /* Finishing or leaving the tour brings the guide back with its options. */
  const endTour = useCallback((completed) => {
    setMode('menu');
    if (completed) track('tour_complete');
  }, []);

  const quoteFromTour = () => {
    endTour(true);
    openQuote();
  };

  const onLauncher = () => {
    if (mode === 'off') setMode('menu');
    else close();
  };

  if (!mounted) return null;

  if (mode === 'tour') {
    return <Tour steps={steps} index={index} setIndex={setIndex} onEnd={endTour} onQuote={quoteFromTour} />;
  }

  const bubble = mode === 'welcome' || mode === 'alone' || mode === 'menu';

  return (
    <div className={`guide${quoteOpen ? ' is-hidden' : ''}`}>
      {bubble && (
        <div className={`guide__bubble guide__bubble--${mode}`} role="dialog" aria-modal="false" aria-labelledby="guide-title" aria-live="polite">
          <button type="button" className="guide__x" onClick={close} aria-label={t('a11y.close')}>
            ×
          </button>
          <div className="guide__who">
            <Avatar size={40} />
            <div>
              <strong id="guide-title">Aymen Jallouli</strong>
              <span>
                <i className="guide__dot" aria-hidden="true" /> {t('guide.role')}
              </span>
            </div>
          </div>

          {mode === 'welcome' &&
            (typing ? (
              <div className="guide__typing">
                <i />
                <i />
                <i />
                <span className="sr-only">…</span>
              </div>
            ) : (
              <div className="guide__msg">
                <p className="guide__hello">{t('guide.hello')(t(`guide.${greet}`))}</p>
                <p className="guide__text">{t('guide.ask')}</p>
                <div className="guide__actions">
                  <button type="button" className="g-btn g-btn--primary" onClick={startTour}>
                    {t('guide.tour')} →
                  </button>
                  <button type="button" className="g-btn g-btn--ghost" onClick={goAlone}>
                    {t('guide.alone')}
                  </button>
                </div>
              </div>
            ))}

          {/* "Explore alone" and the menu share the shortcuts. None of them
              closes the bubble — only the visitor does that. */}
          {(mode === 'alone' || mode === 'menu') && (
            <div className="guide__msg">
              {mode === 'alone' ? (
                <p className="guide__text">{t('guide.aloneMsg')}</p>
              ) : (
                <p className="guide__hello">{t('guide.menuTitle')}</p>
              )}
              <div className="guide__menu">
                <button type="button" className="guide__item" onClick={startTour}>
                  <CompassIcon />
                  {t('guide.menuTour')}
                </button>
                <button type="button" className="guide__item" onClick={() => openQuote()}>
                  <TagIcon />
                  {t('guide.menuQuote')}
                </button>
                <a
                  className="guide__item guide__item--wa"
                  href={whatsappUrl(t('quote.msgHello'))}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track('whatsapp_click', { from: 'guide' })}
                >
                  <WhatsAppIcon size={18} />
                  {t('guide.menuWhatsapp')}
                </a>
              </div>
            </div>
          )}
        </div>
      )}

      <button
        type="button"
        className={`guide__launcher${bubble ? ' is-open' : ''}`}
        onClick={onLauncher}
        aria-expanded={mode === 'menu'}
        aria-label={t('guide.open')}
      >
        <Avatar size={58} />
        <span className="guide__online" aria-hidden="true" />
      </button>
    </div>
  );
}
