"use client";

import { motion } from "framer-motion";

const results = [
  {
    number: "01",
    client: "E-Commerce Brand",
    problem: "Spending money on random ads with no system behind them. Content was inconsistent, there was no retargeting, and most leads were slipping away.",
    solution: "We connected their content, ads, and follow-ups into one automated flow — so every visitor was tracked, retargeted, and nurtured.",
    metrics: [
      { value: "4.7x", label: "Return on Ad Spend" },
      { value: "62%", label: "Lower Cost Per Lead" },
      { value: "3x", label: "Monthly Revenue Growth" },
    ],
  },
  {
    number: "02",
    client: "Tech Startup",
    problem: "Zero inbound leads. The founder was doing everything manually — cold emails, DMs, follow-ups — with barely any response.",
    solution: "We built their online presence with authority content, launched targeted Meta campaigns, and automated their entire booking process.",
    metrics: [
      { value: "38", label: "Qualified Demos / Month" },
      { value: "5x", label: "Pipeline Growth" },
      { value: "0", label: "Hours on Manual Outreach" },
    ],
  },
  {
    number: "03",
    client: "Consulting Business",
    problem: "Leads were coming in, but 70% of them disappeared because there was no follow-up system. Opportunities were being lost every single day.",
    solution: "We designed a content engine, ran precision Meta campaigns, and built a 14-step automated follow-up sequence that converted leads on autopilot.",
    metrics: [
      { value: "325%", label: "More Clients" },
      { value: "80%", label: "Fewer Lost Leads" },
      { value: "100%", label: "Automated Intake" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs tracking-widest uppercase text-gold font-medium"
          >
            Results
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight font-[family-name:var(--font-heading)]"
          >
            Real results.{" "}
            <span className="text-gold">Simple as that.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-gray-text text-lg max-w-xl mx-auto"
          >
            Here&apos;s what happens when content, ads, and automation work as one system.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="mt-20 space-y-8">
          {results.map((study, i) => (
            <motion.div
              key={study.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-dark-border bg-dark-card overflow-hidden hover:border-gold/15 transition-all duration-500"
            >
              {/* Top accent */}
              <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

              <div className="p-6 sm:p-8 md:p-10">
                <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
                  {/* Left: Story */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-2xl font-bold text-gold/30 font-[family-name:var(--font-heading)]">
                        {study.number}
                      </span>
                      <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)]">
                        {study.client}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <span className="text-[11px] tracking-widest uppercase text-red-400/70 font-medium">
                          The Problem
                        </span>
                        <p className="mt-1.5 text-sm text-gray-text leading-relaxed">
                          {study.problem}
                        </p>
                      </div>
                      <div>
                        <span className="text-[11px] tracking-widest uppercase text-gold/70 font-medium">
                          What We Did
                        </span>
                        <p className="mt-1.5 text-sm text-gray-light leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Metrics */}
                  <div className="flex flex-row lg:flex-col gap-4 lg:gap-5 lg:border-l lg:border-dark-border lg:pl-8 lg:min-w-[200px]">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="flex-1 lg:flex-none">
                        <span className="text-2xl sm:text-3xl font-bold text-gold font-[family-name:var(--font-heading)]">
                          {metric.value}
                        </span>
                        <p className="text-[11px] sm:text-xs text-gray-text mt-0.5 tracking-wide uppercase">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
