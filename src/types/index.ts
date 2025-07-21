// Types pour l'agence Avènement

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image?: string;
  slug: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  gallery?: string[];
  client?: string;
  date: string;
  tags: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      duration?: number;
      delay?: number;
      ease?: string;
    };
  };
}

// Export par défaut pour compatibilité
export default {
  Service,
  TeamMember,
  Project,
  ContactForm,
  SEOData,
  NavigationItem,
  AnimationVariants
};