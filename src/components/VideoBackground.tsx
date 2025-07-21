import React from 'react';

interface VideoBackgroundProps {
  className?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ className = '' }) => {
  return (
    <>
      <video
        className={`video-background ${className}`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/13829310_2560_1440_30fps.mp4" type="video/mp4" />
        {/* Fallback pour les navigateurs qui ne supportent pas la vidéo */}
        <div className="bg-gradient-to-br from-mocha-900 to-black w-full h-full" />
      </video>
      <div className="video-overlay" />
    </>
  );
};

export default VideoBackground;