"use client";

import { motion } from "framer-motion";
import { Github, ArrowUpRight, MousePointerClick } from "lucide-react";
import DashboardCard from "@/components/DashboardCard";

type Project = {
  title: string;
  desc: string;
  tech: string[];
  github: string;
  live: string;
  color: string;
  border: string;
  badge?: string;
};

const projects: Project[] = [
  {
    title: "ExpenseAI",
    desc: "An AI-powered expense tracker with budget planning, category management, and OpenAI-driven spending insights on a fully responsive dashboard.",
    tech: ["REACT", "NODE.JS", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/TalibBaig7/Ai-Expense-Tracker",
    live: "https://frontend-two-wine-81.vercel.app",
    color: "bg-slate-800/50 hover:bg-slate-800",
    border: "border-slate-700",
  },
  {
    title: "E-Commerce Platform",
    desc: "A comprehensive shopping solution providing a seamless checkout flow, real-time inventory management, and a clean user interface.",
    tech: ["REACT", "FRAMER MOTION", "Tailwind CSS", "Redux"],
    github: "https://github.com/TalibBaig7/ecommercenew",
    live: "https://ecommercenew-nine.vercel.app/",
    color: "bg-slate-800/50 hover:bg-slate-800",
    border: "border-slate-700",
  },
  {
    title: "AI Powered Code Analysis",
    desc: "An intelligent tool aimed at analyzing code quality and patterns using AI for better development workflows.",
    tech: ["Next.js", "AI Integration", "Tailwind CSS"],
    github: "https://github.com/TalibBaig7",
    live: "https://ai-powered-code-analysis.vercel.app/",
    color: "bg-blue-900/50 hover:bg-blue-900",
    border: "border-blue-700",
  },
  {
    title: "Zerodha Clone",
    desc: "A full-stack clone of the Zerodha trading platform with live market dashboard, watchlist, order placement, and JWT-based authentication.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/TalibBaig7",
    live: "https://zerodha-clone-frontend-08fo.onrender.com/",
    color: "bg-orange-900/50 hover:bg-orange-900",
    border: "border-orange-700",
  },
];

const animationProjects: Project[] = [
  {
    title: "AUREN — Cold Brew Website",
    desc: "Premium cold brew brand site with an 81-frame scroll-driven canvas animation, GSAP ScrollTrigger sequences, and full mobile responsiveness.",
    tech: ["Vite", "GSAP", "Canvas API", "Vanilla JS"],
    github: "https://github.com/TalibBaig7/Auren-Animation-Website",
    live: "https://auren-animation-website.vercel.app/",
    color: "bg-slate-800/50 hover:bg-slate-800",
    border: "border-slate-700",
    badge: "GSAP Animation",
  },
  {
    title: "Archive Project",
    desc: "A dynamic portfolio archiving interactive web experiences and experimental animations.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/TalibBaig7/Archive",
    live: "https://archive-sage-one.vercel.app/",
    color: "bg-indigo-900/50 hover:bg-indigo-900",
    border: "border-indigo-700",
    badge: "Interactive",
  },
  {
    title: "K72 Website",
    desc: "An immersive digital experience showcasing creative agency work with smooth transitions.",
    tech: ["React", "WebGL", "GSAP"],
    github: "https://github.com/TalibBaig7",
    live: "https://k72website.onrender.com/",
    color: "bg-purple-900/50 hover:bg-purple-900",
    border: "border-purple-700",
    badge: "Web Experience",
  },
];

const dashboardProjects = [
  {
    title: "Pizza Sales Report",
    description:
      "Comprehensive Power BI dashboard analyzing pizza sales trends, revenue metrics, and customer patterns across different time periods and categories.",
    image: "/dashboards/pizza-sales.jpg",
    link: "https://github.com/TalibBaig7/Power_bi_dashboard_projects/blob/main/Pizza%20Sales%20Report.pbix",
    tools: ["Power BI", "Data Analysis", "Visualization"],
  },
  {
    title: "Data Professional Survey Breakdown",
    description:
      "Interactive dashboard presenting insights from a data professional survey including salary trends, job satisfaction, and career path analysis.",
    image: "/dashboards/data-professional.jpg",
    link: "https://github.com/TalibBaig7/Power_bi_dashboard_projects/blob/main/Data%20Professional%20Survey%20Breakdown.pbix",
    tools: ["Power BI", "Survey Analysis", "Analytics"],
  },
  {
    title: "HR Analytics Dashboard",
    description:
      "Advanced HR metrics dashboard tracking employee attrition, department performance, salary distribution, and workforce analytics.",
    image: "/dashboards/hr-analytics.jpg",
    
    link: "https://github.com/TalibBaig7/Power_bi_dashboard_projects/blob/main/HR%20ANALYTICS%20DASHBOARD.pbix",
    tools: ["Power BI", "HR Analytics", "KPI Tracking"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <span className="text-purple-400 font-bold tracking-wider uppercase text-sm mb-2 block">
          Portfolio
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          Featured Projects
        </h1>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl">
          A selection of projects that demonstrate my technical capabilities and
          design sensibilities.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={item}
            onClick={() =>
              window.open(project.live || project.github, "_blank")
            }
            className={`group relative rounded-[2.5rem] p-8 ${project.color} ${project.border} border backdrop-blur-sm transition-all duration-300 cursor-pointer`}
          >
            {/* macOS dots */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors relative z-10"
                >
                  <Github className="w-4 h-4 text-white" />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors relative z-10"
                >
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

            {/* Optional GSAP / feature badge */}
            {project.badge && (
              <div className="mb-3">
                <span
                  className="inline-block px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider"
                  style={{
                    background: "rgba(200,169,122,0.15)",
                    border: "1px solid rgba(200,169,122,0.4)",
                    color: "#c8a97a",
                  }}
                >
                  {project.badge}
                </span>
              </div>
            )}

            <h3 className="text-2xl font-black text-white mb-3">
              {project.title}
            </h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-slate-300 uppercase tracking-wide"
                >
                  {t}
                </span>
              ))}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.live || project.github, "_blank");
              }}
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/40 rounded-xl text-purple-300 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <MousePointerClick className="w-4 h-4" />
              VIEW DETAIL
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Animation Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <span className="text-purple-400 font-bold tracking-wider uppercase text-sm mb-2 block">
          Creative Development
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-8">
          Animation Websites
        </h2>
        <p className="text-slate-400 mb-12 max-w-2xl">
          Immersive, scroll-driven, and highly interactive web experiences
          pushing the boundaries of the browser.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {animationProjects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={item}
              onClick={() =>
                window.open(project.live || project.github, "_blank")
              }
              className={`group relative rounded-[2.5rem] p-8 ${project.color} ${project.border} border backdrop-blur-sm transition-all duration-300 cursor-pointer`}
            >
              {/* macOS dots */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors relative z-10"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors relative z-10"
                  >
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>

              {/* Optional GSAP / feature badge */}
              {project.badge && (
                <div className="mb-3">
                  <span
                    className="inline-block px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider"
                    style={{
                      background: "rgba(200,169,122,0.15)",
                      border: "1px solid rgba(200,169,122,0.4)",
                      color: "#c8a97a",
                    }}
                  >
                    {project.badge}
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-black text-white mb-3">
                {project.title}
              </h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-slate-300 uppercase tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.live || project.github, "_blank");
                }}
                className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/40 rounded-xl text-purple-300 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <MousePointerClick className="w-4 h-4" />
                Click Me
              </button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Dashboard Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        {/* Section Header */}
        <span className="text-purple-400 font-bold tracking-wider uppercase text-sm mb-2 block">
          Secondary Projects
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-8">
          Power BI Dashboards
        </h2>
        <p className="text-slate-400 mb-12 max-w-2xl">
          Data visualization projects showcasing business intelligence and
          analytics expertise.
        </p>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dashboardProjects.map((dashboard, idx) => (
            <DashboardCard key={idx} {...dashboard} index={idx} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
