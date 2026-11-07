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
 *
 * `wip`     — a product still being built, e.g. in beta (shown as "Beta").
 * `concept` — a design made on spec for a business that did not commission it.
 *             Always flagged as "Concept" on the card and the page, so nothing
 *             on the site claims that business as a client.
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
    slug: 'pipeluma',
    t: 'Pipeluma — B2B Prospecting SaaS',
    feat: true,
    wip: true,
    img: '/assets/pipeluma.webp',
    shots: ['/assets/pipeluma-home.webp', '/assets/pipeluma-steps.webp'],
    city: null,
    cats: ['Full Stack', 'IA', 'Devops'],
    tech: ['Next.js', 'Hono', 'PostgreSQL', 'Docker', 'AI'],
    live: 'https://pipeluma.com',
    fr:
      "Mon propre SaaS de prospection B2B, en bêta privée : il prouve qu'un lead est réel avant tout contact. Pipeluma trouve des entreprises partout dans le monde à partir de sources publiques (registres d'entreprises, Y Combinator, offres d'emploi), trouve la bonne personne, vérifie son adresse en cinq contrôles, puis rédige un e-mail court à partir de ce qu'il a trouvé, directement dans vos brouillons Gmail, en anglais, allemand, français ou espagnol. Monorepo Next.js + Hono sur PostgreSQL, entièrement dockerisé.",
    en:
      "My own B2B prospecting SaaS, now in private beta: it proves a lead is real before you reach out. Pipeluma finds companies anywhere in the world from public sources (company registers, Y Combinator, job boards), finds the right person, runs five checks on the address, then writes a short email from what it found, straight into your Gmail drafts, in English, German, French or Spanish. Next.js + Hono monorepo on PostgreSQL, fully Dockerised.",
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
    live: 'https://mlika-rental.vercel.app/',
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
    slug: 'giro-d-italia-street-food-nivelles',
    t: "Giro d'Italia Street Food — Nivelles",
    concept: true,
    img: '/assets/concept-giro-nivelles.webp',
    city: 'Nivelles',
    cats: ['Sites Vitrines', 'Frontend', 'UX/UI'],
    tech: ['HTML', 'CSS', 'JavaScript', 'SEO'],
    live: 'https://giro-d-italia-street-food-nivelles.vercel.app',
    fr:
      "Site concept pour un food truck italien sur la Grand Place de Nivelles (Belgique) : direction artistique typographique rouge et noir, carte (arrosticini, puccia, pinsa, spritz), horaires du soir, avis Google et demande de privatisation.",
    en:
      "Concept site for an Italian food truck on the Grand Place of Nivelles, Belgium: bold red-and-black typographic art direction, the menu (arrosticini, puccia, pinsa, spritz), evening hours, Google reviews and a private-hire request.",
  },
  {
    slug: 'sandy-kohlmayer-photographe-versailles',
    t: 'Sandy Kohlmayer, photographe — Versailles',
    concept: true,
    img: '/assets/concept-sandy-versailles.webp',
    city: 'Versailles',
    cats: ['Sites Vitrines', 'Frontend', 'UX/UI'],
    tech: ['HTML', 'CSS', 'JavaScript', 'SEO'],
    live: 'https://sandy-kohlmayer-photographe-versail.vercel.app',
    fr:
      "Site concept pour une photographe de mariage et de portrait à Versailles (France) : univers sombre et éditorial, promesse « un seul mariage par jour », galerie, prestations et prise de contact.",
    en:
      "Concept site for a wedding and portrait photographer in Versailles, France: a dark, editorial look built around her \"one wedding a day\" promise, with gallery, packages and contact.",
  },
  {
    slug: 'staceys-hair-beauty-studio-swindon',
    t: "Stacey's Hair & Beauty Studio — Swindon",
    concept: true,
    img: '/assets/concept-stacey-swindon.webp',
    city: 'Swindon',
    cats: ['Sites Vitrines', 'Frontend', 'UX/UI'],
    tech: ['HTML', 'CSS', 'JavaScript', 'SEO'],
    live: 'https://stacey-s-hair-and-beauty-studio-swi.vercel.app',
    fr:
      "Site concept pour un salon de coiffure et beauté familial à Swindon (Royaume-Uni) : mise en page éditoriale, prestations (coupe, couleur, ongles, maquillage), avis Google et réservation par téléphone.",
    en:
      "Concept site for a family-run hair and beauty studio in Swindon, UK: editorial layout, services (cuts, colour, nails, make-up), Google reviews and call-to-book.",
  },
  {
    slug: 'atelier-dk-coiffure-geneve',
    t: 'Atelier DK, coiffeur coloriste — Genève',
    concept: true,
    img: '/assets/concept-atelier-dk-geneve.webp',
    city: 'Genève',
    cats: ['Sites Vitrines', 'Frontend', 'UX/UI'],
    tech: ['HTML', 'CSS', 'JavaScript', 'SEO'],
    live: 'https://coiffure-geneve-atelier-dk-coiffeur.vercel.app',
    fr:
      "Site concept pour un coiffeur coloriste face au lac à Genève (Suisse) : coupe, couleur, balayage et visagisme, horaires 7j/7 et prise de rendez-vous, dans un style éditorial clair.",
    en:
      "Concept site for a hair colourist facing the lake in Geneva, Switzerland: cuts, colour, balayage and face-shape styling, open 7 days, appointment booking, in a light editorial style.",
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
