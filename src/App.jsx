import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/portfolio/Header";
import Hero from "./components/portfolio/Hero";
import About from "./components/portfolio/About";
import Skills from "./components/portfolio/Skills";
import Experience from "./components/portfolio/Experience";
import Projects from "./components/portfolio/Projects";
import Credentials from "./components/portfolio/Credentials";
import Contact from "./components/portfolio/Contact";
import Footer from "./components/portfolio/Footer";
import NotFound from "./components/portfolio/NotFound";
import KeyboardNav from "./components/portfolio/KeyboardNav";
import { Toaster } from "./components/ui/toaster";
import { useKeyboardNav } from "./hooks/useKeyboardNav";

// ── Main portfolio page ───────────────────────────────────────────────────────
const Portfolio = ({ isDark, toggleTheme }) => {
  const { jumpTo, activeSection } = useKeyboardNav();

  return (
    <div className="App bg-brand-bg min-h-screen">
      {/* ── Skip-to-content link (visible only on focus) ─────────────────── */}
      <a
        href="#hero"
        className="skip-to-content"
        onClick={(e) => {
          e.preventDefault();
          jumpTo("hero");
        }}
      >
        Skip to main content
      </a>

      <Header isDark={isDark} onToggleTheme={toggleTheme} />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Credentials />
        <Contact />
      </main>

      <Footer />
      <Toaster />

      {/* ── Floating keyboard navigation hint ────────────────────────────── */}
      <KeyboardNav activeSection={activeSection} jumpTo={jumpTo} />
    </div>
  );
};

// ── App root with router ──────────────────────────────────────────────────────
function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true; // default: dark
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <BrowserRouter>
      <Routes>
        {/* Main portfolio */}
        <Route
          path="/"
          element={<Portfolio isDark={isDark} toggleTheme={toggleTheme} />}
        />

        {/* 404 — catches every unmatched route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;