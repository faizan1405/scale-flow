"use client";

import { motion } from "framer-motion";

const clients = [
  {
    initials: "SF",
    name: "Scale Flow",
    category: "Growth Systems & Marketing",
    description:
      "Content, ads, and AI automation — connected into one system that turns attention into revenue.",
    link: null,
    gradient: "from-gold/30 to-gold-dark/30",
  },
  {
    initials: "AF",
    name: "Aura Flame",
    category: "Brand & Creative Studio",
    description:
      "Premium brand identity, visual storytelling, and creative direction that makes brands impossible to ignore.",
    link: "https://auraflame1.com/",
    gradient: "from-orange-500/30 to-red-500/30",
  },
  {
    initials: "SW",
    name: "Scale Flow Website",
    category: "Official Website",
    description:
      "Visit our official website to explore services, case studies, and growth systems built for modern brands.",
    link: "https://scale-flow-sooty.vercel.app/",
    gradient: "from-cyan-500/30 to-blue-500/30",
  },
  {
    initials: "RA",
    name: "Adv Rukhsar Ahmad",
    category: "Legal Services",
    description:
      "Expert legal guidance in family law, property matters, and litigation — delivering clarity, protection, and strong representation.",
    link: "https://advruksarahmad.com/",
    gradient: "from-emerald-500/30 to-teal-500/30",
  },
  {
    initials: "AN",
    name: "Alvi Nursing Home",
    category: "Healthcare Services",
    description:
      "24×7 patient-focused healthcare with advanced diagnostics, emergency care, and trusted medical expertise.",
    link: "https://alvinursinghome.com/",
    gradient: "from-rose-500/30 to-pink-500/30",
  },
];

export default function Clients() {
  return (
    <section id="clients" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0b0b0b]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gold/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs tracking-widest uppercase text-gold font-medium"
          >
            The Clients
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight font-[family-name:var(--font-heading)]"
          >
            Trusted by leading clients.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-gray-text text-lg leading-relaxed"
          >
            We partner with ambitious brands and professionals to drive growth,
            visibility, and real business results.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {clients.map((client, i) => {
            const CardWrapper = client.link ? "a" : "div";
            const linkProps = client.link
              ? {
                  href: client.link,
                  target: "_blank" as const,
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <motion.div
                key={client.initials}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`${i < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
              >
                <CardWrapper
                  {...linkProps}
                  className={`group relative block rounded-2xl border border-white/[0.06] p-8 backdrop-blur-xl transition-all duration-500 hover:border-gold/20 hover:-translate-y-1 hover:shadow-[0_8px_40px_-12px_rgba(201,169,110,0.15)] h-full ${
                    client.link ? "cursor-pointer" : ""
                  }`}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(17,17,17,0.9) 0%, rgba(11,11,11,0.95) 100%)",
                  }}
                >
                  {/* Glow on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gold/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Icon Box */}
                  <div
                    className={`relative h-14 w-14 rounded-xl bg-gradient-to-br ${client.gradient} flex items-center justify-center border border-white/[0.08] transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg`}
                  >
                    <span className="text-lg font-bold text-white font-[family-name:var(--font-heading)]">
                      {client.initials}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="relative mt-6 text-xl font-semibold tracking-tight text-white font-[family-name:var(--font-heading)]">
                    {client.name}
                  </h3>
                  <span className="relative mt-2 inline-block text-xs tracking-widest uppercase text-gold/80 font-medium">
                    {client.category}
                  </span>
                  <p className="relative mt-4 text-gray-text leading-relaxed text-[15px]">
                    {client.description}
                  </p>

                  {/* Link indicator */}
                  {client.link && (
                    <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold/70 transition-colors duration-300 group-hover:text-gold">
                      Visit Site
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  )}
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

