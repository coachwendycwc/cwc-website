import Link from "next/link";
import { Header, Footer } from "@/components";

const solutions = [
  {
    id: "team-effectiveness",
    title: "Team Effectiveness + Communication",
    subtitle: "DiSC-Powered",
    description: "For teams experiencing friction, silos, low trust, or post-change misalignment.",
    features: [
      "DiSC assessments + team mapping",
      "Psychological safety + team norms",
      "Communication labs + real scenarios",
      "Individual and team action plans",
    ],
    formats: ["90-minute workshop", "Half-day intensive", "Full-day intensive", "3-part virtual series"],
  },
  {
    id: "leadership-cohorts",
    title: "Leadership Development Cohorts",
    subtitle: "Group Coaching for Organizations",
    description: "For developing high-potential leaders and strengthening your leadership bench.",
    features: [
      "Cohort-based coaching labs (monthly)",
      "Leadership confidence, boundaries, and executive presence",
      "Career strategy and influence skills",
      "Community accountability + tools and frameworks",
    ],
    formats: ["3-session series", "6–10 month cohort program", "Custom learning series"],
  },
  {
    id: "culture-workshops",
    title: "Culture + Inclusion Skill-Building",
    subtitle: "Workshops",
    description: "For building practical, real-world skills that improve culture and retention.",
    topics: [
      "Personal Branding / Executive Presence",
      "Addressing Microaggressions in the Workplace",
      "Navigating Tough Conversations",
      "Negotiating Your Salary",
      "Boosting Employee Engagement",
    ],
    formats: ["Webinar (60–90 min)", "Interactive workshop", "Multi-session series"],
  },
  {
    id: "retreats",
    title: "Leadership Retreats + Offsites",
    subtitle: "Custom Facilitation",
    description: "For leadership teams, ERG leadership, annual planning, and engagement resets.",
    features: [
      "Retreat design + facilitation",
      "Team alignment, norms, and commitments",
      "Engagement and accountability planning",
    ],
    formats: ["Half-day", "Full-day", "Multi-day (scope dependent)"],
  },
];

const pricing = [
  { service: "Workshops/Webinars (60–90 min)", price: "$5,000" },
  { service: "3-Part Learning Series", price: "$7,500" },
  { service: "Half-Day Team Session", price: "$5,000 + assessments" },
  { service: "Full-Day Offsite/Retreat", price: "$10,000" },
  { service: "Cohort Group Coaching", price: "$5,000+" },
  { service: "Consulting (hourly)", price: "$350/hour" },
];

const benefits = [
  "Stronger leadership, communication, and executive presence",
  "Higher trust, psychological safety, and team accountability",
  "Practical skills to navigate bias, microaggressions, and tough conversations",
  "Increased engagement, clarity, and performance through aligned team norms",
];

export default function ForOrganizationsPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#E8F8FD] to-white">
          <div className="container-wide">
            <div className="max-w-4xl">
              <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-widest mb-4">
                For Organizations
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                Build cultures where
                <br />
                <span className="text-gradient">everyone thrives.</span>
              </h1>
              <p className="mt-6 text-xl text-[#525252] max-w-2xl leading-relaxed">
                Transform your workplace with programs designed to create lasting change.
                Solutions starting at $5,000, customized to your team&apos;s unique needs.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Book a Discovery Call
                </Link>
                <Link href="#solutions" className="btn-secondary">
                  View Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What We Help Achieve */}
        <section className="section-tight bg-[#F5F5F5]">
          <div className="container-wide">
            <div className="grid md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#3EBCE8] flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#525252] text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="section bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                Signature <span className="text-gradient">Solutions</span>
              </h2>
              <p className="body-large mt-6">
                Choose your format based on your team&apos;s needs, timeline, and goals.
              </p>
            </div>

            <div className="space-y-8">
              {solutions.map((solution, index) => (
                <div
                  key={solution.id}
                  id={solution.id}
                  className="bg-[#F5F5F5] rounded-3xl p-8 lg:p-10"
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left: Title & Description */}
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#3EBCE8]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-2xl font-semibold text-[#1A1A1A] mt-2">
                        {solution.title}
                      </h3>
                      <p className="text-sm text-[#737373] mt-1">{solution.subtitle}</p>
                      <p className="text-[#525252] mt-4 leading-relaxed">
                        <strong>Best for:</strong> {solution.description}
                      </p>
                    </div>

                    {/* Middle: Features/Topics */}
                    <div>
                      <h4 className="text-sm font-semibold text-[#1A1A1A] uppercase tracking-wider mb-4">
                        {solution.topics ? "Popular Topics" : "What You Get"}
                      </h4>
                      <ul className="space-y-2">
                        {(solution.features || solution.topics)?.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <svg
                              className="w-4 h-4 text-[#3EBCE8] flex-shrink-0 mt-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-[#525252]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Formats */}
                    <div>
                      <h4 className="text-sm font-semibold text-[#1A1A1A] uppercase tracking-wider mb-4">
                        Available Formats
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.formats.map((format, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white text-[#525252] text-sm rounded-full border border-[#E5E5E5]"
                          >
                            {format}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="heading-display">
                  Investment
                  <br />
                  <span className="text-gradient">Starting at $5,000</span>
                </h2>
                <p className="body-large mt-6">
                  Pricing is customized based on duration, participant count, customization level,
                  assessments, deliverables, and travel requirements.
                </p>
                <div className="mt-8">
                  <Link href="/contact" className="btn-primary">
                    Get a Custom Quote
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="heading-card mb-6">Starting Points</h3>
                <div className="space-y-4">
                  {pricing.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-[#E5E5E5] last:border-0"
                    >
                      <span className="text-[#525252]">{item.service}</span>
                      <span className="font-semibold text-[#1A1A1A]">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                How We <span className="text-gradient">Work</span>
              </h2>
              <p className="body-large mt-4">Simple process. Meaningful outcomes.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery Call",
                  description: "We understand your goals, audience, and constraints.",
                },
                {
                  step: "02",
                  title: "Recommended Scope",
                  description: "We propose format, agenda, and deliverables tailored to you.",
                },
                {
                  step: "03",
                  title: "Delivery + Action",
                  description: "Virtual or in-person delivery with post-session action planning.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-[#E8F8FD] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-[#3EBCE8]">{item.step}</span>
                  </div>
                  <h3 className="heading-card">{item.title}</h3>
                  <p className="text-[#737373] mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Pages Links */}
        <section className="section-tight bg-[#F5F5F5]">
          <div className="container-wide">
            <div className="text-center mb-8">
              <p className="text-sm font-medium text-[#737373] uppercase tracking-widest">
                Explore Our Services
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "DEI Workshops", href: "/services/dei-workshops" },
                { name: "Leadership Development", href: "/services/leadership-development" },
                { name: "Keynote Speaking", href: "/services/keynote-speaking" },
                { name: "Consulting", href: "/services/consulting" },
              ].map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="px-6 py-3 bg-white text-[#525252] rounded-full border border-[#E5E5E5] hover:border-[#3EBCE8] hover:text-[#3EBCE8] transition-all"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-[#1A1A1A] text-white">
          <div className="container-tight text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Ready to transform your organization?
            </h2>
            <p className="mt-6 text-xl text-[#A3A3A3] max-w-2xl mx-auto">
              Book a discovery call to explore the best-fit format and scope for your team.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn-primary">
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
