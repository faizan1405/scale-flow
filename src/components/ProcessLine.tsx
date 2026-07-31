"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We discuss the business, audience, goals, required pages, features and visual direction.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We organize the website structure and create a custom visual experience suited to the brand.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build the responsive website, implement interactions and optimize it across devices.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We test the website, connect the domain, complete final checks and take it live.",
  },
];

export default function ProcessLine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20 md:mb-28">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs tracking-[0.2em] uppercase text-gold font-medium"
          >
            Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] font-[family-name:var(--font-heading)]"
          >
            From idea to live website.
          </motion.h2>
        </div>

        {/* Process timeline */}
        <div ref={containerRef} className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/[0.06] md:-translate-x-px" />

          {/* Animated progress line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-gold/60 to-gold/20 md:-translate-x-px origin-top"
            style={{ height: lineHeight }}
          />

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className={`relative flex items-center gap-8 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content card */}
                <div
                  className={`flex-1 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-12 md:pl-0`}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`relative rounded-2xl p-6 overflow-hidden ${
                      i % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                    style={{
                      background: "rgba(17,17,17,0.4)",
                      backdropFilter: "blur(16px) saturate(1.2)",
                      WebkitBackdropFilter: "blur(16px) saturate(1.2)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.03)",
                    }}
                  >
                    <div aria-hidden="true" className={`absolute top-0 left-0 right-0 h-px ${i % 2 === 0 ? "md:bg-gradient-to-l" : "bg-gradient-to-r"} from-transparent via-gold/30 to-transparent`} />
                    <div className={`flex items-start gap-3 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <span className="flex-shrink-0 h-8 w-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-xs font-bold text-gold font-[family-name:var(--font-heading)]">
                        {step.number}
                      </span>
                      <div className={i % 2 === 0 ? "md:text-right" : ""}>
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight font-[family-name:var(--font-heading)] text-white">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-gray-text text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Center dot with hover glow */}
                <HoverDot />

                {/* Spacer */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HoverDot() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow ring on hover */}
      <motion.div
        animate={hovered ? { opacity: 1, scale: 1.8 } : { opacity: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute w-16 h-16 rounded-full bg-gold/[0.08] blur-md pointer-events-none"
      />
      {/* Dot */}
      <motion.div
        animate={hovered ? { scale: 1.3, boxShadow: "0 0 16px rgba(201,169,110,0.45)" } : { scale: 1, boxShadow: "none" }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className="h-4 w-4 rounded-full bg-dark border-2 border-gold relative z-10"
      />
    </div>
  );
}
