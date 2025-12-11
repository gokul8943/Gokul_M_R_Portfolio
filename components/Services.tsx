'use client';

import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobileAlt, FaRocket } from 'react-icons/fa';

export default function Services() {
    const services = [
        {
            icon: <FaCode />,
            title: "Full-Stack Web Dev",
            desc: "Building end-to-end web solutions using Next.js, React, and Node.js."
        },
        {
            icon: <FaServer />,
            title: "API Development",
            desc: "Designing robust and scalable RESTful and GraphQL APIs."
        },
        {
            icon: <FaMobileAlt />,
            title: "UI/UX Development",
            desc: "Creating pixel-perfect, responsive, and accessible user interfaces."
        },
        {
            icon: <FaRocket />,
            title: "Deployments",
            desc: "Managing cloud infrastructure and deployments on AWS, Vercel, and Docker."
        },
    ];

    return (
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-secondary text-sm font-medium uppercase tracking-wider">Services</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2">What I <span className="text-gradient">Offer</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-2xl glass-card group hover:bg-white/5 transition-all"
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-2xl text-white mb-6 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
