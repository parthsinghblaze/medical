'use client';
import { Globe, FileCheck, Binoculars, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
    {
        icon: Globe,
        number: "38+",
        label: "Export markets in Asia, Africa, Europe, and Americas",
        color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
    },
    {
        icon: FileCheck,
        number: "100%",
        label: "Every product complies with international regulations and documentation requirements.",
        color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
    },
    {
        icon: Binoculars,
        number: "250+",
        label: "Extensive collection of rare molecules, APIs, and FDFs.",
        color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
    },
    {
        icon: Truck,
        number: "10+",
        label: "Proven track record in international logistics and pharmaceutical procurement",
        color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
    }
];

export default function StatsSection() {
    return (
        <section className="py-20 bg-surface-light dark:bg-surface-dark relative">
            {/* Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-surface-dark/50 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl dark:hover:shadow-none transition-all duration-300 flex flex-col items-center text-center group h-full"
                        >
                            <div className={`mb-6 p-4 rounded-full group-hover:scale-110 transition-all duration-300 ${stat.color}`}>
                                <stat.icon size={32} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-4xl font-display font-bold text-primary dark:text-white mb-4">
                                {stat.number}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
