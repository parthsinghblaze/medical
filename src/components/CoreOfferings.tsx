'use client';
import { Pill, FlaskConical, Leaf, FileCheck, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from "next/link";

const offerings = [
    {
        title: "Finished Dosage Forms",
        description: "Export-ready branded and generic medicines in various dosage forms for global distribution.",
        icon: Pill,
        color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
        delay: 0
    },
    {
        title: "Active Pharma Ingredients",
        description: "High-purity APIs sourced from certified GMP manufacturers for production and formulation use.",
        icon: FlaskConical,
        color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
        delay: 0.1
    },
    {
        title: "Nutraceuticals",
        description: "High-quality patented ingredients formulated in nutraceuticals meeting global market demand.",
        icon: Leaf,
        color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
        delay: 0.2
    },
    {
        title: "Reference Listed Drugs",
        description: "We provide Reference Listed Drug (RLD) supply services to help generic drug development.",
        icon: FileCheck,
        color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
        delay: 0.3
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            type: "spring" as const,
            stiffness: 50
        }
    })
};

export default function CoreOfferings() {
    return (
        <section className="py-24 bg-surface-light dark:bg-surface-dark relative overflow-hidden">
            {/* Decorative Background Element */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-amber-50/40 dark:bg-amber-900/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-secondary dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-3 block">
                            High-Quality Pharma Export Services
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6">
                            Our Core Offerings
                        </h2>
                        <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-8"></div>
                        <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                            We specialize in sourcing, manufacturing, and exporting a wide range of pharmaceutical products,
                            and excipients, serving distributors, hospitals, labs, and production units worldwide.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {offerings.map((offering, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="bg-white dark:bg-surface-dark/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden flex flex-col h-full"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50 dark:to-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className={`w-14 h-14 rounded-xl ${offering.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                                    <offering.icon size={28} strokeWidth={1.5} />
                                </div>

                                <h4 className="text-xl font-bold text-primary dark:text-white mb-3 group-hover:text-secondary transition-colors duration-300">
                                    {offering.title}
                                </h4>

                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {offering.description}
                                </p>

                                <Link href="#" className="inline-flex items-center text-sm font-semibold text-primary dark:text-blue-400 group-hover:text-secondary transition-colors mt-auto">
                                    Learn more
                                    <ArrowUpRight size={16} className="ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

