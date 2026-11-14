'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import SafeFoodImage from './SafeFoodImage';
import { SIGNATURE_DISHES, MenuCategory } from '@/lib/restaurant-data';

interface SignatureFavouritesProps {
  onSelectCategory: (category: MenuCategory) => void;
}

export default function SignatureFavourites({
  onSelectCategory,
}: SignatureFavouritesProps) {
  const handleExploreDish = (category: MenuCategory) => {
    onSelectCategory(category);
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="favourites"
      className="py-20 md:py-28 bg-[#F3ECE1] border-b border-[#163024]/10"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-[#7A3E24] mb-3">
              <span>Signature Dishes</span>
              <span aria-hidden="true">·</span>
              <span>Crafted Fresh to Order</span>
            </div>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#163024] leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              Discover Our Favourites
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#4A4D46] max-w-md">
            From sizzling griddle kottu and lacy hoppers to fragrant wok-tossed
            fried rice and golden Sri Lankan starters.
          </p>
        </div>

        {/* 6 Signature Food Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SIGNATURE_DISHES.map((dish, idx) => (
            <motion.article
              key={dish.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="group bg-[#FAF6F0] rounded-xl overflow-hidden border border-[#163024]/12 hover:border-[#7A3E24]/40 transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between"
            >
              <div>
                {/* 4:3 Dish Photograph */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#163024]">
                  <SafeFoodImage
                    src={dish.imagePath}
                    alt={dish.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Quiet 1-line text kicker (no pills) */}
                  <div className="flex items-center justify-between gap-2 text-xs text-[#7A3E24] font-medium mb-1.5">
                    <span>{dish.subtitle}</span>
                    <span className="font-mono-num font-semibold text-[#163024] text-sm">
                      {dish.priceDisplay}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-[#163024] mb-2.5">
                    {dish.name}
                  </h3>

                  <p className="text-sm text-[#3E413B] leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-3 border-t border-[#163024]/8 flex items-center justify-between gap-4">
                <span className="text-xs text-[#5B5E57] truncate">
                  {dish.verifiedPriceNote}
                </span>
                <button
                  type="button"
                  onClick={() => handleExploreDish(dish.targetCategory)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#163024] hover:text-[#7A3E24] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>View in {dish.targetCategory}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
