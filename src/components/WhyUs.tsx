"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Premium Positioning",
    description:
      "We don't do generic. Everything we build is designed to position your brand as the clear authority — from content to ad creative to the way your funnel feels.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Systems Thinking",
    description:
      "We don't optimize in isolation. Every element is designed to feed into the next — content drives ads, ads drive leads, automation converts them.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: "Faster Execution",
    description:
      "No bloated teams. No month-long onboarding. We move fast with a lean, senior team that ships results in weeks — not quarters.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Less Work for You",
    description:
      "We handle the build. You focus on your business. Our systems run on autopilot so you're not buried in day-to-day marketing decisions.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left side */}
          <div className="lg:sticky lg:top-32">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="inline-block text-xs tracking-widest uppercase text-gold font-medium"
            >
              Why Scale Flow
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight font-[family-name:var(--font-heading)]"
            >
              Not another agency.
              <br />
              <span className="text-gold">A growth partner.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-gray-text text-lg leading-relaxed"
            >
              We embed into your business and build infrastructure that compounds
              — not campaigns that expire.
            </motion.p>
          </div>

          {/* Right side – cards */}
          <div className="space-y-5">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-7 rounded-2xl border border-dark-border bg-dark-card hover:border-gold/15 transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="h-10 w-10 rounded-lg bg-gold/[0.08] border border-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight font-[family-name:var(--font-heading)]">
                      {reason.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-gray-text leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
