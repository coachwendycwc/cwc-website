"use client";

import { useRef, useState } from "react";
import { siteConfig } from "@/config";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const MAX_QUOTE_LENGTH = 200;

function TestimonialCard({
  testimonial,
  isExpanded,
  onToggle,
}: {
  testimonial: Testimonial;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const isLong = testimonial.quote.length > MAX_QUOTE_LENGTH;
  const displayQuote =
    isExpanded || !isLong
      ? testimonial.quote
      : testimonial.quote.slice(0, MAX_QUOTE_LENGTH).trim() + "...";

  return (
    <div className="card flex-shrink-0 w-[400px] flex flex-col">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-[#3EBCE8]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <blockquote className="text-lg text-[#404040] leading-relaxed flex-grow">
        &ldquo;{displayQuote}&rdquo;
        {isLong && (
          <button
            onClick={onToggle}
            className="text-[#3EBCE8] hover:text-[#1A9FCC] ml-1 font-medium"
          >
            {isExpanded ? "Show less" : "Read more"}
          </button>
        )}
      </blockquote>
      <div className="mt-6 pt-6 border-t border-[#E5E5E5] flex items-center gap-4">
        {testimonial.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${siteConfig.basePath}/images/${testimonial.image}`}
            alt={testimonial.author}
            className="w-20 h-20 rounded-full object-cover"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-[#3EBCE8] flex items-center justify-center text-white font-semibold text-xl">
            {testimonial.author
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        )}
        <div>
          <div className="font-semibold text-[#1A1A1A]">{testimonial.author}</div>
          <div className="text-sm text-[#737373]">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 420; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="relative">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors -ml-6"
        aria-label="Previous testimonial"
      >
        <svg className="w-6 h-6 text-[#1A1A1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors -mr-6"
        aria-label="Next testimonial"
      >
        <svg className="w-6 h-6 text-[#1A1A1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex items-stretch gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-2 py-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
            isExpanded={expandedIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
}
