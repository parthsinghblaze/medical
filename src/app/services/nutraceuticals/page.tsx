'use client';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { ChevronRight, Leaf, Sparkles, Apple, Globe } from 'lucide-react';
import NutraContent from '../../../components/NutraContent';
import { motion } from 'framer-motion';

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
                    <span className="font-medium text-white">Nutraceuticals</span>
                </div>
            </li>
        </ol>
    </nav>
);

export default function NutraceuticalsPage() {
    const solutions = [
        {
            title: "Premium Supplements",
            desc: "Multivitamins, herbal extracts, probiotics & more.",
            icon: <Leaf className="text-emerald-500" size={24} />
        },
        {
            title: "Innovative Delivery Systems",
            desc: "Tablets, softgels, gummies, powders.",
            icon: <Sparkles className="text-blue-500" size={24} />
        },
        {
            title: "Clean & Natural",
            desc: "Organic, non-GMO, allergen-free options available.",
            icon: <Apple className="text-orange-500" size={24} />
        },
        {
            title: "Global Reach",
            desc: "Seamless export support to the USA, Europe, LATAM & beyond.",
            icon: <Globe className="text-secondary" size={24} />
        }
    ];

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
                                Nutraceutical <br className="hidden md:block" /> Solutions
                            </h1>
                            <p className="text-xl text-blue-100/80 leading-relaxed mb-4">
                                Crafting high-impact health and wellness supplements with scientific precision and natural purity.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Intro Content Section - Sticky Layout matching FDF/API/RLD */}
                <section className="py-20 bg-white dark:bg-[#0B1121]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            {/* Left: Sticky Image */}
                            <div className="sticky top-24 order-2 lg:order-1">
                                <div className="aspect-[4/5] bg-emerald-50 dark:bg-emerald-900/20 rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white dark:border-gray-800">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="/images/fdf_tablets_capsules.png"
                                        alt="Nutraceutical Solutions"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Right: Detailed Content */}
                            <div className="order-1 lg:order-2 space-y-8">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-primary dark:text-white mb-6">
                                        Nutraceuticals
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                        <strong className="text-primary dark:text-blue-400">Transcendence Pharma</strong> – Your Trusted <strong>Nutraceutical</strong> Partner
                                    </p>
                                    <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                        At <strong className="text-primary dark:text-blue-400">Transcendence Pharma</strong>, we don’t just manufacture <strong>nutraceuticals</strong>—we craft health solutions that people trust. With state-of-the-art facilities, rigorous quality control, and a passion for wellness, we help brands bring high-impact supplements to life.
                                    </p>
                                </div>

                                <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-3xl border-l-4 border-emerald-500">
                                    <p className="text-gray-800 dark:text-gray-200 text-lg italic leading-relaxed font-display">
                                        &ldquo;Quality That Feeds Wellness.&rdquo;
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    <h3 className="text-2xl font-display font-bold text-primary dark:text-white">Our Nutraceutical Solutions:</h3>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Premium Supplements</h4>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            Multivitamins, herbal extracts, probiotics & more.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Innovative Delivery Systems</h4>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            Tablets, softgels, gummies, powders.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Clean & Natural</h4>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            Organic, non-GMO, allergen-free options available.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Global Reach</h4>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            Seamless export support to the USA, Europe, LATAM & beyond.
                                        </p>
                                    </div>
                                </div>

                                <p className="text-xl font-bold text-secondary dark:text-blue-400 pt-4">
                                    We are not just suppliers; we&apos;re your allies in making healthcare accessible.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Standard Component (3 Images + Numbered List) */}
                <NutraContent />
            </div>

            <Footer />
        </main>
    );
}
