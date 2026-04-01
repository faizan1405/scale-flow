"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="relative py-28 md:py-36">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.04] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="inline-block text-xs tracking-widest uppercase text-gold font-medium"
        >
          Get Started
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight font-[family-name:var(--font-heading)]"
        >
          Ready to build a system,
          <br />
          <span className="text-gold">not just marketing?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg text-gray-text leading-relaxed"
        >
          We work with a limited number of partners at a time to ensure deep
          focus and exceptional results. Apply now to see if we&apos;re the right fit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#"
            className="group relative inline-flex h-14 items-center px-10 rounded-full bg-gold text-dark font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,169,110,0.3)]"
          >
            <span className="relative z-10">Apply Now</span>
            <div className="absolute inset-0 bg-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#"
            className="inline-flex h-14 items-center px-10 rounded-full border border-white/10 text-white text-base font-medium hover:border-white/25 hover:bg-white/[0.04] transition-all duration-300"
          >
            Book a Call
          </a>
        </motion.div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 text-xs text-gray-text/50"
        >
          No commitment required. We&apos;ll discuss your goals and see if there&apos;s a fit.
        </motion.p>
      </div>
    </section>
  );
}
