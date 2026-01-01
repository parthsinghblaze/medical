'use client';
import Link from 'next/link';
import { Phone, Mail, MapPin, Pill, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-50 dark:bg-[#0B1121] text-gray-700 dark:text-gray-300 pt-16 border-t border-gray-200 dark:border-gray-800 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* TOP SECTION - 4 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

                    {/* COLUMN 1: Company Info (35% approx -> span 4 or 5) */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Logo Area */}
                        <Link href="/" className="flex flex-col justify-center cursor-pointer group no-underline">
                            <h1 className="text-3xl font-questrial text-gray-900 dark:text-white leading-[0.9] tracking-tighter lowercase">
                                transcendence
                            </h1>
                            <div className="flex gap-2 items-baseline mt-1">
                                <span className="text-[10px] font-display font-bold uppercase tracking-wider text-gray-900 dark:text-white">
                                    PHARMA
                                </span>
                                <span className="text-[9px] font-display font-light italic text-[#2acae4] whitespace-nowrap">
                                    beyond ordinary limitations
                                </span>
                            </div>
                        </Link>

                        <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 max-w-sm">
                            Transcendence Pharma is a leading exporter of high-quality pharmaceutical products, committed to compliance, safety, and timely global distribution.
                        </p>

                        {/* Social Links (Optional but good for footer) */}
                        <div className="flex gap-4 pt-2">
                            <div className="w-10 h-10 rounded-full bg-white dark:bg-white/5 shadow-sm flex items-center justify-center hover:text-primary hover:scale-110 transition-all cursor-pointer border border-gray-100 dark:border-gray-800">
                                <Facebook size={18} />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white dark:bg-white/5 shadow-sm flex items-center justify-center hover:text-primary hover:scale-110 transition-all cursor-pointer border border-gray-100 dark:border-gray-800">
                                <Twitter size={18} />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white dark:bg-white/5 shadow-sm flex items-center justify-center hover:text-primary hover:scale-110 transition-all cursor-pointer border border-gray-100 dark:border-gray-800">
                                <Linkedin size={18} />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white dark:bg-white/5 shadow-sm flex items-center justify-center hover:text-pink-500 hover:scale-110 transition-all cursor-pointer border border-gray-100 dark:border-gray-800">
                                <Instagram size={18} />
                            </div>
                        </div>
                    </div>

                    {/* COLUMN 2: Our Services (20% -> span 3) */}
                    <div className="lg:col-span-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 relative inline-block">
                            Our Services
                            <span className="absolute left-0 bottom-[-4px] w-full h-[3px] bg-primary/30 rounded-full">
                                <svg className="absolute top-0 left-0 w-full h-full text-primary" preserveAspectRatio="none" viewBox="0 0 100 10">
                                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" />
                                </svg>
                            </span>
                        </h3>
                        {/* Simpler wavy underline using CSS or vector? Let's stick to a clean border or the requested wavy. 
                            The SVG wavy path might be tricky to align perfectly without fixed width. 
                            Let's use a reliable CSS decoration or border-bottom styling.
                        */}
                        <ul className="space-y-3">
                            {[
                                { name: 'Reference Listed Drugs (RLDs)', href: '/services/reference-listed-drugs', hoverColor: 'hover:text-purple-600 dark:hover:text-purple-400' },
                                { name: 'Nutraceuticals', href: '/services/nutraceuticals', hoverColor: 'hover:text-amber-600 dark:hover:text-amber-400' },
                                { name: 'Active Pharmaceutical Ingredients (APIs)', href: '/services/active-pharmaceutical-ingredients', hoverColor: 'hover:text-emerald-600 dark:hover:text-emerald-400' },
                                { name: 'Finished Dosage Forms (FDF)', href: '/services/finished-dosage-forms', hoverColor: 'hover:text-blue-600 dark:hover:text-blue-400' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className={`flex items-center gap-2 transition-colors hover:translate-x-1 duration-200 ${item.hoverColor}`}>
                                        <ArrowRight size={14} className="opacity-50" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 3: Information (20% -> span 3) */}
                    <div className="lg:col-span-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 relative inline-block">
                            Information
                            <span className="absolute left-0 bottom-[-4px] w-1/2 h-[2px] bg-primary"></span>
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About Us', href: '/about-us' },
                                { name: 'Privacy Policy', href: '/privacy-policy' },
                                { name: 'Terms & Conditions', href: '/terms-and-conditions' },
                                { name: 'Contact Us', href: '#' },
                                { name: 'FAQs', href: '#' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="flex items-center gap-2 hover:text-primary transition-colors hover:translate-x-1 duration-200">
                                        <ArrowRight size={14} className="text-primary/50" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 4: Empty (1 -> usually just spacing or filling grid) */}
                    {/* Handled by col-span sizing: 5+3+3 = 11. One col left empty. */}
                    <div className="lg:col-span-1"></div>
                </div>

                {/* MIDDLE SECTION - Contact Bar */}
                <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-gray-800 rounded-2xl p-8 shadow-sm mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-gray-800">

                        {/* Phone */}
                        <div className="flex items-center gap-5 px-4">
                            <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Need Help? Call Us</p>
                                <a href="tel:+918980662531" className="text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
                                    +91 8980662531
                                </a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-5 px-4 pt-6 md:pt-0">
                            <div className="w-14 h-14 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0 text-amber-600 dark:text-amber-400">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Email Us</p>
                                <a href="mailto:sales@aksharavira.com" className="text-lg font-bold text-gray-900 dark:text-white hover:text-amber-600 transition-colors">
                                    sales@aksharavira.com
                                </a>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-center gap-5 px-4 pt-6 md:pt-0">
                            <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 text-emerald-600 dark:text-emerald-400">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Our Location</p>
                                <p className="text-base font-bold text-gray-900 dark:text-white leading-tight">
                                    27, Sagar Industrial Estate,<br /> Surat Gujarat India 395004
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* BOTTOM SECTION - Copyright */}
                <div className="border-t border-gray-200 dark:border-gray-800 py-8 text-center">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        © 2025, <Link href="/" className="text-primary hover:text-primary/80 font-bold transition-colors">Transcendence Pharma</Link>, All rights reserved
                    </p>
                </div>

            </div>
        </footer>
    );
}
