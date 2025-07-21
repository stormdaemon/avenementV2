import type { SEOData } from '../types';

/**
 * Hook pour les données SEO de la page d'accueil
 */
export const useHomeSEOData = (): SEOData => {
  return {
    title: 'ultreiaevent - Agence de Communication Catholique | Diffusion, Événements & Digital',
    description: 'Agence ultreiaevent : spécialiste de la communication catholique. Diffusion multi-stream, organisation d\'événements, films institutionnels, sites web et réseaux sociaux pour diocèses, paroisses et communautés.',
    keywords: [
      'agence communication catholique',
      'diffusion messe en direct',
      'streaming religieux',
      'organisation événement catholique',
      'site web paroisse',
      'film institutionnel',
      'réseaux sociaux église',
      'communication diocèse'
    ],
    canonical: 'https://ultreiaevent.com/',
    openGraph: {
      title: 'ultreiaevent - Agence de Communication Catholique',
      description: 'Spécialiste de la communication catholique : diffusion en direct, événements, digital et audiovisuel pour diocèses et paroisses.',
      url: 'https://ultreiaevent.com/',
      type: 'website',
      image: 'https://ultreiaevent.com/images/og-home.jpg'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'ultreiaevent - Agence de Communication Catholique',
      description: 'Spécialiste de la communication catholique : diffusion en direct, événements, digital et audiovisuel pour diocèses et paroisses.',
      image: 'https://ultreiaevent.com/images/twitter-home.jpg'
    },
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Agence ultreiaevent',
      description: 'Agence de communication spécialisée dans le secteur catholique',
      url: 'https://ultreiaevent.com',
      logo: 'https://ultreiaevent.com/images/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+33-1-23-45-67-89',
        contactType: 'customer service',
        availableLanguage: 'French'
      },
      sameAs: [
        'https://www.facebook.com/ultreiaevent.agency',
        'https://www.instagram.com/ultreiaevent.agency',
        'https://www.linkedin.com/company/ultreiaevent-agency'
      ],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'FR',
        addressLocality: 'Paris'
      }
    }
  };
};

/**
 * Hook pour les données SEO d'un service spécifique
 */
export const useServiceSEOData = (serviceName: string, serviceDescription: string, serviceSlug: string): SEOData => {
  return {
    title: `${serviceName} - Agence ultreiaevent | Communication Catholique`,
    description: serviceDescription,
    keywords: [
      'agence communication catholique',
      serviceName.toLowerCase(),
      'diocèse',
      'paroisse',
      'église',
      'communication religieuse'
    ],
    canonical: `https://ultreiaevent.com/services/${serviceSlug}`,
    openGraph: {
      title: `${serviceName} - Agence ultreiaevent`,
      description: serviceDescription,
      url: `https://ultreiaevent.com/services/${serviceSlug}`,
      type: 'article',
      image: `https://ultreiaevent.com/images/services/${serviceSlug}-og.jpg`
    },
    twitter: {
      card: 'summary',
      title: `${serviceName} - Agence ultreiaevent`,
      description: serviceDescription,
      image: `https://ultreiaevent.com/images/services/${serviceSlug}-twitter.jpg`
    },
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: serviceName,
      description: serviceDescription,
      provider: {
        '@type': 'Organization',
        name: 'Agence Ultreiaevent',
        url: 'https://avenement-agency.com'
      },
      url: `https://avenement-agency.com/services/${serviceSlug}`
    }
  };
};

/**
 * Hook pour les données SEO d'une page générique
 */
export const usePageSEOData = (pageTitle: string, pageDescription: string, pagePath: string): SEOData => {
  return {
    title: `${pageTitle} - Agence ultreiaevent`,
    description: pageDescription,
    keywords: ['agence communication catholique', pageTitle.toLowerCase()],
    canonical: `https://ultreiaevent.com${pagePath}`,
    openGraph: {
      title: `${pageTitle} - Agence ultreiaevent`,
      description: pageDescription,
      url: `https://ultreiaevent.com${pagePath}`,
      type: 'article'
    },
    twitter: {
      card: 'summary',
      title: `${pageTitle} - Agence ultreiaevent`,
      description: pageDescription
    },
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: pageTitle,
      description: pageDescription,
      url: `https://avenement-agency.com${pagePath}`,
      isPartOf: {
        '@type': 'WebSite',
        name: 'Agence Ultreiaevent',
        url: 'https://avenement-agency.com'
      }
    }
  };
};

