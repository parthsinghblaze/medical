'use client';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-primary text-white py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center opacity-80 text-sm">
                <p>© 2024 AksharAvira Pharma. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <Link href="#" className="hover:text-secondary">Privacy Policy</Link>
                    <Link href="#" className="hover:text-secondary">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
