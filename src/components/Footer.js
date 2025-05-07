import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Aymen<span>Jallouli</span></h2>
            <p>Développeur passionné par la création d'applications web modernes et performantes.</p>
          </div>
          
          <div className="footer-links">
            <h3>Liens rapides</h3>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/about">À Propos</Link></li>
              <li><Link to="/projects">Projets</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact</h3>
            <p>N'hésitez pas à me contacter pour discuter de vos projets.</p>
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
          <p>&copy; {currentYear} Aymen Jallouli. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;