"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We discuss the business, audience, goals, required pages, features and visual direction. No guesswork — just clarity on what needs to be built.",
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

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
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
            From idea{" "}
            <span className="text-gold">to live website.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-gray-text text-lg max-w-xl mx-auto leading-relaxed"
          >
            A straightforward process that takes you from a conversation to a
            live, professional website.
          </motion.p>
        </div>

        {/* Desktop — horizontal flow */}
        <div className="hidden md:block mt-20 relative">
          {/* Connecting line */}
          <div className="relative flex items-center justify-between">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0"
              style={{ transformOrigin: "center" }}
            />

            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                className="relative flex-1 flex flex-col items-center text-center px-4"
              >
                {/* Node */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold/30 bg-dark">
                  <span className="text-sm font-bold text-gold font-[family-name:var(--font-heading)]">
                    {step.number}
                  </span>
                </div>

                {/* Content card */}
                <div className="mt-6 p-6 rounded-xl border border-white/[0.06] bg-dark-card w-full max-w-[220px]">
                  <h3 className="text-base font-semibold tracking-tight font-[family-name:var(--font-heading)] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-gray-text leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile — vertical timeline */}
        <div className="md:hidden mt-14">
          <div className="relative">
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-6 top-0 bottom-0 w-px origin-top"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(201,169,110,0.5), rgba(201,169,110,0.1))",
              }}
            />

            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative pl-16"
                >
                  {/* Node */}
                  <div className="absolute left-3.5 top-2 h-5 w-5 rounded-full border-2 border-gold/40 bg-dark flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-gold" />
                  </div>

                  <div className="p-5 rounded-xl border border-white/[0.06] bg-dark-card">
                    <span className="text-[11px] text-gold/50 tracking-[0.15em] font-medium font-[family-name:var(--font-heading)]">
                      STEP {step.number}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold tracking-tight font-[family-name:var(--font-heading)] text-white">
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