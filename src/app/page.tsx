import Link from "next/link";
import { Header, Footer } from "@/components";
import { siteConfig } from "@/config";

// Service cards with different petal colors
const services = [
  {
    title: "DEI Workshops",
    description: "Transform culture. Build belonging.",
    href: "/services/dei-workshops",
    color: "pink",
  },
  {
    title: "Leadership Development",
    description: "Elevate potential. Accelerate growth.",
    href: "/services/leadership-development",
    color: "yellow",
  },
  {
    title: "Keynote Speaking",
    description: "Inspire change. Ignite action.",
    href: "/services/keynote-speaking",
    color: "green",
  },
  {
    title: "Consulting",
    description: "Strategic insight. Lasting impact.",
    href: "/services/consulting",
    color: "blue",
  },
];

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "500+", label: "Leaders Developed" },
  { value: "50+", label: "Organizations Served" },
  { value: "100%", label: "Client Satisfaction" },
];

const testimonials = [
  {
    quote:
      "Wendy facilitated a board retreat for us. She is a brilliant facilitator whose empathetic approach builds trust quickly. Wendy's superpower is the speed with which she is able to assess needs, navigate dynamics, and coalesce groups around shared goals. She is in a class by herself!",
    author: "Lynne Toye",
    role: "Newark, NJ",
  },
  {
    quote:
      "Wendy is an incredible coach who understands women of color and helped me feel seen, heard, and understood. My experience with Wendy transformed coaching from a mere task on my to-do list into a nurturing experience that truly supported my growth.",
    author: "Stephanie Lopez",
    role: "California",
  },
  {
    quote:
      "Working with Wendy kept me steady in a very, very difficult year. And not just me, but my colleague as well. The relationship has changed the emotionality of the workplace, allowing for better collaboration and better outcomes.",
    author: "Emily Kurtz",
    role: "Brooklyn, NY",
  },
  {
    quote:
      "Wendy pushed me to consider my strengths and how to apply myself for best results. She helped me work through difficult issues by brainstorming solutions that work for me. The customized attention and sage advice made all the difference on my journey.",
    author: "Lisa Morgan",
    role: "Ontario, Canada",
  },
  {
    quote:
      "Wendy has a holistic approach to coaching, seeing me not only as a professional, but as the multi-faceted woman that I am. She seamlessly creates a safe and non-judgmental approach all while thoughtfully holding the mirror to thoughts and actions that did not serve me.",
    author: "Patricia Quintero",
    role: "New York, NY",
  },
  {
    quote:
      "With your coaching, I feel a sense of responsibility and purpose, but also potency and power. You said something that changed everything: 'You are not there to become an executive in the way you're imagining it, you are there to become you and for the system to shift around you.'",
    author: "Catarina Campbell",
    role: "Vermont",
  },
];

// Color mapping for service cards
const colorClasses: Record<string, { border: string; bg: string; text: string }> = {
  pink: {
    border: "hover:border-[#3EBCE8]",
    bg: "bg-[#E8F8FD]",
    text: "text-[#3EBCE8]",
  },
  yellow: {
    border: "hover:border-[#FFC425]",
    bg: "bg-[#FFF8E5]",
    text: "text-[#B38300]",
  },
  green: {
    border: "hover:border-[#C4D82E]",
    bg: "bg-[#F7FAE5]",
    text: "text-[#7F8D1D]",
  },
  blue: {
    border: "hover:border-[#6ECEF5]",
    bg: "bg-[#E8F8FD]",
    text: "text-[#147DA0]",
  },
};

