"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[1em] bg-purple-500 ml-1 align-middle"
      />
    </span>
  );
}

export function HeroSection() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden scroll-mt-24">
      <div className="relative max-w-5xl mx-auto px-6 py-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, type: "spring" }}
          className="mb-8"
        />

        <motion.h1
          className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-white"
          initial={{ opacity: 0.5, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.05 }}
        >
          <TypewriterText text="Talib Baig" />
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row items-center gap-3 mb-10 text-xl md:text-2xl font-medium text-slate-400"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          <span>Full Stack Developer</span>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-700" />
          <span>UI/UX Enthusiast</span>
        </motion.div>

        <motion.p
          className="text-slate-300 leading-relaxed text-lg max-w-2xl px-4 mb-12"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.15 }}
        >
          I build full-stack products — from a JWT-secured trading dashboard to
          AI-driven tools — with a focus on{" "}
          <span className="text-purple-400 font-bold">production-ready code</span>, not just demos.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          initial={{ opacity: 0.5, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, "projects")}
            className="group relative px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold flex items-center justify-center gap-2 overflow-hidden hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <span className="relative z-10">View My Work</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-colors flex items-center justify-center cursor-pointer"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
