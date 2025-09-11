interface SkeletonLoaderProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  variant?: "image" | "video" | "rectangle";
  showPlayButton?: boolean;
}

export default function SkeletonLoader({
  width = "100%",
  height = "auto",
  className = "",
  variant = "rectangle",
  showPlayButton = false,
}: SkeletonLoaderProps) {
  const getAspectRatio = () => {
    switch (variant) {
      case "video":
        return "aspect-video";
      case "image":
        return "aspect-[4/3]";
      default:
        return "";
    }
  };

  return (
    <div
      className={`relative bg-gray-200 animate-pulse overflow-hidden ${getAspectRatio()} ${className}`}
      style={{ width, height: variant === "rectangle" ? height : undefined }}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_2s_infinite]"></div>
      
      {/* Play button for video skeleton */}
      {showPlayButton && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/20 rounded-full p-4">
            <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-[8px] border-l-white/60 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>
      )}
      
      {/* Image skeleton content */}
      {(variant === "image" || variant === "rectangle") && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/30 rounded-lg flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white/40"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}