import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
    const navigate = useNavigate();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 80);
        return () => clearTimeout(t);
    }, []);

    const fade = (delay) => ({
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0px)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    });

    const goHome = () => navigate("/");

    return (
        <div
            className="relative min-h-screen flex flex-col items-center justify-center bg-brand-bg overflow-hidden px-6"
        >
            {/* ── Background grid (matches Hero) ── */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage:
                            "linear-gradient(#818cf8 1px, transparent 1px), linear-gradient(90deg, #818cf8 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* ── Decorative blobs ── */}
            <div className="absolute top-20 right-16 w-[360px] h-[360px] bg-brand-hover/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-20 left-10 w-[280px] h-[280px] bg-brand-accent/6 rounded-full blur-[100px] pointer-events-none" />

            {/* ── Content ── */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">

                {/* Big 404 */}
                <div style={fade(100)} className="relative mb-2 select-none">
                    <span
                        className="text-brand-fg font-black leading-none"
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "clamp(7rem, 20vw, 14rem)",
                            letterSpacing: "-0.06em",
                            /* Layered text-shadow creates a depth glow */
                            textShadow:
                                "0 0 80px rgba(99,102,241,0.35), 0 0 160px rgba(99,102,241,0.15)",
                        }}
                    >
                        4
                        <span style={{ color: "rgb(var(--brand-primary))" }}>0</span>
                        4
                    </span>

                    {/* Thin horizontal rule through the middle of "404" */}
                    <div
                        className="absolute left-0 right-0"
                        style={{
                            top: "52%",
                            height: "1px",
                            background:
                                "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)",
                        }}
                    />
                </div>

                {/* Label */}
                <div style={fade(200)} className="flex items-center gap-4 mb-6">
                    <div className="h-px w-12 bg-brand-border/60" />
                    <span
                        className="text-brand-muted text-xs font-medium uppercase tracking-[0.25em]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Page Not Found
                    </span>
                    <div className="h-px w-12 bg-brand-border/60" />
                </div>

                {/* Heading */}
                <h1
                    className="text-brand-fg font-black text-3xl md:text-4xl uppercase leading-tight mb-5"
                    style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        letterSpacing: "-0.03em",
                        ...fade(300),
                    }}
                >
                    Looks like you're{" "}
                    <span className="text-brand-accent">lost</span>
                </h1>

                {/* Subtext */}
                <p
                    className="text-brand-muted text-base md:text-lg leading-relaxed mb-10 max-w-md"
                    style={{ fontFamily: "'Inter', sans-serif", ...fade(400) }}
                >
                    The page you're looking for doesn't exist or has been moved.
                    Let's get you back on track.
                </p>

                {/* CTA Buttons */}
                <div
                    style={fade(520)}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    {/* Primary — Go Home */}
                    <button
                        onClick={goHome}
                        className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white font-semibold text-sm px-7 py-3.5 rounded-full hover:scale-[1.03] hover:bg-brand-hover active:scale-[0.97] transition-all duration-300 uppercase"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            letterSpacing: "-0.03em",
                        }}
                    >
                        <Home size={16} />
                        Back to Home
                    </button>

                    {/* Secondary — Go Back */}
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center gap-2 bg-transparent text-brand-accent font-semibold text-sm px-7 py-3.5 rounded-full border border-brand-hover hover:bg-brand-primary/10 active:scale-[0.97] transition-all duration-300 uppercase"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            letterSpacing: "-0.03em",
                        }}
                    >
                        <ArrowLeft size={16} />
                        Go Back
                    </button>
                </div>

                {/* Logo watermark at bottom */}
                <div
                    style={fade(650)}
                    className="mt-16"
                >
                    <button
                        onClick={goHome}
                        className="flex items-center gap-0.5 opacity-30 hover:opacity-60 transition-opacity duration-300 select-none"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        <span className="text-brand-muted font-medium text-base">&lt;</span>
                        <span className="text-brand-accent font-black text-lg tracking-tight">PK</span>
                        <span className="text-brand-muted font-medium text-sm">&nbsp;/&gt;</span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default NotFound;