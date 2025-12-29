import Link from "next/link";
import { Header, Footer } from "@/components";

const coachingPrograms = [
  {
    id: "clarity-session",
    tier: "Entry",
    title: "Leadership Clarity Session",
    subtitle: "1:1 Deep Dive",
    price: "$697",
    duration: "90 minutes",
    bestFor: "Emerging leaders or professionals feeling stuck, overwhelmed, or at a decision point who need expert guidance fast.",
    features: [
      "Deep-dive assessment of current challenges, blockers, and decision points",
      "Strategic roadmap for your next steps (priorities, options, and best moves)",
      "Actionable takeaways you can implement immediately",
      "Curated resource recommendations (tools, frameworks, and next-step supports)",
    ],
    bonus: "$697 credit toward any 1:1 program when you enroll within 30 days",
    cta: "Book Clarity Session",
    highlight: false,
  },
  {
    id: "momentum-sprint",
    tier: "Mid-Tier",
    title: "90-Day Executive Momentum Sprint",
    subtitle: "1:1 Coaching",
    price: "$5,000",
    duration: "90 days (6 sessions)",
    bestFor: "Professionals who need focused support, a clear plan, and accountability to create meaningful progress in the next 90 days.",
    features: [
      "6 private coaching sessions (1 hour each) over 90 days",
      "30/60/90-day leadership plan with priorities and timelines",
      "Stakeholder map + influence strategy",
      "Practical scripts and tools (boundaries, visibility, tough conversations)",
      "Action plans and accountability between sessions",
    ],
    cta: "Start Your Sprint",
    highlight: false,
  },
  {
    id: "executive-program",
    tier: "Anchor Program",
    title: "Executive Leadership Coaching",
    subtitle: "1:1 Premium",
    price: "$1,650/month",
    priceNote: "$9,900 total",
    duration: "6 months (12 sessions)",
    bestFor: "Women of color executives and senior leaders ready for deep, sustained transformation with private, high-touch support.",
    features: [
      "2 private coaching calls per month (1 hour each)",
      "Customized strategies for leadership, confidence, boundaries, and executive presence",
      "Direct email access between sessions",
      "Tailored action plans and accountability",
      "Tools and frameworks aligned with your goals",
      "Support navigating bias, imposter syndrome, and organizational dynamics",
    ],
    cta: "Apply Now",
    highlight: true,
  },
  {
    id: "coaching-lab",
    tier: "Group Program",
    title: "Executive Coaching Lab",
    subtitle: "Community + Coaching",
    price: "$997",
    priceNote: "$100/month",
    duration: "10 months (Jan–Jun; Sept–Dec)",
    bestFor: "Self-directed mid-tier professionals who want proven tools, frameworks, and a supportive community to elevate their career.",
    features: [
      "10 monthly coaching labs",
      "Career tools, worksheets, and frameworks",
      "Private Skool community for support and accountability",
      "Lifetime access to replays",
      "Learn at your own pace with expert guidance",
    ],
    cta: "Join the Lab",
    highlight: false,
  },
];

