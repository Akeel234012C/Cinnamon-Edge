'use client';

import React, { useEffect } from 'react';
import {
  CalendarCheck,
  ExternalLink,
  MapPin,
  Phone,
  Settings2,
  Users,
  Utensils,
  X,
} from 'lucide-react';
import {
  RestaurantConfig,
  hasExternalBookingPlatform,
} from '@/lib/restaurant-data';

interface ReservationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: RestaurantConfig;
  onOpenOwnerCustomizer: () => void;
}

export default function ReservationsModal({
  isOpen,
  onClose,
  config,
  onOpenOwnerCustomizer,
}: ReservationsModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const hasBookingLink = hasExternalBookingPlatform(config.bookingPlatformUrl);

  const steps = [
    {
      step: '01',
      title: 'Casual Café & Walk-In Dining',
      description:
        'Joining us for coffee, short eats, or a casual meal? Walk-ins are always welcome at our Creek Road dining room.',
      icon: Utensils,
    },
    {
      step: '02',
      title: 'Table Bookings & Group Reservations',
      description: `To reserve a table ahead of time or arrange seating for families and groups, call our team directly on ${config.phoneDisplay}.`,
      icon: Phone,
    },
    {
      step: '03',
      title: 'Special Gatherings & Function Catering',
      description:
        'Planning a birthday, celebration, or private group meal? Speak with us to tailor a Sri Lankan banquet or hopper & kottu spread.',
      icon: Users,
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservations-modal-title"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 md:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#FAF6F0] text-[#1C1D1A] border border-[#163024]/20 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 sm:px-8 sm:py-6 bg-[#163024] text-[#FAF6F0] flex items-start justify-between gap-4 border-b border-[#C89347]/25">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-[#DFB26F] mb-1.5">
              <span>Table Bookings &amp; Enquiries</span>
              <span aria-hidden="true">·</span>
              <span>Mount Gravatt East</span>
            </div>
            <h2
              id="reservations-modal-title"
              className="font-display text-2xl sm:text-3xl font-semibold text-[#FAF6F0]"
            >
              Reservations at Cinnamon Edge
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close reservations modal"
            className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 text-[#FAF6F0] flex items-center justify-center transition-colors shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm sm:text-base text-[#3E413B] leading-relaxed">
            We look forward to welcoming you to{' '}
            <strong className="font-semibold text-[#163024]">
              {config.businessName}
            </strong>
            . Here is how table reservations and dining enquiries work at our
            Mount Gravatt East restaurant:
          </p>

          {/* 3-Step Reservation Process */}
          <div className="space-y-3.5">
            {steps.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.step}
                  className="p-4 sm:p-5 bg-[#F3ECE1] rounded-xl border border-[#163024]/12 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#163024] text-[#DFB26F] flex items-center justify-center shrink-0 mt-0.5">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono-num text-xs font-semibold text-[#7A3E24]">
                        {item.step}.
                      </span>
                      <h3 className="font-display text-lg sm:text-xl font-semibold text-[#163024]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#3E413B] leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Location & Opening Hours Summary */}
          <div className="p-4 rounded-xl bg-white border border-[#163024]/12 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-start gap-2.5 text-[#2C2E2A]">
              <MapPin className="w-4 h-4 text-[#7A3E24] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#163024]">
                  {config.streetAddress}, {config.suburb} {config.state}{' '}
                  {config.postcode}
                </span>
                <p className="text-xs text-[#5B5E57] mt-0.5">
                  {config.openingHoursText}
                </p>
              </div>
            </div>

            <a
              href={config.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#7A3E24] hover:underline whitespace-nowrap shrink-0"
            >
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Primary Actions: External Booking Platform (if configured) + Direct Phone Call */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {hasBookingLink ? (
              <a
                href={config.bookingPlatformUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider text-[#12261D] bg-[#C89347] hover:bg-[#D8A559] rounded-md transition-colors whitespace-nowrap"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book via Online Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : null}

            <a
              href={config.phoneHref}
              className={`flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider rounded-md transition-colors whitespace-nowrap ${
                hasBookingLink
                  ? 'text-[#FAF6F0] bg-[#163024] hover:bg-[#214534]'
                  : 'text-[#12261D] bg-[#C89347] hover:bg-[#D8A559]'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>Call to Reserve: {config.phoneDisplay}</span>
            </a>
          </div>

          {/* Footer Bar inside Modal: Uber Eats & Owner Booking Platform Link Config */}
          <div className="pt-4 border-t border-[#163024]/12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#5B5E57]">
            <div className="flex items-center gap-2">
              <span>Prefer takeaway or delivery?</span>
              <a
                href={config.uberEatsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#163024] hover:text-[#7A3E24] underline underline-offset-4"
              >
                Order on Uber Eats
              </a>
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenOwnerCustomizer();
              }}
              className="inline-flex items-center gap-1.5 font-semibold text-[#7A3E24] hover:text-[#163024] transition-colors cursor-pointer"
            >
              <Settings2 className="w-3.5 h-3.5" />
              <span>
                {hasBookingLink
                  ? 'Edit Booking Platform URL'
                  : 'Owner: Link Booking Platform'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
