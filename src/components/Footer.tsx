"use client";

import Link from "next/link";
import { NAV_LINKS, WHATSAPP_LINK } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-14 sm:py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                  <span className="text-dark text-sm font-bold font-[family-name:var(--font-heading)]">
                    SF
                  </span>
                </div>
                <span className="text-xl font-semibold tracking-tight font-[family-name:var(--font-heading)]">
                  Scale<span className="text-gold">Flow</span>
                </span>
              </Link>
              <p className="mt-4 text-sm text-gray-text max-w-sm leading-[1.7]">
                Custom websites designed and developed for modern businesses.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xs text-gray-text uppercase tracking-[0.15em] font-medium mb-4">
                Navigation
              </h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-light hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs text-gray-text uppercase tracking-[0.15em] font-medium mb-4">
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:+918888888888"
                    className="text-sm text-gray-light hover:text-gold transition-colors duration-300"
                  >
                    +91 88888 88888
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@joinscaleflow.in"
                    className="text-sm text-gray-light hover:text-gold transition-colors duration-300"
                  >
                    info@joinscaleflow.in
                  </a>
                </li>
                <li>
                  <span className="text-sm text-gray-light">
                    New Delhi, India
                  </span>
                </li>
                <li>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-green-400 hover:text-green-300 transition-colors duration-300"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-text/50">
              &copy; {new Date().getFullYear()} ScaleFlow. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-xs text-gray-text/50 hover:text-gray-text transition-colors"
              >
                Privacy Policy
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-green-400 hover:text-green-300 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}