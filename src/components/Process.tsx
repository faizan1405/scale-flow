"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We audit your current marketing, business model, and goals. No guesswork — just clarity on where the gaps are and what needs to be built.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "We architect and build your growth system — content strategy, ad funnels, automation flows — all engineered to work as one connected engine.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Everything goes live with precision. Content drops, campaigns activate, and automation begins capturing and converting leads from day one.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "We continuously refine based on real data. Every metric is tracked, every bottleneck is removed, and every system is tuned for maximum output.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
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
            From zero to system
            <br />
            <span className="text-gray-text">in four steps.</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="mt-20 grid gap-0 md:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+24px)] right-0 h-px bg-dark-border group-hover:bg-gold/20 transition-colors duration-500" />
              )}

              <div className="relative p-6 md:p-8 text-center">
                {/* Number circle */}
                <div className="mx-auto h-16 w-16 rounded-full border border-dark-border bg-dark-card flex items-center justify-center group-hover:border-gold/30 transition-colors duration-500">
                  <span className="text-lg font-semibold text-gold font-[family-name:var(--font-heading)]">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight font-[family-name:var(--font-heading)]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm text-gray-text leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
