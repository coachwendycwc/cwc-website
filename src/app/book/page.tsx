import Link from "next/link";
import { Header, Footer } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Schedule a free discovery call with Wendy Perdomo. Discuss your coaching goals, leadership challenges, and explore the right program for you or your organization.",
};

export default function BookPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#E8F8FD] to-white">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                Book a <span className="text-gradient">Consultation</span>
              </h1>
              <p className="mt-6 text-xl text-[#525252] max-w-2xl mx-auto leading-relaxed">
                Take the first step. Schedule a free 30-minute discovery call to discuss
                your goals and explore how we can work together.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Options */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* For Organizations */}
              <div className="card-bordered">
                <div className="w-12 h-12 bg-[#E8F8FD] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#3EBCE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h2 className="heading-card">For Organizations</h2>
                <p className="text-[#737373] mt-3 leading-relaxed">
                  Discuss workshops, leadership programs, speaking engagements, or consulting
                  services for your organization.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-[#525252]">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#3EBCE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    30-minute discovery call
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#3EBCE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Discuss your organization&apos;s needs
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#3EBCE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Get a customized proposal
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    href="https://calendly.com/coachingwomenofcolor/organization"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block"
                  >
                    Schedule Organization Call
                  </a>
                </div>
              </div>

              {/* For Individuals */}
              <div className="card-bordered">
                <div className="w-12 h-12 bg-[#E8F8FD] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#3EBCE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="heading-card">For Individuals</h2>
                <p className="text-[#737373] mt-3 leading-relaxed">
                  Explore executive coaching programs to accelerate your
                  personal and professional growth.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-[#525252]">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#3EBCE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    30-minute chemistry call
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#3EBCE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Discuss your goals
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#3EBCE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Determine if we&apos;re a fit
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    href="https://calendly.com/coachingwomenofcolor/individual"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block"
                  >
                    Schedule Coaching Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Contact */}
        <section className="section gradient-subtle">
          <div className="container-tight text-center">
            <h2 className="heading-section">Prefer to reach out directly?</h2>
            <p className="body-large mt-4">
              No problem. Send us a message and we&apos;ll get back to you within 24 hours.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