export default function Home() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
          {/* Subtle pink gradient background */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, #E8F8FD 0%, #ffffff 50%, #F3F0F8 100%)" }}
          />

          <div className="container-wide relative z-10 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text content */}
              <div className="text-center lg:text-left">
                {/* Power words headline */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight text-[#1A1A1A] leading-[1.1]">
                  Transform.
                  <br />
                  <span className="text-gradient">Elevate.</span>
                  <br />
                  Lead.
                </h1>

                <p className="mt-8 text-xl md:text-2xl text-[#525252] max-w-2xl leading-relaxed">
                  Empowering organizations to build inclusive cultures where women of color don&apos;t just belong—they thrive.
                </p>

                {/* Dual CTA */}
                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/for-organizations" className="btn-primary">
                    Partner With Us
                  </Link>
                  <Link href="/for-individuals" className="btn-secondary">
                    Individual Coaching
                  </Link>
                </div>
              </div>

              {/* Photo */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#3EBCE8]/20 to-[#9333EA]/20 rounded-3xl blur-2xl" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${siteConfig.basePath}/wendy-perdomo.png`}
                    alt="Wendy Perdomo - Executive Leadership Coach"
                    className="relative w-72 md:w-80 lg:w-96 h-auto rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-[#A3A3A3]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </section>

        {/* Trusted By - Client Logos */}
        <section className="section-tight bg-white border-y border-[#E5E5E5]">
          <div className="container-wide">
            <p className="text-center text-sm font-medium text-[#737373] uppercase tracking-widest mb-10">
              Transforming Leaders From
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12">
              {[
                "Johnson & Johnson",
                "Genentech",
                "VaynerMedia",
                "DataRobot",
                "TD Bank",
                "NYC Dept of Education",
                "Colgate University",
                "University of Michigan",
                "Bloomberg Quicktake",
                "Ellevate",
                "SURGE",
                "RiseBoro",
              ].map((org) => (
                <span key={org} className="text-sm md:text-base font-medium text-[#737373] hover:text-[#3EBCE8] transition-colors">
                  {org}
                </span>
              ))}
            </div>
            <p className="text-center text-xs text-[#A3A3A3] mt-8">
              And many more across Fortune 500, Healthcare, Technology, Finance & Non-Profit sectors
            </p>
          </div>
        </section>

        {/* Organizational Solutions */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                Solutions that
                <br />
                <span className="text-gradient">drive change.</span>
              </h2>
              <p className="body-large mt-6">
                Comprehensive programs designed to transform your organization from the inside out.
              </p>
            </div>

            {/* Service cards with petal colors */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className={`card-bordered group ${colorClasses[service.color].border}`}
                >
                  {/* Color accent dot */}
                  <div
                    className={`w-3 h-3 rounded-full mb-4 ${colorClasses[service.color].bg}`}
                    style={{
                      backgroundColor: service.color === 'pink' ? '#3EBCE8' :
                                       service.color === 'yellow' ? '#FFC425' :
                                       service.color === 'green' ? '#C4D82E' : '#6ECEF5'
                    }}
                  />
                  <h3 className="heading-card group-hover:text-[#3EBCE8] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#737373] mt-2">{service.description}</p>
                  <span className="link-arrow mt-6 text-sm">Learn more</span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/for-organizations" className="btn-primary">
                Explore All Solutions
              </Link>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1A1A1A] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-base md:text-lg text-[#737373] mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The CWC Difference - Dark section */}
        <section className="section bg-[#1A1A1A] text-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
                  We don&apos;t just
                  <br />
                  train teams.
                  <br />
                  <span className="text-[#3EBCE8]">We transform cultures.</span>
                </h2>
              </div>
              <div className="space-y-8">
                <p className="text-xl text-[#A3A3A3] leading-relaxed">
                  Every organization says they value diversity. We help you live it. Our approach goes beyond checkboxes and compliance to create environments where women of color genuinely thrive in leadership.
                </p>
                <ul className="space-y-4">
                  {[
                    "Customized programs for your unique challenges",
                    "Measurable outcomes that matter",
                    "Ongoing support beyond the workshop",
                    "Real expertise, real experience, real results",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#D4D4D4]">
                      <svg
                        className="w-6 h-6 text-[#3EBCE8] flex-shrink-0 mt-0.5"
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
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[#3EBCE8] font-medium hover:gap-3 transition-all"
                >
                  Learn our story
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Individual Coaching Section */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-widest mb-4">
                For Individuals
              </p>
              <h2 className="heading-display">
                You already have everything you need.
              </h2>
              <p className="body-large mt-6 max-w-2xl mx-auto">
                Executive and life coaching designed specifically for women of color ready to break through barriers, silence imposter syndrome, and step fully into their power.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/executive-coaching" className="btn-secondary">
                  Executive Coaching
                </Link>
                <Link href="/life-coaching" className="btn-secondary">
                  Life Coaching
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section gradient-pink">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="heading-display">
                Real impact.
                <br />
                <span className="text-gradient">Real stories.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card">
                  {/* Stars in pink */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-[#3EBCE8]"
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
                    <div className="font-semibold text-[#1A1A1A]">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-[#737373]">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section bg-white">
          <div className="container-tight text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A]">
              Ready to transform?
            </h2>
            <p className="body-large mt-6 max-w-xl mx-auto">
              Whether you&apos;re an organization seeking culture change or an individual ready for breakthrough—we&apos;re here.
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
