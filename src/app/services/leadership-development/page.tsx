import Link from "next/link";
import { Header, Footer } from "@/components";
import { siteConfig } from "@/config";

export default function LeadershipDevelopmentPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#FFF8E5] to-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Link href="/for-organizations" className="text-sm font-medium text-[#3EBCE8] hover:text-[#1A9FCC] transition-colors">
                  ← Back to Solutions
                </Link>
                <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                  Leadership Development
                </h1>
                <p className="mt-6 text-xl text-[#525252] max-w-2xl leading-relaxed">
                  Comprehensive programs designed to identify, nurture, and elevate diverse
                  leadership talent within your organization.
                </p>
                <div className="mt-10">
                  <Link href="/contact" className="btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#FFC425]/20 to-[#3EBCE8]/20 rounded-3xl blur-2xl" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${siteConfig.basePath}/images/image4.jpg`}
                  alt="Wendy Perdomo on stage delivering leadership training"
                  className="relative w-full h-auto rounded-2xl shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="heading-display">
                  Develop Leaders
                  <br />
                  <span className="text-gradient">at Every Level</span>
                </h2>
                <p className="body-large mt-6">
                  Great leaders aren&apos;t born—they&apos;re developed. Our leadership programs
                  combine proven frameworks with real-world application to build the skills
                  your future leaders need to succeed.
                </p>
                <p className="body-large mt-4">
                  We specialize in developing women of color for leadership roles, addressing
                  the unique challenges they face while building on their unique strengths.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { title: "Emerging Leaders", description: "For high-potential individual contributors ready to step into management." },
                  { title: "Mid-Level Leaders", description: "For managers building their leadership presence and strategic thinking." },
                  { title: "Senior Leaders", description: "For executives navigating complex organizational dynamics." },
                ].map((program) => (
                  <div key={program.title} className="card-bordered">
                    <h3 className="heading-card">{program.title}</h3>
                    <p className="text-[#737373] mt-2">{program.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Components */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                Program <span className="text-gradient">Components</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Assessment", description: "360-degree feedback and leadership style analysis" },
                { title: "Training", description: "Interactive workshops on core leadership competencies" },
                { title: "Coaching", description: "One-on-one sessions for personalized development" },
                { title: "Mentorship", description: "Connections with senior leaders and peer networks" },
              ].map((component) => (
                <div key={component.title} className="card text-center">
                  <h3 className="heading-card text-[#FFC425]">{component.title}</h3>
                  <p className="text-[#737373] mt-2 text-sm">{component.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-[#1A1A1A] text-white">
          <div className="container-tight text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Build your leadership pipeline.
            </h2>
            <p className="mt-6 text-xl text-[#A3A3A3]">
              Invest in the leaders who will shape your organization&apos;s future.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
