import React from "react";
import { personalInfo } from "../../data/mock";
import { ArrowDown, MapPin, Briefcase } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-[#09090f] overflow-hidden"
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
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-[#4f46e5]/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-[#818cf8]/8 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#6366f1]/5 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-[87.5rem] mx-auto px-10 w-full py-32">
        <div className="flex flex-col gap-8">
          {/* Status badge */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#818cf8] opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#6366f1]" />
            </span>
            <span
              className="text-[#94a3b8] text-sm font-medium uppercase tracking-widest"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Available for opportunities
            </span>
          </div>

          {/* Main heading */}
          <div>
            <h1
              className="text-[#818cf8] font-black uppercase leading-[0.85]"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(3.5rem, 8vw, 8rem)",
              }}
            >
              {personalInfo.firstName}
            </h1>
            <h1
              className="text-white font-black uppercase leading-[0.85] mt-2"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(3.5rem, 8vw, 8rem)",
              }}
            >
              {personalInfo.lastName}
            </h1>
          </div>

          {/* Subtitle area */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <Briefcase size={18} className="text-[#818cf8]" />
              <span
                className="text-white text-lg font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {personalInfo.title}
              </span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-[#2d2b6e]" />
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-[#94a3b8]" />
              <span
                className="text-[#94a3b8] text-base"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Tagline */}
          <p
            className="text-[#94a3b8] text-lg max-w-2xl leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {personalInfo.tagline}. Expertise in{" "}
            <span className="text-white">ASP.NET Core</span>,{" "}
            <span className="text-white">Microservices</span>,{" "}
            <span className="text-white">React</span> &{" "}
            <span className="text-white">Cloud-Native Design</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center bg-[#6366f1] text-white font-semibold text-base px-8 py-3.5 rounded-full hover:scale-[1.02] hover:bg-[#4f46e5] active:scale-[0.98] transition-all duration-300 uppercase tracking-tight"
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.04em" }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center bg-transparent text-[#818cf8] font-semibold text-base px-8 py-3.5 rounded-full border border-[#4f46e5] hover:bg-[#6366f1] hover:text-white active:scale-[0.98] transition-all duration-300 uppercase tracking-tight"
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.04em" }}
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#94a3b8] hover:text-[#818cf8] transition-colors duration-300 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;