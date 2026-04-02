"use client";

import { motion } from "framer-motion";

const WHATSAPP_LINK =
  "https://wa.me/919873721207?text=Hi%20Scale%20Flow!%20I'm%20interested%20in%20your%20services.%20Can%20we%20chat%3F";

const stats = [
  { value: "50+", label: "Brands Scaled" },
  { value: "3+", label: "Years Experience" },
  { value: "10M+", label: "Ad Spend Managed" },
  { value: "100%", label: "Client Retention" },
];

const expertise = [
  {
    title: "Social Media Content",
    description:
      "Scroll-stopping Reels, carousels, and stories crafted to grow your audience and turn followers into customers.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
  {
    title: "AI Automation",
    description:
      "Smart systems for lead capture, follow-ups, and CRM workflows — so your business grows even when you're offline.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    title: "Meta Ads",
    description:
      "Data-driven Facebook and Instagram campaigns with proper funnels, targeting, and creatives built to maximize every rupee.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Growth Strategy",
    description:
      "Big-picture thinking that ties content, ads, and automation into one connected system engineered for compounding growth.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

const values = [
  {
    title: "Systems Over Shortcuts",
    description:
      "I don't believe in quick hacks that fade in a week. Everything I build is designed to compound — content feeds ads, ads feed leads, automation converts them.",
  },
  {
    title: "Clarity Over Complexity",
    description:
      "Marketing doesn't need to be confusing. I keep things simple, focused, and results-driven. You'll always know what's happening and why.",
  },
  {
    title: "Partnership Over Projects",
    description:
      "I don't take on dozens of clients. I work closely with a handful of brands so I can give each one the depth and attention it deserves.",
  },
];

export default function AboutContent() {
  return (
    <div className="overflow-hidden">
      {/* ========== HERO ========== */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.06, 0.03] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full bg-gold blur-[140px]"
          />
        </div>
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/[0.06] text-gold text-xs tracking-widest uppercase font-medium"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            About Scale Flow
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] font-[family-name:var(--font-heading)]"
          >
            The person behind
            <br />
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              your growth system.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-7 text-lg md:text-xl text-gray-text max-w-2xl mx-auto leading-relaxed"
          >
            I help brands stop guessing and start growing — with content that
            converts, ads that perform, and automation that never sleeps.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-16 mx-auto h-px w-full max-w-sm bg-gradient-to-r from-transparent via-gold/30 to-transparent"
          />
        </div>
      </section>

      {/* ========== INTRO — Photo + Story ========== */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Decorative frames */}
                <div className="absolute -inset-3 rounded-3xl border border-gold/10 -z-10" />
                <div className="absolute -inset-6 rounded-3xl border border-gold/[0.04] -z-20" />

                {/* Corner accents */}
                <div className="absolute -top-1.5 -left-1.5 w-8 h-8 border-t-2 border-l-2 border-gold/40 rounded-tl-xl" />
                <div className="absolute -top-1.5 -right-1.5 w-8 h-8 border-t-2 border-r-2 border-gold/40 rounded-tr-xl" />
                <div className="absolute -bottom-1.5 -left-1.5 w-8 h-8 border-b-2 border-l-2 border-gold/40 rounded-bl-xl" />
                <div className="absolute -bottom-1.5 -right-1.5 w-8 h-8 border-b-2 border-r-2 border-gold/40 rounded-br-xl" />

                {/* Image container */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-dark-card border border-dark-border">
                  {/*
                    Replace this placeholder with your image:
                    import Image from "next/image";
                    <Image src="/your-photo.jpg" alt="Faizan — Founder of Scale Flow" fill className="object-cover" />
                  */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                    <div className="h-24 w-24 rounded-full bg-gold/[0.06] border border-gold/15 flex items-center justify-center">
                      <svg className="w-12 h-12 text-gold/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-text/30 tracking-wide">Your photo here</span>
                  </div>

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.02] to-transparent" />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute -bottom-5 -right-3 sm:-bottom-4 sm:-right-6 bg-dark-card/95 backdrop-blur-sm border border-gold/20 rounded-2xl px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white font-[family-name:var(--font-heading)]">
                        Growth Strategist
                      </p>
                      <p className="text-xs text-gold/60">Delhi, India</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Story */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="inline-block text-xs tracking-widest uppercase text-gold font-medium"
              >
                My Story
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight font-[family-name:var(--font-heading)]"
              >
                I don&apos;t just run ads.
                <br />
                <span className="text-gold">I build growth engines.</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-7 space-y-5"
              >
                <p className="text-gray-text text-[16px] leading-relaxed">
                  I started Scale Flow because I saw the same problem
                  everywhere — businesses spending money on marketing with
                  nothing to show for it. Different people handling content, ads,
                  and automation. None of it connected. All of it wasteful.
                </p>
                <p className="text-gray-text text-[16px] leading-relaxed">
                  So I built something different. A single system where{" "}
                  <span className="text-white font-medium">social media content</span>,{" "}
                  <span className="text-white font-medium">AI automation</span>, and{" "}
                  <span className="text-white font-medium">performance-driven Meta Ads</span>{" "}
                  work together as one engine. Every piece feeds the next —
                  content drives attention, ads capture leads, automation
                  converts them. No gaps. No guesswork.
                </p>
                <p className="text-gray-text text-[16px] leading-relaxed">
                  Today, I work with founders and brands who are tired of
                  fragmented marketing and ready for a system that actually
                  compounds. If that sounds like you, let&apos;s talk.
                </p>
              </motion.div>

              {/* Signature */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-8 flex items-center gap-4"
              >
                <div className="h-px w-10 bg-gold/40" />
                <p className="text-white font-[family-name:var(--font-heading)] font-semibold tracking-tight">
                  Faizan — Founder, Scale Flow
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATS BAR ========== */}
      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-6 sm:p-7 rounded-2xl border border-dark-border bg-dark-card/60 text-center group hover:border-gold/15 transition-all duration-500"
              >
                <span className="block text-3xl sm:text-4xl font-bold text-gold font-[family-name:var(--font-heading)]">
                  {stat.value}
                </span>
                <span className="block mt-1.5 text-[11px] sm:text-xs text-gray-text uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== EXPERTISE ========== */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="inline-block text-xs tracking-widest uppercase text-gold font-medium"
            >
              What I Bring to the Table
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight font-[family-name:var(--font-heading)]"
            >
              One person.{" "}
              <span className="text-gold">Every skill you need.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-gray-text text-lg max-w-xl mx-auto"
            >
              No bloated agency. No miscommunication between teams. Just one
              focused partner who understands the full picture.
            </motion.p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2">
            {expertise.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative rounded-2xl border border-dark-border bg-dark-card p-7 sm:p-8 transition-all duration-500 hover:border-gold/20 hover:bg-dark-surface hover:shadow-[0_0_40px_rgba(201,169,110,0.05)]"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/25 transition-all duration-700" />

                <div className="h-12 w-12 rounded-xl bg-gold/[0.08] border border-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/[0.15] group-hover:shadow-[0_0_20px_rgba(201,169,110,0.12)] transition-all duration-500">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-tight font-[family-name:var(--font-heading)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-text text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== VALUES / APPROACH ========== */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20 items-start">
            {/* Left */}
            <div className="lg:sticky lg:top-32">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="inline-block text-xs tracking-widest uppercase text-gold font-medium"
              >
                My Approach
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight font-[family-name:var(--font-heading)]"
              >
                How I think
                <br />
                <span className="text-gold">about growth.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 text-gray-text text-lg leading-relaxed"
              >
                Every decision I make comes back to one question: does this
                compound? If it doesn&apos;t build on itself over time, it&apos;s
                not worth doing.
              </motion.p>
            </div>

            {/* Right — value cards */}
            <div className="space-y-5">
              {values.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="group relative p-7 rounded-2xl border border-dark-border bg-dark-card hover:border-gold/15 hover:shadow-[0_0_30px_rgba(201,169,110,0.04)] transition-all duration-500"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 mt-1 h-8 w-8 rounded-full bg-gold/[0.08] border border-gold/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-gold font-[family-name:var(--font-heading)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight font-[family-name:var(--font-heading)]">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-sm text-gray-text leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.04] blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight font-[family-name:var(--font-heading)]"
          >
            Ready to build something
            <br />
            <span className="text-gold">that actually grows?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg text-gray-text leading-relaxed"
          >
            I work with a handful of brands at a time to keep the quality high
            and the results real. If you&apos;re serious about growth, let&apos;s
            connect.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="/#cta"
              className="group relative inline-flex h-14 w-full sm:w-auto items-center justify-center px-10 rounded-full bg-gold text-dark font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,169,110,0.3)]"
            >
              <span className="relative z-10">Contact Now</span>
              <div className="absolute inset-0 bg-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 w-full sm:w-auto items-center justify-center px-10 rounded-full border border-white/10 text-white text-base font-medium hover:border-green-500/30 hover:bg-green-500/[0.06] transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2.5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 text-xs text-gray-text/50"
          >
            No commitment required. Let&apos;s just have a conversation.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
