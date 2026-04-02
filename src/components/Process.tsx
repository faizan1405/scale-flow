"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We study your business, audience, and goals. No guesswork — just clarity on what needs to be built.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Build",
    description:
      "We design your content strategy, ad funnels, and automation — all engineered to work as one connected engine.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.112A2.25 2.25 0 006 14.202V17.8a2.25 2.25 0 00.036 2.142l5.384 3.112a2.25 2.25 0 002.16 0l5.384-3.112A2.25 2.25 0 0018 17.8v-3.598a2.25 2.25 0 00-.036-2.142l-5.384-3.112a2.25 2.25 0 00-2.16 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Everything goes live. Content drops, campaigns activate, and automation starts capturing leads from day one.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "We refine based on real data. Every metric tracked, every bottleneck removed, every system tuned for growth.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
];

/* Animated SVG path connecting the steps on desktop */
function MapPath() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1000 520"
      preserveAspectRatio="none"
      fill="none"
    >
      {/* Glow filter */}
      <defs>
        <filter id="pathGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#E8D5A8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#C9A96E" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Path 1→2: Top curve from left to right */}
      <motion.path
        d="M 200 130 C 350 60, 650 60, 800 130"
        stroke="url(#pathGradient)"
        strokeWidth="2"
        strokeDasharray="12 8"
        filter="url(#pathGlow)"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
        className="animate-path-flow"
      />

      {/* Path 2→3: Right side curve going down */}
      <motion.path
        d="M 800 130 C 870 230, 870 300, 800 390"
        stroke="url(#pathGradient)"
        strokeWidth="2"
        strokeDasharray="12 8"
        filter="url(#pathGlow)"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
        className="animate-path-flow"
      />

      {/* Path 3→4: Bottom curve from right to left */}
      <motion.path
        d="M 800 390 C 650 460, 350 460, 200 390"
        stroke="url(#pathGradient)"
        strokeWidth="2"
        strokeDasharray="12 8"
        filter="url(#pathGlow)"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 1.3, ease: "easeInOut" }}
        className="animate-path-flow"
      />

      {/* Glowing nodes at each step position */}
      {[
        { cx: 200, cy: 130 },
        { cx: 800, cy: 130 },
        { cx: 800, cy: 390 },
        { cx: 200, cy: 390 },
      ].map((pos, i) => (
        <motion.g key={i}>
          {/* Outer glow */}
          <motion.circle
            cx={pos.cx}
            cy={pos.cy}
            r="12"
            fill="rgba(201, 169, 110, 0.15)"
            initial={{ scale: 0 }}
            whileInView={{ scale: [0, 1.5, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.5 }}
          />
          {/* Inner dot */}
          <motion.circle
            cx={pos.cx}
            cy={pos.cy}
            r="5"
            fill="#C9A96E"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.5 }}
          />
        </motion.g>
      ))}

      {/* Floating particles along the paths */}
      {[0.15, 0.4, 0.65, 0.85].map((_, i) => (
        <motion.circle
          key={`particle-${i}`}
          r="2"
          fill="#C9A96E"
          opacity="0.5"
          animate={{
            cx: [200 + i * 50, 500, 800 - i * 50],
            cy: [130, 100 + i * 20, 130],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 1.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}

export default function Process() {
  return (
    <section id="process" className="relative py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs tracking-widest uppercase text-gold font-medium"
          >
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight font-[family-name:var(--font-heading)]"
          >
            Your journey from zero
            <br />
            <span className="text-gold">to growth system.</span>
          </motion.h2>
        </div>

        {/* ===== DESKTOP MAP VIEW ===== */}
        <div
          className="hidden md:block mt-20 relative"
          style={{
            perspective: "1200px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, rotateX: 8 }}
            whileInView={{ opacity: 1, rotateX: 3 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Map background grid */}
            <div
              className="absolute inset-0 rounded-3xl opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(201,169,110,0.4) 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* SVG connecting paths */}
            <div className="relative" style={{ height: "520px" }}>
              <MapPath />

              {/* Step cards positioned on the map */}
              {steps.map((step, i) => {
                const positions = [
                  { top: "40px", left: "40px" },
                  { top: "40px", right: "40px" },
                  { bottom: "40px", right: "40px" },
                  { bottom: "40px", left: "40px" },
                ];
                const pos = positions[i];

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.4 }}
                    className="absolute w-[340px]"
                    style={pos}
                  >
                    <div className="group p-6 rounded-2xl border border-dark-border bg-dark-card/90 backdrop-blur-sm hover:border-gold/25 hover:shadow-[0_0_30px_rgba(201,169,110,0.08)] transition-all duration-500">
                      <div className="flex items-start gap-4">
                        {/* Map pin icon */}
                        <div className="relative flex-shrink-0">
                          <div className="h-12 w-12 rounded-full border-2 border-gold/30 bg-gold/[0.08] flex items-center justify-center text-gold group-hover:border-gold/50 group-hover:bg-gold/[0.15] transition-all duration-500 animate-glow-pulse">
                            {step.icon}
                          </div>
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-gradient-to-b from-gold/30 to-transparent" />
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs text-gold/50 tracking-widest font-medium font-[family-name:var(--font-heading)]">
                              STEP {step.number}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold tracking-tight font-[family-name:var(--font-heading)]">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-sm text-gray-text leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* ===== MOBILE VERTICAL VIEW ===== */}
        <div className="md:hidden mt-16">
          <div className="relative">
            {/* Vertical animated line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-6 top-0 bottom-0 w-px origin-top"
              style={{
                background: "linear-gradient(to bottom, rgba(201,169,110,0.5), rgba(201,169,110,0.1))",
              }}
            />

            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative pl-16"
                >
                  {/* Node on the line */}
                  <div className="absolute left-3.5 top-6 h-5 w-5 rounded-full border-2 border-gold/40 bg-dark flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-gold" />
                  </div>

                  <div className="p-5 rounded-xl border border-dark-border bg-dark-card">
                    <span className="text-[11px] text-gold/50 tracking-widest font-medium">
                      STEP {step.number}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold tracking-tight font-[family-name:var(--font-heading)]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-text leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
