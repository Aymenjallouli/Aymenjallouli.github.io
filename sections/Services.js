'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { SERVICES, formatPrice } from '@/lib/pricing';
import { CurrencySwitch, useQuote } from '@/components/QuoteProvider';
import { CheckIcon, ClockIcon, ServiceIcon } from '@/components/icons';
import Reveal from '@/components/Reveal';
import TT from '@/components/ThemeText';

/**
 * Services with their starting prices. Every card opens the quote builder on
 * that service, so a visitor goes from "how much?" to a WhatsApp message
 * without leaving the page.
 */
const Services = () => {
  const { lang, t } = useLanguage();
  const { open, currency } = useQuote();

  return (
    <section id="services" className="svc">
      <div className="dots svc__dots" />
      <div className="wrap wrap--wide">
        <div className="svc__head">
          <div>
            <div className="tag" style={{ transform: 'rotate(1deg)' }}>
              <TT k="services.issue" />
            </div>
            <h2 className="h-section">
              <TT k="services.title" />
            </h2>
            <p className="svc__intro">{t('services.intro')}</p>
          </div>
          <CurrencySwitch className="svc__cur" />
        </div>

        <div className="svc__grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} className="rv--fill" delay={Math.min(i, 5) * 50}>
              <article className={`panel svc-card ${i % 2 ? 'tilt-r' : 'tilt-l'}${s.popular ? ' is-popular' : ''}`}>
                {s.popular && (
                  <div className="svc-card__flag">
                    ★ <TT k="services.popular" />
                  </div>
                )}
                <div className="svc-card__icon" aria-hidden="true">
                  <ServiceIcon id={s.id} />
                </div>
                <h3 className="svc-card__name">{s.name[lang]}</h3>
                <p className="svc-card__pitch">{s.pitch[lang]}</p>

                <div className="svc-card__price">
                  <span className="svc-card__from">{t('services.from')}</span>
                  <span className="svc-card__amount">{formatPrice(s.price[currency], currency, lang)}</span>
                  {t(`units.${s.unit}`) && <span className="svc-card__unit">{t(`units.${s.unit}`)}</span>}
                </div>

                <ul className="svc-card__incl">
                  {s.includes[lang].map((x) => (
                    <li key={x}>
                      <CheckIcon />
                      {x}
                    </li>
                  ))}
                </ul>

                <div className="svc-card__eta">
                  <ClockIcon /> {s.delivery[lang]}
                </div>

                <button type="button" className="btn btn--red svc-card__btn" onClick={() => open(s.id)}>
                  <TT k="services.configure" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="svc__foot">
          <p>{t('services.note')}</p>
          <button type="button" className="btn btn--yellow" onClick={() => open()}>
            <TT k="services.custom" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
