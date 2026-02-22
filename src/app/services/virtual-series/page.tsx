import Link from "next/link";
import { Header, Footer } from "@/components";
import { siteConfig } from "@/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multi-Session Virtual Series",
  description:
    "Sustained leadership development through multi-session virtual programs. Leaders learn, apply, and refine skills over time for lasting behavior change.",
};

const outcomes = [
  "Stronger communication and leadership consistency",
  "Increased trust, accountability, and team alignment",
  "Improved ability to navigate conflict and high-stakes conversations",
  "Practical tools leaders can use across real scenarios",
  "Momentum and reinforcement that supports culture change",
];

export default function VirtualSeriesPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#F3E8FF] to-white">
          <div className="container-wide">
            <div className="max-w-3xl">
              <Link href="/for-organizations" className="text-sm font-medium text-[#3EBCE8] hover:text-[#1A9FCC] transition-colors">
                ← Back to Solutions
              </Link>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                Virtual Series
              </h1>
              <p className="mt-6 text-xl text-[#525252] leading-relaxed">
                Multi-session programs designed for sustained behavior change. Leaders learn, apply, and refine—building real capability over time.
              </p>
              <div className="mt-10">
                <Link href="/contact" className="btn-primary">
                  Get a Custom Quote
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
                <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-widest mb-4">
                  The Challenge
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                  One-time training doesn&apos;t create lasting change.
                </h2>
                <p className="mt-6 text-lg text-[#525252] leading-relaxed">
                  Leadership development isn&apos;t an event—it&apos;s a process. Single workshops create awareness, but sustained engagement is what drives real behavior change.
                </p>
                <p className="mt-4 text-lg text-[#525252] leading-relaxed">
                  Virtual series allow leaders to learn a concept, apply it in the real world, and return to refine their approach with support. This rhythm creates momentum that sticks.
                </p>
              </div>
              <div className="bg-[#F5F5F5] rounded-3xl p-8 lg:p-12">
                <p className="text-sm font-medium text-[#1A1A1A] uppercase tracking-widest mb-6">
                  What Leaders Gain
                </p>
                <ul className="space-y-4">
                  {outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#9333EA] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                The <span className="text-gradient">Rhythm</span>
              </h2>
              <p className="body-large mt-4">
                A proven cadence for sustainable leadership development.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Learn", description: "Introduce frameworks and concepts in a focused session." },
                { step: "2", title: "Apply", description: "Leaders practice in their real work environment." },
                { step: "3", title: "Reflect", description: "Return to share experiences and challenges." },
                { step: "4", title: "Refine", description: "Adjust approach based on feedback and results." },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <div className="w-10 h-10 bg-[#9333EA] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-semibold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">{item.title}</h3>
                  <p className="text-[#737373] mt-2 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                What&apos;s <span className="text-gradient">Included</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "3+ sessions (60-90 min each)",
                "Pre-session surveys",
                "Workbooks & action plans",
                "Optional coaching add-ons",
              ].map((item) => (
                <div key={item} className="text-center p-6">
                  <div className="w-2 h-2 bg-[#9333EA] rounded-full mx-auto mb-4" />
                  <p className="text-[#1A1A1A] font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best For */}
        <section className="section bg-[#F5F5F5]">
          <div className="container-tight text-center">
            <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-widest mb-4">
              Best For
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1A1A1A]">
              Organizations wanting sustainable leadership development, measurable growth over time, and a clear path from learning to implementation.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Leadership Cohorts", "People Managers", "High-Potential Groups", "Cross-Functional Teams"].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-white text-[#525252] rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="section bg-white">
          <div className="container-wide max-w-3xl mx-auto">
            <div className="bg-[#F8FAFB] rounded-2xl p-8 lg:p-10">
              <blockquote className="text-lg text-[#525252] leading-relaxed">
                &ldquo;I really appreciate you and the coaching that I&apos;ve had with you. I recognize that because of the conversations that we&apos;ve had and the calls that we&apos;ve had, without them I wouldn&apos;t have gotten here, or I wouldn&apos;t have gotten here as quickly as I have. I appreciate you challenging me, showing me so much of myself and peeling back layers. I was able to really hone in on what&apos;s really in here to help others discover that as well.&rdquo;
              </blockquote>
              <div className="mt-6 pt-6 border-t border-[#E5E5E5] flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${siteConfig.basePath}/images/testimonial-morgan.png`}
                  alt="Morgan Bullock"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[#1A1A1A]">Morgan Bullock</p>
                  <p className="text-sm text-[#737373]">Atlanta, GA</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-[#1A1A1A] text-white">
          <div className="container-tight text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Create lasting change.
            </h2>
            <p className="mt-6 text-xl text-[#A3A3A3]">
              Let&apos;s design a virtual series that transforms your leaders.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn-primary">
                Get a Custom Quote
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
