'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function TrustSection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-light dark:bg-surface-dark">
            <div className="max-w-7xl mx-auto">
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary via-[#243B7A] to-secondary shadow-2xl">

                    {/* Background Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_25%)]"></div>

                    <div className="flex flex-col items-center text-center">

                        {/* Content Top */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="w-full max-w-4xl p-10 md:p-14 z-10"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
                                Reliable by International Manufacturers, Hospitals, Labs and Distributors
                            </h2>

                            <p className="text-blue-50/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                                We proudly collaborate with clients worldwide, providing top-tier Finished Dosage Forms (FDF), APIs, nutraceuticals, and RLD services. Our unwavering dedication to quality, reliability, and regulatory compliance has built long-lasting relationships across the pharmaceutical industry.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                <Link
                                    href="/services"
                                    className="inline-flex items-center px-8 py-3.5 text-base font-bold text-primary bg-white rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                                >
                                    View Our Services
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center px-8 py-3.5 text-base font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full transition-all"
                                >
                                    Request a Quote
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </div>

                            <p className="text-white font-semibold text-lg opacity-90">
                                Increase the efficiency of your pharmaceutical supply chain by working together.
                            </p>
                        </motion.div>

                        {/* Image Bottom */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="w-full relative h-[300px] lg:h-[450px] mt-[-20px]"
                        >
                            <div className="relative w-full h-full max-w-5xl mx-auto">
                                <Image
                                    src="/images/doctors_transparent.png"
                                    alt="Trusted Healthcare Professionals"
                                    fill
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
