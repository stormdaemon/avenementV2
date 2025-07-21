import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Play, Calendar, Users, Award } from 'lucide-react';
import type { Project } from '../types';
import SEO from '../components/SEO';
import { usePageSEOData } from '../hooks/useSEOData';

const Portfolio: React.FC = () => {
  const seoData = usePageSEOData(
    'Portfolio',
    'Découvrez nos réalisations en communication catholique : diffusion en direct, événements, sites web, films institutionnels et campagnes réseaux sociaux pour diocèses et paroisses.',
    '/portfolio'
  );
  
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['Tous', 'Sites Web', 'Web Radio', 'Documentaire', 'Landing Page'];

  const projects: Project[] = [
    {
      id: '1',
      title: 'Révélation Radio',
      description: 'Site vitrine pour une web radio catholique, présentation des émissions, lecteur audio intégré',
      category: 'Web Radio',
      image: 'https://theo-multimedia.com/revelation.png',
      client: 'Association Parole et Partage',
      date: 'Juillet 2024',
      tags: ['Web Radio', 'Audio Streaming', 'Site Vitrine'],
      url: null,
    },
    {
      id: '2',
      title: 'Fesch 2025',
      description: 'Site promotionnel pour le documentaire "Fesch 2025, du non-sens au Mystère" réalisé par Samuel Armnius',
      category: 'Documentaire',
      image: 'https://theo-multimedia.com/fesch.png',
      client: 'Wady Productions',
      date: 'Novembre 2024',
      tags: ['Documentaire', 'Promotion', 'Cinéma'],
      url: 'https://fesch2025.fr/',
    },
    {
      id: '3',
      title: 'Heaven Radio',
      description: 'Successeur de Révélation Radio, nouvelle web radio de la même équipe, expérience audio enrichie et design repensé',
      category: 'Web Radio',
      image: 'https://theo-multimedia.com/heavenradio.png',
      client: 'Association Parole et Partage',
      date: 'Juin 2024',
      tags: ['Web Radio', 'Streaming', 'Design Moderne'],
      url: 'https://heavenradio.fr/',
    },
    {
      id: '4',
      title: 'Le Baptême Catholique',
      description: 'Landing page de génération de leads pour accompagner les personnes vers le baptême',
      category: 'Landing Page',
      image: 'https://theo-multimedia.com/baptemecatholique.png',
      client: 'Association Parole et Partage',
      date: 'Juillet 2024',
      tags: ['Landing Page', 'Lead Generation', 'Baptême'],
      url: 'https://lebaptemecatholique.fr/',
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
                  whileHover={{ 
                    y: -15,
                    rotateX: 5,
                    rotateY: 5,
                    scale: 1.02
                  }}
                  className="relative group cursor-pointer transform-gpu perspective-1000 h-96 flex flex-col"
                  style={{
                    transformStyle: 'preserve-3d'
                  }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Tablette tactile design */}
                  <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-700/50 group-hover:border-gold-400/30 transition-all duration-500">
                    {/* Écran de la tablette */}
                    <div className="relative bg-black rounded-xl overflow-hidden shadow-inner border-2 border-slate-600 group-hover:border-gold-400/50 transition-all duration-500">
                      {/* Image du projet */}
                      <div className="relative h-44 bg-gradient-to-br from-gold-400/10 to-gold-600/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                            if (nextElement) {
                              nextElement.style.display = 'flex';
                            }
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-gold-400/20 to-gold-600/20 flex items-center justify-center" style={{display: 'none'}}>
                          <Play className="w-16 h-16 text-gold-400 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                        
                        {/* Badge de catégorie */}
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 bg-black/70 backdrop-blur-sm text-gold-400 text-xs font-medium rounded-full border border-gold-400/30">
                            {project.category}
                          </span>
                        </div>
                        
                        {/* Icône d'URL si disponible */}
                        {project.url && (
                          <div className="absolute top-3 right-3">
                            <div className="w-8 h-8 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center border border-gold-400/30">
                              <ExternalLink className="w-4 h-4 text-gold-400" />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Contenu de la tablette */}
                      <div className="p-4 bg-gradient-to-b from-slate-900 to-black flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-400 text-xs">{project.date}</span>
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                            </div>
                          </div>

                          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors line-clamp-1">
                            {project.title}
                          </h3>

                          <p className="text-gray-300 text-sm mb-3 leading-relaxed line-clamp-2">
                            {project.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-xs truncate max-w-[60%]">{project.client}</span>
                          <div className="flex items-center space-x-2">
                            {project.url ? (
                              <span className="text-green-400 text-xs">En ligne</span>
                            ) : (
                              <span className="text-gray-500 text-xs">Privé</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Reflets de la tablette */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none group-hover:from-white/10 transition-all duration-500"></div>
                    
                    {/* Ombre portée */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
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
              className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] outline-none focus:outline-none overflow-hidden"
              style={{
                aspectRatio: '4/3'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Bouton de fermeture iPad style */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors border border-gray-600"
              >
                ✕
              </button>
              
              {/* Écran de l'iPad */}
              <div className="bg-black rounded-2xl shadow-inner h-full overflow-hidden">
                {/* Barre de statut iPad */}
                <div className="bg-black px-4 py-2 flex items-center justify-between text-white text-sm border-b border-gray-800">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-400">Portfolio</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400">100%</span>
                    <div className="w-6 h-3 border border-white rounded-sm">
                      <div className="w-full h-full bg-green-400 rounded-sm"></div>
                    </div>
                  </div>
                </div>
                
                {/* Contenu principal */}
                <div className="p-8 h-full overflow-y-auto scrollbar-hide">
                  {/* Header du projet */}
                   <div className="mb-8">
                     <h2 className="text-3xl font-bold text-white mb-4">
                       {selectedProject.title}
                     </h2>
                     <div className="flex items-center space-x-6 text-gray-300">
                       <span className="text-gold-400 font-medium">{selectedProject.category}</span>
                       <span className="text-gray-500">•</span>
                       <span>{selectedProject.client}</span>
                       <span className="text-gray-500">•</span>
                       <span>{selectedProject.date}</span>
                     </div>
                   </div>

                   {/* Image du projet */}
                   <div className="relative h-80 rounded-2xl mb-8 overflow-hidden shadow-2xl">
                     <img 
                       src={selectedProject.image} 
                       alt={selectedProject.title}
                       className="w-full h-full object-cover"
                       onError={(e) => {
                         e.currentTarget.style.display = 'none';
                         const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                         if (nextElement) {
                           nextElement.style.display = 'flex';
                         }
                       }}
                     />
                     <div className="absolute inset-0 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-2xl flex items-center justify-center" style={{display: 'none'}}>
                       <Play className="w-20 h-20 text-gold-400" />
                     </div>
                   </div>

                   {/* Description */}
                   <p className="text-gray-300 leading-relaxed mb-8 text-base">
                     {selectedProject.description}
                   </p>

                   {/* Tags */}
                   <div className="flex flex-wrap gap-3 mb-8">
                     {selectedProject.tags.map((tag) => (
                       <span
                         key={tag}
                         className="px-4 py-2 bg-gold-400/20 text-gold-400 rounded-full text-sm font-medium"
                       >
                         {tag}
                       </span>
                     ))}
                   </div>

                   {/* Bouton d'action */}
                   {selectedProject.url && (
                     <div className="flex justify-center pt-4">
                       <motion.a
                         href={selectedProject.url}
                         target="_blank"
                         rel="noopener noreferrer"
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                         className="inline-flex items-center space-x-3 bg-gradient-to-r from-gold-400 to-gold-600 text-white px-8 py-4 rounded-2xl font-medium hover:from-gold-500 hover:to-gold-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                       >
                         <ExternalLink className="w-5 h-5" />
                         <span>Visiter le site</span>
                       </motion.a>
                     </div>
                   )}
                </div>
              </div>
              
              {/* Reflets de l'iPad */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none"></div>
              
              {/* Ombre portée */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-400/10 to-gold-600/10 rounded-3xl blur-2xl opacity-50 -z-10"></div>
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
    </>
  );
};

export default Portfolio;