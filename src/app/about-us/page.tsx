'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Target, Eye } from 'lucide-react';
import ValueProposition from '../../components/ValueProposition';
import AboutAchievements from '../../components/AboutAchievements';
import QualityAssurance from '../../components/QualityAssurance';

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
                    <span className="font-medium text-gray-900 dark:text-gray-200">About Us</span>
                </div>
            </li>
        </ol>
    </nav>
);

export default function AboutUsPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white dark:bg-[#0B1121]">
            <Header />

            <div className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                    <Breadcrumb />

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
                        {/* Left Column: Text */}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6">
                                About Transcendence Pharma
                            </h1>
                            <h2 className="text-xl md:text-2xl text-secondary dark:text-blue-400 font-semibold mb-8 leading-relaxed font-display">
                                Empowering Global Healthcare Through Quality Exports
                            </h2>

                            <div className="space-y-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                                <p>
                                    <strong className="text-gray-900 dark:text-white font-bold">At Transcendence Pharma</strong>,
                                    we are committed to enhancing global health by ensuring the availability of high-quality finished dosage forms (FDF) and active pharmaceutical ingredients (APIs). Based in Surat, Gujarat, India, we specialize in exporting a wide range of pharmaceutical products to international markets. Our operations are driven by a deep understanding of the global pharmaceutical landscape, allowing us to bridge the gap between manufacturing excellence and healthcare needs worldwide.
                                </p>
                                <p>
                                    Founded on the principles of quality and reliability, we work exclusively with <strong className="text-gray-900 dark:text-white font-bold">WHO-GMP certified facilities</strong> to ensure that every product we supply meets the highest international standards of safety and efficacy. Our strict regulatory compliance and advanced logistics network enable us to serve clients across <strong className="text-gray-900 dark:text-white font-bold">Asia, Africa, Europe, and the Americas</strong> with speed and precision. Whether it is sourcing rare molecules or delivering essential medicines, Transcendence Pharma is your trusted partner in global healthcare.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Image */}
                        <div className="relative">
                            {/* Decorative Background Blob */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl -z-10"></div>

                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                <Image
                                    src="/images/team.png"
                                    alt="Transcendence Pharma Team and Facility"
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-full"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"></div>
                            </div>

                            {/* Floating Badge (Optional decorative element) */}
                            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-surface-dark p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hidden md:block">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 font-bold">
                                        <Target size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold">Certified</p>
                                        <p className="text-sm font-bold text-primary dark:text-white">WHO-GMP Compliant</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mission & Vision Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 mb-20">
                        {/* Mission */}
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-10 rounded-3xl border border-blue-100 dark:border-blue-800/50 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-800 rounded-2xl flex items-center justify-center text-primary dark:text-blue-300 mb-6">
                                <Target size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">Our Mission</h3>
                            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                To be a reliable partner in the global pharmaceutical supply chain by providing superior products and services that meet the evolving needs of healthcare providers and patients.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-10 rounded-3xl border border-emerald-100 dark:border-emerald-800/50 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-800 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-300 mb-6">
                                <Eye size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-400 mb-4">Our Vision</h3>
                            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                To be the leading exporter of pharmaceutical products and raw ingredients, known for our integrity, quality, and commitment to excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <QualityAssurance />
            <AboutAchievements />
            <ValueProposition />
            <Footer />
        </main>
    );
}
