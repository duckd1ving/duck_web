'use client';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function PhotoCarousel() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);
  
  const photos = [
    {
      src: '/images/carousel/carousel1.jpg',
    },
    {
      src: '/images/carousel/carousel2.jpg',
    }
  ];

  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => 
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  // Touch event handlers
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextPhoto();
    } else if (isRightSwipe) {
      prevPhoto();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevPhoto();
      } else if (e.key === 'ArrowRight') {
        nextPhoto();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="relative pt-20 pb-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Photo Carousel Container */}
        <div 
          ref={carouselRef}
          className="relative h-[20rem] sm:h-[24rem] lg:h-[28rem] bg-transparent cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Current Photo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-6xl h-full rounded-2xl overflow-hidden relative shadow-2xl">
              <Image
                src={photos[currentPhotoIndex].src}
                alt="Duck Dalış Merkezi"
                fill
                className="object-cover select-none"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
                priority={currentPhotoIndex === 0}
                draggable={false}
              />
            </div>
          </div>

          {/* Deneme Dalışı Form Button - Overlay on photo (only on first photo) */}
          {currentPhotoIndex === 0 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
              <a
                href="https://forms.gle/SvD9CbE249NLCKWz6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-amber-400 hover:bg-amber-500 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="text-sm md:text-base">Deneme Dalışı Kayıt Formu</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}

          {/* Navigation Arrows - Responsive positioning */}
          <button
            onClick={prevPhoto}
            className="absolute -left-4 sm:-left-8 lg:-left-20 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-amber-400/20 backdrop-blur-sm rounded-full flex items-center justify-center text-amber-400 hover:bg-amber-400/30 transition-all duration-300 hover:scale-110 shadow-lg border border-amber-400/20 z-10"
          >
            <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute -right-4 sm:-right-8 lg:-right-20 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-amber-400/20 backdrop-blur-sm rounded-full flex items-center justify-center text-amber-400 hover:bg-amber-400/30 transition-all duration-300 hover:scale-110 shadow-lg border border-amber-400/20 z-10"
          >
            <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
          </button>
        </div>
      </div>
    </section>
  );
}
