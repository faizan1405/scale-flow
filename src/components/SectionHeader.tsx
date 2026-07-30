"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  heading: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeader({
  label,
  heading,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClasses =
    align === "center"
      ? "text-center max-w-3xl mx-auto"
      : "text-left max-w-2xl";

  return (
    <div className={`${alignClasses} ${className}`}>
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="inline-block text-xs tracking-[0.2em] uppercase text-gold font-medium"
      >
        {label}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] font-[family-name:var(--font-heading)]"
      >
        {heading}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-gray-text text-lg leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}