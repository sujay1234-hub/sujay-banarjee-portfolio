"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const { scrollYProgress } = useScroll();

    // Load images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        const frameCount = 120; // Based on file list
        let loadedCount = 0;

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            // Format: ezgif-frame-001.png
            const paddedIndex = i.toString().padStart(3, "0");
            img.src = `/sequence/ezgif-frame-${paddedIndex}.png`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setIsLoaded(true);
                }
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    // Draw frame
    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        const img = images[index];

        if (!canvas || !ctx || !img) return;

        // Canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Object-fit: cover logic
        const imgRatio = img.width / img.height;
        const canvasRatio = canvas.width / canvas.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgRatio;
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = canvas.height * imgRatio;
            drawHeight = canvas.height;
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Initial draw when loaded
    useEffect(() => {
        if (isLoaded) {
            // Draw the first frame immediately after loading
            renderFrame(0);
        }
    }, [isLoaded]);


    // Handle scroll
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;

        // Map 0-1 to 0-119
        const frameIndex = Math.min(
            images.length - 1,
            Math.floor(latest * (images.length - 1))
        );

        renderFrame(frameIndex);
    });

    // Handle resize
    useEffect(() => {
        const handleResize = () => {
            // Redraw current frame
            const latest = scrollYProgress.get();
            if (isLoaded && images.length > 0) {
                const frameIndex = Math.min(
                    images.length - 1,
                    Math.floor(latest * (images.length - 1))
                );
                renderFrame(frameIndex);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isLoaded, images, scrollYProgress]);


    return (
        <div className="h-[500vh] relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="block w-full h-full object-cover"
                />
                {/* Loading indicator */}
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#121212] text-white z-20">
                        <p className="text-xl animate-pulse">Loading Sequence...</p>
                    </div>
                )}
            </div>
        </div>
    );
}
