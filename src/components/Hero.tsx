'use client';

import { motion } from 'framer-motion';
import ThreeScene from './ThreeScene'; // Adjust import path if needed
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative bg-[image:var(--image-hero-gradient)] dark:bg-[image:var(--image-hero-gradient-dark)] overflow-hidden min-h-[700px] md:min-h-[800px] flex flex-col md:flex-row items-center justify-center">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-blue-100/50 dark:from-slate-900 dark:to-slate-800 opacity-80 z-0"></div>
            <div className="absolute right-0 top-0 h-full w-full md:w-1/2 bg-gradient-to-l from-blue-200/20 to-transparent dark:from-blue-900/10 pointer-events-none"></div>

            {/* Text Container - Same structure as original */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pointer-events-none pt-24 md:pt-0">
                <div className="flex flex-col md:flex-row items-center h-full">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full md:w-1/2 text-center md:text-left pointer-events-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 backdrop-blur-sm mb-6"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                            </span>
                            <span className="text-secondary dark:text-blue-300 text-xs font-bold tracking-wide uppercase">
                                Global Healthcare Partner
                            </span>
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white leading-tight mb-6">
                            Bridging Borders with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-500">Premium Pharmaceuticals</span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium"
                        >
                            We specialize in exporting high-quality pharmaceutical formulations and APIs. Trusted by partners in over <strong>25+ countries</strong> to deliver excellence, compliance, and care.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10"
                        >
                            <Link href="/product-catalog" className="bg-secondary hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 active:translate-y-0 text-sm tracking-wide text-center flex items-center justify-center">
                                View Product Catalog
                            </Link>

                            <Link href="/contact-us" className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-3.5 rounded-full font-bold transition-all hover:bg-white dark:hover:bg-slate-800 shadow-sm hover:shadow text-sm tracking-wide text-center flex items-center justify-center">
                                Partner With Us
                            </Link>
                        </motion.div>

                    </motion.div>
                </div>
            </div>

            {/* 3D Scene - Positioned absolutely for desktop, relative for mobile to follow text */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-full md:w-[50vw] h-[450px] sm:h-[500px] md:h-full relative md:absolute md:right-0 md:top-0 z-10 flex items-center justify-center pointer-events-auto mt-4 md:mt-0"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full filter blur-3xl opacity-30 transform scale-75 animate-pulse"></div>
                <div className="w-full h-full max-w-[450px] md:max-w-none aspect-square relative flex items-center justify-center">
                    <ThreeScene />
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 dark:text-gray-500 hidden md:block"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </motion.div>
        </section>
    );
}
