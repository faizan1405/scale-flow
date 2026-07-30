"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { type Project, projects } from "@/data/projects";

export default function SelectedWork() {
  const [modalProject, setModalProject] = useState<Project | null>(null);

  return (
    <section id="work" className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Selected Work"
            heading="Websites built for real businesses."
            description="A selection of websites designed and developed to help businesses present themselves professionally and connect with their customers."
          />
        </ScrollReveal>

        <div className="mt-14 md:mt-20 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <ProjectCard
                project={project}
                index={i}
                onOpenModal={() => setModalProject(project)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
}