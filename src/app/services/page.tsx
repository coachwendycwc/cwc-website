import Link from "next/link";
import { Header, Footer } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore coaching, keynote speaking, workshops, retreats, and performance coaching solutions from Coaching Women of Color. Customized programs for organizations and leaders.",
  alternates: {
    canonical: "https://coachingwomenofcolor.com/services/",
  },
};

const services = [
  {
    title: "Executive Coaching",
    description: "1:1 high-impact coaching for senior leaders and high-potential talent who need a confidential, strategic space to lead with clarity and confidence.",
    href: "/services/executive-coaching",
    color: "#3EBCE8",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
  {
    title: "Group Coaching",
    description: "Leadership development at scale. Build capability across your organization while creating shared language and stronger peer connection.",
    href: "/services/group-coaching",
    color: "#FFC425",
    icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
  },
  {
    title: "Keynote Speaking",
    description: "Engaging, high-impact presentations that spark real conversation and meaningful action—not just applause.",
    href: "/services/keynote-speaking",
    color: "#C4D82E",
    icon: "M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z",
  },
  {
    title: "Workshops & Webinars",
    description: "Interactive learning experiences that build skills, shift mindsets, and equip your teams with practical tools they can use immediately.",
    href: "/services/workshops-webinars",
    color: "#E91E8C",
    icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5",
  },
  {
    title: "Multi-Session Virtual Series",
    description: "Sustained behavior change through multi-session programs where leaders learn, apply, and refine over time.",
    href: "/services/virtual-series",
    color: "#9333EA",
    icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25",
  },
  {
    title: "Strategic Retreats",
    description: "Facilitated sessions that align your leadership team, clarify strategic direction, and turn honest dialogue into actionable outcomes.",
    href: "/services/strategic-retreats",
    color: "#FFC425",
    icon: "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z",
  },
  {
    title: "Performance Coaching (RESET Method®)",
    description: "A structured, dual-engagement coaching framework that closes performance gaps—without defaulting to avoidance or escalation.",
    href: "/services/performance-coaching",
    color: "#E91E8C",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
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
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <svg className="w-5 h-5" style={{ color: service.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                    </svg>
                  </div>
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
