import React from "react";
import { experience } from "../../data/mock";
import { Building2, ChevronRight } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="bg-brand-bg py-16 md:py-20">
      <div className="max-w-[87.5rem] mx-auto px-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span
            className="text-brand-muted text-xs font-medium uppercase tracking-[0.2em]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            03 / Experience
          </span>
          <div className="h-px flex-1 bg-brand-border/50" />
        </div>

        <h2
          className="text-brand-fg font-black text-4xl md:text-5xl leading-tight mb-16 uppercase"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Work <span className="text-brand-accent">History</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-brand-border/60 hidden md:block" />

          <div className="flex flex-col gap-10">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative group">
                <div className="flex gap-6 md:gap-10">
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-shrink-0 relative z-10">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
                        exp.current
                          ? "bg-brand-primary border-brand-primary"
                          : "bg-brand-surface border-brand-border group-hover:border-brand-primary/50"
                      }`}
                    >
                      <Building2
                        size={18}
                        className={
                          exp.current ? "text-white" : "text-brand-muted"
                        }
                      />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 p-6 md:p-8 rounded-xl border border-brand-border/50 bg-brand-surface/20 group-hover:border-brand-primary/20 group-hover:bg-brand-surface/30 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3
                          className="text-brand-fg font-bold text-xl mb-1"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {exp.role}
                        </h3>
                        <span
                          className="text-brand-accent text-sm font-medium"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {exp.company}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {exp.current && (
                          <span className="text-white text-xs font-semibold px-3 py-1 bg-brand-primary rounded-full uppercase">
                            Current
                          </span>
                        )}
                        <span
                          className="text-brand-muted text-sm"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-5">
                      {exp.descriptions.map((desc, dIdx) => (
                        <li key={dIdx} className="flex gap-3 items-start">
                          <ChevronRight
                            size={16}
                            className="text-brand-hover mt-1 flex-shrink-0"
                          />
                          <span
                            className="text-brand-muted text-sm leading-relaxed"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {desc}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-brand-accent/80 text-xs font-medium px-2.5 py-1 rounded-md bg-brand-border/20 border border-brand-border/40"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
