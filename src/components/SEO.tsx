import React from 'react';
import type { SEOData } from '../types';

interface SEOProps {
  seoData: SEOData;
}

/**
 * Composant SEO utilisant l'API native de React 19
 * Les balises meta, title et link sont automatiquement hoistées vers le <head>
 */
const SEO: React.FC<SEOProps> = ({ seoData }) => {
  return (
    <>
      {/* Title */}
      {seoData.title && <title>{seoData.title}</title>}
      
      {/* Meta Description */}
      {seoData.description && (
        <meta name="description" content={seoData.description} />
      )}
      
      {/* Keywords */}
      {seoData.keywords && seoData.keywords.length > 0 && (
        <meta name="keywords" content={seoData.keywords.join(', ')} />
      )}
      
      {/* Canonical URL */}
      {seoData.canonical && (
        <link rel="canonical" href={seoData.canonical} />
      )}
      
      {/* Open Graph Tags */}
      {seoData.openGraph && (
        <>
          <meta property="og:title" content={seoData.openGraph.title} />
          <meta property="og:description" content={seoData.openGraph.description} />
          <meta property="og:type" content={seoData.openGraph.type || 'website'} />
          {seoData.openGraph.url && (
            <meta property="og:url" content={seoData.openGraph.url} />
          )}
          {seoData.openGraph.image && (
            <>
              <meta property="og:image" content={seoData.openGraph.image} />
              <meta property="og:image:alt" content={seoData.openGraph.title} />
            </>
          )}
          <meta property="og:site_name" content="Agence ultreiaevent" />
          <meta property="og:locale" content="fr_FR" />
        </>
      )}
      
      {/* Twitter Card Tags */}
      {seoData.twitter && (
        <>
          <meta name="twitter:card" content={seoData.twitter.card || 'summary'} />
          <meta name="twitter:title" content={seoData.twitter.title} />
          <meta name="twitter:description" content={seoData.twitter.description} />
          {seoData.twitter.image && (
            <meta name="twitter:image" content={seoData.twitter.image} />
          )}
          <meta name="twitter:site" content="@ultreiaevent_agency" />
        </>
      )}
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Agence ultreiaevent" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="fr" />
      
      {/* Structured Data (JSON-LD) */}
      {seoData.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoData.structuredData)
          }}
        />
      )}
    </>
  );
};

export default SEO;