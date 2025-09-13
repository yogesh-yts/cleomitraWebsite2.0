"use client";

export default function Loading() {
  return (
    <>
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="relative">
          {/* Main loader container */}
          <div
            className="w-[150px] h-[150px] bg-transparent border-[3px] rounded-full text-center flex items-center justify-center font-sans text-xl text-main tracking-[2px] uppercase relative"
            style={{
              borderColor: "rgba(102, 0, 51, 0.1)",
              textShadow: "0 0 10px #660033",
              boxShadow: "0 0 20px rgba(0, 0, 0, .15)",
            }}
          >
            Loading
            {/* Spinning border */}
            <div
              className="absolute top-[-3px] left-[-3px] w-full h-full border-[3px] border-transparent rounded-full"
              style={{
                borderTop: "3px solid #660033",
                borderRight: "3px solid #660033",
                animation: "spin 2s linear infinite",
              }}
            />
            {/* Rotating dot arm */}
            <span
              className="block absolute w-1/2 h-1 bg-transparent origin-left"
              style={{
                top: "calc(50% - 2px)",
                left: "50%",
                animation: "rotateDot 2s linear infinite",
              }}
            >
              {/* Glowing dot */}
              <div
                className="absolute w-4 h-4 rounded-full bg-pink-700 top-[-6px] right-[-8px]"
                style={{
                  backgroundColor: "#bb045f",
                  boxShadow: "0 0 20px 5px #660033",
                }}
              />
            </span>
          </div>
        </div>
      </div>

      {/* Global styles for animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes rotateDot {
            0% { transform: rotate(45deg); }
            100% { transform: rotate(405deg); }
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `,
        }}
      />
    </>
  );
}

// Alternative skeleton loading component that you can use in specific pages
export function SkeletonLoader() {
  return (
    <div className="animate-pulse">
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
        <div className="h-32 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}

// Page-specific loading component
export function PageLoader() {
  return (
    <div className="container-responsive section-spacing">
      <div className="max-w-4xl mx-auto">
        <div className="animate-pulse space-y-8">
          {/* Header skeleton */}
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded w-2/3"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>

          {/* Content skeleton */}
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/5"></div>
          </div>

          {/* Card skeletons */}
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg p-6 space-y-4"
              >
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
