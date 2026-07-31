"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Project data ─────────────────────────────────────────────────── */
const SLIDES = [
  {
    src: "/images/projects/zassports.png",
    label: "zasports.in",
    title: "Zasports",
    industry: "Sports Equipment",
    type: "E-commerce Website",
  },
  {
    src: "/images/projects/seamless-socials.png",
    label: "seamlesssocials.in",
    title: "Seamless Socials",
    industry: "Matrimonial Services",
    type: "Business Website",
  },
  {
    src: "/images/projects/rishteforever.png",
    label: "rishteforever.com",
    title: "Rishte Forever",
    industry: "Matrimonial Services",
    type: "Business Website",
  },
  {
    src: "/images/projects/amahle-blue.png",
    label: "amahleblue.com",
    title: "Amahle Blue",
    industry: "Commercial Cleaning",
    type: "E-commerce Website",
  },
  {
    src: "/images/projects/porville.png",
    label: "porville.com",
    title: "Porville",
    industry: "Food & Grocery",
    type: "E-commerce Website",
  },
  {
    src: "/images/projects/adv-ruksar-ahmad.png",
    label: "advruksarahmad.com",
    title: "Adv. Ruksar Ahmad",
    industry: "Legal Services",
    type: "Portfolio Website",
  },
];

/* ── 3D wireframe shapes ──────────────────────────────────────────── */
function WireframeShape({ type, position, speed, opacity, size }: {
  type: "cube" | "sphere" | "torus" | "pyramid";
  position: { x: string; y: string };
  speed: number;
  opacity: number;
  size: number;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className="absolute pointer-events-none"
      style={{ left: position.x, top: position.y, width: size, height: size }}
      animate={{
        rotateX: [0, 360],
        rotateY: [0, 360],
        y: [0, -20, 0, 15, 0],
      }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full" style={{ opacity }}>
        {type === "cube" && (
          <motion.g animate={{ rotateY: [0, 360] }} transition={{ duration: speed, repeat: Infinity, ease: "linear" }}>
            <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold" />
            <rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold/40" />
          </motion.g>
        )}
        {type === "sphere" && (
          <motion.g animate={{ rotateZ: [0, 360] }} transition={{ duration: speed, repeat: Infinity, ease: "linear" }}>
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold" />
            <ellipse cx="50" cy="50" rx="35" ry="15" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold/40" />
            <ellipse cx="50" cy="50" rx="15" ry="35" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold/40" />
          </motion.g>
        )}
        {type === "torus" && (
          <motion.g animate={{ rotateX: [0, 360] }} transition={{ duration: speed, repeat: Infinity, ease: "linear" }}>
            <ellipse cx="50" cy="50" rx="35" ry="15" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold" />
            <ellipse cx="50" cy="50" rx="35" ry="15" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold/30" transform="rotate(60 50 50)" />
            <ellipse cx="50" cy="50" rx="35" ry="15" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold/30" transform="rotate(-60 50 50)" />
          </motion.g>
        )}
        {type === "pyramid" && (
          <motion.g animate={{ rotateY: [0, -360] }} transition={{ duration: speed, repeat: Infinity, ease: "linear" }}>
            <polygon points="50,10 85,80 15,80" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold" />
            <line x1="50" y1="10" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5" className="text-gold/40" />
          </motion.g>
        )}
      </svg>
    </motion.div>
  );
}

/* ── Floating particles ───────────────────────────────────────────── */
function Particle({ delay, duration, x, y, size }: {
  delay: number; duration: number; x: string; y: string; size: number;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className="absolute rounded-full pointer-events-none"
      style={{ left: x, top: y, width: size, height: size, background: "rgba(201,169,110,0.25)" }}
      animate={{
        y: [0, -30, -60, -30, 0],
        opacity: [0, 0.5, 0, 0.3, 0],
        scale: [0.5, 1, 0.8, 1.2, 0.5],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ── Grid background ──────────────────────────────────────────────── */
function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(201,169,110,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.025) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
      }}
    />
  );
}

/* ── Main slideshow component ─────────────────────────────────────── */
export default function LayeredBrowserMockup() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const current = SLIDES[activeIndex];

  const goTo = useCallback((i: number) => {
    setActiveIndex(i);
    setImgLoaded(false);
  }, []);

  const goNext = useCallback(() => {
    goTo((activeIndex + 1) % SLIDES.length);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo((activeIndex - 1 + SLIDES.length) % SLIDES.length);
  }, [activeIndex, goTo]);

  /* Auto-advance every 3 seconds */
  useEffect(() => {
    intervalRef.current = setInterval(goNext, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [goNext]);

  /* Reset image loaded state when slide changes */
  useEffect(() => {
    setImgLoaded(false);
  }, [activeIndex]);

  /* ── 3D background elements ────────────────────────────────────── */
  const shapes = [
    { type: "cube" as const, position: { x: "5%", y: "8%" }, speed: 22, opacity: 0.07, size: 70 },
    { type: "sphere" as const, position: { x: "88%", y: "6%" }, speed: 26, opacity: 0.05, size: 55 },
    { type: "torus" as const, position: { x: "90%", y: "78%" }, speed: 19, opacity: 0.06, size: 60 },
    { type: "pyramid" as const, position: { x: "3%", y: "72%" }, speed: 23, opacity: 0.05, size: 58 },
  ];

  const particles = [
    { delay: 0, duration: 8, x: "10%", y: "20%", size: 3 },
    { delay: 2, duration: 10, x: "25%", y: "55%", size: 2 },
    { delay: 4, duration: 7, x: "78%", y: "15%", size: 3 },
    { delay: 1, duration: 9, x: "82%", y: "60%", size: 2 },
    { delay: 3, duration: 11, x: "50%", y: "82%", size: 2.5 },
    { delay: 5, duration: 8, x: "15%", y: "88%", size: 1.5 },
    { delay: 2.5, duration: 9, x: "68%", y: "42%", size: 2 },
    { delay: 4.5, duration: 10, x: "42%", y: "8%", size: 1.5 },
  ];

  return (
    <div
      className="relative w-full max-w-6xl mx-auto select-none"
      style={{ aspectRatio: "16/10" }}
      onMouseEnter={() => intervalRef.current && clearInterval(intervalRef.current)}
      onMouseLeave={() => {
        intervalRef.current = setInterval(goNext, 3000);
      }}
    >
      {/* Background layers */}
      <GridBackground />

      {/* 3D wireframe shapes */}
      {shapes.map((shape, i) => (
        <WireframeShape key={i} {...shape} />
      ))}

      {/* Floating particles */}
      {particles.map((p, i) => (
        <Particle key={i} {...p} />
      ))}

      {/* Ambient glow orbs */}
      <motion.div
        aria-hidden="true"
        className="absolute top-[30%] left-[20%] w-48 h-48 rounded-full pointer-events-none"
        style={{ background: "rgba(201,169,110,0.05)", filter: "blur(80px)" }}
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.3, 0.8, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-[25%] right-[20%] w-56 h-56 rounded-full pointer-events-none"
        style={{ background: "rgba(201,169,110,0.04)", filter: "blur(100px)" }}
        animate={{ x: [0, -30, 40, 0], y: [0, 20, -25, 0], scale: [1, 0.8, 1.2, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Main slideshow card ───────────────────────────────────── */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.label}
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.03, y: -16 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(180deg, rgba(17,17,17,0.6) 0%, rgba(10,10,10,0.9) 100%)",
              backdropFilter: "blur(20px) saturate(1.3)",
              WebkitBackdropFilter: "blur(20px) saturate(1.3)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 32px 64px -12px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04) inset",
            }}
          >
            {/* Browser chrome bar */}
            <div
              className="flex items-center gap-2.5 px-4 py-3 relative z-10"
              style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(12px)" }}
            >
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]/80" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]/80" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]/80" />
              </div>
              <div
                className="flex-1 px-4 py-1.5 rounded-lg text-center"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <p className="text-xs text-gray-text/70 truncate">{current.label}</p>
              </div>
              <a
                href={`https://${current.label}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-gold hover:text-gold-light transition-colors px-3 py-1 rounded-full"
                style={{ background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.15)" }}
              >
                Visit Site
              </a>
            </div>

            {/* Screenshot */}
            <div className="relative aspect-[16/10] bg-[#0a0a0a] overflow-hidden">
              {!imgLoaded && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full"
                  />
                </div>
              )}

              <motion.img
                src={current.src}
                alt={`${current.title} — ${current.type}`}
                loading={activeIndex === 0 ? "eager" : "lazy"}
                onLoad={() => setImgLoaded(true)}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: imgLoaded ? 1 : 0, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover object-top"
              />

              {/* Bottom gradient info bar */}
              <div
                className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)" }}
              >
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-white text-lg sm:text-xl font-semibold font-[family-name:var(--font-heading)]">
                      {current.title}
                    </h3>
                    <p className="text-gold text-xs sm:text-sm mt-1">
                      {current.industry} · {current.type}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gold text-xs font-semibold font-[family-name:var(--font-heading)]">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="text-gray-text/50 text-xs">/ {String(SLIDES.length).padStart(2, "0")}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Navigation arrows ─────────────────────────────────────── */}
      <button
        onClick={goPrev}
        aria-label="Previous project"
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center transition-all duration-300 hover:border-gold/40 hover:text-gold"
        style={{
          background: "rgba(17,17,17,0.5)",
          backdropFilter: "blur(12px) saturate(1.2)",
          WebkitBackdropFilter: "blur(12px) saturate(1.2)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
          color: "#fff",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={goNext}
        aria-label="Next project"
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center transition-all duration-300 hover:border-gold/40 hover:text-gold"
        style={{
          background: "rgba(17,17,17,0.5)",
          backdropFilter: "blur(12px) saturate(1.2)",
          WebkitBackdropFilter: "blur(12px) saturate(1.2)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
          color: "#fff",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* ── Dot indicators ────────────────────────────────────────── */}
      <div
        className="absolute -bottom-2 sm:bottom-0 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 px-4 py-2.5 rounded-full"
        style={{
          background: "rgba(17,17,17,0.5)",
          backdropFilter: "blur(16px) saturate(1.3)",
          WebkitBackdropFilter: "blur(16px) saturate(1.3)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
        }}
        role="tablist"
        aria-label="Project slideshow navigation"
      >
        {SLIDES.map((slide, i) => (
          <button
            key={slide.label}
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={`${i + 1}. ${slide.title} - ${slide.industry}`}
            onClick={() => goTo(i)}
            className="rounded-full transition-all duration-400 cursor-pointer"
            style={{
              width: i === activeIndex ? "24px" : "8px",
              height: "8px",
              background: i === activeIndex ? "#C9A96E" : "rgba(255,255,255,0.2)",
            }}
          />
        ))}
      </div>
    </div>
  );
}