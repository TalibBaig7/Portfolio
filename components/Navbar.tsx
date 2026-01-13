"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Navigation Overlay - Placed first so it's behind the navbar */}
            <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={{
                    open: { opacity: 1, pointerEvents: "auto" },
                    closed: { opacity: 0, pointerEvents: "none" },
                }}
                className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl md:hidden z-40"
            >
                <div className="flex flex-col space-y-6 pt-32 px-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-black text-white flex items-center justify-between group"
                        >
                            {item.name}
                            <motion.span
                                className="w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100"
                                layout
                            />
                        </Link>
                    ))}
                </div>
            </motion.div>

            {/* Navbar - Now on top with z-50 */}
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-transparent border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="relative z-10">
                            <motion.div
                                className="h-10 w-10 bg-white rounded-xl flex items-center justify-center text-slate-900 font-black text-lg"
                                whileHover={{ rotate: 10 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                TB
                            </motion.div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => {
                                const isActive = pathname === item.path;
                                return (
                                    <Link key={item.path} href={item.path} className="relative group">
                                        <span className={`text-sm font-bold tracking-wide transition-colors ${isActive ? "text-white" : "text-slate-400 group-hover:text-white"
                                            }`}>
                                            {item.name}
                                        </span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="navbar-indicator"
                                                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-purple-500 rounded-full"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden relative z-10 p-2 text-white"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}