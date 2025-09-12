"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface GetDemoButtonProps {
  className?: string;
  children?: React.ReactNode;
  'aria-label'?: string;
}

const GetDemoButton: React.FC<GetDemoButtonProps> = ({
  className = "border border-black text-black hover:bg-black hover:text-white",
  children,
  'aria-label': ariaLabel,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  const baseStyles =
    "px-8 py-3 rounded-full font-medium transition-colors cursor-pointer inline-flex items-center justify-center gap-2";

  const combinedClassName = `${baseStyles}  ${className}`;

  return (
    <button 
      className={combinedClassName} 
      onClick={handleClick}
      aria-label={ariaLabel || "Request a product demo"}
    >
      <span>{children || "Get a Demo"}</span>
    </button>
  );
};

export default GetDemoButton;
