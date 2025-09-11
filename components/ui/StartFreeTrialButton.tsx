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
    "px-8 py-3 rounded-full font-medium transition-colors cursor-pointer inline-flex items-center justify-center gap-2";

  const combinedClassName = `${baseStyles}  ${className}`;

  return (
    <button className={combinedClassName} onClick={handleClick}>
      <span>{children || "Start Free Trial"}</span>
    </button>
  );
};

export default StartFreeTrialButton;
