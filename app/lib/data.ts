export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  slug: string;
}

export interface Partner {
  title: string;
  description: string;
  image: string;
  url?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  client: string;
  date: string;
  tags: string[];
  url: string | null;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Diffusion Multi-Stream',
    description: 'Diffusion simultanée sur plusieurs plateformes pour maximiser votre portée et toucher votre audience où qu\'elle se trouve.',
    icon: 'Radio',
    slug: 'diffusion-multi-stream',
    features: [
      'Diffusion simultanée sur YouTube, Facebook, Instagram',
      'Streaming en direct haute qualité',
      'Gestion technique complète',
      'Support multi-caméras',
      'Interaction en temps réel avec l\'audience',
      'Enregistrement automatique',
      'Analytics détaillés post-diffusion',
    ],
  },
  {
    id: '2',
    title: 'Réseaux Sociaux',
    description: 'Stratégie digitale complète pour développer votre présence en ligne et engager votre communauté catholique.',
    icon: 'Share2',
    slug: 'reseaux-sociaux',
    features: [
      'Stratégie de contenu adaptée',
      'Création de visuels et vidéos',
      'Gestion quotidienne des comptes',
      'Community management',
      'Campagnes publicitaires ciblées',
      'Analyse des performances',
      'Formation aux bonnes pratiques',
    ],
  },
  {
    id: '3',
    title: 'Organisation d\'Événements',
    description: 'Conception et réalisation d\'événements catholiques mémorables, de l\'idée à la réalisation complète.',
    icon: 'Calendar',
    slug: 'organisation-evenements',
    features: [
      'Conception créative d\'événements',
      'Logistique complète',
      'Coordination des intervenants',
      'Gestion technique audiovisuelle',
      'Communication et promotion',
      'Suivi post-événement',
      'Événements hybrides (présentiel/digital)',
    ],
  },
  {
    id: '4',
    title: 'Films Institutionnels',
    description: 'Production de contenus vidéo professionnels pour valoriser votre mission et vos valeurs catholiques.',
    icon: 'Video',
    slug: 'films-institutionnels',
    features: [
      'Écriture de scénarios sur mesure',
      'Production vidéo haute qualité',
      'Tournage multi-caméras',
      'Post-production professionnelle',
      'Motion design et animations',
      'Sous-titrage et traduction',
      'Optimisation pour tous supports',
    ],
  },
  {
    id: '5',
    title: 'Création de Sites Web',
    description: 'Développement de sites web modernes, optimisés et adaptés aux besoins spécifiques des organisations catholiques.',
    icon: 'Globe',
    slug: 'creation-sites-web',
    features: [
      'Design moderne et responsive',
      'Optimisation SEO avancée',
      'Système de gestion de contenu',
      'Intégration réseaux sociaux',
      'Sécurité renforcée',
      'Performance optimisée',
      'Formation à l\'administration',
    ],
  },
];

export const partners: Partner[] = [
  {
    title: 'Le Baptême Catholique',
    description: 'Préparation et accompagnement spirituel pour le sacrement du baptême',
    image: 'https://heavenradio.fr/assets/baptemecatho-DdTvNFk4.png',
    url: 'https://lebaptemecatholique.fr',
  },
  {
    title: 'La Mission Catholique',
    description: 'Dépliants missionnaires et outils pour l\'évangélisation en paroisse',
    image: 'https://lebaptemecatholique.fr/assets/missioncatho.png',
  },
  {
    title: 'Conférence des Évêques de France',
    description: 'Institution officielle de l\'Église catholique en France',
    image: 'https://diocese44.fr/wp-content/uploads/2020/04/Logo-CEF-1280x640.jpeg',
  },
  {
    title: 'Site du Vatican',
    description: 'Site officiel du Saint-Siège et du Vatican',
    image: 'https://content.r9cdn.net/rimg/dimg/5e/b6/6c7d0b5d-hood-216983-166a2810358.jpg?crop=true&width=1020&height=498',
  },
  {
    title: 'Congrès Mission (Partenaire Officiel)',
    description: 'Événement majeur de l\'évangélisation et de la mission',
    image: 'https://congresmission.com/wp-content/uploads/sites/14/2025/01/CM-LOGO-ORANGE-min-743x1024.png',
  },
  {
    title: 'Heaven Radio',
    description: 'La radio catholique 100% louange et adoration. Programmes spirituels quotidiens, prières, chapelet et musique chrétienne.',
    image: 'https://lebaptemecatholique.fr/assets/heavenradio.png',
    url: 'https://heavenradio.fr',
  },
  {
    title: 'Wikibible',
    description: 'Ressources bibliques et encyclopédie de la foi catholique',
    image: 'https://res.cloudinary.com/dgjsq5fnl/image/upload/v1769107139/wikibible_logo_qikkaj.jpg',
    url: 'https://wikibible.fr/',
  },
  {
    title: 'Institut Irénée',
    description: 'Institut apologétique pour la défense de la foi catholique',
    image: 'https://res.cloudinary.com/dgjsq5fnl/image/upload/v1768322194/ireneeinstitut_uoiacr.webp',
    url: 'https://irenee-institut.org/',
  },
  {
    title: 'SOS Chrétiens d\'Occident',
    description: 'Association de protection des chrétiens d\'Occident',
    image: 'https://res.cloudinary.com/dgjsq5fnl/image/upload/v1768322194/soschretiendoccident_ggt6ym.webp',
    url: 'https://soschretiensdoccident.fr/',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Révélation Radio',
    description: 'Site vitrine pour une web radio catholique, présentation des émissions, lecteur audio intégré',
    category: 'Web Radio',
    image: 'https://theo-multimedia.com/revelation.png',
    client: 'Association Parole et Partage',
    date: 'Juillet 2024',
    tags: ['Web Radio', 'Audio Streaming', 'Site Vitrine'],
    url: null,
  },
  {
    id: '2',
    title: 'Fesch 2025',
    description: 'Site promotionnel pour le documentaire "Fesch 2025, du non-sens au Mystère" réalisé par Samuel Armnius',
    category: 'Documentaire',
    image: 'https://theo-multimedia.com/fesch.png',
    client: 'Wady Productions',
    date: 'Novembre 2024',
    tags: ['Documentaire', 'Promotion', 'Cinéma'],
    url: 'https://fesch2025.fr/',
  },
  {
    id: '3',
    title: 'Heaven Radio',
    description: 'Successeur de Révélation Radio, nouvelle web radio de la même équipe, expérience audio enrichie et design repensé',
    category: 'Web Radio',
    image: 'https://theo-multimedia.com/heavenradio.png',
    client: 'Association Parole et Partage',
    date: 'Juin 2024',
    tags: ['Web Radio', 'Streaming', 'Design Moderne'],
    url: 'https://heavenradio.fr/',
  },
  {
    id: '4',
    title: 'Le Baptême Catholique',
    description: 'Landing page de génération de leads pour accompagner les personnes vers le baptême',
    category: 'Landing Page',
    image: 'https://theo-multimedia.com/baptemecatholique.png',
    client: 'Association Parole et Partage',
    date: 'Juillet 2024',
    tags: ['Landing Page', 'Lead Generation', 'Baptême'],
    url: 'https://lebaptemecatholique.fr/',
  },
];

