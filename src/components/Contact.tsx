"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const contactLinks = [
    {
        label: "Email Me",
        href: "mailto:sujaybanarjee@email.com",
        icon: Mail,
        gradient: "from-emerald-500 to-cyan-500",
        primary: true,
    },
    {
        label: "GitHub",
        href: "https://github.com/",
        icon: Github,
        gradient: "from-gray-600 to-gray-700",
        primary: false,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/",
        icon: Linkedin,
        gradient: "from-blue-600 to-blue-700",
        primary: false,
    },
];

export default function Contact() {
    return (
        <footer id="contact" className="py-28 px-6 md:px-12 bg-[#080808] w-full border-t border-white/8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left — Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-4">Get in Touch</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
                            Let&apos;s Build{" "}
                            <span className="gradient-text">Something Amazing.</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                            I&apos;m open to collaborations, innovative project ideas, and building
                            tools that solve real problems.
                        </p>
                    </motion.div>

                    {/* Right — Buttons */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                        className="flex flex-col gap-4"
                    >
                        {contactLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02, x: 4 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className={`flex items-center justify-between px-6 py-4 rounded-xl border transition-all duration-300 group ${
                                        link.primary
                                            ? "bg-gradient-to-r from-emerald-500 to-cyan-500 border-transparent text-black hover:shadow-lg hover:shadow-emerald-500/30"
                                            : "border-white/10 bg-white/3 text-gray-300 hover:border-white/20 hover:bg-white/8"
                                    }`}
                                >
                                    <div className="flex items-center gap-3 font-semibold text-sm">
                                        <Icon size={18} />
                                        {link.label}
                                    </div>
                                    <ArrowUpRight
                                        size={16}
                                        className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                                    />
                                </motion.a>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Divider & Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600"
                >
                    <p>© 2025 Sujay Banarjee. Designed & Built with passion.</p>
                    <p>LPU &nbsp;·&nbsp; B.Tech CSE &nbsp;·&nbsp; First Year</p>
                </motion.div>
            </div>
        </footer>
    );
}
