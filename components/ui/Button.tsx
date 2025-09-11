'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = ''
}) => {
  const baseStyles = 'box-border flex gap-2.5 items-center justify-center relative rounded-[40px] transition-colors font-normal font-[\'Lato\',_sans-serif] text-nowrap';
  
  const variantStyles = {
    primary: 'bg-transparent border border-black border-solid text-[#141414] hover:bg-gray-50',
    secondary: 'bg-neutral-800 text-white hover:bg-neutral-700'
  };

  const sizeStyles = {
    md: 'px-6 py-3 text-[18px]',
    lg: 'px-8 py-4 text-[20px]'
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;

  return (
    <button
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      data-node-id="11:236"
    >
      {children}
    </button>
  );
};

export default Button;