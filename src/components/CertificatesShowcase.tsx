'use client';
import { motion } from 'framer-motion';
import { FileText, Search, ZoomIn } from 'lucide-react';

export default function CertificatesShowcase() {
    // Placeholder data for the 3 certificates
    const certificates = [
        { id: 1, title: "WHO-GMP Certification", description: "World Health Organization - Good Manufacturing Practice" },
        { id: 2, title: "ISO 9001:2015", description: "Quality Management System Accreditation" },
        { id: 3, title: "Export Certificate", description: "Pharmaceutical Export Promotion Council License" }
    ];

    return (
        <section className="py-20 lg:py-32 bg-white dark:bg-surface-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <div className="text-center mb-16 lg:mb-24">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white pb-4 relative inline-block">
                        Certifications
                        <div className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-secondary rounded-full"></div>
                    </h2>
                </div>

                {/* CERTIFICATE CARDS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
                    {certificates.map((cert) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: cert.id * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative cursor-pointer"
                            onClick={() => console.log(`Viewing certificate ${cert.id}...`)}
                        >
                            {/* Certificate Frame/Document Appearance */}
                            <div className="aspect-[1/1.41] w-full bg-gray-50 dark:bg-slate-800 rounded-lg border-2 border-gray-100 dark:border-gray-700 shadow-lg group-hover:shadow-2xl group-hover:scale-[1.02] transition-all duration-500 overflow-hidden relative border-double p-6 md:p-8">

                                {/* Inner Border Design (Certificate look) */}
                                <div className="h-full w-full border-4 border-gray-200 dark:border-gray-600 rounded flex flex-col items-center justify-center p-4 relative">

                                    {/* Corners Decorative Icons */}
                                    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gray-300 dark:border-gray-500"></div>
                                    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gray-300 dark:border-gray-500"></div>
                                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gray-300 dark:border-gray-500"></div>
                                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gray-300 dark:border-gray-500"></div>

                                    {/* Placeholder Content */}
                                    <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-400 dark:text-blue-300 mb-6 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors">
                                        <FileText size={40} strokeWidth={1.5} />
                                    </div>

                                    <div className="text-center space-y-4">
                                        <div className="h-2 w-24 bg-gray-200 dark:bg-gray-700 mx-auto rounded-full"></div>
                                        <h3 className="text-xl font-bold font-display text-gray-800 dark:text-white leading-tight">
                                            {cert.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                            {cert.description}
                                        </p>
                                        <div className="h-1 w-12 bg-secondary/30 mx-auto rounded-full"></div>
                                    </div>

                                    {/* Hover Action Overlay */}
                                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <div className="bg-white dark:bg-surface-dark p-3 rounded-full shadow-xl">
                                            <ZoomIn size={24} className="text-secondary" />
                                        </div>
                                    </div>
                                </div>

                                {/* Placeholder watermark for professional feel */}
                                <div className="absolute inset-x-0 bottom-10 flex justify-center opacity-[0.05] pointer-events-none">
                                    <h4 className="text-5xl font-bold uppercase tracking-[0.2em] -rotate-12 select-none group-hover:rotate-0 transition-transform duration-1000">
                                        Verified
                                    </h4>
                                </div>
                            </div>

                            {/* Label outside for accessibility/clarity */}
                            <div className="mt-6 text-center">
                                <span className="text-xs font-bold uppercase tracking-widest text-secondary dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                    Click to View Details
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
