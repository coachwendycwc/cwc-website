import Link from "next/link";
import { Header, Footer } from "@/components";

const coachingTypes = [
  {
    title: "Executive Coaching",
    description: "For senior leaders and executives ready to amplify their impact and navigate complex organizational dynamics with confidence.",
    href: "/executive-coaching",
    features: ["Strategic leadership development", "Executive presence", "Stakeholder management", "Work-life integration"],
  },
  {
    title: "Life Coaching",
    description: "For women of color at any career stage seeking clarity, confidence, and a path to living authentically.",
    href: "/life-coaching",
    features: ["Career transitions", "Imposter syndrome", "Personal branding", "Goal achievement"],
  },
];

const testimonials = [
  {
    quote: "The coaching gave me clarity and confidence to step into leadership I never thought possible. I finally found my voice.",
    author: "Michelle R.",
    role: "Senior Director",
  },
  {
    quote: "Working with CWC changed everything. I went from questioning my worth to owning my expertise unapologetically.",
    author: "Tiffany C.",
    role: "VP of Marketing",
  },
];

export default function ForIndividualsPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#FDE8F3] to-white">
          <div className="container-wide">
            <div className="max-w-4xl">
              <p className="text-sm font-medium text-[#E91E8C] uppercase tracking-widest mb-4">
                For Individuals
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                You already have
                <br />
                <span className="text-gradient">everything you need.</span>
              </h1>
              <p className="mt-6 text-xl text-[#525252] max-w-2xl leading-relaxed">
                Executive and life coaching designed specifically for women of color ready
                to break through barriers, silence imposter syndrome, and step fully into their power.
              </p>
              <div className="mt-10">
                <Link href="/book" className="btn-primary">
                  Book a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Coaching Types */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-8">
              {coachingTypes.map((type) => (
                <div key={type.title} className="card-bordered">
                  <h3 className="heading-card text-[#E91E8C]">{type.title}</h3>
                  <p className="text-[#737373] mt-3 leading-relaxed">{type.description}</p>

                  <ul className="mt-6 space-y-3">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-[#525252]">
                        <svg
                          className="w-5 h-5 text-[#E91E8C]"
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
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href={type.href} className="link-arrow mt-8 text-sm">
                    Learn more
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                What to <span className="text-gradient">Expect</span>
              </h2>
              <p className="body-large mt-6">
                Our coaching process is designed to meet you where you are and take you where you want to be.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Discovery Call",
                  description: "A free 30-minute conversation to understand your goals and determine if we're a good fit.",
                },
                {
                  title: "Personalized Plan",
                  description: "We create a coaching plan tailored to your specific challenges, aspirations, and timeline.",
                },
                {
                  title: "Ongoing Support",
                  description: "Regular sessions plus between-session support to keep you accountable and moving forward.",
                },
              ].map((item, index) => (
                <div key={item.title} className="card text-center">
                  <div className="w-12 h-12 bg-[#FDE8F3] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-semibold text-[#E91E8C]">{index + 1}</span>
                  </div>
                  <h3 className="heading-card">{item.title}</h3>
                  <p className="text-[#737373] mt-3">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                Success <span className="text-gradient">Stories</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card bg-[#F5F5F5]">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-[#E91E8C]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-lg text-[#404040] leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 pt-6 border-t border-[#E5E5E5]">
                    <div className="font-semibold text-[#1A1A1A]">{testimonial.author}</div>
                    <div className="text-sm text-[#737373]">{testimonial.role}</div>
                  </div>
                </div>
              ))}
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
              Take the first step toward the career and life you deserve.
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
