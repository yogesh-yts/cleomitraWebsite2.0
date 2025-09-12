"use client";

import { useState, useEffect, ReactNode, ElementType } from "react";

interface SlideUpTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
  id?: string;
}

const SlideUpText = ({ 
  children, 
  delay = 0, 
  className = "", 
  as: Component = "div",
  id 
}: SlideUpTextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [elementId] = useState(`slideup-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    let animationTimeout: NodeJS.Timeout;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        const rect = entry.boundingClientRect;
        const isIntersecting = entry.isIntersecting;
        
        if (isIntersecting) {
          // Element is visible - slide in
          setIsVisible(true);
          setIsExiting(false);
          setHasBeenVisible(true);
        } else if (hasBeenVisible && rect.bottom < 0) {
          // Element has been visible before and is now above viewport - slide out
          setIsVisible(false);
          setIsExiting(true);
          
          // Reset after animation completes
          animationTimeout = setTimeout(() => {
            setIsExiting(false);
          }, 1000 + delay * 1000);
        }
      },
      { threshold: 0, rootMargin: "0px" }
    );

    const element = document.querySelector(`#${elementId}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      if (animationTimeout) {
        clearTimeout(animationTimeout);
      }
    };
  }, [elementId, delay, hasBeenVisible]);

  return (
    <>
      <style jsx>{`
        @keyframes slideInFromBottom {
          0% { transform: translateY(80px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes slideUp {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-80px); opacity: 0; }
        }

        .slideup-animated {
          animation: ${isVisible ? `slideInFromBottom 1s ease-out ${delay}s both` : isExiting ? `slideUp 1s ease-in ${delay}s both` : 'none'};
        }
      `}</style>
      
      <Component 
        id={id || elementId}
        className={`slideup-animated ${className}`}
      >
        {children}
      </Component>
    </>
  );
};

export default SlideUpText;