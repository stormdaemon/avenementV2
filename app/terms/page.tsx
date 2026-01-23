'use client';

import Link from 'next/link';
import { FileText, Users, Shield, AlertTriangle, Scale, Globe } from 'lucide-react';
import { FadeIn, FadeInView } from '../components/MotionWrapper';

const sections = [
  {
    icon: FileText,
    title: 'Objet',
    content: [
      'Les présentes conditions générales d\'utilisation (CGU) ont pour objet de définir les modalités et conditions d\'utilisation du site web www.ultreiaevent.com (ci-après "le Site") édité par WADY PRODUCTIONS.',
      'L\'utilisation du Site implique l\'acceptation pleine et entière des présentes CGU.',
    ],
  },
  {
    icon: Users,
    title: 'Définitions',
    content: [
      'Éditeur : WADY PRODUCTIONS, SAS au capital de 1 euro, immatriculée au RCS de Paris sous le numéro 920 498 722.',
      'Utilisateur : toute personne physique ou morale qui accède au Site et utilise les services proposés.',
      'Services : l\'ensemble des fonctionnalités et contenus proposés sur le Site.',
    ],
  },
  {
    icon: Globe,
    title: 'Accès au site',
    content: [
      'Le Site est accessible gratuitement à tout Utilisateur disposant d\'un accès à Internet.',
      'L\'Éditeur se réserve le droit de modifier, suspendre ou interrompre l\'accès au Site à tout moment.',
    ],
  },
  {
    icon: Shield,
    title: 'Utilisation du site',
    content: [
      'L\'Utilisateur s\'engage à utiliser le Site conformément aux présentes CGU et à la législation en vigueur.',
      'Il est strictement interdit d\'utiliser le Site pour diffuser des contenus illégaux ou porter atteinte aux droits de propriété intellectuelle.',
    ],
  },
  {
    icon: Scale,
    title: 'Propriété intellectuelle',
    content: [
      'L\'ensemble du contenu du Site est protégé par les droits de propriété intellectuelle et appartient à l\'Éditeur ou à ses partenaires.',
      'Toute reproduction, représentation ou modification est interdite sans autorisation écrite préalable.',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Responsabilité',
    content: [
      'L\'Éditeur s\'efforce de fournir des informations aussi précises que possible.',
      'L\'Éditeur ne pourra être tenu responsable des dommages directs ou indirects causés lors de l\'accès au Site.',
    ],
  },
];

const LAST_UPDATE = '23/01/2025';

export default function TermsPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-glow mb-4 sm:mb-6">
            Conditions d'utilisation
          </h1>
          <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto mb-6">
            Les présentes conditions générales d'utilisation régissent l'accès et l'utilisation du site web ultreiaevent.
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
                  <div className="space-y-3">
                    {section.content.map((item, i) => (
                      <p key={i} className="text-sm sm:text-base text-white/70 leading-relaxed">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </FadeInView>
            );
          })}

          {/* Data Section */}
          <FadeInView delay={0.6}>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Données personnelles
              </h2>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                Le traitement des données personnelles collectées sur le Site est régi par notre{' '}
                <Link href="/privacy" className="text-gold-400 underline underline-offset-2 hover:no-underline">
                  Politique de confidentialité
                </Link>.
              </p>
            </div>
          </FadeInView>

          {/* Contact Section */}
          <FadeInView delay={0.7}>
            <div className="bg-gold-400/10 backdrop-blur-xl border border-gold-400/20 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Contact
              </h2>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4">
                Pour toute question relative aux présentes conditions d'utilisation :
              </p>
              <ul className="space-y-2 ml-4">
                <li className="text-sm sm:text-base text-white/70 relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gold-400">
                  Par e-mail : contact@ultreiaevent.com
                </li>
                <li className="text-sm sm:text-base text-white/70 relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gold-400">
                  Par courrier : WADY PRODUCTIONS, 7 RUE AMBROISE THOMAS 75009 PARIS
                </li>
              </ul>
            </div>
          </FadeInView>
        </div>
      </div>
    </div>
  );
}
