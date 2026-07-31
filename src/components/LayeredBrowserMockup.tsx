"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

/* ── Project data for the interactive carousel ─────────────────────── */
const PROJECTS = [
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
    industry: "Social Media Agency",
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
    industry: "Fashion & Lifestyle",
    type: "E-commerce Website",
  },
  {
    src: "/images/projects/porville.png",
    label: "porville.com",
    title: "Porville",
    industry: "Real Estate",
    type: "Business Website",
  },
  {
    src: "/images/projects/adv-ruksar-ahmad.png",
    label: "advruksarahmad.com",
    title: "Adv. Ruksar Ahmad",
    industry: "Legal Services",
    type: "Portfolio Website",
  },
];

/* ── 3D Wireframe shapes ──────────────────────────────────────────── */
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
        rotateZ: [0, 180],
        y: [0, -20, 0, 15, 0],
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ opacity }}
      >
        {type === "cube" && (
          <motion.g
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
          >
            <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold" />
            <rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold/40" />
          </motion.g>
        )}
        {type === "sphere" && (
          <motion.g
            animate={{ rotateZ: [0, 360] }}
            transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
          >
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold" />
            <ellipse cx="50" cy="50" rx="35" ry="15" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold/40" />
            <ellipse cx="50" cy="50" rx="15" ry="35" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold/40" />
          </motion.g>
        )}
        {type === "torus" && (
          <motion.g
            animate={{ rotateX: [0, 360] }}
            transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
          >
            <ellipse cx="50" cy="50" rx="35" ry="15" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold" />
            <ellipse cx="50" cy="50" rx="35" ry="15" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold/30"
              transform="rotate(60 50 50)" />
            <ellipse cx="50" cy="50" rx="35" ry="15" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold/30"
              transform="rotate(-60 50 50)" />
          </motion.g>
        )}
        {type === "pyramid" && (
          <motion.g
            animate={{ rotateY: [0, -360] }}
            transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
          >
            <polygon points="50,10 85,80 15,80" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold" />
            <line x1="50" y1="10" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5" className="text-gold/40" />
            <line x1="35" y1="45" x2="65" y2="45" stroke="currentColor" strokeWidth="0.5" className="text-gold/40" />
          </motion.g>
        )}
      </svg>
    </motion.div>
  );
}

/* ── Floating particles ───────────────────────────────────────────── */
function Particle({ delay, duration, x, y, size }: {
  delay: number;
  duration: number;
  x: string;
  y: string;
  size: number;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className="absolute rounded-full bg-gold/20 pointer-events-none"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{
        y: [0, -30, -60, -30, 0],
        opacity: [0, 0.6, 0, 0.4, 0],
        scale: [0.5, 1, 0.8, 1.2, 0.5],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

/* ── Grid lines background ────────────────────────────────────────── */
function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(201,169,110,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
      }}
    />
  );
}

