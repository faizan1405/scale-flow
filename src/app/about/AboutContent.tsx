"use client";

import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function AboutContent() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 60% 40%, rgba(201,169,110,0.06) 0%, transparent 60%), radial-gradient(circle at 30% 70%, rgba(201,169,110,0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Studio statement */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gold font-medium"
          >
            <span className="h-px w-8 bg-gold/40" />
            About ScaleFlow
            <span className="h-px w-8 bg-gold/40" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-7 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] font-[family-name:var(--font-heading)]"
          >
            A website studio focused on building{" "}
            <span className="text-gold">things properly.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-gray-text text-lg sm:text-xl max-w-3xl mx-auto leading-[1.8]"
          >
            ScaleFlow is a website design and development studio based in Delhi.
            We help businesses turn their ideas, products and services into modern
            digital experiences that look professional, work smoothly and
            communicate clearly.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-gray-text text-lg sm:text-xl max-w-3xl mx-auto leading-[1.8]"
          >
            Every website is planned around the business, designed for its
            audience and developed to perform across desktop, tablet and mobile
            devices.
          </motion.p>
        </div>

        {/* Design principles */}
        <div className="mt-20 md:mt-28 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {[
            {
              num: "01",
              title: "Clarity over complexity",
              desc: "Every website should be easy to navigate and quick to load.",
            },
            {
              num: "02",
              title: "Craft over templates",
              desc: "Every project gets a design built for its specific needs.",
            },
            {
              num: "03",
              title: "Partnership over projects",
              desc: "We work closely with each client to get the details right.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-6 sm:p-7 rounded-2xl transition-all duration-500 hover:border-gold/20"
              style={{
                background: "rgba(17,17,17,0.4)",
                backdropFilter: "blur(16px) saturate(1.2)",
                WebkitBackdropFilter: "blur(16px) saturate(1.2)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.03)",
              }}
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 h-10 w-10 rounded-xl bg-gold/[0.08] border border-gold/10 flex items-center justify-center text-sm font-bold text-gold font-[family-name:var(--font-heading)]">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-tight font-[family-name:var(--font-heading)] text-white group-hover:text-gold-light transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-text leading-[1.7]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold text-dark font-semibold text-base hover:shadow-[0_0_30px_rgba(201,169,110,0.3)] transition-all duration-300"
          >
            Let&apos;s build your website
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}