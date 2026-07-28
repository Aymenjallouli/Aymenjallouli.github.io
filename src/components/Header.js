import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/Header.css';

const NAV_ITEMS = [
  { to: '/', key: 'nav.home' },
  { to: '/about', key: 'nav.about' },
  { to: '/projects', key: 'nav.projects' },
  { to: '/contact', key: 'nav.contact' },
];

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu on navigation and lock body scroll while open
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo" aria-label="Aymen Jallouli — home">
          <span className="logo-prompt">~/</span>
          <span className="logo-name">aymen-jallouli</span>
          <span className="logo-caret" aria-hidden="true" />
        </Link>

        <nav className="nav-desktop" aria-label="Main navigation">
          <ul>
            {NAV_ITEMS.map((item) => {
              const active = location.pathname === item.to;
              return (
                <li key={item.to}>
                  <NavLink to={item.to} className={active ? 'active' : ''}>
                    {active && (
                      <motion.span
                        className="nav-pill"
                        layoutId="nav-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="nav-label">{t(item.key)}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="nav-buttons">
          <button
            className="lang-toggle"
            onClick={toggleLang}
            aria-label={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
          >
            <span className={lang === 'fr' ? 'active' : ''}>FR</span>
            <span className="lang-sep">/</span>
            <span className={lang === 'en' ? 'active' : ''}>EN</span>
          </button>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Dark mode' : 'Light mode'}
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="nav-mobile glass"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16, transition: { duration: 0.18 } }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.055, delayChildren: 0.05 } } }}
            >
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.to}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
                  }}
                >
                  <NavLink to={item.to} onClick={() => setIsMenuOpen(false)}>
                    <span className="nav-mobile-index">0{i + 1}</span>
                    {t(item.key)}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
