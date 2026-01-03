'use client';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

const contactInfo = [
    {
        title: "Send Us Mail",
        info: "info@transcendencepharma.com",
        icon: <Mail className="w-6 h-6 text-white" />,
        image: "/images/contact/scientist-mail.jpg", // Placeholder path
        alt: "Female scientist in laboratory"
    },
    {
        title: "Call Us Anytime",
        info: "+91 89806 62531",
        icon: <Phone className="w-6 h-6 text-white" />,
        image: "/images/contact/scientist-phone.jpg", // Placeholder path
        alt: "Male scientist with microscope"
    },
    {
        title: "Address",
        info: "27, Sagar Industrial Estate, Surat\nGujarat 395004 India",
        icon: <MapPin className="w-6 h-6 text-white" />,
        image: "/images/contact/scientists-lab.jpg", // Placeholder path
        alt: "Scientists in lab"
    }
];

export default function ContactSection() {
    return (
        <section className="py-20 bg-white dark:bg-background-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-3 block">
                        Promising Best Quality Services
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6">
                        Contact Transcendence Pharma
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                        At <span className="font-bold text-gray-900 dark:text-white">Transcendence Pharma</span>, we are ready to assist our global partners with premium pharmaceutical solutions. We specialize in <span className="font-bold text-gray-900 dark:text-white">Active Pharmaceutical Ingredients (APIs)</span>, <span className="font-bold text-gray-900 dark:text-white">Finished Dosage Forms (FDFs)</span>, <span className="font-bold text-gray-900 dark:text-white">Nutraceuticals</span>, and <span className="font-bold text-gray-900 dark:text-white">Reference Listed Drugs (RLDs)</span>. Reach out to our team for expert support and seamless distribution services.
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contactInfo.map((card, index) => (
                        <div
                            key={index}
                            className="group bg-white dark:bg-surface-dark rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-8">
                                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse flex items-center justify-center text-gray-400 dark:text-gray-600 text-sm font-medium">
                                    [Placeholder: {card.alt}]
                                </div>
                                {/* Icon Overlay */}
                                <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#2acae4] rounded-xl flex items-center justify-center shadow-lg shadow-[#2acae4]/30 z-10 transition-transform group-hover:scale-110">
                                    {card.icon}
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="text-center pb-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {card.title}
                                </h3>
                                <div className="text-[#2acae4] font-medium whitespace-pre-line leading-relaxed group-hover:text-secondary transition-colors">
                                    {card.info}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
