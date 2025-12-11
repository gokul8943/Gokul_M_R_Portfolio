'use client';

import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CEO at TechStart",
            content: "Gokul transformed our vision into a reality. His attention to detail and ability to solve complex problems is unmatched.",
            image: "https://placehold.co/100"
        },
        {
            name: "Michael Chen",
            role: "Product Manager",
            content: "Working with Gokul was a breeze. He delivered the project ahead of schedule and the code quality was excellent.",
            image: "https://placehold.co/100"
        }
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-secondary text-sm font-medium uppercase tracking-wider">Testimonials</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2">Client <span className="text-gradient">Stories</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-2xl glass-card relative"
                        >
                            <FaQuoteLeft className="text-4xl text-primary/20 mb-6" />
                            <p className="text-gray-300 mb-6 italic">&quot;{item.content}&quot;</p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden">
                                    {/* <img src={item.image} alt={item.name} /> */}
                                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900" />
                                </div>
                                <div>
                                    <h4 className="font-bold">{item.name}</h4>
                                    <span className="text-sm text-gray-400">{item.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
