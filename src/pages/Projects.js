import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaRobot, FaVideo, FaLock, FaMobileAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiPython, SiSpringboot, SiJenkins, SiSonarqube, SiJest, SiExpress, SiApachekafka, SiDocker, SiCss3, SiHtml5, SiTypescript, SiVite, SiNextdotjs, SiJavascript } from 'react-icons/si';
import '../styles/Projects.css';
import TiltCard from '../components/TiltCard';
import Parkini from '../assets/Parkini.png';
import EurekaServer from '../assets/EurekaServer.png';
import Purelife from '../assets/PureLife.png';
import Devops from '../assets/Devops.png';
import Rentcar from '../assets/Rentcar.png';
import Persohap from '../assets/Persohap.png';
import Zontes from '../assets/Zontes.png';
// Sites vitrines (screenshots des sites en ligne)
import WidedFit from '../assets/wided-fit.jpg';
import Fit4You from '../assets/fit4you.jpg';
import PlatinumGym from '../assets/platinum-gym.jpg';
import AngelCoiffure from '../assets/angel-coiffure.jpg';
import BelAir from '../assets/bel-air.jpg';
import Oconnors from '../assets/oconnors.jpg';
import ZooBar from '../assets/zoo-bar.jpg';
import Pastagram from '../assets/pastagram.jpg';
import CabinetDentaire from '../assets/cabinet-dentaire.jpg';
import KhomsaDor from '../assets/khomsa-dor.jpg';
import CabinetSalma from '../assets/cabinet-salma.jpg';

