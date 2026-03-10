'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Grid3x3, Camera } from 'lucide-react'

interface PropertyGalleryProps {
  images: string[]
  title: string
}

export default function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const displayImages = images.length > 0 ? images : ['https://picsum.photos/seed/placeholder/800/600']

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className="relative grid grid-cols-4 grid-rows-2 gap-2 h-[480px] rounded-xl overflow-hidden">
        {/* Main large image */}
        <div className="col-span-2 row-span-2 relative cursor-pointer" onClick={() => { setCurrentIndex(0); setModalOpen(true) }}>
          <Image
            src={displayImages[0]}
            alt={`${title} - main`}
            fill
            className="object-cover hover:brightness-90 transition-all duration-200"
            sizes="50vw"
            priority
          />
        </div>

        {/* Thumbnail grid */}
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="relative cursor-pointer"
            onClick={() => { setCurrentIndex(i); setModalOpen(true) }}
          >
            {displayImages[i] ? (
              <Image
                src={displayImages[i]}
                alt={`${title} - photo ${i + 1}`}
                fill
                className="object-cover hover:brightness-90 transition-all duration-200"
                sizes="25vw"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <Camera className="w-8 h-8 text-gray-400" />
              </div>
            )}
            {i === 4 && displayImages.length > 5 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">+{displayImages.length - 5} photos</span>
              </div>
            )}
          </div>
        ))}

        {/* Show all photos button */}
        <button
          onClick={() => setModalOpen(true)}
          className="absolute bottom-4 right-4 bg-white text-gray-800 font-semibold text-sm px-4 py-2 rounded-lg shadow-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
        >
          <Grid3x3 className="w-4 h-4" />
          Show all {displayImages.length} photos
        </button>
      </div>

      {/* Fullscreen Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={() => setModalOpen(false)}>
          <div className="relative w-full max-w-5xl px-4" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-0 right-4 z-10 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Counter */}
            <div className="text-center text-white text-sm mb-4">
              {currentIndex + 1} / {displayImages.length}
            </div>

            {/* Main image */}
            <div className="relative h-[70vh]">
              <Image
                src={displayImages[currentIndex]}
                alt={`${title} - photo ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>

            {/* Navigation */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-r-lg transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-l-lg transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Thumbnail strip */}
            <div className="flex gap-2 mt-4 overflow-x-auto py-2 justify-center">
              {displayImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`relative flex-shrink-0 w-16 h-12 rounded overflow-hidden transition-all ${
                    i === currentIndex ? 'ring-2 ring-white' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt={`Thumbnail ${i + 1}`} fill className="object-cover" sizes="64px" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
