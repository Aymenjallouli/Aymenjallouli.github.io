import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload, FaCheckCircle } from 'react-icons/fa';
import '../styles/Home.css';
import TiltCard from '../components/TiltCard';
import { useLanguage } from '../i18n/LanguageContext';
import profileImage from '../assets/Profile.png';
import cvFr from '../assets/Aymen_Jallouli_CV_FR.pdf';
import cvEn from '../assets/Aymen_Jallouli_CV_EN.pdf';

const Home = () => {
  const { lang, t } = useLanguage();
  const badges = ['React', 'Next.js', 'TypeScript', 'Django', 'Node.js', 'Spring Boot', 'IA', 'AWS', 'Docker', 'Kubernetes', 'MongoDB', 'CI/CD'];

  const cvFile = lang === 'en' ? cvEn : cvFr;
  const cvName = lang === 'en' ? 'Aymen_Jallouli_CV_EN.pdf' : 'Aymen_Jallouli_CV_FR.pdf';

  return (
    <section className="home-section">
      <div className="container home-container">
        <motion.div
          className="home-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="home-status"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <span className="status-dot" /> {t('home.status')}
          </motion.span>

          <h1 className="home-greeting">
            {t('home.greeting')} <span className="gradient-text">{t('home.name')}</span>
          </h1>
          <h2 className="home-title">{t('home.title')}</h2>
          <p className="home-description">{t('home.description')}</p>

          <motion.div
            className="key-achievements"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {t('home.achievements').map((item, i) => (
              <div className="achievement-item" key={i}>
                <FaCheckCircle className="achievement-icon" />
                <p>{item}</p>
              </div>
            ))}
          </motion.div>

          <div className="home-buttons">
            <Link to="/projects" className="btn btn-primary">
              {t('home.viewProjects')} <FaArrowRight className="btn-icon" />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              {t('home.contactMe')}
            </Link>
            <a href={cvFile} download={cvName} className="btn btn-outline">
              {t('home.downloadCv')} <FaDownload className="btn-icon" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="home-image"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <TiltCard className="profile-tilt" max={14}>
            <div className="profile-ring" aria-hidden="true" />
            <div className="profile-image-container">
              <img src={profileImage} alt="Aymen Jallouli" className="profile-image" />
            </div>
            <span className="profile-chip chip-top">&lt;/&gt; Full Stack</span>
            <span className="profile-chip chip-bottom">⚙ DevOps</span>
          </TiltCard>

          <motion.div
            className="technology-badges"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.5 } },
            }}
          >
            {badges.map((b) => (
              <motion.span
                key={b}
                className="badge"
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ scale: 1.12, y: -3 }}
              >
                {b}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="home-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <div className="mouse"></div>
        <p>{t('home.scroll')}</p>
      </motion.div>
    </section>
  );
};

export default Home;
