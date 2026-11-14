'use client';

import React from 'react';
import {
  Clock,
  ExternalLink,
  MapPin,
  Navigation,
  Phone,
  Settings2,
  Star,
} from 'lucide-react';
import { RestaurantConfig } from '@/lib/restaurant-data';

interface CustomerAndLocationProps {
  config: RestaurantConfig;
  onOpenCustomizer: () => void;
}

export default function CustomerAndLocation({
  config,
  onOpenCustomizer,
}: CustomerAndLocationProps) {
  return (
    <>
      {/* SECTION 8 – CUSTOMER EXPERIENCE (Verified Google Reviews Link Only — Zero Fake Testimonials) */}
      <section className="py-16 md:py-20 bg-[#FAF6F0] border-b border-[#163024]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-8 md:p-12 bg-[#F3ECE1] rounded-2xl border border-[#163024]/12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-[#7A3E24] mb-3">
                <span>Customer Experience</span>
                <span aria-hidden="true">·</span>
                <span>{config.googleRatingDisplay}</span>
              </div>

              <h2
                className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#163024] leading-[1.15] mb-3"
                style={{ textWrap: 'balance' }}
              >
                Read Verified Guest Feedback on Google
              </h2>

              <p className="text-sm md:text-base text-[#3E413B] leading-relaxed">
                We value genuine guest feedback from our Brisbane community.
                Rather than displaying placeholder testimonials, we invite you
                to read real, verified diner reviews or share your own dining
                experience directly on our official Google Maps listing.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={config.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#FAF6F0] bg-[#163024] hover:bg-[#214534] rounded-md transition-colors whitespace-nowrap"
              >
                <Star className="w-4 h-4 text-[#DFB26F]" />
                <span>View Google Reviews</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <button
                type="button"
                onClick={onOpenCustomizer}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-semibold text-[#163024] bg-[#FAF6F0] hover:bg-white border border-[#163024]/20 rounded-md transition-colors whitespace-nowrap cursor-pointer"
              >
                <Settings2 className="w-3.5 h-3.5 text-[#7A3E24]" />
                <span>Edit Review Link</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 – LOCATION & CONTACT */}
      <section
        id="contact"
        className="py-20 md:py-28 bg-[#FAF6F0] border-b border-[#163024]/10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-[#7A3E24] mb-3">
              <span>Location &amp; Contact</span>
              <span aria-hidden="true">·</span>
              <span>Mount Gravatt East, QLD 4122</span>
            </div>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#163024] leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              Come Visit Us
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Column: Address, Phone, Opening Hours & CTAs */}
            <div className="lg:col-span-5 bg-[#F3ECE1] rounded-xl p-8 border border-[#163024]/12 flex flex-col justify-between">
              <div className="space-y-8">
                {/* Address Block */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#163024] text-[#DFB26F] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[#163024]">
                      Address
                    </h3>
                    <address className="not-italic text-sm md:text-base text-[#2C2E2A] leading-relaxed mt-1">
                      <strong className="font-semibold text-[#163024] block">
                        {config.businessName}
                      </strong>
                      <span className="block">{config.streetAddress}</span>
                      <span className="block">
                        {config.suburb} {config.state} {config.postcode}
                      </span>
                      <span className="block">{config.country}</span>
                    </address>
                  </div>
                </div>

                {/* Phone Block */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#163024] text-[#DFB26F] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[#163024]">
                      Phone
                    </h3>
                    <p className="text-sm text-[#4A4D46] mt-0.5 mb-1">
                      Call us for takeaway, catering, or table enquiries:
                    </p>
                    <a
                      href={config.phoneHref}
                      className="font-mono-num text-base md:text-lg font-semibold text-[#7A3E24] hover:text-[#163024] transition-colors"
                    >
                      {config.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Opening Hours Block (Editable, defaults to required message) */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#163024] text-[#DFB26F] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display text-xl font-semibold text-[#163024]">
                        Opening Hours
                      </h3>
                      <button
                        type="button"
                        onClick={onOpenCustomizer}
                        className="text-xs font-semibold text-[#7A3E24] hover:underline cursor-pointer"
                      >
                        Edit Hours
                      </button>
                    </div>
                    <p className="text-sm md:text-base text-[#2C2E2A] leading-relaxed mt-1 whitespace-pre-line">
                      {config.openingHoursText}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons: GET DIRECTIONS & CALL US */}
              <div className="mt-10 pt-6 border-t border-[#163024]/12 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={config.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold tracking-[0.1em] text-[#FAF6F0] bg-[#163024] hover:bg-[#214534] rounded-md transition-colors whitespace-nowrap"
                >
                  <Navigation className="w-4 h-4 text-[#DFB26F]" />
                  <span>GET DIRECTIONS</span>
                </a>

                <a
                  href={config.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold tracking-[0.1em] text-[#12261D] bg-[#C89347] hover:bg-[#D8A559] rounded-md transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL US</span>
                </a>
              </div>
            </div>

            {/* Right Column: Embedded Google Map */}
            <div className="lg:col-span-7 rounded-xl overflow-hidden border border-[#163024]/15 bg-[#E7DEC9] min-h-[380px] lg:min-h-full flex flex-col">
              <iframe
                title="Cinnamon Edge Location on Google Maps — Shop 6/742 Creek Road, Mount Gravatt East QLD 4122"
                src={config.googleMapsEmbedUrl}
                className="w-full flex-1 min-h-[360px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="px-5 py-3 bg-[#163024] text-[#FAF6F0] flex flex-wrap items-center justify-between gap-4 text-xs">
                <span>
                  Shop 6/742 Creek Road, Mount Gravatt East, QLD 4122, Australia
                </span>
                <a
                  href={config.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#DFB26F] hover:underline whitespace-nowrap"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
