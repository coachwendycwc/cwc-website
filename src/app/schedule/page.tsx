import Link from "next/link";

const bookingOptions = [
  {
    title: "For Organizations",
    description:
      "Explore workshops, leadership programs, speaking engagements, or consulting for your team.",
    bullets: [
      "30-minute discovery call",
      "Discuss your organization's needs",
      "Receive a customized proposal",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    accent: "#E91E8C",
    link: "https://app.usemotion.com/meet/wendy-perdomo/organizations",
  },
  {
    title: "For Individuals",
    description:
      "Explore executive coaching to accelerate your personal and professional growth.",
    bullets: [
      "30-minute discovery call",
      "Discuss your leadership goals",
      "Determine the right program for you",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    accent: "#3EBCE8",
    link: "https://app.usemotion.com/meet/wendy-perdomo/individuals",
  },
  {
    title: "Speaking & Events",
    description:
      "Book Wendy for a keynote, panel, workshop, or strategic retreat at your next event.",
    bullets: [
      "30-minute inquiry call",
      "Discuss event details & audience",
      "Explore topics & formats",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    accent: "#8B7BB5",
    link: "https://app.usemotion.com/meet/wendy-perdomo/speaking-events",
  },
  {
    title: "Connect With Me",
    description:
      "Partnerships, podcasts, collaborations, or just want to connect? Let's find time to talk.",
    bullets: [
      "Partnerships & collaborations",
      "Podcast & media inquiries",
      "General conversations",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    accent: "#C4D82E",
    link: "/schedule/check-in/",
    internal: true,
  },
];

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0D0D] via-[#1A1A2E] to-[#0D0D0D] flex flex-col">
      {/* Minimal branded header */}
      <header className="relative z-10 px-6 md:px-10 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" aria-label="Coaching Women of Color homepage">
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

      <main id="main-content" className="flex-1 flex flex-col">
        {/* Hero */}
        <section className="relative px-6 md:px-10 pt-4 pb-12 md:pt-8 md:pb-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E91E8C]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#3EBCE8]/10 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Wendy's Photo */}
            <div className="mb-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-2 ring-[#E91E8C]/40 ring-offset-4 ring-offset-[#0D0D0D] mx-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/wendy-about.jpg"
                  alt="Wendy Perdomo"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 10%" }}
                />
              </div>
            </div>

            <p className="text-[#E91E8C] text-sm font-semibold tracking-widest uppercase mb-2">
              Book a Consultation
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              Let&apos;s Connect
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
              Schedule a complimentary 30-minute call with Wendy to discuss your goals
              and explore how we can work together.
            </p>
            <div className="mt-4 flex flex-wrap gap-6 justify-center text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#3EBCE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Free 30-minute call
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#3EBCE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No obligation
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#3EBCE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Virtual or in-person
              </span>
            </div>
          </div>
        </section>

        {/* Booking Options */}
        <section className="px-6 md:px-10 pb-16 md:pb-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                How Can We Help?
              </h2>
              <p className="mt-3 text-gray-400 max-w-lg mx-auto">
                Select the option that best describes your needs and book a time that works for you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bookingOptions.map((option) => (
                <div
                  key={option.title}
                  className="bg-white/[0.06] backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300 flex flex-col"
                >
                  {/* Accent strip */}
                  <div
                    className="h-1.5"
                    style={{ backgroundColor: option.accent }}
                  />

                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{
                        backgroundColor: `${option.accent}20`,
                        color: option.accent,
                      }}
                    >
                      {option.icon}
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-2">
                      {option.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">
                      {option.description}
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-2 mb-8 flex-1">
                      {option.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2 text-sm text-gray-300"
                        >
                          <svg
                            className="w-4 h-4 mt-0.5 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke={option.accent}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    {option.internal ? (
                      <Link
                        href={option.link}
                        className="block w-full text-center py-3 px-6 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-90"
                        style={{ backgroundColor: option.accent }}
                      >
                        Schedule a Call
                      </Link>
                    ) : (
                      <a
                        href={option.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center py-3 px-6 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-90"
                        style={{ backgroundColor: option.accent }}
                      >
                        Schedule a Call
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Alternative Contact */}
        <section className="px-6 md:px-10 pb-12 md:pb-16">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-gray-400 text-sm">
              Prefer to reach out directly?{" "}
              <a
                href="mailto:wendy@coachingwomenofcolor.com"
                className="text-[#3EBCE8] hover:text-[#3EBCE8]/80 transition-colors"
              >
                Email Wendy
              </a>
              {" "}or{" "}
              <Link
                href="/contact/"
                className="text-[#3EBCE8] hover:text-[#3EBCE8]/80 transition-colors"
              >
                send a message
              </Link>
            </p>
          </div>
        </section>
      </main>

      {/* Minimal footer */}
      <footer className="relative z-10 px-6 md:px-10 py-6 text-center border-t border-white/10">
        <p className="text-xs text-white/30">
          &copy; {new Date().getFullYear()} Coaching Women of Color<sup className="text-[7px]">&reg;</sup>. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
