import Link from "next/link";
import { Header, Footer, Breadcrumbs } from "@/components";
import { siteConfig } from "@/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Wendy Perdomo",
  description:
    "Meet Wendy Perdomo — executive coach, keynote speaker, and founder of Coaching Women of Color. 25+ years of leadership experience developing 500+ leaders across 50+ organizations.",
  alternates: {
    canonical: "https://coachingwomenofcolor.com/about/",
  },
};

// Person structured data for Wendy Perdomo — helps Google Knowledge Panel
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Wendy Perdomo",
  jobTitle: "Founder & Executive Leadership Coach",
  description:
    "Executive coach, keynote speaker, and founder of Coaching Women of Color. 25+ years developing 500+ leaders across 50+ organizations.",
  url: "https://coachingwomenofcolor.com/about/",
  worksFor: {
    "@type": "Organization",
    name: "Coaching Women of Color, LLC",
    url: "https://coachingwomenofcolor.com",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Colgate University",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Baruch College School of Public Affairs",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Columbia Business School",
    },
  ],
  knowsAbout: [
    "Executive Coaching",
    "Leadership Development",
    "Keynote Speaking",
    "Organizational Development",
    "DiSC Assessment & Facilitation",
    "Workplace Culture & Psychological Safety",
  ],
  sameAs: [
    "https://www.linkedin.com/in/wendyperdomoleadershipcoach/",
    "https://www.instagram.com/coachwendyp/",
    "https://www.facebook.com/coachingwomenofcolor",
  ],
};

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
  "Faculty Member & Coach Affiliate, Surge Institute",
  "Faculty Member, International Coaching Leadership Institute",
  "Lead Facilitator, WOCIP Global Leadership Accelerator Program",
  "Developing Capacity Coach Affiliate",
  "Featured on Bloomberg QuickTake",
];

