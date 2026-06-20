import Link from "next/link";
import { Header, Footer } from "@/components";
import { siteConfig } from "@/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership Development for Organizations | Coaching Women of Color®",
  description:
    "Retain and advance women of color in your organization. Keynote speaking, executive coaching, workshops, retreats, and the RESET Method® — trusted by Fortune 500 companies, nonprofits, and universities.",
  alternates: {
    canonical: "https://coachingwomenofcolor.com/for-organizations/",
  },
};

const clientLogos = [
  { name: "Johnson & Johnson", image: "logos/Johnson-and-Johnson.jpg" },
  { name: "Genentech", image: "logos/Genentech.jpg" },
  { name: "Novo Nordisk", image: "logos/Novo-Nordisk.jpg" },
  { name: "VaynerMedia", image: "logos/VaynerMedia.jpg" },
  { name: "DataRobot", image: "logos/DataRobot.jpg" },
  { name: "TD Bank", image: "logos/TD-Bank.jpg" },
  { name: "NYC Dept of Education", image: "logos/NYC-Department-of-Education.jpg" },
  { name: "Colgate University", image: "logos/Colgate-University.jpg" },
  { name: "University of Michigan", image: "logos/University-of-Michigan.jpg" },
  { name: "Bloomberg Quicktake", image: "logos/Bloomberg-Quicktake.jpg" },
  { name: "Ellevate", image: "logos/Ellevate.jpg" },
  { name: "SURGE Institute", image: "logos/Surge-Institute.jpg" },
  { name: "RiseBoro", image: "logos/RiseBoro-Community-Partnership.jpg" },
  { name: "ALPFA", image: "logos/ALPFA.jpg" },
  { name: "HACE", image: "logos/HACE-Hispanic-Alliance-for-Career-Enhancement.jpg" },
  { name: "URI NYC", image: "logos/URI-NYC-Urban-Resource-Institute.jpg" },
  { name: "Poderistas", image: "logos/Poderistas.jpg" },
  { name: "Hills", image: "logos/Hills.jpg" },
  { name: "ATD Maryland", image: "logos/ATD-Maryland.jpg" },
  { name: "Developing Capacity Coaching", image: "logos/Developing-Capacity-Coaching.jpg" },
  { name: "Howard Center", image: "logos/Howard-Center.jpg" },
  { name: "ICLI Rising", image: "logos/ICLI-Rising-International-Coaching-Leadership-Institute.jpg" },
  { name: "Latinas Represent", image: "logos/Latinas-Represent.jpg" },
  { name: "Monique Burr Foundation", image: "logos/Monique-Burr-Foundation.jpg" },
  { name: "NJ Arts & Culture Renewal Fund", image: "logos/NJ-Arts-and-Culture-Renewal-Fund.jpg" },
  { name: "Proud To Be Latina", image: "logos/Proud-To-Be-Latina.jpg" },
  { name: "VillageCareMAX", image: "logos/VillageCareMAX.jpg" },
  { name: "Women in Housing & Finance", image: "logos/Women-in-Housing-and-Finance.jpg" },
];


const processSteps = [
  {
    step: "1",
    title: "Right Fit",
    description: "Identify if we have the capability to serve your organization and if we're a good fit.",
  },
  {
    step: "2",
    title: "Needs Discovery",
    description: "Identify your organization's urgent problem or opportunity with all stakeholders.",
  },
  {
    step: "3",
    title: "Co-Create",
    description: "With your input, deliver our recommended strategic approach to address urgent problems and opportunities.",
  },
  {
    step: "4",
    title: "Engagement Letter & Contract",
    description: "Confirm the scope of work, payment, and terms.",
  },
  {
    step: "5",
    title: "Execute",
    description: "Deliver on our commitments and drive results for your organization.",
  },
  {
    step: "6",
    title: "Strategic Debrief",
    description: "Interpret the results, share conclusions, and adapt learning as we explore next phase of our work.",
  },
];

const benefits = [
  "Stronger leadership bench and improved retention",
  "Healthier team dynamics and trust",
  "Leaders who deliver results while building culture",
  "Scalable development with measurable outcomes",
];