export default function ForIndividualsPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#E8F8FD] to-white">
          <div className="container-wide">
            <div className="max-w-4xl">
              <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-widest mb-4">
                Coaching Programs
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                You already have
                <br />
                <span className="text-gradient">everything you need.</span>
              </h1>
              <p className="mt-6 text-xl text-[#525252] max-w-2xl leading-relaxed">
                Executive coaching designed specifically for women of color professionals,
                senior leaders, and executives ready to lead with confidence, set boundaries,
                and navigate workplace dynamics with clarity and power.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/book" className="btn-primary">
                  Book a Free Discovery Call
                </Link>
                <Link href="#programs" className="btn-secondary">
                  View Programs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="section bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                Choose Your <span className="text-gradient">Pathway</span>
              </h2>
              <p className="body-large mt-6">
                Whether you need a focused session or sustained transformation,
                there&apos;s a program designed for where you are right now.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {coachingPrograms.map((program) => (
                <div
                  key={program.id}
                  id={program.id}
                  className={`rounded-3xl p-8 lg:p-10 transition-all ${
                    program.highlight
                      ? "bg-[#1A1A1A] text-white ring-2 ring-[#3EBCE8]"
                      : "bg-[#F5F5F5]"
                  }`}
                >
                  {/* Tier Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                        program.highlight
                          ? "bg-[#3EBCE8] text-white"
                          : "bg-[#E8F8FD] text-[#3EBCE8]"
                      }`}
                    >
                      {program.tier}
                    </span>
                    <span className={`text-sm ${program.highlight ? "text-[#A3A3A3]" : "text-[#737373]"}`}>
                      {program.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-semibold ${program.highlight ? "text-white" : "text-[#1A1A1A]"}`}>
                    {program.title}
                  </h3>
                  <p className={`text-sm mt-1 ${program.highlight ? "text-[#A3A3A3]" : "text-[#737373]"}`}>
                    {program.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mt-6">
                    <span className={`text-4xl font-bold ${program.highlight ? "text-[#3EBCE8]" : "text-[#1A1A1A]"}`}>
                      {program.price}
                    </span>
                    {program.priceNote && (
                      <span className={`text-sm ml-2 ${program.highlight ? "text-[#A3A3A3]" : "text-[#737373]"}`}>
                        ({program.priceNote})
                      </span>
                    )}
                  </div>

                  {/* Best For */}
                  <p className={`mt-4 text-sm leading-relaxed ${program.highlight ? "text-[#D4D4D4]" : "text-[#525252]"}`}>
                    <strong>Best for:</strong> {program.bestFor}
                  </p>

                  {/* Features */}
                  <ul className="mt-6 space-y-3">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            program.highlight ? "text-[#3EBCE8]" : "text-[#3EBCE8]"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={`text-sm ${program.highlight ? "text-[#D4D4D4]" : "text-[#525252]"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Bonus */}
                  {program.bonus && (
                    <div className={`mt-6 p-4 rounded-xl ${program.highlight ? "bg-[#262626]" : "bg-white"}`}>
                      <p className={`text-sm ${program.highlight ? "text-[#3EBCE8]" : "text-[#3EBCE8]"}`}>
                        <strong>Bonus:</strong> {program.bonus}
                      </p>
                    </div>
                  )}

                  {/* CTA */}
                  <Link
                    href="/book"
                    className={`mt-8 block w-full text-center py-3 px-6 rounded-full font-medium transition-all ${
                      program.highlight
                        ? "bg-[#3EBCE8] text-white hover:bg-[#1A9FCC]"
                        : "bg-[#1A1A1A] text-white hover:bg-[#404040]"
                    }`}
                  >
                    {program.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-display">
                90-Day vs 6-Month: <span className="text-gradient">What&apos;s Right for You?</span>
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] bg-white rounded-2xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[#F5F5F5]">
                    <th className="text-left p-4 font-semibold text-[#1A1A1A]">Category</th>
                    <th className="text-left p-4 font-semibold text-[#1A1A1A]">90-Day Sprint ($5,000)</th>
                    <th className="text-left p-4 font-semibold text-[#3EBCE8]">6-Month Program ($9,900)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5E5]">
                  {[
                    { cat: "Primary Goal", sprint: "Clarity + traction + execution", program: "Deep, sustained transformation" },
                    { cat: "Best For", sprint: "Decision point, urgent priorities", program: "Complex challenges, identity-level growth" },
                    { cat: "Sessions", sprint: "6 sessions", program: "12 sessions" },
                    { cat: "Support Level", sprint: "Light between-session support", program: "Higher-touch + email access" },
                    { cat: "Ideal Outcome", sprint: "Clear direction, first wins", program: "Sustained confidence, long-term advancement" },
                  ].map((row, index) => (
                    <tr key={index}>
                      <td className="p-4 font-medium text-[#1A1A1A]">{row.cat}</td>
                      <td className="p-4 text-[#525252]">{row.sprint}</td>
                      <td className="p-4 text-[#525252]">{row.program}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Not Sure CTA */}
        <section className="section bg-white">
          <div className="container-tight text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A]">
              Not sure where to start?
            </h2>
            <p className="body-large mt-6 max-w-2xl mx-auto">
              Begin with a <strong>Leadership Clarity Session</strong> to get clear on your goals,
              your biggest blockers, and the best next step for your coaching journey.
            </p>
            <div className="mt-10">
              <Link href="/book" className="btn-primary">
                Book Your Free Discovery Call
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-[#1A1A1A] text-white">
          <div className="container-tight text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Your breakthrough is waiting.
            </h2>
            <p className="mt-6 text-xl text-[#A3A3A3] max-w-2xl mx-auto">
              Take the first step toward the career and leadership you deserve.
            </p>
            <div className="mt-10">
              <Link href="/book" className="btn-primary">
                Book Your Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
