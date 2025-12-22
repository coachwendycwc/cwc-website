import Link from "next/link";
import { Header, Footer } from "@/components";

export default function ConsultingPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#E8F8FD] to-white">
          <div className="container-wide">
            <div className="max-w-4xl">
              <Link href="/for-organizations" className="text-sm font-medium text-[#E91E8C] hover:text-[#C4186F] transition-colors">
                ← Back to Solutions
              </Link>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                Strategic Consulting
              </h1>
              <p className="mt-6 text-xl text-[#525252] max-w-2xl leading-relaxed">
                Partner with us to assess, design, and implement sustainable DEI initiatives
                that align with your business objectives.
              </p>
              <div className="mt-10">
                <Link href="/contact" className="btn-primary">
                  Start a Conversation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                How We <span className="text-gradient">Help</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "DEI Assessment",
                  description: "Comprehensive evaluation of your current state, including employee surveys, policy review, and cultural analysis.",
                },
                {
                  title: "Strategy Development",
                  description: "Custom roadmap creation with clear goals, timelines, and accountability measures aligned to business objectives.",
                },
                {
                  title: "Implementation Support",
                  description: "Hands-on guidance to roll out initiatives effectively, including change management and communication strategies.",
                },
                {
                  title: "Metrics & Measurement",
                  description: "Establish KPIs, tracking systems, and reporting frameworks to demonstrate progress and ROI.",
                },
              ].map((service) => (
                <div key={service.title} className="card-bordered">
                  <h3 className="heading-card">{service.title}</h3>
                  <p className="text-[#737373] mt-3 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="heading-display">
                  Our <span className="text-gradient">Approach</span>
                </h2>
                <p className="body-large mt-6">
                  We don&apos;t believe in off-the-shelf solutions. Every organization is
                  different, and cookie-cutter approaches don&apos;t create lasting change.
                </p>
                <p className="body-large mt-4">
                  We take the time to understand your unique culture, challenges, and goals
                  before recommending any solutions. Our recommendations are always practical,
                  measurable, and aligned with your business strategy.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Listen", description: "We start by understanding your organization deeply." },
                  { step: "02", title: "Analyze", description: "We identify gaps, opportunities, and priorities." },
                  { step: "03", title: "Recommend", description: "We present actionable strategies tailored to you." },
                  { step: "04", title: "Partner", description: "We support implementation every step of the way." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="text-2xl font-semibold text-[#6ECEF5]">{item.step}</div>
                    <div>
                      <h3 className="font-semibold text-[#1A1A1A]">{item.title}</h3>
                      <p className="text-[#737373] text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-[#1A1A1A] text-white">
          <div className="container-tight text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Ready for strategic partnership?
            </h2>
            <p className="mt-6 text-xl text-[#A3A3A3]">
              Let&apos;s discuss how we can help you achieve your DEI goals.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn-primary">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
