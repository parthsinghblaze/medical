'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Plus, ArrowRight } from 'lucide-react';

export default function PartnershipsSection() {
    return (
        <section className="py-20 lg:py-32 bg-white dark:bg-surface-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6">
                        Transcendence Partnerships
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        We collaborate with global distributors to expand the reach of our pharmaceutical and nutraceutical products, ensuring fast market access, regulatory support, and successful international roll-outs.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* LEFT COLUMN */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl font-display font-bold text-primary dark:text-white mb-8 border-l-4 border-secondary pl-6">
                            Exports – Pharma & Nutraceutical Partnerships
                        </h2>

                        <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10">
                            <p>
                                Transcendence Pharma is actively seeking strategic partnerships with distributors and pharmaceutical companies to expand the global reach of our <span className="font-bold text-gray-900 dark:text-white">Finished Dosage Forms (FDFs)</span> and <span className="font-bold text-gray-900 dark:text-white">Nutraceutical products</span>.
                            </p>
                            <p>
                                We collaborate with partners who have a <span className="font-bold text-gray-900 dark:text-white">strong market presence in semi-regulated and unregulated territories</span>, proven expertise in <span className="font-bold text-gray-900 dark:text-white">regulatory registration processes</span>, and the capability to execute effective <span className="font-bold text-gray-900 dark:text-white">market access strategies</span>.
                            </p>
                            <p>
                                Together, we ensure faster product approvals, smoother compliance, and successful <span className="font-bold text-gray-900 dark:text-white">commercial roll-outs</span> in international markets.
                            </p>
                        </div>

                        <Link href="/services#fdf" className="inline-flex items-center gap-2 text-secondary dark:text-blue-400 font-bold hover:gap-3 transition-all duration-300 group">
                            Explore our Finished Dosage Forms (FDFs) solutions
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* RIGHT COLUMN - World Map with Markers */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative aspect-[16/9] w-full max-w-2xl mx-auto rounded-3xl bg-blue-50/30 dark:bg-blue-900/10 p-4 border border-blue-100 dark:border-blue-800 shadow-inner overflow-hidden">
                            <Image
                                src="/images/world_map.svg"
                                alt="Global Presence Map"
                                fill
                                className="object-contain opacity-60 dark:opacity-40 grayscale transition-opacity duration-500"
                            />

                            {/* Marker: North America (West Coast) */}
                            <div className="absolute top-[35%] left-[20%] group cursor-pointer z-10 transition-transform duration-300 hover:scale-110">
                                <div className="relative">
                                    <div className="w-8 h-8 bg-secondary dark:bg-blue-400 rounded-full flex items-center justify-center shadow-lg">
                                        <Plus size={16} className="text-white" strokeWidth={3} />
                                    </div>
                                    <div className="absolute inset-0 bg-secondary/40 dark:bg-blue-400/40 rounded-full animate-ping"></div>
                                    <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-gray-800 text-[10px] font-bold px-2 py-1 rounded shadow text-nowrap pointer-events-none z-20 border border-gray-100 dark:border-gray-700">
                                        North America
                                    </div>
                                </div>
                            </div>

                            {/* Marker: Europe */}
                            <div className="absolute top-[30%] left-[50%] group cursor-pointer z-10 transition-transform duration-300 hover:scale-110">
                                <div className="relative">
                                    <div className="w-8 h-8 bg-primary dark:bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                                        <Star size={14} className="text-white fill-white" />
                                    </div>
                                    <div className="absolute inset-0 bg-primary/40 dark:bg-blue-500/40 rounded-full animate-ping delay-300"></div>
                                    <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-gray-800 text-[10px] font-bold px-2 py-1 rounded shadow text-nowrap pointer-events-none z-20 border border-gray-100 dark:border-gray-700">
                                        Europe & Africa
                                    </div>
                                </div>
                            </div>

                            {/* Marker: Middle East/Asia */}
                            <div className="absolute top-[45%] left-[75%] group cursor-pointer z-10 transition-transform duration-300 hover:scale-110">
                                <div className="relative">
                                    <div className="w-8 h-8 bg-secondary dark:bg-blue-400 rounded-full flex items-center justify-center shadow-lg">
                                        <Plus size={16} className="text-white" strokeWidth={3} />
                                    </div>
                                    <div className="absolute inset-0 bg-secondary/40 dark:bg-blue-400/40 rounded-full animate-ping delay-700"></div>
                                    <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-gray-800 text-[10px] font-bold px-2 py-1 rounded shadow text-nowrap pointer-events-none z-20 border border-gray-100 dark:border-gray-700">
                                        Middle East & Asia
                                    </div>
                                </div>
                            </div>

                            {/* Marker: Australia/Oceania */}
                            <div className="absolute top-[75%] left-[88%] group cursor-pointer z-10 transition-transform duration-300 hover:scale-110">
                                <div className="relative">
                                    <div className="w-8 h-8 bg-primary dark:bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                                        <Star size={14} className="text-white fill-white" />
                                    </div>
                                    <div className="absolute inset-0 bg-primary/40 dark:bg-blue-500/40 rounded-full animate-ping delay-1000"></div>
                                    <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-gray-800 text-[10px] font-bold px-2 py-1 rounded shadow text-nowrap pointer-events-none z-20 border border-gray-100 dark:border-gray-700">
                                        Oceania
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative background circle */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
