"use client";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="inline-block text-xs tracking-widest uppercase text-gold font-medium"
        >
          The Problem
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight font-[family-name:var(--font-heading)]"
        >
          Most businesses run
          <br />
          <span className="text-gray-text">fragmented marketing.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 text-lg md:text-xl text-gray-text leading-relaxed max-w-2xl mx-auto"
        >
          One person for content. Another for ads. Some random tool for
          automation. Nothing connects. Nothing compounds. You end up spending
          more and growing less.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-12 p-8 md:p-12 rounded-2xl border border-gold/10 bg-gold/[0.03] animate-border-glow"
        >
          <p className="text-lg md:text-xl text-white leading-relaxed font-medium">
            Scale Flow builds the{" "}
            <span className="text-gold">complete growth system</span> — social
            media content, Meta Ads, and AI automation working together as one
            engine. So every piece amplifies the next.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
