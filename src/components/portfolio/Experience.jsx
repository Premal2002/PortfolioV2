import React from "react";
import { experience } from "../../data/mock";
import { Building2, ChevronRight } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="bg-[#1a1c1b] py-24 md:py-32">
      <div className="max-w-[87.5rem] mx-auto px-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span
            className="text-[#888680] text-xs font-medium uppercase tracking-[0.2em]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            03 / Experience
          </span>
          <div className="h-px flex-1 bg-[#3f4816]/50" />
        </div>

        <h2
          className="text-white font-black text-4xl md:text-5xl leading-tight mb-16 uppercase"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Work <span className="text-[#d9fb06]">History</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-[#3f4816]/60 hidden md:block" />

          <div className="flex flex-col gap-10">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative group">
                <div className="flex gap-6 md:gap-10">
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-shrink-0 relative z-10">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
                        exp.current
                          ? "bg-[#d9fb06] border-[#d9fb06]"
                          : "bg-[#302f2c] border-[#3f4816] group-hover:border-[#d9fb06]/50"
                      }`}
                    >
                      <Building2
                        size={18}
                        className={exp.current ? "text-[#1a1c1b]" : "text-[#888680]"}
                      />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 p-6 md:p-8 rounded-xl border border-[#3f4816]/50 bg-[#302f2c]/20 group-hover:border-[#d9fb06]/20 group-hover:bg-[#302f2c]/30 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3
                          className="text-white font-bold text-xl mb-1"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {exp.role}
                        </h3>
                        <span
                          className="text-[#d9fb06] text-sm font-medium"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {exp.company}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {exp.current && (
                          <span className="text-[#1a1c1b] text-xs font-semibold px-3 py-1 bg-[#d9fb06] rounded-full uppercase">
                            Current
                          </span>
                        )}
                        <span
                          className="text-[#888680] text-sm"
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
                            className="text-[#3f4816] mt-1 flex-shrink-0"
                          />
                          <span
                            className="text-[#888680] text-sm leading-relaxed"
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
                          className="text-[#d9fb06]/80 text-xs font-medium px-2.5 py-1 rounded-md bg-[#3f4816]/20 border border-[#3f4816]/40"
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