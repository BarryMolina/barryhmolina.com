"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface StaggeredAnimationProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  animation?: "fadeUp" | "fadeIn" | "slideInLeft" | "slideInRight" | "scaleIn";
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
};

export function StaggeredAnimation({
  children,
  className = "",
  staggerDelay = 0.1,
  animation = "fadeUp",
  threshold = 0.1,
}: StaggeredAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold });

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div
            key={index}
            initial={animations[animation].initial}
            animate={
              isInView
                ? animations[animation].animate
                : animations[animation].initial
            }
            transition={{
              duration: 0.6,
              delay: index * staggerDelay,
              ease: "easeOut",
            }}
          >
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div
          initial={animations[animation].initial}
          animate={
            isInView
              ? animations[animation].animate
              : animations[animation].initial
          }
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
