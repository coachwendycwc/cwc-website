import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book a Discovery Call — Individuals | Coaching Women of Color",
  description:
    "Schedule a 30-minute discovery call with Wendy Perdomo to explore executive coaching for your personal and professional growth.",
  robots: { index: false, follow: false },
};

export default function IndividualsSchedulePage() {
  const motionLink =
    "https://app.usemotion.com/meet/wendy-perdomo/individuals";
  const accent = "#3EBCE8";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0D0D] via-[#1A1A2E] to-[#0D0D0D] flex flex-col">
      <header className="relative z-10 px-6 md:px-10 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Coaching Women of Color homepage"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.webp"
            alt="Coaching Women of Color"
            className="h-10 md:h-12 w-auto brightness-0 invert"
          />
        </Link>
        <Link
          href="/"
          className="text-sm text-white/50 hover:text-white/80 transition-colors flex items-center gap-1.5"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to site
        </Link>
      </header>

      <main id="main-content" className="flex-1 flex flex-col items-center justify-center px-6 md:px-10">
        <div className="relative max-w-md w-full text-center">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#3EBCE8]/10 rounded-full blur-[120px]" />

          <div className="relative z-10">
            <div className="mb-6">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-2 ring-[#3EBCE8]/40 ring-offset-4 ring-offset-[#0D0D0D] mx-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/wendy-about.jpg"
                  alt="Wendy Perdomo"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 10%" }}
                />
              </div>
            </div>

            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: accent }}>
              For Individuals
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-white leading-tight">
              Book a Discovery Call
            </h1>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
              Take the first step toward the leadership transformation you deserve.
              Let&apos;s explore how executive coaching can accelerate your growth.
            </p>

            <div className="mt-8 bg-white/[0.06] backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${accent}20`, color: accent }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-white font-medium text-sm">
                    30-Minute Discovery Call
                  </p>
                  <p className="text-gray-500 text-xs">
                    Virtual &middot; Complimentary
                  </p>
                </div>
              </div>

              <ul className="space-y-2.5 mb-6 text-left">
                {[
                  "Discuss your leadership goals",
                  "Explore executive coaching options",
                  "Determine the right program for you",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                    <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke={accent}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={motionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 px-6 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: accent }}
              >
                Select a Time
              </a>
            </div>

            <p className="mt-6 text-gray-500 text-xs">
              Prefer to reach out directly?{" "}
              <a
                href="mailto:wendy@coachingwomenofcolor.com"
                className="transition-colors"
                style={{ color: accent }}
              >
                Email Wendy
              </a>
            </p>
          </div>
        </div>
      </main>

      <footer className="relative z-10 px-6 md:px-10 py-6 text-center border-t border-white/10">
        <p className="text-xs text-white/30">
          &copy; {new Date().getFullYear()} Coaching Women of Color
          <sup className="text-[7px]">&reg;</sup>. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
