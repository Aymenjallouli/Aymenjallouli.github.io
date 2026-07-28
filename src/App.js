import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import './styles/App.css';

// Composants
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import CursorGlow from './components/CursorGlow';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import { useLanguage } from './i18n/LanguageContext';

/* Reading-progress bar pinned above the header */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
};

/* Route content with page transitions (spatial continuity: rise in, lift out) */
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12, transition: { duration: 0.22, ease: [0.65, 0, 0.35, 1] } }}
        transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  const [theme, setTheme] = useState('dark');
  const { lang } = useLanguage();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      // L'utilisateur préfère explicitement le thème clair
      setTheme('light');
      document.body.className = 'light';
    } else {
      // Thème sombre cinématique par défaut
      setTheme('dark');
      document.body.className = 'dark';
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className={`app ${theme}`}>
        <a className="skip-link" href="#main-content">
          {lang === 'fr' ? 'Aller au contenu' : 'Skip to content'}
        </a>
        <AnimatedBackground />
        <CursorGlow />
        <ScrollProgress />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="main-content" id="main-content" tabIndex={-1}>
          <AnimatedRoutes />
        </main>
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
