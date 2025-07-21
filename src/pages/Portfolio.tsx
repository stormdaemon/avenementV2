import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Play, Calendar, Users, Award } from 'lucide-react';
import type { Project } from '../types';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['Tous', 'Diffusion', 'Événements', 'Sites Web', 'Réseaux Sociaux', 'Films'];

  const projects: Project[] = [
    {
      id: '1',
      title: 'Messe de Noël en Direct - Cathédrale Notre-Dame',
      description: 'Diffusion multi-stream de la messe de Noël avec plus de 50 000 spectateurs simultanés.',
      category: 'Diffusion',
      image: '/portfolio/noel-diffusion.jpg',
      client: 'Diocèse de Paris',
      date: 'Décembre 2023',
      tags: ['Live Streaming', 'Multi-plateforme', 'Haute Qualité'],
    },
    {
      id: '2',
      title: 'Site Web - Paroisse Saint-Michel',
      description: 'Création d\'un site web moderne avec système de réservation pour les messes et événements.',
      category: 'Sites Web',
      image: '/portfolio/site-paroisse.jpg',
      client: 'Paroisse Saint-Michel',
      date: 'Octobre 2023',
      tags: ['Responsive Design', 'CMS', 'Réservations'],
    },
    {
      id: '3',
      title: 'Pèlerinage à Lourdes 2023',
      description: 'Organisation complète du pèlerinage diocésain avec 500 participants.',
      category: 'Événements',
      image: '/portfolio/pelerinage-lourdes.jpg',
      client: 'Diocèse de Lyon',
      date: 'Septembre 2023',
      tags: ['Logistique', 'Communication', 'Coordination'],
    },
    {
      id: '4',
      title: 'Campagne Réseaux Sociaux - Carême 2023',
      description: 'Stratégie digitale complète pour accompagner les fidèles pendant le Carême.',
      category: 'Réseaux Sociaux',
      image: '/portfolio/careme-social.jpg',
      client: 'Conférence des Évêques',
      date: 'Mars 2023',
      tags: ['Content Strategy', 'Engagement', 'Spiritualité'],
    },
    {
      id: '5',
      title: 'Film Institutionnel - Communauté de l\'Emmanuel',
      description: 'Réalisation d\'un film de présentation de la communauté et de ses missions.',
      category: 'Films',
      image: '/portfolio/film-emmanuel.jpg',
      client: 'Communauté de l\'Emmanuel',
      date: 'Juin 2023',
      tags: ['Production Vidéo', 'Storytelling', 'Témoignages'],
    },
    {
      id: '6',
      title: 'Congrès Mission 2023',
      description: 'Organisation et diffusion du congrès national sur la mission avec 2000 participants.',
      category: 'Événements',
      image: '/portfolio/congres-mission.jpg',
      client: 'Œuvres Pontificales Missionnaires',
      date: 'Mai 2023',
      tags: ['Événement Hybride', 'Diffusion Live', 'Logistique'],
    },
  ];

  const filteredProjects = selectedCategory === 'Tous'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const stats = [
    { icon: Users, value: '500+', label: 'Clients Satisfaits' },
    { icon: Award, value: '1000+', label: 'Projets Réalisés' },
    { icon: Calendar, value: '200+', label: 'Événements Organisés' },
    { icon: Play, value: '10M+', label: 'Vues Générées' },
  ];

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
              Notre <span className="text-gold-400">Portfolio</span>
            </h1>
            <div className="flex justify-center px-4">
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl text-center leading-relaxed">
                Découvrez nos réalisations et l'impact que nous avons créé pour
                nos clients dans le domaine de la communication catholique.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
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

      {/* Filter Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${selectedCategory === category
                  ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass-card overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-64 bg-gradient-to-br from-gold-400/20 to-gold-600/20 flex items-center justify-center">
                    <Play className="w-16 h-16 text-gold-400 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gold-400 text-sm font-medium">
                        {project.category}
                      </span>
                      <span className="text-gray-400 text-sm">{project.date}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gold-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{project.client}</span>
                      <ExternalLink className="w-5 h-5 text-gold-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <div className="flex items-center space-x-4 text-gray-300">
                      <span className="text-gold-400">{selectedProject.category}</span>
                      <span>•</span>
                      <span>{selectedProject.client}</span>
                      <span>•</span>
                      <span>{selectedProject.date}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <div className="relative h-96 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-lg mb-6 flex items-center justify-center">
                  <Play className="w-20 h-20 text-gold-400" />
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gold-400/20 text-gold-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              Ce Que Disent Nos <span className="text-gold-400">Clients</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: 'Mgr Jean Dubois',
                role: 'Évêque de Lyon',
                content: 'Avènement a transformé notre communication diocésaine. Leur expertise technique alliée à leur compréhension de nos valeurs est remarquable.',
              },
              {
                name: 'Père Michel Martin',
                role: 'Curé de Saint-Joseph',
                content: 'Grâce à leur service de diffusion, nos messes touchent maintenant des centaines de fidèles qui ne peuvent se déplacer. Un vrai service pastoral.',
              },
              {
                name: 'Sœur Marie-Claire',
                role: 'Responsable Communication',
                content: 'L\'équipe d\'Avènement a su créer un site web qui reflète parfaitement l\'esprit de notre communauté. Professionnel et authentique.',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-6"
              >
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
              Votre Projet <span className="text-gold-400">Suivant</span> ?
            </h2>
            <p className="text-xl text-gray-300">
              Inspiré par nos réalisations ? Contactez-nous pour discuter
              de votre projet et créer ensemble quelque chose d'exceptionnel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Démarrer Mon Projet
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Voir Nos Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;