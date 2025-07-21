import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Euro, RotateCcw, Scale, AlertTriangle, Clock, Shield } from 'lucide-react';
import SEO from '../components/SEO';
import { usePageSEOData } from '../hooks/useSEOData';

const CGV: React.FC = () => {
  const seoData = usePageSEOData(
    'Conditions Générales de Vente',
    'Consultez les conditions générales de vente d\'ultreiaevent. Modalités de commande, paiement, livraison et garanties légales.',
    '/cgv'
  );

  const sections = [
    {
      icon: FileText,
      title: "Article 1 - Objet et champ d'application",
      content: [
        "Les présentes Conditions Générales de Vente (CGV) s'appliquent, sans restriction ni réserve, à toutes les ventes de services concluses par WADY PRODUCTIONS, société par actions simplifiée au capital de [montant] euros, immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 920 498 722, dont le siège social est situé au 7 RUE AMBROISE THOMAS 75009 PARIS, N° TVA intracommunautaire : FR74 920 498 722.",
        "Conformément aux articles L. 441-1 et suivants du Code de commerce, les présentes CGV prévalent sur toutes autres conditions générales ou particulières non expressément agréées par le Vendeur.",
        "Le fait de passer commande implique l'adhésion entière et sans réserve de l'Acheteur aux présentes CGV, conformément à l'article 1128 du Code civil."
      ]
    },
    {
      icon: Euro,
      title: "Article 2 - Prix et modalités de paiement",
      content: [
        "Les prix sont exprimés en euros, toutes taxes comprises (TTC), conformément à l'article L. 113-3 du Code de la consommation.",
        "Les prix peuvent être révisés à tout moment par le Vendeur. Toutefois, ils seront facturés sur la base du tarif en vigueur au moment de l'enregistrement de la commande, sous réserve de disponibilité à cette date.",
        "Le paiement s'effectue selon les modalités suivantes :",
        "• Acompte de 30% à la commande",
        "• Solde à la livraison ou à la fin de la prestation",
        "• Moyens de paiement acceptés : virement bancaire, chèque, carte bancaire",
        "Conformément à l'article L. 441-6 du Code de commerce, tout retard de paiement entraînera de plein droit l'exigibilité d'une indemnité forfaitaire de recouvrement de 40 euros, sans préjudice des intérêts de retard au taux de trois fois le taux d'intérêt légal (article L. 441-10 du Code de commerce)."
      ]
    },
    {
      icon: Clock,
      title: "Article 3 - Délais de livraison et d'exécution",
      content: [
        "Les délais de livraison ou d'exécution des prestations sont donnés à titre indicatif et ne constituent pas un engagement ferme, sauf stipulation contraire expressément convenue.",
        "Conformément à l'article 1231-1 du Code civil, le dépassement des délais ne peut donner lieu à dommages et intérêts qu'en cas de mise en demeure restée infructueuse.",
        "En cas de retard de livraison supérieur à 30 jours après mise en demeure, l'Acheteur pourra demander la résolution de la vente dans les conditions prévues aux articles 1224 et suivants du Code civil.",
        "Les cas de force majeure, au sens de l'article 1218 du Code civil, suspendent l'exécution des obligations et exonèrent les parties de toute responsabilité."
      ]
    },
    {
      icon: RotateCcw,
      title: "Article 4 - Droit de rétractation",
      content: [
        "Conformément à l'article L. 221-18 du Code de la consommation, le consommateur dispose d'un délai de quatorze jours francs pour exercer son droit de rétractation sans avoir à justifier de motifs ni à payer de pénalités.",
        "Ce délai court à compter de la conclusion du contrat pour les prestations de services.",
        "Toutefois, conformément à l'article L. 221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour :",
        "• Les services pleinement exécutés avant la fin du délai de rétractation et dont l'exécution a commencé après accord préalable exprès du consommateur",
        "• Les biens ou services dont le prix dépend de fluctuations sur le marché financier",
        "• Les biens confectionnés selon les spécifications du consommateur ou nettement personnalisés",
        "La rétractation doit être notifiée par lettre recommandée avec accusé de réception à l'adresse du siège social."
      ]
    },
    {
      icon: Shield,
      title: "Article 5 - Garanties et responsabilité",
      content: [
        "Conformément aux articles L. 217-4 et suivants du Code de la consommation, le Vendeur est tenu de la garantie légale de conformité et de la garantie des vices cachés.",
        "La garantie légale de conformité s'applique pendant deux ans à compter de la délivrance du bien (article L. 217-7 du Code de la consommation).",
        "La garantie des vices cachés permet à l'Acheteur de choisir entre la résolution de la vente ou une réduction du prix de vente (articles 1641 à 1649 du Code civil).",
        "La responsabilité du Vendeur est limitée au montant de la commande, sauf en cas de faute lourde ou intentionnelle, conformément à l'article 1231-3 du Code civil.",
        "Le Vendeur ne saurait être tenu responsable des dommages indirects tels que perte d'exploitation, perte de clientèle, trouble commercial quelconque."
      ]
    },
    {
      icon: Scale,
      title: "Article 6 - Propriété intellectuelle",
      content: [
        "Tous les éléments de propriété intellectuelle demeurent la propriété exclusive du Vendeur ou de ses ayants droit, conformément aux dispositions du Code de la propriété intellectuelle.",
        "L'Acheteur s'interdit toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, sans l'autorisation écrite préalable du Vendeur (articles L. 122-4 et L. 335-2 du Code de la propriété intellectuelle).",
        "Toute exploitation non autorisée de ces éléments constitue une contrefaçon punie par l'article L. 335-2 du Code de la propriété intellectuelle."
      ]
    },
    {
      icon: AlertTriangle,
      title: "Article 7 - Protection des données personnelles",
      content: [
        "Conformément au Règlement (UE) 2016/679 du 27 avril 2016 (RGPD) et à la loi n° 78-17 du 6 janvier 1978 modifiée relative à l'informatique, aux fichiers et aux libertés, l'Acheteur dispose d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition sur ses données personnelles.",
        "Ces droits peuvent être exercés en adressant une demande accompagnée d'une copie d'un titre d'identité à l'adresse suivante : contact@ultreiaevent.com",
        "Les données personnelles collectées sont nécessaires à l'exécution du contrat et sont conservées pendant la durée nécessaire à cette exécution, augmentée des délais de prescription légaux."
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
              Conditions Générales de Vente
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Les présentes conditions générales de vente régissent les relations contractuelles 
              entre WADY PRODUCTIONS et ses clients, conformément au droit français.
            </p>
            <div className="mt-6 text-sm text-gray-400">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </div>
          </motion.div>

          {/* Sections principales */}
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
                    <h2 className="text-xl font-bold text-white">{section.title}</h2>
                  </div>
                  <div className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <p key={itemIndex} className="text-gray-300 leading-relaxed text-sm">
                        {item}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Articles supplémentaires */}
          <div className="space-y-12 mt-12">
            {/* Article 8 - Résolution des litiges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
            >
              <h2 className="text-xl font-bold text-white mb-6">Article 8 - Résolution des litiges</h2>
              <div className="space-y-4 text-gray-300 text-sm">
                <p>
                  Conformément à l'article L. 616-1 du Code de la consommation, nous adhérons au service de médiation de la consommation suivant : [Nom du médiateur].
                </p>
                <p>
                  En cas de litige, l'Acheteur peut recourir gratuitement au service de médiation proposé par le médiateur de la consommation. Les coordonnées du médiateur sont les suivantes : [coordonnées].
                </p>
                <p>
                  Conformément à l'article 14 du Règlement (UE) n°524/2013, la Commission Européenne a mis en place une plateforme de Règlement en Ligne des Litiges, facilitant le règlement indépendant par voie extrajudiciaire des litiges entre consommateurs et professionnels de l'Union européenne.
                </p>
                <p>
                  Cette plateforme est accessible au lien suivant : 
                  <a href="https://ec.europa.eu/consumers/odr/" className="text-gold-400 hover:underline ml-1">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Article 9 - Droit applicable */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
            >
              <h2 className="text-xl font-bold text-white mb-6">Article 9 - Droit applicable et juridiction compétente</h2>
              <div className="space-y-4 text-gray-300 text-sm">
                <p>
                  Les présentes CGV sont soumises au droit français. Elles sont rédigées en langue française. Dans le cas où elles seraient traduites en une ou plusieurs langues, seul le texte français ferait foi en cas de litige.
                </p>
                <p>
                  Conformément aux articles 42 et 48 du Code de procédure civile, tout litige relatif à l'interprétation et à l'exécution des présentes CGV relève de la compétence des tribunaux du ressort du siège social du Vendeur, sauf règles impératives contraires.
                </p>
                <p>
                  Pour les consommateurs, conformément à l'article R. 631-3 du Code de la consommation, les juridictions compétentes sont celles du lieu où demeure le défendeur ou du lieu de livraison effective du produit.
                </p>
              </div>
            </motion.div>

            {/* Article 10 - Dispositions générales */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="bg-gold-400/10 backdrop-blur-md rounded-2xl p-8 border border-gold-400/20"
            >
              <h2 className="text-xl font-bold text-white mb-6">Article 10 - Dispositions générales</h2>
              <div className="space-y-4 text-gray-300 text-sm">
                <p>
                  Si une ou plusieurs stipulations des présentes CGV sont tenues pour non valides ou déclarées comme telles en application d'une loi, d'un règlement ou à la suite d'une décision définitive d'une juridiction compétente, les autres stipulations garderont toute leur force et leur portée.
                </p>
                <p>
                  Le fait pour l'une des parties de ne pas se prévaloir d'un manquement par l'autre partie à l'une quelconque des obligations visées dans les présentes CGV ne saurait être interprété pour l'avenir comme une renonciation à l'obligation en cause.
                </p>
                <p>
                  Les présentes CGV annulent et remplacent toutes les conditions générales antérieurement applicables.
                </p>
                <p className="font-semibold text-white">
                  Pour toute question relative aux présentes CGV, vous pouvez nous contacter à l'adresse suivante : contact@ultreiaevent.com
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CGV;