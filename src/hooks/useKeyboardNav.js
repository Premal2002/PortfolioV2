import { useEffect, useCallback, useState } from "react";

export const NAV_SECTIONS = [
    { key: "1", id: "hero", label: "Home" },
    { key: "2", id: "about", label: "About" },
    { key: "3", id: "skills", label: "Skills" },
    { key: "4", id: "experience", label: "Experience" },
    { key: "5", id: "projects", label: "Projects" },
    { key: "6", id: "credentials", label: "Credentials" },
    { key: "7", id: "contact", label: "Contact" },
];

/**
 * Keyboard navigation for portfolio sections.
 *
 * Keys 1–7 jump to the matching section when no input/textarea is focused.
 * Returns the id of the most recently activated section (for UI feedback).
 */
export function useKeyboardNav() {
    const [activeSection, setActiveSection] = useState(null);

    const jumpTo = useCallback((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        // Smooth scroll
        el.scrollIntoView({ behavior: "smooth", block: "start" });

        // Ensure the section element is focusable, then focus it
        // (helps screen readers announce the landmark without altering layout)
        if (!el.hasAttribute("tabindex")) {
            el.setAttribute("tabindex", "-1");
        }
        // Delay focus slightly so scroll animation has started
        setTimeout(() => el.focus({ preventScroll: true }), 80);

        // Surface feedback to any listening UI
        setActiveSection(id);
        setTimeout(() => setActiveSection(null), 1500);
    }, []);

    useEffect(() => {
        const onKeyDown = (e) => {
            // Ignore when user is actively typing
            const tag = document.activeElement?.tagName ?? "";
            if (["INPUT", "TEXTAREA", "SELECT"].includes(tag)) return;
            if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;

            const match = NAV_SECTIONS.find((s) => s.key === e.key);
            if (match) {
                e.preventDefault();
                jumpTo(match.id);
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [jumpTo]);

    return { jumpTo, activeSection, sections: NAV_SECTIONS };
}