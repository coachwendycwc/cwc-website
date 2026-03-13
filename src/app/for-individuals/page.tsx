import Link from "next/link";
import { Header, Footer, TestimonialsCarousel } from "@/components";
import { siteConfig } from "@/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Coaching for Women of Color | Individual Programs",
  description:
    "1:1 executive coaching for women of color at every career stage. Leadership clarity sessions, 90-day sprints, and 6-month programs to build confidence, executive presence, and career momentum.",
  alternates: {
    canonical: "https://coachingwomenofcolor.com/for-individuals/",
  },
};

const individualTestimonials = [
  {
    quote:
      "Wendy is an incredible coach who understands women of color and helped me feel seen, heard, and understood. She approached all of our sessions with patience, grace, and compassion. Even so, she wasn't afraid to share hard truths and insights that supported my personal and professional journey during our year of working together. Connecting with Wendy was typically the highlight of my week, as it gave me the opportunity to reflect and troubleshoot issues I was experiencing at work in a supportive and non-judgemental environment. My experience with Wendy transformed coaching from a mere task on my to-do list into a nurturing experience that truly supported my growth. I highly recommend Wendy to anyone looking for a transformative coaching experience.",
    author: "Stephanie Lopez",
    role: "California",
    image: "testimonial-stephanie.png",
  },
  {
    quote:
      "Wendy is an amazing coach and an inspiring leader. I feel deeply appreciative of Wendy's support during some professionally challenging months. She catered our sessions to my needs, even when I didn't know what I needed, I am better at identifying, setting and communicating my boundaries. I feel more confident in my decision-making skills as it relates to my professional growth. Wendy is also just a dope human-being with amazing experience and I genuinely enjoyed meeting with her during our coaching calls.",
    author: "Alexis Brown",
    role: "Washington, D.C.",
    image: "testimonial-alexis.png",
  },
  {
    quote:
      "Working with you has given me a clarity I haven't had in a long time. I would not have felt qualified to pursue a new role if it wasn't for the work we did together, regardless of what it says on paper.",
    author: "Adrianne Rosario",
    role: "New York, NY",
    image: "testimonial-adrianne.png",
  },
  {
    quote:
      "I recently began a mid-career exploration of what new professional chapters might lie ahead and reached out to Wendy to help me polish my (dusty) CV. During our consultation call, it quickly became apparent that Wendy could offer me so much more than resume editing -- her dynamic personality and candor captured my attention immediately and so began my first coaching experience. I learned so much about myself while working with Wendy. Her careful listening and encouragement during each session combined with the innovative tools and resources that she shared helped guide me towards new ways of thinking about my strengths, skills, and abilities. This was only made more meaningful by Wendy sharing with me her own lived experience as a woman of color. Being able to connect so openly and honestly with someone who could relate how I moved through the world was an absolute gift.",
    author: "Nicole Vlado",
    role: "Brooklyn, NY",
    image: "testimonial-nicolev.png",
  },
  {
    quote:
      "I had met Wendy and participated in her Women of Color series in 2020 while undergoing some serious challenges with a previous role. During that time, Wendy provided some great feedback that resonated with me so when I had the opportunity to work with her as my Executive Coach, it was a no brainer. Wendy has a holistic approach to coaching, seeing me not only as a professional, but as the multi faceted woman that I am. Wendy seamlessly creates a safe and non judgmental approach all while thoughtfully holding the mirror to some of my thoughts and actions that did not serve me. I cannot recommend Wendy enough.",
    author: "Patricia Quintero",
    role: "New York, NY",
    image: "testimonial-patricia.png",
  },
  {
    quote:
      "At any stage of your career or life journey, along the way you can get stuck. At the time I reached out to Wendy, I was a retired educator struggling to craft a plan to define a new identity. I chose to be coached by Wendy because I TRUSTED that she would help me to break through the barriers that were holding me back from achieving my next level dreams and goals. Wendy helped me to create a blueprint for my second act after retirement. Her approach was uniquely crafted and tailored specifically to my needs. She helped me to quickly identify my stuck spots, challenge my limiting beliefs and to recognize and embrace all of the tools and resources around me that would facilitate my transformation. I appreciated being coached by Wendy and I feel that she has established a unique approach to personal growth and development. Wendy listened and was attentive to my specific needs. She is straightforward and her coaching conversations always felt highly individualized. Wendy's coaching gave me the opportunity to craft a powerful and compelling growth plan with self-created time frames. My work with Wendy was indeed challenging and thought provoking but certainly more than worth it and with her encouragement, inspiration and support, I did indeed accomplish my second act dream of graduating from Fashion Institute of Technology as a Costume Designer and Wardrobe Technician. I highly endorse Wendy as a professional coach.",
    author: "Lori Bennett",
    role: "Brooklyn, NY",
    image: "testimonial-lori.png",
  },
];

