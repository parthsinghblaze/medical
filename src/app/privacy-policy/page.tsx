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
                    <span className="font-medium text-gray-900 dark:text-gray-200">Privacy Policy</span>
                </div>
            </li>
        </ol>
    </nav>
);

export default function PrivacyPolicyPage() {
    const sections = [
        {
            title: "Information We Collect",
            content: (
                <div className="space-y-4">
                    <p>We may collect personal information that you provide directly to us through our website, communications, and business interactions. This includes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><span className="font-semibold">Contact Information:</span> Name, email address, phone number, and mailing address.</li>
                        <li><span className="font-semibold">Business Information:</span> Company name, job title, and professional credentials.</li>
                        <li><span className="font-semibold">Technical Data:</span> IP address, browser type, and usage patterns collected via cookies.</li>
                    </ul>
                </div>
            )
        },
        {
            title: "How We Use Your Information",
            content: (
                <ul className="list-disc pl-6 space-y-2">
                    <li>To provide and improve our products and pharmaceutical services.</li>
                    <li>To communicate with you regarding inquiries, orders, and professional requests.</li>
                    <li>To comply with regulatory and legal requirements in the healthcare industry.</li>
                    <li>To ensure the security and integrity of our digital platforms.</li>
                    <li>To provide professional updates and marketing communications where permitted.</li>
                </ul>
            )
        },
        {
            title: "Data Protection & Security",
            content: (
                <p>
                    Transcendence Pharma employs advanced technical and organizational security measures to protect your data against unauthorized access, accidental loss, or destruction. We use encryption, firewall protection, and restricted access protocols to ensure your sensitive information remains secure.
                </p>
            )
        },
        {
            title: "Sharing of Information",
            content: (
                <div className="space-y-4">
                    <p>We do not sell your personal data. We may share information with trusted parties under the following circumstances:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><span className="font-semibold">Service Providers:</span> Partners who assist in our business operations under strict confidentiality agreements.</li>
                        <li><span className="font-semibold">Regulatory Authorities:</span> Where required by WHO, FDA, EMA, or other legal bodies.</li>
                        <li><span className="font-semibold">Business Transfers:</span> In connection with a merger, sale, or acquisition of company assets.</li>
                    </ul>
                </div>
            )
        },
        {
            title: "Cookies & Tracking",
            content: (
                <p>
                    Our website uses cookies to enhance user experience, analyze site traffic, and personalize content. You can manage your cookie preferences through your browser settings. Please note that disabling cookies may affect the functionality of certain website features.
                </p>
            )
        },
        {
            title: "International Data Transfer",
            content: (
                <p>
                    As a global pharmaceutical partner, your information may be transferred to or stored on servers located outside your home country. We ensure that such transfers comply with international data protection standards and that adequate safeguards are in place.
                </p>
            )
        },
        {
            title: "Your Rights",
            content: (
                <div className="space-y-4">
                    <p>Depending on your location, you have specific rights regarding your personal data:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>The right to access and receive a copy of your personal information.</li>
                        <li>The right to request correction of inaccurate or incomplete data.</li>
                        <li>The right to request erasure of your data under certain conditions.</li>
                    </ul>
                </div>
            )
        },
        {
            title: "Third-Party Links",
            content: (
                <p>
                    Our website may contain links to external sites that are not operated by Transcendence Pharma. We are not responsible for the privacy practices or content of these third-party websites and encourage you to review their policies.
                </p>
            )
        },
        {
            title: "Updates to Privacy Policy",
            content: (
                <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. We will notify users of any significant changes by posting the new policy on this page with an updated effective date.
                </p>
            )
        },
        {
            title: "Contact Us",
            content: (
                <div className="space-y-4">
                    <p>If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact our Data Protection Officer at:</p>
                    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/50 inline-block">
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
                {/* Simplified top spacing for consistency with partnerships page */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <Breadcrumb />
                </div>

                {/* Header section (Centered title and intro like Partnerships) */}
                <section className="pb-16 lg:pb-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                            <motion.h1
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6"
                            >
                                Privacy Policy
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                            >
                                At Transcendence Pharma, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the data of our website visitors, business partners, and customers.
                            </motion.p>
                        </div>

                        {/* Content Section (Formatted like Partnerships descriptions) */}
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
                                        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 text-secondary dark:text-blue-400 flex items-center justify-center font-bold text-lg border border-blue-100 dark:border-blue-800">
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
