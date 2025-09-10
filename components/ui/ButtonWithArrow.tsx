import React from "react";
import { MousePointer2 } from "lucide-react";

export interface ButtonWithArrowProps {
  text: string;
  cursorColor?: string;
  arrowPosition: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}

export default function ButtonWithArrow({
  text,
  cursorColor = "#ffffff",
  arrowPosition,
  className = "",
}: ButtonWithArrowProps) {
  const getCursorPositionAndRotation = () => {
    switch (arrowPosition) {
      case "top-left":
        return {
          position: "absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4",
          rotation: "transform rotate-[0deg]",
        };
      case "top-right":
        return {
          position: "absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4",
          rotation: "transform rotate-[90deg]",
        };
      case "bottom-left":
        return {
          position: "absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 md:-bottom-4 md:-left-4",
          rotation: "transform rotate-[270deg]",
        };
      case "bottom-right":
        return {
          position: "absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 md:-bottom-4 md:-right-4",
          rotation: "transform rotate-[180deg]",
        };
      default:
        return {
          position: "absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 md:-bottom-4 md:-right-4",
          rotation: "transform rotate-[270deg]",
        };
    }
  };

  const { position, rotation } = getCursorPositionAndRotation();

  // Use cursorColor if provided, otherwise use bgColor

  return (
    <div className={`relative inline-block  `}>
      <div
        className={`px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap cursor-pointer hover:opacity-90 transition-opacity ${className}`}
      >
        {text}
      </div>
      <MousePointer2
        size={16}
        className={`${position} ${rotation} ${cursorColor} sm:w-5 sm:h-5 md:w-6 md:h-6`}
        strokeWidth={2}
        fill="none"
      />
    </div>
  );
}
