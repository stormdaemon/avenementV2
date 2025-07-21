import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Radio, Share2, Calendar, Video, Globe } from 'lucide-react';
import { services } from '../services/data';

const Services: React.FC = () => {
  const iconMap = {
    Radio,
    Share2,
    Calendar,
    Video,
    Globe,
  };

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
        ease: 'easeOut',
      },
    },
  };

  return (
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
              Nos <span className="text-gold-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed text-center">
              Des solutions complètes et innovantes pour amplifier votre message catholique 
              et toucher votre communauté avec impact et authenticité.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="glass-card p-8 group cursor-pointer"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {IconComponent && <IconComponent className="w-10 h-10 text-white" />}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-3 mb-8">
                        <h4 className="text-lg font-semibold text-gold-400">Fonctionnalités clés :</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 4).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-300">
                              <div className="w-2 h-2 bg-gold-400 rounded-full mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                          {service.features.length > 4 && (
                            <li className="text-gold-400 text-sm">
                              +{service.features.length - 4} autres fonctionnalités
                            </li>
                          )}
                        </ul>
                      </div>
                      
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center bg-gradient-to-r from-gold-400 to-gold-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-gold-500 hover:to-gold-700 transition-all duration-300 group"
                      >
                        En savoir plus
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Notre <span className="text-gold-400">Processus</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
              Une approche structurée pour garantir le succès de vos projets
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              {
                step: '01',
                title: 'Analyse',
                description: 'Nous analysons vos besoins et objectifs pour définir la stratégie optimale.',
              },
              {
                step: '02',
                title: 'Conception',
                description: 'Création d\'un plan détaillé et personnalisé selon vos valeurs catholiques.',
              },
              {
                step: '03',
                title: 'Réalisation',
                description: 'Mise en œuvre professionnelle avec un suivi constant de la qualité.',
              },
              {
                step: '04',
                title: 'Optimisation',
                description: 'Analyse des résultats et optimisation continue pour maximiser l\'impact.',
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gold-400 to-transparent" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gold-400 transition-colors">
                  {process.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Prêt à <span className="text-gold-400">Commencer</span> ?
            </h2>
            <p className="text-xl text-gray-300">
              Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé gratuit
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Demander un Devis
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                Voir Nos Réalisations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;