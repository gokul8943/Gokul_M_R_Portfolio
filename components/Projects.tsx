'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
    const projects = [
        {
            title: "Ai interview platform",
            desc: "A comprehensive dashboard for managing online stores, orders, and analytics.",
            tags: ["React.js", "Node.js", "Express.js", "TypeScript", "Tailwind", "Prisma"],
            github: "#",
            demo: "#",
            // placeholder color instead of real image for now
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Ai image generation",
            desc: "Real-time social platform with chat, notifications, and post sharing features.",
            tags: ["React.js", "Node.js", "Socket.io", "MongoDB"],
            github: "#",
            demo: "#",
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Real estate platform",
            desc: "Collaborative project management tool with Kanban boards and team chat.",
            tags: ["Vue.js", "Firebase", "Pinia"],
            github: "#",
            demo: "#",
            color: "from-orange-500 to-red-500"
        }
    ];

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-secondary text-sm font-medium uppercase tracking-wider">Portfolio</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2">Featured <span className="text-gradient">Projects</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 overflow-hidden hover:border-primary/50 transition-all"
                        >
                            {/* Image Placeholder */}
                            <div className={`h-48 w-full bg-gradient-to-br ${project.color} opacity-80 group-hover:scale-105 transition-transform duration-500`} />

                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2 text-gray-100 dark:text-white group-hover:text-white transition-colors">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.desc}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span key={tagIdx} className="px-3 py-1 text-xs rounded-full bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-black/10 dark:border-white/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                                        <FaGithub /> Code
                                    </a>
                                    <a href={project.demo} className="flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors">
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
