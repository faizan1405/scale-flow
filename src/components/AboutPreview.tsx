"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPreview() {
  const values = [
    {
      title: "Clarity over complexity",
      description:
        "Every website should be easy to navigate and quick to load.",
    },
    {
      title: "Craft over templates",
      description:
        "Every project gets a design built for its specific needs.",
    },
    {
      title: "Partnership over projects",
      description:
        "We work closely with each client to get the details right.",
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left — Studio statement */}
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gold font-medium">
              <span className="h-px w-8 bg-gold/40" />
              About ScaleFlow
            </span>
            <h2 className="mt-7 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] font-[family-name:var(--font-heading)]">
              A website studio
              <br />
              focused on building{" "}
              <span className="text-gold">things properly.</span>
            </h2>
            <p className="mt-7 text-gray-text text-base sm:text-lg leading-[1.8]">
              ScaleFlow is a website design and development studio based in
              Delhi. We help businesses turn their ideas, products and services
              into modern digital experiences that look professional, work
              smoothly and communicate clearly.
            </p>
            <p className="mt-4 text-gray-text text-base sm:text-lg leading-[1.8]">
              Every website is planned around the business, designed for its
              audience and developed to perform across desktop, tablet and mobile
              devices.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light transition-colors duration-300 group"
            >
              Learn more about us
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
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </ScrollReveal>

          {/* Right — Value cards */}
          <div className="space-y-4">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div
                  className="group relative p-6 sm:p-7 rounded-2xl border border-white/[0.06] transition-all duration-500 hover:border-gold/15"
                  style={{
                    background:
                      "linear-gradient(165deg, rgba(17,17,17,0.7), rgba(14,14,14,0.9))",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-gold/[0.08] border border-gold/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-gold font-[family-name:var(--font-heading)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight font-[family-name:var(--font-heading)] text-white group-hover:text-gold-light transition-colors duration-500">
                        {value.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-text leading-[1.7]">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}