'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import SafeFoodImage from './SafeFoodImage';
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  GalleryCategory,
  GalleryItem,
  filterGalleryByCategory,
} from '@/lib/restaurant-data';

export default function FoodGallery() {
  const [selectedCategory, setSelectedCategory] =
    useState<GalleryCategory>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const visibleItems = filterGalleryByCategory(GALLERY_ITEMS, selectedCategory);

  useEffect(() => {
    if (!lightboxItem) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxItem(null);
      } else if (e.key === 'ArrowRight') {
        const idx = visibleItems.findIndex((i) => i.id === lightboxItem.id);
        if (idx !== -1) {
          setLightboxItem(visibleItems[(idx + 1) % visibleItems.length]);
        }
      } else if (e.key === 'ArrowLeft') {
        const idx = visibleItems.findIndex((i) => i.id === lightboxItem.id);
        if (idx !== -1) {
          setLightboxItem(
            visibleItems[(idx - 1 + visibleItems.length) % visibleItems.length]
          );
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxItem, visibleItems]);

  const handleNext = () => {
    if (!lightboxItem) return;
    const idx = visibleItems.findIndex((i) => i.id === lightboxItem.id);
    if (idx !== -1) {
      setLightboxItem(visibleItems[(idx + 1) % visibleItems.length]);
    }
  };

  const handlePrev = () => {
    if (!lightboxItem) return;
    const idx = visibleItems.findIndex((i) => i.id === lightboxItem.id);
    if (idx !== -1) {
      setLightboxItem(
        visibleItems[(idx - 1 + visibleItems.length) % visibleItems.length]
      );
    }
  };

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 bg-[#12261D] text-[#FAF6F0] border-b border-[#C89347]/15"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading & Category Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-[#DFB26F] mb-3">
              <span>Visual Showcase</span>
              <span aria-hidden="true">·</span>
              <span>Food &amp; Dining Atmosphere</span>
            </div>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#FAF6F0] leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              A Glimpse Inside Our Kitchen
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#FAF6F0]/75 max-w-md">
            Explore our Sri Lankan culinary craft—from kottu preparation and
            lacy hoppers to homestyle rice and curry. Photography placeholders
            can be swapped with official restaurant photography at any time.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div
          role="group"
          aria-label="Filter gallery by category"
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-10"
        >
          {GALLERY_CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'bg-[#C89347] text-[#12261D]'
                    : 'bg-white/8 text-[#FAF6F0]/85 hover:bg-white/15'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightboxItem(item)}
              aria-label={`Open ${item.title} in lightbox`}
              className="group relative text-left rounded-xl overflow-hidden bg-[#1A3529] border border-white/10 hover:border-[#C89347]/60 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#C89347] cursor-pointer"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <SafeFoodImage
                  src={item.imagePath}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/55 text-[#FAF6F0] flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:bg-[#C89347] group-hover:text-[#12261D] transition-all">
                  <Expand className="w-4 h-4" />
                </div>

                <div className="absolute bottom-0 inset-x-0 p-5">
                  <p className="text-xs text-[#DFB26F] font-medium mb-1">
                    {item.category}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-[#FAF6F0]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#FAF6F0]/80 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#12261D] border border-[#C89347]/30 rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div>
                <p className="text-xs text-[#DFB26F] font-medium">
                  {lightboxItem.category}
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#FAF6F0]">
                  {lightboxItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                aria-label="Close gallery lightbox"
                className="w-10 h-10 rounded-md bg-white/10 hover:bg-white/20 text-[#FAF6F0] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/10] w-full bg-black">
              <SafeFoodImage
                src={lightboxItem.imagePath}
                alt={lightboxItem.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0E1E17]">
              <p className="text-sm text-[#FAF6F0]/85">{lightboxItem.caption}</p>
              {visibleItems.length > 1 && (
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous image"
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 rounded-md text-[#FAF6F0] transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next image"
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 rounded-md text-[#FAF6F0] transition-colors cursor-pointer"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
