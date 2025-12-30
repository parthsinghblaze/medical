'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Breadcrumb = () => (
    <nav className="flex mb-12 text-sm text-gray-500" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
                <Link href="/" className="hover:text-secondary dark:hover:text-blue-400 transition-colors">
                    Home
                </Link>
            </li>
            <li>
                <div className="flex items-center text-gray-400">
                    <ChevronRight size={16} className="mx-1 text-gray-400" />
                    <span className="font-medium text-gray-900 dark:text-gray-200">Terms & Conditions</span>
                </div>
            </li>
        </ol>
    </nav>
);

export default function TermsAndConditionsPage() {
    const sections = [
        {
            title: "Acceptance of Terms",
            content: (
                <p>
                    By accessing and using the AksharAvira Pharma website, you acknowledge that you have read, understood, and agreed to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must refrain from using our website and services immediately.
                </p>
            )
        },
        {
            title: "Company Information",
            content: (
                <p>
                    AksharAvira Pharma is a leading pharmaceutical export company specializing in the global distribution of high-quality Finished Dosage Forms (FDF), Active Pharmaceutical Ingredients (API), Reference Listed Drugs (RLD), and Nutraceuticals. Our operations are governed by international pharmaceutical standards and regulatory compliance protocols.
                </p>
            )
        },
        {
            title: "Use of Website",
            content: (
                <ul className="list-disc pl-6 space-y-2">
                    <li>The website must be used solely for lawful purposes and in a manner that does not infringe upon the rights of others.</li>
                    <li>Users are prohibited from attempting to interfere with the website's security or functionality through malicious software or unauthorized access.</li>
                    <li>Content provided on this site is for professional informational purposes and should not be construed as medical advice.</li>
                </ul>
            )
        },
        {
            title: "Products & Services",
            content: (
                <ul className="list-disc pl-6 space-y-2">
                    <li>All pharmaceutical products are subject to availability and regional regulatory approvals.</li>
                    <li>We reserve the right to limit the sale of our products or services to any person, geographic region, or jurisdiction.</li>
                    <li>Descriptions of products and pricing are subject to change without notice at our sole discretion.</li>
                </ul>
            )
        },
        {
            title: "Intellectual Property",
            content: (
                <ul className="list-disc pl-6 space-y-2">
                    <li>All content, including text, graphics, logos, and images, is the property of AksharAvira Pharma and is protected by international copyright laws.</li>
                    <li>No part of this website may be reproduced, duplicated, or exploited for any commercial purpose without express written consent.</li>
                </ul>
            )
        },
        {
            title: "Orders & Payment",
            content: (
                <ul className="list-disc pl-6 space-y-2">
                    <li>By placing an order, you represent that you are authorized to engage in pharmaceutical trade within your jurisdiction.</li>
                    <li>Payment terms are specified per individual contract or invoice and must be strictly adhered to.</li>
                    <li>We reserve the right to refuse any order you place with us for any legitimate business reason.</li>
                </ul>
            )
        },
        {
            title: "Limitation of Liability",
            content: (
                <ul className="list-disc pl-6 space-y-2">
                    <li>AksharAvira Pharma shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or products.</li>
                    <li>We do not guarantee that the website will be error-free or uninterrupted at all times.</li>
                </ul>
            )
        },
        {
            title: "Compliance & Regulations",
            content: (
                <ul className="list-disc pl-6 space-y-2">
                    <li>Users are responsible for ensuring that their use of our services complies with local and international healthcare regulations.</li>
                    <li>Our products are exported in accordance with WHO-GMP standards and other applicable pharmaceutical guidelines.</li>
                </ul>
            )
        },
        {
            title: "Third-Party Links",
            content: (
                <p>
                    This website may contain links to third-party sites for your convenience. AksharAvira Pharma does not endorse or take responsibility for the content, privacy policies, or practices of any third-party websites. Use of such links is at your own risk.
                </p>
            )
        },
        {
            title: "Termination of Access",
            content: (
                <p>
                    We reserve the right to terminate or suspend your access to our website and services without prior notice if we believe you have breached these Terms & Conditions or engaged in any illegal activity.
                </p>
            )
        },
        {
            title: "Governing Law",
            content: (
                <p>
                    These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction of the courts located in Surat, Gujarat.
                </p>
            )
        },
        {
            title: "Contact Us",
            content: (
                <div className="space-y-4">
                    <p>For any questions regarding these Terms & Conditions, please contact our legal and compliance department:</p>
                    <div className="p-6 bg-cyan-50 dark:bg-cyan-900/10 rounded-xl border border-cyan-100 dark:border-cyan-800/50 inline-block">
                        <p className="font-bold text-primary dark:text-blue-300 mb-1">Email:</p>
                        <a href="mailto:info@aksharavirapharma.com" className="text-secondary hover:underline text-lg font-medium">
                            info@aksharavirapharma.com
                        </a>
                    </div>
                </div>
            )
        }
    ];

    return (
        <main className="min-h-screen flex flex-col bg-white dark:bg-[#0B1121]">
            <Header />

            <div className="flex-grow">
                {/* Simplified top spacing for consistency with privacy and partnerships page */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <Breadcrumb />
                </div>

                {/* Header section (Centered title and intro) */}
                <section className="pb-16 lg:pb-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                            <motion.h1
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6"
                            >
                                Terms & Conditions
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                            >
                                Welcome to AksharAvira Pharma. By accessing our website and using our services, you agree to the following terms and conditions. Please read them carefully before proceeding.
                            </motion.p>
                        </div>

                        {/* Content Section */}
                        <div className="max-w-4xl mx-auto space-y-12">
                            {sections.map((section, index) => (
                                <motion.section
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    className="relative pb-12 border-b border-gray-100 dark:border-gray-800 last:border-0"
                                >
                                    <div className="flex items-start gap-4 md:gap-6">
                                        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-50 dark:bg-cyan-900/20 text-secondary dark:text-blue-400 flex items-center justify-center font-bold text-lg border border-cyan-100 dark:border-cyan-800">
                                            {index + 1}
                                        </span>
                                        <div className="flex-grow pt-1">
                                            <h2 className="text-2xl font-display font-bold text-primary dark:text-white mb-4">
                                                {section.title}
                                            </h2>
                                            <div className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                                {section.content}
                                            </div>
                                        </div>
                                    </div>
                                </motion.section>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
