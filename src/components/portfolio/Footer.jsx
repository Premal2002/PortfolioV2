import React from "react";
import { personalInfo, navLinks } from "../../data/mock";
import { ArrowUp, Heart } from "lucide-react";

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

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-brand-border bg-brand-surface/40 flex items-center justify-center text-brand-muted hover:text-brand-accent hover:border-brand-primary/40 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
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
