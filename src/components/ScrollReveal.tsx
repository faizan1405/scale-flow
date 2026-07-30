"use client";

import { motion, type MotionProps } from "framer-motion";

interface ScrollRevealProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  y = 24,
  ...props
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}