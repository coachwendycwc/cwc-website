import Link from "next/link";
import { Header, Footer, Breadcrumbs } from "@/components";
import { siteConfig } from "@/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic Leadership & Board Retreats",
  description:
    "Facilitated retreats that align your leadership team, clarify strategic direction, and turn honest dialogue into actionable outcomes. Half-day or full-day, in-person or hybrid.",
  alternates: {
    canonical: "https://coachingwomenofcolor.com/services/strategic-retreats/",
  },
};

const outcomes = [
  "Aligned vision and shared priorities across leadership",
  "Strengthened trust, communication, and team cohesion",
  "Clear action plans with defined ownership and accountability",
  "Renewed energy and commitment to organizational goals",
  "Strategic clarity on critical decisions and direction",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Strategic Leadership & Board Retreats",
  description: "Facilitated retreats that align your leadership team, clarify strategic direction, and turn honest dialogue into actionable outcomes.",
  provider: {
    "@type": "Organization",
    name: "Coaching Women of Color",
    url: "https://coachingwomenofcolor.com",
  },
  url: "https://coachingwomenofcolor.com/services/strategic-retreats/",
};

export default function StrategicRetreatsPage() {
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
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/for-organizations" }, { label: "Strategic Retreats" }]} />
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                Strategic Leadership & Board Retreats
              </h1>
              <p className="mt-6 text-xl text-[#525252] leading-relaxed">
                Facilitated sessions that align your leadership team, clarify strategic direction, and turn honest dialogue into actionable outcomes.
              </p>
              <div className="mt-10">
                <Link href="/contact" className="btn-primary">
                  Request a Retreat Proposal
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
                  Leadership teams rarely get the space to think together.
                </h2>
                <p className="mt-6 text-lg text-[#525252] leading-relaxed">
                  Between meetings, deadlines, and competing priorities, executive teams and boards rarely have time for the deep, honest conversations that drive alignment and strategic clarity.
                </p>
                <p className="mt-4 text-lg text-[#525252] leading-relaxed">
                  Retreats create that space. With skilled facilitation, your team can address what matters most—whether that&apos;s navigating a transition, setting annual strategy, resolving tension, or strengthening board dynamics.
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

        {/* When to Consider */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                When to Consider a <span className="text-gradient">Retreat</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Annual strategic planning",
                "Leadership transitions",
                "Post-merger integration",
                "Board alignment sessions",
                "Team conflict resolution",
                "Culture and values work",
              ].map((scenario) => (
                <div key={scenario} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="w-2 h-2 bg-[#3EBCE8] rounded-full mb-4" />
                  <p className="text-[#1A1A1A] font-medium">{scenario}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                Our <span className="text-gradient">Approach</span>
              </h2>
              <p className="body-large mt-4">
                Every retreat is fully customized to your team&apos;s context and goals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Pre-Retreat Discovery", description: "We interview key stakeholders to understand dynamics, priorities, and what success looks like." },
                { title: "Facilitated Sessions", description: "Structured dialogue that creates space for honest conversation and moves toward decisions." },
                { title: "Post-Retreat Action", description: "Clear action plans, defined ownership, and optional follow-up to maintain momentum." },
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
                Flexible <span className="text-gradient">Formats</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Half-day sessions",
                "Full-day retreats",
                "In-person or hybrid",
                "Pre-retreat assessments",
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
              CEOs, board chairs, and Chief People Officers seeking clarity, alignment, and actionable strategy for executive teams and boards of directors.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Executive Teams", "Boards of Directors", "Senior Leadership", "Founding Teams"].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-[#F5F5F5] text-[#525252] rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="section gradient-subtle">
          <div className="container-wide max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm">
              <blockquote className="text-lg text-[#525252] leading-relaxed">
                &ldquo;Wendy facilitated a board retreat for us. She is a brilliant facilitator whose empathetic approach builds trust quickly. Wendy&apos;s superpower is the speed with which she is able to assess needs, navigate dynamics, and coalesce groups around shared goals. We were extremely pleased with the quality and clarity of Wendy&apos;s preparation, delivery, and follow up. She is in a class by herself! I would recommend her without hesitation.&rdquo;
              </blockquote>
              <div className="mt-6 pt-6 border-t border-[#E5E5E5] flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${siteConfig.basePath}/images/testimonial-lynne.jpg`}
                  alt="Lynne Toye"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[#1A1A1A]">Lynne Toye</p>
                  <p className="text-sm text-[#737373]">Newark, NJ</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-[#1A1A1A] text-white">
          <div className="container-tight text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Align your leadership. Accelerate your strategy.
            </h2>
            <p className="mt-6 text-xl text-[#A3A3A3]">
              Let&apos;s design a retreat that moves your team forward.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn-primary">
                Request a Retreat Proposal
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
