'use client';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import NutraTable from '../../../components/NutraTable';

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
                    <Link href="/services/nutraceuticals" className="hover:text-white transition-colors">
                        Nutraceuticals
                    </Link>
                </div>
            </li>
            <li>
                <div className="flex items-center">
                    <ChevronRight size={16} className="mx-1 text-blue-300/60" />
                    <span className="font-medium text-white">Nutraceutical Products</span>
                </div>
            </li>
        </ol>
    </nav>
);

export default function NutraProductsPage() {
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
                                <span className="font-bold tracking-wide uppercase text-sm">Promising Best Quality Supplements</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white leading-tight">
                                Our <span className="text-secondary dark:text-blue-400">Nutraceutical</span> Products
                            </h1>

                            <div className="space-y-6 text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-3xl">
                                <p>
                                    At <strong className="text-white">Transcendence Pharma</strong> (formerly AksharAvira Pharma), we are committed to providing high-quality <strong>nutraceutical products</strong> that support health, wellness, and preventive care. Our formulations are designed using advanced research, superior raw materials, and WHO-GMP- and FDA-compliant manufacturing standards to meet the needs of global markets.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-white dark:bg-[#0B1121] relative z-10 -mt-10 rounded-t-[3rem]">
                    <NutraTable />
                </div>
            </div>

            <Footer />
        </main>
    );
}
