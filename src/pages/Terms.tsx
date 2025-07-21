import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, Shield, AlertTriangle, Scale, Globe } from 'lucide-react';
import SEO from '../components/SEO';
import { usePageSEOData } from '../hooks/useSEOData';

const Terms: React.FC = () => {
  const seoData = usePageSEOData(
    'Conditions d\'utilisation',
    'Consultez les conditions générales d\'utilisation du site Avènement. Modalités d\'accès et d\'utilisation de nos services.',
    '/terms'
  );

  const sections = [
    {
      icon: FileText,
      title: "Objet",
      content: [
        "Les présentes conditions générales d'utilisation (CGU) ont pour objet de définir les modalités et conditions d'utilisation du site web www.avenement.fr (ci-après \"le Site\") édité par WADY PRODUCTIONS.",
        "L'utilisation du Site implique l'acceptation pleine et entière des présentes CGU. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le Site."
      ]
    },
    {
      icon: Users,
      title: "Définitions",
      content: [
        "Éditeur : WADY PRODUCTIONS, SAS au capital de [montant], immatriculée au RCS de Paris sous le numéro 920 498 722, dont le siège social est situé au 7 RUE AMBROISE THOMAS 75009 PARIS.",
        "Utilisateur : toute personne physique ou morale qui accède au Site et utilise les services proposés.",
        "Services : l'ensemble des fonctionnalités et contenus proposés sur le Site.",
        "Contenu : tous les éléments composant le Site (textes, images, vidéos, sons, etc.)."
      ]
    },
    {
      icon: Globe,
      title: "Accès au site",
      content: [
        "Le Site est accessible gratuitement à tout Utilisateur disposant d'un accès à Internet. Tous les frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.",
        "L'Éditeur se réserve le droit de modifier, suspendre ou interrompre l'accès au Site à tout moment, sans préavis, pour des raisons de maintenance, de mise à jour ou pour toute autre raison jugée nécessaire.",
        "L'accès au Site peut être temporairement suspendu en cas de force majeure, de difficultés informatiques ou de télécommunications."
      ]
    },
    {
      icon: Shield,
      title: "Utilisation du site",
      content: [
        "L'Utilisateur s'engage à utiliser le Site conformément aux présentes CGU et à la législation en vigueur.",
        "Il est strictement interdit d'utiliser le Site pour :",
        "• Diffuser des contenus illégaux, diffamatoires, injurieux, racistes ou contraires à l'ordre public",
        "• Porter atteinte aux droits de propriété intellectuelle de l'Éditeur ou de tiers",
        "• Tenter de nuire au fonctionnement du Site ou d'accéder de manière non autorisée aux systèmes informatiques",
        "• Utiliser le Site à des fins commerciales sans autorisation préalable de l'Éditeur"
      ]
    },
    {
      icon: Scale,
      title: "Propriété intellectuelle",
      content: [
        "L'ensemble du contenu du Site (textes, images, vidéos, logos, graphismes, etc.) est protégé par les droits de propriété intellectuelle et appartient à l'Éditeur ou à ses partenaires.",
        "Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du Site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de l'Éditeur.",
        "Toute exploitation non autorisée du Site ou de son contenu engage la responsabilité de l'Utilisateur et peut donner lieu à des poursuites judiciaires."
      ]
    },
    {
      icon: AlertTriangle,
      title: "Responsabilité",
      content: [
        "L'Éditeur s'efforce de fournir sur le Site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.",
        "L'Éditeur ne pourra être tenu responsable des dommages directs ou indirects causés au matériel de l'Utilisateur lors de l'accès au Site.",
        "L'Utilisateur est seul responsable de l'utilisation qu'il fait du Site et des informations qu'il y consulte.",
        "L'Éditeur décline toute responsabilité concernant les liens hypertextes pointant vers d'autres sites web."
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
              Conditions d'utilisation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Les présentes conditions générales d'utilisation régissent l'accès et l'utilisation 
              du site web Avènement.
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

          {/* Sections supplémentaires */}
          <div className="space-y-12 mt-12">
            {/* Données personnelles */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Données personnelles</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Le traitement des données personnelles collectées sur le Site est régi par notre 
                  Politique de confidentialité, accessible à l'adresse suivante : 
                  <a href="/privacy" className="text-gold-400 hover:underline ml-1">
                    Politique de confidentialité
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Droit applicable */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Droit applicable et juridiction</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Les présentes CGU sont soumises au droit français. En cas de litige, et après échec 
                  de toute tentative de résolution amiable, les tribunaux français seront seuls compétents 
                  pour connaître du litige.
                </p>
                <p>
                  Si une ou plusieurs stipulations des présentes CGU sont tenues pour non valides ou 
                  déclarées comme telles en application d'une loi, d'un règlement ou à la suite d'une 
                  décision définitive d'une juridiction compétente, les autres stipulations garderont 
                  toute leur force et leur portée.
                </p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gold-400/10 backdrop-blur-md rounded-2xl p-8 border border-gold-400/20"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Contact</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Pour toute question relative aux présentes conditions d'utilisation, vous pouvez 
                  nous contacter :
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Par e-mail : contact@avenement.fr</li>
                  <li>• Par courrier : WADY PRODUCTIONS, 7 RUE AMBROISE THOMAS 75009 PARIS</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;