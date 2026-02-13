import React, { useState, useEffect } from "react";
import { navLinks, personalInfo } from "../../data/mock";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#1a1c1b]/95 backdrop-blur-md border-b border-[#3f4816]/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[87.5rem] mx-auto px-10 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="text-[#d9fb06] font-bold text-xl tracking-tight hover:opacity-80 transition-opacity duration-300"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          PK<span className="text-white">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#d9fb06] text-sm font-medium px-4 py-2 rounded-full hover:bg-[#3f4816]/40 transition-colors duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="hidden md:inline-flex items-center justify-center bg-[#d9fb06] text-[#1a1c1b] font-semibold text-sm px-6 py-2.5 rounded-full hover:scale-[1.02] hover:opacity-90 active:scale-[0.98] transition-transform duration-300"
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.04em" }}
        >
          Let's Talk
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#d9fb06] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#1a1c1b]/98 backdrop-blur-md border-t border-[#3f4816]/50 px-6 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#d9fb06] text-base font-medium px-4 py-3 rounded-lg hover:bg-[#3f4816]/40 transition-colors duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="mt-2 inline-flex items-center justify-center bg-[#d9fb06] text-[#1a1c1b] font-semibold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-300 w-full"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Let's Talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;