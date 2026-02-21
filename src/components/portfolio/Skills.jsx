import React from "react";
import { skills } from "../../data/mock";

const Skills = () => {
  const skillCategories = Object.values(skills);

  return (
    <section id="skills" className="bg-brand-bg py-24 md:py-32">
      <div className="max-w-[87.5rem] mx-auto px-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span
            className="text-brand-muted text-xs font-medium uppercase tracking-[0.2em]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            02 / Skills
          </span>
          <div className="h-px flex-1 bg-brand-border/50" />
        </div>

        <h2
          className="text-white font-black text-4xl md:text-5xl leading-tight mb-16 uppercase"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Tech <span className="text-brand-accent">Stack</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-xl border border-brand-border/50 bg-brand-surface/20 hover:border-brand-primary/30 hover:bg-brand-surface/40 transition-all duration-300"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-brand-border/50 flex items-center justify-center text-brand-accent group-hover:bg-brand-primary/10 transition-colors duration-300">
                  {category.icon}
                </div>
                <h3
                  className="text-white font-semibold text-base"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-brand-accent text-xs font-medium px-3 py-1.5 rounded-full border border-brand-border bg-brand-border/20 hover:bg-brand-primary/10 hover:border-brand-primary/40 transition-colors duration-200 cursor-default"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {skill}
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

export default Skills;