const coachingPrograms = [
  {
    id: "clarity-session",
    tier: "Entry",
    title: "Leadership Clarity Session",
    subtitle: "1:1 Deep Dive",
    price: "$697",
    duration: "90 minutes",
    bestFor: "Emerging leaders or professionals feeling stuck, overwhelmed, or at a decision point who need expert guidance fast.",
    features: [
      "Deep-dive assessment of current challenges, blockers, and decision points",
      "Strategic roadmap for your next steps (priorities, options, and best moves)",
      "Actionable takeaways you can implement immediately",
      "Curated resource recommendations (tools, frameworks, and next-step supports)",
    ],
    bonus: "$697 credit toward any 1:1 program when you enroll within 30 days",
    cta: "Book Clarity Session",
    highlight: false,
  },
  {
    id: "momentum-sprint",
    tier: "Mid-Tier",
    title: "90-Day Executive Momentum Sprint",
    subtitle: "1:1 Coaching",
    price: "$5,000",
    duration: "90 days (6 sessions)",
    bestFor: "Professionals who need focused support, a clear plan, and accountability to create meaningful progress in the next 90 days.",
    features: [
      "6 private coaching sessions (1 hour each) over 90 days",
      "30/60/90-day leadership plan with priorities and timelines",
      "Stakeholder map + influence strategy",
      "Practical scripts and tools (boundaries, visibility, tough conversations)",
      "Action plans and accountability between sessions",
    ],
    cta: "Start Your Sprint",
    highlight: false,
  },
  {
    id: "executive-program",
    tier: "Anchor Program",
    title: "Executive Leadership Coaching",
    subtitle: "1:1 Premium",
    price: "$1,650/month",
    priceNote: "$9,900 total",
    duration: "6 months (12 sessions)",
    bestFor: "Women of color executives and senior leaders ready for deep, sustained transformation with private, high-touch support.",
    features: [
      "2 private coaching calls per month (1 hour each)",
      "Customized strategies for leadership, confidence, boundaries, and executive presence",
      "Direct email access between sessions",
      "Tailored action plans and accountability",
      "Tools and frameworks aligned with your goals",
      "Support navigating bias, imposter syndrome, and organizational dynamics",
    ],
    cta: "Apply Now",
    highlight: true,
  },
  {
    id: "coaching-lab",
    tier: "Group Program",
    title: "Executive Leadership Lab",
    subtitle: "Community + Coaching",
    price: "$997",
    priceNote: "$100/month",
    duration: "12 months (July & August are integration months)",
    bestFor: "Self-directed mid-tier professionals who want proven tools, frameworks, and a supportive community to elevate their career.",
    features: [
      "10 asynchronous leadership labs",
      "1 live monthly group coaching call",
      "Career tools, worksheets, and frameworks",
      "Private Skool community for support and accountability",
      "Lifetime access to replays",
      "Learn at your own pace with expert guidance",
    ],
    cta: "Join the Lab",
    highlight: false,
  },
];

