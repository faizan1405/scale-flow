"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";
import LayeredBrowserMockup from "@/components/LayeredBrowserMockup";
import ProcessLine from "@/components/ProcessLine";
import MagneticButton from "@/components/MagneticButton";
import AnimatedStats from "@/components/AnimatedStats";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { motion } from "framer-motion";

function FloatingInput({
  label, name, type, required, autoComplete,
}: {
  label: string; name: string; type: string; required?: boolean; autoComplete?: string;
}) {
  return (
    <div className="floating-field">
      <input type={type} id={name} name={name} required={required} autoComplete={autoComplete} placeholder=" " className="w-full rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm text-white focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-colors" />
      <label htmlFor={name}>{label}{required ? <span className="text-gold"> *</span> : null}</label>
    </div>
  );
}

function FloatingSelect({
  label, name, required, options,
}: {
  label: string; name: string; required?: boolean; options: string[];
}) {
  return (
    <div className="floating-field">
      <select id={name} name={name} required={required} onChange={(e) => e.currentTarget.classList.toggle("has-value", e.currentTarget.value !== "")} className="w-full rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-3 pr-10 text-sm text-white focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-colors appearance-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23888'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center", backgroundSize: "20px" }}>
        <option value="" disabled></option>
        {options.map((opt) => <option key={opt} value={opt} className="bg-dark-card">{opt}</option>)}
      </select>
      <label htmlFor={name}>{label}{required ? <span className="text-gold"> *</span> : null}</label>
    </div>
  );
}

