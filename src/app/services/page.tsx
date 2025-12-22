import Link from "next/link";
import { Header, Footer } from "@/components";

const services = [
  {
    title: "DEI Workshops",
    description: "Interactive sessions that go beyond awareness to create actionable change. Customized for your organization's unique challenges.",
    href: "/services/dei-workshops",
    color: "#E91E8C",
  },
  {
    title: "Leadership Development",
    description: "Comprehensive programs to identify, nurture, and elevate diverse leadership talent within your organization.",
    href: "/services/leadership-development",
    color: "#FFC425",
  },
  {
    title: "Keynote Speaking",
    description: "Powerful presentations that inspire, educate, and motivate your teams to embrace inclusion.",
    href: "/services/keynote-speaking",
    color: "#C4D82E",
  },
  {
    title: "Consulting",
    description: "Strategic partnership to assess, design, and implement sustainable DEI initiatives.",
    href: "/services/consulting",
    color: "#6ECEF5",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#FDE8F3] to-white">
          <div className="container-wide">
            <div className="max-w-4xl">
              <p className="text-sm font-medium text-[#E91E8C] uppercase tracking-widest mb-4">
                Our Services
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                Solutions that
                <br />
                <span className="text-gradient">drive change.</span>
              </h1>
              <p className="mt-6 text-xl text-[#525252] max-w-2xl leading-relaxed">
                Comprehensive programs designed to transform your organization from the inside out.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="card-bordered group hover:border-[#E91E8C] transition-all"
                >
                  <div
                    className="w-4 h-4 rounded-full mb-6"
                    style={{ backgroundColor: service.color }}
                  />
                  <h2 className="heading-card group-hover:text-[#E91E8C] transition-colors">
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
