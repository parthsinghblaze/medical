'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShieldCheck, Award, CheckCircle2, Globe2, Building2, LucideIcon } from 'lucide-react';

type CertificationItem = {
    title: string;
    subtitle: string;
    iconPath?: string;
    IconComponent?: LucideIcon;
    type: 'image' | 'image_custom' | 'icon';
    color: string;
    borderColor: string;
    bgHover: string;
    imageFallback?: string;
}

const certifications: CertificationItem[] = [
    {
        title: "GMP Certified",
        subtitle: "Good Manufacturing Practice",
        iconPath: "/images/gmp_badge.svg",
        type: "image",
        color: "text-green-600",
        borderColor: "group-hover:border-green-500/50",
        bgHover: "group-hover:bg-green-50/50 dark:group-hover:bg-green-900/10"
    },
    {
        title: "WHO GMP",
        subtitle: "World Health Organization",
        iconPath: "/images/who_gmp_badge.png",
        type: "image",
        color: "text-blue-600",
        borderColor: "group-hover:border-blue-500/50",
        bgHover: "group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/10"
    },
    {
        title: "FDCA",
        subtitle: "Food & Drugs Control",
        IconComponent: ShieldCheck,
        type: "icon",
        color: "text-primary",
        borderColor: "group-hover:border-primary/50",
        bgHover: "group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/10"
    },
    {
        title: "MSME",
        subtitle: "Govt. of India Enterprise",
        IconComponent: Building2,
        imageFallback: "/images/india_emblem.png",
        type: "image_custom",
        color: "text-orange-600",
        borderColor: "group-hover:border-orange-500/50",
        bgHover: "group-hover:bg-orange-50/50 dark:group-hover:bg-orange-900/10"
    },
    {
        title: "PHARMEXCIL",
        subtitle: "Export Promotion Council",
        IconComponent: Globe2,
        type: "icon",
        color: "text-purple-600",
        borderColor: "group-hover:border-purple-500/50",
        bgHover: "group-hover:bg-purple-50/50 dark:group-hover:bg-purple-900/10"
    }
];

export default function Certifications() {
    return (
        <section className="relative py-24 bg-gray-50/50 dark:bg-[#0B1121] overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/3 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* LEFT COLUMN: Sticky Header & Key Stats */}
                    <div className="lg:col-span-4 lg:sticky lg:top-24">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-secondary dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-3 block">
                                Global Standards
                            </span>

                            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6 leading-[1.15]">
                                Delivering <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Excellence</span> <br />
                                in Supply
                            </h2>

                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                                We don't just export products; we deliver trust. Our rigorous adherence to international quality standards ensures that every shipment meets the highest benchmarks of safety and efficacy.
                            </p>

                            <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-gray-800 p-6 rounded-2xl shadow-xl shadow-gray-200/50 dark:shadow-none backdrop-blur-sm">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                        <CheckCircle2 size={24} strokeWidth={3} />
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-gray-900 dark:text-white">100+</div>
                                        <div className="text-sm text-gray-500 font-medium">Global Clients Trusted Us</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Grid of Certifications */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`group relative bg-white dark:bg-white/5 border border-gray-100 dark:border-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ${cert.borderColor} border-l-4 overflow-hidden`}
                                >
                                    {/* Subtle Background Hover Fill */}
                                    <div className={`absolute inset-0 transition-colors duration-300 ${cert.bgHover} opacity-0 group-hover:opacity-100`}></div>

                                    <div className="relative z-10 flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className={`text-xl font-bold mb-1 ${cert.color} dark:text-white`}>{cert.title}</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{cert.subtitle}</p>
                                        </div>

                                        <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center p-2 bg-gray-50 dark:bg-white/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                            {(cert.type === 'image' || cert.type === 'image_custom') ? (
                                                <div className="relative w-full h-full">
                                                    <Image
                                                        src={cert.type === 'image_custom' ? (cert.imageFallback || "") : (cert.iconPath || "")}
                                                        alt={cert.title}
                                                        fill
                                                        className={`object-contain ${cert.type === 'image_custom' ? 'dark:invert' : ''}`}
                                                    />
                                                </div>
                                            ) : (
                                                cert.IconComponent && <cert.IconComponent size={28} className={cert.color} />
                                            )}
                                        </div>
                                    </div>

                                    {/* Decorative Line Art / Watermark */}
                                    <div className="absolute -bottom-4 -right-4 opacity-[0.03] rotate-12 pointer-events-none text-current">
                                        {/* Abstract Shape */}
                                        <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
                                            <circle cx="50" cy="50" r="40" />
                                        </svg>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Additional 'More To Be Added' or 'Commitment' Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                viewport={{ once: true }}
                                className="md:col-span-1 bg-gradient-to-br from-primary to-secondary p-6 rounded-2xl shadow-lg text-white flex flex-col justify-center items-start"
                            >
                                <h3 className="text-xl font-bold mb-2">Our Commitment</h3>
                                <p className="text-blue-100 text-sm leading-snug mb-4">
                                    We continuously strive to expand our accreditations to serve more markets globally.
                                </p>
                                <div className="mt-auto px-4 py-2 bg-white/20 rounded-full text-xs font-semibold backdrop-blur-md">
                                    Quality First
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
