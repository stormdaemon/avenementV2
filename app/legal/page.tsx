'use client';

import Link from 'next/link';
import { Building2, User, Globe, Server, Shield, Phone, Mail, MapPin } from 'lucide-react';
import { FadeIn, FadeInView } from '../components/MotionWrapper';

const sections = [
  {
    icon: Building2,
    title: 'Identification de l\'éditeur',
    content: [
      { label: 'Dénomination sociale', value: 'WADY PRODUCTIONS' },
      { label: 'Forme juridique', value: 'SAS, société par actions simplifiée' },
      { label: 'Capital social', value: '1 euro' },
      { label: 'SIREN', value: '920 498 722' },
      { label: 'SIRET du siège social', value: '920 498 722 00015' },
      { label: 'N° TVA Intracommunautaire', value: 'FR74 920 498 722' },
      { label: 'Code NAF/APE', value: '59.11C - Production de films pour le cinéma' },
      { label: 'Date de création', value: '15/10/2022' },
    ],
  },
  {
    icon: MapPin,
    title: 'Adresse du siège social',
    content: [
      { label: 'Adresse', value: '7 RUE AMBROISE THOMAS' },
      { label: 'Code postal', value: '75009' },
      { label: 'Ville', value: 'PARIS' },
      { label: 'Pays', value: 'France' },
    ],
  },
  {
    icon: User,
    title: 'Représentant légal',
    content: [
      { label: 'Président', value: 'Samuel Armnius' },
      { label: 'Qualité', value: 'Président de la SAS' },
    ],
  },
  {
    icon: Phone,
    title: 'Contact',
    content: [
      { label: 'Email', value: 'contact@ultreiaevent.com' },
      { label: 'Téléphone', value: '+33 1 71 68 15 38' },
    ],
  },
  {
    icon: Globe,
    title: 'Hébergement du site',
    content: [
      { label: 'Hébergeur', value: 'Netlify, Inc.' },
      { label: 'Adresse', value: '2325 3rd Street, Suite 296, San Francisco, CA 94107, États-Unis' },
      { label: 'Site web', value: 'https://netlify.com' },
    ],
  },
  {
    icon: Server,
    title: 'Directeur de la publication',
    content: [
      { label: 'Directeur de publication', value: 'Théo Lafont' },
      { label: 'Qualité', value: 'Développeur Full Stack et Directeur Technique' },
    ],
  },
];

const LAST_UPDATE = '23/01/2025';

export default function LegalPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-glow mb-4 sm:mb-6">
            Mentions légales
          </h1>
          <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto mb-6">
            Informations légales relatives au site www.ultreiaevent.com, conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004.
          </p>
          <p className="text-sm text-white/50">Dernière mise à jour : {LAST_UPDATE}</p>
        </FadeIn>

        {/* Sections */}
        <div className="space-y-6 sm:space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <FadeInView key={section.title} delay={index * 0.1}>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8">
                  <div className="flex items-center gap-4 mb-4 sm:mb-6">
                    <div className="w-12 h-12 bg-gold-400/20 rounded-xl flex items-center justify-center">
                      <Icon size={24} className="text-gold-400" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {section.content.map((item, i) => (
                      <div key={i}>
                        <dt className="text-xs sm:text-sm text-gold-400 mb-1">{item.label}</dt>
                        <dd className="text-sm sm:text-base text-white/70">{item.value}</dd>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInView>
            );
          })}

          {/* IP Section */}
          <FadeInView delay={0.6}>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 bg-gold-400/20 rounded-xl flex items-center justify-center">
                  <Shield size={24} className="text-gold-400" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Propriété intellectuelle</h2>
              </div>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.
              </p>
            </div>
          </FadeInView>

          {/* Data Protection Section */}
          <FadeInView delay={0.7}>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Protection des données personnelles
              </h2>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement concernant vos données personnelles. Consultez notre{' '}
                <Link href="/privacy" className="text-gold-400 underline underline-offset-2 hover:no-underline">
                  Politique de confidentialité
                </Link>.
              </p>
            </div>
          </FadeInView>

          {/* Contact Section */}
          <FadeInView delay={0.8}>
            <div className="bg-gold-400/10 backdrop-blur-xl border border-gold-400/20 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Contact
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-gold-400 shrink-0" />
                  <a href="mailto:contact@ultreiaevent.com" className="text-sm sm:text-base text-gold-400 underline underline-offset-2 hover:no-underline">
                    contact@ultreiaevent.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-gold-400 shrink-0" />
                  <a href="tel:+33171681538" className="text-sm sm:text-base text-gold-400 underline underline-offset-2 hover:no-underline">
                    +33 1 71 68 15 38
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-gold-400 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-white/70">
                    WADY PRODUCTIONS<br />7 RUE AMBROISE THOMAS<br />75009 PARIS
                  </span>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </div>
  );
}
