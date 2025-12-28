import Link from "next/link";
import { Header, Footer } from "@/components";

export default function LifeCoachingPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#F7FAE5] to-white">
          <div className="container-wide">
            <div className="max-w-4xl">
              <Link href="/for-individuals" className="text-sm font-medium text-[#3EBCE8] hover:text-[#1A9FCC] transition-colors">
                ← Back to Individual Services
              </Link>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                Life Coaching
              </h1>
              <p className="mt-6 text-xl text-[#525252] max-w-2xl leading-relaxed">
                Create a life aligned with your values, purpose, and vision.
                Transform obstacles into opportunities for growth.
              </p>
              <div className="mt-10">
                <Link href="/book" className="btn-primary">
                  Start Your Journey
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What is Life Coaching */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="heading-display">
                  Design Your <span className="text-gradient">Best Life</span>
                </h2>
                <p className="body-large mt-6">
                  Life coaching is for women who want more—more fulfillment, more balance,
                  more joy. It&apos;s about getting clear on what you truly want and creating
                  a path to get there.
                </p>
                <p className="body-large mt-4">
                  As women of color, we often carry expectations and burdens that aren&apos;t
                  ours to carry. Life coaching helps you shed what doesn&apos;t serve you and
                  build a life that truly reflects who you are.
                </p>
              </div>
              <div className="bg-[#F5F5F5] rounded-3xl p-8 lg:p-12">
                <h3 className="heading-card mb-6">Life Coaching Helps You:</h3>
                <ul className="space-y-4">
                  {[
                    "Gain clarity on your values and purpose",
                    "Set and achieve meaningful goals",
                    "Overcome limiting beliefs and self-doubt",
                    "Navigate major life transitions",
                    "Improve relationships and boundaries",
                    "Create sustainable work-life balance",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#C4D82E] rounded-full" />
                      <span className="text-[#525252]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                Areas of <span className="text-gradient">Focus</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Career Transitions",
                  description: "Navigate career changes, job searches, or pivots with confidence. Discover what you truly want from your professional life."
                },
                {
                  title: "Personal Growth",
                  description: "Overcome self-limiting beliefs, build confidence, and develop the mindset needed to achieve your goals."
                },
                {
                  title: "Relationships",
                  description: "Improve communication, set healthy boundaries, and build more fulfilling connections in all areas of life."
                },
                {
                  title: "Life Balance",
                  description: "Create harmony between career, family, health, and personal interests without feeling overwhelmed."
                },
              ].map((area) => (
                <div key={area.title} className="card-bordered">
                  <h3 className="heading-card">{area.title}</h3>
                  <p className="text-[#737373] mt-3 leading-relaxed">{area.description}</p>
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
                How It <span className="text-gradient">Works</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Connect", description: "Free 30-minute call to discuss your goals and see if we're a good fit." },
                { step: "02", title: "Discover", description: "Deep-dive session to understand your current situation and desired outcomes." },
                { step: "03", title: "Transform", description: "Regular coaching sessions with exercises and accountability." },
                { step: "04", title: "Thrive", description: "Integrate new habits and mindsets for lasting change." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="text-4xl font-semibold text-[#C4D82E] mb-4">{item.step}</div>
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
              Your transformation starts here.
            </h2>
            <p className="mt-6 text-xl text-[#A3A3A3]">
              Take the first step toward the life you deserve.
              Schedule a free discovery call today.
            </p>
            <div className="mt-10">
              <Link href="/book" className="btn-primary">
                Book Your Free Call
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
