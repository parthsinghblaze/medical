'use client';

import Image from 'next/image';
import CountUp from 'react-countup';

const achievements = [
    {
        value: 38,
        suffix: "+",
        label: "Countries Served",
        description: "Delivering pharmaceutical products across five continents, ensuring health access worldwide."
    },
    {
        value: 250,
        suffix: "+",
        label: "Pharmaceutical Products",
        description: "Our extensive product line includes FDF and APIs."
    },
    {
        value: 100,
        suffix: "+",
        label: "Global Partners",
        description: "Trusted by importers, hospitals, labs and healthcare providers globally for timely, high-quality supply"
    },
    {
        value: 99,
        suffix: "%",
        label: "Customer Satisfaction",
        description: "Consistently rated top-tier by partners for quality, reliability, and compliance."
    }
];

export default function AboutAchievements() {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-cyan-50/80 via-white to-cyan-50/80 dark:from-cyan-950/20 dark:via-surface-dark dark:to-cyan-950/20">
            {/* Decorative Map Background */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none">
                <Image
                    src="/images/world_map.png"
                    alt="World Map Pattern"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Decorative Dotted Pattern (CSS-based fallback/addition) */}
            <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#0891b2 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Heading */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-3 block">
                        Our Global Impact
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white leading-tight">
                        Our Achievements Are Built on <br className="hidden md:block" />
                        <span className="text-secondary dark:text-blue-400">Client Trust & Global Reach</span>
                    </h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {achievements.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="mb-4 relative">
                                <span className="text-5xl lg:text-6xl font-display font-bold text-teal-600 dark:text-teal-400 opacity-90 group-hover:scale-110 transition-transform duration-300 block">
                                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} enableScrollSpy scrollSpyOnce />
                                </span>
                                {/* Decorative underline */}
                                <div className="h-1 w-12 bg-teal-200 dark:bg-teal-800 mx-auto mt-2 rounded-full"></div>
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                                {stat.label}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-[250px]">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
