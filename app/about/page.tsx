"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Database, Layout } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Left Col: Intro & Education */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-purple-400 font-bold tracking-wider uppercase text-sm mb-2 block">About Me</span>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8">
                        Driven by clean code & design.
                    </h1>
                    <p className="text-lg text-slate-300 mb-12 leading-relaxed">
                        I am a Full Stack Developer with a passion for building beautiful, functional web applications.
                        With a background in Business Administration, I bring a unique perspective to development,
                        bridging the gap between technical implementation and business goals.
                    </p>

                    <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
                        <GraduationCap className="text-purple-400" />
                        Education
                    </h2>

                    <div className="space-y-6">
                        {[
                            { title: "MERN Stack Development", place: "Apna College", year: "2024" },
                            { title: "Bachelor of Business Administration", place: "BSSS College", year: "2023" }
                        ].map((edu, i) => (
                            <div key={i} className="pl-6 border-l-2 border-purple-500/50 relative">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-900 rounded-full border-2 border-purple-500" />
                                <h3 className="font-bold text-lg text-white">{edu.title}</h3>
                                <p className="text-slate-400 font-medium text-sm mb-1">{edu.place}</p>
                                <span className="text-xs font-bold text-purple-300 bg-purple-500/10 px-2 py-1 rounded inline-block">{edu.year}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Col: Skills */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="bg-white/5 backdrop-blur-sm rounded-[2.5rem] p-8 border border-white/10">
                        <h2 className="text-2xl font-black text-white mb-8">Technical Expertise</h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                                    <Layout className="w-5 h-5 text-blue-400" /> Frontend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {["React", "Next.js", "Tailwind CSS", "Framer Motion", "JavaScript", "HTML5"].map(s => (
                                        <span key={s} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-slate-300">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                                    <Database className="w-5 h-5 text-green-400" /> Backend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs"].map(s => (
                                        <span key={s} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-slate-300">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                                    <Code2 className="w-5 h-5 text-orange-400" /> Tools & Others
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Git", "GitHub", "VS Code", "Vercel", "Postman"].map(s => (
                                        <span key={s} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-slate-300">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
