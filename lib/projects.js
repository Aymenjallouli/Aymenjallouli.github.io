/**
 * Every project carries both language variants of its description so a card can
 * switch instantly with the FR/EN toggle, plus the metadata the per-project
 * pages need.
 *
 * `slug` is a permanent URL key — it is what /projets/<slug> and
 * /en/projects/<slug> resolve against, so changing one breaks a live URL and
 * loses whatever ranking it had. Add new entries freely; never rewrite a slug.
 * When a project is retired, add its slug to RETIRED_SLUGS in next.config.mjs
 * so the old URL 301s to the index instead of 404ing.
 *
 * `city` is what makes the long-tail geo queries work ("site vitrine Gabès",
 * "développeur Sousse") — leave it null for projects with no local angle.
 *
 * Order matters: the home page shows the first four, so the strongest client
 * work goes first.
 */
export const PROJECTS = [
  {
    slug: 'arcadi-batiment',
    t: 'ARCADI BÂTIMENT — Île-de-France',
    feat: true,
    priv: true,
    img: '/assets/arcadi-batiment.webp',
    shots: ['/assets/arcadi-expertises.webp', '/assets/arcadi-realisations.webp'],
    city: 'Antony',
    cats: ['Sites Vitrines', 'Frontend', 'UX/UI'],
    tech: ['Astro', 'TypeScript', 'GSAP', 'Lenis', 'MapLibre'],
    live: 'https://arcadibatiment.com',
    fr:
      "Site vitrine bilingue (FR/EN) pour ARCADI BÂTIMENT, bureau d'études structure basé à Antony (Île-de-France) : hero vidéo plein écran, transitions de pages fluides, animations GSAP, carte interactive, présentation des cinq domaines d'expertise et SEO local soigné.",
    en:
      'Bilingual (FR/EN) showcase site for ARCADI BÂTIMENT, a structural engineering firm in Antony, Île-de-France: full-screen video hero, smooth page transitions, GSAP motion, an interactive map, its five areas of expertise and careful local SEO.',
  },
  {
    slug: 'persohap',
    t: 'Persohap',
    priv: true,
    img: '/assets/Persohap.png',
    shots: ['/assets/persohap-learning.webp', '/assets/persohap-performance.webp'],
    city: null,
    cats: ['Full Stack', 'IA'],
    tech: ['React', 'Node.js', 'WebRTC', 'AI'],
    live: 'https://persohap.com/en',
    fr:
      "Système de gestion des personnes propulsé par l'IA (AI-PMS), basé à Berlin, qui couvre tout le cycle de vie du collaborateur sur un seul dossier : présélection des candidats selon vos critères et premier entretien mené par un avatar IA réaliste avec grille d'évaluation, onboarding automatisé, leçons courtes présentées par des humains IA avec quiz, évaluations de performance sur des critères connus à l'avance, et coaching IA privé pour s'entraîner aux conversations difficiles.",
    en:
      'AI People Management System (AI-PMS) from Berlin covering the whole employee lifecycle on one employee record: applicants screened against your criteria and a first interview run by a lifelike AI avatar that returns an evidence-backed scorecard, automated onboarding, short lessons presented by AI humans with quizzes, performance reviews on criteria everyone sees in advance, and a private AI coach for practising difficult conversations.',
  },
  {
    slug: 'aziz-souai-filmmaker-photographe',
    t: 'Aziz Souai — Filmmaker & Photographer',
    feat: true,
    priv: true,
    img: '/assets/aziz-souai.webp',
    shots: ['/assets/aziz-souai-index.webp', '/assets/aziz-souai-work.webp'],
    city: 'Tunis',
    cats: ['Sites Vitrines', 'Frontend', 'UX/UI'],
    tech: ['Three.js', 'JavaScript', 'WebGL', 'CSS'],
    live: 'https://aziz-souai.vercel.app/',
    fr:
      "Portfolio immersif pour Aziz Souai, réalisateur et photographe en Tunisie : appareil photo 3D en Three.js dans le hero, mur de films en 3D, showreel, films lus directement sur la page, séries photo plein écran et index filtrable de 15 projets (mode, automobile, nightlife, publicité).",
    en:
      'Immersive portfolio for Aziz Souai, a filmmaker and photographer in Tunisia: a 3D Three.js camera in the hero, a 3D wall of films, a showreel, films that play right on the page, full-screen photo series and a filterable index of 15 projects (fashion, automotive, nightlife, commercials).',
  },
  {
    slug: 'mlika-location-de-voitures',
    t: "Mlik'A — Location de Voitures",
    feat: true,
    img: '/assets/Rentcar.png',
    city: null,
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
    slug: 'zontes-368-g-tunisie',
    t: 'Zontes 368 G — Tunisie',
    feat: true,
    img: '/assets/Zontes.png',
    city: 'Tunisie',
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
    slug: 'parkini',
    t: 'Parkini',
    feat: true,
    img: '/assets/Parkini.png',
    city: null,
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
    slug: 'platinum-gym-gabes',
    t: 'Platinum Gym — Gabès',
    img: '/assets/platinum-gym.jpg',
    city: 'Gabès',
    cats: ['Sites Vitrines', 'Frontend'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    gh: 'https://github.com/Aymenjallouli/platinum-gym-gabes-gabes',
    live: 'https://platinum-gym-gabes-gabes.vercel.app',
    fr:
      'Landing page premium pour Platinum Gym à Gabès : ambiance sombre et énergique, présentation des programmes et du coaching.',
    en: 'Premium landing page for Platinum Gym in Gabès: bold, energetic dark theme presenting programs and coaching.',
  },
  {
    slug: 'angels-coiffure-esthetique-tunis',
    t: "Angel's Coiffure & Esthétique — Tunis",
    img: '/assets/angel-coiffure.jpg',
    city: 'Tunis',
    cats: ['Sites Vitrines', 'Frontend'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    gh: 'https://github.com/Aymenjallouli/angel-s-coiffure-esthetique-tunis',
    live: 'https://angel-s-coiffure-esthetique-tunis.vercel.app',
    fr:
      "Site vitrine élégant pour le salon de coiffure et d'esthétique Angel's à Tunis : services, galerie et prise de contact.",
    en: "Elegant showcase site for the Angel's hair & beauty salon in Tunis: services, gallery and contact.",
  },
  {
    slug: 'bel-air-gammarth',
    t: 'Bel Air — Gammarth',
    img: '/assets/bel-air.jpg',
    city: 'Gammarth',
    cats: ['Sites Vitrines', 'Frontend'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    gh: 'https://github.com/Aymenjallouli/bel-air-gammarth-gammarth',
    live: 'https://bel-air-gammarth-gammarth.vercel.app',
    fr:
      "Site vitrine pour l'établissement Bel Air à Gammarth, mettant en valeur son ambiance, son offre et sa localisation.",
    en: 'Showcase site for the Bel Air venue in Gammarth, highlighting its atmosphere, offering and location.',
  },
  {
    slug: 'pastagram-pasta-bar-sousse',
    t: 'Pastagram Pasta Bar — Sousse',
    img: '/assets/pastagram.jpg',
    city: 'Sousse',
    cats: ['Sites Vitrines', 'Frontend'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    gh: 'https://github.com/Aymenjallouli/pastagram-pasta-bar-sousse',
    live: 'https://pastagram-pasta-bar-sousse.vercel.app',
    fr: 'Site vitrine gourmand pour le Pastagram Pasta Bar à Sousse : menu, réservation, ambiance et localisation.',
    en: 'Appetizing showcase site for the Pastagram Pasta Bar in Sousse: menu, reservations, atmosphere and location.',
  },
  {
    slug: 'cabinet-dentaire-dr-chaima-harb-gabes',
    t: 'Cabinet Dentaire Dr Chaima Harb — Gabès',
    img: '/assets/cabinet-dentaire.jpg',
    city: 'Gabès',
    cats: ['Sites Vitrines', 'Frontend'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    gh: 'https://github.com/Aymenjallouli/cabinet-dentaire-dr-chaima-harb-gabes',
    live: 'https://cabinet-dentaire-dr-chaima-harb-gab.vercel.app',
    fr:
      'Site vitrine professionnel pour le cabinet dentaire du Dr Chaima Harb à Gabès : services, informations pratiques et prise de rendez-vous.',
    en: "Professional showcase site for Dr Chaima Harb's dental practice in Gabès: services, practical info and appointment booking.",
  },
  {
    slug: 'cabinet-salma-kinesitherapie-ariana',
    t: 'Cabinet Salma de Kinésithérapie — Ariana',
    img: '/assets/cabinet-salma.jpg',
    city: 'Ariana',
    cats: ['Sites Vitrines', 'Frontend'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    gh: 'https://github.com/Aymenjallouli/cabinet-salma-de-kinesitherapie-ariana',
    live: 'https://cabinet-salma-de-kinesitherapie-ari.vercel.app',
    fr: 'Site vitrine pour le cabinet de kinésithérapie Salma à Ariana : présentation des soins, équipe et coordonnées.',
    en: 'Showcase site for the Salma physiotherapy practice in Ariana: treatments, team and contact details.',
  },
  {
    slug: 'institut-beaute-khomsa-dor-tunis',
    t: "Institut de Beauté Khomsa d'Or — Tunis",
    img: '/assets/khomsa-dor.jpg',
    city: 'Tunis',
    cats: ['Sites Vitrines', 'Frontend'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    gh: 'https://github.com/Aymenjallouli/institut-de-beaute-khomsa-d-or-tunis',
    live: 'https://institut-de-beaute-khomsa-d-or-tuni.vercel.app',
    fr: "Site vitrine raffiné pour l'institut de beauté Khomsa d'Or à Tunis : prestations, galerie et prise de contact.",
    en: "Refined showcase site for the Khomsa d'Or beauty institute in Tunis: services, gallery and contact.",
  },
];

export const getProject = (slug) => PROJECTS.find((p) => p.slug === slug);
