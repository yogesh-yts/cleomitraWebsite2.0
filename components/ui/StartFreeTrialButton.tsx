"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface StartFreeTrialButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClose?: () => void;
}

const StartFreeTrialButton: React.FC<StartFreeTrialButtonProps> = ({
  className = "bg-black text-white hover:bg-black/90",
  children,
  onClose,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
    if (onClose) {
      onClose();
    }
  };

  const baseStyles =
    "group relative px-8 py-3 rounded-full font-medium transition-all duration-500 ease-out cursor-pointer inline-flex items-center justify-center gap-2 hover:scale-[1.02] hover:-translate-y-1 active:scale-95 overflow-hidden";

  const combinedClassName = `${baseStyles} ${className}`;

  return (
    <button
      className={combinedClassName}
      onClick={handleClick}
      aria-label="Start free trial - navigate to contact page"
    >
      {/* Shimmer/sweep effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

      {/* Glow overlay */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <span className="relative z-10">{children || "Start Free Trial"}</span>
    </button>
  );
};

export default StartFreeTrialButton;
