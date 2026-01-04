'use client';
import { motion } from 'framer-motion';

export default function NutraContent() {
    const options = [
        "Nutraceutical Product Range",
        "Private Labeling & White Labeling",
        "GMP Compliance & Regulatory Standards",
        "Specialized Formulations"
    ];

    return (
        <div className="bg-white dark:bg-[#0B1121] transition-colors duration-300">
            {/* IMAGE ROW (Standardized Layout) */}
            {/* <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        "Natural Raw Materials & Herbals",
                        "Modern Nutraceutical Production",
                        "Quality Packaging & Presentation"
                    ].map((label, index) => (
                        <div key={index} className="aspect-[4/3] bg-emerald-50/30 dark:bg-emerald-900/5 rounded-3xl overflow-hidden border border-emerald-100/50 dark:border-emerald-800/30 relative group">
                            <div className="absolute inset-0 flex items-center justify-center text-center px-6 text-emerald-700/40 dark:text-emerald-500/40 font-medium text-sm italic">
                                {label}
                                <br />
                                (Image Placeholder)
                            </div>
                            <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                    ))}
                </div>
            </section> */}

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

                    {/* IMAGE ROW (High-Quality Nutra Imagery) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 max-w-6xl mx-auto">
                        {[
                            { label: "Nutraceutical Formulation", src: "/images/fdf_tablets_capsules.png" },
                            { label: "Modern Production Line", src: "/images/pharmaceutical_professionals.png" },
                            { label: "Quality Control Lab", src: "/images/microscope.png" }
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-5xl mx-auto">
                        {[
                            "Nutraceutical Product Range",
                            "Private Labeling & White Labeling",
                            "GMP Compliance & Regulatory Standards",
                            "Specialized Formulations"
                        ].map((option, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-6 group"
                            >
                                {/* Number Badge */}
                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 text-secondary dark:text-blue-400 flex items-center justify-center text-2xl font-bold border-2 border-blue-100 dark:border-blue-800 group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm">
                                    {index + 1}
                                </div>

                                {/* Feature Text */}
                                <h3 className="text-xl md:text-2xl font-display font-bold text-gray-800 dark:text-white leading-tight group-hover:text-secondary dark:group-hover:text-blue-400 transition-colors duration-300">
                                    {option}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
