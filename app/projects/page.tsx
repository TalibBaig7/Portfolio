"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import DashboardCard from "@/components/DashboardCard";

const projects = [
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
    title: "AUREN — Cold Brew Website",
    desc: "Premium cold brew brand site with an 81-frame scroll-driven canvas animation, GSAP ScrollTrigger sequences, and full mobile responsiveness.",
    tech: ["Vite", "GSAP", "Canvas API", "Vanilla JS"],
    github: "https://github.com/TalibBaig7/Auren-Animation-Website",
    live: "https://auren-animation-website.vercel.app/",
    color: "bg-slate-800/50 hover:bg-slate-800",
    border: "border-slate-700",
    badge: "GSAP Animation",
},
];

const dashboardProjects = [
    {
        title: "Pizza Sales Report",
        description: "Comprehensive Power BI dashboard analyzing pizza sales trends, revenue metrics, and customer patterns across different time periods and categories.",
        image: "/dashboards/pizza-sales.jpg",
        link: "https://github.com/TalibBaig7/Power_bi_dashboard_projects/blob/main/Pizza%20Sales%20Report.pbix",
        tools: ["Power BI", "Data Analysis", "Visualization"]
    },
    {
        title: "Data Professional Survey Breakdown",
        description: "Interactive dashboard presenting insights from a data professional survey including salary trends, job satisfaction, and career path analysis.",
        image: "/dashboards/data-professional.jpg",
        link: "https://github.com/TalibBaig7/Power_bi_dashboard_projects/blob/main/Data%20Professional%20Survey%20Breakdown.pbix",
        tools: ["Power BI", "Survey Analysis", "Analytics"]
    },
    {
        title: "HR Analytics Dashboard",
        description: "Advanced HR metrics dashboard tracking employee attrition, department performance, salary distribution, and workforce analytics.",
        image: "/dashboards/hr-analytics.jpg",
        link: "https://github.com/TalibBaig7/Power_bi_dashboard_projects/blob/main/HR%20ANALYTICS%20DASHBOARD.pbix",
        tools: ["Power BI", "HR Analytics", "KPI Tracking"]
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function ProjectsPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16"
            >
                <span className="text-purple-400 font-bold tracking-wider uppercase text-sm mb-2 block">Portfolio</span>
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                    Featured Projects
                </h1>
                <p className="mt-4 text-lg text-slate-400 max-w-2xl">
                    A selection of projects that demonstrate my technical capabilities and design sensibilities.
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
                        onClick={() => window.open(project.live || project.github, '_blank')}
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
                                <a href={project.github} target="_blank" rel="noopener noreferrer"
                                   onClick={(e) => e.stopPropagation()}
                                   className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors relative z-10">
                                    <Github className="w-4 h-4 text-white" />
                                </a>
                                <a href={project.live} target="_blank" rel="noopener noreferrer"
                                   onClick={(e) => e.stopPropagation()}
                                   className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors relative z-10">
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
                                        background: 'rgba(200,169,122,0.15)',
                                        border: '1px solid rgba(200,169,122,0.4)',
                                        color: '#c8a97a',
                                    }}
                                >
                                    {project.badge}
                                </span>
                            </div>
                        )}

                        <h3 className="text-2xl font-black text-white mb-3">{project.title}</h3>
                        <p className="text-slate-300 mb-8 leading-relaxed">
                            {project.desc}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                                <span key={t}
                                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-slate-300 uppercase tracking-wide">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
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
                    Data visualization projects showcasing business intelligence and analytics expertise.
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {dashboardProjects.map((dashboard, idx) => (
                        <DashboardCard
                            key={idx}
                            {...dashboard}
                            index={idx}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
