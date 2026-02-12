export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Neon Horizon",
            category: "Web Application",
            description: "A futuristic dashboard for data visualization.",
        },
        {
            id: 2,
            title: "Zenith Commerce",
            category: "E-Commerce",
            description: "Minimalist shopping experience with headless architecture.",
        },
        {
            id: 3,
            title: "Aura Labs",
            category: "Landing Page",
            description: "Award-winning design for a tech consultancy.",
        },
        {
            id: 4,
            title: "Echo Systems",
            category: "Design System",
            description: "Comprehensive component library for enterprise apps.",
        },
    ];

    return (
        <section className="relative z-20 py-32 px-6 md:px-12 bg-[#121212] w-full">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-3xl md:text-5xl font-bold mb-16 text-white tracking-tight">
                    Selected Works
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-white/10"
                        >
                            {/* Image Placeholder */}
                            <div className="aspect-video w-full bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-700"></div>

                            {/* Content */}
                            <div className="p-8">
                                <p className="text-sm font-medium text-emerald-400 mb-2 uppercase tracking-wider">
                                    {project.category}
                                </p>
                                <h4 className="text-2xl font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                                    {project.title}
                                </h4>
                                <p className="text-gray-400">
                                    {project.description}
                                </p>
                            </div>

                            {/* Hover Glow */}
                            <div className="absolute -inset-2 bg-emerald-500/20 rounded-[inherit] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </div>
                    ))}
                </div>

                <div className="mt-32 text-center border-t border-white/10 pt-16">
                    <p className="text-gray-500">© 2024 Sujay Banarjee. Built with Next.js & Framer Motion.</p>
                </div>
            </div>
        </section>
    );
}
