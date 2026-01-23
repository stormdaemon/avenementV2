import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, Users, Clock, Award, Star } from 'lucide-react';
import { services } from '../../lib/data';
import { FadeIn, FadeInView, StaggerContainer, StaggerItem, HoverCard } from '../../components/MotionWrapper';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: 'Service non trouvé' };

  return {
    title: service.title,
    description: service.description,
  };
}

const benefits = [
  { icon: Users, title: 'Expertise Spécialisée', description: 'Notre équipe maîtrise parfaitement les enjeux de la communication catholique.' },
  { icon: Clock, title: 'Réactivité Garantie', description: 'Nous nous adaptons à vos urgences et respectons vos délais liturgiques.' },
  { icon: Award, title: 'Qualité Premium', description: 'Des standards de qualité élevés pour valoriser votre message spirituel.' },
  { icon: Star, title: 'Accompagnement Complet', description: 'De la conception à la diffusion, nous vous accompagnons à chaque étape.' },
];

const testimonials = [
  { name: 'Père Michel Dubois', role: 'Paroisse Saint-Joseph', content: 'Grâce à ultreiaevent, nos messes sont maintenant suivies par des centaines de fidèles en ligne. Un service exceptionnel !', rating: 5 },
  { name: 'Sœur Marie-Claire', role: 'Communauté des Béatitudes', content: 'L\'équipe d\'ultreiaevent a su comprendre nos valeurs et les traduire dans une communication moderne et authentique.', rating: 5 },
];

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <section className="pt-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="flex items-center gap-2 text-sm text-white/70 flex-wrap">
            <Link href="/" className="hover:text-gold-400 transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-gold-400 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gold-400">{service.title}</span>
          </FadeIn>
        </div>
      </section>

      {/* Hero */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-glow mb-4 sm:mb-6">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-4xl mx-auto px-4">
              {service.description}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <FadeInView className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Fonctionnalités <span className="text-gold-400">Incluses</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-4xl mx-auto px-4">
              Découvrez tout ce que notre service {service.title.toLowerCase()} peut vous apporter
            </p>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {service.features.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                  <div className="shrink-0 w-8 h-8 bg-gold-400 rounded-full flex items-center justify-center">
                    <Check size={18} className="text-white" />
                  </div>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed pt-1">
                    {feature}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeInView className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Pourquoi Nous <span className="text-gold-400">Choisir</span> ?
            </h2>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <StaggerItem key={benefit.title}>
                  <HoverCard>
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 sm:p-8 flex gap-4 sm:gap-6 group">
                      <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon size={28} className="text-white sm:w-8 sm:h-8" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-gold-400 transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                          {benefit.description}
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

      {/* Testimonials */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <FadeInView className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Témoignages <span className="text-gold-400">Clients</span>
            </h2>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 sm:p-8">
                  <div className="flex gap-1 mb-4">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} size={20} className="text-gold-400 fill-gold-400" />
                    ))}
                  </div>
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
                Intéressé par ce <span className="text-gold-400">Service</span> ?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-white/70 mb-8 px-4">
                Contactez-nous pour discuter de votre projet {service.title.toLowerCase()} et recevoir un devis personnalisé gratuit
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-gold-400 to-gold-600 text-white hover:from-gold-500 hover:to-gold-700 hover:shadow-lg hover:shadow-gold-400/25 hover:-translate-y-0.5 transition-all"
                >
                  Demander un Devis
                </Link>
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black hover:-translate-y-0.5 transition-all"
                >
                  Voir Tous Nos Services
                </Link>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
