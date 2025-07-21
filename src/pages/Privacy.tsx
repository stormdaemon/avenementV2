import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import { usePageSEOData } from '../hooks/useSEOData';

const Privacy: React.FC = () => {
  const seoData = usePageSEOData(
    'Politique de confidentialité',
    'Découvrez comment Avènement protège vos données personnelles et respecte votre vie privée conformément au RGPD.',
    '/privacy'
  );

  const sections = [
    {
      icon: Shield,
      title: "Responsable du traitement",
      content: [
        "WADY PRODUCTIONS, SAS au capital social de [montant], immatriculée au RCS de Paris sous le numéro 920 498 722, dont le siège social est situé au 7 RUE AMBROISE THOMAS 75009 PARIS.",
        "Représentée par son Président, [Nom du Président].",
        "Contact : contact@avenement.fr"
      ]
    },
    {
      icon: Database,
      title: "Données collectées",
      content: [
        "Données d'identification : nom, prénom, adresse e-mail, numéro de téléphone",
        "Données de navigation : adresse IP, type de navigateur, pages visitées, durée de visite",
        "Données de contact : messages envoyés via nos formulaires de contact",
        "Données techniques : cookies, identifiants de session"
      ]
    },
    {
      icon: Eye,
      title: "Finalités du traitement",
      content: [
        "Répondre à vos demandes de contact et devis",
        "Gérer la relation client et le suivi des projets",
        "Améliorer nos services et notre site web",
        "Respecter nos obligations légales et réglementaires",
        "Envoyer des communications marketing (avec votre consentement)"
      ]
    },
    {
      icon: Lock,
      title: "Base légale du traitement",
      content: [
        "Exécution d'un contrat ou de mesures précontractuelles (article 6.1.b du RGPD)",
        "Intérêt légitime de notre société (article 6.1.f du RGPD)",
        "Consentement de la personne concernée (article 6.1.a du RGPD)",
        "Respect d'une obligation légale (article 6.1.c du RGPD)"
      ]
    },
    {
      icon: UserCheck,
      title: "Vos droits",
      content: [
        "Droit d'accès : vous pouvez demander l'accès à vos données personnelles",
        "Droit de rectification : vous pouvez demander la correction de vos données",
        "Droit à l'effacement : vous pouvez demander la suppression de vos données",
        "Droit à la limitation : vous pouvez demander la limitation du traitement",
        "Droit à la portabilité : vous pouvez récupérer vos données dans un format structuré",
        "Droit d'opposition : vous pouvez vous opposer au traitement de vos données",
        "Droit de retrait du consentement : vous pouvez retirer votre consentement à tout moment"
      ]
    },
    {
      icon: FileText,
      title: "Conservation des données",
      content: [
        "Données de contact : conservées pendant 3 ans après le dernier contact",
        "Données clients : conservées pendant 10 ans conformément aux obligations comptables",
        "Données de navigation : conservées pendant 13 mois maximum",
        "Cookies : durée variable selon le type de cookie (voir notre politique cookies)"
      ]
    }
  ];

  return (
    <>
      <SEO seoData={seoData} />
      
      <div className="min-h-screen pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-glow">
              Politique de confidentialité
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Nous nous engageons à protéger votre vie privée et vos données personnelles 
              conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
            <div className="mt-6 text-sm text-gray-400">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </div>
          </motion.div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gold-400/20 rounded-xl flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  <div className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <p key={itemIndex} className="text-gray-300 leading-relaxed">
                        {item}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact DPO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 bg-gold-400/10 backdrop-blur-md rounded-2xl p-8 border border-gold-400/20"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Contact et réclamations</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Pour exercer vos droits ou pour toute question relative à cette politique de confidentialité, 
                vous pouvez nous contacter :
              </p>
              <ul className="space-y-2 ml-6">
                <li>• Par e-mail : contact@avenement.fr</li>
                <li>• Par courrier : WADY PRODUCTIONS, 7 RUE AMBROISE THOMAS 75009 PARIS</li>
              </ul>
              <p className="mt-6">
                Si vous estimez que vos droits ne sont pas respectés, vous avez le droit de déposer 
                une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) : 
                <a href="https://www.cnil.fr" className="text-gold-400 hover:underline ml-1">
                  www.cnil.fr
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Privacy;