'use client';

import React from 'react';
import { motion } from 'motion/react';
import SafeFoodImage from './SafeFoodImage';
import { GENERATED_IMAGES } from '@/lib/restaurant-data';

export default function IntroductionSection() {
  return (
    <section
      id="welcome"
      className="py-20 md:py-28 bg-[#FAF6F0] border-b border-[#163024]/10"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Large Food Photography */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 relative rounded-xl overflow-hidden border border-[#163024]/12 shadow-sm min-h-[360px] md:min-h-[460px]"
          >
            <SafeFoodImage
              src={GENERATED_IMAGES.hoppers}
              alt="Traditional Sri Lankan Egg Hopper and plain hoppers served with house sambols at Cinnamon Edge"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#12261D]/90 via-[#12261D]/45 to-transparent p-6">
              <p className="text-xs tracking-wider text-[#DFB26F] font-medium">
                Island Culinary Heritage · Creek Road, Mount Gravatt East
              </p>
              <p className="font-display text-xl text-[#FAF6F0] mt-1">
                Crisp fermented rice &amp; coconut milk hoppers with traditional sambols
              </p>
            </div>
          </motion.div>

          {/* Right Column: Editorial-Style Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-[#7A3E24] mb-3">
              <span>Our Story &amp; Table</span>
              <span aria-hidden="true">·</span>
              <span>Brisbane, Queensland</span>
            </div>

            <h2
              className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#163024] leading-[1.12] mb-6"
              style={{ textWrap: 'balance' }}
            >
              Welcome to Cinnamon Edge
            </h2>

            {/* Subtle decorative hairline divider */}
            <div className="w-16 h-[2px] bg-[#C89347] mb-7" />

            <div className="space-y-5 text-[#2C2E2A] text-base md:text-[17px] leading-[1.75]">
              <p>
                Nestled on Creek Road in Mount Gravatt East,{' '}
                <strong className="font-semibold text-[#163024]">
                  Cinnamon Edge
                </strong>{' '}
                brings the warmth, aroma, and generosity of traditional Sri
                Lankan home and street cooking to Brisbane’s southside.
              </p>
              <p>
                Sri Lankan cuisine is celebrated for its fragrant Ceylon
                cinnamon, roasted curry leaves, slow-simmered spices, and vibrant
                textures—from the rhythmic clatter of freshly chopped{' '}
                <em>kottu roti</em> on the hot griddle to delicate, bowl-shaped{' '}
                <em>hoppers</em> with crisp lacy edges and soft coconut-milk
                centres.
              </p>
              <p>
                Whether you are joining us for a relaxed café meal, picking up
                savoury short eats and wok-tossed fried rice on your way home,
                or planning catering for a family celebration, our kitchen
                prepares every dish with genuine Sri Lankan hospitality.
              </p>
            </div>

            {/* Clean Editorial Highlights */}
            <div className="mt-9 pt-8 border-t border-[#163024]/12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <p className="font-display text-xl font-semibold text-[#163024]">
                  01. Ceylon Spices
                </p>
                <p className="text-sm text-[#4A4D46] mt-1">
                  Aromatic curries, kottu, and short eats seasoned the traditional way.
                </p>
              </div>
              <div>
                <p className="font-display text-xl font-semibold text-[#163024]">
                  02. Café &amp; Dining
                </p>
                <p className="text-sm text-[#4A4D46] mt-1">
                  Welcoming dine-in atmosphere alongside convenient takeaway and delivery.
                </p>
              </div>
              <div>
                <p className="font-display text-xl font-semibold text-[#163024]">
                  03. Local Gathering
                </p>
                <p className="text-sm text-[#4A4D46] mt-1">
                  Proudly serving Mount Gravatt East and the wider Brisbane community.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
