"use client";

import { useState } from "react";
import Link from "next/link";
import { Header, Footer } from "@/components";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What is Coaching Women of Color (CWC)?",
        a: "Coaching Women of Color, LLC is a premier coaching and leadership development firm committed to advancing the voice, visibility, and impact of professional women of color in today's workforce. We partner with organizations and individuals through executive coaching, group coaching, keynote speaking, workshops, and strategic retreats.",
      },
      {
        q: "Who is Wendy Perdomo?",
        a: "Wendy Perdomo is the Founder and Executive Leadership & Life Coach at CWC. With over 25 years of experience across the nonprofit, education, and public sectors, she is a certified executive coach, master facilitator, certified DiSC® facilitator, and organizational development strategist. She holds an M.P.A. and M.S.Ed. from Baruch College and completed Executive Education at Columbia Business School.",
      },
      {
        q: "What industries do you work with?",
        a: "We work across Financial Services, Higher Education, Nonprofits, Technology, Healthcare, Government, and Arts & Culture. To date, we've served 50+ organizations and developed 500+ leaders.",
      },
      {
        q: "What makes CWC different from other coaching firms?",
        a: "We specialize in the unique challenges professional women of color face in the workplace—from navigating bias and microaggressions to building psychological safety. Our approach is trauma-informed, culturally responsive, and grounded in over two decades of lived and professional experience.",
      },
    ],
  },
  {
    category: "For Organizations",
    questions: [
      {
        q: "What services do you offer for organizations?",
        a: "We offer seven core solutions: Executive Coaching for Leaders (1:1), Group Coaching, Keynote Speaking, Customized Webinars & Workshops, Multi-Session Virtual Series, Strategic Leadership & Board Retreats, and Performance-Based Coaching (The RESET Method™).",
      },
      {
        q: "What is The RESET Method™?",
        a: "The RESET Method™ is our proprietary performance-based coaching framework. It engages both the leader and the team member from the start to close performance gaps, surface blind spots, build shared understanding, and produce lasting shifts in behavior and accountability—retaining talent instead of replacing it.",
      },
      {
        q: "How does the engagement process work?",
        a: "We follow a 6-step process: (1) Right Fit—assess alignment, (2) Needs Discovery—identify problems and opportunities with stakeholders, (3) Co-Create—develop a strategic approach, (4) Engagement Letter & Contract—confirm scope and terms, (5) Execute—deliver on commitments, and (6) Strategic Debrief—interpret results and plan next steps.",
      },
      {
        q: "Are workshops and sessions virtual or in-person?",
        a: "Both. Most coaching sessions are conducted virtually via Zoom, but workshops, keynotes, and retreats can be delivered in-person, virtually, or in a hybrid format depending on your organization's needs.",
      },
      {
        q: "Can programs be customized for our organization?",
        a: "Absolutely. Every engagement is customized to your goals, audience, culture, and timeline. We offer pre-session surveys, workbooks, action plans, and optional coaching add-ons to ensure the work fits your specific needs.",
      },
      {
        q: "Can you work with our ERGs (Employee Resource Groups)?",
        a: "Yes. Our workshops and group coaching are frequently designed for ERGs, high-potential cohorts, and cross-functional teams seeking practical skill-building and stronger peer connection.",
      },
    ],
  },
  {
    category: "For Individuals",
    questions: [
      {
        q: "Who is individual coaching for?",
        a: "Our individual coaching is designed for professional women of color at any career stage—whether you're navigating a leadership transition, building executive presence, overcoming imposter syndrome, or preparing for your next career move.",
      },
      {
        q: "What coaching programs are available for individuals?",
        a: "We offer four pathways: the Leadership Clarity Session (a 90-minute deep dive), the 90-Day Executive Momentum Sprint (6 sessions), the Executive Leadership Coaching Program (6 months, 12 sessions), and the Executive Leadership Lab (a 12-month group program with 10 asynchronous leadership labs, 1 live coaching call, and community support — July and August are integration months).",
      },
      {
        q: "What can I expect from a coaching session?",
        a: "Sessions are grounded in real workplace dynamics—stakeholder management, decision-making, boundaries, team performance, and navigating bias and politics without losing authenticity. You'll gain clarity, confidence, and actionable strategies you can implement immediately.",
      },
      {
        q: "How do I get started?",
        a: "Book a free consultation through our website. We'll start with a conversation to understand your goals and determine which program is the right fit for you.",
      },
    ],
  },
  {
    category: "Logistics & Policies",
    questions: [
      {
        q: "How long are coaching engagements?",
        a: "Engagement length varies based on your needs. Individual coaching ranges from a single 90-minute session to a 6-month program. Group coaching and virtual series can range from a short series to a longer engagement. Retreats are available as half-day or full-day sessions.",
      },
      {
        q: "Do you offer DiSC® assessments?",
        a: "Yes. As a certified DiSC® facilitator, Wendy leverages assessment-based coaching and facilitation to improve communication, strengthen collaboration, and build psychologically safe environments that foster trust, cohesion, and accountability.",
      },
      {
        q: "What is your cancellation policy?",
        a: "Coaching sessions may be cancelled or rescheduled with a minimum of 24 hours' notice. If you do not provide at least 24 hours' notice, you will be charged the full session fee. Missed sessions (no-shows) are non-refundable. In the event of a late cancellation or no-show, rescheduling is at the sole discretion of the coach and subject to availability.",
      },
      {
        q: "How much does coaching cost?",
        a: "Individual coaching programs range from $697 for a Leadership Clarity Session to $9,900 for the 6-month Executive Leadership Coaching Program. Organizational pricing is customized based on the scope, format, and duration of the engagement. Contact us to book a discovery call and receive a custom quote.",
      },
      {
        q: "Do you provide post-engagement support?",
        a: "Yes. Our Strategic Debrief process interprets results, shares conclusions, and helps adapt learning for the next phase. Many clients continue with follow-up coaching or additional series to sustain their growth.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#E5E5E5]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-[#1A1A1A] group-hover:text-[#3EBCE8] transition-colors pr-4">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-[#3EBCE8] flex-shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-[#525252] leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#E8F8FD] to-white">
          <div className="container-wide">
            <div className="max-w-4xl">
              <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-widest mb-4">
                FAQ
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                Frequently asked
                <br />
                <span className="text-gradient">questions.</span>
              </h1>
              <p className="mt-6 text-xl text-[#525252] max-w-2xl leading-relaxed">
                Everything you need to know about working with Coaching Women of Color.
                Can&apos;t find the answer you&apos;re looking for?{" "}
                <Link href="/contact" className="text-[#3EBCE8] hover:text-[#1A9FCC] font-medium">
                  Reach out to us
                </Link>.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        {faqs.map((section) => (
          <section
            key={section.category}
            className="section bg-white border-b border-[#F5F5F5] last:border-0"
          >
            <div className="container-wide">
              <div className="grid lg:grid-cols-4 gap-12">
                <div>
                  <h2 className="text-xl font-semibold text-[#1A1A1A] sticky top-28">
                    {section.category}
                  </h2>
                </div>
                <div className="lg:col-span-3">
                  {section.questions.map((faq) => (
                    <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="section bg-[#1A1A1A] text-white">
          <div className="container-tight text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Still have questions?
            </h2>
            <p className="mt-6 text-xl text-[#A3A3A3] max-w-2xl mx-auto">
              We&apos;d love to hear from you. Book a free consultation or send us a message.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="btn-primary">
                Book a Free Consultation
              </Link>
              <Link href="/contact" className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-[#1A1A1A]">
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
