import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload, FaCheckCircle } from 'react-icons/fa';
import '../styles/Home.css';
import TiltCard from '../components/TiltCard';
import profileImage from '../assets/Profile.png';
import cvPdf from '../assets/AymenJallouli_FR.pdf';

const Home = () => {
  const badges = ['React', 'Next.js', 'TypeScript', 'Angular', 'Node.js', 'Spring Boot', 'IA', 'DevOps', 'Docker', 'Kubernetes', 'MongoDB', 'CI/CD'];

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
            <span className="status-dot" /> Disponible pour un stage / des opportunités
          </motion.span>

          <h1 className="home-greeting">
            Bonjour, je suis <span className="gradient-text">Aymen Jallouli</span>
          </h1>
          <h2 className="home-title">Ingénieur &amp; Développeur Full Stack &amp; DevOps</h2>
          <p className="home-description">
            Spécialisé dans les architectures microservices et le développement d'applications web modernes.
            J'allie expertise technique et créativité pour concevoir des solutions robustes et évolutives,
            avec un focus sur l'automatisation et l'expérience utilisateur.
          </p>

          <motion.div
            className="key-achievements"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="achievement-item">
              <FaCheckCircle className="achievement-icon" />
              <p>Expertise en architecture microservices</p>
            </div>
            <div className="achievement-item">
              <FaCheckCircle className="achievement-icon" />
              <p>Implémentation de pipelines CI/CD complets</p>
            </div>
            <div className="achievement-item">
              <FaCheckCircle className="achievement-icon" />
              <p>Développement d'applications MERN stack</p>
            </div>
          </motion.div>

          <div className="home-buttons">
            <Link to="/projects" className="btn btn-primary">
              Voir mes projets <FaArrowRight className="btn-icon" />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Me contacter
            </Link>
            <a href={cvPdf} download="CV_Aymen_Jallouli.pdf" className="btn btn-outline">
              Télécharger CV <FaDownload className="btn-icon" />
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
        <p>Défiler pour explorer</p>
      </motion.div>
    </section>
  );
};

export default Home;
