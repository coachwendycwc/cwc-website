import Link from "next/link";
import { Header, Footer, Breadcrumbs } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Coaching for Women of Color",
  description:
    "1:1 executive coaching for women of color professionals ready to break through barriers, silence imposter syndrome, and step fully into their leadership power.",
  alternates: {
    canonical: "https://coachingwomenofcolor.com/executive-coaching/",
  },
};

export default function ExecutiveCoachingPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#E8F8FD] to-white">
          <div className="container-wide">
            <div className="max-w-4xl">
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Coaching", href: "/for-individuals" }, { label: "Executive Coaching" }]} />
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                Executive Coaching
              </h1>
              <p className="mt-6 text-xl text-[#525252] max-w-2xl leading-relaxed">
                Elevate your leadership presence and navigate the complexities of executive
                roles with confidence and authenticity.
              </p>
              <div className="mt-10">
                <Link href="/schedule/" className="btn-primary">
                  Book a Discovery Call
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="heading-display">
                  Lead with <span className="text-gradient">Confidence</span>
                </h2>
                <p className="body-large mt-6">
                  Executive coaching is designed for women of color in senior leadership
                  positions who want to maximize their impact, navigate organizational
                  politics, and lead authentically.
                </p>
                <p className="body-large mt-4">
                  Whether you&apos;re a C-suite executive, VP, or senior director, our
                  coaching helps you leverage your unique strengths while addressing
                  the specific challenges you face.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { title: "C-Suite Executives", description: "CEOs, CFOs, CTOs navigating board dynamics and strategic leadership." },
                  { title: "Vice Presidents", description: "Senior leaders driving organizational change and building high-performing teams." },
                  { title: "Senior Directors", description: "Leaders preparing for the next level of executive responsibility." },
                ].map((item) => (
                  <div key={item.title} className="card-bordered">
                    <h3 className="heading-card">{item.title}</h3>
                    <p className="text-[#737373] mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                Coaching <span className="text-gradient">Focus Areas</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Executive Presence", description: "Develop the gravitas and communication style that commands respect and inspires confidence." },
                { title: "Strategic Influence", description: "Build and leverage relationships to drive organizational change and achieve your vision." },
                { title: "Authentic Leadership", description: "Lead in a way that honors your identity while navigating corporate environments." },
                { title: "Work-Life Integration", description: "Create sustainable success without sacrificing your well-being or relationships." },
                { title: "Board Readiness", description: "Prepare for board-level conversations and corporate governance responsibilities." },
                { title: "Legacy Building", description: "Define and work toward the lasting impact you want to make." },
              ].map((area) => (
                <div key={area.title} className="card">
                  <h3 className="heading-card">{area.title}</h3>
                  <p className="text-[#737373] mt-3">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                {[
                  { step: "01", title: "Chemistry Call", description: "30-minute conversation to ensure we're the right fit." },
                  { step: "02", title: "Assessment", description: "Deep dive into your goals, challenges, and leadership style." },
                  { step: "03", title: "Coaching Sessions", description: "Regular 60-minute sessions focused on your priorities." },
                  { step: "04", title: "Integration", description: "Apply insights in real-time with ongoing support." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="text-2xl font-semibold text-[#14739C]">{item.step}</div>
                    <div>
                      <h3 className="font-semibold text-[#1A1A1A]">{item.title}</h3>
                      <p className="text-[#737373] text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="heading-display">
                  The <span className="text-gradient">Process</span>
                </h2>
                <p className="body-large mt-6">
                  Executive coaching is a partnership. We work together to identify your
                  goals, uncover blind spots, and develop strategies that work for your
                  unique situation.
                </p>
                <p className="body-large mt-4">
                  Engagements typically span 6-12 months, with sessions every two weeks
                  and unlimited email support between sessions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-display">
                Your <span className="text-gradient">Investment</span>
              </h2>
              <p className="body-large mt-4">
                A 6-month transformational coaching experience designed for lasting impact.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="card-bordered">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-sm font-medium text-[#14739C] uppercase tracking-widest mb-2">
                      6-Month Program
                    </p>
                    <div className="text-4xl md:text-5xl font-semibold text-[#1A1A1A]">
                      $9,000
                    </div>
                    <p className="text-[#737373] mt-2">
                      or $1,500/month payment plan
                    </p>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      {[
                        "2 private coaching calls per month (1 hour each)",
                        "DiSC® & Positive Intelligence® assessments included",
                        "Customized leadership strategies",
                        "Direct email access between sessions",
                        "Support navigating bias & imposter syndrome",
                        "Tailored action plans & accountability",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[#525252]">
                          <svg className="w-5 h-5 text-[#3EBCE8] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-[#1A1A1A] text-white">
          <div className="container-tight text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Ready to elevate your leadership?
            </h2>
            <p className="mt-6 text-xl text-[#A3A3A3]">
              Schedule a complimentary discovery call to explore how executive coaching
              can help you achieve your goals.
            </p>
            <div className="mt-10">
              <Link href="/schedule/" className="btn-primary">
                Book Your Discovery Call
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
