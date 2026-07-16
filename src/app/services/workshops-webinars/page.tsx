import Link from "next/link";
import { Header, Footer, Breadcrumbs } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshops & Webinars",
  description:
    "Interactive workshops and webinars on psychological safety, communication, executive presence, and inclusive leadership. Customized to your organization's goals and culture.",
  alternates: {
    canonical: "https://coachingwomenofcolor.com/services/workshops-webinars/",
  },
};

const outcomes = [
  "Customized to your goals, audience, and culture",
  "Trauma-informed facilitation that supports participation and trust",
  "Tools, templates, and action steps leaders can use immediately",
  "Options for pre-surveys and follow-up resources",
];

const topics = [
  "Psychological safety and team norms",
  "Communication, feedback, and conflict navigation",
  "Executive presence and leadership visibility",
  "Navigating bias and inclusive leadership practices",
  "Building high-performing teams and accountability",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Workshops & Webinars",
  description: "Interactive workshops and webinars on psychological safety, communication, executive presence, and inclusive leadership.",
  provider: {
    "@type": "Organization",
    name: "Coaching Women of Color",
    url: "https://coachingwomenofcolor.com",
  },
  url: "https://coachingwomenofcolor.com/services/workshops-webinars/",
};

export default function WorkshopsWebinarsPage() {
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
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/for-organizations" }, { label: "Workshops & Webinars" }]} />
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                Workshops & Webinars
              </h1>
              <p className="mt-6 text-xl text-[#525252] leading-relaxed">
                Interactive learning experiences that build skills, shift mindsets, and equip your teams with practical tools they can use immediately.
              </p>
              <div className="mt-10">
                <Link href="/contact" className="btn-primary">
                  Request a Workshop Proposal
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
                  Training that doesn&apos;t change behavior is wasted time.
                </h2>
                <p className="mt-6 text-lg text-[#525252] leading-relaxed">
                  Too many workshops check a box without creating real change. Participants sit through slides, nod along, and return to their desks unchanged.
                </p>
                <p className="mt-4 text-lg text-[#525252] leading-relaxed">
                  Our workshops are different. We design for application—not just awareness. Every session includes practice, reflection, and clear next steps that participants can implement immediately.
                </p>
              </div>
              <div className="bg-[#F5F5F5] rounded-3xl p-8 lg:p-12">
                <p className="text-sm font-medium text-[#1A1A1A] uppercase tracking-widest mb-6">
                  What You Get
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

        {/* Topics */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                Workshop <span className="text-gradient">Topics</span>
              </h2>
              <p className="body-large mt-4">
                Each workshop is tailored to your organization&apos;s needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((topic) => (
                <div key={topic} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="w-2 h-2 bg-[#E91E8C] rounded-full mb-4" />
                  <p className="text-[#1A1A1A] font-medium">{topic}</p>
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
              VP of HR, L&D directors, and talent development leaders seeking practical skill-building for leadership teams, people managers, ERGs, and high-potential cohorts.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Leadership Teams", "People Managers", "ERGs", "High-Potential Cohorts", "Cross-Functional Teams"].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-[#F5F5F5] text-[#525252] rounded-full text-sm">
                  {tag}
                </span>
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

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Standalone Webinar", duration: "60-90 min", description: "Focused session on a single topic, delivered virtually to any size audience." },
                { title: "Interactive Workshop", duration: "Half day", description: "Deeper dive with breakout activities, practice scenarios, and peer discussion." },
                { title: "Workshop + Coaching", duration: "Multi-session", description: "Extended engagement combining workshops with follow-up group coaching." },
              ].map((format) => (
                <div key={format.title} className="bg-white rounded-2xl p-6 text-center">
                  <p className="text-sm font-medium text-[#E91E8C] uppercase tracking-wider">{format.duration}</p>
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mt-2">{format.title}</h3>
                  <p className="text-[#737373] mt-2">{format.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-[#1A1A1A] text-white">
          <div className="container-tight text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Build skills that stick.
            </h2>
            <p className="mt-6 text-xl text-[#A3A3A3]">
              Let&apos;s design a workshop experience for your team.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn-primary">
                Request a Workshop Proposal
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
