'use client';
import { motion } from 'framer-motion';

export default function FDFOptions() {
    const features = [
        "Wide Range Of Therapeutic Categories",
        "Compliance With International Regulations",
        "High-Quality Standard And Generic Medicines",
        "Ready For Distribution In Bulk"
    ];

    return (
        <section className="py-20 bg-white dark:bg-[#0B1121] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-primary dark:text-white mb-4">
                        List Of Options
                    </h2>
                    {/* Decorative wavy line */}
                    <div className="flex justify-center">
                        <svg width="100" height="20" viewBox="0 0 100 20" fill="none" className="text-secondary dark:text-blue-400">
                            <path d="M0 10 Q12.5 0 25 10 T50 10 T75 10 T100 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>

                {/* IMAGE ROW (Top section) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="aspect-[4/3] bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group">
                            {/* Placeholder for images */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600 font-medium">
                                Image Placeholder {item}
                                <br />
                                (Pharmaceutical/Lab)
                            </div>
                            <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* FEATURES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-6 group"
                        >
                            {/* Number Badge */}
                            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 text-secondary dark:text-blue-400 flex items-center justify-center text-2xl font-bold border-2 border-blue-100 dark:border-blue-800 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                {index + 1}
                            </div>

                            {/* Feature Text */}
                            <h3 className="text-xl md:text-2xl font-display font-bold text-gray-800 dark:text-white leading-tight group-hover:text-secondary dark:group-hover:text-blue-400 transition-colors duration-300">
                                {feature}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
