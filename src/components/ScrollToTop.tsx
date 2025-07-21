import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Composant qui fait défiler automatiquement vers le haut de la page
 * à chaque changement de route
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll vers le haut de la page instantanément
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;