'use client';

import Link from 'next/link';

import Nav from '@/components/Nav';
import SiteFooter from '@/sections/SiteFooter';
import Reveal from '@/components/Reveal';
import { useLanguage } from '@/lib/LanguageContext';
import { CATEGORY_LABELS } from '@/lib/translations';
import { PROJECTS } from '@/lib/projects';
import { pagePaths } from '@/lib/seo';
import { localePath } from '@/lib/site';

const webLines = '/assets/spidey/web-lines.webp';

/**
 * Every project, unpaginated and server-rendered.
 *
 * The home page shows four cards behind a "see more" button, which means the
 * other thirteen only exist after a click — invisible to a crawler. This page
 * is the flat, fully-rendered index that makes all of them reachable, and the
 * hub that links out to each detail page.
 */
export default function ProjectsIndex() {
  const { lang, t } = useLanguage();
  const home = localePath(lang);
  const cat = (c) => CATEGORY_LABELS[lang][c] || c;

  return (
    <div className="page">
      <a className="skip-link" href="#main">
        {t('a11y.skip')}
      </a>

      <Nav base={home} paths={pagePaths.projects} spy={false} />

      <main id="main" className="proj-page">
        <img className="proj-page__lines" src={webLines} alt="" aria-hidden="true" />

        <div className="wrap wrap--wide">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href={home}>{t('nav.home')}</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">{t('nav.projects')}</span>
          </nav>

          <div className="tag" style={{ transform: 'rotate(-1deg)' }}>
            {t('pages.projectsCount')(PROJECTS.length)}
          </div>
          <h1 className="proj-page__title">{t('pages.projectsTitle')}</h1>
          <p className="proj-page__lead">{t('pages.projectsIntro')}</p>

          <div className="projects__grid projects__grid--index">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.slug} className="rv--fill" delay={Math.min(i, 5) * 40}>
                <article className={`panel card ${i % 2 ? 'tilt-r' : 'tilt-l'}`}>
                  <div className="card__shot">
                    <img src={p.img} alt={p.t} loading="lazy" decoding="async" />
                    <span className="dots" aria-hidden="true" />
                  </div>

                  {p.feat && <div className="card__flag card__flag--feat">★ {t('proj.featured')}</div>}
                  {p.priv && <div className="card__flag card__flag--priv">{t('proj.private')}</div>}

                  <div className="card__body">
                    <div className="card__cats">{p.cats.map(cat).join(' • ')}</div>
                    <h2 className="card__title">
                      <Link href={pagePaths.project(p.slug)[lang]} className="card__title-link">
                        {p.t}
                      </Link>
                    </h2>
                    <p className="card__desc">{p[lang]}</p>

                    <div className="card__tech">
                      {p.tech.map((tk) => (
                        <span key={tk} className="chip">
                          {tk}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="panel proj-cta">
            <span className="dots" aria-hidden="true" />
            <h2>{t('pages.ctaTitle')}</h2>
            <p>{t('pages.ctaText')}</p>
            <a className="btn btn--yellow" href={`${home}#contact`}>
              {t('pages.ctaButton')}
            </a>
          </div>
        </div>
      </main>

      <SiteFooter base={home} />
    </div>
  );
}
