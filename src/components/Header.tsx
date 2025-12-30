'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Phone, Mail, ChevronDown, Menu, X } from 'lucide-react';
import { ModeToggle } from './ModeToggle';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <>
            {/* Top Bar - Corporate/Export Focus */}
            <div className="bg-primary dark:bg-slate-900 text-white w-full border-b border-white/10 relative z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between text-xs tracking-wide">
                    <div className="hidden md:flex items-center space-x-6 text-gray-300">
                        <span className="flex items-center hover:text-white transition-colors cursor-pointer">
                            <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                            Global Operations: 24/7 Support
                        </span>
                        <a href="mailto:sales@aksharavira.com" className="flex items-center hover:text-white transition-colors">
                            <Mail size={14} className="mr-2" />
                            sales@aksharavira.com
                        </a>
                    </div>
                    <div className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-end">
                        {/* Mobile Phone (Visible only on mobile/tablet if needed, but keeping layout clean) */}
                        <a href="tel:+918980662531" className="md:hidden flex items-center text-white font-medium">
                            <Phone size={14} className="mr-2" />
                            +91 89806 62531
                        </a>

                        <div className="flex items-center space-x-4">
                            <a href="#" className="hidden md:flex hover:text-secondary transition-colors">Careers</a>
                            <span className="hidden md:block text-gray-600">|</span>
                            {/* Language Selector */}
                            <button className="flex items-center hover:text-white transition-colors gap-1">
                                <span className="uppercase">EN</span>
                                <ChevronDown size={12} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="bg-white/80 dark:bg-background-dark/80 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800 sticky top-0 z-40 transition-all duration-300 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
                        {/* Logo Area */}
                        <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
                            {/* Animated Logo Icon */}
                            <div className="text-secondary dark:text-blue-400 relative h-10 w-10">
                                <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-xl rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg fill="currentColor" height="28" viewBox="0 0 50 50" width="28" className="transform group-hover:scale-110 transition-transform duration-300">
                                        <circle cx="25" cy="25" r="4"></circle>
                                        <circle cx="25" cy="15" opacity="0.7" r="3"></circle>
                                        <circle cx="25" cy="35" opacity="0.7" r="3"></circle>
                                        <circle cx="15" cy="25" opacity="0.7" r="3"></circle>
                                        <circle cx="35" cy="25" opacity="0.7" r="3"></circle>
                                    </svg>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center">
                                <h1 className="text-2xl font-display font-bold text-gray-900 dark:text-white leading-none tracking-tight">
                                    Akshar<span className="text-secondary dark:text-blue-400">Avira</span>
                                </h1>
                                <span className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-[0.25em] ml-0.5 mt-1">
                                    Global Pharma
                                </span>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center space-x-10">
                            <NavLink href="/" active={isActive('/')}>Home</NavLink>
                            <NavLink href="/about-us" active={isActive('/about-us')}>About Us</NavLink>
                            <div className="relative group h-full flex items-center">
                                <button className={`flex items-center text-sm font-semibold transition-colors py-2 ${isActive('/services') ? 'text-secondary dark:text-blue-400' : 'text-gray-600 hover:text-secondary dark:text-gray-300 dark:hover:text-white'
                                    }`}>
                                    Services
                                    <ChevronDown size={14} className="ml-1 group-hover:rotate-180 transition-transform duration-200" />
                                </button>
                                {/* Dropdown Visual */}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-48 bg-white dark:bg-surface-dark shadow-xl rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 dark:border-gray-800 mt-2">
                                    <div className="flex flex-col space-y-1">
                                        <Link href="/services/finished-dosage-forms" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-secondary rounded-lg">FDF</Link>
                                        <Link href="/services/active-pharmaceutical-ingredients" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-secondary rounded-lg">APIs</Link>
                                        <Link href="/services/reference-listed-drugs" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-secondary rounded-lg">RLDs</Link>
                                        <Link href="/services/nutraceuticals" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-secondary rounded-lg">Nutraceuticals</Link>
                                    </div>
                                </div>
                            </div>
                            <NavLink href="/partnerships" active={isActive('/partnerships')}>Our Partnerships</NavLink>
                        </div>

                        {/* Actions */}
                        <div className="hidden lg:flex items-center gap-5">
                            <div className="h-6 w-px bg-gray-200 dark:bg-gray-700"></div>
                            <ModeToggle />
                            <a href="#" className="bg-secondary hover:bg-blue-700 text-white px-7 py-3 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 flex items-center gap-2 group">
                                Get Quote
                                <span className="bg-white/20 rounded-full p-0.5 group-hover:translate-x-1 transition-transform">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </span>
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center gap-4">
                            <ModeToggle />
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-gray-600 dark:text-gray-200 hover:text-secondary p-2 -mr-2 focus:outline-none"
                            >
                                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 absolute w-full shadow-xl">
                        <div className="px-4 pt-4 pb-6 space-y-2">
                            <a
                                href="/"
                                className={`block px-4 py-3 rounded-xl font-bold ${isActive('/') ? 'bg-blue-50 dark:bg-blue-900/20 text-secondary' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                            >
                                Home
                            </a>
                            <a
                                href="/about-us"
                                className={`block px-4 py-3 rounded-xl font-bold ${isActive('/about-us') ? 'bg-blue-50 dark:bg-blue-900/20 text-secondary' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                            >
                                About Us
                            </a>
                            <a href="#" className="block px-4 py-3 rounded-xl text-gray-600 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800">Services</a>
                            <a
                                href="/partnerships"
                                className={`block px-4 py-3 rounded-xl font-bold ${isActive('/partnerships') ? 'bg-blue-50 dark:bg-blue-900/20 text-secondary' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                            >
                                Our Partnerships
                            </a>
                            <div className="pt-4 mt-2 border-t border-gray-100 dark:border-gray-800">
                                <a href="#" className="block w-full text-center bg-secondary text-white px-6 py-3 rounded-xl font-bold">Get a Quote</a>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}

function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active?: boolean }) {
    return (
        <Link
            href={href}
            className={`text-sm font-semibold transition-colors relative py-2 
            ${active
                    ? 'text-secondary dark:text-blue-400'
                    : 'text-gray-600 hover:text-secondary dark:text-gray-300 dark:hover:text-white'
                }`}
        >
            {children}
            {active && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary rounded-full"></span>
            )}
        </Link>
    );
}
