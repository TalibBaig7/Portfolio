"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
    { name: "Home", id: "hero", path: "/" },
    { name: "About", id: "about", path: "/#about" },
    { name: "Projects", id: "projects", path: "/#projects" },
    { name: "Contact", id: "contact", path: "/#contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        if (pathname !== "/") return;

        const sectionIds = ["hero", "about", "projects", "contact"];
        const handleScroll = () => {
            // If near bottom of the page, activate contact
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
                setActiveSection("contact");
                return;
            }

            const scrollPosition = window.scrollY + 160;

            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const id = sectionIds[i];
                const element = document.getElementById(id);
                if (element) {
                    if (element.offsetTop <= scrollPosition) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        setIsOpen(false);
        if (pathname === "/") {
            e.preventDefault();
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", id === "hero" ? "/" : `#${id}`);
            }
        }
    };

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
                            key={item.id}
                            href={item.path}
                            onClick={(e) => handleNavClick(e, item.id)}
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
                        <Link
                            href="/"
                            onClick={(e) => handleNavClick(e, "hero")}
                            className="relative z-10"
                        >
                            <motion.div
                                className="h-10 w-10 bg-white rounded-xl flex items-center justify-center text-slate-900 font-black text-lg font-heading cursor-pointer"
                                whileHover={{ rotate: 10 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                TB
                            </motion.div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => {
                                const isActive =
                                    pathname === "/"
                                        ? activeSection === item.id
                                        : pathname.startsWith(`/${item.id}`) ||
                                          (item.id === "hero" && pathname === "/");

                                return (
                                    <Link
                                        key={item.id}
                                        href={item.path}
                                        onClick={(e) => handleNavClick(e, item.id)}
                                        className="relative group"
                                    >
                                        <span
                                            className={`text-sm font-bold tracking-wide transition-colors ${
                                                isActive
                                                    ? "text-white"
                                                    : "text-slate-400 group-hover:text-white"
                                            }`}
                                        >
                                            {item.name}
                                        </span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="navbar-indicator"
                                                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-purple-500 rounded-full"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 380,
                                                    damping: 30,
                                                }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            aria-label="Toggle navigation menu"
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