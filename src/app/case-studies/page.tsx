import Link from "next/link";
import { Header, Footer } from "@/components";

const caseStudies = [
  {
    client: "Fortune 500 Tech Company",
    industry: "Technology",
    challenge: "Low representation of women of color in leadership positions despite strong entry-level diversity.",
    solution: "Implemented a 12-month leadership development program combined with sponsorship initiatives and inclusive leadership training for executives.",
    results: [
      "40% increase in women of color in senior roles within 2 years",
      "Improved employee engagement scores by 25%",
      "Reduced turnover among high-potential employees by 35%",
    ],
    color: "#3EBCE8",
  },
  {
    client: "Healthcare System",
    industry: "Healthcare",
    challenge: "Cultural disconnect between leadership and diverse patient population affecting care quality and employee satisfaction.",
    solution: "Comprehensive DEI assessment followed by customized training programs and policy updates to create a more inclusive environment.",
    results: [
      "Patient satisfaction scores increased by 18%",
      "Staff retention improved by 28%",
      "Achieved healthcare equity certification",
    ],
    color: "#FFC425",
  },
  {
    client: "Financial Services Firm",
    industry: "Finance",
    challenge: "Struggling to attract and retain diverse talent in a competitive market while meeting DEI commitments to stakeholders.",
    solution: "Partnered on employer branding, interview process redesign, and creation of employee resource groups with executive sponsorship.",
    results: [
      "Diverse candidate pipeline increased by 60%",
      "First-year retention of diverse hires improved by 45%",
      "ERG participation grew to 40% of workforce",
    ],
    color: "#C4D82E",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#E8F8FD] to-white">
          <div className="container-wide">
            <div className="max-w-4xl">
              <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-widest mb-4">
                Case Studies
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                Real Results,
                <br />
                <span className="text-gradient">Real Impact</span>
              </h1>
              <p className="mt-6 text-xl text-[#525252] max-w-2xl leading-relaxed">
                See how we&apos;ve helped organizations transform their cultures
                and achieve measurable outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={study.client} className="card-bordered">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Client Info */}
                    <div className="lg:col-span-1">
                      <div
                        className="w-4 h-4 rounded-full mb-4"
                        style={{ backgroundColor: study.color }}
                      />
                      <p className="text-sm font-medium text-[#737373] uppercase tracking-wider">
                        {study.industry}
                      </p>
                      <h2 className="heading-card mt-2">{study.client}</h2>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h3 className="font-semibold text-[#1A1A1A] mb-2">The Challenge</h3>
                        <p className="text-[#737373]">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1A1A1A] mb-2">Our Solution</h3>
                        <p className="text-[#737373]">{study.solution}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1A1A1A] mb-2">Results</h3>
                        <ul className="space-y-2">
                          {study.results.map((result) => (
                            <li key={result} className="flex items-start gap-2">
                              <svg className="w-5 h-5 text-[#3EBCE8] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-[#525252]">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="section gradient-subtle">
          <div className="container-tight text-center">
            <blockquote className="text-2xl md:text-3xl font-medium text-[#1A1A1A] leading-relaxed">
              &ldquo;Working with Coaching Women of Color transformed how we approach
              diversity and inclusion. The results speak for themselves.&rdquo;
            </blockquote>
            <p className="mt-6 text-[#737373]">
              — Chief People Officer, Fortune 500 Tech Company
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-[#1A1A1A] text-white">
          <div className="container-tight text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Ready to write your success story?
            </h2>
            <p className="mt-6 text-xl text-[#A3A3A3]">
              Let&apos;s discuss how we can help your organization achieve similar results.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn-primary">
                Start the Conversation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
