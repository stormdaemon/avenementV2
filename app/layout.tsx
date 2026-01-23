import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import VideoBackground from './components/VideoBackground';
import RadioPlayer from './components/RadioPlayer';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://ultreiaevent.com'),
  title: {
    default: 'ultreiaevent - Agence de Communication Catholique',
    template: '%s | ultreiaevent',
  },
  description: 'Agence ultreiaevent : spécialiste de la communication catholique. Diffusion multi-stream, organisation d\'événements, films institutionnels, sites web et réseaux sociaux pour diocèses, paroisses et communautés.',
  keywords: ['agence communication catholique', 'diffusion messe en direct', 'streaming religieux', 'organisation événement catholique', 'site web paroisse', 'film institutionnel', 'réseaux sociaux église', 'communication diocèse'],
  authors: [{ name: 'ultreiaevent' }],
  creator: 'ultreiaevent',
  publisher: 'WADY PRODUCTIONS',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://ultreiaevent.com',
    siteName: 'ultreiaevent',
    title: 'ultreiaevent - Agence de Communication Catholique',
    description: 'Spécialiste de la communication catholique : diffusion en direct, événements, digital et audiovisuel pour diocèses et paroisses.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'ultreiaevent' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ultreiaevent - Agence de Communication Catholique',
    description: 'Spécialiste de la communication catholique : diffusion en direct, événements, digital et audiovisuel pour diocèses et paroisses.',
  },
  verification: {},
  alternates: { canonical: 'https://ultreiaevent.com' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <div className="relative min-h-screen">
          <VideoBackground />
          <Navigation />
          <main className="relative z-10">{children}</main>
          <Footer />
        </div>
        <RadioPlayer />
      </body>
    </html>
  );
}
