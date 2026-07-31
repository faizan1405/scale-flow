"use client";

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
  const handleCardClick = () => {
    if (project.url) {
      window.open(project.url, "_blank", "noopener,noreferrer");
    } else {
      onOpenModal(project);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative rounded-lg border border-white/[0.06] bg-dark-card overflow-hidden transition-all duration-400 hover:border-gold/20 hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-0.5">
        {/* Screenshot */}
        <div className="relative aspect-[16/9] bg-[#0c0c0c] overflow-hidden">
          {/* Browser chrome */}
          <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1 px-2 py-1.5 bg-gradient-to-b from-black/40 to-transparent">
            <span className="h-1 w-1 rounded-full bg-red-400/50" />
            <span className="h-1 w-1 rounded-full bg-yellow-400/50" />
            <span className="h-1 w-1 rounded-full bg-green-400/50" />
            <div className="ml-1.5 h-2 flex-1 max-w-[50%] rounded-sm bg-white/10" />
          </div>

          <Image
            src={`/images/projects/${project.id}.png`}
            alt={`${project.name} website screenshot`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-all duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-[5]" />

          {/* Live badge */}
          {project.url && (
            <div className="absolute top-2 right-2 z-20">
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-green-500/20 border border-green-500/20 text-[9px] text-green-400 font-medium tracking-wide">
                <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                LIVE
              </span>
            </div>
          )}

          {/* Hover icon */}
          <div className="absolute inset-0 flex items-center justify-center z-[6] opacity-0 group-hover:opacity-100 transition-opacity duration-400">
            <div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="text-sm sm:text-[15px] font-semibold tracking-tight font-[family-name:var(--font-heading)] text-white group-hover:text-gold-light transition-colors duration-300 truncate">
                {project.name}
              </h3>
              <p className="mt-0.5 text-[10px] text-gray-text tracking-wide">
                {project.industry} · {project.type}
              </p>
            </div>
            {!project.url && (
              <span className="flex-shrink-0 text-[9px] px-1.5 py-0.5 rounded-full border border-white/[0.06] bg-white/[0.03] text-gray-text">
                Case Study
              </span>
            )}
          </div>

          <p className="mt-1.5 text-[12px] text-gray-text leading-relaxed line-clamp-1">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
