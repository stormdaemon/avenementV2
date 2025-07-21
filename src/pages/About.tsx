import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Cross, Lightbulb, Shield } from 'lucide-react';
import SEO from '../components/SEO';
import { useAboutSEOData } from '../hooks/useSEOData';

const About: React.FC = () => {
  const seoData = useAboutSEOData();
  
  const values = [
    {
      icon: Cross,
      title: 'Foi et Authenticité',
      description: 'Nous comprenons et respectons les valeurs catholiques dans chaque projet que nous réalisons.',
    },
    {
      icon: Heart,
      title: 'Passion et Engagement',
      description: 'Notre équipe met tout son cœur au service de votre mission spirituelle et communautaire.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation et Créativité',
      description: 'Nous combinons tradition et modernité pour créer des solutions de communication uniques.',
    },
    {
      icon: Shield,
      title: 'Confiance et Fiabilité',
      description: 'Votre confiance est précieuse. Nous nous engageons à la mériter chaque jour.',
    },
  ];

  const team = [
    {
      name: 'Samuel Armnius',
      role: 'CEO',
      image: '/team/sam.jpg',
      bio: 'Fondateur de l\'agence Avènement.',
    },
    {
      name: 'Théo Lafont',
      role: 'Développeur Full Stack',
      image: '/team/theo.jpg',
      bio: 'Développeur Full Stack avec 10 ans d\'expertise.',
    }
  ];

  const stats = [
    { number: '500+', label: 'Clients Accompagnés' },
    { number: '1000+', label: 'Projets Réalisés' },
    { number: '5', label: 'Années d\'Expérience' },
    { number: '24/7', label: 'Support Disponible' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <>
      <SEO seoData={seoData} />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white text-glow">
              À Propos d'<span className="text-gold-400">Avènement</span>
            </h1>
            <div className="flex justify-center px-4">
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl text-center leading-relaxed">
                Une agence de communication catholique dédiée à amplifier votre message spirituel
                grâce à des solutions modernes et authentiques.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Notre <span className="text-gold-400">Mission</span>
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Chez Avènement, nous croyons que chaque message spirituel mérite d'être entendu
                  et partagé avec excellence. Notre mission est d'accompagner les organisations
                  catholiques dans leur communication en alliant tradition et innovation.
                </p>
                <p className="text-lg">
                  Nous mettons notre expertise technique et notre compréhension profonde des
                  valeurs catholiques au service de votre rayonnement spirituel et communautaire.
                </p>
                <p className="text-lg">
                  Que ce soit pour diffuser une messe en direct, organiser un événement religieux
                  ou créer votre présence digitale, nous vous accompagnons avec passion et professionnalisme.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="glass-card p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nos <span className="text-gold-400">Valeurs</span>
            </h2>

            <div className="flex justify-center px-4">
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl text-center leading-relaxed">
                Les principes qui guident notre travail et notre engagement envers vous
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="glass-card p-8 group"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gold-400 transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Notre <span className="text-gold-400">Équipe</span>
            </h2>


            <div className="flex justify-center px-4">
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl text-center leading-relaxed">
                Des professionnels passionnés au service de votre mission
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass-card p-6 text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full mx-auto overflow-hidden group-hover:scale-105 transition-transform duration-300 border-4 border-gold-400">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center"><svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>';
                      }}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-gold-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Notre <span className="text-gold-400">Histoire</span>
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Avènement est née en 2025 de la rencontre de deux passionnés réunis autour d’un projet commun : <strong>Heaven Radio</strong>, une webradio catholique lancée en 2024. Portés par leur foi et leur volonté de proposer une communication authentique et enracinée dans l’Évangile, ils ont décidé de mettre leur savoir-faire au service du plus grand nombre en créant l’agence.
                </p>
                <p className="text-lg">
                  Depuis, nous accompagnons paroisses, communautés et organisations catholiques dans leur transformation digitale et leur rayonnement communicationnel, en alliant exigence technique, créativité et fidélité aux valeurs spirituelles.
                </p>
                <p className="text-lg">
                  Aujourd’hui, nous poursuivons cette mission avec fierté, dans l’ambition de devenir une référence incontournable de la communication catholique en France.
                </p>

              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {[
                { year: '2024', event: 'Création de notre WebRadio Heaven Radio, la radio 100% Louange et Adoration.' },
                { year: '2025', event: 'Création de l\'agence de communication catholique Avènement.' },
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{milestone.year}</span>
                  </div>
                  <div className="flex-1 pt-3">
                    <p className="text-gray-300 leading-relaxed">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-gold-900/20 to-mocha-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Rejoignez Notre <span className="text-gold-400">Communauté</span>
            </h2>
            <p className="text-xl text-gray-300">
              Découvrez comment nous pouvons vous aider à amplifier votre message
              et toucher votre communauté avec authenticité
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Parlons de Votre Projet
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Découvrir Nos Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default About;