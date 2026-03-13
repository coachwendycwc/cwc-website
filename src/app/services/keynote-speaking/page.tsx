import Link from "next/link";
import { Header, Footer, Breadcrumbs } from "@/components";
import { siteConfig } from "@/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keynote Speaking",
  description:
    "Book Wendy Perdomo for your next conference or event. High-impact keynotes on executive presence, psychological safety, navigating bias, and inclusive leadership.",
  alternates: {
    canonical: "https://coachingwomenofcolor.com/services/keynote-speaking/",
  },
};

const outcomes = [
  "Clear insights and language they can use immediately",
  "Practical frameworks for communication and leadership decisions",
  "A renewed sense of responsibility and possibility",
  "Action steps that support culture change, not just motivation",
];

const topics = [
  "Leading with executive presence and influence",
  "Navigating workplace dynamics and bias",
  "Psychological safety: what it is, what it isn't, and how to build it",
  "Communication that strengthens trust and performance",
  "Confidence, visibility, and leading authentically",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Keynote Speaking",
  description: "High-impact keynotes on executive presence, psychological safety, navigating bias, and inclusive leadership.",
  provider: {
    "@type": "Organization",
    name: "Coaching Women of Color",
    url: "https://coachingwomenofcolor.com",
  },
  url: "https://coachingwomenofcolor.com/services/keynote-speaking/",
};

export default function KeynoteSpeakingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#F7FAE5] to-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/for-organizations" }, { label: "Keynote Speaking" }]} />
                <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                  Keynote Speaking
                </h1>
                <p className="mt-6 text-xl text-[#525252] leading-relaxed">
                  Engaging, high-impact presentations that spark real conversation and meaningful action—not just applause.
                </p>
                <div className="mt-10">
                  <Link href="/contact" className="btn-primary">
                    Inquire About Availability
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#C4D82E]/20 to-[#3EBCE8]/20 rounded-3xl blur-2xl" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${siteConfig.basePath}/images/new/action-summit-talk.jpg`}
                  alt="Wendy Perdomo delivering a keynote presentation"
                  className="relative w-full h-auto rounded-2xl shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-widest mb-4">
                  The Challenge
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                  Most keynotes inspire for a moment, then fade.
                </h2>
                <p className="mt-6 text-lg text-[#525252] leading-relaxed">
                  Organizations invest in speakers who energize the room—but a week later, nothing has changed. The message didn&apos;t stick. The action didn&apos;t happen.
                </p>
                <p className="mt-4 text-lg text-[#525252] leading-relaxed">
                  Our keynotes are designed differently. We combine compelling storytelling with practical frameworks that audiences can apply the next day. Inspiration with implementation.
                </p>
              </div>
              <div className="bg-[#F5F5F5] rounded-3xl p-8 lg:p-12">
                <p className="text-sm font-medium text-[#1A1A1A] uppercase tracking-widest mb-6">
                  What Audiences Gain
                </p>
                <ul className="space-y-4">
                  {outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#C4D82E] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                Signature <span className="text-gradient">Topics</span>
              </h2>
              <p className="body-large mt-4">
                Each keynote is customized to your audience and goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((topic) => (
                <div key={topic} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="w-2 h-2 bg-[#C4D82E] rounded-full mb-4" />
                  <p className="text-[#1A1A1A] font-medium">{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formats */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                Event <span className="text-gradient">Formats</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Keynote Address", duration: "45-60 min", description: "High-impact presentation for conferences, summits, and company-wide events." },
                { title: "Keynote + Q&A", duration: "60-90 min", description: "Extended format with audience engagement and real-time discussion." },
                { title: "Keynote + Workshop", duration: "Half day", description: "Combine inspiration with hands-on skill building for deeper impact." },
              ].map((format) => (
                <div key={format.title} className="text-center">
                  <p className="text-sm font-medium text-[#C4D82E] uppercase tracking-wider">{format.duration}</p>
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mt-2">{format.title}</h3>
                  <p className="text-[#737373] mt-2">{format.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="section gradient-subtle">
          <div className="container-wide max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm">
              <blockquote className="text-lg text-[#525252] leading-relaxed">
                &ldquo;Wendy Perdomo is in a class by herself; they truly broke the &quot;mold&quot; with her. Ms. Perdomo&apos;s level of expertise, compassion and ability to engage, inform and foster meaningful connections, and discussion, sets her apart from other coaches and facilitators. Her ability to connect with people and ensure that those she is working with get the most out of any engagement is truly unparalleled. She creates a collaborative atmosphere that is also thought provoking.&rdquo;
              </blockquote>
              <div className="mt-6 pt-6 border-t border-[#E5E5E5] flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${siteConfig.basePath}/images/testimonial-tanya.png`}
                  alt="Tanya Ramos-Puig"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[#1A1A1A]">Tanya Ramos-Puig</p>
                  <p className="text-sm text-[#737373]">Florida</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Speaker Logistics */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A] mb-8">
                  What&apos;s Included
                </h2>
                <ul className="space-y-4">
                  {[
                    "Pre-event discovery call to align on audience, goals, and key messages",
                    "Customized presentation tailored to your organization and industry",
                    "Attendee handouts and actionable frameworks",
                    "Post-event summary with key takeaways and recommended next steps",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#C4D82E] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#525252]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A] mb-8">
                  Logistics
                </h2>
                <ul className="space-y-4">
                  {[
                    "Available for in-person and virtual events",
                    "Travel arrangements coordinated upon booking",
                    "A/V requirements provided in advance",
                    "Media availability and press coordination as needed",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#C4D82E] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#525252]">{item}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </div>
        </section>

        {/* How to Book */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-display">
                How to <span className="text-gradient">Book</span>
              </h2>
              <p className="body-large mt-4">
                Four simple steps to bring a transformative keynote to your event.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Inquiry", description: "Submit your event details and preferred dates" },
                { step: "2", title: "Scoping Call", description: "Align on audience, goals, and key messages" },
                { step: "3", title: "Proposal", description: "Receive a custom proposal and engagement plan" },
                { step: "4", title: "Confirm", description: "Book, prepare, and get ready for impact" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-[#C4D82E] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">{item.title}</h3>
                  <p className="text-sm text-[#525252] mt-2 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Speaking Engagements */}
        <section className="section bg-[#F5F5F5]">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-display">
                Past <span className="text-gradient">Engagements</span>
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Bloomberg QuickTake",
                "WOCIP Conference",
                "R.I.S.E Women's Leadership Conference",
                "Proud to Be Latina Empowerment Conference",
                "Colgate University",
                "Ellevate Network",
                "Reinvention: An Elevation Summit",
                "Latina Emergence Conference",
              ].map((event) => (
                <span key={event} className="px-5 py-2.5 bg-white text-[#525252] rounded-full border border-[#E5E5E5] text-sm font-medium">
                  {event}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-[#1A1A1A] text-white">
          <div className="container-tight text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Make your next event unforgettable.
            </h2>
            <p className="mt-6 text-xl text-[#A3A3A3]">
              Let&apos;s discuss how we can inspire and engage your audience.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn-primary">
                Inquire About Availability
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
