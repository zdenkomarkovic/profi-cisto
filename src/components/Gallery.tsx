"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/images/ciscenje (1).jpg", alt: "Pranje staklene fasade", caption: "Pranje staklene fasade" },
  { src: "/images/ciscenje (2).jpg", alt: "Pranje stakla iznutra", caption: "Pranje stakla iznutra" },
  { src: "/images/ciscenje (3).jpg", alt: "Mašinsko pranje podova", caption: "Mašinsko pranje podova" },
  { src: "/images/ciscenje (4).jpg", alt: "Industrijsko čišćenje", caption: "Industrijsko čišćenje" },
  { src: "/images/ciscenje (5).jpg", alt: "Mašina za pranje – Columbus", caption: "Mašina za pranje" },
  { src: "/images/ciscenje (6).jpg", alt: "Pranje staklenih zidova", caption: "Pranje staklenih zidova" },
  { src: "/images/ciscenje (7).jpg", alt: "Pranje staklenih panela", caption: "Pranje staklenih panela" },
  { src: "/images/ciscenje (8).jpg", alt: "Pranje spoljnih površina", caption: "Pranje spoljnih površina" },
  { src: "/images/ciscenje (9).jpg", alt: "Visoko pranje stakla", caption: "Visoko pranje stakla" },
  { src: "/images/ciscenje (10).jpg", alt: "Pranje staklenih vrata", caption: "Pranje staklenih vrata" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="galerija" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Naši radovi
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Galerija
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Pogledajte neke od naših završenih projekata – rezultati govore sami za sebe
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl cursor-pointer group aspect-square"
              onClick={() => setSelected(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/50 transition-all duration-300 flex items-end">
                <p className="text-white text-sm font-medium px-3 pb-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {img.caption}
                </p>
              </div>
              <div className="absolute top-2 right-2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={() => setSelected(null)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); setSelected((selected - 1 + images.length) % images.length); }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selected].src}
              alt={images[selected].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm">
            {images[selected].caption} ({selected + 1}/{images.length})
          </p>

          {/* Next */}
          <button
            className="absolute right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); setSelected((selected + 1) % images.length); }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
