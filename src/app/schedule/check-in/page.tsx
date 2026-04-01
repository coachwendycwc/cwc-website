import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book a Call | Coaching Women of Color",
  description:
    "Schedule a 30-minute call with Wendy Perdomo, Founder of Coaching Women of Color.",
  robots: { index: false, follow: false },
};

export default function CheckInPage() {
  const motionLink =
    "https://app.usemotion.com/meet/wendy-perdomo/check-in";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0D0D] via-[#1A1A2E] to-[#0D0D0D] flex flex-col">
      {/* Minimal branded header */}
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
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to site
        </Link>
      </header>

      <main id="main-content" className="flex-1 flex flex-col items-center justify-center px-6 md:px-10">
        <div className="relative max-w-md w-full text-center">
          {/* Background glow */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#C4D82E]/10 rounded-full blur-[120px]" />

          <div className="relative z-10">
            {/* Wendy's photo */}
            <div className="mb-6">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-2 ring-[#C4D82E]/40 ring-offset-4 ring-offset-[#0D0D0D] mx-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/wendy-about.jpg"
                  alt="Wendy Perdomo"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 10%" }}
                />
              </div>
            </div>

            <p className="text-[#C4D82E] text-xs font-semibold tracking-widest uppercase mb-2">
              Coaching Women of Color&reg;
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-white leading-tight">
              Book a Call with Wendy
            </h1>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
              Select a time that works for you and let&apos;s connect.
            </p>

            {/* Card */}
            <div className="mt-8 bg-white/[0.06] backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#C4D82E]/20 flex items-center justify-center text-[#C4D82E]">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-white font-medium text-sm">
                    30-Minute Call
                  </p>
                  <p className="text-gray-500 text-xs">
                    Virtual &middot; No obligation
                  </p>
                </div>
              </div>

              <a
                href={motionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 px-6 rounded-lg bg-[#C4D82E] text-white text-sm font-semibold transition-opacity hover:opacity-90"
              >
                Select a Time
              </a>
            </div>

            {/* Contact fallback */}
            <p className="mt-6 text-gray-500 text-xs">
              Need something else?{" "}
              <a
                href="mailto:wendy@coachingwomenofcolor.com"
                className="text-[#C4D82E] hover:text-[#C4D82E]/80 transition-colors"
              >
                Email Wendy
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="relative z-10 px-6 md:px-10 py-6 text-center border-t border-white/10">
        <p className="text-xs text-white/30">
          &copy; {new Date().getFullYear()} Coaching Women of Color
          <sup className="text-[7px]">&reg;</sup>. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
