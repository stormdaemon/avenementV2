'use client';

import { useState } from 'react';
import { Network } from 'lucide-react';

const ECOSYSTEM_LINKS = [
  {
    id: 'irenee',
    label: 'Institut Irénée',
    shortLabel: 'Irénée',
    initials: 'IR',
    href: 'https://irenee-institut.org/',
  },
  {
    id: 'wikibible',
    label: 'WikiBible',
    shortLabel: 'WikiBible',
    initials: 'WB',
    href: 'https://wikibible.fr/',
  },
  {
    id: 'heavenradio',
    label: 'Heaven Radio',
    shortLabel: 'Heaven Radio',
    initials: 'HR',
    href: 'https://heavenradio.fr/',
  },
  {
    id: 'mission',
    label: 'La Mission Catholique',
    shortLabel: 'La Mission',
    initials: 'LM',
    href: 'https://www.lamissioncatholique.fr/',
  },
  {
    id: 'sos',
    label: "SOS Chrétiens d'Occident",
    shortLabel: 'SOS Chrétiens',
    initials: 'SOS',
    href: 'https://soschretiensdoccident.fr/',
  },
  {
    id: 'bapteme',
    label: 'Le Baptême Catholique',
    shortLabel: 'Baptême',
    initials: 'BC',
    href: 'https://lebaptemecatholique.fr/',
  },
] as const;

export default function ChristianEcosystemMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="fixed left-3 top-24 z-[60] sm:left-5 sm:top-1/2 sm:-translate-y-1/2">
      <div className="flex flex-col items-start gap-2">
        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-11 items-center gap-2 rounded-lg border border-gold-400/40 bg-black/90 px-3 text-xs font-black uppercase tracking-[0.14em] text-gold-100 shadow-2xl backdrop-blur-md sm:hidden"
          aria-expanded={isOpen}
          aria-controls="christian-ecosystem-menu"
        >
          <Network size={16} aria-hidden="true" />
          Sites amis
          <span aria-hidden="true" className="text-base leading-none">
            {isOpen ? '-' : '+'}
          </span>
        </button>

        <nav
          id="christian-ecosystem-menu"
          className={`${isOpen ? 'flex' : 'hidden'} max-w-[calc(100vw-1.5rem)] flex-col gap-2 sm:flex`}
          aria-label="Sites amis de l'écosystème chrétien"
        >
          {ECOSYSTEM_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-12 items-center rounded-r-lg border border-gold-400/35 bg-black/90 pr-3 text-gold-50 shadow-2xl shadow-black/30 backdrop-blur-md transition duration-200 hover:translate-x-1 hover:border-gold-300 hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300"
              aria-label={`Ouvrir ${link.label}`}
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold-300/80 bg-gradient-to-br from-gold-200 via-gold-400 to-gold-700 text-[0.68rem] font-black text-black shadow-inner">
                {link.initials}
              </span>
              <span className="ml-2 max-w-[8.5rem] text-[0.72rem] font-black uppercase leading-tight tracking-[0.03em]">
                {link.shortLabel}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
