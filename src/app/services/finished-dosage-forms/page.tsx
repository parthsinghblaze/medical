'use client';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { ChevronRight, Pill, FlaskConical, ShieldCheck, Microscope } from 'lucide-react';
import FDFOptions from '../../../components/FDFOptions';

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
                    <span className="font-medium text-white">Finished Dosage Forms</span>
                </div>
            </li>
        </ol>
    </nav>
);

export default function FinishedDosageFormsPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white dark:bg-[#0B1121]">
            <Header />

            <div className="flex-grow">
                {/* Hero Section for FDF */}
                <div className="bg-gradient-to-br from-primary via-blue-900 to-primary text-white py-20 lg:py-28 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <Breadcrumb />

                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
                                Finished Dosage Forms <span className="text-secondary dark:text-blue-400">(FDF)</span>
                            </h1>
                            <p className="text-xl text-blue-100/80 leading-relaxed mb-10">
                                High-quality, WHO-GMP certified finished formulations ready for global markets. We ensure therapeutic efficacy and regulatory compliance across all dosage forms.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Specific FDF Content */}
                <section className="py-20 bg-white dark:bg-[#0B1121]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary dark:text-white mb-6">
                                    Quality-Driven Formulation Excellence
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                                    Our Finished Dosage Forms are manufactured in state-of-the-art WHO-GMP certified facilities. We specialize in providing a comprehensive range of medications across multiple therapeutic categories including Anti-Infective, Cardiovascular, Gastrointestinal, and more.
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-secondary">
                                            <Pill size={20} />
                                        </div>
                                        <span className="font-bold text-gray-800 dark:text-white">Tablets & Capsules</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-secondary">
                                            <FlaskConical size={20} />
                                        </div>
                                        <span className="font-bold text-gray-800 dark:text-white">Liquid Orals</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-secondary">
                                            <ShieldCheck size={20} />
                                        </div>
                                        <span className="font-bold text-gray-800 dark:text-white">Injections</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-secondary">
                                            <Microscope size={20} />
                                        </div>
                                        <span className="font-bold text-gray-800 dark:text-white">Topicals</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square bg-blue-100 dark:bg-blue-900/20 rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white dark:border-gray-800">
                                    {/* Placeholder for quality image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600 italic">
                                        Quality Assurance Image
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Requested List of Options Section */}
                <FDFOptions />

            </div>

            <Footer />
        </main>
    );
}
