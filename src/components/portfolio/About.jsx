import React from "react";
import { personalInfo } from "../../data/mock";
import { Terminal, Cloud, Zap } from "lucide-react";

const highlights = [
  {
    icon: Terminal,
    title: "Backend Architect",
    desc: "Building robust .NET 8 microservices with Clean Architecture, DDD, and CQRS patterns.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native",
    desc: "Azure certified. Designing containerized, scalable systems with Docker & modern DevOps.",
  },
  {
    icon: Zap,
    title: "Full-Stack Capable",
    desc: "Crafting responsive interfaces with React, Next.js, Angular, and interactive visualizations.",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-[#09090f] py-24 md:py-32">
      <div className="max-w-[87.5rem] mx-auto px-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span
            className="text-[#94a3b8] text-xs font-medium uppercase tracking-[0.2em]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            01 / About
          </span>
          <div className="h-px flex-1 bg-[#2d2b6e]/50" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div>
            <h2
              className="text-white font-black text-4xl md:text-5xl leading-tight mb-8 uppercase"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Crafting Modern{" "}
              <span className="text-[#818cf8]">Software</span>{" "}
              Solutions
            </h2>
            <p
              className="text-[#94a3b8] text-lg leading-relaxed mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {personalInfo.summary}
            </p>
            <p
              className="text-[#94a3b8] text-lg leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {personalInfo.summaryExtended}
            </p>
          </div>

          {/* Right — highlight cards */}
          <div className="flex flex-col gap-5">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="group flex gap-5 p-6 rounded-xl border border-[#2d2b6e]/50 bg-[#13132a]/30 hover:bg-[#2d2b6e]/30 hover:border-[#6366f1]/30 transition-all duration-300 cursor-default"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#2d2b6e]/50 flex items-center justify-center group-hover:bg-[#6366f1]/10 transition-colors duration-300">
                  <item.icon size={22} className="text-[#818cf8]" />
                </div>
                <div>
                  <h3
                    className="text-white font-semibold text-base mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[#94a3b8] text-sm leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;