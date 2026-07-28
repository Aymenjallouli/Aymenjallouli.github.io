import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa';
import '../styles/Projects.css';
import Reveal from '../components/Reveal';
import { projects, categories } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';
import { categoryLabels } from '../i18n/translations';

const Projects = () => {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('Tout');
  const catLabel = (c) => (categoryLabels[lang] && categoryLabels[lang][c]) || c;

  const filteredProjects =
    activeCategory === 'Tout' ? projects : projects.filter((p) => p.category.includes(activeCategory));

  return (
    <section className="projects-section section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{t('projects.eyebrow')}</span>
          <h1 className="section-title">{t('projects.title')}</h1>
        </Reveal>

        <Reveal className="project-filters" delay={0.1} role="group" aria-label="Project categories">
          {categories.map((category) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                className={`filter-btn ${active ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={active}
              >
                {active && (
                  <motion.span
                    className="filter-pill"
                    layoutId="filter-pill"
                    transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                  />
                )}
                <span className="filter-label">{catLabel(category)}</span>
              </button>
            );
          })}
        </Reveal>

        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                className="project-card"
                layout
                initial={{ opacity: 0, scale: 0.92, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.2 } }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="project-image-container">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                  ) : (
                    <div className="project-image-placeholder">
                      <span>{project.title.charAt(0)}</span>
                    </div>
                  )}
                  <div className="project-overlay" />
                  {project.private && (
                    <span className="project-private" title={t('projects.privateTitle')}>
                      <FaLock /> {t('projects.private')}
                    </span>
                  )}
                </div>

                <div className="project-content">
                  <div className="project-categories">
                    {project.category.map((cat) => (
                      <span key={cat} className="project-category">{catLabel(cat)}</span>
                    ))}
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description[lang]}</p>

                  <div className="project-footer">
                    <div className="project-tech">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-icon" title={project.techNames?.[index]}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-links">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} — GitHub`}
                        >
                          <FaGithub />
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} — live site`}
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>{t('projects.noProjects')}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
