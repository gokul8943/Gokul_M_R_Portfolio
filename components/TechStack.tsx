'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiMongodb, SiPostman, SiAmazon, SiTailwindcss } from 'react-icons/si';

export default function TechStack() {
    const technologies = [
        { icon: <FaReact />, name: "React" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiTailwindcss />, name: "Tailwind" },
        { icon: <FaDocker />, name: "Docker" },
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <SiPostman />, name: "Postman" },
        { icon: <SiAmazon />, name: "AWS" },
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/5 dark:bg-black/20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-secondary text-sm font-medium uppercase tracking-wider">Tools & Technologies</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2">My <span className="text-gradient">Tech Stack</span></h2>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {technologies.map((tech, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="flex flex-col items-center gap-3 group"
                        >
                            <div className="w-20 h-20 rounded-2xl glass-card flex items-center justify-center text-4xl text-gray-600 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-white group-hover:border-primary/50 transition-all">
                                {tech.icon}
                            </div>
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-500 group-hover:text-primary transition-colors">{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
