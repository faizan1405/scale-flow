"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type Project, projects } from "@/data/projects";

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={() => onOpen(project)}
      className="group cursor-pointer rounded-2xl overflow-hidden"
      style={{
        background: "linear-gradient(180deg, rgba(17,17,17,0.5) 0%, rgba(10,10,10,0.7) 100%)",
        backdropFilter: "blur(16px) saturate(1.2)",
        WebkitBackdropFilter: "blur(16px) saturate(1.2)",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.03)",
        transition: "box-shadow 0.4s ease",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow =
          "0 24px 48px -12px rgba(0,0,0,0.4), 0 0 0 1px rgba(201,169,110,0.1) inset")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow =
          "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.03)")
      }
    >
      {/* Browser mockup top */}
      <div className="relative">
        <div
          className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]"
          style={{ background: "rgba(255,255,255,0.02)" }}
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-white/[0.04] text-[10px] text-gray-text/60 truncate">
            {project.url
              ? new URL(project.url).hostname
              : `${project.name.toLowerCase().replace(/\s+/g, "")}.in`}
          </div>
        </div>

        {/* Screenshot placeholder */}
        <div
          className="relative aspect-[16/10] overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${project.accentGradient.includes("emerald") ? "#0f1f1a" : project.accentGradient.includes("rose") ? "#1f0f14" : project.accentGradient.includes("amber") ? "#1f180f" : project.accentGradient.includes("indigo") ? "#14101f" : project.accentGradient.includes("blue") ? "#0f1420" : "#141414"})` }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,169,110,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.3) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          {/* Faux website content */}
          <div className="relative h-full p-5 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className={`h-5 w-5 rounded ${project.iconBg} flex items-center justify-center`}>
                  <span className="text-[8px] font-bold text-white">{project.name[0]}</span>
                </div>
                <div className="h-1.5 w-16 rounded bg-white/30" />
              </div>
              <div className="flex gap-1.5">
                <div className="h-1 w-6 rounded bg-white/15" />
                <div className="h-1 w-6 rounded bg-white/15" />
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="h-2 w-3/4 rounded bg-white/25" />
              <div className="h-1.5 w-full rounded bg-white/10" />
              <div className="h-1.5 w-5/6 rounded bg-white/10" />
              <div className="h-1.5 w-2/3 rounded bg-white/10" />
            </div>
            <div className="mt-auto flex gap-2">
              <div className="h-6 w-20 rounded bg-gold/80" />
              <div className="h-6 w-16 rounded border border-white/20" />
            </div>
          </div>

          {/* Hover overlay */}
          <div
            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <span className="text-white text-sm font-medium px-4 py-2 rounded-full border border-white/20 bg-white/10">
              {project.url ? "Visit Website" : "View Case Study"}
            </span>
          </div>

          {/* Case study badge */}
          {project.isCaseStudy && (
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-medium">
              Case Study
            </div>
          )}
        </div>
      </div>

      {/* Card body */}
      <div className="p-6">
        <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-white group-hover:text-gold transition-colors">
          {project.name}
        </h3>
        <p className="text-xs text-gray-text mt-1 tracking-wide">
          {project.industry} · {project.type}
        </p>
        <p className="mt-3 text-sm text-gray-text/80 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Capabilities tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.capabilities.slice(0, 4).map((cap) => (
            <span
              key={cap}
              className="px-2.5 py-1 rounded-full text-[11px] text-gray-text bg-white/[0.04] border border-white/[0.06]"
            >
              {cap}
            </span>
          ))}
          {project.capabilities.length > 4 && (
            <span className="px-2.5 py-1 rounded-full text-[11px] text-gray-text bg-white/[0.04] border border-white/[0.06]">
              +{project.capabilities.length - 4}
            </span>
          )}
        </div>

        {/* Action row */}
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-gray-text/60">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{project.url ? "View Live Website" : "View Case Study"}</span>
          </div>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-xs text-gold hover:text-gold-light transition-colors"
            >
              Visit Site &rarr;
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function SelectedWork() {
  const [modalProject, setModalProject] = useState<Project | null>(null);

  return (
    <section id="work" className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="inline-block text-xs tracking-[0.2em] uppercase text-gold font-medium mb-6"
          >
            Selected Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] font-[family-name:var(--font-heading)]"
          >
            Websites built for real businesses.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-gray-text text-base sm:text-lg leading-relaxed"
          >
            A selection of websites designed and developed to help businesses
            present themselves professionally and connect with their customers.
          </motion.p>
        </div>

        {/* Project grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ProjectCard project={project} onOpen={setModalProject} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setModalProject(null)}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
              style={{
                background: "linear-gradient(180deg, rgba(17,17,17,0.95) 0%, rgba(10,10,10,0.98) 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 32px 64px -16px rgba(0,0,0,0.8)",
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setModalProject(null)}
                className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Close project details"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>

              {/* Browser mockup */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-white/[0.04] text-[10px] text-gray-text/60 truncate">
                  {modalProject.url
                    ? new URL(modalProject.url).hostname
                    : `${modalProject.name.toLowerCase().replace(/\s+/g, "")}.in`}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)]">
                  {modalProject.name}
                </h3>
                <p className="text-sm text-gray-text mt-1">
                  {modalProject.industry} · {modalProject.type}
                </p>
                <p className="mt-4 text-gray-text text-base leading-relaxed">
                  {modalProject.description}
                </p>

                {/* Capabilities */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {modalProject.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="px-3 py-1.5 rounded-full text-xs text-gold bg-gold/10 border border-gold/20"
                    >
                      {cap}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {modalProject.url ? (
                    <a
                      href={modalProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-dark rounded-full text-sm font-medium hover:bg-gold-light transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      View Live Website
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full text-sm font-medium">
                      Case Study — Website Currently Unavailable
                    </span>
                  )}
                  <a
                    href="#contact"
                    onClick={() => setModalProject(null)}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-white rounded-full text-sm font-medium hover:bg-white/5 transition-colors"
                  >
                    Start a Similar Project
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}