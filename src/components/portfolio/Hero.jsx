import React, { useState, useEffect } from "react";
import { personalInfo } from "../../data/mock";
import { ArrowDown, MapPin, Briefcase, Download } from "lucide-react";
import { useTypewriter } from "../../hooks/useTypewriter";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const fade = (delay) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0px)" : "translateY(20px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  });

  // ── Typing animation: cycles through tagline variants ──────────────────────
  const typedTagline = useTypewriter({
    phrases: [
      "Building scalable, real-time & data-driven applications",
      "Designing cloud-native microservices architectures",
      "Crafting high-performance backend systems",
      "Turning complex problems into clean solutions",
    ],
    typeSpeed: 65,
    deleteSpeed: 30,
    pauseAfter: 2200,
    pauseBefore: 400,
  });
  // ────────────────────────────────────────────────────────────────────────────

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-brand-bg overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(#818cf8 1px, transparent 1px), linear-gradient(90deg, #818cf8 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-brand-hover/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-brand-accent/8 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-primary/5 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-[87.5rem] mx-auto px-10 w-full py-32">
        <div className="flex flex-col gap-8">
          {/* Status badge */}
          <div style={fade(100)} className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-primary" />
            </span>
            <span
              className="text-brand-muted text-sm font-medium uppercase tracking-widest"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Available for opportunities
            </span>
          </div>

          {/* Main heading */}
          <div>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(3.5rem, 8vw, 8rem)",
                ...fade(220),
              }}
              className="text-brand-accent font-black uppercase leading-[0.85]"
            >
              {personalInfo.firstName}
            </h1>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(3.5rem, 8vw, 8rem)",
                ...fade(360),
              }}
              className="text-brand-fg font-black uppercase leading-[0.85] mt-2"
            >
              {personalInfo.lastName}
            </h1>
          </div>

          {/* Subtitle area */}
          <div
            style={fade(500)}
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
          >
            <div className="flex items-center gap-2">
              <Briefcase size={18} className="text-brand-accent" />
              <span
                className="text-brand-fg text-lg font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {personalInfo.title}
              </span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-brand-border" />
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-brand-muted" />
              <span
                className="text-brand-muted text-base"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Tagline — now animated */}
          <p
            style={{ fontFamily: "'Inter', sans-serif", ...fade(620) }}
            className="text-brand-muted text-lg max-w-2xl leading-relaxed"
          >
            {/* Typed tagline with blinking cursor */}
            <span className="text-brand-fg font-medium">
              {typedTagline}
              <span
                aria-hidden="true"
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "1.1em",
                  background: "rgb(var(--brand-accent))",
                  marginLeft: "3px",
                  verticalAlign: "middle",
                  animation: "blink 1s step-end infinite",
                }}
              />
            </span>
            {". "}Expertise in{" "}
            <span className="text-brand-fg">ASP.NET Core</span>,{" "}
            <span className="text-brand-fg">Microservices</span>,{" "}
            <span className="text-brand-fg">React</span> &{" "}
            <span className="text-brand-fg">Cloud-Native Design</span>.
          </p>

          {/* CTA Buttons */}
          <div
            style={fade(750)}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center bg-brand-primary text-white font-semibold text-base px-8 py-3.5 rounded-full hover:scale-[1.02] hover:bg-brand-hover active:scale-[0.98] transition-all duration-300 uppercase tracking-tight"
              style={{
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "-0.04em",
              }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center bg-transparent text-brand-accent font-semibold text-base px-8 py-3.5 rounded-full border border-brand-hover hover:bg-brand-primary hover:text-white active:scale-[0.98] transition-all duration-300 uppercase tracking-tight"
              style={{
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "-0.04em",
              }}
            >
              Get In Touch
            </a>

            {/* ── Resume Download ── */}
            {/* Place your resume PDF at: public/Premal_Kadam_Resume.pdf */}
            <a
              href="/Premal_Kadam_Resume.pdf"
              download="Premal_Kadam_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-brand-muted font-semibold text-base px-8 py-3.5 rounded-full border border-brand-border/60 hover:border-brand-accent hover:text-brand-accent hover:bg-brand-accent/5 active:scale-[0.98] transition-all duration-300 uppercase tracking-tight group"
              style={{
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "-0.04em",
              }}
            >
              <Download
                size={17}
                className="group-hover:translate-y-0.5 transition-transform duration-300"
              />
              Resume
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-muted hover:text-brand-accent transition-colors duration-300 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;