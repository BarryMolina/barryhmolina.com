"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?:
    | "fadeUp"
    | "fadeIn"
    | "slideInLeft"
    | "slideInRight"
    | "scaleIn"
    | "rotateIn";
  delay?: number;
  duration?: number;
  threshold?: number;
}

const animations = {
  fadeUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },
  rotateIn: {
    initial: { opacity: 0, rotate: -10, scale: 0.9 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
  },
};

export function ScrollAnimation({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={animations[animation].initial}
      animate={
        isInView ? animations[animation].animate : animations[animation].initial
      }
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
