"use client";

import { motion } from "framer-motion";

const skillGroups = [
    {
        category: "Technical Skills",
        gradient: "from-emerald-400 to-cyan-400",
        items: ["Web Development", "Programming Fundamentals", "Problem Solving"],
    },
    {
        category: "Focus Areas",
        gradient: "from-violet-400 to-fuchsia-400",
        items: [
            "Building Student Productivity Tools",
            "Learning Modern Web Technologies",
            "Startup / Product Development",
        ],
    },
    {
        category: "Tools & Technologies",
        gradient: "from-orange-400 to-pink-400",
        items: ["React.js", "Next.js", "Tailwind CSS", "Git", "GitHub"],
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
    return (
        <section id="skills" className="relative z-20 py-32 px-6 md:px-12 bg-[#0a0a0a] w-full border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">What I Know</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Technical Skills
                    </h2>
                    <p className="mt-4 text-gray-500 text-lg max-w-xl leading-relaxed">
                        A snapshot of my core skills, focus areas, and the technologies I work with.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillGroups.map((group, gi) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ delay: gi * 0.15, duration: 0.6, ease: "easeOut" }}
                            className="group relative rounded-2xl p-6 bg-white/3 border border-white/8 hover:border-white/15 hover:bg-white/5 transition-all duration-300"
                        >
                            {/* Category title with gradient */}
                            <h3 className={`text-base font-bold mb-6 bg-gradient-to-r ${group.gradient} bg-clip-text text-transparent uppercase tracking-wider`}>
                                {group.category}
                            </h3>

                            {/* Skill items */}
                            <motion.ul
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-3"
                            >
                                {group.items.map((skill) => (
                                    <motion.li
                                        key={skill}
                                        variants={itemVariants}
                                        className="flex items-center gap-3 text-gray-300 text-sm"
                                    >
                                        <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${group.gradient}`} />
                                        {skill}
                                    </motion.li>
                                ))}
                            </motion.ul>

                            {/* Hover glow */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${group.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
