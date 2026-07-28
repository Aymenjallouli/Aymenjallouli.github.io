import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaCloud, FaDatabase, FaSitemap } from 'react-icons/fa';
import '../styles/About.css';
import Reveal from '../components/Reveal';
import TiltCard from '../components/TiltCard';
import { useLanguage } from '../i18n/LanguageContext';
import profileImage from '../assets/Profile.png';

const skillIcons = [<FaCode />, <FaServer />, <FaCloud />, <FaDatabase />, <FaSitemap />];

const About = () => {
  const { t } = useLanguage();

  const bio = t('about.bio');
  const timeline = t('about.timeline');
  const skills = t('about.skills');

  return (
    <section className="about-section section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{t('about.eyebrow')}</span>
          <h1 className="section-title">{t('about.title')}</h1>
        </Reveal>

        <div className="about-grid">
          {/* ─── Bio + timeline ─── */}
          <div className="about-main">
            <Reveal className="about-bio glass">
              <div className="about-profile">
                <div className="about-profile-ring" aria-hidden="true" />
                <img src={profileImage} alt="Aymen Jallouli" className="about-profile-img" />
              </div>
              <div className="about-bio-text">
                <h2>{t('about.whoTitle')}</h2>
                {bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            <div className="timeline">
              <Reveal>
                <h2 className="timeline-title">{t('about.journeyTitle')}</h2>
              </Reveal>
              <div className="timeline-list">
                {timeline.map((item, i) => (
                  <Reveal className="timeline-item" key={i} delay={i * 0.07}>
                    <div className="timeline-marker" aria-hidden="true">
                      <span className="timeline-dot" />
                    </div>
                    <div className="timeline-content glass">
                      <span className="timeline-period">{item.period}</span>
                      <h3>{item.role}</h3>
                      <p>{item.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* ─── Skills ─── */}
          <motion.aside
            className="about-skills"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              {t('about.skillsTitle')}
            </motion.h2>

            <div className="skills-container">
              {skills.map((skillGroup, index) => (
                <TiltCard
                  key={index}
                  className="skill-group"
                  max={7}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                  }}
                >
                  <div className="skill-header">
                    <div className="skill-icon">{skillIcons[index]}</div>
                    <h3>{skillGroup.category}</h3>
                  </div>
                  <div className="skill-chips">
                    {skillGroup.items.map((skill, i) => (
                      <span className="chip" key={i}>{skill}</span>
                    ))}
                  </div>
                </TiltCard>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default About;
