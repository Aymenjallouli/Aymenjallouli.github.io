import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import '../styles/Home.css';

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
          <h2 className="home-title">Développeur  Full Stack</h2>
          <p className="home-description">
            Je crée des applications web modernes et performantes avec un accent sur l'expérience utilisateur.
            Passionné par le développement front-end et back-end, j'aime relever de nouveaux défis techniques.
          </p>
          
          <div className="home-buttons">
            <Link to="/projects" className="btn btn-primary">
              Voir mes projets <FaArrowRight className="btn-icon" />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Me contacter
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          className="home-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="profile-image-container">
            {/* Remplacer par votre propre image */}
            <div className="profile-image-placeholder">
              <span>AJ</span>
            </div>
          </div>
          <div className="technology-badges">
            <span className="badge">React</span>
            <span className="badge">Node.js</span>
            <span className="badge">JavaScript</span>
            <span className="badge">HTML/CSS</span>
          </div>
        </motion.div>
      </div>
      
      <div className="home-scroll-indicator">
        <div className="mouse"></div>
        <p>Défiler pour explorer</p>
      </div>
    </section>
  );
};

export default Home;