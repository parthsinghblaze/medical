'use client';
import { motion } from 'framer-motion';

export default function APIFeatures() {
    const features = [
        "High-Purity And High-Quality APIs",
        "Wide Range Of Therapeutic Categories",
        "GMP Compliance & Regulatory Standards",
        "Custom API Solutions"
    ];

    return (
        <section className="py-20 bg-white dark:bg-[#0B1121] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* IMAGE ROW (Top section) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {[
                        "Laboratory scientist at work",
                        "Researcher with microscope",
                        "Medical testing & diagnostics"
                    ].map((label, index) => (
                        <div key={index} className="aspect-[4/3] bg-blue-50/50 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group">
                            {/* Placeholder for images */}
                            <div className="absolute inset-0 flex items-center justify-center text-center px-6 text-gray-400 dark:text-gray-500 font-medium text-sm">
                                {label}
                                <br />
                                (Image Placeholder)
                            </div>
                            <div className="absolute inset-0 bg-secondary/5 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* FEATURES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-5xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-6 group"
                        >
                            {/* Number Badge */}
                            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-cyan-50 dark:bg-cyan-900/20 text-secondary dark:text-blue-400 flex items-center justify-center text-2xl font-bold border-2 border-cyan-100 dark:border-cyan-800/50 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all duration-300">
                                {index + 1}
                            </div>

                            {/* Feature Text */}
                            <div className="pt-3">
                                <h3 className="text-xl md:text-2xl font-display font-bold text-gray-800 dark:text-white leading-tight group-hover:text-secondary dark:group-hover:text-blue-400 transition-colors duration-300">
                                    {feature}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
