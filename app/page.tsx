"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
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

export default function HomePage() {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Ambience handled globally in layout now */}

      <div className="relative max-w-5xl mx-auto px-6 py-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-8"
        >
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            {/* <span className="text-xs font-bold tracking-widest uppercase text-slate-300">Available for work</span> */}
          {/* </div>  */}
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <TypewriterText text="Talib Baig" />
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row items-center gap-3 mb-10 text-xl md:text-2xl font-medium text-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span>Full Stack Developer</span>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-700" />
          <span>UI/UX Enthusiast</span>
        </motion.div>

        <motion.p
          className="text-slate-300 leading-relaxed text-lg max-w-2xl px-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          I craft robust digital solutions using the <span className="text-purple-400 font-bold">MERN</span> stack.
          Focusing on performance, aesthetics, and business impact.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          <Link href="/projects" className="group relative px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold flex items-center justify-center gap-2 overflow-hidden hover:bg-slate-100 transition-colors">
            <span className="relative z-10">View My Work</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link href="/contact" className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-colors flex items-center justify-center">
            Contact Me
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
