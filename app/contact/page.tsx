import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { contactInfo, faqs } from '../lib/data';
import { FadeIn, FadeInView, StaggerContainer, StaggerItem, HoverCard } from '../components/MotionWrapper';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez l\'Agence Ultreiaevent pour discuter de votre projet de communication catholique. Devis gratuit.',
};

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Mail, Phone, MapPin, Clock,
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-glow mb-4 sm:mb-6">
              Contactez <span className="text-gold-400">Nous</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-4xl mx-auto px-4">
              Prêt à donner vie à votre projet ? Parlons-en ensemble et créons quelque chose d'extraordinaire pour votre communauté.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contactInfo.map((info) => {
              const Icon = iconMap[info.icon];
              return (
                <StaggerItem key={info.title}>
                  <HoverCard>
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-center group h-full">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        {Icon && <Icon size={28} className="text-white" />}
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-sm text-white/70 hover:text-gold-400 transition-colors break-words"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-sm text-white/70 break-words">{info.content}</p>
                      )}
                    </div>
                  </HoverCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 lg:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                  Demandez Votre <span className="text-gold-400">Devis Gratuit</span>
                </h2>
                <p className="text-base sm:text-lg text-white/70">
                  Remplissez ce formulaire et nous vous recontacterons dans les 24h
                </p>
              </div>
              <ContactForm />
            </div>
          </FadeInView>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-4xl mx-auto">
          <FadeInView className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Questions <span className="text-gold-400">Fréquentes</span>
            </h2>
          </FadeInView>

          <StaggerContainer className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
