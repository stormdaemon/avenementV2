import React from 'react';
import { motion } from 'framer-motion';
import { Building2, User, Globe, Server, Shield, Phone, Mail, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import { usePageSEOData } from '../hooks/useSEOData';

const LegalNotice: React.FC = () => {
  const seoData = usePageSEOData(
    'Mentions légales',
    'Mentions légales du site Avènement. Informations sur l\'éditeur WADY PRODUCTIONS, hébergement et directeur de publication.',
    '/legal'
  );

  const sections = [
    {
      icon: Building2,
      title: "Identification de l'éditeur",
      content: [
        {
          label: "Dénomination sociale",
          value: "WADY PRODUCTIONS"
        },
        {
          label: "Forme juridique",
          value: "SAS, société par actions simplifiée"
        },
        {
          label: "Capital social",
          value: "1 euro"
        },
        {
          label: "SIREN",
          value: "920 498 722"
        },
        {
          label: "SIRET du siège social",
          value: "920 498 722 00015"
        },
        {
          label: "N° TVA Intracommunautaire",
          value: "FR74 920 498 722"
        },
        {
          label: "Code NAF/APE",
          value: "59.11C - Production de films pour le cinéma"
        },
        {
          label: "Date de création",
          value: "15/10/2022"
        },
        {
          label: "Immatriculation RCS",
          value: "Paris - 920 498 722"
        },
        {
          label: "Immatriculation RNE (INPI)",
          value: "17/10/2022"
        }
      ]
    },
    {
      icon: MapPin,
      title: "Adresse du siège social",
      content: [
        {
          label: "Adresse",
          value: "7 RUE AMBROISE THOMAS"
        },
        {
          label: "Code postal",
          value: "75009"
        },
        {
          label: "Ville",
          value: "PARIS"
        },
        {
          label: "Pays",
          value: "France"
        }
      ]
    },
    {
      icon: User,
      title: "Représentant légal",
      content: [
        {
          label: "Président",
          value: "[Nom du Président à préciser]"
        },
        {
          label: "Qualité",
          value: "Président de la SAS"
        }
      ]
    },
    {
      icon: Phone,
      title: "Contact",
      content: [
        {
          label: "Email",
          value: "contact@avenement.fr"
        },
        {
          label: "Téléphone",
          value: "+33 1 71 68 15 38"
        }
      ]
    },
    {
      icon: Globe,
      title: "Hébergement du site",
      content: [
        {
          label: "Hébergeur",
          value: "Netlify, Inc."
        },
        {
          label: "Adresse",
          value: "2325 3rd Street, Suite 296, San Francisco, CA 94107, États-Unis"
        },
        {
          label: "Site web",
          value: "https://netlify.com"
        }
      ]
    },
    {
      icon: Server,
      title: "Directeur de la publication",
      content: [
        {
          label: "Directeur de publication",
          value: "Théo Lafont"
        },
        {
          label: "Qualité",
          value: "Président de WADY PRODUCTIONS"
        },
        {
          label: "Contact",
          value: "contact@avenement.fr"
        }
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
              Mentions légales
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Informations légales relatives au site www.avenement.fr, 
              conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004.
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="space-y-2">
                        <dt className="text-sm font-medium text-gold-400">{item.label}</dt>
                        <dd className="text-gray-300">{item.value}</dd>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Informations complémentaires */}
          <div className="space-y-12 mt-12">
            {/* Propriété intellectuelle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gold-400/20 rounded-xl flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-gold-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Propriété intellectuelle</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                  et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
                  les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
                  formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
                <p>
                  Les marques et logos reproduits sur ce site sont déposés par les sociétés qui en sont propriétaires.
                </p>
              </div>
            </motion.div>

            {/* Responsabilité */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Limitation de responsabilité</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Les informations contenues sur ce site sont aussi précises que possible et le site est 
                  périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions 
                  ou des lacunes.
                </p>
                <p>
                  Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de 
                  bien vouloir le signaler par e-mail à l'adresse contact@avenement.fr, en décrivant le 
                  problème de la façon la plus précise possible.
                </p>
                <p>
                  Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa seule 
                  responsabilité. En conséquence, WADY PRODUCTIONS ne saurait être tenu responsable d'un 
                  quelconque dommage subi par l'ordinateur de l'utilisateur ou d'une quelconque perte de 
                  données consécutives au téléchargement.
                </p>
              </div>
            </motion.div>

            {/* Données personnelles */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Protection des données personnelles</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi 
                  "Informatique et Libertés", vous disposez d'un droit d'accès, de rectification, d'effacement, 
                  de limitation, de portabilité et d'opposition concernant vos données personnelles.
                </p>
                <p>
                  Pour plus d'informations sur la collecte et le traitement de vos données personnelles, 
                  consultez notre 
                  <a href="/privacy" className="text-gold-400 hover:underline ml-1">
                    Politique de confidentialité
                  </a>.
                </p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-gold-400/10 backdrop-blur-md rounded-2xl p-8 border border-gold-400/20"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Contact</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Pour toute question relative aux présentes mentions légales ou au fonctionnement du site, 
                  vous pouvez nous contacter :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gold-400" />
                    <a href="mailto:contact@avenement.fr" className="text-gold-400 hover:underline">
                      contact@avenement.fr
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gold-400" />
                    <a href="tel:+33171681538" className="text-gold-400 hover:underline">
                      +33 1 71 68 15 38
                    </a>
                  </div>
                  <div className="flex items-start space-x-3 md:col-span-2">
                    <MapPin className="w-5 h-5 text-gold-400 mt-0.5" />
                    <span>WADY PRODUCTIONS<br />7 RUE AMBROISE THOMAS<br />75009 PARIS</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalNotice;