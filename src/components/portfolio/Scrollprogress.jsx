// src/components/portfolio/ScrollProgress.jsx
import React, { useEffect, useRef } from "react";

const ScrollProgress = () => {
    const barRef = useRef(null);

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

            // Write directly to the DOM — zero React re-renders
            if (barRef.current) {
                barRef.current.style.width = `${progress}%`;
            }
        };

        window.addEventListener("scroll", updateProgress, { passive: true });
        return () => window.removeEventListener("scroll", updateProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full z-[60] h-[2px] bg-transparent">
            <div
                ref={barRef}
                className="h-full bg-brand-primary"
                style={{ width: "0%", transition: "width 0.1s ease-out" }}
            />
        </div>
    );
};

export default ScrollProgress;