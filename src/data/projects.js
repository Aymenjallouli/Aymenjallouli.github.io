import parkini from '../assets/Parkini.png';
import rentcar from '../assets/Rentcar.png';
import persohap from '../assets/Persohap.png';
import zontes from '../assets/Zontes.png';
import eureka from '../assets/EurekaServer.png';
import devops from '../assets/Devops.png';
import widedFit from '../assets/wided-fit.jpg';
import fit4you from '../assets/fit4you.jpg';
import platinumGym from '../assets/platinum-gym.jpg';
import angelCoiffure from '../assets/angel-coiffure.jpg';
import belAir from '../assets/bel-air.jpg';
import oconnors from '../assets/oconnors.jpg';
import zooBar from '../assets/zoo-bar.jpg';
import pastagram from '../assets/pastagram.jpg';
import cabinetDentaire from '../assets/cabinet-dentaire.jpg';
import cabinetSalma from '../assets/cabinet-salma.jpg';
import khomsaDor from '../assets/khomsa-dor.jpg';

/**
 * Each project carries both language variants of its description so the card
 * can switch instantly with the FR/EN toggle.
 */
export const PROJECTS = [
  {
    t: 'Parkini',
    feat: true,
    img: parkini,
    cats: ['Full Stack', 'Devops'],
    tech: ['React', 'Node.js', 'MongoDB', 'TailwindCSS', 'Python'],
    gh: 'https://github.com/PiDev-2025/Parkini',
    live: 'https://front-end-front-office.vercel.app',
    fr:
      'Plateforme de stationnement intelligent : réservation de places en temps réel, paiement intégré, tableaux de bord et architecture full-stack conteneurisée avec pipeline CI/CD.',
    en:
      'Smart parking platform: real-time spot booking, integrated payments, dashboards and a containerized full-stack architecture with a CI/CD pipeline.',
  },
  {
    t: "Mlik'A — Location de Voitures",
    feat: true,
    img: rentcar,
    cats: ['Full Stack', 'IA'],
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'AI'],
    gh: 'https://github.com/Aymenjallouli/MlikRentCar',
    live: 'https://mlika-rental-mrjqdw3cv-aymen-jalloulis-projects.vercel.app/',
    fr:
      "Plateforme premium de location de voitures (Next.js 14 + IA). Réservation en moins de 2 minutes, concierge IA, notifications Telegram en temps réel pour les propriétaires et tableau de bord d'administration responsive.",
    en:
      'Premium car-rental platform (Next.js 14 + AI). Booking in under 2 minutes, AI concierge, real-time Telegram notifications for owners and a responsive admin dashboard.',
  },
  {
    t: 'Persohap',
    priv: true,
    img: persohap,
    cats: ['Full Stack', 'IA'],
    tech: ['React', 'Node.js', 'WebRTC', 'AI'],
    fr:
      "Plateforme RH et de communication propulsée par l'IA : automatisation du recrutement via des entretiens vidéo en temps réel, analyse intelligente des candidats et outils d'amélioration des compétences de communication.",
    en:
      'AI-powered HR & communication platform: recruitment automation through real-time video interviews, intelligent candidate analysis and communication-skills coaching tools.',
  },
  {
    t: 'Zontes 368 G — Tunisie',
    feat: true,
    img: zontes,
    cats: ['Frontend', 'UX/UI'],
    tech: ['React', 'TypeScript', 'Vite', 'CSS'],
    gh: 'https://github.com/Aymenjallouli/Zontes368G_Tunisie',
    live: 'https://zontes-site.vercel.app/',
    fr:
      'Site vitrine immersif pour le scooter Zontes 368 G en Tunisie : sélecteur de couleurs dynamique, galerie 360°, effets sonores moteur (Web Audio API) et optimisation SEO avancée.',
    en:
      'Immersive showcase site for the Zontes 368 G scooter in Tunisia: dynamic color selector, 360° gallery, engine sound effects (Web Audio API) and advanced SEO.',
  },
  {
    t: 'Système de Gestion de Restaurant',
    img: eureka,
    cats: ['Microservices'],
    tech: ['Spring Boot', 'Express', 'Kafka', 'Docker'],
    gh: 'https://github.com/Application-Web-Distribution-Project/Application_Web_Distibue',
    fr:
      'Architecture microservices (6 services Spring Boot) avec API Gateway OAuth2, messagerie asynchrone Kafka et monitoring Prometheus & Grafana.',
    en:
      'Microservices architecture (6 Spring Boot services) with an OAuth2 API Gateway, asynchronous Kafka messaging and Prometheus & Grafana monitoring.',
  },
  {
    t: 'DevopsProject',
    img: devops,
    cats: ['Devops'],
    tech: ['Jenkins', 'SonarQube', 'Docker', 'Jest'],
    gh: 'https://github.com/marwaniiwael18/DEVOPS-Project/tree/Aymenjallouli_4twin3_thunder',
    fr:
      'Pipeline CI/CD robuste avec Jenkins, SonarQube, Nexus et Docker. Monitoring via Prometheus & Grafana pour garantir qualité, fiabilité et automatisation.',
    en:
      'Robust CI/CD pipeline with Jenkins, SonarQube, Nexus and Docker. Monitoring via Prometheus & Grafana to ensure quality, reliability and automation.',
  },
  {
    t: 'Wided Fit — Gabès',
    img: widedFit,
    cats: ['Sites Vitrines', 'Frontend'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    gh: 'https://github.com/Aymenjallouli/wided-fit-gabes',
    live: 'https://wided-fit-gabes.vercel.app',
    fr:
      'Site vitrine moderne et responsive pour la salle de sport Wided Fit à Gabès : présentation des services, horaires et galerie.',
    en: 'Modern, responsive showcase site for the Wided Fit gym in Gabès: services, schedule and gallery.',
  },
  {
    t: 'Fit4You — Gabès',
    img: fit4you,
    cats: ['Sites Vitrines', 'Frontend'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    gh: 'https://github.com/Aymenjallouli/fit4you-gabes',
    live: 'https://fit4you-gabes.vercel.app',
    fr:
      "Site vitrine dynamique pour le centre de fitness Fit4You à Gabès, avec mise en avant des programmes et appels à l'action pour les inscriptions.",
    en: 'Dynamic showcase site for the Fit4You fitness center in Gabès, highlighting programs and sign-up calls to action.',
  },
  {
    t: 'Platinum Gym — Gabès',
    img: platinumGym,
    cats: ['Sites Vitrines', 'Frontend'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    gh: 'https://github.com/Aymenjallouli/platinum-gym-gabes-gabes',
    live: 'https://platinum-gym-gabes-gabes.vercel.app',
    fr:
      'Landing page premium pour Platinum Gym à Gabès : ambiance sombre et énergique, présentation des programmes et du coaching.',
    en: 'Premium landing page for Platinum Gym in Gabès: bold, energetic dark theme presenting programs and coaching.',
  },
  {
    t: "Angel's Coiffure & Esthétique — Tunis",
    img: angelCoiffure,
    cats: ['Sites Vitrines', 'Frontend'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    gh: 'https://github.com/Aymenjallouli/angel-s-coiffure-esthetique-tunis',
    live: 'https://angel-s-coiffure-esthetique-tunis.vercel.app',
    fr:
      "Site vitrine élégant pour le salon de coiffure et d'esthétique Angel's à Tunis : services, galerie et prise de contact.",
    en: "Elegant showcase site for the Angel's hair & beauty salon in Tunis: services, gallery and contact.",
  },
  {
    t: 'Bel Air — Gammarth',
    img: belAir,
    cats: ['Sites Vitrines', 'Frontend'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    gh: 'https://github.com/Aymenjallouli/bel-air-gammarth-gammarth',
    live: 'https://bel-air-gammarth-gammarth.vercel.app',
    fr:
      "Site vitrine pour l'établissement Bel Air à Gammarth, mettant en valeur son ambiance, son offre et sa localisation.",
    en: 'Showcase site for the Bel Air venue in Gammarth, highlighting its atmosphere, offering and location.',
  },
  {
    t: "O'Connor's Irish Pub — Sousse",
    img: oconnors,
    cats: ['Sites Vitrines', 'Frontend'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    gh: 'https://github.com/Aymenjallouli/oconnors-irish-pub-sousse',
    live: 'https://oconnors-irish-pub-sousse.vercel.app',
    fr: "Site vitrine chaleureux pour le O'Connor's Irish Pub à Sousse : ambiance, menu et événements.",
    en: "Warm showcase site for O'Connor's Irish Pub in Sousse: atmosphere, menu and events.",
  },
  {
    t: 'The Zoo Bar — Tunis',
    img: zooBar,
    cats: ['Sites Vitrines', 'Frontend'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    gh: 'https://github.com/Aymenjallouli/the-zoo-bar-tunis',
    live: 'https://the-zoo-bar-tunis.vercel.app',
    fr: "Site vitrine à l'identité visuelle forte pour The Zoo Bar à Tunis : présentation du bar et de ses soirées.",
    en: 'Bold-branded showcase site for The Zoo Bar in Tunis: presenting the bar and its nights out.',
  },
  {
    t: 'Pastagram Pasta Bar — Sousse',
    img: pastagram,
    cats: ['Sites Vitrines', 'Frontend'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    gh: 'https://github.com/Aymenjallouli/pastagram-pasta-bar-sousse',
    live: 'https://pastagram-pasta-bar-sousse.vercel.app',
    fr: 'Site vitrine gourmand pour le Pastagram Pasta Bar à Sousse : menu, réservation, ambiance et localisation.',
    en: 'Appetizing showcase site for the Pastagram Pasta Bar in Sousse: menu, reservations, atmosphere and location.',
  },
  {
    t: 'Cabinet Dentaire Dr Chaima Harb — Gabès',
    img: cabinetDentaire,
    cats: ['Sites Vitrines', 'Frontend'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    gh: 'https://github.com/Aymenjallouli/cabinet-dentaire-dr-chaima-harb-gabes',
    live: 'https://cabinet-dentaire-dr-chaima-harb-gab.vercel.app',
    fr:
      'Site vitrine professionnel pour le cabinet dentaire du Dr Chaima Harb à Gabès : services, informations pratiques et prise de rendez-vous.',
    en: "Professional showcase site for Dr Chaima Harb's dental practice in Gabès: services, practical info and appointment booking.",
  },
  {
    t: 'Cabinet Salma de Kinésithérapie — Ariana',
    img: cabinetSalma,
    cats: ['Sites Vitrines', 'Frontend'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    gh: 'https://github.com/Aymenjallouli/cabinet-salma-de-kinesitherapie-ariana',
    live: 'https://cabinet-salma-de-kinesitherapie-ari.vercel.app',
    fr: 'Site vitrine pour le cabinet de kinésithérapie Salma à Ariana : présentation des soins, équipe et coordonnées.',
    en: 'Showcase site for the Salma physiotherapy practice in Ariana: treatments, team and contact details.',
  },
  {
    t: "Institut de Beauté Khomsa d'Or — Tunis",
    img: khomsaDor,
    cats: ['Sites Vitrines', 'Frontend'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    gh: 'https://github.com/Aymenjallouli/institut-de-beaute-khomsa-d-or-tunis',
    live: 'https://institut-de-beaute-khomsa-d-or-tuni.vercel.app',
    fr: "Site vitrine raffiné pour l'institut de beauté Khomsa d'Or à Tunis : prestations, galerie et prise de contact.",
    en: "Refined showcase site for the Khomsa d'Or beauty institute in Tunis: services, gallery and contact.",
  },
];
