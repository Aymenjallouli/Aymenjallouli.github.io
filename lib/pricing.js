import { PERSON } from './site';

/**
 * Services & pricing — the single place to change what the site charges.
 *
 * Every number on the Services section and in the quote builder comes from
 * here. Prices are "starting from" amounts, kept as separate round figures per
 * currency (not converted) so each reads like a real price in its market.
 *
 *   unit: 'once'  — one-off project price
 *         'video' — price per video
 *         'month' — recurring, totalled separately as a monthly figure
 *
 * Each feature is an optional add-on with its own price, added on top of the
 * service's base price in the quote builder.
 */
export const CURRENCIES = ['TND', 'EUR'];

export const SERVICES = [
  {
    id: 'vitrine',
    popular: true,
    unit: 'once',
    price: { TND: 900, EUR: 350 },
    name: { fr: 'Site vitrine', en: 'Showcase website' },
    pitch: {
      fr: 'Votre activité en ligne : rapide, soignée et facile à trouver.',
      en: 'Your business online — fast, polished and easy to find.',
    },
    delivery: { fr: '7 à 10 jours', en: '7–10 days' },
    includes: {
      fr: ["Jusqu'à 5 pages sur mesure", 'Design responsive (mobile, tablette, desktop)', 'Formulaire de contact & bouton WhatsApp', 'Google Maps & SEO de base'],
      en: ['Up to 5 custom pages', 'Responsive design (mobile, tablet, desktop)', 'Contact form & WhatsApp button', 'Google Maps & basic SEO'],
    },
    features: [
      { id: 'pages', price: { TND: 200, EUR: 80 }, fr: '3 pages supplémentaires', en: '3 extra pages' },
      { id: 'lang', price: { TND: 300, EUR: 120 }, fr: 'Site multilingue (FR / EN / AR)', en: 'Multilingual site (FR / EN / AR)' },
      { id: 'booking', price: { TND: 450, EUR: 180 }, fr: 'Réservation / prise de rendez-vous en ligne', en: 'Online booking & appointments' },
      { id: 'cms', price: { TND: 400, EUR: 160 }, fr: 'Blog ou contenu modifiable (CMS)', en: 'Blog or editable content (CMS)' },
      { id: 'seo', price: { TND: 350, EUR: 140 }, fr: 'SEO avancé + fiche Google Business', en: 'Advanced SEO + Google Business Profile' },
      { id: 'logo', price: { TND: 350, EUR: 150 }, fr: 'Logo & identité visuelle', en: 'Logo & visual identity' },
      { id: 'copy', price: { TND: 250, EUR: 100 }, fr: 'Rédaction des textes', en: 'Copywriting' },
      { id: 'hosting', price: { TND: 150, EUR: 60 }, fr: 'Nom de domaine + hébergement (1 an)', en: 'Domain + hosting (1 year)' },
    ],
  },
  {
    id: 'ecommerce',
    unit: 'once',
    price: { TND: 2500, EUR: 950 },
    name: { fr: 'Boutique en ligne', en: 'E-commerce store' },
    pitch: {
      fr: 'Vendez 24h/24 — paiement à la livraison ou par carte.',
      en: 'Sell around the clock — cash on delivery or card.',
    },
    delivery: { fr: '3 à 4 semaines', en: '3–4 weeks' },
    includes: {
      fr: ["Catalogue jusqu'à 50 produits", 'Panier, commande & paiement à la livraison', 'Tableau de bord des commandes', 'Design responsive & SEO de base'],
      en: ['Catalogue of up to 50 products', 'Cart, checkout & cash on delivery', 'Order management dashboard', 'Responsive design & basic SEO'],
    },
    features: [
      { id: 'pay', price: { TND: 500, EUR: 200 }, fr: 'Paiement en ligne (Konnect, Flouci, Stripe…)', en: 'Online payments (Konnect, Flouci, Stripe…)' },
      { id: 'delivery', price: { TND: 400, EUR: 150 }, fr: 'Intégration société de livraison', en: 'Delivery company integration' },
      { id: 'catalog', price: { TND: 300, EUR: 120 }, fr: 'Produits illimités + import en masse', en: 'Unlimited products + bulk import' },
      { id: 'lang', price: { TND: 400, EUR: 150 }, fr: 'Boutique multilingue', en: 'Multilingual store' },
      { id: 'promo', price: { TND: 350, EUR: 140 }, fr: 'Codes promo & fidélité', en: 'Promo codes & loyalty' },
      { id: 'pixels', price: { TND: 200, EUR: 80 }, fr: 'Suivi marketing (Meta Pixel, TikTok, GA4)', en: 'Marketing tracking (Meta Pixel, TikTok, GA4)' },
    ],
  },
  {
    id: 'webapp',
    unit: 'once',
    price: { TND: 4500, EUR: 1800 },
    name: { fr: 'Application web', en: 'Web application' },
    pitch: {
      fr: 'Plateforme, SaaS ou outil métier sur mesure.',
      en: 'A custom platform, SaaS or business tool.',
    },
    delivery: { fr: '4 à 8 semaines', en: '4–8 weeks' },
    includes: {
      fr: ['Design UI/UX sur mesure', 'Comptes utilisateurs, rôles & sécurité', "Tableau de bord d'administration", 'API + base de données + mise en ligne'],
      en: ['Custom UI/UX design', 'User accounts, roles & security', 'Admin dashboard', 'API + database + deployment'],
    },
    features: [
      { id: 'pay', price: { TND: 900, EUR: 350 }, fr: 'Paiements & abonnements', en: 'Payments & subscriptions' },
      { id: 'realtime', price: { TND: 900, EUR: 350 }, fr: 'Temps réel (chat, notifications)', en: 'Real-time (chat, notifications)' },
      { id: 'ai', price: { TND: 1200, EUR: 450 }, fr: 'Intégration IA (chatbot, automatisation)', en: 'AI integration (chatbot, automation)' },
      { id: 'reports', price: { TND: 700, EUR: 280 }, fr: 'Statistiques & exports PDF / Excel', en: 'Analytics & PDF / Excel exports' },
      { id: 'integrations', price: { TND: 800, EUR: 300 }, fr: 'Intégrations tierces (API, CRM, ERP)', en: 'Third-party integrations (APIs, CRM, ERP)' },
      { id: 'cloud', price: { TND: 700, EUR: 280 }, fr: 'Cloud AWS + Docker + CI/CD', en: 'AWS cloud + Docker + CI/CD' },
    ],
  },
  {
    id: 'mobile',
    unit: 'once',
    price: { TND: 6000, EUR: 2500 },
    name: { fr: 'Application mobile', en: 'Mobile app' },
    pitch: {
      fr: 'Une app iOS & Android, publiée sur les stores.',
      en: 'One app for iOS & Android, published on the stores.',
    },
    delivery: { fr: '6 à 10 semaines', en: '6–10 weeks' },
    includes: {
      fr: ['iOS + Android (React Native)', "Jusqu'à 8 écrans sur mesure", 'Connexion & comptes utilisateurs', 'Publication App Store & Google Play'],
      en: ['iOS + Android (React Native)', 'Up to 8 custom screens', 'Sign-in & user accounts', 'App Store & Google Play publishing'],
    },
    features: [
      { id: 'push', price: { TND: 400, EUR: 150 }, fr: 'Notifications push', en: 'Push notifications' },
      { id: 'pay', price: { TND: 900, EUR: 350 }, fr: 'Paiements in-app', en: 'In-app payments' },
      { id: 'maps', price: { TND: 600, EUR: 250 }, fr: 'Cartes & géolocalisation', en: 'Maps & geolocation' },
      { id: 'chat', price: { TND: 1000, EUR: 400 }, fr: 'Chat en temps réel', en: 'Real-time chat' },
      { id: 'admin', price: { TND: 1500, EUR: 600 }, fr: "Back-office web d'administration", en: 'Web admin back-office' },
      { id: 'offline', price: { TND: 700, EUR: 280 }, fr: 'Mode hors ligne', en: 'Offline mode' },
    ],
  },
  {
    id: 'video',
    unit: 'video',
    price: { TND: 300, EUR: 120 },
    name: { fr: 'Vidéo publicitaire', en: 'Video ads' },
    pitch: {
      fr: 'Des vidéos courtes qui arrêtent le scroll.',
      en: 'Short videos that stop the scroll.',
    },
    delivery: { fr: '3 à 5 jours', en: '3–5 days' },
    includes: {
      fr: ['Vidéo de 30 à 60 s (Reels, TikTok, Shorts)', 'Script & storyboard', 'Montage, musique & sous-titres', 'Formats 9:16, 1:1 et 16:9'],
      en: ['30–60 s video (Reels, TikTok, Shorts)', 'Script & storyboard', 'Editing, music & subtitles', '9:16, 1:1 and 16:9 formats'],
    },
    features: [
      { id: 'shoot', price: { TND: 400, EUR: 160 }, fr: 'Tournage sur place (½ journée)', en: 'On-site filming (half day)' },
      { id: 'extra', price: { TND: 200, EUR: 80 }, fr: 'Vidéo supplémentaire (même tournage)', en: 'Extra video (same shoot)' },
      { id: 'motion', price: { TND: 250, EUR: 100 }, fr: 'Motion design & logo animé', en: 'Motion graphics & animated logo' },
      { id: 'voice', price: { TND: 150, EUR: 60 }, fr: 'Voix off (FR / AR / EN)', en: 'Voice-over (FR / AR / EN)' },
      { id: 'drone', price: { TND: 350, EUR: 140 }, fr: 'Images drone', en: 'Drone footage' },
      { id: 'ads', price: { TND: 250, EUR: 100 }, fr: 'Lancement de campagne (Meta / TikTok Ads)', en: 'Ad campaign setup (Meta / TikTok Ads)' },
    ],
  },
  {
    id: 'care',
    unit: 'month',
    price: { TND: 120, EUR: 49 },
    name: { fr: 'Maintenance & hébergement', en: 'Care plan' },
    pitch: {
      fr: 'Votre site rapide, sécurisé et à jour — sans y penser.',
      en: 'Your site kept fast, secure and up to date.',
    },
    delivery: { fr: 'Mensuel, sans engagement', en: 'Monthly, cancel anytime' },
    includes: {
      fr: ['Hébergement, SSL & sauvegardes', 'Mises à jour & sécurité', '1 h de modifications par mois', 'Surveillance de disponibilité 24/7'],
      en: ['Hosting, SSL & backups', 'Updates & security', '1 hour of changes per month', '24/7 uptime monitoring'],
    },
    features: [
      { id: 'content', price: { TND: 150, EUR: 60 }, fr: '4 h de modifications par mois', en: '4 hours of changes per month' },
      { id: 'seo', price: { TND: 80, EUR: 30 }, fr: 'Rapport SEO mensuel', en: 'Monthly SEO report' },
      { id: 'priority', price: { TND: 100, EUR: 40 }, fr: 'Support prioritaire (sous 24 h)', en: 'Priority support (within 24 h)' },
    ],
  },
];

