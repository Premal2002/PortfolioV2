import React, { useState, useEffect } from "react";
import { navLinks, personalInfo } from "../../data/mock";
import { Menu, X, Sun, Moon, Download } from "lucide-react";

const HEADER_HEIGHT = 72;

const Header = ({ isDark, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll tracking: header background + active section
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

    const updateActive = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      let current = "";
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && scrollY >= el.offsetTop - HEADER_HEIGHT - 10) {
          current = sectionIds[i];
          break;
        }
      }
      setActiveSection(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const isActive = (href) => href.replace("#", "") === activeSection;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled
            ? "bg-brand-bg/95 backdrop-blur-md border-b border-brand-border/50"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-[87.5rem] mx-auto px-10 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-0.5 hover:opacity-80 transition-opacity duration-300 select-none"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="text-brand-muted font-medium text-lg">&lt;</span>
            <span className="text-brand-accent font-black text-xl tracking-tight">
              PK
            </span>
            <span className="text-brand-muted font-medium text-base">
              &nbsp;/&gt;
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium px-4 py-2 rounded-full transition-colors duration-300 ${isActive(link.href)
                    ? "text-brand-fg bg-brand-border/40"
                    : "text-brand-muted hover:text-brand-fg hover:bg-brand-border/40"
                  }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side: theme toggle + Resume + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onToggleTheme}
              className="text-brand-muted hover:text-brand-accent transition-colors duration-300 p-2 rounded-full hover:bg-brand-border/40"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a
              href="/Premal_Kadam_Resume.pdf"
              download="Premal_Kadam_Resume.pdf"
              className="inline-flex items-center gap-1.5 text-brand-muted text-sm font-medium px-4 py-2 rounded-full border border-brand-border/50 hover:border-brand-accent hover:text-brand-accent hover:bg-brand-accent/5 transition-all duration-300 group"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <Download
                size={14}
                className="group-hover:translate-y-0.5 transition-transform duration-300"
              />
              Resume
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center justify-center bg-brand-primary text-white font-semibold text-sm px-6 py-2.5 rounded-full hover:scale-[1.02] hover:bg-brand-hover active:scale-[0.98] transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.04em" }}
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="text-brand-muted hover:text-brand-accent transition-colors duration-300 p-2 rounded-full hover:bg-brand-border/40"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="text-brand-accent p-2 z-[60] relative"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {/* Animate between hamburger and X */}
              <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${mobileOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                  }`}
              >
                <X size={24} />
              </span>
              <span
                className={`flex items-center justify-center transition-all duration-300 ${mobileOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
                  }`}
              >
                <Menu size={24} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Full-screen mobile overlay ─────────────────────────────────────── */}
      {/* Always in DOM so CSS transitions can animate both open AND close     */}
      <div
        className={`fixed inset-0 z-40 md:hidden flex flex-col transition-all duration-300 ease-in-out ${mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }`}
        style={{ background: "rgb(var(--brand-bg))" }}
      >
        {/* Top fade gradient for depth */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand-primary/5 to-transparent pointer-events-none" />

        {/* Nav links — vertically centered */}
        <nav className="flex flex-col items-center justify-center flex-1 gap-2 px-8">
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`w-full text-center text-2xl font-semibold px-6 py-4 rounded-2xl transition-all duration-300 ${isActive(link.href)
                  ? "text-brand-fg bg-brand-border/40"
                  : "text-brand-muted hover:text-brand-fg hover:bg-brand-border/40"
                }`}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                // Stagger slide-up: each link delays by 40ms × its index
                transitionDelay: mobileOpen ? `${idx * 40}ms` : "0ms",
                transform: mobileOpen ? "translateY(0)" : "translateY(16px)",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Bottom action buttons */}
        <div
          className="px-8 pb-12 flex flex-col gap-3"
          style={{
            transitionDelay: mobileOpen ? `${navLinks.length * 40}ms` : "0ms",
            transform: mobileOpen ? "translateY(0)" : "translateY(16px)",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <a
            href="/Premal_Kadam_Resume.pdf"
            download="Premal_Kadam_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-brand-muted text-base font-medium rounded-full border border-brand-border/50 hover:border-brand-accent hover:text-brand-accent hover:bg-brand-accent/5 transition-all duration-300"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <Download size={16} />
            Download Resume
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="inline-flex items-center justify-center bg-brand-primary text-white font-semibold text-base px-6 py-3.5 rounded-full hover:bg-brand-hover transition-all duration-300 w-full"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;