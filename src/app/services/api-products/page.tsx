'use client';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import APITables from '../../../components/APITables';

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
                    <span className="hover:text-white transition-colors">Services</span>
                </div>
            </li>
            <li>
                <div className="flex items-center text-blue-300/60">
                    <ChevronRight size={16} className="mx-1" />
                    <Link href="/services/active-pharmaceutical-ingredients" className="hover:text-white transition-colors">
                        APIs
                    </Link>
                </div>
            </li>
            <li>
                <div className="flex items-center">
                    <ChevronRight size={16} className="mx-1 text-blue-300/60" />
                    <span className="font-medium text-white">API Products</span>
                </div>
            </li>
        </ol>
    </nav>
);

export default function APIProductsPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white dark:bg-[#0B1121]">
            <Header />

            <div className="flex-grow">
                {/* Hero / Intro Section */}
                <div className="bg-gradient-to-br from-primary via-blue-900 to-primary text-white py-20 lg:py-28 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <Breadcrumb />

                        <div className="max-w-4xl">
                            <div className="inline-block px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-secondary mb-6 backdrop-blur-sm animate-fade-in-up">
                                <span className="font-bold tracking-wide uppercase text-sm">Promising Best Quality Services</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white leading-tight">
                                Active <span className="text-secondary dark:text-blue-400">Pharmaceutical</span> <br />
                                Ingredients <span className="text-secondary dark:text-blue-400">(APIs)</span>
                            </h1>

                            <h2 className="text-2xl font-bold mb-4 text-white">Akshar Avira Pharma</h2>

                            <div className="space-y-6 text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-3xl">
                                <p>
                                    At <strong className="text-white">Transcendence Pharma</strong> (formerly Akshar Avira Pharma), we specialize in the global supply and export of <strong className="text-white">Active Pharmaceutical Ingredients (APIs)</strong>. Our APIs are sourced from <strong className="text-white">WHO-GMP certified manufacturers</strong> in India and comply with international regulatory standards. We provide bulk APIs for formulations, research, and production across <strong className="text-white">Asia, Africa, Europe, and the Americas</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* API Tables Section */}
                <div className="bg-white dark:bg-[#0B1121] relative z-10 -mt-10 rounded-t-[3rem]">
                    <APITables />
                </div>
            </div>

            <Footer />
        </main>
    );
}
