'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, X } from 'lucide-react';
import type { Project } from '../lib/data';
import { motion, AnimatePresence, FadeInView } from '../components/MotionWrapper';

interface Props {
  projects: Project[];
}

const categories = ['Tous', 'Sites Web', 'Web Radio', 'Documentaire', 'Landing Page'];

export default function PortfolioClient({ projects }: Props) {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'Tous'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <>
      {/* Filters */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeInView className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all text-sm sm:text-base ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </FadeInView>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-3 sm:p-4 border border-white/10 hover:border-gold-400/30 hover:-translate-y-4 transition-all cursor-pointer group"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Screen Frame */}
                    <div className="bg-black rounded-xl overflow-hidden border-2 border-slate-600 group-hover:border-gold-400/50 transition-colors">
                      {/* Image */}
                      <div className="relative h-36 sm:h-44 bg-gradient-to-br from-gold-400/10 to-gold-600/10 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <span className="absolute top-2 sm:top-3 left-2 sm:left-3 px-2 sm:px-3 py-1 bg-black/70 backdrop-blur text-gold-400 text-xs font-medium rounded-full border border-gold-400/30">
                          {project.category}
                        </span>
                        {project.url && (
                          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 bg-black/70 backdrop-blur rounded-full flex items-center justify-center border border-gold-400/30">
                            <ExternalLink size={14} className="text-gold-400" />
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-3 sm:p-4 bg-gradient-to-b from-slate-900 to-black">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-white/50">{project.date}</span>
                          <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
                            <div className="w-2 h-2 rounded-full bg-gold-400" />
                            <div className="w-2 h-2 rounded-full bg-red-400" />
                          </div>
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2 group-hover:text-gold-400 transition-colors line-clamp-1">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-white/70 mb-2 sm:mb-3 line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-white/50 truncate max-w-[60%]">
                            {project.client}
                          </span>
                          <span className={`text-xs ${project.url ? 'text-green-400' : 'text-white/50'}`}>
                            {project.url ? 'En ligne' : 'Privé'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur" />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
              >
                <X size={16} />
              </button>

              {/* Header */}
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 pr-10">
                  {selectedProject.title}
                </h2>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm text-white/70">
                  <span className="text-gold-400">{selectedProject.category}</span>
                  <span>•</span>
                  <span>{selectedProject.client}</span>
                  <span>•</span>
                  <span>{selectedProject.date}</span>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-48 sm:h-64 lg:h-80 rounded-xl overflow-hidden mb-6">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gold-400/20 text-gold-400 rounded-full text-xs sm:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              {selectedProject.url && (
                <div className="text-center">
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold bg-gradient-to-r from-gold-400 to-gold-600 text-white hover:from-gold-500 hover:to-gold-700 hover:shadow-lg hover:shadow-gold-400/25 transition-all"
                  >
                    <ExternalLink size={20} />
                    Visiter le site
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
