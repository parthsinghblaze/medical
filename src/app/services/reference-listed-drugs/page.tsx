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
                <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <Breadcrumb />

                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
                                Reference Listed <br /> Drugs <span className="text-secondary dark:text-blue-400">(RLDs)</span>
                            </h1>
                            <p className="text-xl text-blue-100/80 leading-relaxed mb-4">
                                Reliable sourcing of comparator drugs and reference products for pharmaceutical research and development globally.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Intro Content Section - Standardized Layout */}
                <section className="py-20 bg-white dark:bg-[#0B1121]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Left: Standard Image Placeholder */}
                            <div className="relative">
                                <div className="aspect-square bg-blue-50 dark:bg-blue-900/20 rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white dark:border-gray-800">
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600 italic">
                                        Comparator Sourcing Image
                                    </div>
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-2xl blur-3xl -z-10"></div>
                            </div>

                            {/* Right: Content & 3 Icons */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary dark:text-white mb-6">
                                    Global Experts in Comparator Sourcing
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                                    Transcendence Pharma is a premier facilitator for sourcing Reference Listed Drugs (RLDs) and comparator samples across the globe. We understand that bioequivalence studies and generic development depend on the timely availability of the correct RLD batch.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 mb-10">
                                    {[
                                        {
                                            title: "Global Reach, Local Expertise",
                                            desc: "Source FDA/EMA/WHO-listed RLDs from 30+ countries seamlessly.",
                                            icon: <Globe size={20} className="text-blue-500" />,
                                            bg: "bg-blue-50 dark:bg-blue-900/20"
                                        },
                                        {
                                            title: "End-to-End Compliance",
                                            desc: "Full documentation including CoA, batch records, and licensing support.",
                                            icon: <ShieldCheck size={20} className="text-emerald-500" />,
                                            bg: "bg-emerald-50 dark:bg-emerald-900/20"
                                        },
                                        {
                                            title: "Strategic Support",
                                            desc: "Expert guidance for ANDA/bioequivalence and complex comparator selection.",
                                            icon: <Zap size={20} className="text-amber-500" />,
                                            bg: "bg-amber-50 dark:bg-amber-900/20"
                                        }
                                    ].map((sol, idx) => (
                                        <div key={idx} className="flex gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-700/50 transition-all duration-300 border border-transparent hover:border-gray-100 dark:hover:border-gray-700 shadow-sm hover:shadow-md">
                                            <div className={`mt-1 w-12 h-12 rounded-xl ${sol.bg} flex items-center justify-center shadow-inner flex-shrink-0`}>
                                                {sol.icon}
                                            </div>
                                            <div className="pt-0.5">
                                                <h4 className="font-bold text-gray-800 dark:text-white text-base mb-1">{sol.title}</h4>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{sol.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Featured Quote */}
                                <div className="border-l-4 border-secondary pl-6 py-2">
                                    <span className="text-xl font-display font-semibold text-primary dark:text-blue-300 italic">
                                        "Avoid delays: Partner with an RLD supplier that knows global compliance."
                                    </span>
                                </div>
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
