'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/5 dark:border-white/10 py-4 shadow-sm dark:shadow-none'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <a href="/" className="text-2xl font-bold font-mono text-gradient">Gokul M R</a>

                <ul className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="text-sm font-medium text-gray-700 dark:text-gray-800 hover:text-primary dark:hover:text-white transition-colors hover:underline decoration-primary decoration-2 underline-offset-4">
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="#contact" className="px-5 py-2 rounded-full border border-primary/50 text-primary hover:bg-primary hover:text-white transition-all">
                            File Hire
                        </a>
                    </li>
                    <li className="flex items-center gap-4">
                        <ThemeToggle />
                    </li>
                </ul>
            </div>
        </motion.nav>
    );
}
