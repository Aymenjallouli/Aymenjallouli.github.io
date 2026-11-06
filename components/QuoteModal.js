'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { track } from '@vercel/analytics';

import { useLanguage } from '@/lib/LanguageContext';
import { PERSON } from '@/lib/site';
import { SERVICES, formatPrice, priceSelection, whatsappUrl } from '@/lib/pricing';
import { CheckIcon, ClockIcon, ServiceIcon, WhatsAppIcon } from '@/components/icons';
import { CurrencySwitch, useQuote } from './QuoteProvider';

const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

/** The plain-text quote that lands in WhatsApp (or the email body). */
function buildMessage({ lang, t, lines, once, monthly, currency, form }) {
  const money = (n) => formatPrice(n, currency, lang);
  const unit = (s) => (t(`units.${s.unit}`) ? ` ${t(`units.${s.unit}`)}` : '');
  // French typography puts a space before the colon; English does not.
  const kv = (k, v) => `${k}${lang === 'fr' ? ' : ' : ': '}${v}`;
  const out = [t('quote.msgHello'), '', t('quote.msgIntro'), ''];

  lines.forEach(({ service, feats }) => {
    out.push(`• ${service.name[lang]} — ${t('quote.msgFrom')} ${money(service.price[currency])}${unit(service)}`);
    feats.forEach((f) => out.push(`   + ${f[lang]} — ${money(f.price[currency])}`));
  });

  out.push('');
  if (once) out.push(kv(t('quote.msgTotal'), money(once)));
  if (monthly) out.push(kv(t('quote.monthly'), `${money(monthly)} ${t('units.month')}`));
  out.push('');
  out.push(kv(t('quote.msgName'), form.name.trim()));
  if (form.company.trim()) out.push(kv(t('quote.msgCompany'), form.company.trim()));
  out.push(kv(t('quote.msgTimeline'), t('quote.timelines')[form.timeline]));
  if (form.notes.trim()) out.push(kv(t('quote.msgNotes'), form.notes.trim()));

  return out.join('\n');
}

