import React, { useMemo, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { CATEGORIES, CATEGORY_LABELS } from '../i18n/translations';
import { PROJECTS } from '../data/projects';
import Reveal from '../components/Reveal';
import webLines from '../assets/spidey/web-lines.webp';
import spiderSvg from '../assets/spidey/spider.svg';

const Work = () => {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState('Tout');

  const shown = useMemo(() => PROJECTS.filter((p) => filter === 'Tout' || p.cats.includes(filter)), [filter]);

  return (
    <section id="projects" className="projects">
      <div className="dots projects__dots" />
      <img className="projects__lines" src={webLines} alt="" aria-hidden="true" />
      <img className="projects__crawler" src={spiderSvg} alt="" aria-hidden="true" />

      <div className="wrap wrap--wide">
        <div className="tag" style={{ transform: 'rotate(-1deg)' }}>
          {t('proj.issue')}
        </div>
        <h2 className="h-section">{t('proj.title')}</h2>

        <div className="filters" role="group" aria-label={t('proj.filterLabel')}>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              className={`filter${filter === c ? ' is-on' : ''}`}
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
            >
              {CATEGORY_LABELS[lang][c]}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {shown.map((p, i) => (
            <Reveal key={p.t} className="rv--fill" delay={Math.min(i, 5) * 50}>
              <article className={`panel card ${i % 2 ? 'tilt-r' : 'tilt-l'}`}>
                <div className="card__shot">
                  <img src={p.img} alt={p.t} loading="lazy" decoding="async" />
                  <span className="dots" aria-hidden="true" />
                </div>

                {p.feat && <div className="card__flag card__flag--feat">★ {t('proj.featured')}</div>}
                {p.priv && <div className="card__flag card__flag--priv">{t('proj.private')}</div>}

                <div className="card__body">
                  <div className="card__cats">{p.cats.map((c) => CATEGORY_LABELS[lang][c]).join(' • ')}</div>
                  <h3 className="card__title">{p.t}</h3>
                  <p className="card__desc">{p[lang]}</p>

                  <div className="card__tech">
                    {p.tech.map((tk) => (
                      <span key={tk} className="chip">
                        {tk}
                      </span>
                    ))}
                  </div>

                  <div className="card__links">
                    {p.gh && (
                      <a className="mini mini--code" href={p.gh} target="_blank" rel="noopener noreferrer">
                        &lt;/&gt; {t('proj.code')}
                      </a>
                    )}
                    {p.live && (
                      <a className="mini mini--live" href={p.live} target="_blank" rel="noopener noreferrer">
                        ▶ {t('proj.live')}
                      </a>
                    )}
                    {p.priv && <span className="mini mini--priv">{t('proj.privateTitle')}</span>}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {shown.length === 0 && (
          <div className="empty">
            <span>{t('proj.none')}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
