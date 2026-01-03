'use client';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
        }
    })
};

export default function Services() {
    return (
        <section className="py-20 bg-background-light dark:bg-background-dark relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent dark:from-blue-900/10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-secondary dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-3 block">
                        Expertise & Capabilities
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white">
                        Services
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <motion.div
                        custom={0}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-secondary/30 dark:hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full group hover:-translate-y-1"
                    >
                        <h4 className="text-xl font-bold text-primary dark:text-white mb-4 leading-tight">Finished Dosage Forms (FDF)</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                            Export-ready branded and generic medicines in various dosage forms for global distribution.
                        </p>
                        <Link href="#" className="inline-flex items-center text-xs font-bold tracking-wider text-primary dark:text-blue-400 uppercase hover:text-secondary transition-colors mt-auto group-hover:underline">
                            Read More
                            <ArrowUpRight size={14} className="ml-1 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-secondary/30 dark:hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full group hover:-translate-y-1"
                    >
                        <h4 className="text-xl font-bold text-primary dark:text-white mb-4 leading-tight">Active Pharmaceutical Ingredients (APIs)</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                            High-purity APIs sourced from certified GMP manufacturers for production and formulation use.
                        </p>
                        <Link href="#" className="inline-flex items-center text-xs font-bold tracking-wider text-primary dark:text-blue-400 uppercase hover:text-secondary transition-colors mt-auto group-hover:underline">
                            Read More
                            <ArrowUpRight size={14} className="ml-1 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-secondary/30 dark:hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full group hover:-translate-y-1"
                    >
                        <h4 className="text-xl font-bold text-primary dark:text-white mb-4 leading-tight">Nutraceuticals</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                            High-quality patented ingredients formulated in nutraceuticals meeting global market demand.
                        </p>
                        <Link href="#" className="inline-flex items-center text-xs font-bold tracking-wider text-primary dark:text-blue-400 uppercase hover:text-secondary transition-colors mt-auto group-hover:underline">
                            Read More
                            <ArrowUpRight size={14} className="ml-1 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </motion.div>

                    <motion.div
                        custom={3}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-secondary/30 dark:hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full group hover:-translate-y-1"
                    >
                        <h4 className="text-xl font-bold text-primary dark:text-white mb-4 leading-tight">Reference Listed Drugs (RLDs)</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                            We provide Reference Listed Drug (RLD) supply services to help generic drug development.
                        </p>
                        <Link href="#" className="inline-flex items-center text-xs font-bold tracking-wider text-primary dark:text-blue-400 uppercase hover:text-secondary transition-colors mt-auto group-hover:underline">
                            Read More
                            <ArrowUpRight size={14} className="ml-1 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

