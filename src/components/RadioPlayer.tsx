import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minimize2, Maximize2 } from 'lucide-react';

interface RadioPlayerProps {
  className?: string;
}

const RadioPlayer: React.FC<RadioPlayerProps> = ({ className = '' }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Load script for RadioKing player
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://player.radioking.io/scripts/iframe.bundle.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://player.radioking.io/scripts/iframe.bundle.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const closePlayer = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 100, y: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, x: 100, y: 100 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`fixed bottom-6 right-6 z-50 ${className}`}
        style={{ zIndex: 9999 }}
      >
        <div className="bg-black/90 backdrop-blur-sm rounded-lg shadow-2xl border border-gold-400/30 overflow-hidden">
          {/* Header with controls */}
          <div className="flex items-center justify-between p-3 bg-gradient-to-r from-gold-400/20 to-gold-600/20 border-b border-gold-400/30">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium">Heaven Radio</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleMinimize}
                className="p-1 hover:bg-white/10 rounded transition-colors"
                title={isMinimized ? 'Maximize' : 'Minimize'}
              >
                {isMinimized ? (
                  <Maximize2 className="w-4 h-4 text-white" />
                ) : (
                  <Minimize2 className="w-4 h-4 text-white" />
                )}
              </button>
              <button
                onClick={closePlayer}
                className="p-1 hover:bg-red-500/20 rounded transition-colors"
                title="Close"
              >
                <span className="text-white text-sm">×</span>
              </button>
            </div>
          </div>

          {/* Player content */}
          <motion.div
            initial={false}
            animate={{ height: isMinimized ? 0 : 'auto', opacity: isMinimized ? 0.8 : 1 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className={isMinimized ? 'p-0' : 'p-2'}>
              <iframe
                src="https://player.radioking.io/heavenradio/?c=%23F7B520&c2=%23FFFFFF&f=v&i=0&p=0&s=0&alb=0&li=0&popup=0&plc=0&h=275&l=undefined&v=2"
                style={{
                  borderRadius: '5px',
                  width: '275px',
                  height: '275px',
                  border: 'none'
                }}
                frameBorder="0"
                title="Heaven Radio Player"
                allow="autoplay"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RadioPlayer;