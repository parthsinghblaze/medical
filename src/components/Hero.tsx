'use client';

import { motion } from 'framer-motion';
import ThreeScene from './ThreeScene'; // Adjust import path if needed

export default function Hero() {
    return (
        <section className="relative bg-[image:var(--image-hero-gradient)] dark:bg-[image:var(--image-hero-gradient-dark)] overflow-hidden min-h-[700px] flex items-center">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-blue-100/50 dark:from-slate-900 dark:to-slate-800 opacity-80 z-0"></div>
            <div className="absolute right-0 top-0 h-full w-full md:w-1/2 bg-gradient-to-l from-blue-200/20 to-transparent dark:from-blue-900/10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-12">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900 text-secondary dark:text-blue-300 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm border border-blue-200 dark:border-blue-700">
                                Global Healthcare Leader
                            </span>
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-primary dark:text-white leading-[1.1] mb-6">
                            Experts In <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-400">Global</span> <br />
                            Pharmaceuticals <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-500">Exports</span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed font-light"
                        >
                            Delivering top-notch medications to partners across the globe. <br className="hidden md:block" />
                            Reliable. Compliant. Efficient.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                        >
                            <button className="bg-secondary hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 active:translate-y-0 text-lg">
                                Explore Products
                            </button>
                            <button className="bg-white dark:bg-slate-800 text-primary dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-4 rounded-full font-semibold transition-all hover:bg-gray-50 dark:hover:bg-slate-700 shadow-sm hover:shadow-md text-lg">
                                Contact Us
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* 3D Scene */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full md:w-[50vw] md:absolute md:right-0 md:top-0 md:h-full flex justify-center items-center order-1 md:order-2 h-[400px] relative z-0 pointer-events-none"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full filter blur-3xl opacity-30 transform scale-75 animate-pulse"></div>
                        <ThreeScene />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 dark:text-gray-500"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </motion.div>
        </section>
    );
}

