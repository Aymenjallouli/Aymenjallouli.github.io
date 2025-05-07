import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiPython, SiSpringboot,SiJenkins,SiSonarqube,SiJest, SiExpress, SiApachekafka, SiDocker ,SiCss3,SiHtml5 } from 'react-icons/si';
import '../styles/Projects.css';
import Parkini from '../assets/Parkini.png'; 
import EurekaServer from '../assets/EurekaServer.png';
import Purelife from '../assets/PureLife.png';
import Devops from '../assets/Devops.png';

const Projects = () => {
  // Catégories de filtrage
  const categories = ['Tout', 'Frontend', 'Full Stack', 'UX/UI', 'Devops', 'Microservices'];
  const [activeCategory, setActiveCategory] = useState('Tout');

 
  const projects = [
    {
      id: 1,
      title: "Parkini",
      description: "🚗🔐 Discover Parkini – The Future of Smart Parking! 🌍📊",
      image: Parkini,
      category: ["Full Stack", "Devops"],
      technologies: [<FaReact />, <FaNodeJs />, <SiMongodb />, <SiTailwindcss />, <SiPython />],
      githubLink: "https://github.com/PiDev-2025/Parkini",
      liveLink: "https://front-end-front-office.vercel.app"
    },
    {
      id: 2,
      title: "Application de gestion de tâches",
      description: "Application réactive pour organiser et suivre vos tâches quotidiennes avec notifications.",
      image: EurekaServer,
      category: ["Microservices"],
      technologies: [<SiSpringboot />, <SiExpress />, <SiApachekafka />, <SiDocker />],
      githubLink: "https://github.com/Application-Web-Distribution-Project/Application_Web_Distibue",
    },
    {
      id: 3,
      title: "PureLife",
      description:"Site web de santé et bien-être proposant des tendances, conseils et actualités pour un mode de vie sain et équilibré.",
      image: Purelife,
      category: ["Frontend", "UX/UI"],
      technologies: [<SiHtml5 />, <SiTailwindcss />, <SiCss3 />],
      githubLink: "https://github.com/Aymenjallouli/PureLife",
      liveLink: "https://pure-life-aymen-jalloulis-projects.vercel.app"
    },
    {
      id: 4,
      title: "DevopsProject",
      description: "Pipeline CI/CD robuste pour projets professionnels avec Stack Jenkins, SonarQube, Nexus et Docker. Monitoring via Prometheus & Grafana. Objectif : Assurer qualité, fiabilité et automatisation.",
      image: Devops,
      category: ["Devops"],
      technologies: [<SiJenkins />, <SiSonarqube />, <SiDocker />, <SiJest />],
      githubLink: "https://github.com/marwaniiwael18/DEVOPS-Project/tree/Aymenjallouli_4twin3_thunder",
    },
 
  ];

  // Filtrage des projets par catégorie
  const filteredProjects = activeCategory === 'Tout' 
    ? projects 
    : projects.filter(project => project.category.includes(activeCategory));

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="projects-section section">
      <div className="container">
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mes Projets
        </motion.h1>
        
        <motion.div 
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <button 
              key={index}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="project-image-container">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image" 
                  />
                ) : (
                  <div className="project-image-placeholder">
                    <span>{project.title.charAt(0)}</span>
                  </div>
                )}
                <div className="project-links">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <FaGithub />
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label="Site web">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-icon">{tech}</span>
                  ))}
                </div>
                
                <div className="project-categories">
                  {project.category.map((cat, index) => (
                    <span key={index} className="project-category">{cat}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>Aucun projet ne correspond à cette catégorie pour le moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;