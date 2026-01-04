'use client';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import OncologyTable from '../../../components/OncologyTable';

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
                    <Link href="/services/finished-dosage-forms" className="hover:text-white transition-colors">
                        Finished Dosage Forms
                    </Link>
                </div>
            </li>
            <li>
                <div className="flex items-center">
                    <ChevronRight size={16} className="mx-1 text-blue-300/60" />
                    <span className="font-medium text-white">FDF Products</span>
                </div>
            </li>
        </ol>
    </nav>
);

export default function FDFProductsPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white dark:bg-[#0B1121]">
            <Header />

            <div className="flex-grow">
                {/* Hero / Intro Section based on USER HTML content but adapted to theme */}
                <div className="bg-gradient-to-br from-primary via-blue-900 to-primary text-white py-20 lg:py-28 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <Breadcrumb />

                        <div className="max-w-4xl">
                            <div className="inline-block px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-secondary mb-6 backdrop-blur-sm animate-fade-in-up">
                                <span className="font-bold tracking-wide uppercase text-sm">Promising Best Quality Formulations</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white leading-tight">
                                Our <span className="text-secondary dark:text-blue-400">Finished Dosage</span> <span className="block">Formulations (FDF)</span>
                            </h1>

                            <div className="space-y-6 text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-3xl">
                                <p>
                                    At <strong className="text-white">Transcendence Pharma</strong>, we specialize in the manufacturing and supply of <strong className="text-white">Finished Dosage Formulations (FDF)</strong> that meet global pharmaceutical standards. Our wide product portfolio includes <strong className="text-white">tablets, capsules, syrups, and injections</strong> across various therapeutic categories. Each formulation is developed with a focus on <strong className="text-white">quality, efficacy, and patient safety</strong>, ensuring compliance with international regulatory requirements.
                                </p>
                                <p>
                                    Whether you are looking for <strong className="text-white">generic medicines, contract manufacturing, or customized pharmaceutical solutions</strong>, our FDF range delivers reliability and value for healthcare providers worldwide.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Products Table Section */}
                <div className="bg-white dark:bg-[#0B1121] relative z-10 -mt-10 rounded-t-[3rem]">
                    <OncologyTable />
                </div>
            </div>

            <Footer />
        </main>
    );
}
