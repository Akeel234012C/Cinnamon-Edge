'use client';

import React, { useState } from 'react';
import { RotateCcw, Save, X } from 'lucide-react';
import { DEFAULT_RESTAURANT_CONFIG, RestaurantConfig } from '@/lib/restaurant-data';

interface OwnerCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: RestaurantConfig;
  onSaveConfig: (updated: Partial<RestaurantConfig>) => void;
  onResetConfig: () => void;
}

export default function OwnerCustomizerModal({
  isOpen,
  onClose,
  config,
  onSaveConfig,
  onResetConfig,
}: OwnerCustomizerModalProps) {
  const [openingHoursText, setOpeningHoursText] = useState(
    config.openingHoursText
  );
  const [uberEatsUrl, setUberEatsUrl] = useState(config.uberEatsUrl);
  const [googleReviewsUrl, setGoogleReviewsUrl] = useState(
    config.googleReviewsUrl
  );
  const [googleRatingDisplay, setGoogleRatingDisplay] = useState(
    config.googleRatingDisplay
  );
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleResetClick = () => {
    setOpeningHoursText(DEFAULT_RESTAURANT_CONFIG.openingHoursText);
    setUberEatsUrl(DEFAULT_RESTAURANT_CONFIG.uberEatsUrl);
    setGoogleReviewsUrl(DEFAULT_RESTAURANT_CONFIG.googleReviewsUrl);
    setGoogleRatingDisplay(DEFAULT_RESTAURANT_CONFIG.googleRatingDisplay);
    onResetConfig();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig({
      openingHoursText:
        openingHoursText.trim() ||
        'Please contact us for current opening hours.',
      uberEatsUrl: uberEatsUrl.trim() || 'https://www.ubereats.com/au',
      googleReviewsUrl:
        googleReviewsUrl.trim() || 'https://maps.app.goo.gl/ceQtifPvpuMjhWCP7',
      googleRatingDisplay:
        googleRatingDisplay.trim() ||
        'Verified Google Business Profile · Mount Gravatt East',
    });
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Restaurant Owner Settings & Content Customizer"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="max-w-lg w-full bg-[#FAF6F0] border border-[#163024]/20 rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 bg-[#163024] text-[#FAF6F0] flex items-center justify-between">
          <div>
            <p className="text-xs text-[#DFB26F] font-medium">
              Owner Preview &amp; Configuration
            </p>
            <h2 className="font-display text-2xl font-semibold">
              Customize Store Links &amp; Hours
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close owner settings"
            className="w-9 h-9 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#FAF6F0] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label
              htmlFor="owner-opening-hours"
              className="block text-xs font-semibold text-[#163024] mb-1.5"
            >
              Opening Hours Display
            </label>
            <textarea
              id="owner-opening-hours"
              rows={3}
              value={openingHoursText}
              onChange={(e) => setOpeningHoursText(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#163024]/25 rounded-md text-[#1C1D1A]"
              placeholder="Please contact us for current opening hours."
            />
            <p className="text-xs text-[#5B5E57] mt-1">
              Until confirmed by the restaurant, defaults to &ldquo;Please
              contact us for current opening hours.&rdquo;
            </p>
          </div>

          <div>
            <label
              htmlFor="owner-ubereats-url"
              className="block text-xs font-semibold text-[#163024] mb-1.5"
            >
              Verified Uber Eats Store URL
            </label>
            <input
              id="owner-ubereats-url"
              type="url"
              value={uberEatsUrl}
              onChange={(e) => setUberEatsUrl(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-white border border-[#163024]/25 rounded-md text-[#1C1D1A]"
            />
          </div>

          <div>
            <label
              htmlFor="owner-google-reviews-url"
              className="block text-xs font-semibold text-[#163024] mb-1.5"
            >
              Google Reviews URL
            </label>
            <input
              id="owner-google-reviews-url"
              type="url"
              value={googleReviewsUrl}
              onChange={(e) => setGoogleReviewsUrl(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-white border border-[#163024]/25 rounded-md text-[#1C1D1A]"
            />
          </div>

          <div>
            <label
              htmlFor="owner-google-rating-label"
              className="block text-xs font-semibold text-[#163024] mb-1.5"
            >
              Google Reviews Subtitle / Rating Label
            </label>
            <input
              id="owner-google-rating-label"
              type="text"
              value={googleRatingDisplay}
              onChange={(e) => setGoogleRatingDisplay(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-white border border-[#163024]/25 rounded-md text-[#1C1D1A]"
            />
          </div>

          {savedNotice && (
            <p
              role="status"
              className="text-xs font-semibold text-[#163024] bg-[#163024]/10 px-3 py-2 rounded-md"
            >
              Settings updated and saved to browser preview.
            </p>
          )}

          <div className="pt-3 border-t border-[#163024]/12 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleResetClick}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#7A3E24] hover:underline cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-[#3E413B] hover:text-[#163024] cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-[#FAF6F0] bg-[#163024] hover:bg-[#214534] rounded-md transition-colors cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
