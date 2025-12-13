'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiMongodb, SiPostman, SiAmazon, SiTailwindcss } from 'react-icons/si';
import { useState, useEffect } from 'react';

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

    const [dimensions, setDimensions] = useState({ width: 1000, height: 600 });
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Set initial dimensions
        setDimensions({
            width: window.innerWidth,
            height: 600 // Fixed height for the section container
        });

        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: 600
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!isMounted) return null;

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative min-h-[700px]">
            {/* Background Header Layer */}
            <div className="absolute top-10 left-0 right-0 z-10 text-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-secondary text-sm font-medium uppercase tracking-wider">Tools & Technologies</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2">My <span className="text-gradient">Tech Stack</span></h2>
                </motion.div>
            </div>

            {/* Floating Bubbles Container */}
            <div className="absolute inset-0 max-w-7xl mx-auto">
                {technologies.map((tech, idx) => {
                    // Generate random movement paths
                    // We use percentages to ensure it stays roughly within bounds but moves extensively
                    const generateRandomPath = () => {
                        const points = [];
                        const numPoints = 4 + Math.floor(Math.random() * 3); // 4-6 waypoints
                        for (let i = 0; i < numPoints; i++) {
                            points.push({
                                x: Math.random() * (dimensions.width * 0.8) - (dimensions.width * 0.4), // Spread across width
                                y: Math.random() * (dimensions.height * 0.8) - (dimensions.height * 0.4), // Spread across height
                                scale: 0.8 + Math.random() * 0.4 // Varied scale pulse
                            });
                        }
                        return points;
                    };

                    const path = generateRandomPath();

                    // Random start position
                    const initialX = Math.random() * (dimensions.width * 0.6) - (dimensions.width * 0.3);
                    const initialY = Math.random() * (dimensions.height * 0.6) - (dimensions.height * 0.3);

                    return (
                        <motion.div
                            key={idx}
                            initial={{ x: initialX, y: initialY, opacity: 0 }}
                            animate={{
                                x: path.map(p => p.x),
                                y: path.map(p => p.y),
                                opacity: 1,
                            }}
                            transition={{
                                duration: 15 + Math.random() * 30, // 15-30s duration for slow float
                                repeat: Infinity,
                                repeatType: "mirror",
                                ease: "linear",
                                opacity: { duration: 1 }
                            }}
                            className="absolute left-1/2 top-1/2"
                            style={{ zIndex: 20 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.2, zIndex: 50 }}
                                className="relative group cursor-pointer"
                            >
                                <div className="w-24 h-24 rounded-full glass-card flex items-center justify-center text-4xl text-gray-800 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-green-400 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(70,239,188,0.3)] transition-all duration-300 bg-white/10 dark:bg-black/20 backdrop-blur-xl">
                                    {tech.icon}
                                </div>
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50 bg-black/80 px-2 py-1 rounded text-xs text-white pointer-events-none">
                                    {tech.name}
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
