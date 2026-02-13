import React from "react";
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
  return (
    <div className="App bg-[#1a1c1b] min-h-screen">
      <Header />
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