export default function ForIndividualsPage() {
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
                  Coaching Programs
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                  You already have
                  <br />
                  <span className="text-gradient">everything you need.</span>
                </h1>
                <p className="mt-6 text-xl text-[#525252] leading-relaxed">
                  Executive coaching designed specifically for women of color professionals,
                  senior leaders, and executives ready to lead with confidence, set boundaries,
                  and navigate workplace dynamics with clarity and power.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <a href="https://calendly.com/coachingwomenofcolor/coaching-consultation-with-wendy" target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Book a Free Discovery Call
                  </a>
                  <Link href="#programs" className="btn-secondary">
                    View Programs
                  </Link>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#3EBCE8]/20 to-[#9333EA]/20 rounded-3xl blur-2xl" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${siteConfig.basePath}/images/hero-individuals.jpg`}
                    alt="Professional woman of color celebrating success"
                    className="relative w-full md:w-[500px] lg:w-[500px] xl:w-[550px] h-auto rounded-2xl shadow-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-widest mb-4">
                We See You
              </p>
              <h2 className="heading-display">
                If this sounds familiar,{" "}
                <span className="text-gradient">you&apos;re not alone.</span>
              </h2>
              <p className="body-large mt-6">
                Women of color in the workplace face a unique set of challenges that
                are rarely named out loud — but deeply felt every day.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Overlooked for Opportunities",
                  description:
                    "You consistently deliver results, yet promotions, stretch assignments, and leadership roles go to others. Your contributions are invisible until someone else takes credit.",
                },
                {
                  title: "The Only One in the Room",
                  description:
                    "You carry the weight of representation — navigating spaces where no one looks like you, constantly code-switching, and wondering if you truly belong at the table.",
                },
                {
                  title: "Imposter Syndrome & Self-Doubt",
                  description:
                    "Despite your track record, a voice inside questions whether you're qualified enough, ready enough, or deserving enough — even when the evidence says otherwise.",
                },
                {
                  title: "Tone Policing & Respectability Pressure",
                  description:
                    "You've been told you're 'too much' or 'not enough.' You shrink your voice, soften your delivery, and manage everyone's comfort but your own.",
                },
                {
                  title: "Burnout Without Boundaries",
                  description:
                    "You say yes to everything — mentoring, committees, extra projects — because you feel you have to prove your value twice as hard. The exhaustion is real.",
                },
                {
                  title: "Lack of Sponsorship & Advocacy",
                  description:
                    "You have mentors who listen, but no sponsors who advocate. Without someone in the room championing your name, opportunities stay out of reach.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#FFF9F5] border border-[#F5E6D8] rounded-2xl p-6"
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
                These challenges are not a reflection of your ability — they are a
                reflection of systems that were never designed with you in mind.{" "}
                <span className="font-semibold text-[#1A1A1A]">
                  Coaching gives you the tools to navigate, reclaim, and lead on your own terms.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="section bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-display">
                Choose Your <span className="text-gradient">Pathway</span>
              </h2>
              <p className="body-large mt-6">
                Whether you need a focused session or sustained transformation,
                there&apos;s a program designed for where you are right now.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {coachingPrograms.map((program) => (
                <div
                  key={program.id}
                  id={program.id}
                  className={`rounded-3xl p-8 lg:p-10 transition-all ${
                    program.highlight
                      ? "bg-[#1A1A1A] text-white ring-2 ring-[#3EBCE8]"
                      : "bg-[#F5F5F5]"
                  }`}
                >
                  {/* Tier Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                        program.highlight
                          ? "bg-[#3EBCE8] text-white"
                          : "bg-[#E8F8FD] text-[#3EBCE8]"
                      }`}
                    >
                      {program.tier}
                    </span>
                    <span className={`text-sm ${program.highlight ? "text-[#A3A3A3]" : "text-[#737373]"}`}>
                      {program.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-semibold ${program.highlight ? "text-white" : "text-[#1A1A1A]"}`}>
                    {program.title}
                  </h3>
                  <p className={`text-sm mt-1 ${program.highlight ? "text-[#A3A3A3]" : "text-[#737373]"}`}>
                    {program.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mt-6">
                    <span className={`text-4xl font-bold ${program.highlight ? "text-[#3EBCE8]" : "text-[#1A1A1A]"}`}>
                      {program.price}
                    </span>
                    {program.priceNote && (
                      <span className={`text-sm ml-2 ${program.highlight ? "text-[#A3A3A3]" : "text-[#737373]"}`}>
                        ({program.priceNote})
                      </span>
                    )}
                  </div>

                  {/* Best For */}
                  <p className={`mt-4 text-sm leading-relaxed ${program.highlight ? "text-[#D4D4D4]" : "text-[#525252]"}`}>
                    <strong>Best for:</strong> {program.bestFor}
                  </p>

                  {/* Features */}
                  <ul className="mt-6 space-y-3">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            program.highlight ? "text-[#3EBCE8]" : "text-[#3EBCE8]"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={`text-sm ${program.highlight ? "text-[#D4D4D4]" : "text-[#525252]"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Bonus */}
                  {program.bonus && (
                    <div className={`mt-6 p-4 rounded-xl ${program.highlight ? "bg-[#262626]" : "bg-white"}`}>
                      <p className={`text-sm ${program.highlight ? "text-[#3EBCE8]" : "text-[#3EBCE8]"}`}>
                        <strong>Bonus:</strong> {program.bonus}
                      </p>
                    </div>
                  )}

                  {/* CTA */}
                  <a
                    href="https://calendly.com/coachingwomenofcolor/coaching-consultation-with-wendy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 block w-full text-center py-3 px-6 rounded-full font-medium transition-all ${
                      program.highlight
                        ? "bg-[#3EBCE8] text-white hover:bg-[#1A9FCC]"
                        : "bg-[#1A1A1A] text-white hover:bg-[#404040]"
                    }`}
                  >
                    {program.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-display">
                90-Day vs 6-Month: <span className="text-gradient">What&apos;s Right for You?</span>
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] bg-white rounded-2xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[#F5F5F5]">
                    <th className="text-left p-4 font-semibold text-[#1A1A1A]">Category</th>
                    <th className="text-left p-4 font-semibold text-[#1A1A1A]">90-Day Sprint ($5,000)</th>
                    <th className="text-left p-4 font-semibold text-[#3EBCE8]">6-Month Program ($9,900)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5E5]">
                  {[
                    { cat: "Primary Goal", sprint: "Clarity + traction + execution", program: "Deep, sustained transformation" },
                    { cat: "Best For", sprint: "Decision point, urgent priorities", program: "Complex challenges, identity-level growth" },
                    { cat: "Sessions", sprint: "6 sessions", program: "12 sessions" },
                    { cat: "Support Level", sprint: "Light between-session support", program: "Higher-touch + email access" },
                    { cat: "Ideal Outcome", sprint: "Clear direction, first wins", program: "Sustained confidence, long-term advancement" },
                  ].map((row) => (
                    <tr key={row.cat}>
                      <td className="p-4 font-medium text-[#1A1A1A]">{row.cat}</td>
                      <td className="p-4 text-[#525252]">{row.sprint}</td>
                      <td className="p-4 text-[#525252]">{row.program}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="heading-display">
                Real impact.
                <br />
                <span className="text-gradient">Real stories.</span>
              </h2>
            </div>

            <TestimonialsCarousel testimonials={individualTestimonials} />
          </div>
        </section>

        {/* Not Sure CTA */}
        <section className="section bg-[#F5F5F5]">
          <div className="container-tight text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A]">
              Not sure where to start?
            </h2>
            <p className="body-large mt-6 max-w-2xl mx-auto">
              Begin with a <strong>Leadership Clarity Session</strong> to get clear on your goals,
              your biggest blockers, and the best next step for your coaching journey.
            </p>
            <div className="mt-10">
              <a href="https://calendly.com/coachingwomenofcolor/coaching-consultation-with-wendy" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book Your Free Discovery Call
              </a>
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
              Take the first step toward the career and leadership you deserve.
            </p>
            <div className="mt-10">
              <a href="https://calendly.com/coachingwomenofcolor/coaching-consultation-with-wendy" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book Your Free Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
