'use client';
import Image from 'next/image';
import { Check, CheckCircle2 } from 'lucide-react';

export default function QualityAssurance() {
    return (
        <section className="py-20 lg:py-28 bg-white dark:bg-surface-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* TOP SECTION */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
                    <div className="max-w-2xl">
                        <span className="block text-secondary dark:text-blue-400 font-bold uppercase tracking-wider text-sm mb-3">
                            Learn How We Ensure Quality & Compliance
                        </span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary dark:text-white leading-tight">
                            Transcendence Pharma provides global-standard pharmaceutical solutions.
                        </h2>
                    </div>
                    <div className="max-w-lg">
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-left lg:text-right">
                            At Transcendence, we prioritize international compliance, stringent safety protocols, and seamless global logistics. Our facilities and processes are designed to meet WHO-GMP and FDA export requirements, ensuring our clients receive only the highest-quality pharmaceutical products.
                        </p>
                    </div>
                </div>

                {/* TWO-COLUMN LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* LEFT COLUMN: Protocol Card */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 lg:p-12 text-white shadow-xl relative overflow-hidden">
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <h3 className="text-2xl lg:text-3xl font-bold mb-8 relative z-10">
                            Transcendence Quality Assurance Protocol
                        </h3>

                        {/* Checklist */}
                        <div className="space-y-6 mb-12 relative z-10">
                            {[
                                "Strict adherence to global safety and export compliance",
                                "Full traceability and data privacy for all clients",
                                "Continuous quality audits and product validation",
                                "Documentation & regulatory clearance"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-400/30 flex items-center justify-center mt-1">
                                        <Check size={14} strokeWidth={3} className="text-white" />
                                    </div>
                                    <p className="text-lg font-medium text-blue-50 leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>

                        {/* Progress Bars */}
                        <div className="space-y-8 relative z-10">
                            {/* Bar 1 */}
                            <div>
                                <div className="flex justify-between items-end mb-2">
                                    <span className="font-bold text-white tracking-wide">Product Quality & Safety</span>
                                    <span className="bg-white text-blue-700 px-2 py-1 rounded text-xs font-bold">100%</span>
                                </div>
                                <div className="w-full bg-blue-900/40 rounded-full h-2">
                                    <div className="bg-white h-2 rounded-full w-[100%] shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                                </div>
                            </div>

                            {/* Bar 2 */}
                            <div>
                                <div className="flex justify-between items-end mb-2">
                                    <span className="font-bold text-white tracking-wide">Customer Satisfaction Rate</span>
                                    <span className="bg-white text-blue-700 px-2 py-1 rounded text-xs font-bold">96%</span>
                                </div>
                                <div className="w-full bg-blue-900/40 rounded-full h-2">
                                    <div className="bg-white h-2 rounded-full w-[96%] shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Image */}
                    <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl group">
                        <Image
                            src="/images/trust_doctors1.png"
                            alt="Pharmaceutical Laboratory Scientists"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                        {/* Optional Label on Image */}
                        <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-surface-dark/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                            <p className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-green-500" />
                                Advanced Lab Standard
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
