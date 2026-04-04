"use client";

import { useState, useRef, useEffect } from "react"; // useState kept for videoError
import Link from "next/link";
import { siteConfig } from "@/config";

interface VideoHeroProps {
  /** Path to video file relative to public/ (e.g., "videos/wendy-keynote.mp4") */
  videoSrc: string;
  /** Fallback image shown while video loads or if video fails */
  posterSrc?: string;
  /** Main headline - first line */
  headlineTop?: string;
  /** Main headline - gradient line */
  headlineGradient?: string;
  /** Subheadline text */
  subheadline?: string;
  /** Primary CTA label */
  ctaLabel?: string;
  /** Primary CTA href */
  ctaHref?: string;
  /** Secondary CTA label */
  secondaryCtaLabel?: string;
  /** Secondary CTA href */
  secondaryCtaHref?: string;
  /** Whether secondary CTA opens in new tab */
  secondaryCtaExternal?: boolean;
  /** Optional small link below CTAs */
  footerLink?: { label: string; href: string };
  /** Dark overlay opacity (0-1). Default 0.55 for readability */
  overlayOpacity?: number;
}

export default function VideoHero({
  videoSrc,
  posterSrc,
  headlineTop = "Invest in",
  headlineGradient = "your leaders.",
  subheadline = "Invest in the leaders who are already transforming your organization—through executive coaching, keynotes, workshops, and strategic retreats.",
  ctaLabel = "Request a Proposal",
  ctaHref = "/contact",
  secondaryCtaLabel = "Download Capabilities Brief",
  secondaryCtaHref,
  secondaryCtaExternal = true,
  footerLink,
  overlayOpacity = 0.55,
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleError = () => setVideoError(true);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("error", handleError);
    };
  }, []);

  const resolvedSecondaryHref =
    secondaryCtaHref ?? `${siteConfig.basePath}/cwc-capabilities-statement-v2.html`;

  return (
    <section className="video-hero min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Video Background */}
      {!videoError && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src={`${siteConfig.basePath}/${videoSrc}`} type="video/mp4" />
        </video>
      )}


      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
        aria-hidden="true"
      />

      {/* Subtle gradient overlay - bottom fade for depth */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container-wide relative z-10 py-20 lg:py-32">
        <div className="max-w-4xl">
          {/* Headline */}
          <h1 className="video-hero-headline text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight text-white leading-[1.1]">
            {headlineTop}
            <br />
            <span className="video-hero-gradient">{headlineGradient}</span>
          </h1>

          {/* Subheadline */}
          <p className="video-hero-subheadline mt-8 text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed">
            {subheadline}
          </p>

          {/* CTAs */}
          <div className="video-hero-ctas mt-12 flex flex-col sm:flex-row gap-4">
            <Link href={ctaHref} className="btn-primary">
              {ctaLabel}
            </Link>
            {secondaryCtaExternal ? (
              <a
                href={resolvedSecondaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-light"
              >
                {secondaryCtaLabel}
              </a>
            ) : (
              <Link href={resolvedSecondaryHref} className="btn-secondary-light">
                {secondaryCtaLabel}
              </Link>
            )}
          </div>

          {/* Footer link */}
          {footerLink && (
            <div className="mt-4">
              <Link
                href={footerLink.href}
                className="text-sm text-white/60 hover:text-[#3EBCE8] transition-colors"
              >
                {footerLink.label}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
