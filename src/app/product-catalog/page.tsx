'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { ChevronRight, Pill, FlaskConical, Leaf } from 'lucide-react';

const Breadcrumb = () => (
    <nav className="flex mb-8 text-sm text-blue-200/80" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
                <Link href="/" className="hover:text-white transition-colors">
                    Home
                </Link>
            </li>
            <li>
                <div className="flex items-center">
                    <ChevronRight size={16} className="mx-1 text-blue-300/60" />
                    <span className="font-medium text-white">Product Catalogs</span>
                </div>
            </li>
        </ol>
    </nav>
);

export default function ProductCatalogPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white dark:bg-[#0B1121]">
            <Header />

            <div className="flex-grow">
                {/* Hero / Intro Section */}
                <div className="bg-gradient-to-br from-primary via-blue-900 to-primary text-white py-20 lg:py-28 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <Breadcrumb />

                        <div className="max-w-4xl text-center mx-auto">
                            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white leading-tight">
                                Our Product <span className="text-secondary dark:text-blue-400">Catalogs</span>
                            </h1>
                            <p className="text-xl text-blue-100/80 leading-relaxed mb-10 max-w-2xl mx-auto">
                                Explore our comprehensive range of high-quality pharmaceutical and nutraceutical products across distinct categories.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Catalog Selection Section */}
                <div className="bg-white dark:bg-[#0B1121] relative z-10 -mt-20 pt-20 pb-20 rounded-t-[3rem]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            {/* Card 1: FDF */}
                            <Link href="/services/fdf-products" className="group block h-full">
                                <div className="h-full bg-blue-50 dark:bg-blue-900/20 rounded-3xl p-8 border border-blue-100 dark:border-blue-800 hover:shadow-2xl hover:border-secondary/50 dark:hover:border-blue-400/50 transition-all duration-300 transform group-hover:-translate-y-2 flex flex-col">
                                    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 text-secondary dark:text-blue-400 flex items-center justify-center mb-6 shadow-md">
                                        <Pill size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-secondary dark:group-hover:text-blue-400 transition-colors">
                                        Finished Dosage Forms
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                                        A wide array of tablets, capsules, injections, and syrups covering Oncology, Anti-bacterial, and more.
                                    </p>
                                    <div className="flex items-center text-sm font-bold text-secondary dark:text-blue-400 group-hover:gap-2 transition-all">
                                        View FDF Catalog <ChevronRight size={16} />
                                    </div>
                                </div>
                            </Link>

                            {/* Card 2: APIs */}
                            <Link href="/services/api-products" className="group block h-full">
                                <div className="h-full bg-blue-50 dark:bg-blue-900/20 rounded-3xl p-8 border border-blue-100 dark:border-blue-800 hover:shadow-2xl hover:border-secondary/50 dark:hover:border-blue-400/50 transition-all duration-300 transform group-hover:-translate-y-2 flex flex-col">
                                    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 text-teal-500 flex items-center justify-center mb-6 shadow-md">
                                        <FlaskConical size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-teal-500 transition-colors">
                                        Active Pharma Ingredients
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                                        High-purity APIs sourced from WHO-GMP manufacturers, including Oncology, Peptides, and Fermentation products.
                                    </p>
                                    <div className="flex items-center text-sm font-bold text-teal-600 dark:text-teal-400 group-hover:gap-2 transition-all">
                                        View API Catalog <ChevronRight size={16} />
                                    </div>
                                </div>
                            </Link>

                            {/* Card 3: Nutraceuticals */}
                            <Link href="/services/nutraceuticals-products" className="group block h-full">
                                <div className="h-full bg-blue-50 dark:bg-blue-900/20 rounded-3xl p-8 border border-blue-100 dark:border-blue-800 hover:shadow-2xl hover:border-secondary/50 dark:hover:border-blue-400/50 transition-all duration-300 transform group-hover:-translate-y-2 flex flex-col">
                                    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 text-emerald-500 flex items-center justify-center mb-6 shadow-md">
                                        <Leaf size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-500 transition-colors">
                                        Nutraceuticals
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                                        Premium health supplements including Vitamins, Minerals, Probiotics, and Herbal Extracts for global wellness.
                                    </p>
                                    <div className="flex items-center text-sm font-bold text-emerald-600 dark:text-emerald-400 group-hover:gap-2 transition-all">
                                        View Nutra Catalog <ChevronRight size={16} />
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
