'use client';

import { useState } from 'react';
import { ChevronDown, Plus, Minus, Phone, Mail, Clock } from 'lucide-react';

const serviceFaqs = [
    {
        question: "What services does Transcendence Pharma provide?",
        answer: "We specialize in pharmaceutical exports, contract manufacturing, private labeling, and regulatory support for global healthcare partners."
    },
    {
        question: "Do you offer contract manufacturing for international clients?",
        answer: "Yes, we provide contract manufacturing services under both our own and partner brand names, ensuring compliance with international standards."
    },
    {
        question: "How do you ensure quality in pharma exports?",
        answer: "All products are manufactured in WHO-GMP certified facilities, with strict quality control and international documentation compliance."
    },
    {
        question: "Do you provide support for regulatory approvals?",
        answer: "Yes, our team assists with regulatory registration, dossier preparation, and compliance for smooth market entry."
    },
    {
        question: "Can you customize formulations based on market needs?",
        answer: "Absolutely, we offer customized formulations and dosage forms to meet specific partner and market requirements."
    },
    {
        question: "Which markets do you serve?",
        answer: "We export to regulated, semi-regulated, and unregulated markets across Asia, Africa, the Middle East, and emerging economies."
    }
];

const productFaqs = [
    {
        question: "What types of pharmaceutical products do you manufacture?",
        answer: "We manufacture Active Pharmaceutical Ingredients (APIs), Finished Dosage Forms (tablets, capsules, syrups, injectables), and Nutraceuticals."
    },
    {
        question: "Do you offer generic medicines?",
        answer: "Yes, we provide a wide portfolio of generic medicines at affordable prices, meeting international quality standards."
    },
    {
        question: "What therapeutic segments do your products cover?",
        answer: "Our products cover multiple segments including cardiology, anti-infectives, gastroenterology, neurology, pain management, and nutrition."
    },
    {
        question: "Do you supply APIs for formulation companies?",
        answer: "Yes, we supply high-quality APIs to formulation companies for their own drug manufacturing processes."
    },
    {
        question: "Are your products WHO-GMP or FDA approved?",
        answer: "Our facilities follow WHO-GMP and international regulatory guidelines; selected products are approved in stringent regulatory markets."
    },
    {
        question: "Do you provide private label nutraceuticals?",
        answer: "Yes, we offer private labeling services for nutraceuticals, enabling partners to sell under their own brand names."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<string | null>("services-0");

    const toggleFaq = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <section className="py-20 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Main FAQ Content */}
                    <div className="lg:w-2/3">

                        {/* Services FAQs */}
                        <div className="mb-20">
                            <div className="mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                    FAQs for Services <span className="text-lg md:text-xl font-medium text-[#24B7D3] ml-1">(Exports & Manufacturing)</span>
                                </h3>
                                <GradientUnderline />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {serviceFaqs.map((faq, idx) => (
                                    <FAQItem
                                        key={`services-${idx}`}
                                        id={`services-${idx}`}
                                        question={faq.question}
                                        answer={faq.answer}
                                        isOpen={openIndex === `services-${idx}`}
                                        toggle={() => toggleFaq(`services-${idx}`)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Product FAQs */}
                        <div>
                            <div className="mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                    FAQs for Products <span className="text-lg md:text-xl font-medium text-[#24B7D3] ml-1">(APIs, Finished Dosage, Nutraceuticals)</span>
                                </h3>
                                <GradientUnderline />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {productFaqs.map((faq, idx) => (
                                    <FAQItem
                                        key={`products-${idx}`}
                                        id={`products-${idx}`}
                                        question={faq.question}
                                        answer={faq.answer}
                                        isOpen={openIndex === `products-${idx}`}
                                        toggle={() => toggleFaq(`products-${idx}`)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Contact Box */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-32">
                            <div className="relative group overflow-hidden bg-primary rounded-[2.5rem] p-8 text-white shadow-2xl shadow-primary/20">
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-white/20 transition-all duration-500"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/20 rounded-full -ml-12 -mb-12 blur-xl"></div>

                                <div className="relative z-10">
                                    <div className="mb-8">
                                        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20 animate-pulse">
                                            <Phone className="w-8 h-8 text-secondary" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                                        <p className="text-blue-100/80 leading-relaxed mb-8">
                                            Our dedicated support team is ready to assist you with any inquiries about our pharmaceutical products and export services.
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4 group/item">
                                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/item:bg-secondary transition-colors">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-blue-200/60 uppercase font-bold tracking-wider">Need Help? Call Us</p>
                                                <a href="tel:+918980662531" className="text-lg font-bold hover:text-secondary transition-colors">+91 89806 62531</a>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 group/item">
                                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/item:bg-secondary transition-colors">
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-blue-200/60 uppercase font-bold tracking-wider">Email Us</p>
                                                <a href="mailto:info@transcendencepharma.com" className="text-lg font-bold hover:text-secondary transition-colors">info@transcendencepharma.com</a>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 group/item">
                                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/item:bg-secondary transition-colors">
                                                <Clock className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-blue-200/60 uppercase font-bold tracking-wider">Office Hours</p>
                                                <p className="text-lg font-bold">Mon - Sat: 9AM - 6PM</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-10">
                                        <a href="/contact-us" className="block w-full text-center py-4 bg-white text-primary font-bold rounded-2xl hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1 shadow-lg">
                                            Contact Support
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FAQItem({ id, question, answer, isOpen, toggle }: { id: string, question: string, answer: string, isOpen: boolean, toggle: () => void }) {
    return (
        <div className={`group border rounded-[1.5rem] transition-all duration-500 overflow-hidden ${isOpen ? 'border-[#2acae4] bg-white dark:bg-surface-dark shadow-[0_20px_40px_-15px_rgba(42,202,228,0.15)]' : 'border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-white/5 hover:border-[#2acae4]/30'}`}>
            <button
                onClick={toggle}
                className="w-full text-left px-7 py-6 flex items-center justify-between gap-4"
            >
                <span className={`font-bold text-base md:text-lg leading-tight transition-colors duration-300 ${isOpen ? 'text-[#24B7D3]' : 'text-gray-900 dark:text-white group-hover:text-[#24B7D3]'}`}>
                    {question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 flex-shrink-0 ${isOpen ? 'bg-[#24B7D3] text-white rotate-180' : 'bg-white dark:bg-gray-800 text-[#2acae4] shadow-sm'}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </div>
            </button>
            <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-7 pb-7">
                    <div className="h-px w-full bg-gradient-to-r from-[#24B7D3]/20 to-transparent mb-5"></div>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed italic">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
}

function GradientUnderline() {
    return (
        <div className="mt-3 w-20 h-1.5 bg-gradient-to-r from-[#24B7D3] to-[#30EFAD] rounded-full"></div>
    );
}
