import Link from "next/link";
import { Header, Footer } from "@/components";

export default function GroupCoachingPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#FFF8E5] to-white">
          <div className="container-wide">
            <div className="max-w-4xl">
              <Link href="/for-individuals" className="text-sm font-medium text-[#3EBCE8] hover:text-[#1A9FCC] transition-colors">
                ← Back to Individual Services
              </Link>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                Group Coaching Programs
              </h1>
              <p className="mt-6 text-xl text-[#525252] max-w-2xl leading-relaxed">
                Experience the power of community. Grow alongside other ambitious
                women of color in our transformative group programs.
              </p>
              <div className="mt-10">
                <Link href="/contact" className="btn-primary">
                  Join the Waitlist
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Group Coaching */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="heading-display">
                  Grow <span className="text-gradient">Together</span>
                </h2>
                <p className="body-large mt-6">
                  There&apos;s something magical that happens when women of color come
                  together to support each other&apos;s growth. You realize you&apos;re not
                  alone in your challenges—and you find strength in community.
                </p>
                <p className="body-large mt-4">
                  Our group coaching programs combine the benefits of professional
                  coaching with peer support, accountability, and shared wisdom.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { title: "Community", description: "Connect with like-minded women who understand your journey and challenges." },
                  { title: "Accountability", description: "Stay committed to your goals with support from your cohort." },
                  { title: "Diverse Perspectives", description: "Gain insights from women across industries and backgrounds." },
                  { title: "Affordable", description: "Access professional coaching at a fraction of 1:1 pricing." },
                ].map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="w-2 h-2 bg-[#FFC425] rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#1A1A1A]">{benefit.title}</h3>
                      <p className="text-[#737373] text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                Our <span className="text-gradient">Programs</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Leadership Circle",
                  duration: "12 weeks",
                  description: "For emerging and mid-level leaders ready to step into their power. Covers executive presence, strategic influence, and authentic leadership.",
                  features: ["Weekly group sessions", "Monthly 1:1 coaching", "Private community access", "Resource library"]
                },
                {
                  title: "Career Accelerator",
                  duration: "8 weeks",
                  description: "For professionals navigating career transitions or seeking advancement. Focus on clarity, positioning, and strategic career moves.",
                  features: ["Bi-weekly group sessions", "Career assessment tools", "Peer accountability pods", "Interview prep resources"]
                },
              ].map((program) => (
                <div key={program.title} className="card-bordered">
                  <p className="text-sm font-medium text-[#FFC425] uppercase tracking-wider">{program.duration}</p>
                  <h3 className="heading-card mt-2">{program.title}</h3>
                  <p className="text-[#737373] mt-3 leading-relaxed">{program.description}</p>
                  <ul className="mt-6 space-y-2">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-[#525252]">
                        <svg className="w-4 h-4 text-[#3EBCE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                What to <span className="text-gradient">Expect</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Small Cohorts", description: "Intimate groups of 8-12 women ensure everyone gets attention and opportunities to share." },
                { title: "Expert Facilitation", description: "Sessions are led by experienced coaches who create safe, productive spaces for growth." },
                { title: "Real Results", description: "Structured curriculum combined with real-world application leads to lasting transformation." },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-12 h-12 bg-[#E8F8FD] rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-4 h-4 bg-[#3EBCE8] rounded-full" />
                  </div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-2">{item.title}</h3>
                  <p className="text-[#737373] text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-[#1A1A1A] text-white">
          <div className="container-tight text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Ready to grow with community?
            </h2>
            <p className="mt-6 text-xl text-[#A3A3A3]">
              Join our waitlist to be notified when the next cohort opens.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Join the Waitlist
              </Link>
              <Link href="/book" className="btn-secondary">
                Schedule a Call
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
