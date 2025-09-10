"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface StartFreeTrialButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const StartFreeTrialButton: React.FC<StartFreeTrialButtonProps> = ({
  className = "",
  children,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  const baseStyles =
    "px-8 py-3 rounded-full font-medium transition-colors cursor-pointer inline-flex items-center justify-center gap-2";
  const defaultStyles = "bg-background text-white hover:bg-gray-100";

  const combinedClassName = `${baseStyles} ${defaultStyles} ${className}`;

  return (
    <button className={combinedClassName} onClick={handleClick}>
      <span>{children || "Start Free Trial"}</span>
    </button>
  );
};

export default StartFreeTrialButton;
