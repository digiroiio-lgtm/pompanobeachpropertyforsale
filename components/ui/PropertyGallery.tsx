'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Images } from 'lucide-react';

interface PropertyGalleryProps {
  images: string[];
  address: string;
}

export default function PropertyGallery({ images, address }: PropertyGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-3">
      {/* Main Image */}
      <div className="relative h-72 sm:h-96 lg:h-[480px] rounded-xl overflow-hidden bg-gray-100">
        <Image
          src={images[activeIndex]}
          alt={`${address} - photo ${activeIndex + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 80vw"
          className="object-cover"
          priority={activeIndex === 0}
        />

        {/* Counter */}
        <div className="absolute bottom-3 right-3 bg-black/60 text-white text-sm px-3 py-1 rounded-full flex items-center gap-1">
          <Images className="w-4 h-4" />
          {activeIndex + 1} / {images.length}
        </div>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-gray-800" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-colors ${
                i === activeIndex ? 'border-blue-600' : 'border-transparent hover:border-gray-300'
              }`}
              aria-label={`View photo ${i + 1}`}
            >
              <Image
                src={img}
                alt={`${address} thumbnail ${i + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
