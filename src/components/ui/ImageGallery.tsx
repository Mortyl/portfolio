"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageGallery({ images, title }: { images: string[]; title: string }) {
    const [current, setCurrent] = useState(0);
    const [lightbox, setLightbox] = useState(false);

    return (
        <>
            <div className="mb-16">
                <div
                    className="relative w-full h-72 rounded-sm overflow-hidden border border-accent-muted/30 dark:border-[#2a2a3a] cursor-zoom-in"
                    onClick={() => setLightbox(true)}
                >
                    <Image
                        src={images[current]}
                        alt={`${title} screenshot ${current + 1}`}
                        fill
                        className="object-cover object-top transition-opacity duration-300"
                        priority
                    />

                    {images.length > 1 && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrent((prev) => (prev - 1 + images.length) % images.length);
                                }}
                                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-[#111]/80 hover:bg-white dark:hover:bg-[#111] text-ink dark:text-[#f0ede6] rounded-full w-8 h-8 flex items-center justify-center transition-colors shadow-sm"
                            >
                                ←
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrent((prev) => (prev + 1) % images.length);
                                }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-[#111]/80 hover:bg-white dark:hover:bg-[#111] text-ink dark:text-[#f0ede6] rounded-full w-8 h-8 flex items-center justify-center transition-colors shadow-sm"
                            >
                                →
                            </button>
                        </>
                    )}
                </div>

                {images.length > 1 && (
                    <div className="flex justify-center gap-1.5 mt-3">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                    i === current
                                        ? "bg-accent dark:bg-accent-muted"
                                        : "bg-border dark:bg-[#333] hover:bg-muted"
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Lightbox */}
            {lightbox && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setLightbox(false)}
                >
                    <button
                        onClick={() => setLightbox(false)}
                        className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl transition-colors"
                    >
                        ✕
                    </button>

                    {images.length > 1 && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrent((prev) => (prev - 1 + images.length) % images.length);
                                }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-2xl transition-colors"
                            >
                                ←
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrent((prev) => (prev + 1) % images.length);
                                }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-2xl transition-colors"
                            >
                                →
                            </button>
                        </>
                    )}

                    <div
                        className="relative w-full max-w-7xl max-h-[95vh] aspect-video rounded-sm overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={images[current]}
                            alt={`${title} screenshot ${current + 1}`}
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {images.length > 1 && (
                        <div className="absolute bottom-4 flex gap-1.5">
                            {images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrent(i);
                                    }}
                                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                        i === current ? "bg-white" : "bg-white/40 hover:bg-white/70"
                                    }`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </>
    );
}