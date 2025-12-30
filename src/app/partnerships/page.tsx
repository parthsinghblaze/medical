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
                {/* Simplified top spacing for consistency with about page */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-12">
                    <Breadcrumb />
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
