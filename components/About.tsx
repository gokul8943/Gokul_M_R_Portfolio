'use client';

import { motion } from 'framer-motion';

export default function About() {
    const features = [
        { title: "Self-Taught", desc: "Driven by curiosity, I've mastered modern web stacks through continuous learning and building." },
        { title: "Problem Solver", desc: "I don't just write code; I solve complex real-world problems with efficient solutions." },
        { title: "Fast Learner", desc: "Adapting to new technologies and frameworks is second nature to me." },
    ];

    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-secondary text-sm font-medium uppercase tracking-wider">About Me</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2">Driven by <span className="text-gradient">Innovation</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10 glass-card p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">My Journey</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                I started my coding journey with a simple curiosity about how things work on the internet.
                                What began as a hobby quickly turned into a passion for building robust, scalable applications.
                                As a self-taught developer, I&apos;ve spent countless hours mastering the MERN stack and exploring new technologies.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Today, I build full-stack applications that are not just functional but also visually stunning.
                                I believe in writing clean, maintainable code and delivering exceptional user experiences.
                            </p>
                        </div>
                        <div className="absolute top-4 -left-4 w-full h-full bg-primary/10 rounded-2xl -z-10" />
                    </motion.div>

                    <div className="space-y-6">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-primary/50 transition-colors"
                            >
                                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h4>
                                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
