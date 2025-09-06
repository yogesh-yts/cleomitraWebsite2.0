import React from "react";
import { MousePointer2 } from "lucide-react";

export interface ButtonWithArrowProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  cursorColor?: string;
  arrowPosition: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}

export default function ButtonWithArrow({
  text,
  bgColor = "#3b82f6",
  textColor = "#ffffff",
  cursorColor = "#ffffff",
  arrowPosition,
  className = "",
}: ButtonWithArrowProps) {
  const getCursorPositionAndRotation = () => {
    switch (arrowPosition) {
      case "top-left":
        return {
          position: "absolute -top-4 -left-4",
          rotation: "transform rotate-[0deg]",
        };
      case "top-right":
        return {
          position: "absolute -top-4 -right-4",
          rotation: "transform rotate-[90deg]",
        };
      case "bottom-left":
        return {
          position: "absolute -bottom-4 -left-4",
          rotation: "transform rotate-[270deg]",
        };
      case "bottom-right":
        return {
          position: "absolute -bottom-4 -right-4",
          rotation: "transform rotate-[180deg]",
        };
      default:
        return {
          position: "absolute -bottom-4 -right-4",
          rotation: "transform rotate-[270deg]",
        };
    }
  };

  const { position, rotation } = getCursorPositionAndRotation();

  // Use cursorColor if provided, otherwise use bgColor

  return (
    <div className={`relative inline-block  `}>
      <div
        className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer hover:opacity-90 transition-opacity ${className}`}
      >
        {text}
      </div>
      <MousePointer2
        size={24}
        className={`${position} ${rotation} ${cursorColor}`}
        strokeWidth={2}
        fill="none"
      />
    </div>
  );
}
