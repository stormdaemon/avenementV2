import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Shield, Lightbulb } from 'lucide-react';
import { values, team, stats } from '../lib/data';
import { FadeIn, FadeInView, StaggerContainer, StaggerItem, HoverCard } from '../components/MotionWrapper';

export const metadata: Metadata = {
  title: 'À Propos',
  description: 'Découvrez l\'équipe et la mission d\'Ultreiaevent, agence spécialisée dans la communication catholique.',
};

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Cross: ({ size, className }) => <span className={className} style={{ fontSize: size }}>✝</span>,
  Heart,
  Lightbulb,
  Shield,
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-glow mb-4 sm:mb-6">
              À Propos d'<span className="text-gold-400">ultreiaevent</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-4xl mx-auto px-4">
              Une agence de communication catholique dédiée à amplifier votre message spirituel grâce à des solutions modernes et authentiques.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <FadeInView>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
                Notre <span className="text-gold-400">Mission</span>
              </h2>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-white/70 leading-relaxed">
                <p>
                  Chez ultreiaevent, nous croyons que chaque message spirituel mérite d'être entendu et partagé avec excellence. Notre mission est d'accompagner les organisations catholiques dans leur communication en alliant tradition et innovation.
                </p>
                <p>
                  Nous mettons notre expertise technique et notre compréhension profonde des valeurs catholiques au service de votre rayonnement spirituel et communautaire.
                </p>
                <p>
                  Que ce soit pour diffuser une messe en direct, organiser un événement religieux ou créer votre présence digitale, nous vous accompagnons avec passion et professionnalisme.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {stats.slice(0, 4).map((stat) => (
                    <div key={stat.label} className="text-center p-4">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-400 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-white/70">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeInView className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Nos <span className="text-gold-400">Valeurs</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-4xl mx-auto px-4">
              Les principes qui guident notre travail et notre engagement envers vous
            </p>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value) => {
              const Icon = iconMap[value.icon];
              return (
                <StaggerItem key={value.title}>
                  <HoverCard>
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 sm:p-8 flex gap-4 sm:gap-6 group">
                      <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        {Icon && <Icon size={28} className="text-white" />}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-4 group-hover:text-gold-400 transition-colors">
                          {value.title}
                        </h3>
                        <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </HoverCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <FadeInView className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Notre <span className="text-gold-400">Équipe</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-4xl mx-auto px-4">
              Des professionnels passionnés au service de votre mission
            </p>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <HoverCard>
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 sm:p-8 text-center group">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden mx-auto mb-4 sm:mb-6 border-4 border-gold-400 group-hover:scale-105 transition-transform">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2 group-hover:text-gold-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-gold-400 mb-3 sm:mb-4">
                      {member.role}
                    </p>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* History */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <FadeInView>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
                Notre <span className="text-gold-400">Histoire</span>
              </h2>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-white/70 leading-relaxed">
                <p>
                  ultreiaevent est née en 2025 de la rencontre de deux passionnés réunis autour d'un projet commun : <strong className="text-white">Heaven Radio</strong>, une webradio catholique lancée en 2024.
                </p>
                <p>
                  Depuis, nous accompagnons paroisses, communautés et organisations catholiques dans leur transformation digitale et leur rayonnement communicationnel.
                </p>
                <p>
                  Aujourd'hui, nous poursuivons cette mission avec fierté, dans l'ambition de devenir une référence incontournable de la communication catholique en France.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="space-y-6 sm:space-y-8">
                {[
                  { year: '2024', event: 'Création de notre WebRadio Heaven Radio, la radio 100% Louange et Adoration.' },
                  { year: '2025', event: 'Création de l\'agence de communication catholique ultreiaevent.' },
                ].map((milestone) => (
                  <div key={milestone.year} className="flex gap-4 sm:gap-6 items-start">
                    <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-sm sm:text-base font-bold text-white">
                      {milestone.year}
                    </div>
                    <div className="flex-1 pt-3 sm:pt-4 text-sm sm:text-base text-white/70 leading-relaxed">
                      {milestone.event}
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gold-900/20 to-mocha-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInView>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Rejoignez Notre <span className="text-gold-400">Communauté</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 mb-8 px-4">
              Découvrez comment nous pouvons vous aider à amplifier votre message et toucher votre communauté avec authenticité
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-gold-400 to-gold-600 text-white hover:from-gold-500 hover:to-gold-700 hover:shadow-lg hover:shadow-gold-400/25 hover:-translate-y-0.5 transition-all"
              >
                Parlons de Votre Projet
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black hover:-translate-y-0.5 transition-all"
              >
                Découvrir Nos Services
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
