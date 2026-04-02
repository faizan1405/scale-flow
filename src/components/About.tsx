"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    value: "50+",
    label: "Brands Scaled",
  },
  {
    value: "3+",
    label: "Years Experience",
  },
  {
    value: "10M+",
    label: "Ad Spend Managed",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold/[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left: Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-3 rounded-3xl border border-gold/10 -z-10" />
              <div className="absolute -inset-6 rounded-3xl border border-gold/[0.04] -z-20" />

              {/* Corner accents */}
              <div className="absolute -top-1.5 -left-1.5 w-6 h-6 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
              <div className="absolute -top-1.5 -right-1.5 w-6 h-6 border-t-2 border-r-2 border-gold/40 rounded-tr-lg" />
              <div className="absolute -bottom-1.5 -left-1.5 w-6 h-6 border-b-2 border-l-2 border-gold/40 rounded-bl-lg" />
              <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 border-b-2 border-r-2 border-gold/40 rounded-br-lg" />

              {/* Image container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-dark-card border border-dark-border">
                {/* Replace this div with your image:
                    <Image src="/your-photo.jpg" alt="Faizan" fill className="object-cover" /> */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  {/* Placeholder icon */}
                  <div className="h-20 w-20 rounded-full bg-gold/[0.08] border border-gold/15 flex items-center justify-center">
                    <svg className="w-10 h-10 text-gold/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-text/40 tracking-wide">Your photo here</span>
                </div>

                {/* Gradient overlays for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-4 -right-4 sm:bottom-6 sm:-right-6 bg-dark-card border border-gold/20 rounded-2xl px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white font-[family-name:var(--font-heading)]">
                      Growth Strategist
                    </p>
                    <p className="text-xs text-gold/70">Delhi, India</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="inline-block text-xs tracking-widest uppercase text-gold font-medium"
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight font-[family-name:var(--font-heading)]"
            >
              I don&apos;t just run ads.
              <br />
              <span className="text-gold">I build growth engines.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-7 space-y-5"
            >
              <p className="text-gray-text text-[16px] leading-relaxed">
                Most businesses don&apos;t have a marketing problem — they have a{" "}
                <span className="text-white font-medium">systems problem</span>.
                Disconnected content, random ad spend, and zero automation. I fix that.
              </p>
              <p className="text-gray-text text-[16px] leading-relaxed">
                I help brands grow by combining{" "}
                <span className="text-white font-medium">social media content creation</span>,{" "}
                <span className="text-white font-medium">AI-powered automation</span>, and{" "}
                <span className="text-white font-medium">performance-driven Meta Ads</span>{" "}
                into one unified system. No fluff. No guesswork. Just a proven framework
                that turns attention into revenue.
              </p>
              <p className="text-gray-text text-[16px] leading-relaxed">
                From building scroll-stopping Reels to engineering ad funnels that
                convert — every piece of the puzzle is designed to work together, so your
                brand doesn&apos;t just get noticed, it gets{" "}
                <span className="text-white font-medium">results</span>.
              </p>
            </motion.div>

            {/* Signature line */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="h-px w-10 bg-gold/40" />
              <p className="text-white font-[family-name:var(--font-heading)] font-semibold tracking-tight">
                Faizan — Founder, Scale Flow
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 grid grid-cols-3 gap-4"
            >
              {highlights.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="relative p-4 sm:p-5 rounded-xl border border-dark-border bg-dark-card/60 text-center group hover:border-gold/15 transition-all duration-500"
                >
                  <span className="block text-2xl sm:text-3xl font-bold text-gold font-[family-name:var(--font-heading)]">
                    {stat.value}
                  </span>
                  <span className="block mt-1 text-[11px] sm:text-xs text-gray-text uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
