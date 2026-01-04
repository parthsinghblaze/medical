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

                {/* Specific FDF Content Section - Sticky Layout matching API/RLD/Nutra */}
                <section className="py-20 bg-white dark:bg-[#0B1121]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            {/* Left: Sticky Image */}
                            <div className="sticky top-24 order-2 lg:order-1">
                                <div className="aspect-[4/5] bg-blue-50 dark:bg-blue-900/20 rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white dark:border-gray-800">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="/images/pharmaceutical_professionals.png"
                                        alt="Finished Dosage Forms Excellence"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Right: Detailed Content */}
                            <div className="order-1 lg:order-2 space-y-8">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-primary dark:text-white mb-6">
                                        Finished Dosage Forms (FDF)
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                        At <strong className="text-primary dark:text-blue-400">Transcendence Pharma</strong>, we don’t just manufacture medicines, we deliver trust in every tablet, capsule, and vial. With years of expertise, state-of-the-art facilities, and a robust global sourcing network, we specialise in high-quality <strong>Finished Dosage Forms (FDF)</strong> tailored to your needs.
                                    </p>
                                </div>

                                <div className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-3xl border-l-4 border-secondary">
                                    <p className="text-gray-800 dark:text-gray-200 text-lg font-bold leading-relaxed font-display">
                                        With more than 20 years of industry experience, we’ve established a reputation for trust, dependability, and impact, and we’re committed to going above and beyond each day.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3 group">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0"></div>
                                            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                                <strong className="text-primary dark:text-white group-hover:text-secondary transition-colors">End-to-End FDF Solutions—</strong>From formulation to packaging, we handle it all.
                                            </p>
                                        </li>
                                        <li className="flex items-start gap-3 group">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0"></div>
                                            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                                <strong className="text-primary dark:text-white group-hover:text-secondary transition-colors">Specialty Pharmaceuticals—</strong>Complex generics, niche therapies, and high-demand formulations.
                                            </p>
                                        </li>
                                        <li className="flex items-start gap-3 group">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0"></div>
                                            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                                <strong className="text-primary dark:text-white group-hover:text-secondary transition-colors">Strict Compliance—WHO-GMP aligned</strong> manufacturing standards.
                                            </p>
                                        </li>
                                        <li className="flex items-start gap-3 group">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0"></div>
                                            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                                <strong className="text-primary dark:text-white group-hover:text-secondary transition-colors">Agile & Scalable—</strong>Large-scale commercial supply.
                                            </p>
                                        </li>
                                        <li className="flex items-start gap-3 group">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0"></div>
                                            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                                <strong className="text-primary dark:text-white group-hover:text-secondary transition-colors">Global Sourcing Power—</strong>Strong partnerships for <strong>FDF</strong>.
                                            </p>
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

                {/* The Requested List of Options Section */}
                <FDFOptions />

            </div>

            <Footer />
        </main>
    );
}
