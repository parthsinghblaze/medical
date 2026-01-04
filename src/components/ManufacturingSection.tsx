'use client';
import Image from 'next/image';
import { Star, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ManufacturingSection() {
    return (
        <section className="py-20 lg:py-32 bg-gray-50/50 dark:bg-surface-dark/40 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">

                    {/* RIGHT COLUMN: Text Content (55%) */}
                    <div className="w-full lg:w-[55%]">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary dark:text-white mb-8 border-l-4 border-secondary pl-6">
                            Manufacturing – Global Pharma Manufacturing Solutions
                        </h2>

                        <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                            <p>
                                At Transcendence Pharma, we specialize in <span className="font-bold text-gray-900 dark:text-white">pharmaceutical manufacturing</span> and <span className="font-bold text-gray-900 dark:text-white">export solutions</span> under both our own and partner brand names.
                            </p>
                            <p>
                                With a strong infrastructure and expertise in <span className="font-bold text-gray-900 dark:text-white">formulation development</span>, we ensure the highest standards of <span className="font-bold text-gray-900 dark:text-white">regulatory compliance, documentation, and international quality certifications</span>.
                            </p>
                            <p>
                                Our state-of-the-art manufacturing capabilities enable us to deliver cost-effective and scalable solutions for global markets, covering a wide range of <span className="font-bold text-gray-900 dark:text-white">APIs, FDFs, and nutraceutical products</span>.
                            </p>
                        </div>
                    </div>

                    {/* LEFT COLUMN: Map & Markers (45%) */}
                    <div className="w-full lg:w-[45%] relative">
                        <div className="relative aspect-[16/9] w-full max-w-xl mx-auto rounded-3xl bg-blue-50/30 dark:bg-blue-900/10 p-4 border border-blue-100 dark:border-blue-800 shadow-inner overflow-hidden">
                            <Image
                                src="/images/world_map.svg"
                                alt="Global Manufacturing Presence Map"
                                fill
                                className="object-contain opacity-60 dark:opacity-40 grayscale"
                            />

                            {/* Marker 1: North America (Central US) */}
                            <div className="absolute top-[35%] left-[25%] group cursor-pointer z-10 transition-transform duration-300 hover:scale-110">
                                <div className="relative">
                                    <div className="w-8 h-8 bg-primary dark:bg-blue-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-800">
                                        <Plus size={16} className="text-white" strokeWidth={3} />
                                    </div>
                                    <div className="absolute inset-0 bg-primary/40 dark:bg-blue-500/40 rounded-full animate-ping"></div>
                                    <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-gray-800 text-[10px] font-bold px-2 py-1 rounded shadow text-nowrap pointer-events-none z-20 border border-gray-100 dark:border-gray-700">
                                        North America
                                    </div>
                                </div>
                            </div>

                            {/* Marker 2: Central/South Asia (India region) */}
                            <div className="absolute top-[42%] left-[68%] group cursor-pointer z-10 transition-transform duration-300 hover:scale-110">
                                <div className="relative">
                                    <div className="w-8 h-8 bg-secondary dark:bg-blue-400 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-800">
                                        <Star size={14} className="text-white fill-white" />
                                    </div>
                                    <div className="absolute inset-0 bg-secondary/40 dark:bg-blue-400/40 rounded-full animate-ping delay-500"></div>
                                    <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-gray-800 text-[10px] font-bold px-2 py-1 rounded shadow text-nowrap pointer-events-none z-20 border border-gray-100 dark:border-gray-700">
                                        India Hub
                                    </div>
                                </div>
                            </div>

                            {/* Marker 3: Australia/Oceania */}
                            <div className="absolute top-[75%] left-[88%] group cursor-pointer z-10 transition-transform duration-300 hover:scale-110">
                                <div className="relative">
                                    <div className="w-8 h-8 bg-primary dark:bg-blue-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-800">
                                        <Plus size={16} className="text-white" strokeWidth={3} />
                                    </div>
                                    <div className="absolute inset-0 bg-primary/40 dark:bg-blue-500/40 rounded-full animate-ping delay-1000"></div>
                                    <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-gray-800 text-[10px] font-bold px-2 py-1 rounded shadow text-nowrap pointer-events-none z-20 border border-gray-100 dark:border-gray-700">
                                        Oceania
                                    </div>
                                </div>
                            </div>

                            {/* Marker 4: Latin America (LATAM) */}
                            <div className="absolute top-[65%] left-[28%] group cursor-pointer z-10 transition-transform duration-300 hover:scale-110">
                                <div className="relative">
                                    <div className="w-8 h-8 bg-primary dark:bg-blue-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-800">
                                        <Plus size={16} className="text-white" strokeWidth={3} />
                                    </div>
                                    <div className="absolute inset-0 bg-primary/40 dark:bg-blue-500/40 rounded-full animate-ping delay-700"></div>
                                    <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-gray-800 text-[10px] font-bold px-2 py-1 rounded shadow text-nowrap pointer-events-none z-20 border border-gray-100 dark:border-gray-700">
                                        Latin America (LATAM)
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative background glow */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
