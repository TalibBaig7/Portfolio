"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

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
      className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-900/50 to-blue-900/50 border border-cyan-700/50 hover:border-cyan-600 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
    >
      {/* Image Container with Animation */}
      <div className="relative h-64 overflow-hidden bg-slate-900">
        {/* Initial hidden state with animated entry */}
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
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-300 text-sm mb-4 line-clamp-2">{description}</p>

        {/* Tools/Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-2 py-1 bg-cyan-900/50 border border-cyan-700/50 rounded text-xs font-medium text-cyan-300"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Link Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 text-sm font-semibold group/link transition-colors"
        >
          View Dashboard
          <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}
