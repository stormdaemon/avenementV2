import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * Hook pour gérer les animations au scroll (scrollytelling)
 */
export const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(currentScrollY / documentHeight, 1);

      setScrollY(currentScrollY);
      setScrollProgress(progress);
      setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, scrollDirection, scrollProgress };
};

/**
 * Hook pour les animations de parallaxe
 */
export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
};

/**
 * Hook pour les animations d'apparition en vue
 */
export const useInViewAnimation = (threshold: number = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount: threshold,
    once: true // Animation une seule fois
  });

  return { ref, isInView };
};

/**
 * Hook pour les micro-animations au hover
 */
export const useHoverAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  const hoverVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.05, 
      y: -5,
      transition: { 
        type: 'spring', 
        stiffness: 400, 
        damping: 10 
      }
    }
  };

  return { isHovered, hoverProps, hoverVariants };
};

/**
 * Hook pour les animations de typing effect
 */
export const useTypingEffect = (text: string, speed: number = 50) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [displayedText, text, speed]);

  const reset = () => {
    setDisplayedText('');
    setIsComplete(false);
  };

  return { displayedText, isComplete, reset };
};

/**
 * Hook pour les animations de compteur
 */
export const useCounterAnimation = (end: number, duration: number = 2000, start: number = 0) => {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);
  const frameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  const startAnimation = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    startTimeRef.current = Date.now();
    
    const animate = () => {
      const now = Date.now();
      const elapsed = now - (startTimeRef.current || now);
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(start + (end - start) * easeOut);
      
      setCount(currentCount);
      
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };
    
    frameRef.current = requestAnimationFrame(animate);
  };

  const reset = () => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }
    setCount(start);
    setIsAnimating(false);
  };

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return { count, startAnimation, reset, isAnimating };
};

/**
 * Hook pour les animations de morphing de formes
 */
export const useMorphAnimation = (shapes: string[], interval: number = 3000) => {
  const [currentShapeIndex, setCurrentShapeIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentShapeIndex((prev) => (prev + 1) % shapes.length);
        setIsTransitioning(false);
      }, 300); // Durée de transition
    }, interval);

    return () => clearInterval(timer);
  }, [shapes.length, interval]);

  return {
    currentShape: shapes[currentShapeIndex],
    currentShapeIndex,
    isTransitioning
  };
};

/**
 * Hook pour les animations de particules flottantes
 */
export const useFloatingParticles = (count: number = 20) => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1
    }));
    
    setParticles(newParticles);
  }, [count]);

  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y <= -10 ? 110 : particle.y - particle.speed * 0.1
      })));
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  return particles;
};

/**
 * Hook pour les animations de glow effect
 */
export const useGlowEffect = (intensity: number = 1) => {
  const [glowIntensity, setGlowIntensity] = useState(intensity);

  useEffect(() => {
    const animate = () => {
      const time = Date.now() * 0.002;
      const newIntensity = intensity + Math.sin(time) * 0.3;
      setGlowIntensity(newIntensity);
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, [intensity]);

  const glowStyle = {
    filter: `drop-shadow(0 0 ${glowIntensity * 10}px rgba(212, 175, 55, ${glowIntensity * 0.5}))`,
    transition: 'filter 0.1s ease-out'
  };

  return { glowIntensity, glowStyle };
};

/**
 * Hook pour les animations de révélation de texte
 */
export const useTextReveal = (text: string, delay: number = 100) => {
  const [revealedChars, setRevealedChars] = useState(0);
  const [isRevealing, setIsRevealing] = useState(false);

  const startReveal = () => {
    if (isRevealing) return;
    
    setIsRevealing(true);
    setRevealedChars(0);
    
    const interval = setInterval(() => {
      setRevealedChars(prev => {
        if (prev >= text.length) {
          clearInterval(interval);
          setIsRevealing(false);
          return prev;
        }
        return prev + 1;
      });
    }, delay);
  };

  const revealedText = text.slice(0, revealedChars);
  const hiddenText = text.slice(revealedChars);

  return {
    revealedText,
    hiddenText,
    startReveal,
    isRevealing,
    progress: revealedChars / text.length
  };
};

/**
 * Variantes d'animation prédéfinies pour Framer Motion
 */
export const animationVariants = {
  // Animation de fade in depuis le bas
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -60 },
    transition: { duration: 0.6 }
  },
  
  // Animation de slide depuis la gauche
  slideInLeft: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
    transition: { duration: 0.8 }
  },
  
  // Animation de scale avec bounce
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
    transition: { duration: 0.5, type: 'spring', stiffness: 300 }
  },
  
  // Animation de rotation
  rotateIn: {
    initial: { opacity: 0, rotate: -180 },
    animate: { opacity: 1, rotate: 0 },
    exit: { opacity: 0, rotate: 180 },
    transition: { duration: 0.8 }
  },
  
  // Animation staggered pour les listes
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }
};

export default {
  useScrollAnimation,
  useParallax,
  useInViewAnimation,
  useHoverAnimation,
  useTypingEffect,
  useCounterAnimation,
  useMorphAnimation,
  useFloatingParticles,
  useGlowEffect,
  useTextReveal,
  animationVariants
};