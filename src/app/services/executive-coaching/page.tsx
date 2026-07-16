import Link from "next/link";
import { Header, Footer, Breadcrumbs } from "@/components";
import { siteConfig } from "@/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Coaching for Leaders",
  description:
    "1:1 high-impact coaching for senior leaders and high-potential talent. Build clarity, confidence, and executive presence with a strategic coaching partner.",
  alternates: {
    canonical: "https://coachingwomenofcolor.com/services/executive-coaching/",
  },
};

const outcomes = [
  "Clear leadership identity and decision-making confidence",
  "Stronger communication, influence, and executive presence",
  "Boundary-setting and sustainable performance",
  "Strategies to navigate bias, conflict, and high-stakes conversations",
  "A leadership approach that builds trust and drives results",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Executive Coaching for Leaders",
  description: "1:1 high-impact coaching for senior leaders and high-potential talent. Build clarity, confidence, and executive presence with a strategic coaching partner.",
  provider: {
    "@type": "Organization",
    name: "Coaching Women of Color",
    url: "https://coachingwomenofcolor.com",
  },
  url: "https://coachingwomenofcolor.com/services/executive-coaching/",
};

export default function ExecutiveCoachingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#E8F8FD] to-white">
          <div className="container-wide">
            <div className="max-w-3xl">
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/for-organizations" }, { label: "Executive Coaching" }]} />
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                Executive Coaching
              </h1>
              <p className="mt-6 text-xl text-[#525252] leading-relaxed">
                1:1 high-impact coaching for senior leaders and high-potential talent who need a confidential, strategic space to lead with clarity and confidence.
              </p>
              <div className="mt-10">
                <Link href="/contact" className="btn-primary">
                  Request a Coaching Proposal
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-medium text-[#14739C] uppercase tracking-widest mb-4">
                  The Challenge
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                  Leadership is lonely at the top.
                </h2>
                <p className="mt-6 text-lg text-[#525252] leading-relaxed">
                  Senior leaders face decisions that shape teams, cultures, and careers—often without a trusted space to think out loud. The pressure to perform, the weight of bias, and the complexity of organizational politics can erode confidence and clarity.
                </p>
                <p className="mt-4 text-lg text-[#525252] leading-relaxed">
                  You need more than advice. You need a strategic partner who understands the unique challenges you face.
                </p>
              </div>
              <div className="bg-[#F5F5F5] rounded-3xl p-8 lg:p-12">
                <p className="text-sm font-medium text-[#1A1A1A] uppercase tracking-widest mb-6">
                  What Leaders Gain
                </p>
                <ul className="space-y-4">
                  {outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#3EBCE8] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#525252]">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                How It <span className="text-gradient">Works</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Discovery", description: "We begin with a deep-dive conversation to understand your goals, challenges, and organizational context." },
                { title: "Engagement", description: "Regular coaching sessions tailored to your schedule, with real-time support between sessions." },
                { title: "Results", description: "Measurable growth in leadership effectiveness, with ongoing progress tracking and adjustment." },
              ].map((step, index) => (
                <div key={step.title} className="text-center">
                  <div className="w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-semibold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">{step.title}</h3>
                  <p className="text-[#737373] mt-2">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best For */}
        <section className="section bg-white">
          <div className="container-tight text-center">
            <p className="text-sm font-medium text-[#14739C] uppercase tracking-widest mb-4">
              Best For
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1A1A1A]">
              VP of HR and talent leaders investing in senior leaders and high-potential talent ready to lead with greater clarity, confidence, and impact.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["C-Suite Executives", "Vice Presidents", "Directors", "High-Potential Leaders", "Leaders in Transition"].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-[#F5F5F5] text-[#525252] rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <h2 className="heading-display text-center mb-12">
              What Clients <span className="text-gradient">Say</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "Wendy is an incredible coach and advocate for her clients. I worked with her for 6 months and found her guidance invaluable. She helped me grow as a professional and gave me tangible tools to use to better myself as a leader. I highly recommend working with Wendy, she is the absolute best!",
                  author: "Teal Inzunza",
                  role: "New York, NY",
                  image: "testimonial-teal.png",
                },
                {
                  quote: "Wendy is an incredible coach who understands women of color and helped me feel seen, heard, and understood. My experience with Wendy transformed coaching from a mere task on my to-do list into a nurturing experience that truly supported my growth. I highly recommend Wendy to anyone looking for a transformative coaching experience.",
                  author: "Stephanie Lopez",
                  role: "California",
                  image: "testimonial-stephanie.png",
                },
              ].map((t) => (
                <div key={t.author} className="bg-white rounded-2xl p-8 shadow-sm">
                  <blockquote className="text-[#525252] leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 pt-6 border-t border-[#E5E5E5] flex items-center gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${siteConfig.basePath}/images/${t.image}`}
                      alt={t.author}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-[#1A1A1A]">{t.author}</p>
                      <p className="text-sm text-[#737373]">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-[#1A1A1A] text-white">
          <div className="container-tight text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Ready to lead with clarity?
            </h2>
            <p className="mt-6 text-xl text-[#A3A3A3]">
              Let&apos;s explore how executive coaching can accelerate your leadership.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn-primary">
                Request a Coaching Proposal
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
