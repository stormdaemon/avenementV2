'use client';

import { FileText, Euro, RotateCcw, Scale, AlertTriangle, Clock, Shield } from 'lucide-react';
import { FadeIn, FadeInView } from '../components/MotionWrapper';

const sections = [
  {
    icon: FileText,
    title: 'Article 1 - Objet et champ d\'application',
    content: [
      'Les présentes Conditions Générales de Vente (CGV) s\'appliquent à toutes les ventes de services concluses par WADY PRODUCTIONS, SAS au capital de 1 euro, immatriculée au RCS de Paris sous le numéro 920 498 722.',
      'Le fait de passer commande implique l\'adhésion entière et sans réserve aux présentes CGV.',
    ],
  },
  {
    icon: Euro,
    title: 'Article 2 - Prix et modalités de paiement',
    content: [
      'Les prix sont exprimés en euros, toutes taxes comprises (TTC).',
      'Acompte de 30% à la commande, solde à la livraison.',
      'Moyens de paiement acceptés : virement bancaire, chèque, carte bancaire.',
    ],
  },
  {
    icon: Clock,
    title: 'Article 3 - Délais de livraison',
    content: [
      'Les délais de livraison sont donnés à titre indicatif et ne constituent pas un engagement ferme.',
      'Les cas de force majeure suspendent l\'exécution des obligations.',
    ],
  },
  {
    icon: RotateCcw,
    title: 'Article 4 - Droit de rétractation',
    content: [
      'Conformément à l\'article L. 221-18 du Code de la consommation, le consommateur dispose d\'un délai de quatorze jours pour exercer son droit de rétractation.',
      'La rétractation doit être notifiée par lettre recommandée avec accusé de réception.',
    ],
  },
  {
    icon: Shield,
    title: 'Article 5 - Garanties et responsabilité',
    content: [
      'Le Vendeur est tenu de la garantie légale de conformité et de la garantie des vices cachés.',
      'La responsabilité du Vendeur est limitée au montant de la commande.',
    ],
  },
  {
    icon: Scale,
    title: 'Article 6 - Propriété intellectuelle',
    content: [
      'Tous les éléments de propriété intellectuelle demeurent la propriété exclusive du Vendeur.',
      'Toute exploitation non autorisée constitue une contrefaçon.',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Article 7 - Protection des données',
    content: [
      'Conformément au RGPD, l\'Acheteur dispose d\'un droit d\'accès, de rectification et d\'effacement sur ses données personnelles.',
      'Ces droits peuvent être exercés à l\'adresse : contact@ultreiaevent.com',
    ],
  },
];

const LAST_UPDATE = '23/01/2025';

export default function CGVPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-glow mb-4 sm:mb-6">
            Conditions Générales de Vente
          </h1>
          <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto mb-6">
            Les présentes conditions générales de vente régissent les relations contractuelles entre WADY PRODUCTIONS et ses clients.
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
          <FadeInView delay={0.8}>
            <div className="bg-gold-400/10 backdrop-blur-xl border border-gold-400/20 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Contact
              </h2>
              <p className="text-sm sm:text-base text-white font-semibold">
                Pour toute question relative aux présentes CGV : contact@ultreiaevent.com
              </p>
            </div>
          </FadeInView>
        </div>
      </div>
    </div>
  );
}
