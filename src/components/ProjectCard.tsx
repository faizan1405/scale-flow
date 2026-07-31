"use client";

import { useState, useRef } from "react";
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
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({ x: y * -8, y: x * 8 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovering(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="group"
    >
      <motion.div
        ref={cardRef}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          scale: isHovering ? 1.02 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
        onClick={() => onOpenModal(project)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpenModal(project);
          }
        }}
        className="relative rounded-2xl border border-white/[0.06] bg-dark-card overflow-hidden transition-all duration-500 hover:border-gold/15 cursor-pointer"
        style={{ transformStyle: "preserve-3d", perspective: 1200 }}
      >
        {/* 3D shine effect on hover */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none z-10"
          animate={{
            opacity: isHovering ? 1 : 0,
            backgroundPosition: isHovering
              ? `${50 + tilt.y * 20}% ${50 + tilt.x * 20}%`
              : "50% 50%",
          }}
          transition={{ duration: 0.3 }}
          style={{
            background: isHovering
              ? `radial-gradient(circle at ${50 + tilt.y * 30}% ${50 + tilt.x * 30}%, rgba(201,169,110,0.08), transparent 60%)`
              : "transparent",
          }}
        />

        {/* Shadow that follows tilt */}
        <motion.div
          aria-hidden="true"
          className="absolute -inset-1 bg-black/40 rounded-2xl blur-xl pointer-events-none -z-10"
          animate={{
            x: tilt.y * 4,
            y: tilt.x * 4 + 8,
            opacity: isHovering ? 0.6 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {/* Screenshot area */}
        <div className="relative aspect-[16/10] bg-[#0c0c0c] overflow-hidden">
          {/* Browser chrome */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1.5 px-3 py-2 bg-gradient-to-b from-black/70 to-transparent"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-green-400/70" />
            <div className="ml-2 h-2 flex-1 max-w-[45%] rounded-sm bg-white/[0.07]" />
          </div>

          {!imgError ? (
            <motion.div
              animate={{ scale: isHovering ? 1.05 : 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full h-full"
            >
              <Image
                src={`/images/projects/${project.id}.png`}
                alt={`${project.name} — ${project.industry} ${project.type} website screenshot`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top"
                loading="lazy"
                onError={() => setImgError(true)}
              />
            </motion.div>
          ) : (
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

          {/* Gradient overlay on hover */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent z-[5]"
            animate={{ opacity: isHovering ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />

          {/* Hover CTA */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-[6]"
            animate={{ opacity: isHovering ? 1 : 0, y: isHovering ? 0 : 10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-dark text-xs font-semibold backdrop-blur-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              View Project Details
            </div>
          </motion.div>

          {/* Live badge */}
          {project.url && (
            <div className="absolute top-3 right-3 z-20">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/15 border border-green-500/20 text-[10px] text-green-400 font-medium tracking-wide">
                <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                LIVE
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 relative z-10">
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

          <p className="mt-3 text-sm text-gray-text leading-relaxed line-clamp-2">
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
      </motion.div>
    </motion.div>
  );
}
