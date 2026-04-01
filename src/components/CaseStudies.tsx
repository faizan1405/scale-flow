"use client";

import { motion } from "framer-motion";

const studies = [
  {
    client: "Premium D2C Brand",
    industry: "E-Commerce",
    before: "Scattered ads, no retargeting, inconsistent content. Spending ₹2L/month with 1.8x ROAS.",
    system:
      "Built a full-funnel ad system with automated lead nurture, high-conversion content, and AI-driven audience segmentation.",
    result: "4.7x ROAS within 90 days. 62% lower CPL. 3x increase in monthly revenue.",
    metric: "4.7x",
    metricLabel: "ROAS",
  },
  {
    client: "B2B SaaS Startup",
    industry: "Technology",
    before: "Zero inbound pipeline. Relying entirely on cold outreach with <2% response rate.",
    system:
      "Launched authority-building content strategy, LinkedIn ad campaigns, and an automated booking funnel with CRM integration.",
    result: "38 qualified demos/month. 5x pipeline growth. Founder freed from manual outreach.",
    metric: "38",
    metricLabel: "Demos/Month",
  },
  {
    client: "High-Ticket Service Provider",
    industry: "Consulting",
    before: "Inconsistent lead flow. No system for follow-ups. Losing 70% of interested leads.",
    system:
      "Designed a signature content engine, precision Meta campaigns, and a 14-touch automated follow-up sequence.",
    result: "From 4 clients/month to 17. 80% reduction in lead drop-off. Fully automated intake.",
    metric: "325%",
    metricLabel: "Client Growth",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-28 md:py-36">
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
            Results
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight font-[family-name:var(--font-heading)]"
          >
            Systems that deliver.
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {studies.map((study, i) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-2xl border border-dark-border bg-dark-card overflow-hidden"
            >
              {/* Top accent */}
              <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

              <div className="p-8 md:p-10">
                {/* Metric */}
                <div className="mb-8">
                  <span className="text-4xl md:text-5xl font-bold text-gold font-[family-name:var(--font-heading)]">
                    {study.metric}
                  </span>
                  <span className="ml-2 text-sm text-gold/60 tracking-wider uppercase">
                    {study.metricLabel}
                  </span>
                </div>

                {/* Client */}
                <div className="flex items-center gap-2 mb-6">
                  <h3 className="text-lg font-semibold">{study.client}</h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full border border-white/10 text-gray-text">
                    {study.industry}
                  </span>
                </div>

                {/* Timeline */}
                <div className="space-y-5">
                  <div>
                    <span className="text-[11px] tracking-widest uppercase text-gray-text/60 font-medium">
                      Before
                    </span>
                    <p className="mt-1.5 text-sm text-gray-text leading-relaxed">
                      {study.before}
                    </p>
                  </div>
                  <div className="h-px bg-white/[0.04]" />
                  <div>
                    <span className="text-[11px] tracking-widest uppercase text-cyber font-medium">
                      System Built
                    </span>
                    <p className="mt-1.5 text-sm text-gray-light leading-relaxed">
                      {study.system}
                    </p>
                  </div>
                  <div className="h-px bg-white/[0.04]" />
                  <div>
                    <span className="text-[11px] tracking-widest uppercase text-gold font-medium">
                      Result
                    </span>
                    <p className="mt-1.5 text-sm text-white leading-relaxed font-medium">
                      {study.result}
                    </p>
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