export default function QuoteModal() {
  const { lang, t } = useLanguage();
  const { close, active, setActive, selection, setSelection, currency } = useQuote();
  const [form, setForm] = useState({ name: '', company: '', timeline: 0, notes: '' });
  const [error, setError] = useState('');

  const panelRef = useRef(null);
  const nameRef = useRef(null);
  const summaryRef = useRef(null);
  const tabRefs = useRef({});

  const current = SERVICES.find((s) => s.id === active) || SERVICES.find((s) => selection[s.id]) || SERVICES[0];
  const { lines, once, monthly } = useMemo(() => priceSelection(selection, currency), [selection, currency]);
  const money = (n) => formatPrice(n, currency, lang);
  const unit = (s) => t(`units.${s.unit}`);

  /* Lock the page, trap focus inside, Esc closes, and hand focus back after. */
  useEffect(() => {
    const opener = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const first = tabRefs.current[current.id];
    (first || panelRef.current)?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;
      const items = [...panelRef.current.querySelectorAll(FOCUSABLE)].filter((el) => el.offsetParent !== null);
      if (!items.length) return;
      const [head, tail] = [items[0], items[items.length - 1]];
      if (e.shiftKey && document.activeElement === head) {
        e.preventDefault();
        tail.focus();
      } else if (!e.shiftKey && document.activeElement === tail) {
        e.preventDefault();
        head.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      if (opener && opener.focus) opener.focus();
    };
    // run once per opening — `current` is only read for the initial focus
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [close]);

  const inQuote = Boolean(selection[current.id]);

  const toggleService = useCallback(
    (id) => {
      setError('');
      setSelection((sel) => {
        const next = { ...sel };
        if (next[id]) delete next[id];
        else next[id] = [];
        return next;
      });
    },
    [setSelection]
  );

  /* Ticking an option implies the service itself. */
  const toggleFeature = (sid, fid) => {
    setError('');
    setSelection((sel) => {
      const feats = sel[sid] || [];
      return { ...sel, [sid]: feats.includes(fid) ? feats.filter((f) => f !== fid) : [...feats, fid] };
    });
  };

  const onTabKey = (e, i) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next = SERVICES[(i + (e.key === 'ArrowRight' ? 1 : -1) + SERVICES.length) % SERVICES.length];
    setActive(next.id);
    tabRefs.current[next.id]?.focus();
  };

  const send = (via) => {
    if (!lines.length) {
      setError(t('quote.needService'));
      return;
    }
    if (!form.name.trim()) {
      setError(t('quote.needName'));
      nameRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' });
      nameRef.current?.focus({ preventScroll: true });
      return;
    }
    setError('');
    const text = buildMessage({ lang, t, lines, once, monthly, currency, form });
    track('quote_sent', { via, services: lines.map((l) => l.service.id).join(','), total: once, monthly, currency });
    if (via === 'whatsapp') {
      window.open(whatsappUrl(text), '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = `mailto:${PERSON.email}?subject=${encodeURIComponent(t('quote.emailSubject'))}&body=${encodeURIComponent(text)}`;
    }
  };

  const field = (key) => ({
    value: form[key],
    onChange: (e) => {
      setError('');
      setForm((f) => ({ ...f, [key]: key === 'timeline' ? Number(e.target.value) : e.target.value }));
    },
  });

  return (
    <div className="qm" role="presentation">
      <div className="qm__backdrop" onClick={close} aria-hidden="true" />
      <div className="qm__panel" role="dialog" aria-modal="true" aria-labelledby="qm-title" ref={panelRef} tabIndex={-1}>
        <header className="qm__head">
          <div className="qm__head-copy">
            <h2 id="qm-title" className="qm__title">
              {t('quote.title')}
            </h2>
            <p className="qm__sub">{t('quote.subtitle')}</p>
          </div>
          <CurrencySwitch className="qm__cur" />
          <button type="button" className="qm__x" onClick={close} aria-label={t('a11y.close')}>
            ×
          </button>
        </header>

        <div className="qm__tabs" role="tablist" aria-label={t('quote.tabs')}>
          {SERVICES.map((s, i) => (
            <button
              key={s.id}
              ref={(el) => {
                tabRefs.current[s.id] = el;
              }}
              type="button"
              role="tab"
              id={`qm-tab-${s.id}`}
              aria-selected={current.id === s.id}
              aria-controls="qm-tabpanel"
              tabIndex={current.id === s.id ? 0 : -1}
              className={`qm__tab${current.id === s.id ? ' is-active' : ''}${selection[s.id] ? ' is-picked' : ''}`}
              onClick={() => setActive(s.id)}
              onKeyDown={(e) => onTabKey(e, i)}
            >
              <ServiceIcon id={s.id} size={18} />
              <span>{s.name[lang]}</span>
              {selection[s.id] && (
                <span className="qm__tab-check" aria-hidden="true">
                  <CheckIcon size={11} />
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="qm__body">
          <section className="qm__svc" role="tabpanel" id="qm-tabpanel" aria-labelledby={`qm-tab-${current.id}`}>
            <div className="qm__svc-head">
              <span className="qm__svc-icon" aria-hidden="true">
                <ServiceIcon id={current.id} size={26} />
              </span>
              <div className="qm__svc-name">
                <h3>{current.name[lang]}</h3>
                <p>{current.pitch[lang]}</p>
              </div>
              <div className="qm__svc-price">
                <span>{t('services.from')}</span>
                <strong>{money(current.price[currency])}</strong>
                {unit(current) && <em>{unit(current)}</em>}
              </div>
            </div>

            <div className="qm__svc-row">
              <span className="qm__eta">
                <ClockIcon /> {current.delivery[lang]}
              </span>
              <button
                type="button"
                className={`qm__add${inQuote ? ' is-on' : ''}`}
                aria-pressed={inQuote}
                onClick={() => toggleService(current.id)}
              >
                {inQuote ? (
                  <>
                    <CheckIcon /> {t('quote.added')}
                  </>
                ) : (
                  <>+ {t('quote.add')}</>
                )}
              </button>
            </div>

            <h4 className="qm__h4">{t('quote.included')}</h4>
            <ul className="qm__incl">
              {current.includes[lang].map((x) => (
                <li key={x}>
                  <CheckIcon />
                  {x}
                </li>
              ))}
            </ul>

            <h4 className="qm__h4">{t('quote.options')}</h4>
            <div className="qm__opts">
              {current.features.map((f) => {
                const on = Boolean(selection[current.id] && selection[current.id].includes(f.id));
                return (
                  <label key={f.id} className={`qm__opt${on ? ' is-on' : ''}`}>
                    <input type="checkbox" checked={on} onChange={() => toggleFeature(current.id, f.id)} />
                    <span className="qm__opt-box" aria-hidden="true">
                      <CheckIcon size={12} />
                    </span>
                    <span className="qm__opt-name">{f[lang]}</span>
                    <span className="qm__opt-price">+{money(f.price[currency])}</span>
                  </label>
                );
              })}
            </div>
          </section>

          <aside className="qm__sum" ref={summaryRef} aria-labelledby="qm-sum-title">
            <h3 id="qm-sum-title" className="qm__sum-title">
              {t('quote.summary')}
            </h3>

            {lines.length === 0 ? (
              <p className="qm__empty">{t('quote.empty')}</p>
            ) : (
              <ul className="qm__lines">
                {lines.map(({ service, feats, total }) => (
                  <li key={service.id} className="qm__line">
                    <button type="button" className="qm__line-name" onClick={() => setActive(service.id)}>
                      {service.name[lang]}
                    </button>
                    <span className="qm__line-total">
                      {money(total)}
                      {unit(service) && <small> {unit(service)}</small>}
                    </span>
                    <button
                      type="button"
                      className="qm__line-rm"
                      onClick={() => toggleService(service.id)}
                      aria-label={`${t('quote.remove')} — ${service.name[lang]}`}
                    >
                      ×
                    </button>
                    {feats.length > 0 && (
                      <ul className="qm__line-feats">
                        {feats.map((f) => (
                          <li key={f.id}>+ {f[lang]}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}

            <div className="qm__totals" aria-live="polite">
              <div className="qm__total">
                <span>{t('quote.oneTime')}</span>
                <strong>{money(once)}</strong>
              </div>
              {monthly > 0 && (
                <div className="qm__total qm__total--m">
                  <span>{t('quote.monthly')}</span>
                  <strong>
                    + {money(monthly)} <small>{t('units.month')}</small>
                  </strong>
                </div>
              )}
            </div>

            <div className="qm__form">
              <label>
                <span>{t('quote.name')} *</span>
                <input ref={nameRef} type="text" autoComplete="name" placeholder={t('quote.namePh')} {...field('name')} />
              </label>
              <label>
                <span>{t('quote.company')}</span>
                <input type="text" autoComplete="organization" placeholder={t('quote.companyPh')} {...field('company')} />
              </label>
              <label>
                <span>{t('quote.timeline')}</span>
                <select {...field('timeline')}>
                  {t('quote.timelines').map((label, i) => (
                    <option key={label} value={i}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="qm__form-wide">
                <span>{t('quote.notes')}</span>
                <textarea rows={3} placeholder={t('quote.notesPh')} {...field('notes')} />
              </label>
            </div>

            {error && (
              <p className="qm__err" role="alert">
                {error}
              </p>
            )}

            <button type="button" className="qm__wa" onClick={() => send('whatsapp')}>
              <WhatsAppIcon /> {t('quote.send')}
            </button>
            <button type="button" className="qm__mail" onClick={() => send('email')}>
              {t('quote.email')}
            </button>
            <p className="qm__disc">{t('quote.disclaimer')}</p>
          </aside>
        </div>

        {/* Phones: the summary sits below the fold, so the running total and
            the way to it stay pinned to the bottom of the sheet. */}
        <div className="qm__bar">
          <div className="qm__bar-total">
            <span>{t('quote.oneTime')}</span>
            <strong>
              {money(once)}
              {monthly > 0 && (
                <small>
                  {' '}
                  + {money(monthly)} {t('units.month')}
                </small>
              )}
            </strong>
          </div>
          <button type="button" className="qm__bar-btn" onClick={() => summaryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            {t('quote.review')} ↓
          </button>
        </div>
      </div>
    </div>
  );
}
