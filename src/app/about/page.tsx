import Link from "next/link";
import { Header, Footer } from "@/components";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#FDE8F3] to-white">
          <div className="container-wide">
            <div className="max-w-4xl">
              <p className="text-sm font-medium text-[#E91E8C] uppercase tracking-widest mb-4">
                About Us
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                Transforming workplaces.
                <br />
                <span className="text-gradient">Empowering leaders.</span>
              </h1>
              <p className="mt-6 text-xl text-[#525252] max-w-2xl leading-relaxed">
                Coaching Women of Color was founded with a clear mission: to create
                inclusive environments where women of color don&apos;t just survive—they thrive.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="heading-display">
                  Our Mission
                </h2>
                <p className="body-large mt-6">
                  We partner with organizations committed to building cultures where
                  diversity isn&apos;t just welcomed—it&apos;s celebrated. Through customized
                  workshops, executive coaching, and strategic consulting, we help
                  companies move beyond performative gestures to create lasting,
                  meaningful change.
                </p>
                <p className="body-large mt-4">
                  For individuals, we provide the support, tools, and strategies needed
                  to navigate corporate environments, overcome imposter syndrome, and
                  step confidently into leadership roles.
                </p>
              </div>
              <div className="bg-[#F5F5F5] rounded-3xl p-8 lg:p-12">
                <div className="space-y-8">
                  {[
                    { value: "300+", label: "Coaching Hours Delivered" },
                    { value: "100%", label: "Client Satisfaction Rate" },
                    { value: "50+", label: "Organizations Transformed" },
                  ].map((stat) => (
                    <div key={stat.label} className="border-b border-[#E5E5E5] pb-6 last:border-0 last:pb-0">
                      <div className="text-4xl font-semibold text-[#E91E8C]">{stat.value}</div>
                      <div className="text-[#737373] mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                What We <span className="text-gradient">Stand For</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Authenticity",
                  description: "We believe in showing up as your full self. Our approach celebrates the unique perspectives and experiences that women of color bring to leadership.",
                },
                {
                  title: "Impact",
                  description: "Every program, every session, every conversation is designed to create measurable, lasting change—not just check boxes.",
                },
                {
                  title: "Community",
                  description: "We build connections. Our work creates networks of support that extend far beyond the workshop or coaching session.",
                },
              ].map((value) => (
                <div key={value.title} className="card">
                  <h3 className="heading-card text-[#E91E8C]">{value.title}</h3>
                  <p className="text-[#737373] mt-4 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-[#1A1A1A] text-white">
          <div className="container-tight text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Ready to partner with us?
            </h2>
            <p className="mt-6 text-xl text-[#A3A3A3] max-w-2xl mx-auto">
              Whether you&apos;re an organization seeking transformation or an individual
              ready for breakthrough—let&apos;s start the conversation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link href="/for-organizations" className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-[#1A1A1A]">
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
