"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  WHATSAPP_LINK,
  WHATSAPP_NUMBER,
  PHONE_DISPLAY,
  EMAIL,
  LOCATION,
} from "@/lib/constants";
import { projectTypes, budgetRanges } from "@/data/projects";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    websiteType: "",
    message: "",
    budget: "",
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    const typeLabel = projectTypes.find(
      (t) => t === form.websiteType,
    ) || form.websiteType;
    const budgetLabel = budgetRanges.find(
      (b) => b === form.budget,
    ) || form.budget;

    const text = [
      `Hi ScaleFlow, I'm interested in building or redesigning a website for my business.`,
      "",
      `Name: ${form.name}`,
      `Business: ${form.business}`,
      `Website Type: ${typeLabel}`,
      budgetLabel ? `Budget: ${budgetLabel}` : "",
      `Message: ${form.message || "Not provided"}`,
      "",
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
    ]
      .filter(Boolean)
      .join("\n");

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;

    try {
      const newWindow = window.open(whatsappUrl, "_blank");

      if (!newWindow) {
        setError(
          "Your browser blocked the popup. Please allow popups for this site, or click the WhatsApp button below.",
        );
        return;
      }

      await new Promise((resolve) => setTimeout(resolve, 100));

      if (newWindow.closed) {
        setError(
          "The WhatsApp window was blocked. Please allow popups and try again, or use the button below.",
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setError(
        "Something went wrong opening WhatsApp. Please try again or reach us at " +
          EMAIL +
          ".",
      );
    }
  }

  const inputClasses =
    "w-full h-12 px-4 rounded-xl border border-white/[0.08] bg-dark-surface text-white placeholder:text-gray-text/40 focus:border-gold/30 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-colors text-base";

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(201,169,110,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-2 lg:items-start">
          {/* Left — Info */}
          <div>
            <span className="inline-block text-xs tracking-[0.2em] uppercase text-gold font-medium">
              Get Started
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] font-[family-name:var(--font-heading)]">
              Your business
              <br />
              deserves a{" "}
              <span className="text-gold">better website.</span>
            </h2>
            <p className="mt-5 text-gray-text text-base sm:text-lg leading-relaxed">
              Tell us what you want to build, and we&apos;ll help turn it into a
              modern, professional website.
            </p>

            {/* Contact details */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-gray-light">
                <div className="h-10 w-10 rounded-xl bg-gold/[0.08] border border-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-gray-text uppercase tracking-wider">
                    Phone
                  </p>
                  <a
                    href={`tel:+91${WHATSAPP_NUMBER}`}
                    className="text-white hover:text-gold transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-light">
                <div className="h-10 w-10 rounded-xl bg-gold/[0.08] border border-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-gray-text uppercase tracking-wider">
                    Email
                  </p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-white hover:text-gold transition-colors"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-light">
                <div className="h-10 w-10 rounded-xl bg-gold/[0.08] border border-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-gray-text uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-white">{LOCATION}</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-7 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-green-500/25 text-green-400 text-sm font-medium hover:bg-green-500/10 hover:border-green-500/40 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </motion.a>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-white/[0.08] bg-dark-card p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="mx-auto h-14 w-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-5">
                      <svg
                        className="w-7 h-7 text-gold"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)]">
                      Enquiry sent!
                    </h3>
                    <p className="mt-3 text-gray-text text-sm">
                      Complete the conversation on WhatsApp to reach ScaleFlow
                      directly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setError(null);
                        setForm({
                          name: "",
                          phone: "",
                          email: "",
                          business: "",
                          websiteType: "",
                          message: "",
                          budget: "",
                        });
                      }}
                      className="mt-5 text-sm text-gold hover:text-gold-light transition-colors"
                    >
                      Send another enquiry
                    </button>
                  </motion.div>
                ) : error ? (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="mx-auto h-14 w-14 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5">
                      <svg
                        className="w-7 h-7 text-red-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)]">
                      Couldn&apos;t open WhatsApp
                    </h3>
                    <p className="mt-3 text-gray-text text-sm">{error}</p>
                    <button
                      onClick={() => setError(null)}
                      className="mt-5 text-sm text-gold hover:text-gold-light transition-colors"
                    >
                      Try again
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs text-gray-text uppercase tracking-wider mb-1.5"
                      >
                        Full Name <span className="text-gold">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className={inputClasses}
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs text-gray-text uppercase tracking-wider mb-1.5"
                        >
                          Phone Number <span className="text-gold">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                          className={inputClasses}
                          placeholder="Your phone number"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs text-gray-text uppercase tracking-wider mb-1.5"
                        >
                          Email Address <span className="text-gold">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          className={inputClasses}
                          placeholder="you@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="business"
                        className="block text-xs text-gray-text uppercase tracking-wider mb-1.5"
                      >
                        Business or Brand Name{" "}
                        <span className="text-gold">*</span>
                      </label>
                      <input
                        id="business"
                        type="text"
                        required
                        value={form.business}
                        onChange={(e) =>
                          setForm({ ...form, business: e.target.value })
                        }
                        className={inputClasses}
                        placeholder="Your business or brand name"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="websiteType"
                          className="block text-xs text-gray-text uppercase tracking-wider mb-1.5"
                        >
                          What kind of website?{" "}
                          <span className="text-gold">*</span>
                        </label>
                        <select
                          id="websiteType"
                          required
                          value={form.websiteType}
                          onChange={(e) =>
                            setForm({ ...form, websiteType: e.target.value })
                          }
                          className={`${inputClasses} appearance-none`}
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23888'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 12px center",
                            backgroundSize: "20px",
                          }}
                        >
                          <option value="" disabled>
                            Select a type
                          </option>
                          {projectTypes.map((t) => (
                            <option key={t} value={t} className="bg-dark-card">
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-xs text-gray-text uppercase tracking-wider mb-1.5"
                        >
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          value={form.budget}
                          onChange={(e) =>
                            setForm({ ...form, budget: e.target.value })
                          }
                          className={`${inputClasses} appearance-none`}
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23888'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 12px center",
                            backgroundSize: "20px",
                          }}
                        >
                          <option value="" className="bg-dark-card">
                            Select a range
                          </option>
                          {budgetRanges.map((b) => (
                            <option key={b} value={b} className="bg-dark-card">
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs text-gray-text uppercase tracking-wider mb-1.5"
                      >
                        Tell us about your project
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className={`${inputClasses} resize-none py-3`}
                        placeholder="Describe your website needs, goals, or any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="group relative w-full h-12 rounded-xl bg-gold text-dark font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,110,0.25)]"
                    >
                      <span className="relative z-10">
                        Send Website Enquiry
                      </span>
                      <div className="absolute inset-0 bg-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>

                    <p className="text-center text-[11px] text-gray-text/40">
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