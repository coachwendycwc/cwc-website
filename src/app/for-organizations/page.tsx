import Link from "next/link";
import { Header, Footer } from "@/components";

const services = [
  {
    title: "DEI Workshops",
    description: "Interactive sessions that go beyond awareness to create actionable change. Customized for your organization's unique challenges and goals.",
    href: "/services/dei-workshops",
    color: "#E91E8C",
  },
  {
    title: "Leadership Development",
    description: "Comprehensive programs designed to identify, nurture, and elevate diverse leadership talent within your organization.",
    href: "/services/leadership-development",
    color: "#FFC425",
  },
  {
    title: "Keynote Speaking",
    description: "Powerful presentations that inspire, educate, and motivate your teams to embrace inclusion as a competitive advantage.",
    href: "/services/keynote-speaking",
    color: "#C4D82E",
  },
  {
    title: "Consulting",
    description: "Strategic partnership to assess, design, and implement sustainable DEI initiatives that align with your business objectives.",
    href: "/services/consulting",
    color: "#6ECEF5",
  },
];

const benefits = [
  "Increased employee engagement and retention",
  "Enhanced innovation through diverse perspectives",
  "Stronger employer brand and talent attraction",
  "Improved decision-making at all levels",
  "Better understanding of diverse customer bases",
  "Measurable progress with clear accountability",
];

export default function ForOrganizationsPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#FDE8F3] to-white">
          <div className="container-wide">
            <div className="max-w-4xl">
              <p className="text-sm font-medium text-[#E91E8C] uppercase tracking-widest mb-4">
                For Organizations
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                Build cultures where
                <br />
                <span className="text-gradient">everyone thrives.</span>
              </h1>
              <p className="mt-6 text-xl text-[#525252] max-w-2xl leading-relaxed">
                Transform your workplace with programs designed to create lasting change.
                We help organizations move beyond performative DEI to build truly inclusive cultures.
              </p>
              <div className="mt-10">
                <Link href="/contact" className="btn-primary">
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                Our <span className="text-gradient">Solutions</span>
              </h2>
              <p className="body-large mt-6">
                Comprehensive programs tailored to your organization&apos;s unique needs and goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="card-bordered group hover:border-[#E91E8C]"
                >
                  <div
                    className="w-3 h-3 rounded-full mb-4"
                    style={{ backgroundColor: service.color }}
                  />
                  <h3 className="heading-card group-hover:text-[#E91E8C] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#737373] mt-3 leading-relaxed">{service.description}</p>
                  <span className="link-arrow mt-6 text-sm">Learn more</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="heading-display">
                  Why Partner
                  <br />
                  <span className="text-gradient">With Us?</span>
                </h2>
                <p className="body-large mt-6">
                  We don&apos;t believe in one-size-fits-all solutions. Every organization
                  is different, and we take the time to understand your unique culture,
                  challenges, and goals before designing a program that will actually work.
                </p>
              </div>
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
                <h3 className="heading-card mb-6">The CWC Difference</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#E91E8C] flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-[#525252]">{benefit}</span>
                    </li>
                  ))}
                </ul>
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
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "We learn about your organization, culture, and goals." },
                { step: "02", title: "Design", description: "We create a customized program tailored to your needs." },
                { step: "03", title: "Deliver", description: "We implement with excellence and ongoing support." },
                { step: "04", title: "Measure", description: "We track outcomes and refine for continuous improvement." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="text-5xl font-semibold text-[#E91E8C]/20 mb-4">{item.step}</div>
                  <h3 className="heading-card">{item.title}</h3>
                  <p className="text-[#737373] mt-2">{item.description}</p>
                </div>
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
              Let&apos;s discuss how we can help you build a more inclusive workplace.
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
