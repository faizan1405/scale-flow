export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
              <span className="text-dark text-xs font-bold font-[family-name:var(--font-heading)]">
                SF
              </span>
            </div>
            <span className="text-lg font-semibold tracking-tight font-[family-name:var(--font-heading)]">
              Scale<span className="text-gold">Flow</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-gray-text">
            <a href="#pillars" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#case-studies" className="hover:text-white transition-colors">
              Case Studies
            </a>
            <a href="#process" className="hover:text-white transition-colors">
              Process
            </a>
            <a href="#cta" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-text/50">
            &copy; {new Date().getFullYear()} Scale Flow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
