"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenModal: (project: Project) => void;
}

export default function ProjectCard({
  project,
  index,
  onOpenModal,
}: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group"
    >
      <div
        className="relative rounded-2xl border border-white/[0.06] bg-dark-card overflow-hidden transition-all duration-500 hover:border-gold/15 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1 cursor-pointer"
        onClick={() => onOpenModal(project)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpenModal(project);
          }
        }}
      >
        {/* Screenshot area */}
        <div className="relative aspect-[16/10] bg-[#0c0c0c] overflow-hidden">
          {/* Browser chrome */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1.5 px-3 py-2 bg-gradient-to-b from-black/60 to-transparent"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red-400/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-green-400/60" />
            <div className="ml-2 h-2 flex-1 max-w-[45%] rounded-sm bg-white/[0.07]" />
          </div>

          {!imgError ? (
            <Image
              src={`/images/projects/${project.id}.png`}
              alt={`${project.name} — ${project.industry} ${project.type} website screenshot`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top transition-all duration-700 group-hover:scale-[1.03]"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            /* Fallback when image is missing */
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-dark-surface to-dark">
              <div className="text-center px-6">
                <div
                  className={`mx-auto h-16 w-16 rounded-2xl ${project.iconBg} flex items-center justify-center mb-4`}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="2"
                      y="3"
                      width="20"
                      height="14"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-gold/60"
                    />
                    <path
                      d="M8 21h8M12 17v4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className="text-gold/40"
                    />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-light font-[family-name:var(--font-heading)]">
                  {project.name}
                </p>
                <p className="text-xs text-gray-text mt-1">
                  {project.industry} · {project.type}
                </p>
              </div>
            </div>
          )}

          {/* Subtle hover overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[5]"
          />

          {/* Live badge */}
          {project.url && (
            <div className="absolute top-3 right-3 z-20">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/15 border border-green-500/20 text-[10px] text-green-400 font-medium tracking-wide">
                <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                LIVE
              </span>
            </div>
          )}

          {/* View button on hover */}
          <div className="absolute inset-0 flex items-center justify-center z-[6] opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-medium">
              View Project
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <h3 className="text-base sm:text-lg font-semibold tracking-tight font-[family-name:var(--font-heading)] text-white group-hover:text-gold transition-colors duration-300 truncate">
                {project.name}
              </h3>
              <p className="mt-1 text-xs text-gray-text tracking-wide">
                {project.industry} · {project.type}
              </p>
            </div>
            {project.isCaseStudy && (
              <span className="flex-shrink-0 text-[10px] px-2 py-0.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-gray-text font-medium">
                Case Study
              </span>
            )}
          </div>

          <p className="mt-2.5 text-sm text-gray-text leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Capabilities tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.capabilities.slice(0, 3).map((cap) => (
              <span
                key={cap}
                className="px-2 py-0.5 rounded-md text-[11px] font-medium border border-white/[0.06] bg-white/[0.02] text-gray-text"
              >
                {cap}
              </span>
            ))}
            {project.capabilities.length > 3 && (
              <span className="px-2 py-0.5 rounded-md text-[11px] font-medium text-gold/60">
                +{project.capabilities.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
