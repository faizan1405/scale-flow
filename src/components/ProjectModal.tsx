"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-2xl rounded-2xl border border-white/[0.08] bg-dark-card p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center rounded-full border border-white/10 text-gray-text hover:text-white hover:border-white/20 transition-colors"
            aria-label="Close project details"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Preview area */}
          <div
            className={`relative w-full aspect-video rounded-xl border border-white/[0.06] overflow-hidden ${project.iconBg}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-dark/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className={`text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] text-white/90`}
              >
                {project.name}
              </span>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs text-gold/70 tracking-[0.15em] uppercase font-medium">
              {project.industry} · {project.type}
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] text-white">
              {project.name}
            </h3>
            <p className="mt-4 text-gray-text leading-relaxed text-base sm:text-lg">
              {project.description}
            </p>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-3 font-[family-name:var(--font-heading)]">
                Capabilities
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="px-3 py-1 rounded-full text-xs font-medium border border-gold/15 bg-gold/[0.06] text-gold/80"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}