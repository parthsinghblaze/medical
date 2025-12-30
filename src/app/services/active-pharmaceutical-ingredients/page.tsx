'use client';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { ChevronRight, FlaskConical, Dna, ShieldCheck, Zap } from 'lucide-react';
import APIFeatures from '../../../components/APIFeatures';

const Breadcrumb = () => (
    <nav className="flex mb-8 text-sm text-blue-200/80" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
                <Link href="/" className="hover:text-white transition-colors">
                    Home
                </Link>
            </li>
            <li>
                <div className="flex items-center text-blue-300/60">
                    <ChevronRight size={16} className="mx-1" />
                    <span className="hover:text-white transition-colors cursor-pointer">Services</span>
                </div>
            </li>
            <li>
                <div className="flex items-center">
                    <ChevronRight size={16} className="mx-1 text-blue-300/60" />
                    <span className="font-medium text-white">Active Pharmaceutical Ingredients</span>
                </div>
            </li>
        </ol>
    </nav>
);

export default function ActivePharmaceuticalIngredientsPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white dark:bg-[#0B1121]">
            <Header />

            <div className="flex-grow">
                {/* Hero Section for APIs */}
                <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 text-white py-20 lg:py-28 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <Breadcrumb />

                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                                Active Pharmaceutical <br /> Ingredients <span className="text-secondary">(APIs)</span>
                            </h1>
                            <p className="text-xl text-blue-100 leading-relaxed mb-10">
                                High-purity, stable, and compliant active ingredients that form the core of effective healthcare. Our API sourcing and supply chain ensure consistency and safety for pharmaceutical manufacturing.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Introductory Content */}
                <section className="py-20 bg-white dark:bg-[#0B1121]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="aspect-[4/3] bg-blue-50 dark:bg-blue-900/20 rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white dark:border-gray-800">
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600 italic">
                                        API Molecular Structure Image
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <h2 className="text-3xl font-display font-bold text-primary dark:text-white mb-6">
                                    The Foundation of Quality Medicine
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                                    We provide a wide array of high-quality Active Pharmaceutical Ingredients (APIs) sourced from GMP-compliant manufacturers. Our commitment to purity and stability ensures that your finished formulations maintain their intended efficacy and safety profiles.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                                        <div className="w-12 h-12 rounded-lg bg-white dark:bg-gray-900 flex items-center justify-center text-secondary shadow-sm">
                                            <FlaskConical size={24} />
                                        </div>
                                        <span className="font-bold text-gray-800 dark:text-white">High Purity</span>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                                        <div className="w-12 h-12 rounded-lg bg-white dark:bg-gray-900 flex items-center justify-center text-secondary shadow-sm">
                                            <Dna size={24} />
                                        </div>
                                        <span className="font-bold text-gray-800 dark:text-white">Biological Stability</span>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                                        <div className="w-12 h-12 rounded-lg bg-white dark:bg-gray-900 flex items-center justify-center text-secondary shadow-sm">
                                            <ShieldCheck size={24} />
                                        </div>
                                        <span className="font-bold text-gray-800 dark:text-white">GMP Compliant</span>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                                        <div className="w-12 h-12 rounded-lg bg-white dark:bg-gray-900 flex items-center justify-center text-secondary shadow-sm">
                                            <Zap size={24} />
                                        </div>
                                        <span className="font-bold text-gray-800 dark:text-white">Fast Distribution</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Requested API Features Section */}
                <APIFeatures />

            </div>

            <Footer />
        </main>
    );
}
