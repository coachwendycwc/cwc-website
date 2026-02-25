import Link from "next/link";
import { Header, Footer } from "@/components";
import { siteConfig } from "@/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Organizations",
  description:
    "High-impact coaching, keynote speaking, workshops, retreats, and performance coaching for organizations. Customized leadership development programs from Coaching Women of Color.",
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

const solutions = [
  {
    id: "executive-coaching",
    title: "Executive Coaching for Leaders",
    subtitle: "1:1 High-Impact Coaching",
    description: "Senior leaders and high-potential talent who need a confidential, strategic space to think clearly, lead with confidence, and translate insight into action.",
    outcomes: [
      "Clear leadership identity and decision-making confidence",
      "Stronger communication, influence, and executive presence",
      "Boundary-setting and sustainable performance (without burnout)",
      "Strategies to navigate bias, conflict, and high-stakes conversations",
      "A leadership approach that improves trust, accountability, and team outcomes",
    ],
    details: "Sessions are grounded in real workplace dynamics—stakeholder management, decision-making, boundaries, team performance, and navigating bias and politics without losing authenticity.",
    formats: ["Virtual (Zoom)", "Customized cadence", "Goal-setting & progress tracking"],
  },
  {
    id: "group-coaching",
    title: "Group Coaching for Leaders",
    subtitle: "Leadership Development at Scale",
    description: "Organizations wanting to develop leaders at scale while creating shared language and stronger peer connection across the organization.",
    outcomes: [
      "Practical strategies leaders can apply immediately",
      "Increased confidence and clarity in leadership decisions",
      "Peer support and accountability that accelerates growth",
      "Stronger ability to lead teams with trust and consistency",
    ],
    topics: [
      "Leading through change and uncertainty",
      "Executive presence, influence, and visibility",
      "Communication, feedback, and courageous conversations",
      "Boundaries, workload management, and sustainable leadership",
      "Navigating conflict, team dynamics, and performance challenges",
    ],
    formats: ["By level (emerging, mid, senior)", "Virtual or in-person", "Short series or longer engagement"],
  },
  {
    id: "keynote-speaking",
    title: "Keynote Speaking",
    subtitle: "From Awareness to Action",
    description: "Organizations wanting an engaging, high-impact experience that sparks real conversation and meaningful action.",
    outcomes: [
      "Clear insights and language they can use immediately",
      "Practical frameworks for communication and leadership decisions",
      "A renewed sense of responsibility and possibility",
      "Action steps that support culture change, not just motivation",
    ],
    topics: [
      "Leading with executive presence and influence",
      "Navigating workplace bias and microaggressions",
      "Psychological safety: what it is, what it isn't, and how to build it",
      "Communication that strengthens trust and performance",
      "Confidence, visibility, and leading without shrinking",
    ],
    formats: ["In-person or virtual", "Keynote + Q&A", "Keynote + workshop"],
  },
  {
    id: "workshops",
    title: "Customized Webinars & Workshops",
    subtitle: "Interactive Learning Experiences",
    description: "Leadership teams, people managers, ERGs, high-potential cohorts, or cross-functional teams needing practical skill-building.",
    outcomes: [
      "Customized to your goals, audience, and culture",
      "Trauma-informed facilitation that supports participation and trust",
      "Tools, templates, and action steps leaders can use immediately",
      "Options for pre-surveys and follow-up resources",
    ],
    topics: [
      "Psychological safety and team norms",
      "Communication, feedback, and conflict navigation",
      "Executive presence and leadership visibility",
      "Bias navigation and inclusive leadership practices",
      "Building high-performing teams and accountability",
    ],
    formats: ["Standalone webinar", "Interactive workshop", "Workshop + coaching series"],
  },
  {
    id: "virtual-series",
    title: "Multi-Session Virtual Series",
    subtitle: "Sustained Behavior Change",
    description: "Organizations wanting sustainable leadership development, measurable growth over time, and a clear path from learning to implementation.",
    outcomes: [
      "Stronger communication and leadership consistency",
      "Increased trust, accountability, and team alignment",
      "Improved ability to navigate conflict and high-stakes conversations",
      "Practical tools leaders can use across real scenarios",
      "Momentum and reinforcement that supports culture change",
    ],
    details: "Leaders return to the room, apply what they learned, and refine their approach with support. Series can be designed for leadership cohorts, people managers, high-potential groups, or cross-functional teams.",
    formats: ["3+ sessions (60-90 min each)", "Pre-session surveys", "Workbooks & action plans", "Optional coaching add-ons"],
  },
  {
    id: "strategic-retreats",
    title: "Strategic Leadership & Board Retreats",
    subtitle: "Align, Strategize, and Move Forward Together",
    description: "Executive teams, boards of directors, and senior leadership groups seeking clarity, alignment, and actionable strategy in a focused, facilitated environment.",
    outcomes: [
      "Aligned vision and shared priorities across leadership",
      "Strengthened trust, communication, and team cohesion",
      "Clear action plans with defined ownership and accountability",
      "Renewed energy and commitment to organizational goals",
      "Strategic clarity on critical decisions and direction",
    ],
    details: "Retreats are fully customized to your team's needs—whether you're navigating a transition, setting annual strategy, resolving tension, or building stronger board dynamics. We create a space where honest dialogue leads to meaningful outcomes.",
    formats: ["Half-day or full-day sessions", "In-person or hybrid", "Pre-retreat assessments", "Post-retreat action planning"],
  },
  {
    id: "performance-coaching",
    title: "Performance-Based Coaching",
    subtitle: "The RESET Method™",
    description: "Leaders navigating underperformance who need a structured, confidential coaching framework that drives accountability and real behavior change—without defaulting to avoidance or escalation.",
    outcomes: [
      "A team member who takes full ownership of their performance",
      "A leader who gains confidence in managing underperformance",
      "Measurable shifts in behavior, communication, and accountability",
      "Alignment between leader and team member that closes performance gaps",
      "Talent retained instead of replaced—saving your organization time and cost",
    ],
    details: "The RESET Method™ doesn't choose sides—it closes gaps. By engaging both the leader and the team member from the start, this framework surfaces blind spots, builds shared understanding, and produces real, lasting shifts in how people show up and deliver.",
    formats: ["Virtual (Zoom)", "Dual-engagement model", "Mid-point checkpoint", "Comprehensive outcome summary"],
  },
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
                <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-widest mb-4">
                  For Organizations
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                  Build cultures where
                  <br />
                  <span className="text-gradient">everyone thrives.</span>
                </h1>
                <p className="mt-6 text-xl text-[#525252] leading-relaxed">
                  High-impact coaching and development programs that strengthen leaders
                  and transform culture. Every engagement is customized to your needs.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <a href="https://calendly.com/coachingwomenofcolor/organizational-inquiry-call" target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Book a Discovery Call
                  </a>
                  <a href={`${siteConfig.basePath}/cwc-capabilities-statement.pdf`} download className="btn-secondary">
                    Download Capabilities Statement
                  </a>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#3EBCE8]/20 to-[#9333EA]/20 rounded-3xl blur-2xl" />
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
        <section className="section gradient-subtle">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-widest mb-4">
                Sound Familiar?
              </p>
              <h2 className="heading-display">
                The challenges{" "}
                <span className="text-gradient">your organization faces.</span>
              </h2>
              <p className="body-large mt-6">
                Leaders and HR executives are seeing these patterns across their
                teams — and traditional approaches aren&apos;t solving them.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Retention of Top Talent",
                  description:
                    "You're losing high-performing women of color to competitors who invest in their development. The cost of turnover goes far beyond recruitment — it erodes institutional knowledge and team morale.",
                },
                {
                  title: "Disengaged Teams",
                  description:
                    "Low morale, quiet quitting, and a lack of psychological safety are silently undermining your culture. People show up but aren't fully present, and trust across teams is fragile.",
                },
                {
                  title: "Performance & Productivity Gaps",
                  description:
                    "Staff members are struggling to execute the work with a manager who is uncertain or has tried everything and is unable to move the needle. Without the right coaching framework, both sides stay stuck.",
                },
                {
                  title: "Leadership Pipeline Gaps",
                  description:
                    "There's no diverse bench for senior roles. High-potential leaders aren't being developed intentionally, and the path from mid-level to executive remains unclear and inequitable.",
                },
                {
                  title: "Communication Breakdowns",
                  description:
                    "Conflict avoidance, silos, and a lack of trust are creating friction across teams. Leaders struggle to have courageous conversations, and unresolved tension compounds over time.",
                },
                {
                  title: "Manager Ineffectiveness",
                  description:
                    "People managers were promoted for technical skills but struggle to lead. They lack the tools for giving feedback, navigating difficult dynamics, and developing their direct reports.",
                },
                {
                  title: "New Managers in the Storming Phase",
                  description:
                    "New managers are navigating through the storming phase of the team development process and aren't sure how to build a clear roadmap for team cohesion. Without guidance, early missteps become lasting culture problems.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-[#E5E5E5] rounded-2xl p-6 shadow-sm"
                >
                  <h3 className="font-semibold text-[#1A1A1A] text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#525252] leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
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
                <div key={`${org.name}-${index}`} className="flex items-center justify-center mx-8 flex-shrink-0" style={{ width: "180px", height: "90px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${siteConfig.basePath}/images/${org.image}`}
                    alt={org.name}
                    className="max-w-full max-h-full object-contain"
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
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
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

            <div className="space-y-8">
              {solutions.map((solution, index) => (
                <div
                  key={solution.id}
                  id={solution.id}
                  className="bg-[#F5F5F5] rounded-3xl p-8 lg:p-10"
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left: Title & Description */}
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#3EBCE8]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-2xl font-semibold text-[#1A1A1A] mt-2">
                        {solution.title}
                      </h3>
                      <p className="text-sm text-[#737373] mt-1">{solution.subtitle}</p>
                      <p className="text-[#525252] mt-4 leading-relaxed">
                        <strong>Best for:</strong> {solution.description}
                      </p>
                      {solution.details && (
                        <p className="text-[#737373] mt-3 text-sm leading-relaxed">
                          {solution.details}
                        </p>
                      )}
                    </div>

                    {/* Middle: Outcomes or Topics */}
                    <div>
                      <h4 className="text-sm font-semibold text-[#1A1A1A] uppercase tracking-wider mb-4">
                        {solution.topics ? "Focus Areas" : "What Leaders Gain"}
                      </h4>
                      <ul className="space-y-2">
                        {(solution.outcomes || solution.topics)?.slice(0, 5).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <svg
                              className="w-4 h-4 text-[#3EBCE8] flex-shrink-0 mt-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-[#525252]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Formats */}
                    <div>
                      <h4 className="text-sm font-semibold text-[#1A1A1A] uppercase tracking-wider mb-4">
                        How It Works
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.formats.map((format, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white text-[#525252] text-sm rounded-full border border-[#E5E5E5]"
                          >
                            {format}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
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

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {processSteps.slice(0, 3).map((item) => (
                <div key={item.step} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-[#1A365D] rounded-lg flex items-center justify-center mb-4 rotate-45">
                    <span className="text-xl font-bold text-white -rotate-45">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A] uppercase tracking-wide">{item.title}</h3>
                  <p className="text-[#737373] mt-2 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {processSteps.slice(3, 6).map((item) => (
                <div key={item.step} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-[#1A365D] rounded-lg flex items-center justify-center mb-4 rotate-45">
                    <span className="text-xl font-bold text-white -rotate-45">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A] uppercase tracking-wide">{item.title}</h3>
                  <p className="text-[#737373] mt-2 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href="https://calendly.com/coachingwomenofcolor/organizational-inquiry-call" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Get a Custom Quote
              </a>
            </div>
          </div>
        </section>

        {/* Service Pages Links */}
        <section className="section-tight bg-[#F5F5F5]">
          <div className="container-wide">
            <div className="text-center mb-8">
              <p className="text-sm font-medium text-[#737373] uppercase tracking-widest">
                Explore Our Services
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Executive Coaching", href: "/services/executive-coaching" },
                { name: "Group Coaching", href: "/services/group-coaching" },
                { name: "Keynote Speaking", href: "/services/keynote-speaking" },
                { name: "Workshops & Webinars", href: "/services/workshops-webinars" },
                { name: "Virtual Series", href: "/services/virtual-series" },
                { name: "Strategic Retreats", href: "/services/strategic-retreats" },
                { name: "Performance Coaching", href: "/services/performance-coaching" },
              ].map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="px-6 py-3 bg-white text-[#525252] rounded-full border border-[#E5E5E5] hover:border-[#3EBCE8] hover:text-[#3EBCE8] transition-all"
                >
                  {service.name}
                </Link>
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
              <a href="https://calendly.com/coachingwomenofcolor/organizational-inquiry-call" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book a Discovery Call
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
