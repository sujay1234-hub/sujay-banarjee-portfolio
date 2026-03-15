"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export default function FloatingNav() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("Home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
                    scrolled
                        ? "bg-black/70 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40"
                        : "bg-white/5 backdrop-blur-md border border-white/5"
                } rounded-full px-6 py-3`}
            >
                <ul className="flex items-center gap-1 sm:gap-2">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                onClick={() => setActive(link.label)}
                                className={`relative px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                                    active === link.label
                                        ? "text-white"
                                        : "text-gray-400 hover:text-white"
                                }`}
                            >
                                {active === link.label && (
                                    <motion.span
                                        layoutId="pill"
                                        className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 border border-emerald-500/30"
                                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                                    />
                                )}
                                <span className="relative z-10">{link.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.nav>
        </AnimatePresence>
    );
}
