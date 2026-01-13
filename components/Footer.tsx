"use client";

import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="py-8 border-t border-slate-800 bg-transparent">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
                    TB • 2025 • Designed for impact
                </p>

                <div className="flex items-center gap-6">
                    <p className="text-slate-500 text-xs font-medium">
                        Based in India
                    </p>
                </div>
            </div>
        </footer>
    );
}
