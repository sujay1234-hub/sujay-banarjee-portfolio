"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
    const { scrollYProgress } = useScroll();

    // Parallax transforms
    // Section 1: Fades out quickly
    const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    // Section 2: Fades in/out mid-scroll
    const opacity2 = useTransform(scrollYProgress, [0.15, 0.3, 0.45], [0, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.15, 0.45], [50, -50]);

    // Section 3: Fades in/out later
    const opacity3 = useTransform(scrollYProgress, [0.45, 0.6, 0.75], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.45, 0.75], [50, -50]);

    // Section 4: Final statement
    const opacity4 = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);
    const y4 = useTransform(scrollYProgress, [0.75, 0.9], [50, 0]);

    return (
        <div className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10 flex flex-col items-center">
            {/* Scroll hints / Fixed Position elements could go here */}

            {/* Section 1 */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full"
            >
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-white drop-shadow-lg">
                    Sujay Banarjee
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide uppercase">
                    B.Tech CSE Student & Business Manager
                </p>
            </motion.div>

            {/* Section 2 */}
            <div className="absolute top-[150vh] w-full px-12 md:px-24">
                <motion.div
                    style={{ opacity: opacity2, y: y2 }}
                    className="md:w-1/2"
                >
                    <h2 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                        Passionate about Technology.
                    </h2>
                    <p className="mt-6 text-lg text-gray-400 max-w-md">
                        Specializing in managing text animation projects, client communication, and workflow coordination.
                    </p>
                </motion.div>
            </div>

            {/* Section 3 */}
            <div className="absolute top-[300vh] w-full px-12 md:px-24 flex justify-end">
                <motion.div
                    style={{ opacity: opacity3, y: y3 }}
                    className="md:w-1/2 text-right"
                >
                    <h2 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                        Innovating for the Future.
                    </h2>
                    <p className="mt-6 text-lg text-gray-400 ml-auto max-w-md">
                        Building tech-driven solutions and exploring innovative business ideas at The Drop Service Hub.
                    </p>
                </motion.div>
            </div>

            {/* Section 4 */}
            <div className="absolute top-[450vh] w-full px-12 md:px-24 text-center">
                <motion.div
                    style={{ opacity: opacity4, y: y4 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-8">
                        Let's Create Impact.
                    </h2>
                </motion.div>
            </div>

        </div>
    );
}