export default function ForOrganizationsPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#E8F8FD] to-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-2xl">
                <p className="text-sm font-medium text-[#14739C] uppercase tracking-widest mb-4">
                  For Organizations
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                  Your organization needs leaders who
                  <br />
                  <span className="text-gradient">stay, grow, and deliver.</span>
                </h1>
                <p className="mt-6 text-xl text-[#525252] leading-relaxed">
                  High-impact coaching and development programs that strengthen leaders
                  and transform culture. Every engagement is scoped, measured, and built for your timeline.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn-primary">
                    Request a Proposal
                  </Link>
                  <a href={`${siteConfig.basePath}/cwc-capabilities-statement-v2.html`} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    Download Capabilities Statement
                  </a>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#3EBCE8]/20 to-[#8B7BB5]/20 rounded-3xl blur-2xl" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${siteConfig.basePath}/images/hero-organizations.jpg`}
                    alt="Women of color collaborating in a professional setting"
                    className="relative w-full md:w-[500px] lg:w-[500px] xl:w-[550px] h-auto rounded-2xl shadow-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="section gradient-subtle !pb-12 md:!pb-16">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-sm font-medium text-[#14739C] uppercase tracking-widest mb-4">
                Sound Familiar?
              </p>
              <h2 className="heading-display">
                The challenges{" "}
                <span className="text-gradient">your organization faces.</span>
              </h2>
              <p className="body-large mt-6">
                These challenges cost organizations billions annually in turnover, disengagement, and lost productivity. Leaders and HR executives are seeing these patterns across their
                teams—and traditional approaches aren&apos;t solving them.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Retention of Top Talent",
                  description:
                    "You're losing high-performing women of color to competitors who invest in their development. The cost of turnover goes far beyond recruitment — it erodes institutional knowledge and team morale.",
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                  color: "#E91E8C",
                },
                {
                  title: "Disengaged Teams",
                  description:
                    "Low morale, quiet quitting, and a lack of psychological safety are silently undermining your culture. People show up but aren't fully present, and trust across teams is fragile.",
                  icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636",
                  color: "#3EBCE8",
                },
                {
                  title: "Performance & Productivity Gaps",
                  description:
                    "Staff members are struggling to execute the work with a manager who is uncertain or has tried everything and is unable to move the needle. Without the right coaching framework, both sides stay stuck.",
                  icon: "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6",
                  color: "#FFC425",
                },
                {
                  title: "Leadership Pipeline Gaps",
                  description:
                    "There's no diverse bench for senior roles. High-potential leaders aren't being developed intentionally, and the path from mid-level to executive remains unclear and inequitable.",
                  icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
                  color: "#8B7BB5",
                },
                {
                  title: "Communication Breakdowns",
                  description:
                    "Conflict avoidance, silos, and a lack of trust are creating friction across teams. Leaders struggle to have courageous conversations, and unresolved tension compounds over time.",
                  icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
                  color: "#C4D82E",
                },
                {
                  title: "Manager Ineffectiveness",
                  description:
                    "Managers were promoted for technical skills but struggle to lead. They lack the tools for giving feedback, navigating difficult dynamics, and developing their direct reports.",
                  icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                  color: "#E91E8C",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 shadow-sm border-l-4"
                  style={{ borderLeftColor: item.color }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <svg className="w-5 h-5" style={{ color: item.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-[#1A1A1A] text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#525252] leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 md:max-w-md lg:max-w-lg" style={{ borderLeftColor: "#3EBCE8" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(62, 188, 232, 0.08)" }}>
                  <svg className="w-5 h-5 text-[#3EBCE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#1A1A1A] text-lg mb-3">
                  New Managers in the Storming Phase
                </h3>
                <p className="text-[#525252] leading-relaxed text-sm">
                  New managers are navigating through the storming phase of the team development process and aren&apos;t sure how to build a clear roadmap for team cohesion. Without guidance, early missteps become lasting culture problems.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-[#525252] max-w-2xl mx-auto">
                These aren&apos;t just HR problems — they&apos;re leadership problems.{" "}
                <span className="font-semibold text-[#1A1A1A]">
                  The right coaching partner helps you build the culture, communication, and capacity your organization needs to thrive.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Trusted By - Client Logos Carousel */}
        <section className="section-tight bg-white border-y border-[#E5E5E5] overflow-hidden">
          <div className="container-wide">
            <p className="text-center text-sm font-medium text-[#737373] uppercase tracking-widest mb-10">
              Transforming Leaders From
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="flex animate-scroll hover:[animation-play-state:paused]" style={{ width: "max-content", animationDuration: "70s" }}>
              {[...clientLogos, ...clientLogos].map((org, index) => (
                <div key={`${org.name}-${index}`} className="flex items-center justify-center mx-8 flex-shrink-0 px-4 py-2" style={{ width: "180px", height: "90px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${siteConfig.basePath}/images/${org.image}`}
                    alt={org.name}
                    loading="lazy"
                    width={180}
                    height={90}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="container-wide">
            <p className="text-center text-xs text-[#A3A3A3] mt-8">
              And many more across Fortune 500, Healthcare, Technology, Finance & Non-Profit sectors
            </p>
          </div>
        </section>

        {/* What We Help Achieve */}
        <section className="section-tight bg-[#F5F5F5]">
          <div className="container-wide">
            <div className="grid md:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#3EBCE8] flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#525252] text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="section bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                Organizational <span className="text-gradient">Solutions</span>
              </h2>
              <p className="body-large mt-6">
                From 1:1 executive coaching to multi-session development programs—choose
                the format that fits your goals, timeline, and team.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Executive Coaching", subtitle: "1:1 High-Impact Coaching", href: "/services/executive-coaching", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", color: "#E91E8C" },
                { title: "Group Coaching", subtitle: "Leadership Development at Scale", href: "/services/group-coaching", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", color: "#3EBCE8" },
                { title: "Keynote Speaking", subtitle: "From Awareness to Action", href: "/services/keynote-speaking", icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z", color: "#FFC425" },
                { title: "Workshops & Webinars", subtitle: "Interactive Learning Experiences", href: "/services/workshops-webinars", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", color: "#8B7BB5" },
                { title: "Virtual Series", subtitle: "Sustained Behavior Change", href: "/services/virtual-series", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z", color: "#C4D82E" },
                { title: "Strategic Retreats", subtitle: "Align, Strategize, Move Forward", href: "/services/strategic-retreats", icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7", color: "#E91E8C" },
                { title: "Performance Coaching", subtitle: "The RESET Method®", href: "/services/performance-coaching", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", color: "#3EBCE8" },
              ].map((solution) => (
                <Link
                  key={solution.title}
                  href={solution.href}
                  className="group bg-[#F5F5F5] rounded-2xl p-6 hover:shadow-md transition-all hover:bg-white hover:border-[#E5E5E5] border border-transparent"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${solution.color}15` }}
                  >
                    <svg className="w-6 h-6" style={{ color: solution.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={solution.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A] group-hover:text-[#E91E8C] transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-[#737373] mt-1">{solution.subtitle}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[#14739C] mt-4">
                    Learn more
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work With You Section */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                How We Work <span className="text-gradient">With You</span>
              </h2>
              <p className="body-large mt-4">
                A proven process designed for organizational partners.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {processSteps.map((item) => (
                <div key={item.step} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-[#1A1A1A] rounded-lg flex items-center justify-center mb-4 rotate-45">
                    <span className="text-xl font-bold text-white -rotate-45">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A] uppercase tracking-wide">{item.title}</h3>
                  <p className="text-[#737373] mt-2 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/contact" className="btn-primary">
                Request a Proposal
              </Link>
            </div>
          </div>
        </section>

        {/* Enterprise Readiness */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm font-medium text-[#14739C] uppercase tracking-widest mb-4">
                Enterprise Ready
              </p>
              <h2 className="heading-display">
                Built for <span className="text-gradient">how you work.</span>
              </h2>
              <p className="body-large mt-6">
                We understand the procurement, compliance, and logistics requirements of organizational buyers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Custom Scoping",
                  description: "Every engagement starts with a discovery process to align on goals, audience, format, and success metrics.",
                  icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                },
                {
                  title: "Contracting Ready",
                  description: "W-9, insurance documentation, and capabilities statements available. We work with your procurement process.",
                  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                },
                {
                  title: "Flexible Delivery",
                  description: "Virtual, in-person, or hybrid. Single sessions or multi-month engagements. Designed around your calendar.",
                  icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                },
                {
                  title: "Post-Engagement Debrief",
                  description: "Every engagement concludes with a strategic debrief—key findings, recommendations, and next steps for sustained impact.",
                  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                },
              ].map((card) => (
                <div key={card.title} className="bg-[#F5F5F5] rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#E8F8FD] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-[#3EBCE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-2">{card.title}</h3>
                  <p className="text-sm text-[#737373] leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-[#1A1A1A] text-white">
          <div className="container-tight text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Ready to transform your organization?
            </h2>
            <p className="mt-6 text-xl text-[#A3A3A3] max-w-2xl mx-auto">
              Book a discovery call to explore the best-fit format and scope for your team.
            </p>
            <div className="mt-10">
              <Link href="/schedule/organizations/" className="btn-primary">
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
