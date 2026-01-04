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
                <div className="bg-gradient-to-br from-primary via-blue-900 to-primary text-white py-20 lg:py-28 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <Breadcrumb />

                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white text-balance">
                                Active Pharmaceutical <br className="hidden md:block" /> Ingredients <span className="text-secondary dark:text-blue-400">(APIs)</span>
                            </h1>
                            <p className="text-xl text-blue-100/80 leading-relaxed mb-10">
                                High-purity, stable, and compliant active ingredients that form the core of effective healthcare. Our API sourcing and supply chain ensure consistency and safety.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Introductory Content */}
                <section className="py-20 bg-white dark:bg-[#0B1121]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            <div className="order-2 lg:order-1 sticky top-24">
                                <div className="aspect-[4/5] bg-blue-50 dark:bg-blue-900/20 rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white dark:border-gray-800">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="/images/api_main_sourcing.png"
                                        alt="API Sourcing Excellence"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 space-y-8">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-primary dark:text-white mb-6">
                                        Active Pharmaceutical Ingredients (APIs)
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                        At <strong className="text-primary dark:text-blue-400">Transcendence Pharma</strong>, we understand that behind every life-saving medicine is a chain of trust—starting with the purity of its ingredients. We have spent years mastering the art of sourcing:
                                    </p>
                                    <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0"></div>
                                            <span><strong>High-purity APIs</strong> (USP/BP/IP compliance)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0"></div>
                                            <span>Hard-to-find specialty APIs (<strong>Oncology, Rare Diseases, Cardiology</strong>)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0"></div>
                                            <span>End-to-end regulatory support (<strong>DMF, CPP, GMP</strong>)</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-3xl border-l-4 border-secondary">
                                    <p className="text-gray-800 dark:text-gray-200 text-lg italic leading-relaxed font-display">
                                        &ldquo;Founded by a team of pharmaceutical experts and supply chain veterans, <strong className="text-primary dark:text-blue-400">Transcendence Pharma</strong> was born from a simple idea: Great medicines start with great ingredients. No factories. No fluff. Just an obsessive focus on finding the right partner for your needs.&rdquo;
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-primary dark:text-white mb-6 flex items-center gap-4">
                                        Why Work With Us?
                                        <div className="h-1 flex-grow bg-gradient-to-r from-secondary to-transparent rounded-full"></div>
                                    </h3>
                                    <ul className="space-y-6">
                                        <li className="group">
                                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-secondary transition-colors">Two Decades of Trust</h4>
                                            <p className="text-gray-600 dark:text-gray-400">A curated global network of <strong>WHO-GMP-certified API suppliers</strong>, rigorously audited for quality.</p>
                                        </li>
                                        <li className="group">
                                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-secondary transition-colors">Beyond Sourcing Solutions</h4>
                                            <p className="text-gray-600 dark:text-gray-400">We handle regulatory hurdles, logistics, and documentation, so you don&apos;t have to.</p>
                                        </li>
                                        <li className="group">
                                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-secondary transition-colors">Speciality Focus</h4>
                                            <p className="text-gray-600 dark:text-gray-400">Rare APIs, oncology intermediates, peptides, and hard-to-find <strong>pharmacopoeia-grade ingredients</strong>.</p>
                                        </li>
                                        <li className="group">
                                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-secondary transition-colors">Transparency First</h4>
                                            <p className="text-gray-600 dark:text-gray-400">Full traceability, COAs, and stability data with every shipment.</p>
                                        </li>
                                    </ul>
                                </div>

                                <p className="text-xl font-bold text-secondary dark:text-blue-400 pt-4">
                                    We are not just suppliers; we&apos;re your allies in making healthcare accessible.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Requested API Features Section */}
                <APIFeatures />

                {/* Call to Action for Catalog */}
                <div className="py-12 bg-blue-50 dark:bg-blue-900/10 text-center">
                    <div className="max-w-4xl mx-auto px-4">
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-primary dark:text-white mb-6">
                            Explore Our Complete Range of API Products
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                            Browse our extensive catalog of high-quality active pharmaceutical ingredients across various therapeutic categories.
                        </p>
                        <Link
                            href="/services/api-products"
                            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-secondary/25"
                        >
                            View Product Catalog
                            <ChevronRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

            </div>

            <Footer />
        </main>
    );
}
