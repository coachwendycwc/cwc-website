import Link from "next/link";
import { Header, Footer, Breadcrumbs } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Coaching — RESET Method®",
  description:
    "The RESET Method® closes performance gaps by coaching both the leader and the team member. A structured, dual-engagement framework that drives accountability and real behavior change.",
  alternates: {
    canonical: "https://coachingwomenofcolor.com/services/performance-coaching/",
  },
};

const outcomes = [
  "A team member who takes full ownership of their performance",
  "A leader who gains confidence in managing underperformance",
  "Measurable shifts in behavior, communication, and accountability",
  "Alignment between leader and team member that closes performance gaps",
  "Talent retained instead of replaced—saving your organization time and cost",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Performance Coaching \u2014 RESET Method\u2122",
  description: "The RESET Method\u2122 closes performance gaps by coaching both the leader and the team member. A structured, dual-engagement framework that drives accountability and real behavior change.",
  provider: {
    "@type": "Organization",
    name: "Coaching Women of Color",
    url: "https://coachingwomenofcolor.com",
  },
  url: "https://coachingwomenofcolor.com/services/performance-coaching/",
};

export default function PerformanceCoachingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#FCE8F3] to-white">
          <div className="container-wide">
            <div className="max-w-3xl">
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/for-organizations" }, { label: "Performance Coaching" }]} />
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                Performance Coaching
              </h1>
              <p className="mt-2 text-xl font-medium text-[#E91E8C]">
                The RESET Method®
              </p>
              <p className="mt-6 text-xl text-[#525252] leading-relaxed">
                A structured, dual-engagement coaching framework that closes performance gaps—without defaulting to avoidance or escalation.
              </p>
              <div className="mt-10">
                <Link href="/contact" className="btn-primary">
                  Learn About the RESET Method
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
                  Underperformance doesn&apos;t fix itself—and most leaders avoid the conversation.
                </h2>
                <p className="mt-6 text-lg text-[#525252] leading-relaxed">
                  When a team member is underperforming, leaders often default to avoidance, vague feedback, or escalation to HR. None of these close the gap. The real issue usually lives in the space between the leader and the team member—misaligned expectations, unspoken frustrations, and blind spots on both sides.
                </p>
                <p className="mt-4 text-lg text-[#525252] leading-relaxed">
                  The RESET Method® doesn&apos;t choose sides—it closes gaps. By engaging both the leader and the team member from the start, this framework surfaces blind spots, builds shared understanding, and produces real, lasting shifts in how people show up and deliver.
                </p>
              </div>
              <div className="bg-[#F5F5F5] rounded-3xl p-8 lg:p-12">
                <p className="text-sm font-medium text-[#1A1A1A] uppercase tracking-widest mb-6">
                  What Leaders Gain
                </p>
                <ul className="space-y-4">
                  {outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#E91E8C] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                { title: "Discovery & Assessment", description: "We begin with separate conversations with the leader and the team member to understand context, perspectives, and blind spots on both sides." },
                { title: "Parallel Coaching", description: "Both participants receive structured coaching—the leader on how to manage performance effectively, the team member on taking ownership and closing gaps." },
                { title: "Alignment & Outcome", description: "A mid-point checkpoint and comprehensive outcome summary ensure measurable shifts in behavior, communication, and accountability." },
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

        {/* Formats */}
        <section className="section bg-[#F5F5F5]">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                Engagement <span className="text-gradient">Details</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Virtual (Zoom)",
                "Dual-engagement model",
                "Mid-point checkpoint",
                "Comprehensive outcome summary",
              ].map((format) => (
                <div key={format} className="bg-white rounded-2xl p-6 text-center">
                  <p className="text-[#1A1A1A] font-medium">{format}</p>
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
              VP of HR, directors, and HR business partners supporting leaders who are navigating underperformance and need a structured, confidential coaching framework that drives accountability and real behavior change.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["People Managers", "Directors", "VPs", "HR Partners"].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-[#F5F5F5] text-[#525252] rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-[#1A1A1A] text-white">
          <div className="container-tight text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Close performance gaps. Retain your talent.
            </h2>
            <p className="mt-6 text-xl text-[#A3A3A3]">
              Let&apos;s discuss how the RESET Method® can transform your team dynamics.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn-primary">
                Learn About the RESET Method
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
