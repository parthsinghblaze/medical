'use client';
import { Star, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function GlobalPresence() {
    return (
        <section className="relative py-24 bg-gradient-to-r from-blue-50/50 via-white to-blue-50/50 dark:from-surface-dark dark:via-surface-dark/95 dark:to-surface-dark overflow-hidden">

            {/* Background Decorative Blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* LEFT COLUMN: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-[40%]"
                    >
                        <span className="text-secondary dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-3 block">
                            Our Approach
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6">
                            Our Global Presence
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10">
                            Transcendence Pharma reaches beyond borders, connecting communities across continents.
                            Our diverse teams work seamlessly across time zones to deliver quality, innovation,
                            and care. With a strong foothold in key regions, we are committed to making a
                            positive impact on global health, ensuring that essential medicines are accessible to all.
                        </p>

                        <Link
                            href="/contact-us"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary rounded-full shadow-lg hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 dark:bg-blue-600 dark:hover:bg-blue-500"
                        >
                            Contact Us
                        </Link>
                    </motion.div>

                    {/* RIGHT COLUMN: Map & Markers */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-[60%] relative"
                    >
                        <div className="relative aspect-[16/9] w-full max-w-2xl mx-auto">
                            {/* Transparent SVG World Map */}
                            <Image
                                src="/images/world_map.svg"
                                alt="World Map"
                                fill
                                className="object-contain opacity-60 dark:opacity-40"
                            />

                            {/* Marker 1: North America */}
                            <div className="absolute top-[35%] left-[22%] group cursor-pointer">
                                <div className="relative">
                                    <div className="w-8 h-8 bg-primary dark:bg-blue-500 rounded-full flex items-center justify-center shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300">
                                        <Star size={14} className="text-white fill-white" />
                                    </div>
                                    {/* Pulse Effect */}
                                    <div className="absolute inset-0 bg-primary/40 dark:bg-blue-500/40 rounded-full animate-ping"></div>

                                    <div className="absolute top-10 left-1/2 -translate-x-1/2  opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-gray-800 text-xs px-2 py-1 rounded shadow text-nowrap pointer-events-none z-20">
                                        Americas
                                    </div>
                                </div>
                            </div>

                            {/* Marker 2: Europe/Africa */}
                            <div className="absolute top-[45%] left-[52%] group cursor-pointer">
                                <div className="relative">
                                    <div className="w-8 h-8 bg-secondary dark:bg-blue-400 rounded-full flex items-center justify-center shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300">
                                        <Plus size={16} className="text-white" strokeWidth={3} />
                                    </div>
                                    <div className="absolute inset-0 bg-secondary/40 dark:bg-blue-400/40 rounded-full animate-ping delay-300"></div>
                                    <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-gray-800 text-xs px-2 py-1 rounded shadow text-nowrap pointer-events-none z-20">
                                        Europe & Africa
                                    </div>
                                </div>
                            </div>

                            {/* Marker 3: Asia */}
                            <div className="absolute top-[35%] left-[78%] group cursor-pointer">
                                <div className="relative">
                                    <div className="w-8 h-8 bg-primary dark:bg-blue-500 rounded-full flex items-center justify-center shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300">
                                        <Star size={14} className="text-white fill-white" />
                                    </div>
                                    <div className="absolute inset-0 bg-primary/40 dark:bg-blue-500/40 rounded-full animate-ping delay-700"></div>
                                    <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-gray-800 text-xs px-2 py-1 rounded shadow text-nowrap pointer-events-none z-20">
                                        Asia Pacific
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
