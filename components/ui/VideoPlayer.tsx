"use client";

import React, { useState, useEffect } from "react";
import SkeletonLoader from "./SkeletonLoader";

const VideoPlayer = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Cleomitra product demo video
  const videoUrl = "https://www.youtube.com/embed/R2N32Twql5M?autoplay=1&mute=1&loop=1&playlist=R2N32Twql5M&controls=1";

  useEffect(() => {
    // Set loading to false after a short delay for iframe
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

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
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Cleomitra Demo Video"
        />

        {/* Skeleton Loader */}
        {isLoading && (
          <SkeletonLoader
            variant="video"
            className="absolute inset-0 rounded-2xl"
            showPlayButton={true}
          />
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;