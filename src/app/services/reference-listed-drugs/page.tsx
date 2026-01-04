'use client';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { ChevronRight, Globe, ShieldCheck, Zap } from 'lucide-react';
import RLDContent from '../../../components/RLDContent';

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
                    <span className="font-medium text-white">Reference Listed Drugs</span>
                </div>
            </li>
        </ol>
    </nav>
);

export default function RLDPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white dark:bg-[#0B1121]">
            <Header />

            <div className="flex-grow">
                {/* Hero Section */}
                <div className="bg-gradient-to-br from-primary via-blue-900 to-primary text-white py-20 lg:py-28 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <Breadcrumb />

                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white text-balance">
                                Reference Listed <br className="hidden md:block" /> Drugs <span className="text-secondary dark:text-blue-400">(RLDs)</span>
                            </h1>
                            <p className="text-xl text-blue-100/80 leading-relaxed mb-4">
                                Reliable sourcing of comparator drugs and reference products for pharmaceutical research and development globally.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Intro Content Section - Sticky Layout matching FDF/API */}
                <section className="py-20 bg-white dark:bg-[#0B1121]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            {/* Left: Sticky Image */}
                            <div className="sticky top-24 order-2 lg:order-1">
                                <div className="aspect-[4/5] bg-blue-50 dark:bg-blue-900/20 rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white dark:border-gray-800">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="/images/microscope.png"
                                        alt="Reference Listed Drugs Sourcing"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Right: Detailed Content */}
                            <div className="order-1 lg:order-2 space-y-8">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-primary dark:text-white mb-6">
                                        Reference Listed Drugs (RLDs)
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                        At <strong className="text-primary dark:text-blue-400">Transcendence Pharma</strong>, we understand the critical role <strong>Reference Listed Drugs (RLDs)</strong> play in your research—whether for bioequivalence studies, ANDA (Abbreviated New Drug Application) submissions, or formulation reverse engineering. That’s why we’ve built a global sourcing network to deliver authentic, traceable RLDs with unmatched reliability.
                                    </p>
                                </div>

                                <div className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-3xl border-l-4 border-secondary">
                                    <p className="text-gray-800 dark:text-gray-200 text-lg italic leading-relaxed font-display">
                                        &ldquo;Avoid delays: Partner with an RLD supplier that knows global compliance.&rdquo;
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Global Reach, Local Expertise</h4>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                            Source <strong>FDA/EMA/WHO-listed RLDs</strong> from 30+ countries, even hard-to-find products.
                                        </p>
                                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                            <li className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0"></div>
                                                <span>Navigate regional regulations seamlessly (e.g., EU-GMP, US Orange Book standards).</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">End-to-End Compliance</h4>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                            Full documentation: Certificates of Analysis (CoA), batch records, and import/export licences.
                                        </p>
                                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                            <li className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0"></div>
                                                <span>Strict cold-chain logistics for <strong>temperature-sensitive RLDs</strong>.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Strategic Support</h4>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                            Confused about RLD selection for complex generics? Our team advises on optimal comparator drugs.
                                        </p>
                                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                            <li className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0"></div>
                                                <span>Custom sourcing for <strong>obscure markets</strong> (e.g., Japan’s “Orange Guide” drugs).</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <p className="text-xl font-bold text-secondary dark:text-blue-400 pt-4">
                                    We are not just suppliers; we&apos;re your allies in making healthcare accessible.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content Component (Numbered Options Grid) */}
                <RLDContent />

            </div>

            <Footer />
        </main>
    );
}
