"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  target?: string;
  rel?: string;
}

export default function MagneticButton({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
  type = "button",
  ariaLabel,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.25, y: y * 0.25 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseClasses =
    "relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm tracking-tight transition-all duration-300 will-change-transform";

  const variantClasses = {
    primary:
      "bg-gold text-dark hover:bg-gold/90 shadow-[0_0_40px_-12px_rgba(201,169,110,0.4)]",
    secondary:
      "border border-white/[0.1] bg-white/[0.03] text-white hover:border-gold/30 hover:bg-white/[0.05] backdrop-blur-sm",
    ghost:
      "text-white hover:text-gold",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <motion.span
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="inline-flex items-center justify-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={combinedClasses}
        aria-label={ariaLabel}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      {content}
    </motion.button>
  );
}