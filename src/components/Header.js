import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Header.css';

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <h1>Aymen<span>Jallouli</span></h1>
        </Link>

        <div className="nav-buttons">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label={`Basculer vers le thème ${theme === 'light' ? 'sombre' : 'clair'}`}
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          <button 
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Menu de navigation"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
                À Propos
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>
                Projets
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;