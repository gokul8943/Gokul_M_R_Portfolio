'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-primary/20 blur-[120px] -z-10" />

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-secondary text-sm font-medium uppercase tracking-wider">Get In Touch</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2">Let&apos;s Work <span className="text-gradient">Together</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold">Have a project in mind?</h3>
                        <p className="text-gray-400">
                            I&apos;m currently available for freelance projects and full-time opportunities.
                            Let&apos;s discuss how we can bring your ideas to life.
                        </p>

                        <div className="space-y-4">
                            <a href="mailto:contact@gokul.dev" className="flex items-center gap-4 p-4 rounded-xl glass-card hover:bg-white/5 transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <span className="block text-sm text-gray-400">Email Me</span>
                                    <span className="font-medium">contact@gokul.dev</span>
                                </div>
                            </a>

                            <a href="https://wa.me/1234567890" className="flex items-center gap-4 p-4 rounded-xl glass-card hover:bg-white/5 transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                                    <FaWhatsapp />
                                </div>
                                <div>
                                    <span className="block text-sm text-gray-400">Chat on WhatsApp</span>
                                    <span className="font-medium">+91 123 456 7890</span>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4 p-8 rounded-3xl glass-card"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Name</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Email</label>
                                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Subject</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Project Inquiry" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Message</label>
                            <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Tell me about your project..." />
                        </div>

                        <button type="submit" className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-bold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all flex items-center justify-center gap-2">
                            <FaPaperPlane /> Send Message
                        </button>
                    </motion.form>
                </div>
            </div>

            <footer className="absolute bottom-0 w-full text-center py-6 text-sm text-gray-500">
                © {new Date().getFullYear()} Gokul M R. All rights reserved.
            </footer>
        </section>
    );
}
