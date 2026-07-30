"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/constants";

/* Pure-CSS browser mockup with a stylized website layout inside */
function BrowserFrame({
  variant,
  rotation,
  translateY,
}: {
  variant: "design" | "shop" | "build";
  rotation: number;
  translateY: number;
}) {
  return (
    <motion.div
      style={{ rotate: rotation, y: translateY }}
      className="absolute rounded-xl border border-white/[0.08] bg-[#0f0f0f] shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden"
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.06] bg-[#161616]">
        <span className="h-2 w-2 rounded-full bg-red-400/60" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
        <span className="h-2 w-2 rounded-full bg-green-400/60" />
        <div className="ml-3 h-4 flex-1 rounded bg-white/[0.05]" />
      </div>

      {/* Page content variants */}
      <div className="p-3 sm:p-4 h-44 sm:h-56">
        {variant === "design" && (
          <div className="space-y-2">
            <div className="h-2 w-12 rounded bg-gold/40" />
            <div className="h-5 w-3/4 rounded bg-white/80" />
            <div className="h-2 w-full rounded bg-white/20" />
            <div className="h-2 w-5/6 rounded bg-white/15" />
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              <div className="aspect-square rounded bg-gold/30" />
              <div className="aspect-square rounded bg-white/15" />
              <div className="aspect-square rounded bg-white/15" />
            </div>
          </div>
        )}
        {variant === "shop" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="h-3 w-12 rounded bg-white/70" />
              <div className="h-3 w-3 rounded-full bg-gold/40" />
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="rounded bg-white/10 p-2">
                <div className="aspect-[4/3] rounded bg-amber-500/30 mb-1.5" />
                <div className="h-1.5 w-2/3 rounded bg-white/50" />
                <div className="h-1.5 w-1/2 rounded bg-gold/40 mt-1" />
              </div>
              <div className="rounded bg-white/10 p-2">
                <div className="aspect-[4/3] rounded bg-emerald-500/30 mb-1.5" />
                <div className="h-1.5 w-2/3 rounded bg-white/50" />
                <div className="h-1.5 w-1/2 rounded bg-gold/40 mt-1" />
              </div>
            </div>
          </div>
        )}
        {variant === "build" && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-5 w-5 rounded-full bg-gold/40" />
              <div className="h-2 w-20 rounded bg-white/60" />
            </div>
            <div className="space-y-1.5">
              <div className="h-1.5 w-full rounded bg-violet-500/30" />
              <div className="h-1.5 w-4/5 rounded bg-violet-500/30" />
              <div className="h-1.5 w-3/5 rounded bg-violet-500/30" />
            </div>
            <div className="mt-3 flex gap-1.5">
              <div className="h-6 flex-1 rounded bg-gold/60" />
              <div className="h-6 w-12 rounded bg-white/10" />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 40%, rgba(201,169,110,0.06) 0%, transparent 60%), radial-gradient(circle at 70% 60%, rgba(201,169,110,0.04) 0%, transparent 50%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-28 sm:pt-32 pb-20 sm:pb-24 w-full">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/20 bg-gold/[0.06] text-gold text-xs tracking-[0.15em] uppercase font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                Website Design & Development
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-7 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] font-[family-name:var(--font-heading)]"
            >
              We build websites
              <br />
              that make businesses{" "}
              <span
                className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent"
                style={{ backgroundSize: "200% 200%" }}
              >
                impossible to ignore.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-6 text-base sm:text-lg text-gray-text max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Custom, fast and mobile-first websites designed to build trust,
              showcase your business and turn visitors into genuine enquiries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-9 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <Link
                href="#work"
                className="group relative inline-flex h-12 w-full sm:w-auto items-center justify-center px-7 rounded-full bg-gold text-dark font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,110,0.3)]"
              >
                <span className="relative z-10">View Our Work</span>
                <div className="absolute inset-0 bg-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-12 w-full sm:w-auto items-center justify-center px-7 rounded-full border border-white/15 text-white text-base font-medium hover:border-gold/40 hover:bg-gold/[0.04] transition-all duration-300"
              >
                Start Your Website
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-x-3 gap-y-1 flex-wrap text-[11px] sm:text-xs text-gray-text tracking-[0.15em] uppercase"
            >
              <span>Custom Design</span>
              <span className="text-gold/40">·</span>
              <span>Responsive Development</span>
              <span className="text-gold/40">·</span>
              <span>Performance Focused</span>
            </motion.div>
          </div>

          {/* Browser mockup cluster */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative h-[340px] sm:h-[420px] lg:h-[460px]"
          >
            {/* Glow */}
            <div
              className="absolute inset-0 blur-3xl opacity-30"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(201,169,110,0.4) 0%, transparent 65%)",
              }}
            />

            {/* Center main mockup */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[320px]"
            >
              <BrowserFrame variant="design" rotation={-1} translateY={0} />
            </motion.div>

            {/* Top-left smaller mockup */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-4 w-[150px] sm:w-[200px] z-10"
            >
              <BrowserFrame variant="shop" rotation={-6} translateY={0} />
            </motion.div>

            {/* Bottom-right mockup */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 bottom-4 w-[160px] sm:w-[210px] z-10"
            >
              <BrowserFrame variant="build" rotation={5} translateY={0} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}