import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import VideoBackground from './components/VideoBackground';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Loader2 } from 'lucide-react';

// Lazy loading des pages pour optimiser les performances
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));

// Composant de chargement
const LoadingSpinner: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center space-y-4"
    >
      <Loader2 className="w-12 h-12 text-gold-400 animate-spin" />
      <p className="text-white text-lg">Chargement...</p>
    </motion.div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        {/* Vidéo de fond fixe */}
        <VideoBackground />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Contenu principal avec Suspense pour le lazy loading */}
        <main className="relative z-10">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              {/* Route 404 - redirection vers l'accueil */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
