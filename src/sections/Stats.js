import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useReducedMotion } from '../hooks/useMedia';

const TARGETS = [3, 20, 12, 15];

const Stats = () => {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const [values, setValues] = useState(() => (reduced ? TARGETS : [0, 0, 0, 0]));

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (reduced || typeof IntersectionObserver === 'undefined') {
      setValues(TARGETS);
      return undefined;
    }

    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const start = performance.now();
        const step = (now) => {
          const p = Math.min(1, (now - start) / 1300);
          const eased = 1 - Math.pow(1 - p, 3);
          setValues(TARGETS.map((v) => Math.round(v * eased)));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <section className="stats" aria-label={t('hero.friendly')}>
      <div className="stats__grid" ref={ref}>
        {t('hero.stats').map((s, i) => (
          <div
            key={s.label}
            className="stat"
            style={{ transform: `rotate(${i % 2 ? 3 : -3}deg)` }}
          >
            <div
              className="stat__inner"
              style={{ background: i % 2 ? 'var(--red)' : 'var(--yellow)', color: i % 2 ? '#fff' : 'var(--ink)' }}
            >
              <div className="stat__n">
                {values[i]}
                {s.suffix}
              </div>
              <div className="stat__label">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
