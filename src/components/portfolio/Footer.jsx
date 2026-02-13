import React from "react";
import { personalInfo, navLinks } from "../../data/mock";
import { ArrowUp, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#302f2c]/30 border-t border-[#3f4816]/40 py-12">
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
              className="text-[#d9fb06] font-bold text-2xl tracking-tight hover:opacity-80 transition-opacity duration-300 inline-block mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              PK<span className="text-white">.</span>
            </a>
            <p
              className="text-[#888680] text-sm max-w-xs"
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
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-[#888680] text-sm hover:text-[#d9fb06] transition-colors duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-[#3f4816] bg-[#302f2c]/40 flex items-center justify-center text-[#888680] hover:text-[#d9fb06] hover:border-[#d9fb06]/40 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#3f4816]/40 my-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-[#888680] text-xs flex items-center gap-1"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            &copy; {new Date().getFullYear()} {personalInfo.name}. Built with{" "}
            <Heart size={12} className="text-[#d9fb06] inline" /> and code.
          </p>
          <p
            className="text-[#888680]/50 text-xs"
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