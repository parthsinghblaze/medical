'use client';
import { Globe, FileCheck, Package, BadgeCheck as Badge, Truck, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const features = [
    {
        title: "Global Network",
        description: "We work with certified manufacturers from all over India, ensuring diverse and reliable sourcing.",
        icon: Globe,
        className: "col-span-2"
    },
    {
        title: "Regulatory Compliance",
        description: "Adherence to strict international standards (USFDA, EUGMP).",
        icon: FileCheck,
        className: "col-span-1"
    },
    {
        title: "Wide Product Range",
        description: "From raw APIs to finished dosage formulations.",
        icon: Package,
        className: "col-span-1"
    },
    {
        title: "Quality Control",
        description: "Rigorous testing for safety and efficacy.",
        icon: Badge,
        className: "col-span-1"
    },
    {
        title: "Fast Logistics",
        description: "Secure, temperature-controlled delivery.",
        icon: Truck,
        className: "col-span-1"
    }
];

const benefits = [
    "WHO GMP Approved Facility",
    "Supply Rare Molecules",
    "Clinical Trial Supply",
    "Custom Packaging & Labeling",
    "Full Documentation Support",
    "End-to-End Export Management"
];

const FeatureCard = ({ feature, index }: { feature: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className={`bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 group flex flex-col justify-between ${feature.className || ''}`}
        >
            <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon size={24} strokeWidth={1.5} />
                </div>
            </div>
            <div>
                <h4 className="font-bold text-lg text-primary dark:text-white mb-2">
                    {feature.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                </p>
            </div>
        </motion.div>
    );
};

export default function ExportExpertise() {
    return (
        <section className="relative py-24 bg-surface-light dark:bg-surface-dark overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* LEFT SIDE: Modern Bento Grid */}
                    <div className="relative z-10">
                        {/* Background Decoration */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-[80px] pointer-events-none -z-10"></div>

                        <div className="grid grid-cols-2 gap-4">
                            {features.map((feature, idx) => (
                                <FeatureCard key={idx} feature={feature} index={idx} />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE: Content */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <span className="block text-secondary dark:text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3">
                                Trusted Export Partner For
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6 leading-tight">
                                Finished Dosage Form <span className="text-blue-600 dark:text-blue-400">&</span> APIs
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-10">
                                We specialize in the global export of high-quality pharmaceutical APIs, finished dosage forms, and nutraceuticals.
                                Our dedicated team ensures seamless logistics, strict quality control, and complete regulatory compliance for every shipment.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-12">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center space-x-3 group">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100/50 dark:bg-green-900/30 flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
                                            <Check className="w-4 h-4 text-green-600 dark:text-green-400" strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-700 dark:text-gray-200 font-medium text-sm">
                                            {benefit}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="#"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-secondary rounded-full shadow-lg shadow-secondary/20 hover:bg-secondary/90 hover:shadow-secondary/40 hover:-translate-y-1 transition-all duration-300"
                            >
                                Learn More About Exports
                            </Link>
                        </motion.div>

                        {/* Microscope Image - Bottom Right Decoration */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: 50 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="absolute -bottom-32 -right-32 w-80 h-80 z-[-1] hidden lg:block pointer-events-none opacity-60 mix-blend-multiply dark:mix-blend-normal"
                        >
                            <Image
                                src="/images/microscope.png"
                                alt="Medical Background"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
