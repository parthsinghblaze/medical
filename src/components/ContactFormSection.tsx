'use client';

export default function ContactFormSection() {
    return (
        <section className="relative py-24 bg-gradient-to-br from-[#f0f9ff] via-white to-[#e0f2fe] dark:from-background-dark dark:via-background-dark dark:to-surface-dark overflow-hidden">

            {/* Decorative Molecular Patterns */}
            <div className="absolute top-0 left-0 w-64 h-full opacity-10 dark:opacity-20 pointer-events-none hidden lg:block">
                <MolecularPattern />
            </div>
            <div className="absolute top-0 right-0 w-64 h-full opacity-10 dark:opacity-20 pointer-events-none hidden lg:block rotate-180">
                <MolecularPattern />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-secondary dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-3 block">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white mb-4">
                        Drop Us A Line
                    </h2>
                </div>

                {/* Form */}
                <form className="space-y-6 bg-white/40 dark:bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-[2rem] border border-white dark:border-gray-800 shadow-2xl shadow-blue-500/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Row 1 */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Name*</label>
                            <input
                                type="text"
                                required
                                placeholder="Enter your name"
                                className="w-full px-6 py-4 rounded-xl bg-white dark:bg-gray-900 border border-blue-100 dark:border-gray-700 focus:border-[#2acae4] focus:ring-4 focus:ring-[#2acae4]/10 transition-all outline-none text-gray-900 dark:text-white placeholder:text-gray-400"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Your Phone</label>
                            <input
                                type="tel"
                                placeholder="Enter phone number"
                                className="w-full px-6 py-4 rounded-xl bg-white dark:bg-gray-900 border border-blue-100 dark:border-gray-700 focus:border-[#2acae4] focus:ring-4 focus:ring-[#2acae4]/10 transition-all outline-none text-gray-900 dark:text-white placeholder:text-gray-400"
                            />
                        </div>

                        {/* Row 2 */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Email*</label>
                            <input
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="w-full px-6 py-4 rounded-xl bg-white dark:bg-gray-900 border border-blue-100 dark:border-gray-700 focus:border-[#2acae4] focus:ring-4 focus:ring-[#2acae4]/10 transition-all outline-none text-gray-900 dark:text-white placeholder:text-gray-400"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Subject*</label>
                            <input
                                type="text"
                                required
                                placeholder="How can we help?"
                                className="w-full px-6 py-4 rounded-xl bg-white dark:bg-gray-900 border border-blue-100 dark:border-gray-700 focus:border-[#2acae4] focus:ring-4 focus:ring-[#2acae4]/10 transition-all outline-none text-gray-900 dark:text-white placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Message</label>
                        <textarea
                            rows={5}
                            placeholder="Write your message here..."
                            className="w-full px-6 py-4 rounded-xl bg-white dark:bg-gray-900 border border-blue-100 dark:border-gray-700 focus:border-[#2acae4] focus:ring-4 focus:ring-[#2acae4]/10 transition-all outline-none text-gray-900 dark:text-white placeholder:text-gray-400 resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-4">
                        <button
                            type="submit"
                            className="bg-[#2acae4] hover:bg-secondary text-white px-12 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-[#2acae4]/20 hover:shadow-[#2acae4]/40 hover:-translate-y-1 active:scale-95"
                        >
                            Send Request
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

function MolecularPattern() {
    return (
        <svg width="100%" height="100%" viewBox="0 0 200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Simple Hexagonal Pattern */}
            <path d="M40 100 L70 80 L100 100 L100 130 L70 150 L40 130 Z" stroke="#2acae4" strokeWidth="1" />
            <circle cx="40" cy="100" r="3" fill="#2acae4" />
            <circle cx="70" cy="80" r="3" fill="#2acae4" />
            <circle cx="100" cy="100" r="3" fill="#2acae4" />

            <path d="M100 100 L130 80 L160 100 L160 130 L130 150 L100 130" stroke="#2acae4" strokeWidth="1" />
            <circle cx="130" cy="80" r="3" fill="#2acae4" />
            <circle cx="160" cy="100" r="3" fill="#2acae4" />

            <path d="M70 150 L100 170 L130 150" stroke="#2acae4" strokeWidth="1" />
            <circle cx="100" cy="170" r="3" fill="#2acae4" />

            {/* Repeated pattern offset */}
            <g transform="translate(20, 200)">
                <path d="M40 100 L70 80 L100 100 L100 130 L70 150 L40 130 Z" stroke="#2acae4" strokeWidth="1" />
                <circle cx="40" cy="100" r="3" fill="#2acae4" />
                <circle cx="70" cy="80" r="3" fill="#2acae4" />
                <circle cx="100" cy="100" r="3" fill="#2acae4" />
                <path d="M100 100 L130 80 L160 100 L160 130 L130 150 L100 130" stroke="#2acae4" strokeWidth="1" />
            </g>

            <g transform="translate(-10, 450)">
                <path d="M40 100 L70 80 L100 100 L100 130 L70 150 L40 130 Z" stroke="#2acae4" strokeWidth="1" />
                <circle cx="40" cy="100" r="3" fill="#2acae4" />
                <circle cx="70" cy="80" r="3" fill="#2acae4" />
                <path d="M100 100 L130 80 L160 100 L160 130 L130 150 L100 130" stroke="#2acae4" strokeWidth="1" />
            </g>
        </svg>
    );
}
