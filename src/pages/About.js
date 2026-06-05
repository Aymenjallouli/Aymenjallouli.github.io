import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaDatabase, FaServer, FaTools } from 'react-icons/fa';
import '../styles/About.css';
import TiltCard from '../components/TiltCard';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  const skills = [
    {
      category: 'Frontend',
      icon: <FaCode />,
      items: ['HTML/CSS', 'JavaScript', 'React', 'Angular', 'Tailwind CSS'],
    },
    {
      category: 'Devops',
      icon: <FaPalette />,
      items: ['Jenkins', 'DockerHub', 'Nexus', 'Sonarqube', 'Kubernetes'],
    },
    {
      category: 'Backend',
      icon: <FaServer />,
      items: ['Node.js & Express', 'SpringBoot', 'GraphQL'],
    },
    {
      category: 'Database',
      icon: <FaDatabase />,
      items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'],
    },
    {
      category: 'Outils',
      icon: <FaTools />,
      items: ['GitHub', 'VS Code', 'Docker', 'CI/CD'],
    },
  ];

  return (
    <section className="about-section section">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">Qui je suis</span>
          <h1 className="section-title">À Propos de Moi</h1>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-bio glass"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
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
                  <p className="timeline-period">2021 - 2026</p>
                  <p>Diplôme d'ingénieur en informatique, spécialisation en développement web &amp; DevOps.</p>
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
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <h2>Mes Compétences</h2>

            <div className="skills-container">
              {skills.map((skillGroup, index) => (
                <TiltCard
                  key={index}
                  className="skill-group"
                  max={10}
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
                </TiltCard>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
