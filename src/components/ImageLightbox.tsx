"use client";

import { useCallback, useEffect } from "react";
import Modal from "./Modal";

interface ImageLightboxProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  open: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function ImageLightbox({
  images,
  currentIndex,
  open,
  onClose,
  onPrev,
  onNext,
}: ImageLightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onPrev, onNext]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [open, handleKeyDown]);

  if (!open || images.length === 0) return null;

  const current = images[currentIndex];

  return (
    <Modal open={open} onClose={onClose}>
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors z-10"
        aria-label="Close lightbox"
      >
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={current.src}
        alt={current.alt}
        className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg"
      />

      {/* Counter */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Previous arrow */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
          aria-label="Previous image"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Next arrow */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
          aria-label="Next image"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </Modal>
  );
}
