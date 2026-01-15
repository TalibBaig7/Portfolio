"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <span className="text-purple-400 font-bold tracking-wider uppercase text-sm mb-2 block">Get in Touch</span>
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                    Let's Work Together
                </h1>
                <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
                    I'm currently available for freelance projects and full-time opportunities.
                    If you have a project that needs some creative touch, let me know!
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <motion.a
                    href="mailto:mirza.talib7415@gmail.com"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white/5 p-8 rounded-[2rem] border border-white/10 shadow-sm hover:bg-white/10 hover:border-purple-500/50 transition-all group"
                >
                    <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">Email Me</h3>
                    <p className="text-slate-400 font-medium">mirza.talib7415@gmail.com</p>
                </motion.a>

                <motion.a
                    href="tel:+917477059671"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/5 p-8 rounded-[2rem] border border-white/10 shadow-sm hover:bg-white/10 hover:border-blue-500/50 transition-all group"
                >
                    <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">Call Me</h3>
                    <p className="text-slate-400 font-medium">+91 74770 59671</p>
                </motion.a>
            </div>

            <div className="flex justify-center gap-6">
                <motion.a
                    href="https://github.com/TalibBaig7"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors"
                >
                    <Github className="w-5 h-5" />
                    GitHub
                </motion.a>

                <motion.a
                    href="https://www.linkedin.com/in/talib-baig-9a1701211/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className="flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-full font-bold hover:bg-[#004182] transition-colors"
                >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                </motion.a>
            </div>

        </div>
    );
}
