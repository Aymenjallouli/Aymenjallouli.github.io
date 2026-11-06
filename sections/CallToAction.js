'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { useQuote } from '@/components/QuoteProvider';
import TT from '@/components/ThemeText';
const spideyHanging = '/assets/spidey/spidey-hanging.webp';

const CallToAction = () => {
  const { t } = useLanguage();
  const { open } = useQuote();

  return (
    <section className="cta">
      <div className="cta__panel">
        <span className="dots" aria-hidden="true" />
        <span className="cta__rays" aria-hidden="true" />
        <div className="cta__hang" aria-hidden="true">
          <img src={spideyHanging} alt="" loading="lazy" decoding="async" />
        </div>
        <h2 className="cta__title">
          <TT k="cta.title" />
        </h2>
        <p className="cta__text">{t('cta.text')}</p>
        <button type="button" className="btn btn--yellow cta__btn" onClick={() => open()}>
          <TT k="cta.button" />
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
