'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Phone, Mail, ChevronDown, Menu, X } from 'lucide-react';
import { ModeToggle } from './ModeToggle';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Top Bar */}
            <div className="bg-primary text-white w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                        <div className="bg-white rounded-full p-1 text-primary w-6 h-6 flex items-center justify-center">
                            <Phone size={14} />
                        </div>
                        <span className="font-medium tracking-wide">+91 89806 62531</span>
                    </div>
                    <div className="hidden md:block relative -top-3">
                        {/* Translate Button - Visual Only now */}
                        <div className="group relative">
                            <button className="bg-accent text-white px-6 py-2 rounded-b-lg font-semibold hover:bg-yellow-600 transition-colors shadow-sm text-xs uppercase tracking-wider flex items-center gap-1 cursor-pointer">
                                Translate »
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Mail size={16} className="opacity-90" />
                        <a className="hover:underline opacity-90" href="mailto:sales@aksharavira.com">sales@aksharavira.com</a>
                    </div>
                </div>
            </div>

            {/* Nav */}
            <nav className="bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100/50 dark:border-gray-800/50 sticky top-0 z-50 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                            <div className="text-secondary dark:text-blue-400">
                                <svg fill="currentColor" height="40" viewBox="0 0 50 50" width="40">
                                    <circle cx="25" cy="25" opacity="1" r="4"></circle>
                                    <circle cx="25" cy="15" opacity="0.8" r="3"></circle>
                                    <circle cx="25" cy="35" opacity="0.8" r="3"></circle>
                                    <circle cx="15" cy="25" opacity="0.8" r="3"></circle>
                                    <circle cx="35" cy="25" opacity="0.8" r="3"></circle>
                                    <circle cx="18" cy="18" opacity="0.6" r="2"></circle>
                                    <circle cx="32" cy="18" opacity="0.6" r="2"></circle>
                                    <circle cx="18" cy="32" opacity="0.6" r="2"></circle>
                                    <circle cx="32" cy="32" opacity="0.6" r="2"></circle>
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-primary dark:text-white font-display font-bold text-2xl leading-none">Akshar<span className="text-secondary dark:text-blue-400 font-normal">Avira</span></span>
                                <span className="text-gray-400 text-xs tracking-[0.2em] font-medium uppercase mt-0.5 ml-0.5">Pharma</span>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="/" className="text-secondary font-semibold border-b-2 border-secondary pb-1 dark:text-blue-400 dark:border-blue-400">Home</Link>
                            <Link href="#" className="text-gray-600 hover:text-secondary font-medium dark:text-gray-300 dark:hover:text-white transition-colors">About Us</Link>
                            <div className="relative group">
                                <button className="flex items-center text-gray-600 hover:text-secondary font-medium dark:text-gray-300 dark:hover:text-white transition-colors cursor-pointer">
                                    Services
                                    <ChevronDown size={16} className="ml-1" />
                                </button>
                            </div>
                            <Link href="#" className="text-gray-600 hover:text-secondary font-medium dark:text-gray-300 dark:hover:text-white transition-colors">Our Partnerships</Link>
                        </div>

                        {/* CTA */}
                        <div className="hidden md:flex items-center border-l border-gray-200 dark:border-gray-700 pl-6 gap-4">
                            <ModeToggle />
                            <a href="#" className="bg-secondary hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                                <Phone size={14} />
                                Contact Us
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-gray-600 dark:text-gray-200 hover:text-gray-900 focus:outline-none"
                            >
                                {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white dark:bg-background-dark border-t dark:border-gray-800">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-secondary">Home</Link>
                            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-secondary">About Us</Link>
                            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-secondary">Services</Link>
                            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-secondary">Our Partnerships</Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
