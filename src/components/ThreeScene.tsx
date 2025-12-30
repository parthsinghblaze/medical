"use client";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function ThreeScene() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        let phi = 0;

        // Default to dark mode colors if theme is undefined or light 
        // (Adjust these rgb values [0-1] to match your brand colors)
        // Primary: #1A2E65 -> [0.1, 0.18, 0.4]
        // Secondary: #0F72D6 -> [0.06, 0.45, 0.84]
        // Accent: #F2A900 -> [0.95, 0.66, 0]

        const isDark = theme === 'dark';

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 1000 * 2,
            height: 1000 * 2,
            phi: 0,
            theta: 0,
            dark: 1, // Always use dark mode style for better contrast on gradients
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.1, 0.18, 0.4], // Deep Blue (#1A2E65)
            markerColor: [0.95, 0.66, 0], // Gold Accent (#F2A900)
            glowColor: [0.06, 0.45, 0.84], // Bright Blue Glow
            markers: [
                // approximate locations for global hubs
                { location: [37.7595, -122.4367], size: 0.03 }, // San Francisco
                { location: [40.7128, -74.006], size: 0.03 }, // New York
                { location: [51.5074, -0.1278], size: 0.03 }, // London
                { location: [28.6139, 77.2090], size: 0.1 }, // New Delhi (Larger for HQ)
                { location: [35.6762, 139.6503], size: 0.03 }, // Tokyo
                { location: [-33.8688, 151.2093], size: 0.03 }, // Sydney
                { location: [-23.5505, -46.6333], size: 0.03 }, // Sao Paulo
                { location: [1.3521, 103.8198], size: 0.03 }, // Singapore
                { location: [25.2048, 55.2708], size: 0.05 }, // Dubai
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.003; // Rotation speed
            },
        });

        return () => {
            globe.destroy();
        };
    }, [theme]);

    return (
        <div className="w-full h-full min-h-[500px] flex items-center justify-center relative overflow-hidden transition-opacity duration-1000 ease-in-out">
            <div className="absolute inset-0 bg-gradient-to-t from-background-light via-transparent to-transparent dark:from-background-dark z-10 opacity-20 pointer-events-none" />
            <canvas
                ref={canvasRef}
                style={{
                    width: 800,
                    height: 800,
                    maxWidth: "100%",
                    aspectRatio: "1",
                }}
                className="w-full max-w-[600px] aspect-square fade-in-globe"
            />
        </div>
    );
}
