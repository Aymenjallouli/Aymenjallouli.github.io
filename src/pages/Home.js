import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload, FaCheckCircle } from 'react-icons/fa';
import '../styles/Home.css';
import profileImage from '../assets/Profile.jpeg'; 
import cvPdf from '../assets/AymenJallouli_FR.pdf';

const Home = () => {
  return (
    <section className="home-section">
      <div className="container home-container">
        <motion.div 
          className="home-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="home-greeting">Bonjour, je suis <span>Aymen Jallouli</span></h1>
          <h2 className="home-title">Ingénieur & Développeur Full Stack & DevOps</h2>
          <p className="home-description">
            Spécialisé dans les architectures microservices et le développement d'applications web modernes.
            J'allie expertise technique et créativité pour concevoir des solutions robustes et évolutives,
            avec un focus sur l'automatisation et l'expérience utilisateur.
          </p>
          
          <motion.div 
            className="key-achievements"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
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
            <Link to="/projects" className="btn btn-outline">
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="profile-image-container">
            <img 
              src={profileImage} 
              alt="Aymen Jallouli" 
              className="profile-image" 
            />
          </div>
          <motion.div 
            className="technology-badges"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.6 }}
          >
            <motion.span className="badge" whileHover={{ scale: 1.2 }}>React</motion.span>
            <motion.span className="badge" whileHover={{ scale: 1.2 }}>Angular</motion.span>
            <motion.span className="badge" whileHover={{ scale: 1.2 }}>Node.js</motion.span>
            <motion.span className="badge" whileHover={{ scale: 1.2 }}>Spring Boot</motion.span>
            <motion.span className="badge" whileHover={{ scale: 1.2 }}>DevOps</motion.span>
            <motion.span className="badge" whileHover={{ scale: 1.2 }}>Docker</motion.span>
            <motion.span className="badge" whileHover={{ scale: 1.2 }}>Kubernetes</motion.span>
            <motion.span className="badge" whileHover={{ scale: 1.2 }}>MongoDB</motion.span>
            <motion.span className="badge" whileHover={{ scale: 1.2 }}>CI/CD</motion.span>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="home-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="mouse"></div>
        <p>Défiler pour explorer</p>
      </motion.div>
    </section>
  );
};

export default Home;