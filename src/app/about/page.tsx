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
  "Lead Facilitator, One We Reach Global Leadership Accelerator Program",
  "Developing Capacity Coach Affiliate",
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
        {/* Hero Section — Editorial Founder Portrait */}
        <section className="relative overflow-hidden bg-[var(--color-neutral-900)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(233,30,140,0.22),transparent_30%),radial-gradient(circle_at_70%_62%,rgba(62,188,232,0.2),transparent_34%)]" />
          {/* Breadcrumbs — positioned over hero */}
          <div className="absolute top-28 left-0 z-20 px-6 md:px-16 lg:px-24 hidden md:block">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "About Wendy Perdomo" },
              ]}
            />
          </div>

          <div className="relative flex flex-col md:flex-row items-stretch">
            {/* Text — left side */}
            <div className="relative z-10 flex w-full md:w-[44%] items-center px-6 pt-32 pb-14 md:px-16 md:pt-36 md:pb-[4.5rem] lg:px-24 lg:pt-40 lg:pb-20">
              <div className="max-w-xl">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-blue-600)] md:text-sm">
                  About the Founder
                </p>
                <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                  Wendy Perdomo
                </h1>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/78 md:text-xl">
                  Executive coach, keynote speaker, and founder of Coaching
                  Women of Color&reg; transforming how organizations develop and
                  retain women of color in leadership.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/12 pt-6 md:mt-9 md:max-w-xl md:gap-8 md:pt-7">
                  {[
                    { value: "25+", label: "Years Experience" },
                    { value: "500+", label: "Leaders Developed" },
                    { value: "50+", label: "Organizations Served" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-semibold text-[var(--color-blue-600)] md:text-3xl">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-xs leading-tight text-white/58 md:text-sm">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image — right side, editorial portrait framing */}
            <div className="relative flex w-full md:w-[56%] items-end justify-center px-6 pb-0 md:px-8 lg:px-12">
              <div className="absolute inset-x-8 bottom-0 top-[4.5rem] rounded-t-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] md:left-6 md:right-8 md:top-20 lg:left-10 lg:right-12" />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-[linear-gradient(90deg,rgba(26,26,26,0.72),transparent)] md:w-24 lg:w-28" />
              <div className="pointer-events-none absolute right-4 bottom-16 h-40 w-40 rounded-full bg-[var(--color-pink-500)]/14 blur-3xl md:right-12 md:h-52 md:w-52" />
              <div className="pointer-events-none absolute left-6 bottom-24 h-32 w-32 rounded-full bg-[var(--color-blue-600)]/14 blur-3xl md:left-10 md:h-44 md:w-44" />
              <div className="relative z-10 flex min-h-[23rem] w-full items-end justify-center pt-6 md:min-h-[38rem] md:pt-12 lg:min-h-[42rem] lg:pt-14">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${siteConfig.basePath}/images/wendy-about.jpg`}
                  alt="Wendy Perdomo, Founder of Coaching Women of Color"
                  className="max-h-[25rem] w-auto object-contain object-bottom md:max-h-[37rem] lg:max-h-[41rem]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Meet Wendy Section */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-blue-600)]">
                  Meet Wendy
                </p>
                <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-[var(--color-neutral-900)] md:text-4xl">
                  Executive coaching rooted in clarity, courage, and organizational impact.
                </h2>
                <p className="body-large mt-6">
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
              <div className="rounded-[2rem] border border-[var(--color-neutral-200)] bg-[linear-gradient(180deg,#fafafa,white)] p-8 shadow-[0_20px_60px_rgba(26,26,26,0.06)] lg:p-12">
                {/* Education */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-[var(--color-neutral-900)]">Education</h3>
                  <div className="flex flex-wrap gap-3">
                    {credentials.map((cred) => (
                      <span
                        key={cred}
                        className="rounded-full border border-[var(--color-neutral-200)] bg-white px-4 py-2 text-sm text-[var(--color-neutral-600)]"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="mt-8">
                  <h3 className="mb-4 text-lg font-semibold text-[var(--color-neutral-900)]">Certifications</h3>
                  <div className="flex flex-wrap gap-3">
                    {certifications.map((cert) => (
                      <span
                        key={cert}
                        className="rounded-full bg-[var(--color-blue-50)] px-4 py-2 text-sm text-[var(--color-blue-700)]"
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
        <section className="section bg-[linear-gradient(180deg,#fafafa_0%,#f3f7fa_100%)]">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-blue-600)]">
                What Wendy Brings
              </p>
              <h2 className="heading-display">
                Areas of <span className="text-gradient">Expertise</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertise.map((item) => (
                <div key={item} className="rounded-3xl border border-white/70 bg-white p-8 text-center shadow-[0_18px_50px_rgba(26,26,26,0.06)] transition-transform duration-300 hover:-translate-y-1">
                  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-blue-50)]">
                    <svg className="h-5 w-5 text-[var(--color-blue-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-medium text-[var(--color-neutral-700)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Organizations Choose CWC */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-blue-600)]">
                Trusted By Leaders
              </p>
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
              ].map((item, index) => (
                <div key={item.title} className="rounded-3xl border border-[var(--color-neutral-200)] bg-[var(--color-neutral-50)] p-6">
                  <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-semibold text-[var(--color-blue-600)] shadow-sm">
                    0{index + 1}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[var(--color-neutral-900)]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--color-neutral-500)]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Affiliations & Clients Section */}
        <section className="section bg-[var(--color-neutral-50)]">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="rounded-3xl bg-white p-8 shadow-[0_16px_45px_rgba(26,26,26,0.05)]">
                <h2 className="heading-card mb-6">Affiliations</h2>
                <ul className="space-y-4">
                  {affiliations.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-blue-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[var(--color-neutral-600)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-white p-8 shadow-[0_16px_45px_rgba(26,26,26,0.05)]">
                <h2 className="heading-card mb-6">Industries Served</h2>
                <div className="flex flex-wrap gap-3">
                  {industriesServed.map((industry) => (
                    <span
                      key={industry}
                      className="rounded-full bg-[var(--color-neutral-100)] px-4 py-2 text-[var(--color-neutral-600)]"
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
        <section className="section bg-[linear-gradient(180deg,#ffffff_0%,#faf7fb_100%)]">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-blue-600)]">
                Coaching Philosophy
              </p>
              <h2 className="heading-display">
                What We <span className="text-gradient">Stand For</span>
              </h2>
              <p className="body-large mt-6">
                Our coaching philosophy is built on the principles of inclusion, empowerment, and intentional action. We believe that:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Integrity",
                  description: "We lead with honesty, transparency, and a deep commitment to doing what is right — even when it's hard.",
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                  color: "#3EBCE8",
                },
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
        <section className="section relative overflow-hidden bg-[var(--color-neutral-900)] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(62,188,232,0.16),transparent_24%),radial-gradient(circle_at_80%_28%,rgba(233,30,140,0.16),transparent_24%)]" />
          <div className="container-tight relative text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Ready to partner with us?
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-white/70">
              Whether you&apos;re an organization seeking transformation or an individual
              ready for breakthrough—let&apos;s start the conversation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link href="/schedule/organizations/" className="btn-secondary-light">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
