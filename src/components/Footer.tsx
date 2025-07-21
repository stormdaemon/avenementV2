import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

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

  return (
    <footer className="relative bg-black/90 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold text-gold-400 text-glow mb-4">
                ultreiaevent
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Agence de communication catholique spécialisée dans la diffusion multi-stream, 
                les réseaux sociaux et l'organisation d'événements spirituels.
              </p>
            </motion.div>

            {/* Réseaux Sociaux */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:text-gold-400 hover:bg-gold-400/20 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Nos Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-gray-300 hover:text-gold-400 transition-colors duration-200 text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Liens Rapides */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Liens Rapides</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-gold-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-gold-400" />
                  <a
                    href="mailto:contact@ultreiaevent.com"
                    className="hover:text-gold-400 transition-colors duration-200 text-sm"
                  >
                    contact@ultreiaevent.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-gold-400" />
                  <a
                    href="tel:+33171681538"
                    className="hover:text-gold-400 transition-colors duration-200 text-sm"
                  >
                    + 33 1 71 68 15 38
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-gold-400 mt-0.5" />
                  <span className="text-sm">
                    Paris, France
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} ultreiaevent. Tous droits réservés.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center md:justify-end gap-4 text-sm"
            >
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-gold-400 transition-colors duration-200"
              >
                Politique de confidentialité
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-gold-400 transition-colors duration-200"
              >
                Conditions d'utilisation
              </Link>
              <Link
                to="/cgv"
                className="text-gray-400 hover:text-gold-400 transition-colors duration-200"
              >
                CGV
              </Link>
              <Link
                to="/legal"
                className="text-gray-400 hover:text-gold-400 transition-colors duration-200"
              >
                Mentions légales
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;