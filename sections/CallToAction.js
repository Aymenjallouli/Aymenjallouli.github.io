'use client';

import { useLanguage } from '@/lib/LanguageContext';
const spideyHanging = '/assets/spidey/spidey-hanging.webp';

const CallToAction = () => {
  const { t } = useLanguage();

  return (
    <section className="cta">
      <div className="cta__panel">
        <span className="dots" aria-hidden="true" />
        <span className="cta__rays" aria-hidden="true" />
        <div className="cta__hang" aria-hidden="true">
          <img src={spideyHanging} alt="" loading="lazy" decoding="async" />
        </div>
        <h2 className="cta__title">{t('cta.title')}</h2>
        <p className="cta__text">{t('cta.text')}</p>
        <a href="#contact" className="btn btn--yellow cta__btn">
          {t('cta.button')}
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
