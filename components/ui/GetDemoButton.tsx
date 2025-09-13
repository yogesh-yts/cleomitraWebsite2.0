"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface GetDemoButtonProps {
  className?: string;
  children?: React.ReactNode;
  "aria-label"?: string;
}

const GetDemoButton: React.FC<GetDemoButtonProps> = ({
  className = "border border-black text-black hover:bg-black hover:text-white",
  children,
  "aria-label": ariaLabel,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  const baseStyles =
    "group relative px-8 py-3 rounded-full font-medium transition-all duration-500 ease-out cursor-pointer inline-flex items-center justify-center gap-2 hover:scale-[1.02] hover:-translate-y-1 active:scale-95 overflow-hidden";

  const combinedClassName = `${baseStyles} ${className}`;

  return (
    <button
      className={combinedClassName}
      onClick={handleClick}
      aria-label={ariaLabel || "Request a product demo"}
    >
      {/* Shimmer/sweep effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

      {/* Glow overlay */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-black/5 via-black/10 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <span className="relative z-10">{children || "Get a Demo"}</span>
    </button>
  );
};

export default GetDemoButton;
