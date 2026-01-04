'use client';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Zap, Quote, CheckCircle2, Search, Truck, Layers, Settings } from 'lucide-react';

export default function RLDContent() {
    const services = [
        {
            title: "Global Reach, Local Expertise",
            icon: <Globe size={24} />,
            points: [
                "Source FDA/EMA/WHO-listed RLDs from 30+ countries, even hard-to-find products.",
                "Navigate regional regulations seamlessly (e.g., EU-GMP, US Orange Book standards)."
            ]
        },
        {
            title: "End-to-End Compliance",
            icon: <ShieldCheck size={24} />,
            points: [
                "Full documentation: Certificates of Analysis (CoA), batch records, and import/export licences.",
                "Strict cold-chain logistics for temperature-sensitive RLDs."
            ]
        },
        {
            title: "Strategic Support",
            icon: <Zap size={24} />,
            points: [
                "Confused about RLD selection for complex generics? Our team advises on optimal comparator drugs.",
                "Custom sourcing for obscure markets (e.g., Japan's \"Orange Guide\" drugs)."
            ]
        }
    ];

    const options = [
        {
            title: "Global RLD Sourcing",
            desc: "FDA/EMA/WHO-listed drugs | Hard-to-find in markets"
        },
        {
            title: "Compliance-Ready Supply",
            desc: "Full documentation (CoA, GMP certs, batch records) | Import/export licensing support"
        },
        {
            title: "Fast-Track Procurement",
            desc: "Urgent delivery | Cold-chain logistics for biologics"
        },
        {
            title: "Strategic RLD Selection",
            desc: "Expert guidance for ANDA/bioequivalence studies"
        },
        {
            title: "Custom Solutions",
            desc: "Obsolete product sourcing | Multi-country RLD procurement"
        }
    ];

    return (
        <div className="bg-white dark:bg-[#0B1121] transition-colors duration-300">
            {/* LIST OF OPTIONS - Numbered Grid (Standard Pattern) */}
            <section className="py-20 lg:py-32 bg-gray-50/30 dark:bg-surface-dark/40 border-t border-gray-100 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* HEADER */}
                    <div className="text-center mb-16 lg:mb-24">
                        <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary dark:text-white mb-4">
                            List Of Process
                        </h2>
                        {/* Decorative wavy line */}
                        <div className="flex justify-center">
                            <svg width="100" height="20" viewBox="0 0 100 20" fill="none" className="text-secondary dark:text-blue-400">
                                <path d="M0 10 Q12.5 0 25 10 T50 10 T75 10 T100 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>

                    {/* IMAGE ROW (High-Quality RLD Imagery) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 max-w-6xl mx-auto">
                        {[
                            { label: "Global RLD Sourcing", src: "/images/world_map.png" },
                            { label: "Compliance & Documentation", src: "/images/team.png" },
                            { label: "Fast-Track Procurement", src: "/images/pharmaceutical_professionals.png" }
                        ].map((img, index) => (
                            <div key={index} className="aspect-[4/3] bg-blue-50/50 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group shadow-lg">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={img.src}
                                    alt={img.label}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                                <div className="absolute inset-x-0 bottom-0 p-6">
                                    <p className="text-white text-lg font-bold drop-shadow-md">{img.label}</p>
                                    <div className="h-1 w-12 bg-secondary group-hover:w-full transition-all duration-300 rounded-full mt-2"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-6xl mx-auto">
                        {options.map((option, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-6 group"
                            >
                                {/* Number Badge */}
                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 text-secondary dark:text-blue-400 flex items-center justify-center text-2xl font-bold border-2 border-blue-100 dark:border-blue-800 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                    {index + 1}
                                </div>

                                {/* Feature Text */}
                                <div className="pt-1">
                                    <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 dark:text-white mb-1 leading-tight group-hover:text-secondary dark:group-hover:text-blue-400 transition-colors duration-300">
                                        {option.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                                        {option.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
