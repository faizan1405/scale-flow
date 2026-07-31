"use client";

import { motion } from "framer-motion";

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 28,
  duration = 0.7,
  amount = 0.2,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
        },
      }}
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}
