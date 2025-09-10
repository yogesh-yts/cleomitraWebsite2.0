"use client";

import React, { useState, useEffect } from "react";

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

        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;