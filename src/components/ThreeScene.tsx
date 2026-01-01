"use client";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function ThreeScene() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    const pointerInteracting = useRef<{ x: number, y: number } | null>(null);
    const pointerInteractionMovement = useRef({ phi: 0, theta: 0 });
    const r = useRef(0);
    const t = useRef(0);

    useEffect(() => {
        let width = 0; // Capture width for rotation calc

        // Default to dark mode colors if theme is undefined or light 
        // (Adjust these rgb values [0-1] to match your brand colors)
        // Primary: #1A2E65 -> [0.1, 0.18, 0.4]
        // Secondary: #0F72D6 -> [0.06, 0.45, 0.84]
        // Accent: #F2A900 -> [0.95, 0.66, 0]

        const isDark = theme === 'dark';

        if (!canvasRef.current) return;

        const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
        window.addEventListener('resize', onResize)
        onResize()

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0,
            dark: isDark ? 1 : 0,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: isDark ? [0.1, 0.18, 0.4] : [0.93, 0.93, 0.93],
            markerColor: isDark ? [0.95, 0.66, 0] : [0.2, 0.5, 0.9],
            glowColor: isDark ? [0.06, 0.45, 0.84] : [1, 1, 1],
            markers: [
                { location: [37.7595, -122.4367], size: 0.03 }, // San Francisco
                { location: [40.7128, -74.006], size: 0.03 }, // New York
                { location: [51.5074, -0.1278], size: 0.03 }, // London
                { location: [28.6139, 77.2090], size: 0.1 }, // New Delhi
                { location: [35.6762, 139.6503], size: 0.03 }, // Tokyo
                { location: [-33.8688, 151.2093], size: 0.03 }, // Sydney
                { location: [-23.5505, -46.6333], size: 0.03 }, // Sao Paulo
                { location: [1.3521, 103.8198], size: 0.03 }, // Singapore
                { location: [25.2048, 55.2708], size: 0.05 }, // Dubai
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                if (!pointerInteracting.current) {
                    r.current += 0.003;
                }
                state.phi = r.current + pointerInteractionMovement.current.phi;
                state.theta = t.current + pointerInteractionMovement.current.theta;
                state.width = width * 2;
                state.height = width * 2;
            },
        });

        return () => {
            globe.destroy();
            window.removeEventListener('resize', onResize);
        };
    }, [theme]);

    return (
        <div className="w-full h-full min-h-[300px] md:min-h-[500px] flex items-center justify-center relative transition-opacity duration-1000 ease-in-out">
            <div className="absolute inset-0 bg-gradient-to-t from-background-light via-transparent to-transparent dark:from-background-dark z-10 opacity-20 pointer-events-none" />
            <canvas
                ref={canvasRef}
                onPointerDown={(e) => {
                    pointerInteracting.current = { x: e.clientX, y: e.clientY };
                    r.current += pointerInteractionMovement.current.phi;
                    t.current += pointerInteractionMovement.current.theta;
                    pointerInteractionMovement.current = { phi: 0, theta: 0 };
                    if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing';
                }}
                onPointerUp={() => {
                    pointerInteracting.current = null;
                    if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
                }}
                onPointerOut={() => {
                    pointerInteracting.current = null;
                    if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
                }}
                onMouseMove={(e) => {
                    if (pointerInteracting.current !== null) {
                        const deltaX = e.clientX - pointerInteracting.current.x;
                        const deltaY = e.clientY - pointerInteracting.current.y;
                        pointerInteractionMovement.current = {
                            phi: deltaX / 200,
                            theta: deltaY / 200,
                        };
                    }
                }}
                onTouchStart={(e) => {
                    if (e.touches[0]) {
                        pointerInteracting.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
                        r.current += pointerInteractionMovement.current.phi;
                        t.current += pointerInteractionMovement.current.theta;
                        pointerInteractionMovement.current = { phi: 0, theta: 0 };
                    }
                }}
                onTouchMove={(e) => {
                    if (pointerInteracting.current !== null && e.touches[0]) {
                        const deltaX = e.touches[0].clientX - pointerInteracting.current.x;
                        const deltaY = e.touches[0].clientY - pointerInteracting.current.y;
                        pointerInteractionMovement.current = {
                            phi: deltaX / 200,
                            theta: deltaY / 200,
                        };
                    }
                }}
                onTouchEnd={() => {
                    pointerInteracting.current = null;
                }}
                style={{
                    width: '100%',
                    height: '100%',
                    maxWidth: "800px",
                    aspectRatio: "1",
                    cursor: 'grab',
                    contain: 'layout paint size',
                    opacity: theme === 'dark' ? 1 : 0.8,
                }}
                className="fade-in-globe"
            />
        </div>
    );
}
