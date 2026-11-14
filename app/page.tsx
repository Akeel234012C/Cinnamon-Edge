'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import IntroductionSection from '@/components/IntroductionSection';
import SignatureFavourites from '@/components/SignatureFavourites';
import InteractiveMenu from '@/components/InteractiveMenu';
import FoodGallery from '@/components/FoodGallery';
import WhyCinnamonEdge from '@/components/WhyCinnamonEdge';
import CustomerAndLocation from '@/components/CustomerAndLocation';
import OwnerCustomizerModal from '@/components/OwnerCustomizerModal';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/BackToTopButton';
import {
  DEFAULT_RESTAURANT_CONFIG,
  MenuCategory,
  MenuItem,
  RestaurantConfig,
  getCombinedMenuItems,
} from '@/lib/restaurant-data';

const STORAGE_KEY = 'cinnamon_edge_owner_config_v1';

export default function CinnamonEdgePage() {
  const [config, setConfig] = useState<RestaurantConfig>(() => {
    if (typeof window === 'undefined') {
      return DEFAULT_RESTAURANT_CONFIG;
    }
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<RestaurantConfig>;
        return {
          ...DEFAULT_RESTAURANT_CONFIG,
          ...parsed,
          customMenuItems: Array.isArray(parsed.customMenuItems)
            ? parsed.customMenuItems
            : DEFAULT_RESTAURANT_CONFIG.customMenuItems,
        };
      }
    } catch {
      // Ignore storage errors in restricted environments
    }
    return DEFAULT_RESTAURANT_CONFIG;
  });
  const [activeMenuCategory, setActiveMenuCategory] =
    useState<MenuCategory>('Starters');
  const [customizerOpen, setCustomizerOpen] = useState(false);

  const persistConfig = (nextConfig: RestaurantConfig) => {
    setConfig(nextConfig);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextConfig));
    } catch {
      // Ignore storage errors
    }
  };

  const handleSaveConfig = (updated: Partial<RestaurantConfig>) => {
    const nextConfig: RestaurantConfig = {
      ...config,
      ...updated,
    };
    persistConfig(nextConfig);
  };

  const handleResetConfig = () => {
    persistConfig(DEFAULT_RESTAURANT_CONFIG);
  };

  const handleAddCustomMenuItem = (item: MenuItem) => {
    const nextConfig: RestaurantConfig = {
      ...config,
      customMenuItems: [...config.customMenuItems, item],
    };
    persistConfig(nextConfig);
  };

  const handleRemoveCustomMenuItem = (id: string) => {
    const nextConfig: RestaurantConfig = {
      ...config,
      customMenuItems: config.customMenuItems.filter((i) => i.id !== id),
    };
    persistConfig(nextConfig);
  };

  const allMenuItems = getCombinedMenuItems(config.customMenuItems);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#1C1D1A]">
      <Navbar uberEatsUrl={config.uberEatsUrl} />

      <main className="flex-1">
        {/* SECTION 1 – PREMIUM HERO */}
        <HeroSection />

        {/* SECTION 2 – INTRODUCTION */}
        <IntroductionSection />

        {/* SECTION 3 – SIGNATURE FOOD */}
        <SignatureFavourites onSelectCategory={setActiveMenuCategory} />

        {/* SECTION 4 – OUR MENU */}
        <InteractiveMenu
          activeCategory={activeMenuCategory}
          onSelectCategory={setActiveMenuCategory}
          allMenuItems={allMenuItems}
          onAddCustomMenuItem={handleAddCustomMenuItem}
          onRemoveCustomMenuItem={handleRemoveCustomMenuItem}
          phoneHref={config.phoneHref}
          phoneDisplay={config.phoneDisplay}
          uberEatsUrl={config.uberEatsUrl}
        />

        {/* SECTION 5 – FOOD GALLERY */}
        <FoodGallery />

        {/* SECTION 6 – WHY CINNAMON EDGE & SECTION 7 – CATERING & FUNCTIONS */}
        <WhyCinnamonEdge
          phoneHref={config.phoneHref}
          phoneDisplay={config.phoneDisplay}
        />

        {/* SECTION 8 – CUSTOMER EXPERIENCE & SECTION 9 – LOCATION & CONTACT */}
        <CustomerAndLocation
          config={config}
          onOpenCustomizer={() => setCustomizerOpen(true)}
        />
      </main>

      {/* SECTION 10 – PREMIUM FOOTER */}
      <Footer
        config={config}
        onSelectCategory={setActiveMenuCategory}
        onOpenCustomizer={() => setCustomizerOpen(true)}
      />

      {/* Floating Back to Top Action Button */}
      <BackToTopButton />

      {/* Owner Customizer Modal for Opening Hours, Uber Eats URL & Google Reviews */}
      <OwnerCustomizerModal
        isOpen={customizerOpen}
        onClose={() => setCustomizerOpen(false)}
        config={config}
        onSaveConfig={handleSaveConfig}
        onResetConfig={handleResetConfig}
      />
    </div>
  );
}
