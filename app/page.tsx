import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Users, Award, Star, Zap } from 'lucide-react';
import { services, partners, stats } from './lib/data';
import { FadeIn, FadeInView, StaggerContainer, StaggerItem, HoverCard } from './components/MotionWrapper';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        <FadeIn className="text-center max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-glow leading-tight mb-4">
            ultreiaevent
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gold-400 mt-4">
              Communication Catholique
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mt-6 sm:mt-8 leading-relaxed px-4">
            Nous donnons vie à vos projets spirituels grâce à des solutions de communication innovantes et adaptées aux valeurs catholiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 sm:mt-10">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-gold-400 to-gold-600 text-white hover:from-gold-500 hover:to-gold-700 hover:shadow-lg hover:shadow-gold-400/25 hover:-translate-y-0.5 transition-all"
            >
              Démarrer Votre Projet
            </Link>
          </div>
        </FadeIn>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gold-400 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-gold-400 rounded-full animate-scroll-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const icons = [Users, Award, Star, Zap];
              const Icon = icons[index];
              return (
                <StaggerItem key={stat.label}>
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 sm:p-6 text-center">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gold-400 mx-auto mb-3 sm:mb-4" />
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-white/70">{stat.label}</div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeInView className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Nos <span className="text-gold-400">Services</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-4xl mx-auto px-4">
              Des solutions complètes pour amplifier votre message et toucher votre communauté
            </p>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.slice(0, 6).map((service) => (
              <StaggerItem key={service.id}>
                <HoverCard>
                  <div className="h-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 sm:p-8 hover:bg-white/15 transition-all group">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                      <span className="text-xl sm:text-2xl">🎯</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 group-hover:text-gold-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4 sm:mb-6">
                      {service.description}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-gold-400 hover:gap-3 transition-all"
                    >
                      En savoir plus <ArrowRight size={16} />
                    </Link>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInView className="text-center mt-10 sm:mt-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-gold-400 to-gold-600 text-white hover:from-gold-500 hover:to-gold-700 hover:shadow-lg hover:shadow-gold-400/25 hover:-translate-y-0.5 transition-all"
            >
              Voir Tous Nos Services
            </Link>
          </FadeInView>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <FadeInView className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Nos <span className="text-gold-400">Partenaires</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-4xl mx-auto px-4">
              Nous collaborons avec des institutions et organisations de référence du monde catholique
            </p>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {partners.slice(0, 6).map((partner) => (
              <StaggerItem key={partner.title}>
                <HoverCard>
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-center group">
                    <Image
                      src={partner.image}
                      alt={partner.title}
                      width={300}
                      height={128}
                      className="w-full h-24 sm:h-32 object-contain rounded-lg bg-white/10 p-4 mb-4 sm:mb-6"
                    />
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 group-hover:text-gold-400 transition-colors">
                      {partner.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gold-900/20 to-mocha-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInView>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Prêt à <span className="text-gold-400">Transformer</span> Votre Communication ?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 mb-8 px-4">
              Contactez-nous dès aujourd'hui pour un devis personnalisé et gratuit
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-gold-400 to-gold-600 text-white hover:from-gold-500 hover:to-gold-700 hover:shadow-lg hover:shadow-gold-400/25 hover:-translate-y-0.5 transition-all"
              >
                Obtenir un Devis Gratuit
              </Link>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black hover:-translate-y-0.5 transition-all"
              >
                Voir Nos Réalisations
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
