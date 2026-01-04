'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import PartnershipsSection from '../../components/PartnershipsSection';
import ManufacturingSection from '../../components/ManufacturingSection';
import CertificatesShowcase from '../../components/CertificatesShowcase';

const Breadcrumb = () => (
    <nav className="flex mb-8 text-sm text-gray-500" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
                <Link href="/" className="hover:text-secondary dark:hover:text-blue-400 transition-colors">
                    Home
                </Link>
            </li>
            <li>
                <div className="flex items-center">
                    <ChevronRight size={16} className="mx-1 text-gray-400" />
                    <span className="font-medium text-gray-900 dark:text-gray-200">Our Partnerships</span>
                </div>
            </li>
        </ol>
    </nav>
);

export default function PartnershipsPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white dark:bg-[#0B1121]">
            <Header />

            <div className="flex-grow">
                {/* Hero Section for Partnerships */}
                <div className="bg-gradient-to-br from-primary via-blue-900 to-primary text-white py-20 lg:py-28 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <nav className="flex mb-8 text-sm text-blue-200/80" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center">
                                    <Link href="/" className="hover:text-white transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <ChevronRight size={16} className="mx-1 text-blue-300/60" />
                                        <span className="font-medium text-white">Our Partnerships</span>
                                    </div>
                                </li>
                            </ol>
                        </nav>

                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white text-balance">
                                Global Strategic <br className="hidden md:block" /> Partnerships
                            </h1>
                            <p className="text-xl text-blue-100/80 leading-relaxed">
                                Expanding horizons through collaboration. We bridge the gap between innovation and global accessibility.
                            </p>
                        </div>
                    </div>
                </div>

                <PartnershipsSection />

                <ManufacturingSection />

                <CertificatesShowcase />

                {/* Visual separator/CTA section could go here if needed, but sticking to requested content */}
            </div>

            <Footer />
        </main>
    );
}
