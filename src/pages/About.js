import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaDatabase, FaServer, FaTools } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const skills = [
    {
      category: 'Frontend',
      icon: <FaCode />,
      items: ['HTML/CSS', 'JavaScript', 'React', 'Angular', 'Tailwind CSS']
    },
    {
      category: 'Devops',
      icon: <FaPalette />,
      items: ['Jenkins', 'DockerHub', 'Nexus', 'Sonarqube', 'Kubernetes']
    },
   
    {
      category: 'Backend',
      icon: <FaServer />,
      items: ['Node.js & Express', 'SpringBoot', 'GraphQL']
    },
    {
      category: 'Database',
      icon: <FaDatabase />,
      items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase']
    },
    {
      category: 'Outils',
      icon: <FaTools />,
      items: [ 'GitHub', 'VS Code', 'Docker', 'CI/CD']
    }
  ];

  return (
    <section className="about-section section">
      <div className="container">
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          À Propos de Moi
        </motion.h1>
        
        <div className="about-content">
          <motion.div 
            className="about-bio"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Qui suis-je?</h2>
            <p>
              Bonjour ! Je m'appelle Aymen Jallouli, je suis développeur web full-stack avec une passion pour la création 
              d'applications web performantes et esthétiques. Mon parcours dans le développement web a commencé il y a 
              plusieurs années et je continue à me perfectionner dans les technologies modernes.
            </p>
            <p>
              Mon objectif est de créer des expériences utilisateur exceptionnelles qui combinent design élégant 
              et fonctionnalités robustes. J'accorde une attention particulière aux détails et à l'optimisation des performances.
            </p>
            <p>
              Quand je ne code pas, j'aime explorer de nouvelles technologies, partager mes connaissances 
              et contribuer à des projets open source.
            </p>
            
            <div className="timeline">
              <h2>Mon Parcours</h2>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Formation</h3>
                  <p className="timeline-period">2020 - 2025</p>
                  <p>Diplôme d'ingénieur en informatique, spécialisation en développement web.</p>
                </div>
              </div>
              
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Développeur Full Stack</h3>
                  <p className="timeline-period">2025 - Présent</p>
                  <p>Développement d'applications web complètes utilisant les dernières technologies.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-skills"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2>Mes Compétences</h2>
            
            <div className="skills-container">
              {skills.map((skillGroup, index) => (
                <motion.div 
                  key={index} 
                  className="skill-group"
                  variants={itemVariants}
                >
                  <div className="skill-header">
                    <div className="skill-icon">{skillGroup.icon}</div>
                    <h3>{skillGroup.category}</h3>
                  </div>
                  <ul className="skill-list">
                    {skillGroup.items.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;