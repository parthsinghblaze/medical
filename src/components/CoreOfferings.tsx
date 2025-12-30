'use client';
import { Pill, FlaskConical, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

export default function CoreOfferings() {
    return (
        <section className="py-20 bg-surface-light dark:bg-surface-dark relative overflow-hidden">
            {/* Decorative Background Element */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-50/50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-yellow-50/50 dark:bg-yellow-900/5 rounded-full blur-3xl opacity-60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-secondary dark:text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3">
                        High-Quality Pharma Export Services
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white mb-8">
                        Our Core Offerings
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-16">
                        We specialize in sourcing, manufacturing, and exporting a wide range of pharmaceutical products, and excipients, serving distributors, hospitals, labs, and production unit worldwide.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
                >
                    {/* Card 1 */}
                    <motion.div variants={itemVariants} className="bg-white dark:bg-background-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 group hover:-translate-y-1">
                        <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-secondary dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                            <Pill size={32} />
                        </div>
                        <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Finished Formulations</h4>
                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                            High-quality tablets, capsules, injectables, and syrups manufactured in WHO-GMP certified facilities.
                        </p>
                    </motion.div>
                    {/* Card 2 */}
                    <motion.div variants={itemVariants} className="bg-white dark:bg-background-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 group hover:-translate-y-1">
                        <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-secondary dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                            <FlaskConical size={32} />
                        </div>
                        <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Active Ingredients (API)</h4>
                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                            Sourcing and supply of high-purity Active Pharmaceutical Ingredients for formulation development.
                        </p>
                    </motion.div>
                    {/* Card 3 */}
                    <motion.div variants={itemVariants} className="bg-white dark:bg-background-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 group hover:-translate-y-1">
                        <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-secondary dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                            <Truck size={32} />
                        </div>
                        <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Global Logistics</h4>
                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                            End-to-end supply chain management ensuring temperature-controlled and timely delivery worldwide.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

