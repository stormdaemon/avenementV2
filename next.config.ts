import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'heavenradio.fr' },
      { protocol: 'https', hostname: 'lebaptemecatholique.fr' },
      { protocol: 'https', hostname: 'diocese44.fr' },
      { protocol: 'https', hostname: 'content.r9cdn.net' },
      { protocol: 'https', hostname: 'congresmission.com' },
      { protocol: 'https', hostname: 'theo-multimedia.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
  },
};

export default nextConfig;
