'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const services = [
  { name: 'Diffusion Multi-Stream', href: '/services/diffusion-multi-stream' },
  { name: 'Réseaux Sociaux', href: '/services/reseaux-sociaux' },
  { name: 'Organisation d\'Événements', href: '/services/organisation-evenements' },
  { name: 'Films Institutionnels', href: '/services/films-institutionnels' },
  { name: 'Création de Sites Web', href: '/services/creation-sites-web' },
];

const quickLinks = [
  { name: 'À Propos', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
  { name: 'Devis Gratuit', href: '/contact' },
];

const CURRENT_YEAR = 2025;

export default function Footer() {
  return (
    <footer className="bg-black/90 backdrop-blur-xl border-t border-white/10 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-gold-400 text-glow mb-4">ultreiaevent</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Agence de communication catholique spécialisée dans la diffusion multi-stream, les réseaux sociaux et l'organisation d'événements spirituels.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:text-gold-400 hover:bg-gold-400/20 hover:-translate-y-0.5 transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Nos Services</h4>
            <div className="flex flex-col gap-3">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="text-sm text-white/70 hover:text-gold-400 transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Liens Rapides</h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-gold-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-white/70">
                <Mail size={20} className="text-gold-400 shrink-0 mt-0.5" />
                <a href="mailto:contact@ultreiaevent.com" className="hover:text-gold-400 transition-colors">
                  contact@ultreiaevent.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <Phone size={20} className="text-gold-400 shrink-0 mt-0.5" />
                <a href="tel:+33171681538" className="hover:text-gold-400 transition-colors">
                  + 33 1 71 68 15 38
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={20} className="text-gold-400 shrink-0 mt-0.5" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">© {CURRENT_YEAR} ultreiaevent. Tous droits réservés.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="/privacy" className="text-sm text-white/50 hover:text-gold-400 transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/terms" className="text-sm text-white/50 hover:text-gold-400 transition-colors">
              Conditions d'utilisation
            </Link>
            <Link href="/cgv" className="text-sm text-white/50 hover:text-gold-400 transition-colors">
              CGV
            </Link>
            <Link href="/legal" className="text-sm text-white/50 hover:text-gold-400 transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
