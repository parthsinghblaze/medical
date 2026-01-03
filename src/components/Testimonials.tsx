'use client';
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Richard Measey",
        location: "United Kingdom",
        rating: 5,
        text: "Very helpful and welcoming. DHL delivered it very quickly. An excellent transaction! The team was professional throughout the entire process."
    },
    {
        id: 2,
        name: "Lee Rimba",
        location: "South Korea",
        rating: 5,
        text: "I want to express my gratitude for the high-quality products. Your responses were very patient and detailed. We are extremely pleased with the treatment we received and look forward to placing future orders with Transcendence Pharma."
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        location: "Spain",
        rating: 5,
        text: "Trustworthy partner for pharmaceutical supplies. The documentation was perfect and the shipment arrived on schedule. Highly recommended for international business."
    },
    {
        id: 4,
        name: "David Chen",
        location: "Singapore",
        rating: 5,
        text: "Exceptional service and product quality. Their attention to regulatory compliance gave us complete peace of mind. A reliable long-term partner."
    }
];

export default function Testimonials() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-900 to-primary dark:from-surface-dark dark:to-[#0B1121]">

            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}>
            </div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* LEFT HEADER SECTION */}
                    <div className="w-full lg:w-1/3 text-white">
                        <div>
                            <span className="text-blue-200 font-bold text-sm uppercase tracking-widest mb-4 block">
                                Trusted by Clients Worldwide
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                                What Our Clients Say About Us
                            </h2>
                            <p className="text-blue-100/80 text-lg leading-relaxed mb-8">
                                Transcendence Pharma stands as a beacon of excellence in the pharmaceutical industry.
                                Our dedication to quality standards and customer satisfaction has earned us the trust of partners across the globe.
                            </p>

                            {/* Navigation Buttons (Desktop) */}
                            <div className="hidden lg:flex items-center gap-4 mt-8">
                                <button
                                    onClick={scrollPrev}
                                    className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-sm group"
                                    aria-label="Previous testimonial"
                                >
                                    <ChevronLeft className="text-white transition-transform" />
                                </button>
                                <button
                                    onClick={scrollNext}
                                    className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-sm group"
                                    aria-label="Next testimonial"
                                >
                                    <ChevronRight className="text-white transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SLIDER SECTION - Embla Carousel */}
                    <div className="w-full lg:w-2/3 overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-6">
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="relative flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 pl-6"
                                >
                                    <div className="bg-white dark:bg-surface-light rounded-2xl p-8 shadow-xl select-none transition-transform duration-300 h-full">
                                        <div className="absolute top-8 right-8 text-yellow-400 flex gap-1">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} size={16} fill="currentColor" />
                                            ))}
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-900">{testimonial.name}</h4>
                                            <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mt-1">{testimonial.location}</p>
                                        </div>

                                        <div className="relative">
                                            <Quote size={40} className="absolute -top-4 -left-2 text-gray-100 dark:text-gray-200 -z-10" />
                                            <p className="text-gray-600 dark:text-gray-600 leading-relaxed relative z-10 pointer-events-none">
                                                "{testimonial.text}"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Navigation (Visible only on small screens) */}
                    <div className="flex lg:hidden items-center justify-center gap-4 mt-2 w-full">
                        <button
                            onClick={scrollPrev}
                            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 text-white"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 text-white"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
