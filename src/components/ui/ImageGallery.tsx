"use client";

import { useState } from "react";
import Image from "next/image";

function Chevron({ direction, size = 16 }: { direction: "left" | "right"; size?: number }) {
    return (
        <svg
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={`transition-transform duration-200 ${
                direction === "left"
                    ? "group-hover/nav:-translate-x-0.5"
                    : "group-hover/nav:translate-x-0.5"
            }`}
        >
            {direction === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 6l6 6-6 6" />}
        </svg>
    );
}

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
                                type="button"
                                aria-label="Previous image"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrent((prev) => (prev - 1 + images.length) % images.length);
                                }}
                                className="group/nav absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-sm border border-ink/10 dark:border-white/10 bg-white/70 dark:bg-[#16152a]/70 backdrop-blur-md shadow-sm text-ink/70 dark:text-[#f0ede6]/80 hover:text-accent dark:hover:text-accent-muted hover:border-accent/40 dark:hover:border-accent-muted/40 hover:bg-white/90 dark:hover:bg-[#16152a]/90 active:scale-95 transition-all duration-200"
                            >
                                <Chevron direction="left" />
                            </button>
                            <button
                                type="button"
                                aria-label="Next image"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrent((prev) => (prev + 1) % images.length);
                                }}
                                className="group/nav absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-sm border border-ink/10 dark:border-white/10 bg-white/70 dark:bg-[#16152a]/70 backdrop-blur-md shadow-sm text-ink/70 dark:text-[#f0ede6]/80 hover:text-accent dark:hover:text-accent-muted hover:border-accent/40 dark:hover:border-accent-muted/40 hover:bg-white/90 dark:hover:bg-[#16152a]/90 active:scale-95 transition-all duration-200"
                            >
                                <Chevron direction="right" />
                            </button>
                        </>
                    )}
                </div>

                {images.length > 1 && (
                    <div className="flex justify-center gap-1.5 mt-3">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                aria-label={`Go to image ${i + 1}`}
                                aria-current={i === current ? "true" : undefined}
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
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${title} screenshot viewer`}
                >
                    <button
                        type="button"
                        aria-label="Close image viewer"
                        onClick={() => setLightbox(false)}
                        className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl transition-colors"
                    >
                        <span aria-hidden="true">✕</span>
                    </button>

                    {images.length > 1 && (
                        <>
                            <button
                                type="button"
                                aria-label="Previous image"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrent((prev) => (prev - 1 + images.length) % images.length);
                                }}
                                className="group/nav absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-sm border border-white/15 bg-white/5 backdrop-blur-sm text-white/70 hover:text-white hover:border-white/40 hover:bg-white/10 active:scale-95 transition-all duration-200"
                            >
                                <Chevron direction="left" size={18} />
                            </button>
                            <button
                                type="button"
                                aria-label="Next image"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrent((prev) => (prev + 1) % images.length);
                                }}
                                className="group/nav absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-sm border border-white/15 bg-white/5 backdrop-blur-sm text-white/70 hover:text-white hover:border-white/40 hover:bg-white/10 active:scale-95 transition-all duration-200"
                            >
                                <Chevron direction="right" size={18} />
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
                                    type="button"
                                    aria-label={`Go to image ${i + 1}`}
                                    aria-current={i === current ? "true" : undefined}
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