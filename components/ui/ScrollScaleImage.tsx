"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ScrollScaleImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  wrapperClassName?: string;
  priority?: boolean;
  quality?: number;
}

const ScrollScaleImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  wrapperClassName = "",
  priority = false,
  quality = 100,
}: ScrollScaleImageProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Transform scale from 0.5 to 1 as it enters viewport, then back to 0.5 as it exits
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.5]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.3]
  );

  return (
    <motion.div 
      ref={ref} 
      className={`overflow-hidden ${wrapperClassName}`}
      style={{ scale, opacity }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      <div className="will-change-transform">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          priority={priority}
          quality={quality}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        />
      </div>
    </motion.div>
  );
};

export default ScrollScaleImage;
