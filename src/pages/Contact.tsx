import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import type { ContactForm } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Diffusion Multi-Stream',
    'Réseaux Sociaux',
    'Organisation d\'Événements',
    'Films Institutionnels',
    'Création de Sites Web',
    'Autre',
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@avenement.fr',
      link: 'mailto:contact@avenement.fr',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+33 1 23 45 67 89',
      link: 'tel:+33123456789',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Paris, France',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lun-Ven: 9h-18h',
      link: '#',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi de formulaire
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
    }, 3000);
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
              Contactez <span className="text-gold-400">Nous</span>
            </h1>

            <div className="flex justify-center px-4">
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl text-center leading-relaxed">
                Prêt à donner vie à votre projet ? Parlons-en ensemble et créons
                quelque chose d'extraordinaire pour votre communauté.
              </p>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass-card p-6 text-center group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors">
                    {info.title}
                  </h3>
                  {info.link !== '#' ? (
                    <a
                      href={info.link}
                      className="text-gray-300 hover:text-gold-400 transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-300">{info.content}</p>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Demandez Votre <span className="text-gold-400">Devis Gratuit</span>
              </h2>
              <p className="text-xl text-gray-300">
                Remplissez ce formulaire et nous vous recontacterons dans les 24h
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Message Envoyé avec Succès !
                </h3>
                <p className="text-gray-300">
                  Nous vous recontacterons très bientôt. Merci pour votre confiance !
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:bg-white/20 transition-all duration-300"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:bg-white/20 transition-all duration-300"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:bg-white/20 transition-all duration-300"
                      placeholder="Votre numéro de téléphone"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2">
                      Organisation
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:bg-white/20 transition-all duration-300"
                      placeholder="Nom de votre paroisse/organisation"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-white font-medium mb-2">
                    Service souhaité *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-gold-400 focus:bg-white/20 transition-all duration-300"
                  >
                    <option value="" className="bg-gray-800">Sélectionnez un service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-gray-800">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:bg-white/20 transition-all duration-300 resize-none"
                    placeholder="Décrivez votre projet, vos besoins, vos objectifs..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-gold-400 to-gold-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:from-gold-500 hover:to-gold-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Envoyer ma demande</span>
                    </>
                  )}
                </motion.button>

                <p className="text-gray-400 text-sm text-center">
                  En soumettant ce formulaire, vous acceptez d'être recontacté par notre équipe
                  concernant votre demande.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-black/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Questions <span className="text-gold-400">Fréquentes</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                question: 'Combien de temps faut-il pour réaliser un projet ?',
                answer: 'Cela dépend du type de projet. Un site web prend généralement 2-4 semaines, tandis qu\'un événement peut nécessiter 1-3 mois de préparation.',
              },
              {
                question: 'Proposez-vous des tarifs préférentiels pour les paroisses ?',
                answer: 'Oui, nous proposons des tarifs adaptés aux budgets des paroisses et organisations catholiques. Contactez-nous pour un devis personnalisé.',
              },
              {
                question: 'Pouvez-vous gérer des événements en direct ?',
                answer: 'Absolument ! Nous sommes spécialisés dans la diffusion en direct multi-plateformes et la gestion technique d\'événements religieux.',
              },
              {
                question: 'Offrez-vous un support après livraison ?',
                answer: 'Oui, nous proposons un support technique et un accompagnement continu pour tous nos services, avec différentes formules selon vos besoins.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;