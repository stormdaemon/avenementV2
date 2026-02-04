'use client';

import { useState, useEffect } from 'react';
import { Send, CheckCircle, X } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { servicesList } from '../lib/data';
import { motion, AnimatePresence } from '../components/MotionWrapper';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mqabdbpj');
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: '',
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowModal(true);
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    }
  }, [state.succeeded]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="hidden" name="_replyto" value={formData.email} />
        <input type="hidden" name="_subject" value={`Demande de ${formData.service} - ultreiaevent`} />

        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Nom complet *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-gold-400 focus:bg-white/15 transition-all"
              placeholder="Votre nom complet"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-gold-400 focus:bg-white/15 transition-all"
              placeholder="votre@email.com"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-white">
              Téléphone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-gold-400 focus:bg-white/15 transition-all"
              placeholder="Votre numéro de téléphone"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="company" className="block text-sm font-medium text-white">
              Organisation
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-gold-400 focus:bg-white/15 transition-all"
              placeholder="Nom de votre paroisse/organisation"
            />
          </div>
        </div>

        {/* Service Select */}
        <div className="space-y-2">
          <label htmlFor="service" className="block text-sm font-medium text-white">
            Service souhaité *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-gold-400 focus:bg-white/15 transition-all [&>option]:bg-gray-800"
          >
            <option value="">Sélectionnez un service</option>
            {servicesList.map((service) => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-white">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-gold-400 focus:bg-white/15 transition-all resize-none"
            placeholder="Décrivez votre projet, vos besoins, vos objectifs..."
          />
        </div>

        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-gold-400 text-sm" />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-gold-400 text-sm" />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-gold-400 to-gold-600 text-white hover:from-gold-500 hover:to-gold-700 hover:shadow-lg hover:shadow-gold-400/25 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
        >
          {state.submitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send size={20} />
              Envoyer ma demande
            </>
          )}
        </button>

        <p className="text-xs sm:text-sm text-white/50 text-center">
          En soumettant ce formulaire, vous acceptez d'être recontacté par notre équipe concernant votre demande.
        </p>
      </form>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur" />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative w-full max-w-md bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-xl border border-green-500/30 rounded-2xl p-8 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <X size={16} />
              </button>
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Message Envoyé avec Succès !
              </h3>
              <p className="text-sm sm:text-base text-white/70 mb-6">
                Nous vous recontacterons très bientôt. Merci pour votre confiance !
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-gold-400 to-gold-600 text-white hover:from-gold-500 hover:to-gold-700 transition-all"
              >
                Fermer
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
