'use client';

import { Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react';
import { FadeIn, FadeInView } from '../components/MotionWrapper';

const sections = [
  {
    icon: Shield,
    title: 'Responsable du traitement',
    content: [
      'WADY PRODUCTIONS, SAS au capital social de 1 euro, immatriculée au RCS de Paris sous le numéro 920 498 722, dont le siège social est situé au 7 RUE AMBROISE THOMAS 75009 PARIS.',
      'Contact : contact@ultreiaevent.com',
    ],
  },
  {
    icon: Database,
    title: 'Données collectées',
    content: [
      'Données d\'identification : nom, prénom, adresse e-mail, numéro de téléphone',
      'Données de navigation : adresse IP, type de navigateur, pages visitées, durée de visite',
      'Données de contact : messages envoyés via nos formulaires de contact',
      'Données techniques : cookies, identifiants de session',
    ],
  },
  {
    icon: Eye,
    title: 'Finalités du traitement',
    content: [
      'Répondre à vos demandes de contact et devis',
      'Gérer la relation client et le suivi des projets',
      'Améliorer nos services et notre site web',
      'Respecter nos obligations légales et réglementaires',
      'Envoyer des communications marketing (avec votre consentement)',
    ],
  },
  {
    icon: Lock,
    title: 'Base légale du traitement',
    content: [
      'Exécution d\'un contrat ou de mesures précontractuelles (article 6.1.b du RGPD)',
      'Intérêt légitime de notre société (article 6.1.f du RGPD)',
      'Consentement de la personne concernée (article 6.1.a du RGPD)',
      'Respect d\'une obligation légale (article 6.1.c du RGPD)',
    ],
  },
  {
    icon: UserCheck,
    title: 'Vos droits',
    content: [
      'Droit d\'accès : vous pouvez demander l\'accès à vos données personnelles',
      'Droit de rectification : vous pouvez demander la correction de vos données',
      'Droit à l\'effacement : vous pouvez demander la suppression de vos données',
      'Droit à la limitation : vous pouvez demander la limitation du traitement',
      'Droit à la portabilité : vous pouvez récupérer vos données dans un format structuré',
      'Droit d\'opposition : vous pouvez vous opposer au traitement de vos données',
    ],
  },
  {
    icon: FileText,
    title: 'Conservation des données',
    content: [
      'Données de contact : conservées pendant 3 ans après le dernier contact',
      'Données clients : conservées pendant 10 ans conformément aux obligations comptables',
      'Données de navigation : conservées pendant 13 mois maximum',
    ],
  },
];

const LAST_UPDATE = '23/01/2025';

export default function PrivacyPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-glow mb-4 sm:mb-6">
            Politique de confidentialité
          </h1>
          <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto mb-6">
            Nous nous engageons à protéger votre vie privée et vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
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

          {/* Contact Section */}
          <FadeInView delay={0.6}>
            <div className="bg-gold-400/10 backdrop-blur-xl border border-gold-400/20 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Contact et réclamations
              </h2>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4">
                Pour exercer vos droits ou pour toute question relative à cette politique de confidentialité, vous pouvez nous contacter :
              </p>
              <ul className="space-y-2 mb-4 ml-4">
                <li className="text-sm sm:text-base text-white/70 relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gold-400">
                  Par e-mail : contact@ultreiaevent.com
                </li>
                <li className="text-sm sm:text-base text-white/70 relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gold-400">
                  Par courrier : WADY PRODUCTIONS, 7 RUE AMBROISE THOMAS 75009 PARIS
                </li>
              </ul>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                Si vous estimez que vos droits ne sont pas respectés, vous avez le droit de déposer une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :{' '}
                <a href="https://www.cnil.fr" className="text-gold-400 underline underline-offset-2 hover:no-underline">
                  www.cnil.fr
                </a>
              </p>
            </div>
          </FadeInView>
        </div>
      </div>
    </div>
  );
}
