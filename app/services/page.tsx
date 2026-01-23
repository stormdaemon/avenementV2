import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Radio, Share2, Calendar, Video, Globe } from 'lucide-react';
import { services, processSteps } from '../lib/data';
import { FadeIn, FadeInView, StaggerContainer, StaggerItem, HoverCard } from '../components/MotionWrapper';

export const metadata: Metadata = {
  title: 'Nos Services',
  description: 'Découvrez tous nos services de communication catholique : diffusion en direct, événements, sites web, films institutionnels, réseaux sociaux.',
};

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Radio, Share2, Calendar, Video, Globe,
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-glow mb-4 sm:mb-6">
              Nos <span className="text-gold-400">Services</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-4xl mx-auto px-4">
              Des solutions complètes et innovantes pour amplifier votre message catholique et toucher votre communauté avec impact et authenticité.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <StaggerItem key={service.id}>
                  <HoverCard>
                    <div className="h-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 sm:p-8 hover:bg-white/15 transition-all group">
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Icon */}
                        <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          {Icon && <Icon size={32} className="text-white sm:w-10 sm:h-10" />}
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-gold-400 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4 sm:mb-6">
                            {service.description}
                          </p>

                          {/* Features */}
                          <div className="mb-6">
                            <h4 className="text-sm sm:text-base font-semibold text-gold-400 mb-3">
                              Fonctionnalités clés :
                            </h4>
                            <div className="space-y-2">
                              {service.features.slice(0, 4).map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-white/70">
                                  <div className="w-2 h-2 bg-gold-400 rounded-full shrink-0" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                              {service.features.length > 4 && (
                                <p className="text-gold-400 text-sm">
                                  +{service.features.length - 4} autres fonctionnalités
                                </p>
                              )}
                            </div>
                          </div>

                          <Link
                            href={`/services/${service.slug}`}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-gold-400 to-gold-600 text-white hover:from-gold-500 hover:to-gold-700 hover:shadow-lg hover:shadow-gold-400/25 transition-all"
                          >
                            En savoir plus <ArrowRight size={20} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </HoverCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <FadeInView className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Notre <span className="text-gold-400">Processus</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-4xl mx-auto px-4">
              Une approche structurée pour garantir le succès de vos projets
            </p>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {processSteps.map((process) => (
              <StaggerItem key={process.step}>
                <div className="text-center group">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-white group-hover:scale-110 transition-transform">
                    {process.step}
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-2 sm:mb-4 group-hover:text-gold-400 transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Prêt à <span className="text-gold-400">Commencer</span> ?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-white/70 mb-8 px-4">
                Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé gratuit
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-gold-400 to-gold-600 text-white hover:from-gold-500 hover:to-gold-700 hover:shadow-lg hover:shadow-gold-400/25 hover:-translate-y-0.5 transition-all"
                >
                  Demander un Devis
                </Link>
                <Link
                  href="/portfolio"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black hover:-translate-y-0.5 transition-all"
                >
                  Voir Nos Réalisations
                </Link>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
