'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';

import { useLanguage } from '@/lib/LanguageContext';
import { CURRENCIES, defaultCurrency, guessCurrency } from '@/lib/pricing';

/* The builder only ships to visitors who actually open it. */
const QuoteModal = dynamic(() => import('./QuoteModal'), { ssr: false });

const CURRENCY_KEY = 'aj-currency';
const QuoteContext = createContext(null);

/**
 * Owns the quote: which services and options are picked, in which currency,
 * and whether the builder is open. It lives above every page, so a selection
 * survives closing the modal, and the Services section, the hero, the guide
 * and the project pages all open the same builder.
 */
export function QuoteProvider({ children }) {
  const { lang } = useLanguage();
  const [isOpen, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [selection, setSelection] = useState({});
  const [currency, setCurrencyState] = useState(() => defaultCurrency(lang));

  // The server renders the locale's default; the visitor's saved choice or
  // time zone refines it once we are in the browser.
  useEffect(() => {
    let saved = null;
    try {
      saved = localStorage.getItem(CURRENCY_KEY);
    } catch (e) {
      /* ignore */
    }
    setCurrencyState(CURRENCIES.includes(saved) ? saved : guessCurrency(lang));
  }, [lang]);

  const setCurrency = useCallback((c) => {
    setCurrencyState(c);
    try {
      localStorage.setItem(CURRENCY_KEY, c);
    } catch (e) {
      /* ignore */
    }
  }, []);

  /** Opening on a service puts it in the quote — "Configure" is a yes. */
  const open = useCallback((serviceId) => {
    if (serviceId) {
      setSelection((sel) => (sel[serviceId] ? sel : { ...sel, [serviceId]: [] }));
      setActive(serviceId);
    }
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ open, close, isOpen, active, setActive, selection, setSelection, currency, setCurrency }),
    [open, close, isOpen, active, selection, currency, setCurrency]
  );

  return (
    <QuoteContext.Provider value={value}>
      {children}
      {isOpen && <QuoteModal />}
    </QuoteContext.Provider>
  );
}

export const useQuote = () => {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error('useQuote must be used inside <QuoteProvider>');
  return ctx;
};

/** TND / EUR switch, shared by the Services section and the builder. */
export function CurrencySwitch({ className = '' }) {
  const { t } = useLanguage();
  const { currency, setCurrency } = useQuote();
  return (
    <div className={`cur ${className}`} role="group" aria-label={t('services.currency')}>
      {CURRENCIES.map((c) => (
        <button key={c} type="button" className={currency === c ? 'is-on' : ''} aria-pressed={currency === c} onClick={() => setCurrency(c)}>
          {c}
        </button>
      ))}
    </div>
  );
}
