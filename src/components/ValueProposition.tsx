'use client';
import Image from 'next/image';
import { Microscope, Atom, ShieldCheck, CheckCircle } from 'lucide-react';

import CountUp from 'react-countup';

export default function ValueProposition() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-surface-dark/30 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* LEFT COLUMN (60%) */}
                    <div className="w-full lg:w-3/5">
                        {/* Top Section */}
                        <div className="mb-12">
                            <span className="text-secondary dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-3 block">
                                Trusted Pharmaceuticals Export Partner
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6 leading-tight">
                                We provide global-standard <span className="text-teal-600 dark:text-teal-400">pharmaceuticals solutions.</span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl">
                                Transcendence Pharma is a leading supplier and exporter, committed to supporting healthcare systems worldwide.
                                With reliable sourcing and efficient global distribution, we ensure that healthcare providers receive the best products on time, every time.
                            </p>
                        </div>

                        {/* Feature Cards Stack */}
                        <div className="flex flex-col gap-6">
                            {/* Card 1 */}
                            <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row gap-6 items-start">
                                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 dark:text-teal-400">
                                    <Microscope size={32} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        Over 20 Years of Industry Expertise
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                        With two decades of experience in the pharmaceutical industry, we understand the complexities of compliance, quality, and logistics.
                                        Our commitment is to provide top-grade pharmaceutical products backed by global certifications.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row gap-6 items-start">
                                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 dark:text-teal-400">
                                    <Atom size={32} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        Comprehensive Global Export Support
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                        We offer complete supply solutions ranging from APIs to finished dosage forms, tailored to meet international regulations and client-specific requirements.
                                        Rely on us as your long-term pharmaceutical partner for growth and innovation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN (40%) */}
                    <div className="w-full lg:w-2/5 relative">
                        {/* Decorative Pattern Background */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-20" style={{ backgroundImage: 'radial-gradient(#0d9488 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 opacity-20" style={{ backgroundImage: 'radial-gradient(#0d9488 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>

                        {/* Image Container */}
                        <div className="relative z-10">
                            {/* Main Image */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <div className="aspect-[4/5] bg-gray-200 w-full relative">
                                    <Image
                                        src="/images/pharmaceutical_professionals.png"
                                        alt="Professional Pharmaceutical Team"
                                        fill
                                        className="object-cover bg-teal-50 dark:bg-teal-900/10"
                                    />
                                    {/* Gradient overlay for better text readability if needed, though clean is better */}
                                </div>
                            </div>

                            {/* Hexagon Badge */}
                            <div className="absolute bottom-10 -left-10 lg:-left-12 bg-white dark:bg-surface-dark p-2 rounded-[2rem] shadow-xl animate-bounce-slow">
                                <div className="bg-teal-600 dark:bg-teal-500 text-white w-32 h-32 lg:w-40 lg:h-40 flex flex-col items-center justify-center text-center p-4"
                                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                                    <span className="text-4xl font-bold block leading-none mb-1">
                                        <CountUp end={10} duration={2.5} enableScrollSpy scrollSpyOnce />
                                    </span>
                                    <span className="text-sm font-bold uppercase tracking-wider opacity-90">Years<br />Experience</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
