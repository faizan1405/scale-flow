"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenModal: (project: Project) => void;
}

function BrowserPreview({ project }: { project: Project }) {
  const isGreen = project.accentGradient.includes("emerald");
  const isAmber = project.accentGradient.includes("amber");
  const isBlue = project.accentGradient.includes("blue");
  const isViolet = project.accentGradient.includes("violet");

  let dotColor = "bg-gold/40";
  let layoutClass = "";
  if (isGreen) dotColor = "bg-emerald-400/50";
  if (isAmber) dotColor = "bg-amber-400/50";
  if (isBlue) dotColor = "bg-blue-400/50";
  if (isViolet) dotColor = "bg-violet-400/50";

  return (
    <div className="relative w-full aspect-[4/3] bg-[#0c0c0c] overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.06] bg-[#131313]">
        <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} />
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        <div className="ml-2 h-3 flex-1 max-w-[60%] rounded-sm bg-white/[0.04]" />
      </div>

      {/* Stylized website layout */}
      <div className="p-3 sm:p-4 h-[calc(100%-28px)]">
        {/* Navigation row */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="h-1.5 w-8 sm:w-10 rounded-sm bg-white/30" />
          <div className="flex gap-1.5 sm:gap-2">
            <div className="h-1.5 w-4 sm:w-5 rounded-sm bg-white/20" />
            <div className="h-1.5 w-4 sm:w-5 rounded-sm bg-white/20" />
            <div className="h-1.5 w-4 sm:w-5 rounded-sm bg-white/20" />
          </div>
        </div>

        {/* Hero area */}
        <div
          className={`rounded-lg p-3 sm:p-4 bg-gradient-to-br ${project.accentGradient} mb-3 sm:mb-4`}
        >
          <div className="h-2.5 sm:h-3 w-3/4 rounded-sm bg-white/80 mb-2" />
          <div className="h-1.5 w-full rounded-sm bg-white/20 mb-1" />
          <div className="h-1.5 w-5/6 rounded-sm bg-white/15" />
          <div className="mt-2.5 sm:mt-3 h-5 sm:h-6 w-16 sm:w-20 rounded-sm bg-white/40" />
        </div>

        {/* Cards row */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="aspect-[3/2] rounded-sm bg-white/[0.06]"
            />
          ))}
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6 pt-16">
        <span className="text-xs text-gold tracking-[0.15em] uppercase font-medium">
          View Project Details
        </span>
      </div>
    </div>
  );
}

export default function ProjectCard({
  project,
  index,
  onOpenModal,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={() => onOpenModal(project)}
    >
      <div className="relative rounded-xl border border-white/[0.06] bg-dark-card overflow-hidden transition-all duration-500 hover:border-gold/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/40 transition-all duration-700" />

        {/* Browser preview */}
        <div className="relative overflow-hidden">
          <BrowserPreview project={project} />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold tracking-tight font-[family-name:var(--font-heading)] text-white group-hover:text-gold-light transition-colors duration-300">
                {project.name}
              </h3>
              <p className="mt-1 text-xs text-gray-text tracking-wide">
                {project.industry} · {project.type}
              </p>
            </div>
            <div className="flex-shrink-0 h-9 w-9 rounded-lg border border-white/[0.06] bg-white/[0.03] flex items-center justify-center text-gray-text group-hover:border-gold/20 group-hover:text-gold transition-all duration-300">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </div>

          <p className="mt-3 text-sm text-gray-text leading-relaxed">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.capabilities.map((cap) => (
              <span
                key={cap}
                className="px-2.5 py-0.5 rounded-full text-[11px] font-medium border border-white/[0.06] text-gray-light"
              >
                {cap}
              </span>
            ))}
          </div>

          {/* Action row */}
          <div className="mt-5 flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs text-gold/70 group-hover:text-gold transition-colors duration-300 font-medium tracking-wide">
              View Case Study
              <svg
                className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}