"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

type Project = {
    id: number;
    title: string;
    category: string;
    description: string;
    status?: string;
    tech: string[];
    gradient: string;
    image: string;
    link?: string;
    github?: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: "Skill Swap",
        category: "Web Platform",
        status: "In Development",
        description:
            "A platform where students can exchange skills with each other. Users list what they can teach and what they want to learn, fostering peer-to-peer collaboration.",
        tech: ["Next.js", "React", "Tailwind CSS"],
        gradient: "from-emerald-500 to-cyan-500",
        image: "/skill-swap.png",
        link: "#",
        github: "#",
    },
    {
        id: 2,
        title: "Attendance & DL Calculator",
        category: "Student Productivity Tool",
        description:
            "A web tool designed for students to track attendance percentages and calculate how many classes they can miss or need to attend, with a built-in Duty Leave (DL) counter.",
        tech: ["HTML", "CSS", "JavaScript"],
        gradient: "from-violet-500 to-fuchsia-500",
        image: "/attendance-calc.png",
        link: "#",
        github: "#",
    },
    {
        id: 3,
        title: "This Portfolio",
        category: "Web Showcase",
        description:
            "My personal scrollytelling portfolio built with Next.js, Framer Motion, and Tailwind CSS — featuring scroll-linked animations and a cinematic experience.",
        tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
        gradient: "from-orange-500 to-pink-500",
        image: "/portfolio-preview.png",
        link: "#",
        github: "#",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative z-20 py-24 md:py-32 px-5 md:px-12 bg-[#0d0d0d] w-full"
        >
            <div className="max-w-6xl mx-auto">

                {/* ── Section Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14"
                >
                    <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-3">My Work</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        Selected Works
                    </h2>
                    <p className="mt-4 text-gray-500 text-base md:text-lg max-w-xl leading-relaxed">
                        Projects I&apos;ve built to solve real student problems and sharpen my development skills.
                    </p>
                </motion.div>

                {/* ── Project Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <motion.article
                            key={project.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={cardVariants}
                            transition={{ delay: i * 0.12, duration: 0.55, ease: "easeOut" }}
                            whileHover={{ y: -6 }}
                            className="group relative rounded-2xl overflow-hidden bg-[#141414] border border-white/8 hover:border-white/20 transition-all duration-400 flex flex-col shadow-lg hover:shadow-2xl"
                        >
                            {/* ── Project Image ── */}
                            <div className="relative w-full aspect-video overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={`${project.title} preview`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient.replace("from-", "from-").replace("to-", "to-")} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                                {/* Top colour accent bar */}
                                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradient}`} />
                                {/* Status badge overlay */}
                                {project.status && (
                                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs border border-amber-500/30 text-amber-400 bg-black/60 backdrop-blur-sm">
                                        {project.status}
                                    </span>
                                )}
                            </div>

                            {/* ── Card Content ── */}
                            <div className="p-5 flex flex-col flex-1">

                                {/* Category */}
                                <p className={`text-xs font-semibold uppercase tracking-wider mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                                    {project.category}
                                </p>

                                {/* Title */}
                                <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                                    {project.description}
                                </p>

                                {/* Tech stack tags */}
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-2 py-0.5 rounded-md text-xs bg-white/5 border border-white/10 text-gray-400"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-2.5 mt-auto">
                                    <a
                                        href={project.link}
                                        className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r ${project.gradient} text-black hover:opacity-90 hover:scale-[1.02] transition-all duration-300`}
                                    >
                                        <ExternalLink size={12} />
                                        View Project
                                    </a>
                                    <a
                                        href={project.github}
                                        className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold border border-white/15 text-gray-300 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                                    >
                                        <Github size={12} />
                                        GitHub
                                    </a>
                                </div>
                            </div>

                            {/* Outer glow on hover */}
                            <div className={`absolute -inset-px bg-gradient-to-br ${project.gradient} rounded-[inherit] blur-sm opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none`} />
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
