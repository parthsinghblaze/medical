'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FAQSection from '@/components/FAQSection';
import { ChevronRight } from 'lucide-react';

export default function FAQPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white dark:bg-background-dark">
            <Header />

            <div className="flex-grow">
                {/* Standardized Breadcrumb */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-12">
                    <nav className="flex mb-8 text-sm text-gray-500" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <a href="/" className="hover:text-secondary dark:hover:text-blue-400 transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <ChevronRight size={16} className="mx-1 text-gray-400" />
                                    <span className="font-medium text-gray-900 dark:text-gray-200">FAQs</span>
                                </div>
                            </li>
                        </ol>
                    </nav>

                    <div className="mb-16">
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6">
                            Common Questions
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
                            Find answers to the most common inquiries regarding our pharmaceutical export services, manufacturing capabilities, and product portfolio.
                        </p>
                    </div>
                </div>

                <FAQSection />
            </div>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
