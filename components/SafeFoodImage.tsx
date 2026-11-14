'use client';

import React, { useState } from 'react';
import { Utensils } from 'lucide-react';

interface SafeFoodImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function SafeFoodImage({
  src,
  alt,
  className = '',
  priority = false,
}: SafeFoodImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#163024] via-[#224233] to-[#6E3B23] text-[#FAF6F0] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Utensils className="w-8 h-8 text-[#C89347] mb-3 opacity-90" />
        <span className="font-display text-lg tracking-wide text-[#FAF6F0]/90">
          {alt}
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
