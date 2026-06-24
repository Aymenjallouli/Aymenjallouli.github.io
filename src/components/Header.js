import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/Header.css';

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <h1>Aymen<span>Jallouli</span></h1>
        </Link>

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
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                {t('nav.home')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
                {t('nav.about')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>
                {t('nav.projects')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                {t('nav.contact')}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
