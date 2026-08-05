"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, WHATSAPP_LINK } from "@/lib/constants";

const SECTIONS = NAV_LINKS
  .filter((l) => l.href.startsWith("#"))
  .map((l) => l.href.replace("#", ""));

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const ticking = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    setActiveSection(pathname === "/work" ? "work" : "");
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          if (pathname !== "/work") {
            let current = "";
            for (const id of SECTIONS) {
              const el = document.getElementById(id);
              if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= 150) {
                  current = id;
                }
              }
            }
            setActiveSection(current);
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.08]"
          : "border-b border-transparent"
      }`}
      style={{
        background: scrolled
          ? "linear-gradient(180deg, rgba(10,10,10,0.65) 0%, rgba(10,10,10,0.45) 100%)"
          : "transparent",
        backdropFilter: scrolled ? "blur(28px) saturate(1.5)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(28px) saturate(1.5)" : "none",
        boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.2), 0 1px 0 rgba(255,255,255,0.04) inset" : "none",
      }}
    >
      {/* Animated bottom border line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        animate={{
          opacity: scrolled ? 1 : 0,
          background: scrolled
            ? "linear-gradient(to right, transparent, rgba(201,169,110,0.3), transparent)"
            : "none",
        }}
        transition={{ duration: 0.5 }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between relative">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 group"
            aria-label="ScaleFlow Home"
          >
            <motion.div
              className="relative h-14 w-14 sm:h-16 sm:w-16"
              whileHover={{ scale: 1.08, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Image
                src="/logo.svg"
                alt="ScaleFlow Logo"
                fill
                priority
                sizes="48px"
                className="object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Links - Centered */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 lg:gap-10">
            {NAV_LINKS.map((link) => {
              const isHash = link.href.startsWith("#");
              const sectionId = isHash ? link.href.replace("#", "") : "";
              const isActive = isHash
                ? activeSection === sectionId
                : pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={isHash && pathname !== "/" ? `/${link.href}` : link.href}
                  className="relative text-sm transition-colors duration-300"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      isActive ? "text-gold" : "text-gray-text hover:text-white"
                    }`}
                  >
                    {link.label}
                  </span>
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <motion.a
            href={pathname !== "/" ? "/#contact" : "#contact"}
            className="hidden md:inline-flex h-10 items-center px-5 rounded-full bg-gold text-dark text-sm font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            Start Your Website
          </motion.a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 relative z-50"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-white transition-colors"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-6 bg-white"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-white transition-colors"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden border-t border-white/[0.08] overflow-hidden"
            style={{
              background: "linear-gradient(180deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.7) 100%)",
              backdropFilter: "blur(32px) saturate(1.4)",
              WebkitBackdropFilter: "blur(32px) saturate(1.4)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link, i) => {
                const isHash = link.href.startsWith("#");
                const mobileHref =
                  isHash && pathname === "/work"
                    ? `/${link.href}`
                    : link.href;
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={mobileHref}
                      onClick={() => setMobileOpen(false)}
                      className="text-base text-gray-light hover:text-white transition-colors block py-1"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-full bg-gold text-dark text-sm font-semibold hover:bg-gold-light transition-colors"
                >
                  Start Your Website
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-green-500/30 text-green-400 text-sm font-medium hover:bg-green-500/10 transition-colors mt-1"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
