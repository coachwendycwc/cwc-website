import Link from "next/link";
import { Header, Footer } from "@/components";
import { siteConfig } from "@/config";

const credentials = [
  "B.A., Colgate University",
  "M.P.A., Baruch College School of Public Affairs",
  "M.S.Ed., Baruch College School of Public Affairs",
  "Executive Education, Columbia Business School",
];

const certifications = [
  "ICF Member",
  "Certified DiSC® Facilitator",
  "Accomplishment Coaching Certified",
  "Imposter Syndrome Coach Practitioner",
];

const expertise = [
  "Executive Coaching & Leadership Transformation",
  "Organizational Development Strategy",
  "DiSC® Assessment & Facilitation",
  "Team Dynamics & Performance Coaching",
  "Workplace Culture & Psychological Safety",
  "Courageous Conversations & Conflict Navigation",
];

const affiliations = [
  "Faculty Member, Surge Institute",
  "Faculty Member, International Coaching Leadership Institute",
  "Lead Facilitator, WOCIP Global Leadership Accelerator Program",
  "Developing Capacity Coach Affiliate",
  "Featured on Bloomberg QuickTake",
];

const notableClients = [
  "TD Bank",
  "Hills Pet Nutrition",
  "University of Michigan",
  "NJ Arts & Culture Renewal Fund",
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#E8F8FD] to-white">
          <div className="container-wide">
            <div className="max-w-4xl">
              <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-widest mb-4">
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

        {/* Meet Wendy Section */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-widest mb-4">
                  Meet Your Coach
                </p>
                <h2 className="heading-display">
                  Wendy Perdomo
                </h2>
                <p className="text-lg text-[#737373] mt-2">M.P.A., M.S.Ed</p>
                <p className="body-large mt-6">
                  Wendy Perdomo is the Founder and Executive Leadership &amp; Life Coach at Coaching Women of Color, LLC, a premier coaching and leadership development firm committed to advancing the voice, visibility, and impact of professional women of color in today&apos;s workforce. With over two decades of experience across the nonprofit, education, and public sectors, Wendy is a master facilitator, certified executive coach, and organizational development strategist.
                </p>
                <p className="body-large mt-4">
                  Wendy partners with organizations and executives to cultivate inclusive, high-performing cultures where people and teams can thrive. As a certified DiSC® facilitator, she leverages assessment-based coaching and facilitation to improve communication, strengthen collaboration, and build psychologically safe environments that foster trust, cohesion, and accountability.
                </p>
                <p className="body-large mt-4">
                  Widely regarded as a strategic thought partner, Wendy helps leaders at all levels refine their leadership presence, develop emotional intelligence, and navigate complex organizational challenges—from team transitions and workplace culture repair to bias incidents and courageous conversations. She is passionate about creating space for women of color to lead authentically, manage power with confidence, and move with clarity through all levels of leadership.
                </p>

                {/* Education */}
                <div className="mt-8">
                  <h3 className="font-semibold text-[#1A1A1A] mb-3">Education</h3>
                  <div className="flex flex-wrap gap-2">
                    {credentials.map((cred) => (
                      <span
                        key={cred}
                        className="px-3 py-1 bg-[#F5F5F5] text-[#525252] text-sm rounded-full"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="mt-6">
                  <h3 className="font-semibold text-[#1A1A1A] mb-3">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {certifications.map((cert) => (
                      <span
                        key={cert}
                        className="px-3 py-1 bg-[#E8F8FD] text-[#1A9FCC] text-sm rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Photo and Stats */}
              <div className="bg-[#F5F5F5] rounded-3xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${siteConfig.basePath}/images/new/headshot-professional-1.jpg`}
                    alt="Wendy Perdomo"
                    className="w-80 md:w-96 h-auto mx-auto rounded-2xl object-cover"
                  />
                  <p className="text-sm text-[#737373] mt-4">
                    Founder & Executive Leadership Coach
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    { value: "25+", label: "Years Experience" },
                    { value: "500+", label: "Leaders Developed" },
                    { value: "50+", label: "Organizations Served" },
                  ].map((stat) => (
                    <div key={stat.label} className="border-b border-[#E5E5E5] pb-4 last:border-0 last:pb-0">
                      <div className="text-3xl font-semibold text-[#3EBCE8]">{stat.value}</div>
                      <div className="text-[#737373] text-sm mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                Areas of <span className="text-gradient">Expertise</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertise.map((item) => (
                <div key={item} className="card text-center">
                  <div className="w-10 h-10 bg-[#E8F8FD] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#3EBCE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#525252] font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Affiliations & Clients Section */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="heading-card mb-6">Affiliations</h2>
                <ul className="space-y-3">
                  {affiliations.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#3EBCE8] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#525252]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="heading-card mb-6">Notable Clients</h2>
                <div className="flex flex-wrap gap-3">
                  {notableClients.map((client) => (
                    <span
                      key={client}
                      className="px-4 py-2 bg-[#F5F5F5] text-[#525252] rounded-full"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section bg-white">
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
                <div key={value.title} className="card-bordered">
                  <h3 className="heading-card text-[#3EBCE8]">{value.title}</h3>
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
              <Link href="/book" className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-[#1A1A1A]">
                Book a Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
