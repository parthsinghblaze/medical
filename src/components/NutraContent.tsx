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

            {/* LIST OF OPTIONS (Numbered 2x2 Grid) */}
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-5xl mx-auto">
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
                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-cyan-50 dark:bg-cyan-900/20 text-secondary dark:text-blue-400 flex items-center justify-center text-2xl font-bold border-2 border-cyan-100 dark:border-cyan-800/50 group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm">
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
