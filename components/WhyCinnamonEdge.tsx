'use client';

import React from 'react';
import { Coffee, Flame, Phone, Users, UtensilsCrossed } from 'lucide-react';
import SafeFoodImage from './SafeFoodImage';
import { GENERATED_IMAGES } from '@/lib/restaurant-data';

interface WhyCinnamonEdgeProps {
  phoneHref: string;
  phoneDisplay: string;
}

export default function WhyCinnamonEdge({
  phoneHref,
  phoneDisplay,
}: WhyCinnamonEdgeProps) {
  const features = [
    {
      index: '01',
      title: 'Authentic Sri Lankan Cuisine',
      description:
        'Traditional recipes celebrating whole Ceylon spices, crisp hoppers, griddle-tossed kottu, and fragrant rice dishes.',
      icon: Flame,
    },
    {
      index: '02',
      title: 'A Welcoming Dining Experience',
      description:
        'Warm hospitality in Mount Gravatt East, ideal for casual lunches, family dinners, and catching up with friends.',
      icon: UtensilsCrossed,
    },
    {
      index: '03',
      title: 'Delicious Café Favourites',
      description:
        'Savoury Sri Lankan short eats, rolls, samosas, and café beverages prepared for both dine-in and takeaway.',
      icon: Coffee,
    },
    {
      index: '04',
      title: 'Catering & Special Gatherings',
      description:
        'Tailored food arrangements and generous Sri Lankan platters to make your family events and functions effortless.',
      icon: Users,
    },
  ];

  return (
    <>
      {/* SECTION 6 – WHY CINNAMON EDGE */}
      <section className="py-20 md:py-28 bg-[#FAF6F0] border-b border-[#163024]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-[#7A3E24] mb-3">
              <span>Why Cinnamon Edge</span>
              <span aria-hidden="true">·</span>
              <span>Mount Gravatt East</span>
            </div>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#163024] leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              Authentic Flavours. Memorable Moments.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.index}
                  className="p-7 bg-[#F3ECE1] rounded-xl border border-[#163024]/12 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono-num text-xs font-semibold text-[#7A3E24]">
                        {feature.index}.
                      </span>
                      <div className="w-10 h-10 rounded-lg bg-[#163024] text-[#DFB26F] flex items-center justify-center">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-display text-2xl font-semibold text-[#163024] mb-3">
                      {feature.title}
                    </h3>

                    <p className="text-sm text-[#3E413B] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7 – CATERING & FUNCTIONS */}
      <section
        id="catering"
        className="py-20 md:py-24 bg-[#F3ECE1] border-b border-[#163024]/10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#163024] text-[#FAF6F0] rounded-2xl overflow-hidden border border-[#C89347]/25 grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Content */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-[#DFB26F] mb-3">
                <span>Catering &amp; Functions</span>
                <span aria-hidden="true">·</span>
                <span>Brisbane Events &amp; Gatherings</span>
              </div>

              <h2
                className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#FAF6F0] leading-[1.12] mb-5"
                style={{ textWrap: 'balance' }}
              >
                Make Your Celebrations Delicious
              </h2>

              <p className="text-base md:text-lg text-[#FAF6F0]/85 leading-relaxed mb-8 max-w-xl">
                Planning a special gathering or celebration? Get in touch with
                Cinnamon Edge to discuss catering and food arrangements.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs sm:text-sm font-semibold tracking-[0.1em] text-[#12261D] bg-[#C89347] hover:bg-[#D8A559] rounded-md transition-colors whitespace-nowrap shrink-0"
                >
                  <Phone className="w-4 h-4" />
                  <span>ENQUIRE ABOUT CATERING</span>
                </a>
                <span className="text-xs sm:text-sm text-[#FAF6F0]/75 font-mono-num">
                  Direct Phone Enquiry: {phoneDisplay}
                </span>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full">
              <SafeFoodImage
                src={GENERATED_IMAGES.starters}
                alt="Golden Sri Lankan fish rolls, mutton rolls, and samosas prepared for catering and functions"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#163024] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
