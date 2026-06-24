import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaCloud, FaDatabase, FaSitemap } from 'react-icons/fa';
import '../styles/About.css';
import TiltCard from '../components/TiltCard';
import { useLanguage } from '../i18n/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  const skillIcons = [<FaCode />, <FaServer />, <FaCloud />, <FaDatabase />, <FaSitemap />];
  const bio = t('about.bio');
  const timeline = t('about.timeline');
  const skills = t('about.skills');

  return (
    <section className="about-section section">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">{t('about.eyebrow')}</span>
          <h1 className="section-title">{t('about.title')}</h1>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-bio glass"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2>{t('about.whoTitle')}</h2>
            {bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className="timeline">
              <h2>{t('about.journeyTitle')}</h2>
              {timeline.map((item, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3>{item.role}</h3>
                    <p className="timeline-period">{item.period}</p>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-skills"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <h2>{t('about.skillsTitle')}</h2>

            <div className="skills-container">
              {skills.map((skillGroup, index) => (
                <TiltCard key={index} className="skill-group" max={10} variants={itemVariants}>
                  <div className="skill-header">
                    <div className="skill-icon">{skillIcons[index]}</div>
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
