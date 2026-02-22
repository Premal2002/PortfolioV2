import React from "react";
import { personalInfo } from "../../data/mock";
import { Terminal, Cloud, Zap } from "lucide-react";
import { useInView, fadeUp } from "../../hooks/useInView";

const highlights = [
  {
    icon: Terminal,
    title: "Backend Enthusiast",
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
  const [sectionRef, inView] = useInView();

  return (
    <section id="about" className="bg-brand-bg py-16 md:py-20">
      <div ref={sectionRef} className="max-w-[87.5rem] mx-auto px-10">
        {/* Section label */}
        <div
          style={fadeUp(inView, 0)}
          className="flex items-center gap-4 mb-12"
        >
          <span
            className="text-brand-muted text-xs font-medium uppercase tracking-[0.2em]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            01 / About
          </span>
          <div className="h-px flex-1 bg-brand-border/50" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div style={fadeUp(inView, 100)}>
            <h2
              className="text-brand-fg font-black text-4xl md:text-5xl leading-tight mb-8 uppercase"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Crafting Modern{" "}
              <span className="text-brand-accent">Software</span> Solutions
            </h2>
            <p
              className="text-brand-muted text-lg leading-relaxed mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {personalInfo.summary}
            </p>
            <p
              className="text-brand-muted text-lg leading-relaxed"
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
                style={fadeUp(inView, 180 + i * 100)}
                className="group flex gap-5 p-6 rounded-xl border border-brand-border/50 bg-brand-surface/30 hover:bg-brand-border/30 hover:border-brand-primary/30 transition-all duration-300 cursor-default"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-border/50 flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors duration-300">
                  <item.icon size={22} className="text-brand-accent" />
                </div>
                <div>
                  <h3
                    className="text-brand-fg font-semibold text-base mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-brand-muted text-sm leading-relaxed"
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
