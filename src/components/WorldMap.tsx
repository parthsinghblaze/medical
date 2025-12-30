'use client';
import { motion } from 'framer-motion';

// A manually constructed abstract dotted map representation
// This provides a clean, transparent, code-only solution without heavy assets.
const dots = [
    // North America
    { cx: 15, cy: 15 }, { cx: 20, cy: 12 }, { cx: 25, cy: 15 }, { cx: 30, cy: 18 },
    { cx: 10, cy: 20 }, { cx: 18, cy: 25 }, { cx: 22, cy: 22 }, { cx: 28, cy: 25 },
    { cx: 32, cy: 30 }, { cx: 15, cy: 30 }, { cx: 20, cy: 35 }, { cx: 25, cy: 38 },

    // South America
    { cx: 28, cy: 50 }, { cx: 32, cy: 55 }, { cx: 35, cy: 50 }, { cx: 30, cy: 60 },
    { cx: 32, cy: 65 }, { cx: 34, cy: 75 }, { cx: 28, cy: 70 }, { cx: 30, cy: 80 },

    // Europe
    { cx: 48, cy: 18 }, { cx: 52, cy: 15 }, { cx: 55, cy: 18 }, { cx: 48, cy: 25 },
    { cx: 52, cy: 22 }, { cx: 58, cy: 20 }, { cx: 55, cy: 25 },

    // Africa
    { cx: 48, cy: 40 }, { cx: 52, cy: 35 }, { cx: 58, cy: 38 }, { cx: 62, cy: 40 },
    { cx: 50, cy: 48 }, { cx: 55, cy: 55 }, { cx: 60, cy: 50 }, { cx: 52, cy: 60 },
    { cx: 58, cy: 65 }, { cx: 55, cy: 70 },

    // Asia
    { cx: 65, cy: 15 }, { cx: 70, cy: 12 }, { cx: 75, cy: 15 }, { cx: 80, cy: 12 },
    { cx: 70, cy: 22 }, { cx: 78, cy: 20 }, { cx: 85, cy: 18 }, { cx: 90, cy: 20 },
    { cx: 65, cy: 30 }, { cx: 72, cy: 32 }, { cx: 80, cy: 28 }, { cx: 88, cy: 30 },
    { cx: 75, cy: 38 }, { cx: 82, cy: 35 }, { cx: 92, cy: 35 }, { cx: 80, cy: 45 },

    // Australia / Oceania
    { cx: 80, cy: 70 }, { cx: 85, cy: 65 }, { cx: 88, cy: 72 }, { cx: 92, cy: 78 },
    { cx: 82, cy: 80 }, { cx: 95, cy: 85 }
];

export default function WorldMap({ className }: { className?: string }) {
    return (
        <div className={`relative w-full aspect-[2/1] ${className}`}>
            <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Draw abstract dots */}
                {dots.map((dot, i) => (
                    <motion.circle
                        key={i}
                        cx={dot.cx}
                        cy={dot.cy}
                        r={0.8}
                        className="fill-gray-300 dark:fill-gray-600"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.01 + 0.5, duration: 0.5 }}
                        viewport={{ once: true }}
                    />
                ))}

                {/* Connecting lines for effect */}
                <motion.path
                    d="M 25 38 Q 40 45 52 35 T 75 38"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.2"
                    className="text-gray-300 dark:text-gray-600 opacity-50"
                    strokeDasharray="1 1"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                />
            </svg>
        </div>
    );
}
