/**
 * Site copy for the "Spidey Portfolio" one-pager, in French and English.
 * Shape mirrors the design source so `t('hero.desc')` style lookups stay flat.
 */
export const translations = {
  fr: {
    nav: { home: 'Accueil', about: 'Origine', powers: 'Pouvoirs', projects: 'Projets', contact: 'Contact' },
    a11y: {
      skip: 'Aller au contenu',
      menu: 'Ouvrir le menu',
      menuClose: 'Fermer le menu',
      lang: 'Choisir la langue',
      top: 'Retour en haut',
    },
    hero: {
      meanwhile: 'PENDANT CE TEMPS, À TUNIS…',
      friendly: 'VOTRE SYMPATHIQUE DÉVELOPPEUR DE QUARTIER',
      status: 'Disponible pour des opportunités & projets freelance',
      desc:
        "Je conçois et je livre des applications web complètes : interfaces React soignées, back-ends Node.js, Django et Spring Boot, API sécurisées et déploiement cloud sur AWS. Du premier commit à la production.",
      ach: [
        'Applications web full-stack, du frontend à la base de données',
        'Interfaces modernes, rapides et responsives',
        'Cloud & DevOps : AWS, Docker, CI/CD',
      ],
      cta1: 'VOIR MES MISSIONS',
      cta2: 'TÉLÉCHARGER LE CV',
      cta3: 'ME CONTACTER',
      scroll: 'Défiler pour explorer',
      roles: ['Développeur Full Stack', 'Ingénieur Logiciel', 'DevOps & Cloud AWS', 'Architecte Microservices'],
      maskCap: "L'HOMME DERRIÈRE LE MASQUE ? SURVOLE…",
      maskCapTouch: "L'HOMME DERRIÈRE LE MASQUE ? TOUCHE…",
      unmaskCap: "DÉMASQUÉ ! C'EST AYMEN.",
      badge: 'SPIDER-DEV',
      stats: [
        { label: "Années d'expérience", suffix: '+' },
        { label: 'Projets livrés', suffix: '+' },
        { label: 'Microservices en production', suffix: '' },
        { label: 'API REST conçues', suffix: '+' },
      ],
    },
    about: {
      issue: 'NUMÉRO #01',
      title: "HISTOIRE D'ORIGINE",
      whoTitle: 'QUI SUIS-JE ?',
      sagaTitle: "LA SAGA JUSQU'ICI",
      bio: [
        "Je suis Aymen Jallouli, développeur Full Stack et ingénieur logiciel. Je construis des applications web rapides, robustes et prêtes pour la production — du frontend React aux backends Node.js, Express, Django et Spring Boot.",
        "Mon terrain de jeu : interfaces React soignées, back-ends Node.js et Django, API sécurisées, conteneurisation Docker, pipelines CI/CD et cloud AWS. Je ne livre pas une démo — je livre un produit qui tient debout en production.",
        "En freelance, j'ai mené plus de 10 projets pour des clients internationaux — sites vitrines haute performance et applications full-stack complètes — en pilotant chaque étape, du cadrage à la mise en ligne.",
      ],
      timeline: [
        {
          role: 'Développeur Full Stack — AI Bonding (Allemagne)',
          period: 'Sept. 2025 – Présent',
          text:
            "Développement full-stack d'une plateforme web (React + Django/Python) : interfaces, API sécurisées et déploiement cloud sur AWS.",
        },
        {
          role: 'Développeur Full Stack & Frontend — Freelance',
          period: '2023 – Présent',
          text:
            '10+ projets livrés pour des clients internationaux : frontends React/TailwindCSS, features full-stack Node.js/Express, mise en ligne sur Vercel. Cadrage, code et livraison de bout en bout.',
        },
        {
          role: 'Stagiaire Ingénierie Logicielle — ESPRIT Innovation Lab',
          period: 'Juil. – Sept. 2023',
          text:
            "Outil d'automatisation migrant 150+ tests Node.js vers Jest (−70 % de temps), couverture de code passée de 65 % à 92 %.",
        },
        {
          role: 'Ingénierie Informatique — ESPRIT',
          period: '2021 – 2026',
          text: 'Génie logiciel, spécialisation Technologies Web & DevOps.',
        },
      ],
    },
    skills: {
      issue: 'NUMÉRO #02',
      title: 'POUVOIRS & CAPACITÉS',
      groups: [
        { category: 'Frontend', items: ['React', 'Redux', 'Angular', 'TailwindCSS', 'Material UI'] },
        { category: 'Backend', items: ['Node.js & Express', 'Django', 'Spring Boot', 'GraphQL', 'REST APIs'] },
        { category: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD'] },
        { category: 'Bases de données', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'] },
        { category: 'Architecture', items: ['Microservices', 'API Gateway', 'OAuth2 / JWT', 'Kafka', 'WebSockets'] },
      ],
    },
    proj: {
      issue: 'NUMÉRO #03',
      title: 'LE MULTIVERS DES PROJETS',
      private: 'PRIVÉ',
      privateTitle: 'Dépôt privé',
      none: 'Aucun projet ne correspond à cette catégorie pour le moment.',
      featured: 'À LA UNE',
      filterLabel: 'Filtrer les projets par catégorie',
      code: 'CODE',
      live: 'LIVE',
      more: 'VOIR PLUS',
      less: 'VOIR MOINS',
      all: 'VOIR TOUS LES PROJETS',
    },
    pages: {
      projectsTitle: 'TOUS LES PROJETS',
      projectsIntro:
        "L'intégralité des missions livrées : applications full stack, architectures microservices, pipelines DevOps et sites vitrines pour des clients à Tunis, Gabès, Sousse, Ariana et Gammarth.",
      projectsCount: (n) => `${n} projets livrés`,
      backHome: "RETOUR À L'ACCUEIL",
      backProjects: 'TOUS LES PROJETS',
      overview: 'LE BRIEF',
      stack: 'STACK TECHNIQUE',
      category: 'CATÉGORIE',
      location: 'LIEU',
      visit: 'VOIR LE SITE EN LIGNE',
      sourceCode: 'CODE SOURCE',
      privateRepo: 'Dépôt privé — code non public',
      related: 'AUTRES MISSIONS',
      ctaTitle: 'UN PROJET DANS LE MÊME ESPRIT ?',
      ctaText:
        "Décrivez-moi votre besoin : je vous réponds avec un périmètre, un délai et un prix. Pas de jargon, pas de devis à rallonge.",
      ctaButton: 'DÉMARRER UNE MISSION',
    },
    cta: {
      title: 'UN GRAND CODE IMPLIQUE DE GRANDES RESPONSABILITÉS.',
      text: "Une idée, un délai, un budget. Je m'occupe du reste — architecture, code, déploiement, et la vitesse qui va avec.",
      button: 'DÉMARRER UNE MISSION',
    },
    contact: {
      issue: 'NUMÉRO #04',
      title: 'ENVOYEZ LE SIGNAL',
      infoTitle: 'PARLONS DE VOTRE PROJET',
      intro:
        "Un produit à lancer, une équipe à renforcer, une architecture à remettre d'aplomb ? Écrivez-moi — je réponds vite et je parle cash.",
      emailLabel: 'Email',
      phoneLabel: 'Téléphone',
      locationLabel: 'Localisation',
      location: 'Tunis, Ariana',
      follow: 'SUIVEZ-MOI',
      name: 'Nom',
      namePh: 'Votre nom',
      emailPh: 'Votre email',
      subject: 'Sujet',
      subjectPh: 'Sujet de votre message',
      message: 'Message',
      messagePh: 'Votre message',
      send: 'THWIP ! ENVOYER',
      success: "Votre application de messagerie s'ouvre pour envoyer votre message.",
    },
    footer: {
      tagline: 'Votre sympathique développeur de quartier — des applications web qui chargent vite et tiennent debout.',
      rights: 'Tous droits réservés.',
    },
    marquee1:
      'THWIP ! ★ FULL STACK ★ REACT ★ DJANGO ★ AWS ★ DOCKER ★ POW ! ★ MICROSERVICES ★ CI/CD ★ BAM ! ★ NODE.JS ★ SPRING BOOT ★ KAFKA ★ WHAM ! ★',
    marquee2:
      'FREELANCE ★ 20+ PROJETS ★ TUNIS → BERLIN ★ AWS CLOUD ★ ZAP ! ★ KUBERNETES ★ MONGO ★ POSTGRES ★ REDIS ★ CRACK ! ★ GRAPHQL ★ OAUTH2 ★ WEBSOCKETS ★',
  },

  en: {
    nav: { home: 'Home', about: 'Origin', powers: 'Powers', projects: 'Projects', contact: 'Contact' },
    a11y: {
      skip: 'Skip to content',
      menu: 'Open menu',
      menuClose: 'Close menu',
      lang: 'Choose language',
      top: 'Back to top',
    },
    hero: {
      meanwhile: 'MEANWHILE, IN TUNIS…',
      friendly: 'YOUR FRIENDLY NEIGHBORHOOD DEVELOPER',
      status: 'Available for opportunities & freelance projects',
      desc:
        'I design and ship complete web applications: polished React interfaces, Node.js, Django and Spring Boot back-ends, secure APIs and cloud deployment on AWS. From first commit to production.',
      ach: [
        'Full-stack web applications, from frontend to database',
        'Modern interfaces — fast, responsive, built to last',
        'Cloud & DevOps: AWS, Docker, CI/CD',
      ],
      cta1: 'SEE MY MISSIONS',
      cta2: 'DOWNLOAD CV',
      cta3: 'CONTACT ME',
      scroll: 'Scroll to explore',
      roles: ['Full Stack Developer', 'Software Engineer', 'DevOps & AWS Cloud', 'Microservices Architect'],
      maskCap: 'THE MAN BEHIND THE MASK? HOVER…',
      maskCapTouch: 'THE MAN BEHIND THE MASK? TAP…',
      unmaskCap: "UNMASKED! IT'S AYMEN.",
      badge: 'SPIDER-DEV',
      stats: [
        { label: 'Years of experience', suffix: '+' },
        { label: 'Projects delivered', suffix: '+' },
        { label: 'Microservices in production', suffix: '' },
        { label: 'REST APIs designed', suffix: '+' },
      ],
    },
    about: {
      issue: 'ISSUE #01',
      title: 'ORIGIN STORY',
      whoTitle: 'WHO AM I?',
      sagaTitle: 'THE SAGA SO FAR',
      bio: [
        "I'm Aymen Jallouli, a Full Stack Developer and Software Engineer. I build fast, resilient, production-ready web applications — from React frontends to Node.js, Express, Django and Spring Boot backends.",
        "My territory: polished React interfaces, Node.js and Django back-ends, secure APIs, Docker containerisation, CI/CD pipelines and AWS. I don't ship demos — I ship products that stay standing in production.",
        "As a freelancer I've led 10+ projects for international clients — high-performance showcase sites and complete full-stack applications — owning every step from scoping to launch.",
      ],
      timeline: [
        {
          role: 'Full Stack Developer — AI Bonding (Germany)',
          period: 'Sep 2025 – Present',
          text:
            'Full-stack development of a web platform (React + Django/Python): interfaces, secure APIs and cloud deployment on AWS.',
        },
        {
          role: 'Full Stack & Frontend Developer — Freelance',
          period: '2023 – Present',
          text:
            '10+ projects delivered for international clients: React/TailwindCSS frontends, full-stack Node.js/Express features, shipped on Vercel. Scoping, code and delivery end to end.',
        },
        {
          role: 'Software Engineering Intern — ESPRIT Innovation Lab',
          period: 'Jul – Sep 2023',
          text: 'Automation tool migrating 150+ Node.js tests to Jest (−70% time), raising code coverage from 65% to 92%.',
        },
        {
          role: 'Computer Science Engineering — ESPRIT',
          period: '2021 – 2026',
          text: 'Software engineering, specialising in Web Technologies & DevOps.',
        },
      ],
    },
    skills: {
      issue: 'ISSUE #02',
      title: 'POWERS & ABILITIES',
      groups: [
        { category: 'Frontend', items: ['React', 'Redux', 'Angular', 'TailwindCSS', 'Material UI'] },
        { category: 'Backend', items: ['Node.js & Express', 'Django', 'Spring Boot', 'GraphQL', 'REST APIs'] },
        { category: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD'] },
        { category: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'] },
        { category: 'Architecture', items: ['Microservices', 'API Gateway', 'OAuth2 / JWT', 'Kafka', 'WebSockets'] },
      ],
    },
    proj: {
      issue: 'ISSUE #03',
      title: 'THE PROJECT MULTIVERSE',
      private: 'PRIVATE',
      privateTitle: 'Private repository',
      none: 'No projects match this category yet.',
      featured: 'FEATURED',
      filterLabel: 'Filter projects by category',
      code: 'CODE',
      live: 'LIVE',
      more: 'SEE MORE',
      less: 'SHOW LESS',
      all: 'SEE ALL PROJECTS',
    },
    pages: {
      projectsTitle: 'ALL PROJECTS',
      projectsIntro:
        'Every project delivered: full stack applications, microservices architectures, DevOps pipelines and showcase sites for clients in Tunis, Gabès, Sousse, Ariana and Gammarth.',
      projectsCount: (n) => `${n} projects delivered`,
      backHome: 'BACK TO HOME',
      backProjects: 'ALL PROJECTS',
      overview: 'THE BRIEF',
      stack: 'TECH STACK',
      category: 'CATEGORY',
      location: 'LOCATION',
      visit: 'VIEW THE LIVE SITE',
      sourceCode: 'SOURCE CODE',
      privateRepo: 'Private repository — code not public',
      related: 'OTHER MISSIONS',
      ctaTitle: 'SOMETHING SIMILAR IN MIND?',
      ctaText:
        'Tell me what you need and I come back with a scope, a timeline and a price. No jargon, no endless quotes.',
      ctaButton: 'START A MISSION',
    },
    cta: {
      title: 'WITH GREAT CODE COMES GREAT RESPONSIBILITY.',
      text: 'An idea, a deadline, a budget. I handle the rest — architecture, code, deployment, and the speed that comes with it.',
      button: 'START A MISSION',
    },
    contact: {
      issue: 'ISSUE #04',
      title: 'SEND THE SIGNAL',
      infoTitle: "LET'S TALK ABOUT YOUR PROJECT",
      intro:
        'A product to launch, a team to strengthen, an architecture to straighten out? Drop me a line — I reply fast and talk straight.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      location: 'Tunis, Ariana',
      follow: 'FOLLOW ME',
      name: 'Name',
      namePh: 'Your name',
      emailPh: 'Your email',
      subject: 'Subject',
      subjectPh: 'Subject of your message',
      message: 'Message',
      messagePh: 'Your message',
      send: 'THWIP! SEND IT',
      success: 'Your email app is opening to send your message.',
    },
    footer: {
      tagline: 'Your friendly neighborhood developer — web applications that load fast and stay standing.',
      rights: 'All rights reserved.',
    },
    marquee1:
      'THWIP! ★ FULL STACK ★ REACT ★ DJANGO ★ AWS ★ DOCKER ★ POW! ★ MICROSERVICES ★ CI/CD ★ BAM! ★ NODE.JS ★ SPRING BOOT ★ KAFKA ★ WHAM! ★',
    marquee2:
      'FREELANCE ★ 20+ PROJECTS ★ TUNIS → BERLIN ★ AWS CLOUD ★ ZAP! ★ KUBERNETES ★ MONGO ★ POSTGRES ★ REDIS ★ CRACK! ★ GRAPHQL ★ OAUTH2 ★ WEBSOCKETS ★',
  },
};

/** Filter chips. Keys are stable; labels are localized. */
export const CATEGORIES = ['Tout', 'Frontend', 'Full Stack', 'IA', 'Sites Vitrines', 'UX/UI', 'Devops', 'Microservices'];

export const CATEGORY_LABELS = {
  fr: {
    Tout: 'Tout',
    Frontend: 'Frontend',
    'Full Stack': 'Full Stack',
    IA: 'IA',
    'Sites Vitrines': 'Sites Vitrines',
    'UX/UI': 'UX/UI',
    Devops: 'DevOps',
    Microservices: 'Microservices',
  },
  en: {
    Tout: 'All',
    Frontend: 'Frontend',
    'Full Stack': 'Full Stack',
    IA: 'AI',
    'Sites Vitrines': 'Showcase Sites',
    'UX/UI': 'UX/UI',
    Devops: 'DevOps',
    Microservices: 'Microservices',
  },
};