const Projects = () => {
  // Catégories de filtrage
  const categories = ['Tout', 'Frontend', 'Full Stack', 'IA', 'Sites Vitrines', 'UX/UI', 'Devops', 'Microservices'];
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
      title: "Mlik'A — Location de Voitures",
      description: "Plateforme premium de location de voitures (Next.js 14 + IA). Réservation en moins de 2 minutes, concierge IA, notifications Telegram en temps réel pour les propriétaires et tableau de bord d'administration responsive.",
      image: Rentcar,
      category: ["Full Stack", "IA"],
      technologies: [<SiNextdotjs />, <SiTypescript />, <SiTailwindcss />, <FaRobot />],
      githubLink: "https://github.com/Aymenjallouli/MlikRentCar",
      liveLink: "https://mlika-rental-mrjqdw3cv-aymen-jalloulis-projects.vercel.app/"
    },
    {
      id: 3,
      title: "Persohap",
      description: "Plateforme RH et de communication propulsée par l'IA : automatisation du recrutement via des entretiens vidéo en temps réel, analyse intelligente des candidats et outils d'amélioration des compétences de communication.",
      image: Persohap,
      category: ["Full Stack", "IA"],
      technologies: [<FaReact />, <FaNodeJs />, <FaVideo />, <FaRobot />],
      private: true,
    },
    {
      id: 4,
      title: "Zontes 368 G — Tunisie",
      description: "Site vitrine immersif pour le scooter Zontes 368 G en Tunisie : sélecteur de couleurs dynamique, galerie 360°, effets sonores moteur (Web Audio API) et optimisation SEO avancée.",
      image: Zontes,
      category: ["Frontend", "UX/UI"],
      technologies: [<FaReact />, <SiTypescript />, <SiVite />, <SiCss3 />],
      githubLink: "https://github.com/Aymenjallouli/Zontes368G_Tunisie",
      liveLink: "https://zontes-site.vercel.app/",
    },
    {
      id: 5,
      title: "Système de Gestion de Restaurant",
      description: "Architecture microservices (6 services Spring Boot) avec API Gateway OAuth2, messagerie asynchrone Kafka et monitoring Prometheus & Grafana.",
      image: EurekaServer,
      category: ["Microservices"],
      technologies: [<SiSpringboot />, <SiExpress />, <SiApachekafka />, <SiDocker />],
      githubLink: "https://github.com/Application-Web-Distribution-Project/Application_Web_Distibue",
    },
    {
      id: 6,
      title: "PureLife",
      description:"Site web de santé et bien-être proposant des tendances, conseils et actualités pour un mode de vie sain et équilibré.",
      image: Purelife,
      category: ["Frontend", "UX/UI"],
      technologies: [<SiHtml5 />, <SiTailwindcss />, <SiCss3 />],
      githubLink: "https://github.com/Aymenjallouli/PureLife",
      liveLink: "https://pure-life-aymen-jalloulis-projects.vercel.app"
    },
    {
      id: 7,
      title: "DevopsProject",
      description: "Pipeline CI/CD robuste pour projets professionnels avec Stack Jenkins, SonarQube, Nexus et Docker. Monitoring via Prometheus & Grafana. Objectif : Assurer qualité, fiabilité et automatisation.",
      image: Devops,
      category: ["Devops"],
      technologies: [<SiJenkins />, <SiSonarqube />, <SiDocker />, <SiJest />],
      githubLink: "https://github.com/marwaniiwael18/DEVOPS-Project/tree/Aymenjallouli_4twin3_thunder",
    },

    // ─── Sites vitrines (clients) ───
    {
      id: 8,
      title: "Wided Fit — Gabès",
      description: "Site vitrine moderne et responsive pour la salle de sport Wided Fit à Gabès : présentation des services, horaires et galerie.",
      image: WidedFit,
      category: ["Sites Vitrines", "Frontend"],
      technologies: [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <FaMobileAlt />],
      githubLink: "https://github.com/Aymenjallouli/wided-fit-gabes",
      liveLink: "https://wided-fit-gabes.vercel.app",
    },
    {
      id: 9,
      title: "Fit4You — Gabès",
      description: "Site vitrine dynamique pour le centre de fitness Fit4You à Gabès, avec mise en avant des programmes et appels à l'action pour les inscriptions.",
      image: Fit4You,
      category: ["Sites Vitrines", "Frontend"],
      technologies: [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <FaMobileAlt />],
      githubLink: "https://github.com/Aymenjallouli/fit4you-gabes",
      liveLink: "https://fit4you-gabes.vercel.app",
    },
    {
      id: 10,
      title: "Platinum Gym — Gabès",
      description: "Landing page premium pour Platinum Gym à Gabès : ambiance sombre et énergique, présentation des programmes et du coaching.",
      image: PlatinumGym,
      category: ["Sites Vitrines", "Frontend"],
      technologies: [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <FaMobileAlt />],
      githubLink: "https://github.com/Aymenjallouli/platinum-gym-gabes-gabes",
      liveLink: "https://platinum-gym-gabes-gabes.vercel.app",
    },
    {
      id: 11,
      title: "Angel's Coiffure & Esthétique — Tunis",
      description: "Site vitrine élégant pour le salon de coiffure et d'esthétique Angel's à Tunis : services, galerie et prise de contact.",
      image: AngelCoiffure,
      category: ["Sites Vitrines", "Frontend"],
      technologies: [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <FaMobileAlt />],
      githubLink: "https://github.com/Aymenjallouli/angel-s-coiffure-esthetique-tunis",
      liveLink: "https://angel-s-coiffure-esthetique-tunis.vercel.app",
    },
    {
      id: 12,
      title: "Bel Air — Gammarth",
      description: "Site vitrine pour l'établissement Bel Air à Gammarth, mettant en valeur son ambiance, son offre et sa localisation.",
      image: BelAir,
      category: ["Sites Vitrines", "Frontend"],
      technologies: [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <FaMobileAlt />],
      githubLink: "https://github.com/Aymenjallouli/bel-air-gammarth-gammarth",
      liveLink: "https://bel-air-gammarth-gammarth.vercel.app",
    },
    {
      id: 13,
      title: "O'Connor's Irish Pub — Sousse",
      description: "Site vitrine chaleureux pour le O'Connor's Irish Pub à Sousse : ambiance, menu et événements.",
      image: Oconnors,
      category: ["Sites Vitrines", "Frontend"],
      technologies: [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <FaMobileAlt />],
      githubLink: "https://github.com/Aymenjallouli/oconnors-irish-pub-sousse",
      liveLink: "https://oconnors-irish-pub-sousse.vercel.app",
    },
    {
      id: 14,
      title: "The Zoo Bar — Tunis",
      description: "Site vitrine à l'identité visuelle forte pour The Zoo Bar à Tunis : présentation du bar et de ses soirées.",
      image: ZooBar,
      category: ["Sites Vitrines", "Frontend"],
      technologies: [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <FaMobileAlt />],
      githubLink: "https://github.com/Aymenjallouli/the-zoo-bar-tunis",
      liveLink: "https://the-zoo-bar-tunis.vercel.app",
    },
    {
      id: 15,
      title: "Pastagram Pasta Bar — Sousse",
      description: "Site vitrine gourmand pour le Pastagram Pasta Bar à Sousse : menu, réservation, ambiance et localisation.",
      image: Pastagram,
      category: ["Sites Vitrines", "Frontend"],
      technologies: [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <FaMobileAlt />],
      githubLink: "https://github.com/Aymenjallouli/pastagram-pasta-bar-sousse",
      liveLink: "https://pastagram-pasta-bar-sousse.vercel.app",
    },
    {
      id: 16,
      title: "Cabinet Dentaire Dr Chaima Harb — Gabès",
      description: "Site vitrine professionnel pour le cabinet dentaire du Dr Chaima Harb à Gabès : services, informations pratiques et prise de rendez-vous.",
      image: CabinetDentaire,
      category: ["Sites Vitrines", "Frontend"],
      technologies: [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <FaMobileAlt />],
      githubLink: "https://github.com/Aymenjallouli/cabinet-dentaire-dr-chaima-harb-gabes",
      liveLink: "https://cabinet-dentaire-dr-chaima-harb-gab.vercel.app",
    },
    {
      id: 17,
      title: "Cabinet Salma de Kinésithérapie — Ariana",
      description: "Site vitrine pour le cabinet de kinésithérapie Salma à Ariana : présentation des soins, équipe et coordonnées.",
      image: CabinetSalma,
      category: ["Sites Vitrines", "Frontend"],
      technologies: [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <FaMobileAlt />],
      githubLink: "https://github.com/Aymenjallouli/cabinet-salma-de-kinesitherapie-ariana",
      liveLink: "https://cabinet-salma-de-kinesitherapie-ari.vercel.app",
    },
    {
      id: 18,
      title: "Institut de Beauté Khomsa d'Or — Tunis",
      description: "Site vitrine raffiné pour l'institut de beauté Khomsa d'Or à Tunis : prestations, galerie et prise de contact.",
      image: KhomsaDor,
      category: ["Sites Vitrines", "Frontend"],
      technologies: [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <FaMobileAlt />],
      githubLink: "https://github.com/Aymenjallouli/institut-de-beaute-khomsa-d-or-tunis",
      liveLink: "https://institut-de-beaute-khomsa-d-or-tuni.vercel.app",
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
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">Mon travail</span>
          <h1 className="section-title">Mes Projets</h1>
        </motion.div>

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
            <TiltCard
              key={project.id}
              className="project-card"
              max={9}
              variants={itemVariants}
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
                <div className="project-overlay" />
                {project.private && (
                  <span className="project-private" title="Dépôt privé">
                    <FaLock /> Privé
                  </span>
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
            </TiltCard>
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