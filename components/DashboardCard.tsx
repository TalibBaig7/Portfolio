"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface DashboardCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tools: string[];
  index: number;
}

export default function DashboardCard({
  title,
  description,
  image,
  link,
  tools,
  index,
}: DashboardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-cyan-900/50 to-blue-900/50 border border-cyan-700/50 hover:border-cyan-600 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 backdrop-blur-sm flex flex-col h-full"
    >
      {/* IMAGE CONTAINER (h-64) */}
      <div className="relative w-full h-64 overflow-hidden bg-slate-950/50">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: index * 0.1 + 0.3,
            ease: "easeOut",
          }}
          className="relative w-full h-full"
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {/* Gradient overlay on bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        </motion.div>
      </div>

      {/* CONTENT SECTION (p-6) */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-sm text-slate-300 line-clamp-2 mb-6">
            {description}
          </p>

          {/* Tools/Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 bg-cyan-900/50 border border-cyan-700/50 rounded-lg text-xs font-bold text-cyan-300 uppercase tracking-wide"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* View Dashboard Link Button */}
        <div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors font-bold text-sm"
          >
            View Dashboard
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
