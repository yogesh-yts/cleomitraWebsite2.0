"use client";

import React, { useState, useEffect } from "react";
import SkeletonLoader from "./SkeletonLoader";

const VideoPlayer = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Cleomitra product demo video
  const videoUrl = "https://www.youtube.com/embed/R2N32Twql5M?autoplay=1&mute=1&loop=1&playlist=R2N32Twql5M&controls=1";

  const handleIframeLoad = () => {
    // Wait a bit longer for the iframe content to fully load
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    // Fallback timer in case onLoad doesn't trigger
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-black rounded-2xl overflow-hidden">
      {/* Video Element */}
      <div className="relative aspect-video">
        <iframe
          src={videoUrl}
          className={`w-full h-full transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Cleomitra CRM Software Product Demo Video"
          onLoad={handleIframeLoad}
        />

        {/* Skeleton Loader - matches exact video dimensions */}
        {isLoading && (
          <div className="absolute inset-0">
            <SkeletonLoader
              variant="video"
              className="w-full h-full rounded-2xl"
              showPlayButton={true}
              aria-label="Loading Cleomitra tutorial video"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;