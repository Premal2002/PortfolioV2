// src/components/portfolio/ScrollToTop.jsx
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            // Show after scrolling past ~100vh (the hero)
            setVisible(window.scrollY > window.innerHeight * 0.9);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`
        fixed bottom-8 right-8 z-50
        w-11 h-11 rounded-full
        flex items-center justify-center
        bg-brand-primary text-white
        border border-brand-hover/40
        shadow-lg shadow-brand-primary/20
        hover:bg-brand-hover hover:scale-110
        active:scale-95
        transition-all duration-300
        ${visible
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }
      `}
        >
            <ArrowUp size={18} />
        </button>
    );
};

export default ScrollToTop;