'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

import { useLanguage } from '@/lib/LanguageContext';
import { CATEGORIES, CATEGORY_LABELS } from '@/lib/translations';
import { PROJECTS } from '@/lib/projects';
import { pagePaths } from '@/lib/seo';
import Reveal from '@/components/Reveal';
import TT from '@/components/ThemeText';

const webLines = '/assets/spidey/web-lines.webp';
const spiderSvg = '/assets/spidey/spider.svg';

/** Cards shown before the "see more" button kicks in, and the step it adds. */
const PAGE_SIZE = 4;

const Work = () => {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState('Tout');
  const [limit, setLimit] = useState(PAGE_SIZE);

  const filtered = useMemo(() => PROJECTS.filter((p) => filter === 'Tout' || p.cats.includes(filter)), [filter]);
  const shown = filtered.slice(0, limit);
  const remaining = filtered.length - shown.length;

  // switching category always starts a fresh page
  const pick = (c) => {
    setFilter(c);
    setLimit(PAGE_SIZE);
  };

  return (
    <section id="projects" className="projects">
      <div className="dots projects__dots" />
      <img className="projects__lines" src={webLines} alt="" aria-hidden="true" loading="lazy" />
      <img className="projects__crawler" src={spiderSvg} alt="" aria-hidden="true" loading="lazy" />

      <div className="wrap wrap--wide">
        <div className="tag" style={{ transform: 'rotate(-1deg)' }}>
          <TT k="proj.issue" />
        </div>
        <h2 className="h-section">
          <TT k="proj.title" />
        </h2>

        <div className="filters" role="group" aria-label={t('proj.filterLabel')}>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              className={`filter${filter === c ? ' is-on' : ''}`}
              onClick={() => pick(c)}
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

                {p.feat && (
                  <div className="card__flag card__flag--feat">
                    ★ <TT k="proj.featured" />
                  </div>
                )}
                {p.priv && (
                  <div className="card__flag card__flag--priv">
                    <TT k="proj.private" />
                  </div>
                )}
                {p.concept && (
                  <div className="card__flag card__flag--concept">
                    <TT k="proj.concept" />
                  </div>
                )}
                {p.wip && (
                  <div className="card__flag card__flag--wip">
                    <TT k="proj.wip" />
                  </div>
                )}

                <div className="card__body">
                  <div className="card__cats">{p.cats.map((c) => CATEGORY_LABELS[lang][c]).join(' • ')}</div>
                  <h3 className="card__title">
                    <Link href={pagePaths.project(p.slug)[lang]} className="card__title-link">
                      {p.t}
                    </Link>
                  </h3>
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
                        &lt;/&gt; <TT k="proj.code" />
                      </a>
                    )}
                    {p.live && (
                      <a className="mini mini--live" href={p.live} target="_blank" rel="noopener noreferrer">
                        <span className="th-s">▶ </span>
                        <TT k="proj.live" />
                        <span className="th-p"> ↗</span>
                      </a>
                    )}
                    {p.priv && <span className="mini mini--priv">{t('proj.privateTitle')}</span>}
                    {p.wip && !p.live && <span className="mini mini--priv">{t('proj.wipTitle')}</span>}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="more">
          {filtered.length > PAGE_SIZE &&
            (remaining > 0 ? (
              <button type="button" className="btn btn--yellow" onClick={() => setLimit(limit + PAGE_SIZE)}>
                <TT k="proj.more" /> (+{remaining})
              </button>
            ) : (
              <button type="button" className="btn btn--ghost" onClick={() => setLimit(PAGE_SIZE)}>
                <TT k="proj.less" />
              </button>
            ))}

          {/* Paging is client state, so the cards past the first page never
              reach the HTML. This link is how a crawler gets to the rest. */}
          <Link href={pagePaths.projects[lang]} className="btn btn--ghost">
            <TT k="proj.all" />
          </Link>
        </div>

        {filtered.length === 0 && (
          <div className="empty">
            <span>{t('proj.none')}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
