"use client";

import { motion } from "framer-motion";

const windows = [
  {
    src: "/images/projects/seamless-socials.png",
    label: "seamlesssocials.in",
    rotate: -4,
    zIndex: 2,
    delay: 0.2,
    offset: { x: "5%", y: "15%" },
    w: "70%",
    parallax: 12,
  },
  {
    src: "/images/projects/rishteforever.png",
    label: "rishteforever.com",
    rotate: 2,
    zIndex: 1,
    delay: 0.4,
    offset: { x: "right-[5%]", y: "bottom-[10%]" },
    w: "70%",
    parallax: 8,
  },
];

export default function LayeredBrowserMockup() {
  return (
    <div
      className="relative w-full max-w-5xl mx-auto aspect-[16/10]"
      onMouseMove={(e) => {
        const x = ((e.clientX / window.innerWidth) - 0.5) * 2;
        const y = ((e.clientY / window.innerHeight) - 0.5) * 2;
        document.documentElement.style.setProperty("--mx", `${x}px`);
        document.documentElement.style.setProperty("--my", `${y}px`);
      }}
      onMouseLeave={() => {
        document.documentElement.style.setProperty("--mx", "0px");
        document.documentElement.style.setProperty("--my", "0px");
      }}
    >
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,110,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating animated orbs */}
      <motion.div
        aria-hidden="true"
        className="absolute top-[20%] left-[10%] w-24 h-24 rounded-full bg-gold/[0.06] blur-[60px] pointer-events-none"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 25, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-[15%] right-[15%] w-32 h-32 rounded-full bg-gold/[0.05] blur-[80px] pointer-events-none"
        animate={{
          x: [0, -25, 20, 0],
          y: [0, 15, -30, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Layered browser windows with CSS custom property parallax */}
      {windows.map((win, i) => (
        <motion.div
          key={win.label}
          initial={{ opacity: 0, y: 40, rotate: 0, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, rotate: win.rotate, scale: 1 }}
          transition={{ duration: 1, delay: win.delay, ease: [0.25, 0.1, 0.25, 1] }}
          className={`absolute ${win.offset.x} ${win.offset.y} w-[${win.w}]`}
          style={{
            zIndex: win.zIndex,
            transform: `translate(calc(var(--mx, 0px) * ${win.parallax}), calc(var(--my, 0px) * ${win.parallax}))`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-dark-card shadow-2xl shadow-black/60">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-3 py-2 bg-[#0a0a0a] border-b border-white/[0.06]">
              <div className="flex gap-1" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-[#FF5F57]/70" />
                <span className="h-2 w-2 rounded-full bg-[#FFBD2E]/70" />
                <span className="h-2 w-2 rounded-full bg-[#28CA41]/70" />
              </div>
              <div className="flex-1 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.04]">
                <p className="text-[10px] text-gray-text text-center truncate">
                  {win.label}
                </p>
              </div>
            </div>
            {/* Screenshot */}
            <div className="aspect-[16/10] bg-[#0a0a0a] overflow-hidden">
              <img
                src={win.src}
                alt={win.label}
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      ))}

      {/* Main central window */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[70%]"
        style={{
          zIndex: 3,
          transform: `translate(-50%, -50%) translate(calc(var(--mx, 0px) * 5), calc(var(--my, 0px) * 5))`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div className="rounded-xl overflow-hidden border border-white/[0.12] bg-dark-card shadow-2xl shadow-black/70">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0a0a] border-b border-white/[0.08]">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]/80" />
              <span className="h-3 w-3 rounded-full bg-[#FFBD2E]/80" />
              <span className="h-3 w-3 rounded-full bg-[#28CA41]/80" />
            </div>
            <div className="flex-1 px-4 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
              <p className="text-xs text-gray-text text-center truncate">
                joinscaleflow.in
              </p>
            </div>
          </div>
          {/* Main screenshot */}
          <div className="aspect-[16/10] bg-[#0a0a0a] overflow-hidden">
            <img
              src="/images/projects/zassports.png"
              alt="ScaleFlow website project"
              loading="eager"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </motion.div>

      {/* Ambient lighting that breathes */}
      <motion.div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/5 rounded-full blur-3xl pointer-events-none"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
