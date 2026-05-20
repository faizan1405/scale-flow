"use client";

import { motion } from "framer-motion";

const PHONE_NUMBER = "+919873721207";

export default function CallNowButton() {
  return (
    <motion.a
      href={`tel:${PHONE_NUMBER}`}
      aria-label="Call Scale Flow now"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-br from-gold to-gold-dark text-dark font-semibold shadow-lg shadow-gold/20 ring-1 ring-gold-light/40 hover:shadow-xl hover:shadow-gold/30 transition-shadow duration-300 h-14 w-14 sm:h-auto sm:w-auto sm:px-5 sm:py-3.5 justify-center"
      style={{
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {/* Pulsing ring */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-gold/40 animate-ping"
        style={{ animationDuration: "2.2s" }}
      />

      {/* Phone icon */}
      <span className="relative flex items-center justify-center h-6 w-6 sm:h-5 sm:w-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-full w-full"
        >
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
        </svg>
      </span>

      {/* Label — desktop only */}
      <span className="relative hidden sm:inline text-sm font-semibold tracking-tight font-[family-name:var(--font-heading)]">
        Call Now
      </span>
    </motion.a>
  );
}
