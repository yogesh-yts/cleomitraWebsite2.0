"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface GetDemoButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const GetDemoButton: React.FC<GetDemoButtonProps> = ({
  className = "",
  children,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  const baseStyles =
    "px-8 py-3 rounded-full font-medium transition-colors cursor-pointer inline-flex items-center justify-center gap-2";
  const defaultStyles =
    "border border-background text-background hover:bg-background hover:text-foreground";

  const combinedClassName = `${baseStyles} ${defaultStyles} ${className}`;

  return (
    <button className={combinedClassName} onClick={handleClick}>
      <span>{children || "Get a Demo"}</span>
    </button>
  );
};

export default GetDemoButton;