export const getService = (id) => SERVICES.find((s) => s.id === id);

/**
 * Money, formatted by hand rather than with Intl so the server and every
 * browser produce byte-identical strings (Intl's French grouping space varies
 * between engines, which would trip a hydration mismatch).
 */
export function formatPrice(amount, currency, lang) {
  const sep = lang === 'fr' ? ' ' : ',';
  const n = String(Math.round(amount)).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
  if (currency === 'EUR') return lang === 'fr' ? `${n} €` : `€${n}`;
  return lang === 'fr' ? `${n} DT` : `${n} TND`;
}

/** Default currency before we know anything about the visitor. */
export const defaultCurrency = (lang) => (lang === 'fr' ? 'TND' : 'EUR');

/** Visitors whose clock says Tunisia get dinars, everyone else euros. */
export function guessCurrency(lang) {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (tz === 'Africa/Tunis') return 'TND';
    return 'EUR';
  } catch (e) {
    return defaultCurrency(lang);
  }
}

/**
 * Prices up a selection: `{ [serviceId]: [featureId, ...] }`.
 * One-off and monthly amounts are kept apart — adding a monthly care plan to a
 * one-off website must not read as one big lump sum.
 */
export function priceSelection(selection, currency) {
  const lines = SERVICES.filter((s) => selection[s.id]).map((s) => {
    const feats = s.features.filter((f) => selection[s.id].includes(f.id));
    const total = s.price[currency] + feats.reduce((sum, f) => sum + f.price[currency], 0);
    return { service: s, feats, total };
  });
  const once = lines.filter((l) => l.service.unit !== 'month').reduce((sum, l) => sum + l.total, 0);
  const monthly = lines.filter((l) => l.service.unit === 'month').reduce((sum, l) => sum + l.total, 0);
  return { lines, once, monthly };
}

export const whatsappUrl = (text) =>
  `https://wa.me/${PERSON.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
