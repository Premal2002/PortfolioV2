import React from "react";
import { education, certifications } from "../../data/mock";
import { GraduationCap, Award, BadgeCheck, ExternalLink } from "lucide-react";
import { useInView, fadeUp } from "../../hooks/useInView";

const Credentials = () => {
  const [sectionRef, inView] = useInView();

  return (
    <section id="credentials" className="bg-brand-bg py-16 md:py-20">
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
            05 / Credentials
          </span>
          <div className="h-px flex-1 bg-brand-border/50" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <h2
              className="text-brand-fg font-black text-4xl md:text-5xl leading-tight mb-12 uppercase"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                ...fadeUp(inView, 80),
              }}
            >
              Edu<span className="text-brand-accent">cation</span>
            </h2>

            <div className="flex flex-col gap-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  style={fadeUp(inView, 160 + idx * 90)}
                  className="group p-6 rounded-xl border border-brand-border/50 bg-brand-surface/20 hover:border-brand-primary/20 hover:bg-brand-surface/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-border/50 flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors duration-300">
                      <GraduationCap size={22} className="text-brand-accent" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-brand-fg font-semibold text-lg mb-1"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {edu.degree}
                      </h3>
                      <p
                        className="text-brand-accent text-sm font-medium mb-2"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-4">
                        <span
                          className="text-brand-muted text-sm"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {edu.period}
                        </span>
                        <span className="text-brand-accent/80 text-xs font-semibold px-2.5 py-0.5 rounded-md bg-brand-border/30 border border-brand-border/40">
                          {edu.score}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2
              className="text-brand-fg font-black text-4xl md:text-5xl leading-tight mb-12 uppercase"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                ...fadeUp(inView, 120),
              }}
            >
              Certi<span className="text-brand-accent">fications</span>
            </h2>

            <div className="flex flex-col gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  style={fadeUp(inView, 200 + idx * 70)}
                  className="group flex items-center gap-4 p-5 rounded-xl border border-brand-border/50 bg-brand-surface/20 hover:border-brand-primary/20 hover:bg-brand-surface/30 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-border/50 flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors duration-300">
                    {idx === 0 ? (
                      <BadgeCheck size={20} className="text-brand-accent" />
                    ) : (
                      <Award size={20} className="text-brand-accent" />
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4
                      className="text-brand-fg font-medium text-sm truncate"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {cert.name}
                    </h4>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-brand-muted text-xs"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {cert.issuer}
                      </span>
                      <span className="text-brand-border">·</span>
                      <span
                        className="text-brand-muted text-xs"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {cert.date}
                      </span>
                    </div>
                  </div>

                  {/* View Certificate button — only rendered when link exists */}
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                                 border border-brand-border/60 text-brand-muted
                                 hover:border-brand-primary/50 hover:text-brand-accent hover:bg-brand-primary/5
                                 transition-all duration-200"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      title="View Certificate"
                    >
                      <ExternalLink size={12} />
                      <span className="hidden sm:inline">View</span>
                    </a>
                  ) : (
                    // Invisible placeholder to keep layout consistent
                    <div className="flex-shrink-0 w-[60px] sm:w-[68px]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;