import { useState, useEffect, useRef } from "react";

/**
 * useTypewriter — type, delete, and cycle through phrases
 *
 * @param {string[]} phrases       - Array of strings to cycle through
 * @param {number}   typeSpeed     - ms per character while typing   (default: 80)
 * @param {number}   deleteSpeed  - ms per character while deleting  (default: 40)
 * @param {number}   pauseAfter   - ms to pause after fully typed    (default: 1800)
 * @param {number}   pauseBefore  - ms to pause before next phrase   (default: 400)
 */
export function useTypewriter({
    phrases = ["Developer", "Designer", "Creator"],
    typeSpeed = 80,
    deleteSpeed = 40,
    pauseAfter = 1800,
    pauseBefore = 400,
} = {}) {
    const [displayed, setDisplayed] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timeout = useRef(null);

    useEffect(() => {
        const current = phrases[phraseIndex];

        if (isPaused) return;

        if (!isDeleting && displayed === current) {
            // Fully typed → pause then start deleting
            timeout.current = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
            }, pauseAfter);
            setIsPaused(true);
            return;
        }

        if (isDeleting && displayed === "") {
            // Fully deleted → pause then move to next phrase
            timeout.current = setTimeout(() => {
                setIsDeleting(false);
                setPhraseIndex((i) => (i + 1) % phrases.length);
                setIsPaused(false);
            }, pauseBefore);
            setIsPaused(true);
            return;
        }

        const speed = isDeleting ? deleteSpeed : typeSpeed;

        timeout.current = setTimeout(() => {
            setDisplayed((prev) =>
                isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
            );
        }, speed);

        return () => clearTimeout(timeout.current);
    }, [displayed, isDeleting, phraseIndex, isPaused, phrases, typeSpeed, deleteSpeed, pauseAfter, pauseBefore]);

    return displayed;
}