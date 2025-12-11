'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20">
            {/* Background blobs */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -z-10 animate-pulse delay-700" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block px-4 py-2 rounded-full border border-white/10 glass-card text-sm text-accent font-medium"
                    >
                        Software Developer
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Building digital <br />
                        <span className="text-gradient">experiences</span> that matter.
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl max-w-lg">
                        I&apos;m a self-taught developer specializing in building exceptional digital experiences.
                        Currently focused on building accessible, human-centered products.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-white shadow-lg shadow-purple-500/30"
                        >
                            Hire Me
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="px-8 py-3 glass-card rounded-full font-bold hover:bg-white/5 transition-colors"
                        >
                            View Work
                        </motion.a>
                    </div>

                    <div className="flex gap-6 pt-6 text-2xl text-gray-400">
                        <a href="#" className="hover:text-white transition-colors"><FaGithub /></a>
                        <a href="#" className="hover:text-white transition-colors"><FaLinkedin /></a>
                        <a href="#" className="hover:text-white transition-colors"><FaTwitter /></a>
                        <a href="#" className="hover:text-white transition-colors"><FaEnvelope /></a>
                    </div>
                </motion.div>

                {/* Image/Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        {/* Decorative circles */}
                        <div className="absolute inset-0 border-2 border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-4 border border-accent/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                        {/* Profile Place holder */}
                        <div className="absolute inset-8 rounded-full overflow-hidden glass-card flex items-center justify-center bg-black/20">
                            <span className="text-gray-600">Your Photo Here</span>
                            {/* <img src="/path/to/profile.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
