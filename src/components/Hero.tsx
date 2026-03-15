"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 py-32 overflow-hidden bg-[#0d0d0d] z-20"
        >
            {/* ── Ambient glow orbs (contained inside this section only) ── */}
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="float-orb absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="float-orb-slow absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="float-orb absolute bottom-1/4 left-1/2 w-64 h-64 bg-violet-500/8 rounded-full blur-3xl" />
            </div>

            {/* ── Content (normal document flow, no fixed/absolute positioning) ── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 max-w-3xl mx-auto"
            >
                {/* Status badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-8"
                >
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    Available for Collaborations
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-4 text-white leading-none"
                >
                    Sujay{" "}
                    <span className="gradient-text">Banarjee</span>
                </motion.h1>

                {/* Role subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-base md:text-xl text-gray-400 font-light tracking-widest uppercase mb-5"
                >
                    B.Tech CSE Student &nbsp;|&nbsp; Web Developer
                </motion.p>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.65, duration: 0.6 }}
                    className="text-sm md:text-base text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed"
                >
                    Building useful tools for students and learning modern web technologies.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="flex items-center justify-center gap-4 flex-wrap"
                >
                    <a
                        href="#projects"
                        className="px-7 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold rounded-full hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 text-sm"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-7 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300 text-sm"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent animate-pulse" />
            </motion.div>
        </section>
    );
}
