"use client";

import React from "react";

interface GradientTextButtonProps {
  text: string;
  className?: string;
  'aria-label'?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

const GradientTextButton = ({
  text,
  className = "",
  'aria-label': ariaLabel,
  as: Component = 'h3',
}: GradientTextButtonProps) => {
  // Split the text into words
  const words = text.trim().split(" ");

  if (words.length === 0) return null;

  // Get all words except the last one
  const textPart = words.slice(0, -1).join(" ");

  // Get the last word
  const buttonPart = words[words.length - 1];

  return (
    <Component
      className={`text-3xl lg:text-4xl font-bold text-foreground max-w-2xl mx-auto leading-snug ${className}`}
      aria-label={ariaLabel}
    >
      {textPart && <>{textPart} </>}
      <span className="inline-block bg-gradient-to-r from-black to-stone-300 text-white px-4 py-2 rounded-md">
        {buttonPart}
      </span>
    </Component>
  );
};

export default GradientTextButton;
