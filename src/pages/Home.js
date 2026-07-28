import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiDjango, SiSpringboot,
  SiAmazonaws, SiDocker, SiKubernetes, SiMongodb, SiPostgresql, SiRedis,
  SiApachekafka, SiJenkins, SiGraphql, SiTailwindcss,
} from 'react-icons/si';
import '../styles/Home.css';
import Reveal from '../components/Reveal';
import RotatingText from '../components/RotatingText';
import CountUp from '../components/CountUp';
import Magnetic from '../components/Magnetic';
import Terminal from '../components/Terminal';
import { featuredProjects } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';
import cvFr from '../assets/Aymen_Jallouli_CV_FR.pdf';
import cvEn from '../assets/Aymen_Jallouli_CV_EN.pdf';

const TECH_ROW_1 = [
  { icon: <SiReact />, name: 'React' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <SiTailwindcss />, name: 'TailwindCSS' },
  { icon: <SiNodedotjs />, name: 'Node.js' },
  { icon: <SiDjango />, name: 'Django' },
  { icon: <SiSpringboot />, name: 'Spring Boot' },
  { icon: <SiGraphql />, name: 'GraphQL' },
];

const TECH_ROW_2 = [
  { icon: <SiAmazonaws />, name: 'AWS' },
  { icon: <SiDocker />, name: 'Docker' },
  { icon: <SiKubernetes />, name: 'Kubernetes' },
  { icon: <SiJenkins />, name: 'Jenkins' },
  { icon: <SiApachekafka />, name: 'Kafka' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiPostgresql />, name: 'PostgreSQL' },
  { icon: <SiRedis />, name: 'Redis' },
];

const TERMINAL_LINES = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'aymen-jallouli · full stack developer' },
  { type: 'cmd', text: 'cat stack.json' },
  { type: 'out', text: '{ "frontend": ["React", "Next.js", "TypeScript"],' },
  { type: 'out', text: '  "backend": ["Node.js", "Django", "Spring Boot"],' },
  { type: 'out', text: '  "cloud": ["AWS", "Docker", "K8s", "CI/CD"] }' },
  { type: 'cmd', text: './deploy.sh --env production' },
  { type: 'ok', text: '✔ 12 microservices healthy — live on AWS' },
];

const MarqueeRow = ({ items, reverse = false }) => (
  <div className={`marquee-row ${reverse ? 'reverse' : ''}`}>
    <div className="marquee-track">
      {[...items, ...items].map((tech, i) => (
        <span className="marquee-item" key={i} aria-hidden={i >= items.length}>
          {tech.icon}
          {tech.name}
        </span>
      ))}
    </div>
  </div>
);

const Home = () => {
  const { lang, t } = useLanguage();

  const cvFile = lang === 'en' ? cvEn : cvFr;
  const cvName = lang === 'en' ? 'Aymen_Jallouli_CV_EN.pdf' : 'Aymen_Jallouli_CV_FR.pdf';
  const stats = t('home.stats');

  return (
    <div className="home-page">
      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="container hero-grid">
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } }}
          >
            <motion.span
              className="home-status"
              variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
            >
              <span className="status-dot" /> {t('home.status')}
            </motion.span>

            <motion.h1
              className="hero-name"
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
            >
              <span className="hero-greeting">{t('home.greeting')}</span>
              <span className="gradient-text hero-name-text">{t('home.name')}</span>
            </motion.h1>

            <motion.div
              className="hero-role"
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } }}
            >
              <span className="hero-role-prefix" aria-hidden="true">&gt;_</span>
              <RotatingText words={t('home.roles')} />
            </motion.div>

            <motion.p
              className="hero-description"
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } }}
            >
              {t('home.description')}
            </motion.p>

            <motion.div
              className="home-buttons"
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } }}
            >
              <Magnetic>
                <Link to="/projects" className="btn btn-primary">
                  {t('home.viewProjects')} <FaArrowRight className="btn-icon" />
                </Link>
              </Magnetic>
              <Magnetic>
                <a href={cvFile} download={cvName} className="btn btn-outline">
                  {t('home.downloadCv')} <FaDownload className="btn-icon" />
                </a>
              </Magnetic>
              <Magnetic>
                <Link to="/contact" className="btn btn-secondary">
                  {t('home.contactMe')}
                </Link>
              </Magnetic>
            </motion.div>

            <motion.div
              className="hero-social"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } }}
            >
              <a href="https://github.com/Aymenjallouli" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/aymen-jallouli-713534254/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <span className="hero-social-line" aria-hidden="true" />
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="terminal-float">
              <Terminal lines={TERMINAL_LINES} />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="home-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          aria-hidden="true"
        >
          <div className="mouse" />
          <p>{t('home.scroll')}</p>
        </motion.div>
      </section>

      {/* ─── STATS ─── */}
      <section className="stats-band" aria-label="Key numbers">
        <div className="container stats-grid">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.08} className="stat">
              <span className="stat-value gradient-text">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="stat-label">{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── TECH MARQUEE ─── */}
      <section className="marquee-section" aria-label="Tech stack">
        <MarqueeRow items={TECH_ROW_1} />
        <MarqueeRow items={TECH_ROW_2} reverse />
      </section>

      {/* ─── FEATURED PROJECTS ─── */}
      <section className="featured section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">{t('home.featuredEyebrow')}</span>
            <h2 className="section-title">{t('home.featuredTitle')}</h2>
          </Reveal>

          <div className="featured-grid">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.1} className="featured-card-wrap">
                <article className="featured-card">
                  <div className="featured-image">
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <div className="featured-overlay" />
                  </div>
                  <div className="featured-body">
                    <h3>{project.title}</h3>
                    <p>{project.description[lang]}</p>
                    <div className="featured-tech">
                      {project.techNames.slice(0, 4).map((name) => (
                        <span className="chip" key={name}>{name}</span>
                      ))}
                    </div>
                    <div className="featured-links">
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          Live <FaExternalLinkAlt />
                        </a>
                      )}
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          Code <FaGithub />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="featured-cta" delay={0.15}>
            <Magnetic>
              <Link to="/projects" className="btn btn-outline">
                {t('home.viewAll')} <FaArrowRight className="btn-icon" />
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section className="cta-band">
        <div className="container">
          <Reveal className="cta-card glass">
            <h2 className="cta-title">{t('home.ctaTitle')}</h2>
            <p className="cta-text">{t('home.ctaText')}</p>
            <Magnetic>
              <Link to="/contact" className="btn btn-primary">
                {t('home.ctaButton')} <FaArrowRight className="btn-icon" />
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
