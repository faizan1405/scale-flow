"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_LINK =
  "https://wa.me/919873721207?text=Hi%20Scale%20Flow!%20I'm%20interested%20in%20your%20services.%20Can%20we%20chat%3F";

const services = [
  { value: "", label: "Select a service" },
  { value: "social-media", label: "Social Media Content Creation" },
  { value: "ai-automation", label: "AI Automation" },
  { value: "meta-ads", label: "Meta Ads (Facebook & Instagram)" },
  { value: "all-services", label: "All Services (Complete System)" },
];

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const serviceLabel =
      services.find((s) => s.value === form.service)?.label || form.service;

    const text = [
      `Hi Scale Flow! I'm ${form.name}.`,
      "",
      `I'm interested in: ${serviceLabel}`,
      form.message ? `\nMessage: ${form.message}` : "",
      "",
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/919873721207?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    setSubmitted(true);
  }

  return (
    <section id="cta" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.04] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left: Info */}
          <div>
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
              Ready to build
              <br />
              <span className="text-gold">your growth system?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg text-gray-text leading-relaxed"
            >
              Select the service you&apos;re interested in and we&apos;ll get back to you.
              Or chat with us directly on WhatsApp.
            </motion.p>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 space-y-4"
            >
              <div className="flex items-center gap-3 text-gray-light">
                <div className="h-10 w-10 rounded-lg bg-gold/[0.08] border border-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-text uppercase tracking-wider">Phone</p>
                  <a href="tel:+919873721207" className="text-white hover:text-gold transition-colors">
                    +91 9873721207
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-light">
                <div className="h-10 w-10 rounded-lg bg-gold/[0.08] border border-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-text uppercase tracking-wider">Email</p>
                  <a href="mailto:faizanthings@gmail.com" className="text-white hover:text-gold transition-colors">
                    faizanthings@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-light">
                <div className="h-10 w-10 rounded-lg bg-gold/[0.08] border border-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-text uppercase tracking-wider">Location</p>
                  <p className="text-white">Delhi, India</p>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center px-6 rounded-full border border-green-500/30 text-green-400 text-sm font-medium hover:bg-green-500/10 hover:border-green-500/50 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-dark-border bg-dark-card/80 backdrop-blur-sm p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="mx-auto h-16 w-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)]">
                      Message sent!
                    </h3>
                    <p className="mt-3 text-gray-text text-sm">
                      We&apos;ll get back to you shortly. You can also reach us directly at{" "}
                      <a href="mailto:faizanthings@gmail.com" className="text-gold hover:underline">
                        faizanthings@gmail.com
                      </a>
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", email: "", phone: "", service: "", message: "" });
                      }}
                      className="mt-6 text-sm text-gold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div>
                      <label htmlFor="name" className="block text-xs text-gray-text uppercase tracking-wider mb-2">
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl border border-dark-border bg-dark-surface text-white placeholder:text-gray-text/40 focus:border-gold/30 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-xs text-gray-text uppercase tracking-wider mb-2">
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full h-12 px-4 rounded-xl border border-dark-border bg-dark-surface text-white placeholder:text-gray-text/40 focus:border-gold/30 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-colors"
                          placeholder="you@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs text-gray-text uppercase tracking-wider mb-2">
                          Phone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full h-12 px-4 rounded-xl border border-dark-border bg-dark-surface text-white placeholder:text-gray-text/40 focus:border-gold/30 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-colors"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs text-gray-text uppercase tracking-wider mb-2">
                        Service You&apos;re Interested In *
                      </label>
                      <select
                        id="service"
                        required
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl border border-dark-border bg-dark-surface text-white focus:border-gold/30 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-colors appearance-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23888'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 12px center",
                          backgroundSize: "20px",
                        }}
                      >
                        {services.map((s) => (
                          <option key={s.value} value={s.value} disabled={!s.value} className="bg-dark-card">
                            {s.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs text-gray-text uppercase tracking-wider mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-dark-border bg-dark-surface text-white placeholder:text-gray-text/40 focus:border-gold/30 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-colors resize-none"
                        placeholder="Tell us about your project or goals..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="group relative w-full h-14 rounded-xl bg-gold text-dark font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,169,110,0.3)]"
                    >
                      <span className="relative z-10">Contact Now</span>
                      <div className="absolute inset-0 bg-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>

                    <p className="text-center text-xs text-gray-text/50 mt-4">
                      This will open WhatsApp with your details pre-filled.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
