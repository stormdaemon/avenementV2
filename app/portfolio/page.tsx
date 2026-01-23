import type { Metadata } from 'next';
import { Users, Award, Calendar, Play } from 'lucide-react';
import { projects } from '../lib/data';
import { FadeIn, FadeInView, StaggerContainer, StaggerItem } from '../components/MotionWrapper';
import PortfolioClient from './PortfolioClient';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Découvrez nos réalisations en communication catholique : diffusion en direct, événements, sites web, films institutionnels.',
};

const portfolioStats = [
  { icon: Users, value: '500+', label: 'Clients Satisfaits' },
  { icon: Award, value: '1000+', label: 'Projets Réalisés' },
  { icon: Calendar, value: '200+', label: 'Événements Organisés' },
  { icon: Play, value: '10M+', label: 'Vues Générées' },
];

const testimonials = [
  { name: 'Mgr Jean Dubois', role: 'Évêque de Lyon', content: 'ultreiaevent a transformé notre communication diocésaine. Leur expertise technique alliée à leur compréhension de nos valeurs est remarquable.' },
  { name: 'Père Michel Martin', role: 'Curé de Saint-Joseph', content: 'Grâce à leur service de diffusion, nos messes touchent maintenant des centaines de fidèles qui ne peuvent se déplacer. Un vrai service pastoral.' },
  { name: 'Sœur Marie-Claire', role: 'Responsable Communication', content: 'L\'équipe d\'ultreiaevent a su créer un site web qui reflète parfaitement l\'esprit de notre communauté. Professionnel et authentique.' },
];

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-glow mb-4 sm:mb-6">
              Notre <span className="text-gold-400">Portfolio</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-4xl mx-auto px-4">
              Découvrez nos réalisations et l'impact que nous avons créé pour nos clients dans le domaine de la communication catholique.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {portfolioStats.map((stat) => {
              const Icon = stat.icon;
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

      {/* Projects - Client Component */}
      <PortfolioClient projects={projects} />

      {/* Testimonials */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <FadeInView className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ce Que Disent Nos <span className="text-gold-400">Clients</span>
            </h2>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 sm:p-8 h-full">
                  <p className="text-sm sm:text-base text-white/70 italic leading-relaxed mb-4 sm:mb-6">
                    "{testimonial.content}"
                  </p>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gold-400">{testimonial.role}</div>
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
                Votre Projet <span className="text-gold-400">Suivant</span> ?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-white/70 mb-8 px-4">
                Inspiré par nos réalisations ? Contactez-nous pour discuter de votre projet et créer ensemble quelque chose d'exceptionnel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-gold-400 to-gold-600 text-white hover:from-gold-500 hover:to-gold-700 hover:shadow-lg hover:shadow-gold-400/25 hover:-translate-y-0.5 transition-all"
                >
                  Démarrer Mon Projet
                </a>
                <a
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black hover:-translate-y-0.5 transition-all"
                >
                  Voir Nos Services
                </a>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
