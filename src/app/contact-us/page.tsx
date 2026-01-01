'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactSection from '@/components/ContactSection';
import ContactFormSection from '@/components/ContactFormSection';

export default function ContactUsPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white dark:bg-background-dark">
            <Header />

            <div className="flex-grow">
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
                                    <svg className="w-4 h-4 mx-1 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                    <span className="font-medium text-gray-900 dark:text-gray-200">Contact Us</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>

                <ContactSection />
                <ContactFormSection />
            </div>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
