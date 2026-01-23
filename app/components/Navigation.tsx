'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

const navigationItems = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Diffusion Multi-Stream', href: '/services/diffusion-multi-stream' },
      { label: 'Réseaux Sociaux', href: '/services/reseaux-sociaux' },
      { label: 'Organisation d\'Événements', href: '/services/organisation-evenements' },
      { label: 'Films Institutionnels', href: '/services/films-institutionnels' },
      { label: 'Création de Sites Web', href: '/services/creation-sites-web' },
    ],
  },
  { label: 'À Propos', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : ''}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="ultreiaevent"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full border-2 border-gold-400 object-cover"
          />
          <span className="text-2xl font-bold text-gold-400 text-glow">ultreiaevent</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navigationItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.children ? (
                <>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    className="flex items-center gap-1 text-white font-medium hover:text-gold-400 transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={16} />
                  </button>
                  <div className={`absolute top-full left-0 mt-2 w-64 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 transition-all duration-200 ${activeDropdown === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-white rounded-lg hover:text-gold-400 hover:bg-white/10 transition-all"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`font-medium transition-colors ${pathname === item.href ? 'text-gold-400' : 'text-white hover:text-gold-400'}`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-gold-400 to-gold-600 text-white hover:from-gold-500 hover:to-gold-700 hover:shadow-lg hover:shadow-gold-400/25 hover:-translate-y-0.5 transition-all"
          >
            Devis Gratuit
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-black/95 backdrop-blur-xl border-t border-white/10 px-4 py-6`}>
        {navigationItems.map((item) => (
          <div key={item.label}>
            {item.children ? (
              <>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                  className="w-full flex items-center justify-between py-3 text-white font-medium hover:text-gold-400 transition-colors"
                >
                  <span>{item.label}</span>
                  <ChevronDown size={16} className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === item.label && (
                  <div className="ml-4 border-l border-white/10 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2 text-white/70 hover:text-gold-400 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                className={`block py-3 font-medium transition-colors ${pathname === item.href ? 'text-gold-400' : 'text-white hover:text-gold-400'}`}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
        <Link
          href="/contact"
          className="mt-4 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-gold-400 to-gold-600 text-white"
        >
          Devis Gratuit
        </Link>
      </div>
    </nav>
  );
}