function FloatingTextarea({
  label, name, rows,
}: {
  label: string; name: string; rows: number;
}) {
  return (
    <div className="floating-field">
      <textarea id={name} name={name} rows={rows} placeholder=" " className="w-full rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm text-white focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-colors resize-y" />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

function ContactItem({
  icon, label, value, href,
}: {
  icon: React.ReactNode; label: string; value: string; href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 group">
      <motion.div whileHover={{ scale: 1.1, rotate: -5 }} className="h-10 w-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 text-gold transition-colors group-hover:bg-gold/15">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icon}</svg>
      </motion.div>
      <div>
        <p className="text-xs text-gray-text uppercase tracking-wider mb-0.5">{label}</p>
        <p className={`text-sm transition-colors duration-300 ${href ? "text-white hover:text-gold" : "text-white"}`}>{value}</p>
      </div>
    </div>
  );
  if (href) return <a href={href} className="block">{content}</a>;
  return content;
}

export default function Home() {
  const [formError, setFormError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const brand = (form.elements.namedItem("brand") as HTMLInputElement).value.trim();
    const typeEl = form.elements.namedItem("type") as HTMLSelectElement;
    const messageEl = form.elements.namedItem("message") as HTMLTextAreaElement;
    const budgetEl = form.elements.namedItem("budget") as HTMLSelectElement;

    if (!name || !phone || !email || !typeEl.value) {
      setFormError("Please fill in all required fields before submitting.");
      return;
    }

    const typeLabel = typeEl.options[typeEl.selectedIndex]?.text || typeEl.value;
    const budgetLabel = budgetEl.options[budgetEl.selectedIndex]?.text || "Not specified";

    const msg = [
      "👋 Hello ScaleFlow Team,",
      "",
      "I would like to enquire about building a website.",
      "",
      "📌 Contact Details",
      `• Full Name: ${name}`,
      `• Phone Number: ${phone}`,
      `• Email Address: ${email}`,
      `• Business / Brand Name: ${brand || "Not provided"}`,
      "",
      "🌐 Project Details",
      `• Website Type: ${typeLabel}`,
      `• Project Description: ${messageEl.value || "Not provided"}`,
      `• Budget Range: ${budgetLabel}`,
      "",
      "Looking forward to discussing my project. Please get in touch with me.",
      "",
      "Thank you!",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `https://wa.me/919873721207?text=${encodeURIComponent(msg)}`;
  }
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <section className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/[0.04] rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-[100px]" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:gap-16 items-center lg:grid-cols-2">
              <div className="max-w-xl">
                <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-block text-xs tracking-[0.2em] uppercase text-gold font-medium mb-6">Website Design & Development</motion.span>
                <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] font-[family-name:var(--font-heading)]">
                  We build websites that make businesses <span className="relative inline-block"><span className="relative z-10">impossible</span><span aria-hidden="true" className="absolute bottom-1 left-0 right-0 h-2 md:h-3 bg-gold/20 -z-0" /></span> to ignore.
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-6 text-base sm:text-lg text-gray-text leading-relaxed">Custom, fast and mobile-first websites designed to build trust, showcase your business and turn visitors into genuine enquiries.</motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-8 flex flex-wrap gap-4">
                  <MagneticButton variant="primary" href="/work" ariaLabel="View our website projects">View Our Work<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></MagneticButton>
                  <MagneticButton variant="secondary" href="#contact" ariaLabel="Start your website project">Start Your Website</MagneticButton>
                </motion.div>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="mt-8 text-xs text-gray-text/60 tracking-wide">Custom Design · Responsive Development · Performance Focused</motion.p>
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.3 }} className="relative"><LayeredBrowserMockup /></motion.div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="relative py-24 md:py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:gap-16 items-center lg:grid-cols-2">
              <ScrollReveal>
                <div className="relative rounded-2xl overflow-hidden p-8 md:p-12" style={{ background: "rgba(17,17,17,0.4)", backdropFilter: "blur(16px) saturate(1.2)", WebkitBackdropFilter: "blur(16px) saturate(1.2)", border: "1px solid rgba(255,255,255,0.06)", boxShadow: "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.03)" }}>
                  <div aria-hidden="true" className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(201,169,110,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
                  <div className="relative z-10 space-y-6">
                    {[{ icon: <><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>, title: "Custom Design", note: "Tailored to your brand" }, { icon: <><rect x="4" y="3" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M4 7h16M4 11h16" stroke="currentColor" strokeWidth="1" /></>, title: "Responsive", note: "Works on every device" }, { icon: <><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></>, title: "Fast Performance", note: "Optimized for speed" }].map((item) => (
                      <div key={item.title} className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-gold">{item.icon}</svg></div>
                        <div><p className="text-sm font-medium text-white">{item.title}</p><p className="text-xs text-gray-text mt-0.5">{item.note}</p></div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <div>
                <motion.span initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="inline-block text-xs tracking-[0.2em] uppercase text-gold font-medium mb-6">About ScaleFlow</motion.span>
                <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.1 }} className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] font-[family-name:var(--font-heading)]">A website studio focused on building things properly.</motion.h2>
                <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-6 text-gray-text text-base sm:text-lg leading-relaxed">ScaleFlow is a website design and development studio based in Delhi. We help businesses turn their ideas, products and services into modern digital experiences that look professional, work smoothly and communicate clearly.</motion.p>
                <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-4 text-gray-text text-base sm:text-lg leading-relaxed">Every website is planned around the business, designed for its audience and developed to perform across desktop, tablet and mobile devices.</motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-10 mb-8"><AnimatedStats /></motion.div>
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-8">
                  <MagneticButton variant="secondary" href="#contact" ariaLabel="Start your website project">Start Your Website<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></MagneticButton>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <ProcessLine />

        {/* CTA */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "rgba(201,169,110,0.04)", filter: "blur(120px)" }} animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
          </div>
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <div className="rounded-3xl p-10 sm:p-14 md:p-16 relative overflow-hidden" style={{ background: "rgba(17,17,17,0.45)", backdropFilter: "blur(24px) saturate(1.3)", WebkitBackdropFilter: "blur(24px) saturate(1.3)", border: "1px solid rgba(255,255,255,0.06)", boxShadow: "0 8px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)" }}>
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,169,110,0.08) 0%, transparent 60%)" }} />
                <div className="relative z-10">
                  <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] font-[family-name:var(--font-heading)]">Your business deserves a better website.</motion.h2>
                  <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.15 }} className="mt-5 text-gray-text text-base sm:text-lg leading-relaxed">Tell us what you want to build, and we&rsquo;ll help turn it into a modern, professional website.</motion.p>
                  <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.25 }} className="mt-8 flex flex-wrap justify-center gap-4">
                    <MagneticButton variant="primary" href="#contact" ariaLabel="Start your website">Start Your Website</MagneticButton>
                    <MagneticButton variant="secondary" href="https://wa.me/919873721207?text=Hi%20ScaleFlow%2C%20I%E2%80%99m%20interested%20in%20building%20or%20redesigning%20a%20website%20for%20my%20business." target="_blank" rel="noopener noreferrer" ariaLabel="Chat on WhatsApp"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>Chat on WhatsApp</MagneticButton>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(201,169,110,0.04) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(201,169,110,0.03) 0%, transparent 50%)" }} />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:gap-16 lg:grid-cols-2">
              <ScrollReveal>
                <div className="rounded-2xl p-8 sm:p-10 relative overflow-hidden" style={{ background: "rgba(17,17,17,0.4)", backdropFilter: "blur(16px) saturate(1.2)", WebkitBackdropFilter: "blur(16px) saturate(1.2)", border: "1px solid rgba(255,255,255,0.06)", boxShadow: "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.03)" }}>
                  <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px pointer-events-none" style={{ background: "linear-gradient(to right, transparent, rgba(201,169,110,0.2), transparent)" }} />
                  <div className="relative z-10">
                    <motion.span initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="inline-block text-xs tracking-[0.2em] uppercase text-gold font-medium mb-6">Contact</motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.1 }} className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] font-[family-name:var(--font-heading)]">Let&rsquo;s build your website.</motion.h2>
                    <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-4 text-gray-text text-base leading-relaxed">Fill in the form and we&rsquo;ll get back to you within 24 hours.</motion.p>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                      <FloatingInput label="Full Name" name="name" type="text" required autoComplete="name" />
                      <div className="grid gap-5 sm:grid-cols-2">
                        <FloatingInput label="Phone Number" name="phone" type="tel" required autoComplete="tel" />
                        <FloatingInput label="Email Address" name="email" type="email" autoComplete="email" />
                      </div>
                      <FloatingInput label="Business or Brand Name" name="brand" type="text" />
                      <FloatingSelect label="What kind of website?" name="type" required options={["Business Website", "E-commerce Website", "Portfolio Website", "Landing Page", "Website Redesign", "Not Sure Yet"]} />
                      <FloatingTextarea label="Tell us about your project" name="message" rows={5} />
                      <FloatingSelect label="Budget Range" name="budget" options={["Under ₹10,000", "₹10,000 – ₹25,000", "₹25,000 – ₹50,000", "₹50,000 – ₹1,00,000", "Above ₹1,00,000"]} />

                      {formError && (
                        <p className="text-sm text-red-400 bg-red-500/10 rounded-lg px-4 py-3 border border-red-500/20">
                          {formError}
                        </p>
                      )}
                      <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="group relative w-full sm:w-auto px-8 py-3.5 bg-gold text-dark rounded-full font-medium text-sm tracking-tight overflow-hidden transition-colors" style={{ boxShadow: "0 0 40px -12px rgba(201,169,110,0.4)" }}><span className="relative z-10">Send Website Enquiry</span></motion.button>
                    </form>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="lg:pl-12 rounded-2xl p-8 sm:p-10 relative overflow-hidden" style={{ background: "rgba(17,17,17,0.4)", backdropFilter: "blur(16px) saturate(1.2)", WebkitBackdropFilter: "blur(16px) saturate(1.2)", border: "1px solid rgba(255,255,255,0.06)", boxShadow: "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.03)" }}>
                  <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px pointer-events-none" style={{ background: "linear-gradient(to right, transparent, rgba(201,169,110,0.2), transparent)" }} />
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-6">Get in touch</h3>
                    <div className="space-y-5">
                      <ContactItem icon={<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />} label="Phone" value="+91 98737 21207" href="tel:+919873721207" />
                      <ContactItem icon={<rect x="2" y="4" width="20" height="16" rx="2" />} label="Email" value="scaleflowbusiness@gmail.com" href="mailto:scaleflowbusiness@gmail.com" />
                      <ContactItem icon={<><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></>} label="Location" value="Delhi, India" />
                    </div>
                    <motion.a href="https://wa.me/919873721207?text=Hi%20ScaleFlow%2C%20I%E2%80%99m%20interested%20in%20building%20or%20redesigning%20a%20website%20for%20my%20business." target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="mt-7 inline-flex items-center gap-2.5 px-6 py-3 bg-[#25D366] text-white rounded-full text-sm font-medium hover:bg-[#1da851] transition-colors" aria-label="Chat with ScaleFlow on WhatsApp"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>Chat on WhatsApp</motion.a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative py-12 md:py-16" style={{ background: "linear-gradient(180deg, rgba(17,17,17,0.3) 0%, rgba(10,10,10,0.6) 100%)", backdropFilter: "blur(20px) saturate(1.2)", WebkitBackdropFilter: "blur(20px) saturate(1.2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="/" className="inline-flex items-center gap-2 group" aria-label="ScaleFlow homepage">
                <div className="h-8 w-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center"><span className="text-sm font-bold text-gold">S</span></div>
                <span className="text-lg font-bold font-[family-name:var(--font-heading)]">ScaleFlow</span>
              </a>
              <p className="mt-4 text-sm text-gray-text leading-relaxed">Custom websites designed and developed for modern businesses.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Navigate</h4>
              <ul className="space-y-2.5">
                <li><a href="/work" className="text-sm text-gray-text hover:text-gold transition-colors">Work</a></li>
                <li><a href="#about" className="text-sm text-gray-text hover:text-gold transition-colors">About</a></li>
                <li><a href="#process" className="text-sm text-gray-text hover:text-gold transition-colors">Process</a></li>
                <li><a href="#contact" className="text-sm text-gray-text hover:text-gold transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2.5">
                <li><a href="tel:+919873721207" className="text-sm text-gray-text hover:text-gold transition-colors">+91 98737 21207</a></li>
                <li><a href="mailto:scaleflowbusiness@gmail.com" className="text-sm text-gray-text hover:text-gold transition-colors">scaleflowbusiness@gmail.com</a></li>
                <li><p className="text-sm text-gray-text">Delhi, India</p></li>
                <li><a href="https://wa.me/919873721207?text=Hi%20ScaleFlow%2C%20I%E2%80%99m%20interested%20in%20building%20or%20redesigning%20a%20website%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="text-sm text-gray-text hover:text-[#25D366] transition-colors">WhatsApp</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2.5">
                <li><a href="/privacy" className="text-sm text-gray-text hover:text-gold transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-text/60">&copy; {new Date().getFullYear()} ScaleFlow. All rights reserved.</p>
            <p className="text-xs text-gray-text/40">Designed & developed with precision in Delhi.</p>
          </div>
        </div>
      </footer>

      <FloatingCTA />
    </>
  );
}
