"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/lib/constants";

/* ─── Realistic Desktop Browser ─── */
function DesktopBrowser({
  src,
  alt,
  className,
  delay,
  yRange,
  xOffset,
}: {
  src: string;
  alt: string;
  className?: string;
  delay: number;
  yRange: number;
  xOffset: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -yRange, 0] }}
      transition={{
        duration: 5 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay * 0.3,
      }}
      className={`absolute ${xOffset} bottom-0 w-[220px] sm:w-[280px] lg:w-[300px]`}
    >
      {/* Window shadow */}
      <div className="absolute -inset-2 rounded-2xl bg-black/40 blur-xl" />

      {/* Browser frame */}
      <div
        className={`relative rounded-xl border border-white/[0.1] bg-[#0a0a0a] shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden ${className || ""}`}
      >
        {/* Title bar */}
        <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#141414] border-b border-white/[0.06]">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          <div className="ml-3 h-3 flex-1 rounded-md bg-white/[0.06] flex items-center px-2">
            <span className="text-[8px] text-gray-500 truncate">
              scaleflow.in
            </span>
          </div>
        </div>

        {/* Screenshot */}
        <div className="relative aspect-[16/10] bg-[#0c0c0c]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 300px"
            className="object-cover object-top"
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Phone Mockup ─── */
function PhoneMockup() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0], rotate: [4, 5, 4] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -right-2 sm:right-4 top-4 sm:top-8 w-[90px] sm:w-[110px] z-20"
    >
      {/* Shadow */}
      <div className="absolute -inset-3 rounded-[2rem] bg-black/40 blur-2xl" />

      {/* Phone body */}
      <div className="relative rounded-[1.25rem] border-[3px] border-white/[0.12] bg-[#0a0a0a] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Notch */}
        <div className="relative z-10 flex justify-center pt-2 pb-0">
          <div className="w-8 h-4 rounded-b-xl bg-[#0a0a0a]" />
        </div>

        {/* Screen */}
        <div className="relative aspect-[9/16] bg-[#0c0c0c] -mt-1">
          <Image
            src="/images/projects/porville.png"
            alt="Mobile website preview"
            fill
            sizes="110px"
            className="object-cover object-top"
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Floating Accent Elements ─── */
function FloatingAccent({
  className,
  children,
  delay,
}: {
  className: string;
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -12, 0], opacity: [0.3, 0.6, 0.3] }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay * 0.5,
      }}
      className={`absolute ${className}`}
    >
      {children}
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
            className="relative h-[320px] sm:h-[380px] lg:h-[420px] hidden sm:block"
          >
            {/* Glow */}
            <div
              className="absolute inset-0 blur-3xl opacity-40"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(201,169,110,0.35) 0%, transparent 60%)",
              }}
            />

            {/* Center desktop browser */}
            <DesktopBrowser
              src="/images/projects/seamless-socials.png"
              alt="Seamless Socials website"
              delay={0}
              yRange={8}
              xOffset="left-1/2 -translate-x-1/2"
            />

            {/* Left floating browser */}
            <DesktopBrowser
              src="/images/projects/rishteforever.png"
              alt="Rishte Forever website"
              delay={1}
              yRange={6}
              xOffset="left-0 top-6"
            />

            {/* Right phone mockup */}
            <PhoneMockup />
          </motion.div>

          {/* Mobile fallback - single browser */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="sm:hidden relative h-[280px]"
          >
            <div className="relative rounded-xl border border-white/[0.1] bg-[#0a0a0a] shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden max-w-[320px] mx-auto">
              {/* Title bar */}
              <div className="flex items-center gap-1.5 px-3 py-2 bg-[#141414] border-b border-white/[0.06]">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                <div className="ml-3 h-3 flex-1 rounded-md bg-white/[0.06]" />
              </div>
              {/* Screenshot */}
              <div className="relative aspect-[16/10] bg-[#0c0c0c]">
                <Image
                  src="/images/projects/seamless-socials.png"
                  alt="Website preview"
                  fill
                  sizes="320px"
                  className="object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-0.5 h-1.5 rounded-full bg-gold/60" />
        </div>
      </motion.div>
    </section>
  );
}
