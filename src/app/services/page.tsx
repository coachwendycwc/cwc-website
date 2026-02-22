import Link from "next/link";
import { Header, Footer } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore coaching, keynote speaking, workshops, retreats, and performance coaching solutions from Coaching Women of Color. Customized programs for organizations and leaders.",
};

const services = [
  {
    title: "Executive Coaching",
    description: "1:1 high-impact coaching for senior leaders and high-potential talent who need a confidential, strategic space to lead with clarity and confidence.",
    href: "/services/executive-coaching",
    color: "#3EBCE8",
  },
  {
    title: "Group Coaching",
    description: "Leadership development at scale. Build capability across your organization while creating shared language and stronger peer connection.",
    href: "/services/group-coaching",
    color: "#FFC425",
  },
  {
    title: "Keynote Speaking",
    description: "Engaging, high-impact presentations that spark real conversation and meaningful action—not just applause.",
    href: "/services/keynote-speaking",
    color: "#C4D82E",
  },
  {
    title: "Workshops & Webinars",
    description: "Interactive learning experiences that build skills, shift mindsets, and equip your teams with practical tools they can use immediately.",
    href: "/services/workshops-webinars",
    color: "#E91E8C",
  },
  {
    title: "Multi-Session Virtual Series",
    description: "Sustained behavior change through multi-session programs where leaders learn, apply, and refine over time.",
    href: "/services/virtual-series",
    color: "#9333EA",
  },
  {
    title: "Strategic Retreats",
    description: "Facilitated sessions that align your leadership team, clarify strategic direction, and turn honest dialogue into actionable outcomes.",
    href: "/services/strategic-retreats",
    color: "#FFC425",
  },
  {
    title: "Performance Coaching (RESET Method™)",
    description: "A structured, dual-engagement coaching framework that closes performance gaps—without defaulting to avoidance or escalation.",
    href: "/services/performance-coaching",
    color: "#E91E8C",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#E8F8FD] to-white">
          <div className="container-wide">
            <div className="max-w-4xl">
              <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-widest mb-4">
                Our Services
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                Solutions that
                <br />
                <span className="text-gradient">drive change.</span>
              </h1>
              <p className="mt-6 text-xl text-[#525252] max-w-2xl leading-relaxed">
                High-impact coaching and development programs that strengthen leaders and transform culture. Every engagement is customized to your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="card-bordered group hover:border-[#3EBCE8] transition-all"
                >
                  <div
                    className="w-4 h-4 rounded-full mb-6"
                    style={{ backgroundColor: service.color }}
                  />
                  <h2 className="heading-card group-hover:text-[#3EBCE8] transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-[#737373] mt-3 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="link-arrow mt-6 text-sm">Learn more</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-[#1A1A1A] text-white">
          <div className="container-tight text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Not sure where to start?
            </h2>
            <p className="mt-6 text-xl text-[#A3A3A3] max-w-2xl mx-auto">
              Let&apos;s talk about your organization&apos;s needs and find the right solution together.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
