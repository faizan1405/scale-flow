"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "AI-Driven Automation",
    description:
      "Automated lead capture, intelligent follow-ups, and CRM systems that work while you sleep. We remove the manual bottlenecks so your pipeline never stalls.",
    features: ["Lead Capture Systems", "Smart Follow-Up Sequences", "CRM Integration & Workflows"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Signature Content Creation",
    description:
      "From scripts to shoot direction to post-production editing — we create content that positions you as the authority in your market.",
    features: ["Script & Story Development", "Shoot Direction & Production", "Professional Editing & Post"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Precision Meta Advertising",
    description:
      "Data-backed ad campaigns built to convert, not just impress. We engineer every layer — targeting, creative, and funnel — for measurable ROI.",
    features: ["Data-Driven Targeting", "High-Converting Creatives", "Full Funnel Engineering"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs tracking-widest uppercase text-gold font-medium"
          >
            What We Build
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight font-[family-name:var(--font-heading)]"
          >
            Three pillars. One system.
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-2xl border border-dark-border bg-dark-card p-8 md:p-10 transition-all duration-500 hover:border-gold/20 hover:bg-dark-surface"
            >
              {/* Number */}
              <span className="text-xs text-gold/40 tracking-widest font-medium">
                {pillar.number}
              </span>

              {/* Icon */}
              <div className="mt-6 h-12 w-12 rounded-xl bg-gold/[0.08] border border-gold/10 flex items-center justify-center text-gold transition-colors duration-300 group-hover:bg-gold/[0.12]">
                {pillar.icon}
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-semibold tracking-tight font-[family-name:var(--font-heading)]">
                {pillar.title}
              </h3>
              <p className="mt-4 text-gray-text leading-relaxed text-[15px]">
                {pillar.description}
              </p>

              {/* Features */}
              <ul className="mt-8 space-y-3">
                {pillar.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-sm text-gray-light">
                    <span className="h-1 w-1 rounded-full bg-gold flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
