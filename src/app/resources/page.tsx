import Link from "next/link";
import { Header, Footer } from "@/components";
import { siteConfig } from "@/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Resources",
  description:
    "Practical tools, frameworks, and thought leadership for HR leaders, L&D professionals, and executives building inclusive cultures. Download our Capabilities Statement, take the Promotion Readiness Scorecard, and more.",
  alternates: {
    canonical: "https://coachingwomenofcolor.com/resources/",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#E8F8FD] to-white">
          <div className="container-wide">
            <div className="max-w-4xl">
              <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-widest mb-4">
                Resources
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                Insights &
                <br />
                <span className="text-gradient">Resources</span>
              </h1>
              <p className="mt-6 text-xl text-[#525252] max-w-2xl leading-relaxed">
                Practical tools and frameworks for HR leaders, L&D professionals,
                and executives building inclusive cultures.
              </p>
            </div>
          </div>
        </section>

        {/* Downloadable Resources */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                Downloadable <span className="text-gradient">Resources</span>
              </h2>
              <p className="body-large mt-6">
                Share these with your team, procurement department, or leadership to start the conversation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Capabilities Statement */}
              <a
                href={`${siteConfig.basePath}/cwc-capabilities-statement.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-bordered group hover:border-[#3EBCE8] flex flex-col"
              >
                <div className="w-12 h-12 bg-[#E8F8FD] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#3EBCE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="heading-card group-hover:text-[#3EBCE8] transition-colors">
                  CWC Capabilities Statement
                </h3>
                <p className="text-[#737373] mt-2 flex-grow">
                  A comprehensive overview of our services, credentials, and organizational partnerships. Ideal for sharing with your procurement or HR team.
                </p>
                <span className="link-arrow mt-6 text-sm">Download PDF →</span>
              </a>

              {/* Leadership Confidence Toolkit */}
              <a
                href={`${siteConfig.basePath}/confidence-resource-tool.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-bordered group hover:border-[#3EBCE8] flex flex-col"
              >
                <div className="w-12 h-12 bg-[#FFF4E8] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#FFC425]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="heading-card group-hover:text-[#3EBCE8] transition-colors">
                  Leadership Confidence Toolkit
                </h3>
                <p className="text-[#737373] mt-2 flex-grow">
                  A practical guide with tools and strategies to build unshakable confidence in your leadership. Download your free copy.
                </p>
                <span className="link-arrow mt-6 text-sm">Download PDF →</span>
              </a>

              {/* Promotion Readiness Scorecard */}
              <a
                href="https://coachwendycwc.github.io/CWC-automation-platform/cwc-executive-lab/promotion-readiness-scorecard.html"
                target="_blank"
                rel="noopener noreferrer"
                className="card-bordered group hover:border-[#3EBCE8] flex flex-col"
              >
                <div className="w-12 h-12 bg-[#EDE8FD] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#9333EA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="heading-card group-hover:text-[#3EBCE8] transition-colors">
                  Promotion Readiness Scorecard
                </h3>
                <p className="text-[#737373] mt-2 flex-grow">
                  A 2-minute assessment that evaluates visibility, strategic positioning, and confidence across 5 key dimensions.
                </p>
                <span className="link-arrow mt-6 text-sm">Take the assessment →</span>
              </a>
            </div>
          </div>
        </section>

        {/* Thought Leadership */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                Thought <span className="text-gradient">Leadership</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Newsletter */}
              <a
                href="https://www.linkedin.com/newsletters/leading-while-woc-7301328637058842624/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-bordered group hover:border-[#3EBCE8] flex flex-col"
              >
                <div className="w-12 h-12 bg-[#E8F8FD] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#3EBCE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="heading-card group-hover:text-[#3EBCE8] transition-colors">
                  Leading While WOC Newsletter
                </h3>
                <p className="text-[#737373] mt-2 flex-grow">
                  Insights on leadership, navigating bias, and thriving as a woman of color in the workplace. Published on LinkedIn.
                </p>
                <span className="link-arrow mt-6 text-sm">Subscribe on LinkedIn →</span>
              </a>

              {/* Bloomberg Feature */}
              <div className="card-bordered flex flex-col">
                <div className="w-12 h-12 bg-[#FFF4E8] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#FFC425]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="heading-card">
                  Bloomberg QuickTake Feature
                </h3>
                <p className="text-[#737373] mt-2 flex-grow">
                  Wendy Perdomo was featured on Bloomberg QuickTake discussing leadership development and the experiences of women of color in the workplace.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-[#1A1A1A] text-white">
          <div className="container-tight text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Looking for a customized resource for your team?
            </h2>
            <p className="mt-6 text-xl text-[#A3A3A3]">
              We create tailored toolkits, assessments, and frameworks for organizational partners.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn-primary">
                Request a Proposal
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
