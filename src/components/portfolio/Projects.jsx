import React from "react";
import { projects } from "../../data/mock";
import { ArrowUpRight, Calendar } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="bg-brand-bg py-16 md:py-20">
      <div className="max-w-[87.5rem] mx-auto px-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span
            className="text-brand-muted text-xs font-medium uppercase tracking-[0.2em]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            04 / Projects
          </span>
          <div className="h-px flex-1 bg-brand-border/50" />
        </div>

        <h2
          className="text-brand-fg font-black text-4xl md:text-5xl leading-tight mb-16 uppercase"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Featured <span className="text-brand-accent">Work</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-2xl border border-brand-border/50 bg-brand-surface/15 hover:border-brand-primary/30 hover:bg-brand-surface/30 transition-all duration-300 overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/[0.03] rounded-full blur-[60px] group-hover:bg-brand-primary/[0.07] transition-all duration-500" />

              {/* Header */}
              <div className="relative z-10 flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-brand-border/40 flex items-center justify-center text-brand-accent group-hover:bg-brand-primary/10 transition-colors duration-300">
                  {project.icon}
                </div>
                <div className="flex items-center gap-2 text-brand-muted">
                  <Calendar size={14} />
                  <span
                    className="text-xs font-medium"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3
                className="relative z-10 text-brand-fg font-bold text-2xl mb-4 group-hover:text-brand-accent transition-colors duration-300"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {project.title}
                <ArrowUpRight
                  size={20}
                  className="inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </h3>

              {/* Descriptions */}
              <ul className="relative z-10 space-y-2 mb-6">
                {project.descriptions.map((desc, dIdx) => (
                  <li
                    key={dIdx}
                    className="text-brand-muted text-sm leading-relaxed pl-4 border-l-2 border-brand-border/40"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {desc}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="relative z-10 flex flex-wrap gap-2">
                {project.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-brand-accent/80 text-xs font-medium px-3 py-1.5 rounded-full border border-brand-border bg-brand-border/15 group-hover:border-brand-primary/30 transition-colors duration-300"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
