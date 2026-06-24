import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Aymen<span>Jallouli</span></h2>
            <p>{t('footer.tagline')}</p>
          </div>

          <div className="footer-links">
            <h3>{t('footer.quickLinks')}</h3>
            <ul>
              <li><Link to="/">{t('nav.home')}</Link></li>
              <li><Link to="/about">{t('nav.about')}</Link></li>
              <li><Link to="/projects">{t('nav.projects')}</Link></li>
              <li><Link to="/contact">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>{t('footer.contactTitle')}</h3>
            <p>{t('footer.contactText')}</p>
            <div className="social-links">
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
          <p>&copy; {currentYear} Aymen Jallouli. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
