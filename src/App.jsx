import React, { useState, useEffect } from "react";
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
import { Toaster } from "./components/ui/toaster";

function App() {
  const [isDark, setIsDark] = useState(() => {
    // Persist preference across reloads
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true; // default: dark
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div className="App bg-brand-bg min-h-screen">
      <Header isDark={isDark} onToggleTheme={toggleTheme} />
      <main>
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
    </div>
  );
}

export default App;