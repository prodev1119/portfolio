"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  animationType?: "float" | "pulse" | "bounce" | "none";
  animationDuration?: number;
  animationDelay?: number;
}

export default function AnimatedImage({ 
  src, 
  alt, 
  width, 
  height, 
  className,
  animationType = "float",
  animationDuration = 3,
  animationDelay = 0
}: AnimatedImageProps) {
  const animations = {
    float: {
      animate: { y: [0, -10, 0] },
      transition: { 
        repeat: Infinity, 
        duration: animationDuration, 
        ease: "easeInOut",
        delay: animationDelay 
      }
    },
    pulse: {
      animate: { scale: [1, 1.05, 1] },
      transition: { 
        repeat: Infinity, 
        duration: animationDuration, 
        ease: "easeInOut",
        delay: animationDelay 
      }
    },
    bounce: {
      animate: { y: [0, -20, 0] },
      transition: { 
        repeat: Infinity, 
        duration: animationDuration * 0.6, 
        ease: "easeOut",
        delay: animationDelay 
      }
    },
    none: {
      animate: {},
      transition: {}
    }
  };

  const selectedAnimation = animations[animationType];

  return (
    <motion.div
      {...selectedAnimation}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority
      />
    </motion.div>
  );
} 