/**
 * Hook pour les données SEO de la page À propos
 */
export const useAboutSEOData = (): SEOData => {
  return {
    title: 'À Propos - Agence Ultreiaevent | Notre Mission & Équipe',
    description: 'Découvrez l\'équipe et la mission d\'Ultreiaevent, agence spécialisée dans la communication catholique. Notre expertise au service de votre communauté religieuse.',
    keywords: [
      'agence communication catholique',
      'équipe ultreiaevent',
      'mission communication religieuse',
      'expertise diocèse',
      'spécialiste paroisse'
    ],
    canonical: 'https://avenement-agency.com/about',
    openGraph: {
      title: 'À Propos - Agence Ultreiaevent',
      description: 'Découvrez l\'équipe et la mission d\'Ultreiaevent, agence spécialisée dans la communication catholique.',
      url: 'https://avenement-agency.com/about',
      type: 'website',
      image: 'https://avenement-agency.com/images/about-og.jpg'
    },
    twitter: {
      card: 'summary',
      title: 'À Propos - Agence Ultreiaevent',
      description: 'Découvrez l\'équipe et la mission d\'Ultreiaevent, agence spécialisée dans la communication catholique.'
    },
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'À Propos - Agence Ultreiaevent',
      description: 'Page à propos de l\'Agence Ultreiaevent',
      url: 'https://avenement-agency.com/about',
      mainEntity: {
        '@type': 'Organization',
        name: 'Agence Ultreiaevent',
        description: 'Agence de communication spécialisée dans le secteur catholique'
      }
    }
  };
};

/**
 * Hook pour les données SEO de la page Services
 */
export const useServicesSEOData = (): SEOData => {
  return {
    title: 'Nos Services - Agence Ultreiaevent | Communication Catholique Complète',
    description: 'Découvrez tous nos services de communication catholique : diffusion en direct, événements, sites web, films institutionnels, réseaux sociaux et plus encore.',
    keywords: [
      'services communication catholique',
      'diffusion messe direct',
      'événements religieux',
      'site web paroisse',
      'film institutionnel église',
      'réseaux sociaux diocèse'
    ],
    canonical: 'https://avenement-agency.com/services',
    openGraph: {
      title: 'Nos Services - Agence Ultreiaevent',
      description: 'Découvrez tous nos services de communication catholique : diffusion, événements, digital et audiovisuel.',
      url: 'https://avenement-agency.com/services',
      type: 'website',
      image: 'https://avenement-agency.com/images/services-og.jpg'
    },
    twitter: {
      card: 'summary',
      title: 'Nos Services - Agence Ultreiaevent',
      description: 'Découvrez tous nos services de communication catholique : diffusion, événements, digital et audiovisuel.'
    },
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Services - Agence Ultreiaevent',
      description: 'Liste complète des services de communication catholique',
      url: 'https://avenement-agency.com/services'
    }
  };
};

/**
 * Hook pour les données SEO de la page Contact
 */
export const useContactSEOData = (): SEOData => {
  return {
    title: 'Contact - Agence Ultreiaevent | Parlons de Votre Projet',
    description: 'Contactez l\'Agence Ultreiaevent pour discuter de votre projet de communication catholique. Devis gratuit et conseil personnalisé pour diocèses et paroisses.',
    keywords: [
      'contact agence communication catholique',
      'devis communication religieuse',
      'conseil diocèse',
      'projet paroisse',
      'agence ultreiaevent contact'
    ],
    canonical: 'https://avenement-agency.com/contact',
    openGraph: {
      title: 'Contact - Agence Ultreiaevent',
      description: 'Contactez-nous pour discuter de votre projet de communication catholique. Devis gratuit et conseil personnalisé.',
      url: 'https://avenement-agency.com/contact',
      type: 'website',
      image: 'https://avenement-agency.com/images/contact-og.jpg'
    },
    twitter: {
      card: 'summary',
      title: 'Contact - Agence Ultreiaevent',
      description: 'Contactez-nous pour discuter de votre projet de communication catholique.'
    },
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact - Agence Ultreiaevent',
      description: 'Page de contact de l\'Agence Ultreiaevent',
      url: 'https://avenement-agency.com/contact'
    }
  };
};