/* ── Interactive browser card ─────────────────────────────────────── */
function BrowserCard({
  project,
  index,
  isActive,
  onClick,
  onHover,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
  onHover: (hovered: boolean) => void;
}) {
  const [imgLoaded, setImgLoaded] = useState(false);

  // Subtle floating animation unique to each card
  const floatAnim = {
    y: [0, -8, 0, -4, 0],
    x: [0, 3, -2, 0],
  };

  return (
    <motion.div
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onClick={onClick}
      className="relative cursor-pointer group"
      animate={isActive ? { scale: 1, zIndex: 20, y: 0 } : { scale: 0.88, zIndex: 5, y: 8 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Glow behind active card */}
      {isActive && (
        <div
          aria-hidden="true"
          className="absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl pointer-events-none"
        />
      )}

      <motion.div
        animate={isActive ? {} : floatAnim}
        transition={
          isActive
            ? { duration: 0 }
            : { duration: 6 + index * 0.5, repeat: Infinity, ease: "easeInOut" }
        }
        className={`rounded-xl overflow-hidden border transition-all duration-500 ${
          isActive
            ? "border-gold/30 shadow-2xl shadow-black/60 bg-dark-card"
            : "border-white/[0.06] bg-dark-card/80 shadow-lg shadow-black/40"
        }`}
        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      >
        {/* Browser chrome */}
        <div
          className={`flex items-center gap-2 px-3 py-2 border-b transition-colors duration-500 ${
            isActive ? "bg-[#0a0a0a] border-white/[0.08]" : "bg-[#0a0a0a]/80 border-white/[0.04]"
          }`}
        >
          <div className="flex gap-1" aria-hidden="true">
            <span className={`h-2 w-2 rounded-full transition-all duration-300 ${isActive ? "bg-[#FF5F57]/80" : "bg-white/20"}`} />
            <span className={`h-2 w-2 rounded-full transition-all duration-300 ${isActive ? "bg-[#FFBD2E]/80" : "bg-white/20"}`} />
            <span className={`h-2 w-2 rounded-full transition-all duration-300 ${isActive ? "bg-[#28CA41]/80" : "bg-white/20"}`} />
          </div>
          <div
            className={`flex-1 px-2 py-0.5 rounded border transition-colors duration-500 ${
              isActive ? "bg-white/[0.04] border-white/[0.06]" : "bg-white/[0.02] border-white/[0.03]"
            }`}
          >
            <p
              className={`text-[10px] text-center truncate transition-colors duration-300 ${
                isActive ? "text-gray-text" : "text-gray-text/60"
              }`}
            >
              {project.label}
            </p>
          </div>
        </div>

        {/* Screenshot */}
        <div className="aspect-[16/10] bg-[#0a0a0a] overflow-hidden relative">
          {!imgLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 border-2 border-gold/30 border-t-gold rounded-full"
              />
            </div>
          )}
          <motion.img
            src={project.src}
            alt={`${project.title} — ${project.type}`}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            animate={{
              scale: isActive ? 1 : 1.05,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`w-full h-full object-cover object-top transition-opacity duration-500 ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Overlay on hover / active */}
          <motion.div
            animate={{
              opacity: isActive ? 1 : 0,
            }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4"
          >
            <p className="text-white text-sm font-semibold">{project.title}</p>
            <p className="text-gold text-xs mt-0.5">{project.industry}</p>
            <div className="mt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-white/80 bg-white/10 rounded-full px-3 py-1 border border-white/10 group-hover:bg-gold/20 group-hover:border-gold/30 transition-all">
                View Project
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Navigation arrows ────────────────────────────────────────────── */
function NavArrow({ direction, onClick, disabled }: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
        disabled
          ? "border-white/[0.06] text-white/20 cursor-not-allowed"
          : "border-white/[0.12] text-white hover:border-gold/40 hover:text-gold hover:bg-gold/10"
      }`}
      aria-label={direction === "prev" ? "Previous project" : "Next project"}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d={direction === "prev" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.button>
  );
}

/* ── Dot indicators ───────────────────────────────────────────────── */
function DotIndicators({ count, active, onSelect }: {
  count: number;
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="flex items-center gap-2" role="tablist" aria-label="Project navigation">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          role="tab"
          aria-selected={i === active}
          aria-label={`Project ${i + 1}: ${PROJECTS[i].title}`}
          onClick={() => onSelect(i)}
          className={`transition-all duration-300 rounded-full ${
            i === active
              ? "w-8 h-2 bg-gold"
              : "w-2 h-2 bg-white/20 hover:bg-white/40"
          }`}
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  Main Component                                                     */
/* ═══════════════════════════════════════════════════════════════════ */
export default function LayeredBrowserMockup() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveringCard, setHoveringCard] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const current = PROJECTS[activeIndex];

  /* ── Auto-advance carousel ─────────────────────────────────────── */
  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
    }, 4000);
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [startAutoPlay, stopAutoPlay]);

  /* ── Mouse parallax ───────────────────────────────────────────── */
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = ((e.clientX / window.innerWidth) - 0.5) * 2;
      const y = ((e.clientY / window.innerHeight) - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const goTo = (i: number) => {
    setActiveIndex(i);
    startAutoPlay();
  };

  const goPrev = () => goTo((activeIndex - 1 + PROJECTS.length) % PROJECTS.length);
  const goNext = () => goTo((activeIndex + 1) % PROJECTS.length);

  /* ── 3D wireframe shapes ──────────────────────────────────────── */
  const shapes = [
    { type: "cube" as const, position: { x: "5%", y: "10%" }, speed: 20, opacity: 0.08, size: 80 },
    { type: "sphere" as const, position: { x: "85%", y: "8%" }, speed: 25, opacity: 0.06, size: 60 },
    { type: "torus" as const, position: { x: "92%", y: "75%" }, speed: 18, opacity: 0.07, size: 70 },
    { type: "pyramid" as const, position: { x: "3%", y: "70%" }, speed: 22, opacity: 0.06, size: 65 },
  ];

  /* ── Particles ────────────────────────────────────────────────── */
  const particles = [
    { delay: 0, duration: 8, x: "10%", y: "20%", size: 3 },
    { delay: 2, duration: 10, x: "25%", y: "60%", size: 2 },
    { delay: 4, duration: 7, x: "75%", y: "15%", size: 3 },
    { delay: 1, duration: 9, x: "80%", y: "55%", size: 2 },
    { delay: 3, duration: 11, x: "50%", y: "80%", size: 2.5 },
    { delay: 5, duration: 8, x: "15%", y: "85%", size: 1.5 },
    { delay: 2.5, duration: 9, x: "65%", y: "40%", size: 2 },
    { delay: 4.5, duration: 10, x: "40%", y: "10%", size: 1.5 },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-6xl mx-auto aspect-[16/10] select-none"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
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
        className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-gold/[0.04] blur-[80px] pointer-events-none"
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.3, 0.8, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-gold/[0.03] blur-[100px] pointer-events-none"
        animate={{ x: [0, -30, 40, 0], y: [0, 20, -25, 0], scale: [1, 0.8, 1.2, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Center active project (large, main card) ─────────────── */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] sm:w-[72%] md:w-[65%]"
        style={{
          zIndex: 10,
          rotateY: mousePos.x * 2,
          rotateX: -mousePos.y * 2,
          transition: "transform 0.15s ease-out",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.label}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -20 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-xl overflow-hidden border border-gold/20 bg-dark-card shadow-2xl shadow-black/70"
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-2.5 px-4 py-3 bg-[#0a0a0a] border-b border-white/[0.08]">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-[#FF5F57]/80" />
                <span className="h-3 w-3 rounded-full bg-[#FFBD2E]/80" />
                <span className="h-3 w-3 rounded-full bg-[#28CA41]/80" />
              </div>
              <div className="flex-1 px-4 py-1.5 rounded-md bg-white/[0.04] border border-white/[0.06]">
                <p className="text-xs text-gray-text text-center truncate">
                  {current.label}
                </p>
              </div>
              <motion.a
                href={`https://${current.label}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-[11px] text-gold hover:text-gold-light transition-colors border border-gold/20 rounded-full px-3 py-1 hover:bg-gold/10"
              >
                Visit Site
              </motion.a>
            </div>

            {/* Main screenshot */}
            <div className="aspect-[16/10] bg-[#0a0a0a] overflow-hidden relative group">
              <motion.img
                src={current.src}
                alt={`${current.title} — ${current.type}`}
                loading={activeIndex === 0 ? "eager" : "lazy"}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-full h-full object-cover object-top"
              />

              {/* Bottom info bar */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
              >
                <h3 className="text-white text-lg sm:text-xl font-semibold font-[family-name:var(--font-heading)]">
                  {current.title}
                </h3>
                <p className="text-gold text-xs sm:text-sm mt-1">
                  {current.industry} · {current.type}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* ── Side project cards (smaller, peek from sides) ─────────── */}
      {/* Left peek cards */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[22%] space-y-3" style={{ zIndex: 5 }}>
        {PROJECTS
          .filter((_, i) => i !== activeIndex)
          .slice(0, 2)
          .map((proj, i) => {
            const realIndex = PROJECTS.indexOf(proj);
            return (
              <motion.div
                key={proj.label}
                onClick={() => goTo(realIndex)}
                onMouseEnter={() => setHoveringCard(true)}
                onMouseLeave={() => setHoveringCard(false)}
                whileHover={{ scale: 1.03 }}
                className="cursor-pointer rounded-lg overflow-hidden border border-white/[0.06] bg-dark-card/80 shadow-lg shadow-black/30 hover:border-gold/20 transition-all duration-300"
              >
                <div className="aspect-[16/10] bg-[#0a0a0a] overflow-hidden">
                  <img
                    src={proj.src}
                    alt={proj.label}
                    loading="lazy"
                    className="w-full h-full object-cover object-top opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="px-2 py-1.5">
                  <p className="text-[10px] text-gray-text truncate">{proj.label}</p>
                </div>
              </motion.div>
            );
          })}
      </div>

      {/* Right peek cards */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[22%] space-y-3" style={{ zIndex: 5 }}>
        {PROJECTS
          .filter((_, i) => i !== activeIndex)
          .slice(2, 4)
          .map((proj) => {
            const realIndex = PROJECTS.indexOf(proj);
            return (
              <motion.div
                key={proj.label}
                onClick={() => goTo(realIndex)}
                onMouseEnter={() => setHoveringCard(true)}
                onMouseLeave={() => setHoveringCard(false)}
                whileHover={{ scale: 1.03 }}
                className="cursor-pointer rounded-lg overflow-hidden border border-white/[0.06] bg-dark-card/80 shadow-lg shadow-black/30 hover:border-gold/20 transition-all duration-300"
              >
                <div className="aspect-[16/10] bg-[#0a0a0a] overflow-hidden">
                  <img
                    src={proj.src}
                    alt={proj.label}
                    loading="lazy"
                    className="w-full h-full object-cover object-top opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="px-2 py-1.5">
                  <p className="text-[10px] text-gray-text truncate">{proj.label}</p>
                </div>
              </motion.div>
            );
          })}
      </div>

      {/* ── Navigation controls ──────────────────────────────────── */}
      <div className="absolute -bottom-2 sm:bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <NavArrow direction="prev" onClick={goPrev} disabled={false} />
        <DotIndicators count={PROJECTS.length} active={activeIndex} onSelect={goTo} />
        <NavArrow direction="next" onClick={goNext} disabled={false} />
      </div>

      {/* ── Project counter badge ────────────────────────────────── */}
      <motion.div
        className="hidden sm:flex absolute -top-3 right-4 items-center gap-1.5 px-3 py-1 rounded-full bg-dark/80 border border-white/[0.08] backdrop-blur-sm z-20"
        key={activeIndex}
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-gold text-xs font-semibold">{String(activeIndex + 1).padStart(2, "0")}</span>
        <span className="text-gray-text text-xs">/ {String(PROJECTS.length).padStart(2, "0")}</span>
      </motion.div>
    </div>
  );
}
