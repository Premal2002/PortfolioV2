import React, { useState, useEffect } from "react";
import { Keyboard, X } from "lucide-react";
import { NAV_SECTIONS } from "../../hooks/useKeyboardNav";

/**
 * A floating `?` button that reveals keyboard navigation shortcuts.
 * Also shows a brief toast when a section shortcut is activated.
 */
const KeyboardNav = ({ activeSection, jumpTo }) => {
    const [open, setOpen] = useState(false);
    const [toastLabel, setToastLabel] = useState(null);

    // Show a brief toast when a section is activated via keyboard
    useEffect(() => {
        if (!activeSection) return;
        const match = NAV_SECTIONS.find((s) => s.id === activeSection);
        if (!match) return;

        setToastLabel(match.label);
        const t = setTimeout(() => setToastLabel(null), 1400);
        return () => clearTimeout(t);
    }, [activeSection]);

    return (
        <>
            {/* ── Section-jump toast ──────────────────────────────── */}
            <div
                aria-live="polite"
                aria-atomic="true"
                style={{
                    position: "fixed",
                    bottom: "5.5rem",
                    right: "1.5rem",
                    zIndex: 9999,
                    pointerEvents: "none",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    opacity: toastLabel ? 1 : 0,
                    transform: toastLabel ? "translateY(0)" : "translateY(8px)",
                }}
            >
                <span
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        background: "rgb(99 102 241 / 0.15)",
                        border: "1px solid rgb(99 102 241 / 0.4)",
                        color: "rgb(var(--brand-fg))",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        padding: "0.35rem 0.75rem",
                        borderRadius: "9999px",
                        backdropFilter: "blur(8px)",
                    }}
                >
                    <span style={{ color: "rgb(var(--brand-accent))" }}>↪</span>
                    {toastLabel}
                </span>
            </div>

            {/* ── Shortcut panel ──────────────────────────────────── */}
            {open && (
                <div
                    role="dialog"
                    aria-label="Keyboard navigation shortcuts"
                    style={{
                        position: "fixed",
                        bottom: "4.5rem",
                        right: "1.5rem",
                        zIndex: 9998,
                        background: "rgb(var(--brand-surface) / 0.95)",
                        border: "1px solid rgb(var(--brand-border) / 0.7)",
                        borderRadius: "0.875rem",
                        padding: "1rem 1.25rem",
                        backdropFilter: "blur(16px)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
                        minWidth: "200px",
                    }}
                >
                    <p
                        style={{
                            margin: "0 0 0.75rem",
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.65rem",
                            fontWeight: 600,
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "rgb(var(--brand-muted))",
                        }}
                    >
                        Jump to section
                    </p>

                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                        {NAV_SECTIONS.map(({ key, id, label }) => (
                            <li key={id}>
                                <button
                                    onClick={() => {
                                        jumpTo(id);
                                        setOpen(false);
                                    }}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.6rem",
                                        background: "transparent",
                                        border: "none",
                                        cursor: "pointer",
                                        padding: "0.1rem 0",
                                        width: "100%",
                                        textAlign: "left",
                                    }}
                                >
                                    <kbd
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: "1.4rem",
                                            height: "1.4rem",
                                            borderRadius: "0.3rem",
                                            border: "1px solid rgb(var(--brand-border) / 0.8)",
                                            background: "rgb(var(--brand-bg) / 0.6)",
                                            fontFamily: "'Inter', monospace",
                                            fontSize: "0.7rem",
                                            fontWeight: 700,
                                            color: "rgb(var(--brand-accent))",
                                            flexShrink: 0,
                                        }}
                                    >
                                        {key}
                                    </kbd>
                                    <span
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontSize: "0.8rem",
                                            color: "rgb(var(--brand-fg))",
                                        }}
                                    >
                                        {label}
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>

                    <p
                        style={{
                            margin: "0.75rem 0 0",
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.62rem",
                            color: "rgb(var(--brand-muted) / 0.6)",
                        }}
                    >
                        Press key when not in a text field
                    </p>
                </div>
            )}

            {/* ── Toggle button ───────────────────────────────────── */}
            <button
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close keyboard shortcuts" : "Show keyboard shortcuts"}
                aria-expanded={open}
                title="Keyboard shortcuts"
                style={{
                    position: "fixed",
                    bottom: "1.5rem",
                    right: "1.5rem",
                    zIndex: 9999,
                    width: "2.6rem",
                    height: "2.6rem",
                    borderRadius: "50%",
                    border: "1px solid rgb(var(--brand-border) / 0.6)",
                    background: "rgb(var(--brand-surface) / 0.85)",
                    backdropFilter: "blur(12px)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: open ? "rgb(var(--brand-accent))" : "rgb(var(--brand-muted))",
                    transition: "color 0.2s, border-color 0.2s, background 0.2s",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.25)",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.color = "rgb(var(--brand-accent))";
                    e.currentTarget.style.borderColor = "rgb(var(--brand-primary) / 0.5)";
                }}
                onMouseLeave={(e) => {
                    if (!open) {
                        e.currentTarget.style.color = "rgb(var(--brand-muted))";
                        e.currentTarget.style.borderColor = "rgb(var(--brand-border) / 0.6)";
                    }
                }}
            >
                {open ? <X size={16} /> : <Keyboard size={16} />}
            </button>
        </>
    );
};

export default KeyboardNav;