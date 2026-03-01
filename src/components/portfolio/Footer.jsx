import React from "react";
import { personalInfo, navLinks } from "../../data/mock";
import { Heart, Download } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-surface/30 border-t border-brand-border/40 py-12">
      <div className="max-w-[87.5rem] mx-auto px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="flex items-center gap-0.5 hover:opacity-80 transition-opacity duration-300 select-none mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="text-brand-muted font-medium text-xl">&lt;</span>
              <span className="text-brand-accent font-black text-2xl tracking-tight">
                PK
              </span>
              <span className="text-brand-muted font-medium text-lg">
                &nbsp;/&gt;
              </span>
            </a>
            <p
              className="text-brand-muted text-sm max-w-xs"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {personalInfo.title} based in {personalInfo.location}
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(link.href)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-brand-muted text-sm hover:text-brand-accent transition-colors duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ── Resume download — utility placement, right side ── */}
          <a
            href="/Premal_Kadam_Resume.pdf"
            download="Premal_Kadam_Resume.pdf"
            className="inline-flex items-center gap-2 text-brand-muted text-sm font-medium px-5 py-2.5 rounded-full border border-brand-border/50 hover:border-brand-accent hover:text-brand-accent hover:bg-brand-accent/5 transition-all duration-300 group flex-shrink-0"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <Download
              size={14}
              className="group-hover:translate-y-0.5 transition-transform duration-300"
            />
            Download Resume
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-brand-border/40 my-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-brand-muted text-xs flex items-center gap-1"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            &copy; {new Date().getFullYear()} {personalInfo.name}. Built with{" "}
            <Heart size={12} className="text-brand-accent inline" /> and code.
          </p>
          <p
            className="text-brand-muted/50 text-xs"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Thane, Maharashtra, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;