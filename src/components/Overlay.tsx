"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
    const { scrollYProgress } = useScroll();

    /*
     * All text sections use opacity + y transforms tied to page scrollYProgress.
     *
     * KEY: the hero text is in a `sticky top-0 h-screen` div — this means it
     * sticks to the viewport while you scroll within the 500vh canvas zone, then
     * naturally scrolls off when Projects/Skills sections appear. No `fixed`
     * positioning is used, so nothing can bleed into content sections below.
     */

    // Hero text: visible at the start, fades out by 18% scroll
    const opacity1 = useTransform(scrollYProgress, [0, 0.16], [1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.16], [0, -60]);

    // "From Curiosity to Code" — fades in then out mid-scroll
    const opacity2 = useTransform(scrollYProgress, [0.14, 0.26, 0.40], [0, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.14, 0.40], [60, -60]);

    // "Building for Impact" — fades in then out later
    const opacity3 = useTransform(scrollYProgress, [0.40, 0.55, 0.70], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.40, 0.70], [60, -60]);

    // Bridge text — fades in near end of scroll zone
    const opacity4 = useTransform(scrollYProgress, [0.72, 0.85], [0, 1]);
    const y4 = useTransform(scrollYProgress, [0.72, 0.85], [50, 0]);

    return (
        /*
         * This div is h-[500vh] and absolute top-0 — it covers the canvas zone only.
         * Children use `sticky` (scoped to this 500vh parent) instead of `fixed`
         * (which would be viewport-global and bleed into other sections).
         */
        <div className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">

            {/* Ambient glow orbs — absolute, contained inside overlay div */}
            <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="float-orb absolute top-[10%] left-[15%] w-[28rem] h-[28rem] bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="float-orb-slow absolute top-[35%] right-[12%] w-[24rem] h-[24rem] bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="float-orb absolute top-[60%] left-[40%] w-[18rem] h-[18rem] bg-violet-500/6 rounded-full blur-3xl" />
            </div>

            {/* ─── HERO — sticky (NOT fixed), scoped to the 500vh parent ─── */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-auto">
                <motion.div
                    style={{ opacity: opacity1, y: y1 }}
                    className="text-center w-full px-6 max-w-3xl mx-auto"
                >
                    {/* Status badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        Available for Collaborations
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight mb-4 text-white leading-none">
                        Sujay{" "}
                        <span className="gradient-text">Banarjee</span>
                    </h1>

                    <p className="text-base md:text-xl text-gray-400 font-light tracking-widest uppercase mb-5">
                        B.Tech CSE Student &nbsp;|&nbsp; Web Developer
                    </p>
                    <p className="text-sm md:text-base text-gray-500 max-w-lg mx-auto mb-10 leading-relaxed">
                        Building useful tools for students and learning modern web technologies.
                    </p>

                    <div className="flex items-center justify-center gap-4 flex-wrap">
                        <a
                            href="#projects"
                            className="px-7 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold rounded-full hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 text-sm"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-7 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300 text-sm"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* ─── SECTION 2 — From Curiosity to Code ─── */}
            <div className="absolute top-[150vh] w-full px-10 md:px-24">
                <motion.div style={{ opacity: opacity2, y: y2 }} className="md:w-3/4">
                    <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-3">About Me</p>
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white mb-5">
                        From Curiosity{" "}
                        <span className="gradient-text">to Code.</span>
                    </h2>
                    <p className="text-base text-gray-400 max-w-2xl leading-relaxed">
                        I&apos;m a First-Year Computer Science Engineering student at{" "}
                        <span className="text-emerald-400 font-medium">Lovely Professional University</span>.
                        Passionate about technology, web development, and building useful tools for students.
                    </p>
                </motion.div>
            </div>

            {/* ─── SECTION 3 — Building for Impact ─── */}
            <div className="absolute top-[300vh] w-full px-10 md:px-24 flex justify-end">
                <motion.div style={{ opacity: opacity3, y: y3 }} className="md:w-3/4 text-right">
                    <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-3">My Goal</p>
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white mb-5">
                        Building for{" "}
                        <span className="gradient-text">Impact.</span>
                    </h2>
                    <p className="text-base text-gray-400 ml-auto max-w-2xl leading-relaxed">
                        My goal is to become a skilled developer and build impactful digital products that
                        help students and communities — solving everyday problems with practical solutions.
                    </p>
                </motion.div>
            </div>

            {/* ─── SECTION 4 — Bridge ─── */}
            <div className="absolute top-[440vh] w-full px-10 md:px-24 flex justify-center items-center">
                <motion.div style={{ opacity: opacity4, y: y4 }} className="text-center">
                    <h2 className="text-3xl md:text-6xl font-extrabold leading-tight text-white mb-4">
                        Let&apos;s Build the{" "}
                        <span className="gradient-text">Future.</span>
                    </h2>
                    <p className="text-gray-500 text-base">Scroll to explore my work ↓</p>
                </motion.div>
            </div>

        </div>
    );
}