const industriesServed = [
  "Financial Services",
  "Higher Education",
  "Nonprofits",
  "Technology",
  "Healthcare",
  "Government",
  "Arts & Culture",
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Header />

      <main id="main-content">
        {/* Hero Section — Cinematic Photo */}
        <section className="relative pt-24 md:pt-0 min-h-[100svh] md:min-h-[70vh] flex items-end md:items-center overflow-hidden bg-[#1A1A1A]">
          {/* Breadcrumbs — positioned over hero */}
          <div className="absolute top-28 left-0 z-20 px-6 md:px-16 lg:px-24 hidden md:block">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "About Wendy Perdomo" },
              ]}
            />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${siteConfig.basePath}/images/wendy-about.jpg`}
            alt="Wendy Perdomo, Founder of Coaching Women of Color"
            className="absolute inset-0 w-full h-full object-cover object-[50%_22%] md:object-[85%_0%] opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent from-0% via-[#1A1A1A]/40 via-55% to-[#1A1A1A] to-85% md:from-[#1A1A1A] md:from-30% md:via-[#1A1A1A]/60 md:via-45% md:to-transparent md:to-70%" />

          {/* Text — left aligned */}
          <div className="relative z-10 px-6 md:px-16 lg:px-24 pb-16 md:pb-0">
            <div className="max-w-xs md:max-w-md">
              <p className="text-xs md:text-sm font-medium text-[#3EBCE8] uppercase tracking-widest mb-4">
                About the Founder
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
                Wendy Perdomo
              </h1>
              <p className="mt-4 text-base md:text-xl text-[#C0C0C0] leading-relaxed">
                Executive coach, keynote speaker, and founder of Coaching
                Women of Color&reg; — transforming how organizations develop
                and retain women of color in leadership.
              </p>
              <div className="mt-6 md:mt-8 grid grid-cols-3 gap-4 md:flex md:gap-12">
                {[
                  { value: "25+", label: "Years Experience" },
                  { value: "500+", label: "Leaders Developed" },
                  { value: "50+", label: "Organizations Served" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl md:text-3xl font-semibold text-[#3EBCE8]">{stat.value}</div>
                    <div className="text-xs md:text-sm text-[#9CA3AF] leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Meet Wendy Section */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="body-large">
                  Wendy Perdomo is the Founder and Executive Leadership Coach at Coaching Women of Color, LLC, a premier coaching and leadership development firm committed to advancing the voice, visibility, and impact of professional women of color in today&apos;s workforce. With over two decades of experience across the nonprofit, education, and public sectors, Wendy is a master facilitator, certified executive coach, and organizational development strategist.
                </p>
                <p className="body-large mt-4">
                  Wendy partners with organizations and executives to cultivate inclusive, high-performing cultures where people and teams can thrive. As a certified DiSC® facilitator, she leverages assessment-based coaching and facilitation to improve communication, strengthen collaboration, and build psychologically safe environments that foster trust, cohesion, and accountability.
                </p>
                <p className="body-large mt-4">
                  Widely regarded as a strategic thought partner, Wendy helps leaders at all levels refine their leadership presence, develop emotional intelligence, and navigate complex organizational challenges—from team transitions and workplace culture repair to bias incidents and courageous conversations. She is passionate about creating space for women of color to lead authentically, manage power with confidence, and move with clarity through all levels of leadership.
                </p>

              </div>

              {/* Education & Certifications */}
              <div className="bg-[#F5F5F5] rounded-3xl p-8 lg:p-12">
                {/* Education */}
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] text-lg mb-4">Education</h3>
                  <div className="flex flex-wrap gap-2">
                    {credentials.map((cred) => (
                      <span
                        key={cred}
                        className="px-4 py-2 bg-white text-[#525252] text-sm rounded-full"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="mt-8">
                  <h3 className="font-semibold text-[#1A1A1A] text-lg mb-4">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {certifications.map((cert) => (
                      <span
                        key={cert}
                        className="px-4 py-2 bg-[#E8F8FD] text-[#1A9FCC] text-sm rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
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

        {/* Why Organizations Choose CWC */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                Why Organizations <span className="text-gradient">Choose CWC</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Fortune 500 & Enterprise Clients",
                  description: "Trusted by Johnson & Johnson, Genentech, Novo Nordisk, TD Bank, and 50+ organizations across industries.",
                },
                {
                  title: "Columbia Business School Executive Education",
                  description: "Advanced training in organizational leadership and executive development from one of the world's top business schools.",
                },
                {
                  title: "Certified DiSC\u00AE Facilitator",
                  description: "Assessment-based coaching and facilitation that improves communication, collaboration, and team dynamics.",
                },
                {
                  title: "Cross-Industry Experience",
                  description: "25+ years across financial services, healthcare, technology, education, government, nonprofit, and arts & culture.",
                },
                {
                  title: "Trauma-Informed Approach",
                  description: "Facilitation and coaching grounded in psychological safety, creating space for honest dialogue and lasting change.",
                },
                {
                  title: "Enterprise-Ready Operations",
                  description: "Custom scoping, W-9 and insurance documentation, engagement letters, and post-engagement strategic debriefs.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-[#F5F5F5] rounded-2xl p-6">
                  <h3 className="font-semibold text-[#1A1A1A] text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-[#737373] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Affiliations & Clients Section */}
        <section className="section gradient-subtle">
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
                <h2 className="heading-card mb-6">Industries Served</h2>
                <div className="flex flex-wrap gap-3">
                  {industriesServed.map((industry) => (
                    <span
                      key={industry}
                      className="px-4 py-2 bg-[#F5F5F5] text-[#525252] rounded-full"
                    >
                      {industry}
                    </span>
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
              <p className="body-large mt-6">
                Our coaching philosophy is built on the principles of inclusion, empowerment, and intentional action. We believe that:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Authenticity Drives Impact",
                  description: "Success is most sustainable when leaders show up as their full, authentic selves.",
                  icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
                  color: "#E91E8C",
                },
                {
                  title: "Opportunity is Essential",
                  description: "Leadership development should be accessible and inclusive, addressing systemic barriers and fostering equal opportunity.",
                  icon: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z",
                  color: "#3EBCE8",
                },
                {
                  title: "Communication is Key",
                  description: "Effective communication builds trust, aligns teams, and enhances collaboration.",
                  icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
                  color: "#FFC425",
                },
                {
                  title: "Action Creates Change",
                  description: "Through reflection, goal-setting, and accountability, we guide our clients to achieve transformative results both personally and professionally.",
                  icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
                  color: "#C4D82E",
                },
              ].map((value) => (
                <div key={value.title} className="bg-white rounded-2xl p-6 shadow-sm border-t-4" style={{ borderColor: value.color }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${value.color}15` }}>
                    <svg className="w-5 h-5" style={{ color: value.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={value.icon} />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-[#1A1A1A] text-lg">{value.title}</h3>
                  <p className="text-[#737373] mt-3 leading-relaxed text-sm">{value.description}</p>
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
              <Link href="/book" className="btn-secondary-light">
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
