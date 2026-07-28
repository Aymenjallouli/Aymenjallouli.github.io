import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <p className="footer-brand">
              <span className="footer-prompt">~/</span>aymen-jallouli
            </p>
            <p className="footer-tagline">{t('footer.tagline')}</p>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <h3>{t('footer.quickLinks')}</h3>
            <ul>
              <li><Link to="/">{t('nav.home')}</Link></li>
              <li><Link to="/about">{t('nav.about')}</Link></li>
              <li><Link to="/projects">{t('nav.projects')}</Link></li>
              <li><Link to="/contact">{t('nav.contact')}</Link></li>
            </ul>
          </nav>

          <div className="footer-contact">
            <h3>{t('footer.contactTitle')}</h3>
            <p>{t('footer.contactText')}</p>
            <div className="footer-social">
              <a href="https://github.com/Aymenjallouli" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/aymen-jallouli-713534254/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:aymen.jallouli@esprit.tn" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            <span className="footer-prompt">$</span> echo "© {currentYear} Aymen Jallouli — {t('footer.rights')}"
          </p>
          <button className="back-to-top" onClick={scrollTop} aria-label="Back to top">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
