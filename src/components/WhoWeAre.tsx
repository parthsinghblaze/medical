'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function WhoWeAre() {
    return (
        <section className="py-24 bg-white dark:bg-surface-dark overflow-hidden relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50/50 dark:bg-blue-900/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-50/50 dark:bg-gray-800/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* LEFT COLUMN: Image Frame */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-[40%] relative"
                    >
                        <div className="relative aspect-square max-w-md mx-auto">
                            {/* Circular Background Blob (Theme Color) */}
                            <div className="absolute inset-0 bg-secondary/10 dark:bg-blue-500/10 rounded-full scale-95 animate-pulse-slow"></div>

                            {/* Image Container with Soft Shadow */}
                            <div className="relative h-full w-full rounded-full overflow-hidden border-8 border-white dark:border-surface-dark shadow-2xl">
                                <Image
                                    src="/images/team.png"
                                    alt="Aksharavira Healthcare Team"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Decorative Small Orbit */}
                            <div className="absolute top-4 right-8 w-6 h-6 bg-accent rounded-full animate-bounce delay-700"></div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-[60%]"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white mb-8">
                            Who We Are
                        </h2>

                        <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                            <p>
                                At Aksharavira, we are driven by a commitment to healthcare innovation and excellence.
                                Operating from our WHO-GMP certified facilities, we specialize in the production and global distribution of
                                high-quality Finished Dosage Forms (FDF) and nutraceuticals. Our rigorous adherence to international standards
                                ensures that every product plays a vital role in improving lives worldwide.
                            </p>

                            <p>
                                Beyond manufacturing, we are a trusted partner in pharmaceutical development. We leverage a vast network within
                                the Indian pharmaceutical ecosystem to source premium APIs and Reference Listed Drugs (RLDs). Our expertise extends
                                to supplying rare medicines and orphan drugs, bridging the gap for critical treatments in markets that need them most.
                            </p>

                            <p>
                                Our team is built on values of transparency, integrity, and partnership. We believe in personalized service—ensuring
                                timely delivery, clear communication, and end-to-end support for our global clients. We don't just export products;
                                we export health, reliability, and trust.
                            </p>
                        </div>

                        <div className="mt-10">
                            <Link
                                href="/about"
                                className="inline-block text-primary dark:text-blue-400 font-bold uppercase tracking-wider border-b-2 border-primary dark:border-blue-400 hover:text-secondary hover:border-secondary transition-colors pb-1"
                            >
                                About Us
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
