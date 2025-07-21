import { useEffect } from 'react';
import { SEOData } from '../types';

/**
 * Hook personnalisé pour gérer le SEO dynamique des pages
 * Permet de mettre à jour les meta tags, le titre et les données structurées
 */
export const useSEO = (seoData: SEOData) => {
  useEffect(() => {
    // Mise à jour du titre de la page
    if (seoData.title) {
      document.title = seoData.title;
    }

    // Mise à jour de la meta description
    if (seoData.description) {
      updateMetaTag('name', 'description', seoData.description);
    }

    // Mise à jour des keywords
    if (seoData.keywords) {
      updateMetaTag('name', 'keywords', seoData.keywords.join(', '));
    }

    // Mise à jour de l'URL canonique
    if (seoData.canonical) {
      updateCanonicalUrl(seoData.canonical);
    }

    // Mise à jour des Open Graph tags
    if (seoData.openGraph) {
      updateMetaTag('property', 'og:title', seoData.openGraph.title || seoData.title);
      updateMetaTag('property', 'og:description', seoData.openGraph.description || seoData.description);
      updateMetaTag('property', 'og:url', seoData.openGraph.url || seoData.canonical);
      
      if (seoData.openGraph.image) {
        updateMetaTag('property', 'og:image', seoData.openGraph.image);
        updateMetaTag('property', 'og:image:alt', seoData.openGraph.imageAlt || seoData.title);
      }
      
      if (seoData.openGraph.type) {
        updateMetaTag('property', 'og:type', seoData.openGraph.type);
      }
    }

    // Mise à jour des Twitter Cards
    if (seoData.twitter) {
      updateMetaTag('name', 'twitter:card', seoData.twitter.card || 'summary_large_image');
      updateMetaTag('name', 'twitter:title', seoData.twitter.title || seoData.title);
      updateMetaTag('name', 'twitter:description', seoData.twitter.description || seoData.description);
      
      if (seoData.twitter.image) {
        updateMetaTag('name', 'twitter:image', seoData.twitter.image);
        updateMetaTag('name', 'twitter:image:alt', seoData.twitter.imageAlt || seoData.title);
      }
      
      if (seoData.twitter.site) {
        updateMetaTag('name', 'twitter:site', seoData.twitter.site);
      }
    }

    // Mise à jour des données structurées
    if (seoData.structuredData) {
      updateStructuredData(seoData.structuredData);
    }

    // Nettoyage lors du démontage du composant
    return () => {
      // Optionnel : restaurer les valeurs par défaut
    };
  }, [seoData]);
};

/**
 * Met à jour ou crée une meta tag
 */
const updateMetaTag = (attribute: string, value: string, content: string) => {
  let element = document.querySelector(`meta[${attribute}="${value}"]`) as HTMLMetaElement;
  
  if (element) {
    element.content = content;
  } else {
    element = document.createElement('meta');
    element.setAttribute(attribute, value);
    element.content = content;
    document.head.appendChild(element);
  }
};

/**
 * Met à jour l'URL canonique
 */
const updateCanonicalUrl = (url: string) => {
  let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (element) {
    element.href = url;
  } else {
    element = document.createElement('link');
    element.rel = 'canonical';
    element.href = url;
    document.head.appendChild(element);
  }
};

/**
 * Met à jour les données structurées JSON-LD
 */
const updateStructuredData = (data: object) => {
  // Supprimer les anciennes données structurées de la page
  const existingScripts = document.querySelectorAll('script[type="application/ld+json"][data-dynamic="true"]');
  existingScripts.forEach(script => script.remove());

  // Ajouter les nouvelles données structurées
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-dynamic', 'true');
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

/**
 * Hook pour gérer le SEO spécifique aux services
 */
export const useServiceSEO = (serviceName: string, serviceDescription: string, serviceSlug: string) => {
  const seoData: SEOData = {
    title: `${serviceName} - Agence Avènement | Communication Catholique`,
    description: serviceDescription,
    keywords: [
      'agence communication catholique',
      serviceName.toLowerCase(),
      'diocèse',
      'paroisse',
      'église',
      'communication religieuse'
    ],
    canonical: `https://avenement-agency.com/services/${serviceSlug}`,
    openGraph: {
      title: `${serviceName} - Agence Avènement`,
      description: serviceDescription,
      url: `https://avenement-agency.com/services/${serviceSlug}`,
      type: 'article',
      image: `https://avenement-agency.com/images/services/${serviceSlug}-og.jpg`,
      imageAlt: `${serviceName} - Agence Avènement`
    },
    twitter: {
      card: 'summary_large_image',
      title: `${serviceName} - Agence Avènement`,
      description: serviceDescription,
      image: `https://avenement-agency.com/images/services/${serviceSlug}-twitter.jpg`,
      imageAlt: `${serviceName} - Agence Avènement`
    },
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': serviceName,
      'description': serviceDescription,
      'provider': {
        '@type': 'Organization',
        'name': 'Agence Avènement',
        'url': 'https://avenement-agency.com'
      },
      'serviceType': serviceName,
      'areaServed': {
        '@type': 'Country',
        'name': 'France'
      }
    }
  };

  useSEO(seoData);
};

/**
 * Hook pour gérer le SEO de la page d'accueil
 */
export const useHomeSEO = () => {
  const seoData: SEOData = {
    title: 'Avènement - Agence de Communication Catholique | Diffusion, Événements & Digital',
    description: 'Agence Avènement : spécialiste de la communication catholique. Diffusion multi-stream, organisation d\'événements, films institutionnels, sites web et réseaux sociaux pour diocèses, paroisses et communautés.',
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
    canonical: 'https://avenement-agency.com/',
    openGraph: {
      title: 'Avènement - Agence de Communication Catholique',
      description: 'Spécialiste de la communication catholique : diffusion en direct, événements, digital et audiovisuel pour diocèses et paroisses.',
      url: 'https://avenement-agency.com/',
      type: 'website',
      image: 'https://avenement-agency.com/images/og-image.jpg',
      imageAlt: 'Agence Avènement - Communication Catholique'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Avènement - Agence de Communication Catholique',
      description: 'Spécialiste de la communication catholique : diffusion en direct, événements, digital et audiovisuel.',
      image: 'https://avenement-agency.com/images/twitter-card.jpg',
      imageAlt: 'Agence Avènement - Communication Catholique',
      site: '@AvenementAgency'
    }
  };

  useSEO(seoData);
};

/**
 * Hook pour gérer le SEO des pages de contenu
 */
export const usePageSEO = (pageTitle: string, pageDescription: string, pagePath: string) => {
  const seoData: SEOData = {
    title: `${pageTitle} - Agence Avènement`,
    description: pageDescription,
    canonical: `https://avenement-agency.com${pagePath}`,
    openGraph: {
      title: `${pageTitle} - Agence Avènement`,
      description: pageDescription,
      url: `https://avenement-agency.com${pagePath}`,
      type: 'article'
    },
    twitter: {
      card: 'summary',
      title: `${pageTitle} - Agence Avènement`,
      description: pageDescription
    }
  };

  useSEO(seoData);
};

export default useSEO;