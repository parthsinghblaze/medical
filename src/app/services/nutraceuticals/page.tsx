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
                <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950 text-white py-20 lg:py-28 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <Breadcrumb />

                        <div className="max-w-2xl">
                            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
                                Nutraceutical <br /> Solutions
                            </h1>
                            <p className="text-xl text-blue-100/80 leading-relaxed mb-4">
                                Crafting high-impact health and wellness supplements with scientific precision and natural purity.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Intro Content Section - Same as Previous 3 Layout */}
                <section className="py-20 bg-white dark:bg-[#0B1121]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Left: Standard Image Placeholder */}
                            <div className="relative">
                                <div className="aspect-square bg-emerald-50 dark:bg-emerald-900/20 rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white dark:border-gray-800">
                                    <div className="absolute inset-0 flex items-center justify-center text-emerald-700/40 dark:text-emerald-500/40 italic">
                                        Wellness & Health Image
                                    </div>
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl blur-3xl -z-10"></div>
                            </div>

                            {/* Right: Content & 4 Icons */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary dark:text-white mb-6">
                                    Transcendence Pharma – Your Trusted Nutraceutical Partner
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                                    At Transcendence Pharma, we don't just manufacture nutraceuticals—we craft health solutions that people trust. With state-of-the-art facilities, rigorous quality control, and a passion for wellness, we help brands bring high-impact supplements to life.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                    {solutions.map((sol, idx) => (
                                        <div key={idx} className="flex flex-col gap-2 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 transition-colors duration-300">
                                            <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-900 flex items-center justify-center shadow-sm">
                                                {sol.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-800 dark:text-white text-sm">{sol.title}</h4>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">{sol.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Simplified Tagline */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="border-l-4 border-emerald-500 pl-6 py-2"
                                >
                                    <span className="text-2xl font-display font-semibold text-emerald-600 dark:text-emerald-400 italic">
                                        "Quality That Feeds Wellness."
                                    </span>
                                </motion.div>
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
