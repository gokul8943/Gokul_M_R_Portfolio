'use client';

import { motion } from 'framer-motion';

export default function WorkExperience() {
    const experiences = [
        {
            company: "CoreTech Voyage",
            role: "junior MERN Stack Developer",
            period: "2025 - Present",
            description: "Created a full-stack MERN application for a client.",
            skills: ["Node.js", "MongoDB", "Express.js", "Mongoose", "Socket.io", "SQL", "prisma", "React", "Redux"]
        },
        {
            company: "Trendgully",
            role: "Full Stack Software Engineer",
            period: "2024 - 2025",
            description: "Developed interactive and responsive web application",
            skills: ["React", "Node.js", "Express.js", "MongoDB", "React", "Redux"]
        },
    ];

    return (
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/5 dark:bg-white/5">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-secondary text-sm font-medium uppercase tracking-wider">Career Path</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2">Work <span className="text-gradient">Experience</span></h2>
                </motion.div>

                <div className="relative border-l border-gray-200 dark:border-gray-700 ml-4 md:ml-6 space-y-12">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary border-4 border-white dark:border-gray-900" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                                <span className="text-sm font-medium text-primary bg-gray-100 px-3 py-1 rounded-full w-fit mt-1 sm:mt-0">
                                    {exp.period}
                                </span>
                            </div>

                            <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">{exp.company}</h4>
                            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, skillIdx) => (
                                    <span key={skillIdx} className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
