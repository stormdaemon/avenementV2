import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Award, Zap } from 'lucide-react';
import { services } from '../services/data';
import SEO from '../components/SEO';
import { useHomeSEOData } from '../hooks/useSEOData';

const Home: React.FC = () => {
  const seoData = useHomeSEOData();
  
  const stats = [
    { icon: Users, value: '500+', label: 'Clients Satisfaits' },
    { icon: Award, value: '1000+', label: 'Projets Réalisés' },
    { icon: Star, value: '4.9/5', label: 'Note Moyenne' },
    { icon: Zap, value: '24h/7j', label: 'Support Disponible' },
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
      <div className="min-h-screen">
      {/* Section Héro */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white text-glow leading-tight"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              ultreiaevent
              <span className="block text-gold-400 text-4xl md:text-5xl lg:text-6xl mt-4">
                Communication Catholique
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Nous donnons vie à vos projets spirituels grâce à des solutions de communication
              innovantes et adaptées aux valeurs catholiques.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Link to="/contact" className="btn-primary group">
                Démarrer Votre Projet
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-gold-400 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-gold-400 rounded-full mt-2"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Section Statistiques */}
      <section className="section-padding bg-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center glass-card p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-gold-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Section Services */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nos <span className="text-gold-400">Services</span>
            </h2>


            <div className="flex justify-center px-4">
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl text-center leading-relaxed">
                Des solutions complètes pour amplifier votre message et toucher votre communauté
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.slice(0, 6).map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card p-8 group cursor-pointer"
              >
                <div className="text-gold-400 mb-6">
                  <div className="w-16 h-16 bg-gold-400/20 rounded-full flex items-center justify-center group-hover:bg-gold-400/30 transition-colors">
                    <div className="text-2xl">🎯</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gold-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center text-gold-400 hover:text-gold-300 transition-colors group"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services" className="btn-primary">
              Voir Tous Nos Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section Partenaires */}
      <section className="section-padding bg-black/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nos <span className="text-gold-400">Partenaires</span>
            </h2>

            <div className="flex justify-center px-4">
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl text-center leading-relaxed">
                Nous collaborons avec des institutions et organisations de référence du monde catholique
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Le Baptême Catholique",
                description: "Préparation et accompagnement spirituel pour le sacrement du baptême",
                image: "https://heavenradio.fr/assets/png/baptemecatho-DdTvNFk4.png"
              },
              {
                title: "La Mission Catholique",
                description: "Dépliants missionnaires et outils pour l'évangélisation en paroisse",
                image: "https://heavenradio.fr/assets/png/missioncatho-CYPb_6qv.png"
              },
              {
                title: "Conférence des Évêques de France",
                description: "Institution officielle de l'Église catholique en France",
                image: "https://diocese44.fr/wp-content/uploads/2020/04/Logo-CEF-1280x640.jpeg"
              },
              {
                title: "Site du Vatican",
                description: "Site officiel du Saint-Siège et du Vatican",
                image: "https://content.r9cdn.net/rimg/dimg/5e/b6/6c7d0b5d-hood-216983-166a2810358.jpg?crop=true&width=1020&height=498"
              },
              {
                title: "Congrès Mission (Partenaire Officiel)",
                description: "Événement majeur de l'évangélisation et de la mission",
                image: "https://congresmission.com/wp-content/uploads/sites/14/2025/01/CM-LOGO-ORANGE-min-743x1024.png"
              },
              {
                title: "Heaven Radio",
                description: "La radio catholique 100% louange et adoration. Programmes spirituels quotidiens, prières, chapelet et musique chrétienne pour nourrir votre foi au quotidien",
                image: "https://lebaptemecatholique.fr/assets/heavenradio.png"
              }
            ].map((partner) => (
              <motion.div
                key={partner.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-6 group cursor-pointer text-center"
              >
                <div className="mb-6">
                  <img
                    src={partner.image}
                    alt={partner.title}
                    className="w-full h-32 object-contain mx-auto rounded-lg bg-white/10 p-4"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-gold-400 transition-colors">
                  {partner.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="section-padding bg-gradient-to-r from-gold-900/20 to-mocha-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Prêt à <span className="text-gold-400">Transformer</span> Votre Communication ?
            </h2>
            <p className="text-xl text-gray-300">
              Contactez-nous dès aujourd'hui pour un devis personnalisé et gratuit
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Obtenir un Devis Gratuit
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                Voir Nos Réalisations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;