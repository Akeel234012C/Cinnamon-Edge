'use client';

import React from 'react';
import { ExternalLink, MapPin, Phone, Settings2 } from 'lucide-react';
import {
  MENU_CATEGORIES,
  MenuCategory,
  RestaurantConfig,
} from '@/lib/restaurant-data';

interface FooterProps {
  config: RestaurantConfig;
  onSelectCategory: (category: MenuCategory) => void;
  onOpenCustomizer: () => void;
  onOpenReservations: () => void;
}

export default function Footer({
  config,
  onSelectCategory,
  onOpenCustomizer,
  onOpenReservations,
}: FooterProps) {
  const handleFooterCategoryClick = (category: MenuCategory) => {
    onSelectCategory(category);
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0E1E17] text-[#FAF6F0] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Column 1: Brand & Short Introduction */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#top"
              className="font-display text-2xl font-semibold tracking-[0.08em] text-[#FAF6F0] inline-block"
            >
              CINNAMON EDGE
            </a>
            <p className="text-sm text-[#FAF6F0]/75 leading-relaxed max-w-sm">
              Authentic Sri Lankan café and restaurant in Mount Gravatt East,
              Brisbane. Bringing traditional island flavours, hoppers, kottu,
              fried rice, and warm hospitality to Queensland.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#DFB26F]">
              <a
                href={config.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline inline-flex items-center gap-1"
              >
                <span>Google Maps Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={config.uberEatsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline inline-flex items-center gap-1"
              >
                <span>Uber Eats Store</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-display text-lg font-semibold text-[#DFB26F]">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-[#FAF6F0]/80">
              <li>
                <a
                  href="#welcome"
                  className="hover:text-[#DFB26F] transition-colors"
                >
                  Welcome
                </a>
              </li>
              <li>
                <a
                  href="#favourites"
                  className="hover:text-[#DFB26F] transition-colors"
                >
                  Signature Dishes
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="hover:text-[#DFB26F] transition-colors"
                >
                  Full Menu
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-[#DFB26F] transition-colors"
                >
                  Food Gallery
                </a>
              </li>
              <li>
                <a
                  href="#catering"
                  className="hover:text-[#DFB26F] transition-colors"
                >
                  Catering &amp; Functions
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#DFB26F] transition-colors"
                >
                  Location &amp; Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Menu Category Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display text-lg font-semibold text-[#DFB26F]">
              Menu Categories
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-[#FAF6F0]/80">
              {MENU_CATEGORIES.map((category) => (
                <li key={category}>
                  <button
                    type="button"
                    onClick={() => handleFooterCategoryClick(category)}
                    className="hover:text-[#DFB26F] transition-colors text-left cursor-pointer"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details, Reservations & Directions */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display text-lg font-semibold text-[#DFB26F]">
              Visit &amp; Contact
            </h3>
            <div className="space-y-2.5 text-sm text-[#FAF6F0]/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C89347] shrink-0 mt-1" />
                <span>
                  {config.streetAddress}, {config.suburb} {config.state}{' '}
                  {config.postcode}, {config.country}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C89347] shrink-0" />
                <a
                  href={config.phoneHref}
                  className="font-mono-num hover:text-[#DFB26F] transition-colors"
                >
                  {config.phoneDisplay}
                </a>
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs">
                <button
                  type="button"
                  onClick={onOpenReservations}
                  className="px-4 py-2 bg-[#C89347] hover:bg-[#D8A559] rounded-md text-[#12261D] font-semibold transition-colors whitespace-nowrap cursor-pointer"
                >
                  Reservations
                </button>
                <a
                  href={config.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-white/10 hover:bg-white/15 rounded-md text-[#FAF6F0] font-medium transition-colors whitespace-nowrap"
                >
                  Get Directions
                </a>
                <button
                  type="button"
                  onClick={onOpenCustomizer}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#C89347]/20 hover:bg-[#C89347]/30 border border-[#C89347]/40 rounded-md text-[#DFB26F] font-medium transition-colors whitespace-nowrap cursor-pointer"
                >
                  <Settings2 className="w-3.5 h-3.5" />
                  <span>Owner Customizer</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Social Placeholders & Concept Preview Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#FAF6F0]/60">
          <div className="space-y-1">
            <p>
              &copy; {new Date().getFullYear()} {config.businessName} (
              {config.suburb}, {config.state}). All rights reserved.
            </p>
            <p>
              Unofficial website concept preview created to demonstrate a
              custom digital presence for Cinnamon Edge. Menu items, opening
              hours, and prices in AUD are subject to restaurant confirmation.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href={config.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FAF6F0] transition-colors"
            >
              Google Business
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={config.uberEatsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FAF6F0] transition-colors"
            >
              Uber Eats
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={config.phoneHref}
              className="hover:text-[#FAF6F0] transition-colors"
            >
              Direct Phone
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
