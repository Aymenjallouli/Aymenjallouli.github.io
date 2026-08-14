import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import Reveal from '../components/Reveal';

const Origin = () => {
  const { t } = useLanguage();
  const bio = t('about.bio');

  return (
    <section id="origin" className="origin">
      <div className="wrap">
        <div className="tag" style={{ transform: 'rotate(-1.5deg)' }}>
          {t('about.issue')}
        </div>
        <h2 className="h-section">{t('about.title')}</h2>

        <div className="two-col">
          <Reveal>
            <div className="tag tag--red" style={{ transform: 'rotate(-1deg)', position: 'relative', zIndex: 2 }}>
              {t('about.whoTitle')}
            </div>
            <div className="panel origin__card">
              <span className="panel__dots" aria-hidden="true" />
              <p className="origin__lead">{bio[0]}</p>
              <p className="origin__p">{bio[1]}</p>
              <p className="origin__p">{bio[2]}</p>
            </div>
          </Reveal>

          <div>
            <div className="tag tag--red" style={{ transform: 'rotate(1deg)', position: 'relative', zIndex: 2 }}>
              {t('about.sagaTitle')}
            </div>
            <div className="timeline">
              {t('about.timeline').map((tl, i) => (
                <Reveal key={tl.role} delay={i * 60}>
                  <div className={`panel tl ${i % 2 ? 'tilt-r' : 'tilt-l'}`}>
                    <div className="tl__num">{i + 1}</div>
                    <div className="tl__period">{tl.period}</div>
                    <h3 className="tl__role">{tl.role}</h3>
                    <p className="tl__text">{tl.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Origin;