export const stats = [
  { value: '500+', label: 'Clients Satisfaits' },
  { value: '1000+', label: 'Projets Réalisés' },
  { value: '4.9/5', label: 'Note Moyenne' },
  { value: '24h/7j', label: 'Support Disponible' },
];

export const processSteps = [
  { step: '01', title: 'Analyse', description: 'Nous analysons vos besoins et objectifs pour définir la stratégie optimale.' },
  { step: '02', title: 'Conception', description: 'Création d\'un plan détaillé et personnalisé selon vos valeurs catholiques.' },
  { step: '03', title: 'Réalisation', description: 'Mise en œuvre professionnelle avec un suivi constant de la qualité.' },
  { step: '04', title: 'Optimisation', description: 'Analyse des résultats et optimisation continue pour maximiser l\'impact.' },
];

export const values = [
  { icon: 'Cross', title: 'Foi et Authenticité', description: 'Nous comprenons et respectons les valeurs catholiques dans chaque projet que nous réalisons.' },
  { icon: 'Heart', title: 'Passion et Engagement', description: 'Notre équipe met tout son cœur au service de votre mission spirituelle et communautaire.' },
  { icon: 'Lightbulb', title: 'Innovation et Créativité', description: 'Nous combinons tradition et modernité pour créer des solutions de communication uniques.' },
  { icon: 'Shield', title: 'Confiance et Fiabilité', description: 'Votre confiance est précieuse. Nous nous engageons à la mériter chaque jour.' },
];

export const team = [
  { name: 'Samuel Armnius', role: 'CEO', image: '/team/sam.jpg', bio: 'Fondateur de l\'agence ultreiaevent.' },
  { name: 'Théo Lafont', role: 'Développeur Full Stack', image: '/team/theo.jpg', bio: 'Développeur Full Stack avec 10 ans d\'expertise.' },
];

export const faqs = [
  { question: 'Combien de temps faut-il pour réaliser un projet ?', answer: 'Cela dépend du type de projet. Un site web prend généralement 2-4 semaines, tandis qu\'un événement peut nécessiter 1-3 mois de préparation.' },
  { question: 'Proposez-vous des tarifs préférentiels pour les paroisses ?', answer: 'Oui, nous proposons des tarifs adaptés aux budgets des paroisses et organisations catholiques. Contactez-nous pour un devis personnalisé.' },
  { question: 'Pouvez-vous gérer des événements en direct ?', answer: 'Absolument ! Nous sommes spécialisés dans la diffusion en direct multi-plateformes et la gestion technique d\'événements religieux.' },
  { question: 'Offrez-vous un support après livraison ?', answer: 'Oui, nous proposons un support technique et un accompagnement continu pour tous nos services, avec différentes formules selon vos besoins.' },
];

export const contactInfo = [
  { icon: 'Mail', title: 'Email', content: 'catholicloungemusic@mail.com', link: 'mailto:catholicloungemusic@mail.com' },
  { icon: 'Phone', title: 'Téléphone', content: '+ 33 1 71 68 15 38', link: 'tel:+33171681538' },
  { icon: 'MapPin', title: 'Adresse', content: 'Paris, France', link: null },
  { icon: 'Clock', title: 'Horaires', content: 'Lun-Ven: 9h-18h', link: null },
];

export const servicesList = ['Diffusion Multi-Stream', 'Réseaux Sociaux', 'Organisation d\'Événements', 'Films Institutionnels', 'Création de Sites Web', 'Autre'];
