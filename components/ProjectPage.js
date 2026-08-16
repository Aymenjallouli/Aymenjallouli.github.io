'use client';

import Link from 'next/link';

import Nav from '@/components/Nav';
import SiteFooter from '@/sections/SiteFooter';
import { useLanguage } from '@/lib/LanguageContext';
import { CATEGORY_LABELS } from '@/lib/translations';
import { PROJECTS } from '@/lib/projects';
import { pagePaths } from '@/lib/seo';
import { localePath } from '@/lib/site';

const webLines = '/assets/spidey/web-lines.webp';

/** Up to three siblings, preferring ones that share a category. */
function related(project) {
  const others = PROJECTS.filter((p) => p.slug !== project.slug);
  const sameCat = others.filter((p) => p.cats.some((c) => project.cats.includes(c)));
  return [...sameCat, ...others.filter((p) => !sameCat.includes(p))].slice(0, 3);
}

export default function ProjectPage({ slug }) {
  const { lang, t } = useLanguage();
  const project = PROJECTS.find((p) => p.slug === slug);
  const home = localePath(lang);
  const paths = pagePaths.project(slug);
  const cat = (c) => CATEGORY_LABELS[lang][c] || c;

  return (
    <div className="page">
      <a className="skip-link" href="#main">
        {t('a11y.skip')}
      </a>

      <Nav base={home} paths={paths} spy={false} />

      <main id="main" className="proj-page">
        <img className="proj-page__lines" src={webLines} alt="" aria-hidden="true" />

        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href={home}>{t('nav.home')}</Link>
            <span aria-hidden="true">›</span>
            <Link href={pagePaths.projects[lang]}>{t('nav.projects')}</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">{project.t}</span>
          </nav>

          <div className="tag" style={{ transform: 'rotate(-1deg)' }}>
            {project.cats.map(cat).join(' • ')}
          </div>
          <h1 className="proj-page__title">{project.t}</h1>
          <p className="proj-page__lead">{project[lang]}</p>

          <div className="proj-page__actions">
            {project.live && (
              <a className="btn btn--red" href={project.live} target="_blank" rel="noopener noreferrer">
                ▶ {t('pages.visit')}
              </a>
            )}
            {project.gh && (
              <a className="btn btn--yellow" href={project.gh} target="_blank" rel="noopener noreferrer">
                &lt;/&gt; {t('pages.sourceCode')}
              </a>
            )}
            {project.priv && <span className="mini mini--priv">{t('pages.privateRepo')}</span>}
          </div>

          <div className="panel proj-shot">
            <img src={project.img} alt={`${project.t} — ${project[lang].slice(0, 80)}`} width="1200" height="750" />
            <span className="dots" aria-hidden="true" />
          </div>

          <div className="proj-meta">
            <div className="panel proj-meta__box">
              <h2>{t('pages.stack')}</h2>
              <div className="power__items">
                {project.tech.map((tk) => (
                  <span key={tk} className="chip">
                    {tk}
                  </span>
                ))}
              </div>
            </div>

            <div className="panel proj-meta__box">
              <h2>{t('pages.category')}</h2>
              <div className="power__items">
                {project.cats.map((c) => (
                  <span key={c} className="chip">
                    {cat(c)}
                  </span>
                ))}
              </div>
              {project.city && (
                <>
                  <h2 className="proj-meta__h2--gap">{t('pages.location')}</h2>
                  <div className="power__items">
                    <span className="chip">{project.city}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          <h2 className="h-section proj-page__rel-h">{t('pages.related')}</h2>
          <div className="rel-grid">
            {related(project).map((p) => (
              <Link key={p.slug} href={pagePaths.project(p.slug)[lang]} className="panel rel-card">
                <img src={p.img} alt="" loading="lazy" decoding="async" />
                <div className="rel-card__body">
                  <span className="rel-card__cats">{p.cats.map(cat).join(' • ')}</span>
                  <span className="rel-card__title">{p.t}</span>
                </div>
              </Link>
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
