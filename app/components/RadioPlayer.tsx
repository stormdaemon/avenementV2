'use client';

import { useState, useEffect } from 'react';
import { Minimize2, Maximize2 } from 'lucide-react';

export default function RadioPlayer() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://player.radioking.io/scripts/iframe.bundle.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://player.radioking.io/scripts/iframe.bundle.js"]');
      if (existingScript) document.head.removeChild(existingScript);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] bg-black/90 backdrop-blur rounded-lg shadow-2xl border border-gold-400/30 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-gradient-to-r from-gold-400/20 to-gold-600/20 border-b border-gold-400/30">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-glow" />
          <span className="text-sm font-medium text-white">Heaven Radio</span>
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 rounded text-white hover:bg-white/10 transition-colors"
            title={isMinimized ? 'Agrandir' : 'Réduire'}
          >
            {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 rounded text-white hover:bg-red-500/20 transition-colors"
            title="Fermer"
          >
            <span className="text-lg leading-none">×</span>
          </button>
        </div>
      </div>

      {/* Content */}
      {!isMinimized && (
        <div className="p-2">
          <iframe
            src="https://player.radioking.io/heavenradio/?c=%23F7B520&c2=%23FFFFFF&f=v&i=0&p=0&s=0&alb=0&li=0&popup=0&plc=0&h=275&l=undefined&v=2"
            className="rounded w-[275px] h-[275px] border-0"
            title="Heaven Radio Player"
            allow="autoplay"
          />
        </div>
      )}
    </div>
  );
}
