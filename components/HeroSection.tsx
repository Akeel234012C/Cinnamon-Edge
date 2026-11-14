'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import SafeFoodImage from './SafeFoodImage';
import { GENERATED_IMAGES } from '@/lib/restaurant-data';

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#12261D]"
    >
      {/* Background High-Resolution Sri Lankan Feast Image */}
      <div className="absolute inset-0 z-0">
        <SafeFoodImage
          src={GENERATED_IMAGES.heroFeast}
          alt="Authentic Sri Lankan feast with clay pot curries, golden hoppers, and fragrant saffron rice at Cinnamon Edge"
          priority
          className="w-full h-full object-cover object-center scale-[1.02]"
        />
        {/* Measured contrast scrims for guaranteed 4.5:1+ legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1E17]/90 via-[#12261D]/75 to-[#12261D]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E17]/95 via-transparent to-black/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-28 pb-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          {/* Unboxed regional metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm tracking-[0.14em] text-[#DFB26F] font-medium mb-5">
            <span>Sri Lankan Café &amp; Restaurant</span>
            <span aria-hidden="true">·</span>
            <span>Mount Gravatt East, Brisbane</span>
          </div>

          {/* Main Heading */}
          <h1
            className="font-display text-[#FAF6F0] font-semibold tracking-tight leading-[1.08] mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              textWrap: 'balance',
            }}
          >
            A Taste of Sri Lanka in Brisbane.
          </h1>

          {/* Supporting Text */}
          <p className="text-base md:text-lg lg:text-xl text-[#FAF6F0]/90 leading-relaxed max-w-2xl mb-10 font-normal">
            Discover the flavours of Sri Lanka at Cinnamon Edge. Enjoy authentic
            favourites, delicious meals and a welcoming dining experience in
            Mount Gravatt East.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs md:text-sm font-semibold tracking-[0.12em] text-[#12261D] bg-[#C89347] hover:bg-[#D8A559] rounded-md transition-all duration-150 shadow-lg whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAF6F0]"
            >
              <span>EXPLORE OUR MENU</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs md:text-sm font-semibold tracking-[0.12em] text-[#FAF6F0] bg-white/10 hover:bg-white/20 border border-[#FAF6F0]/35 rounded-md backdrop-blur-xs transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C89347]"
            >
              <MapPin className="w-4 h-4 text-[#C89347]" />
              <span>FIND US</span>
            </a>
          </div>

          {/* Quiet Service Highlights Strip */}
          <div className="mt-12 sm:mt-14 pt-8 border-t border-[#FAF6F0]/15 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 text-left">
            <div>
              <p className="text-xs text-[#DFB26F] font-medium">Dining</p>
              <p className="text-sm text-[#FAF6F0] font-medium mt-0.5">
                Relaxed Dine-In
              </p>
            </div>
            <div>
              <p className="text-xs text-[#DFB26F] font-medium">Takeaway</p>
              <p className="text-sm text-[#FAF6F0] font-medium mt-0.5">
                Fresh Pick-Up
              </p>
            </div>
            <div>
              <p className="text-xs text-[#DFB26F] font-medium">Delivery</p>
              <p className="text-sm text-[#FAF6F0] font-medium mt-0.5">
                Order via Uber Eats
              </p>
            </div>
            <div>
              <p className="text-xs text-[#DFB26F] font-medium">Events</p>
              <p className="text-sm text-[#FAF6F0] font-medium mt-0.5">
                Catering &amp; Functions
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
