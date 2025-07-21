import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Star, Users, Clock, Award } from 'lucide-react';
import { services } from '../services/data';
import SEO from '../components/SEO';
import { useServiceSEOData } from '../hooks/useSEOData';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  const seoData = service ? useServiceSEOData(service.title, service.description, service.slug) : null;

  if (!service) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service non trouvé</h1>
          <Link to="/services" className="btn-primary">
            Retour aux services
          </Link>
        </div>
      </div>
    );
  }

  const benefits = [
    {
      icon: Users,
      title: 'Expertise Spécialisée',
      description: 'Notre équipe maîtrise parfaitement les enjeux de la communication catholique.',
    },
    {
      icon: Clock,
      title: 'Réactivité Garantie',
      description: 'Nous nous adaptons à vos urgences et respectons vos délais liturgiques.',
    },
    {
      icon: Award,
      title: 'Qualité Premium',
      description: 'Des standards de qualité élevés pour valoriser votre message spirituel.',
    },
    {
      icon: Star,
      title: 'Accompagnement Complet',
      description: 'De la conception à la diffusion, nous vous accompagnons à chaque étape.',
    },
  ];

  const testimonials = [
    {
      name: 'Père Michel Dubois',
      role: 'Paroisse Saint-Joseph',
      content: 'Grâce à Avènement, nos messes sont maintenant suivies par des centaines de fidèles en ligne. Un service exceptionnel !',
      rating: 5,
    },
    {
      name: 'Sœur Marie-Claire',
      role: 'Communauté des Béatitudes',
      content: 'L\'équipe d\'Avènement a su comprendre nos valeurs et les traduire dans une communication moderne et authentique.',
      rating: 5,
    },
  ];

  return (
    <>
      {seoData && <SEO seoData={seoData} />}
      <div className="min-h-screen pt-20">
        {/* Breadcrumb */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2 text-gray-300"
            >
              <Link to="/" className="hover:text-gold-400 transition-colors">Accueil</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-gold-400 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-gold-400">{service.title}</span>
            </motion.div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <Link
                to="/services"
                className="inline-flex items-center text-gold-400 hover:text-gold-300 transition-colors mb-8 group"
              >
                <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Retour aux services
              </Link>

              <h1 className="text-5xl md:text-6xl font-bold text-white text-glow mb-6">
                {service.title}
              </h1>
              <div className="flex justify-center px-4">
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl text-center leading-relaxed">
                  {service.description}
                </p>
              </div>

            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Fonctionnalités <span className="text-gold-400">Incluses</span>
              </h2>

              <div className="flex justify-center px-4">
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl text-center leading-relaxed">
                  Découvrez tout ce que notre service {service.title.toLowerCase()} peut vous apporter
                </p>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gold-400 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{feature}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Pourquoi Nous <span className="text-gold-400">Choisir</span> ?
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="glass-card p-8 group hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gold-400 transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Témoignages <span className="text-gold-400">Clients</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-card p-8"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gold-400 text-sm">{testimonial.role}</div>
                  </div>
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
                Intéressé par ce <span className="text-gold-400">Service</span> ?
              </h2>
              <p className="text-xl text-gray-300">
                Contactez-nous pour discuter de votre projet {service.title.toLowerCase()}
                et recevoir un devis personnalisé gratuit
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Demander un Devis
                </Link>
                <Link to="/services" className="btn-secondary">
                  Voir Tous Nos Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceDetail;