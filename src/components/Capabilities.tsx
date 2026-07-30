"use client";

import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import { capabilities } from "@/data/capabilities";

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Capabilities"
            heading="Everything your website needs."
            description="From initial concept to a live, fast, and professional website — we handle every step of the process."
          />
        </ScrollReveal>

        <div className="mt-14 md:mt-20 grid gap-4 sm:grid-cols-2">
          {capabilities.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 0.08}>
              <div className="group relative h-full rounded-2xl border border-white/[0.06] bg-dark-card p-6 sm:p-8 transition-all duration-500 hover:border-gold/15">
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent group-hover:via-gold/30 transition-all duration-700" />

                <h3 className="text-lg font-semibold tracking-tight font-[family-name:var(--font-heading)] text-white">
                  {group.category}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-gray-light leading-relaxed"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gold/60 flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}