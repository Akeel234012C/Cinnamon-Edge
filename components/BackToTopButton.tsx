'use client';

import React, { useSyncExternalStore } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';

const SCROLL_THRESHOLD = 350;

function subscribeToScroll(callback: () => void) {
  window.addEventListener('scroll', callback, { passive: true });
  return () => window.removeEventListener('scroll', callback);
}

function getScrollVisibilitySnapshot() {
  return window.scrollY > SCROLL_THRESHOLD;
}

function getServerSnapshot() {
  return false;
}

export default function BackToTopButton() {
  const isVisible = useSyncExternalStore(
    subscribeToScroll,
    getScrollVisibilitySnapshot,
    getServerSnapshot
  );

  const handleScrollToTop = () => {
    const heroEl = document.getElementById('top');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="back-to-top-fab"
          type="button"
          onClick={handleScrollToTop}
          aria-label="Back to top"
          title="Back to top"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#163024] text-[#FAF6F0] border border-[#C89347]/50 shadow-lg hover:bg-[#C89347] hover:text-[#12261D] hover:border-[#C89347] transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C89347]"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
