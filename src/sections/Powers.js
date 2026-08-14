import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import Reveal from '../components/Reveal';

const Powers = () => {
  const { t } = useLanguage();

  return (
    <section id="powers" className="powers">
      <div className="wrap">
        <div className="tag" style={{ transform: 'rotate(1deg)' }}>
          {t('skills.issue')}
        </div>
        <h2 className="h-section">{t('skills.title')}</h2>

        <div className="powers__grid">
          {t('skills.groups').map((g, i) => (
            <Reveal key={g.category} className="rv--fill" delay={i * 60}>
              <div className={`panel power ${i % 2 ? 'tilt-r' : 'tilt-l'}`}>
                <h3>{g.category}</h3>
                <div className="power__items">
                  {g.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Powers;
