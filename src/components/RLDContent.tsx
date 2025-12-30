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
                    <div className="text-center mb-16 lg:mb-24">
                        <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary dark:text-white mb-4">
                            List Of Options
                        </h2>
                        <div className="flex justify-center">
                            <div className="w-24 h-1.5 bg-secondary rounded-full"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-6xl mx-auto">
                        {options.map((option, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-6 group"
                            >
                                {/* Number Badge */}
                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-cyan-50 dark:bg-cyan-900/20 text-secondary dark:text-blue-400 flex items-center justify-center text-2xl font-bold border-2 border-cyan-100 dark:border-cyan-800/50 group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm">
                                    {index + 1}
                                </div>

                                {/* Feature Text */}
                                <div className="pt-2">
                                    <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-secondary dark:group-hover:text-blue-400 transition-colors duration-300">
                                        {option.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                                        {option.desc.split(/(FDA|EMA|WHO|CoA|GMP certs|batch records|ANDA|bioequivalence)/).map((part, i) => (
                                            <span key={i} className={part.match(/(FDA|EMA|WHO|CoA|GMP certs|batch records|ANDA|bioequivalence)/) ? 'font-bold text-gray-800 dark:text-white' : ''}>
                                                {part}
                                            </span>
                                        ))}
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
