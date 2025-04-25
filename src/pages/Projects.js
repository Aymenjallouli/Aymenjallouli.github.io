import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase } from 'react-icons/si';
import '../styles/Projects.css';

const Projects = () => {
  // Catégories de filtrage
  const categories = ['Tout', 'Frontend', 'Full Stack', 'UX/UI', 'Devops'];
  const [activeCategory, setActiveCategory] = useState('Tout');

  // Projets exemple (à remplacer par vos propres projets)
  const projects = [
    {
      id: 1,
      title: "E-commerce moderne",
      description: "Une plateforme de commerce électronique complète avec panier d'achat, paiements et gestion des produits.",
      image: "placeholder.jpg",
      category: ["Full Stack"],
      technologies: [<FaReact />, <FaNodeJs />, <SiMongodb />, <SiTailwindcss />],
      githubLink: "https://github.com/username/e-commerce",
      liveLink: "https://e-commerce-example.com"
    },
    {
      id: 2,
      title: "Application de gestion de tâches",
      description: "Application réactive pour organiser et suivre vos tâches quotidiennes avec notifications.",
      image: "placeholder.jpg",
      category: ["Frontend", "UX/UI"],
      technologies: [<FaReact />, <FaJs />, <FaCss3Alt />, <SiFirebase />],
      githubLink: "https://github.com/username/task-manager",
      liveLink: "https://task-manager-example.com"
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description: "Tableau de bord interactif avec visualisations de données en temps réel et rapports personnalisables.",
      image: "placeholder.jpg",
      category: ["Frontend", "UX/UI"],
      technologies: [<FaReact />, <SiTailwindcss />, <FaJs />],
      githubLink: "https://github.com/username/analytics",
      liveLink: "https://analytics-example.com"
    },
    {
      id: 4,
      title: "Application de chat en temps réel",
      description: "Application de messagerie instantanée avec salles de discussion et partage de fichiers.",
      image: "placeholder.jpg",
      category: ["Full Stack"],
      technologies: [<FaReact />, <FaNodeJs />, <SiMongodb />, <FaCss3Alt />],
      githubLink: "https://github.com/username/chat-app",
      liveLink: "https://chat-app-example.com"
    },
    {
      id: 5,
      title: "Application mobile de fitness",
      description: "Application permettant de suivre vos entraînements, votre alimentation et vos progrès.",
      image: "placeholder.jpg",
      category: ["Mobile"],
      technologies: [<FaReact />, <SiTailwindcss />, <SiFirebase />],
      githubLink: "https://github.com/username/fitness-app",
      liveLink: "https://fitness-app-example.com"
    },
    {
      id: 6,
      title: "Site vitrine d'entreprise",
      description: "Site web moderne responsive présentant les services et l'équipe d'une entreprise.",
      image: "placeholder.jpg",
      category: ["Frontend", "UX/UI"],
      technologies: [<FaReact />, <FaHtml5 />, <FaCss3Alt />],
      githubLink: "https://github.com/username/corporate-site",
      liveLink: "https://corporate-example.com"
    }
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
                <div className="project-image-placeholder">
                  <span>{project.title.charAt(0)}</span>
                </div>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label="Site web">
                    <FaExternalLinkAlt />
                  </a>
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