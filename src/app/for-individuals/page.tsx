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
    id: "executive-program",
    tier: "Signature",
    title: "Executive Leadership Coaching",
    subtitle: "Deep, sustained transformation",
    price: "$1,500/month",
    priceNote: "$9,000 for 6 months",
    duration: "6 months (12 sessions)",
    bestFor: "Women of color executives and senior leaders ready for real, lasting transformation — not a band-aid.",
    features: [
      "Two 1:1 coaching sessions every month (12 sessions over 6 months)",
      "Direct access to me between sessions for the moments that can't wait",
      "Customized strategies and tailored action plans built around your goals",
      "Tools and frameworks you'll keep using long after we're done",
      "Dedicated support navigating bias, visibility, and organizational dynamics",
      "Accountability and milestone check-ins to keep your momentum",
    ],
    cta: "Apply for the Program",
    highlight: true,
  },
  {
    id: "leadership-intensive",
    tier: "6-Week Reset",
    title: "The Leadership Intensive",
    subtitle: "A focused reset to move through what's in front of you",
    price: "$3,500",
    duration: "6 weeks (4 sessions)",
    bestFor: "Professionals at a decision point who want focused support, a clear plan, and accountability to make real progress fast. A one-time first step.",
    features: [
      "Four 1:1 sessions over 6 weeks — beginning with a 90-minute deep-dive assessment, then three 60-minute working sessions",
      "A focused leadership roadmap for your next 30/60/90 days",
      "A stakeholder map with a practical influence strategy",
      "Real scripts and tools for the conversations that matter",
      "Clear action steps with built-in accountability",
    ],
    cta: "Book Your Intensive",
    highlight: false,
  },
  {
    id: "coaching-lab",
    tier: "Community",
    title: "Executive Leadership Lab",
    subtitle: "Grow alongside a community of women who get it",
    price: "$997",
    priceNote: "for the year (about $100/month)",
    duration: "12 months (July & August are integration months)",
    bestFor: "Self-directed professionals who want to keep growing with structure, resources, and community behind them.",
    features: [
      "Monthly live group coaching",
      "Ten self-paced leadership labs (July and August are integration months)",
      "Career tools and worksheets you can put to work immediately",
      "Private community access",
      "Lifetime replay access to everything",
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
                <p className="text-sm font-medium text-[#14739C] uppercase tracking-widest mb-4">
                  Coaching Programs
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
                  Lead like the room was{" "}
                  <span className="text-gradient">built for you.</span>
                </h1>
                <p className="mt-6 text-xl text-[#525252] leading-relaxed">
                  You&apos;ve earned your seat. Now let&apos;s make sure you thrive in it —
                  without shrinking, code-switching, or burning out to prove you belong.
                  Coaching Women of Color helps women of color leaders step into their next
                  level with clarity, strategy, and support built for the realities you
                  actually navigate.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link href="/schedule/individuals/" className="btn-primary">
                    Book a Discovery Call
                  </Link>
                  <Link href="#programs" className="btn-secondary">
                    View Programs
                  </Link>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#3EBCE8]/20 to-[#8B7BB5]/20 rounded-3xl blur-2xl" />
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
              <p className="text-sm font-medium text-[#14739C] uppercase tracking-widest mb-4">
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
                  icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                  color: "#E91E8C",
                },
                {
                  title: "The Only One in the Room",
                  description:
                    "You carry the weight of representation — navigating spaces where no one looks like you, constantly code-switching, and wondering if you truly belong at the table.",
                  icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                  color: "#8B7BB5",
                },
                {
                  title: "Imposter Syndrome & Self-Doubt",
                  description:
                    "Despite your track record, a voice inside questions whether you're qualified enough, ready enough, or deserving enough — even when the evidence says otherwise.",
                  icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                  color: "#FFC425",
                },
                {
                  title: "Tone Policing & Respectability Pressure",
                  description:
                    "You've been told you're 'too much' or 'not enough.' You shrink your voice, soften your delivery, and manage everyone's comfort but your own.",
                  icon: "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2",
                  color: "#3EBCE8",
                },
                {
                  title: "Burnout Without Boundaries",
                  description:
                    "You say yes to everything — mentoring, committees, extra projects — because you feel you have to prove your value twice as hard. The exhaustion is real.",
                  icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z",
                  color: "#E91E8C",
                },
                {
                  title: "Lack of Sponsorship & Advocacy",
                  description:
                    "You have mentors who listen, but no sponsors who advocate. Without someone in the room championing your name, opportunities stay out of reach.",
                  icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
                  color: "#C4D82E",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#FFF9F5] rounded-2xl p-6 border-l-4"
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
                How We <span className="text-gradient">Work Together</span>
              </h2>
              <p className="body-large mt-6">
                There are three ways to work with me, depending on where you are right
                now. Not sure which fits? Start with a discovery call and we&apos;ll
                figure it out together.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span
                      className={`shrink-0 whitespace-nowrap text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                        program.highlight
                          ? "bg-[#3EBCE8] text-white"
                          : "bg-[#E8F8FD] text-[#3EBCE8]"
                      }`}
                    >
                      {program.tier}
                    </span>
                    <span className={`text-right text-sm leading-tight ${program.highlight ? "text-[#A3A3A3]" : "text-[#737373]"}`}>
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

                  {/* CTA */}
                  <Link
                    href="/schedule/individuals/"
                    className={`mt-8 block w-full text-center py-3 px-6 rounded-full font-medium transition-all ${
                      program.highlight
                        ? "bg-[#3EBCE8] text-white hover:bg-[#1A9FCC]"
                        : "bg-[#1A1A1A] text-white hover:bg-[#404040]"
                    }`}
                  >
                    {program.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment & Access */}
        <section className="section bg-white">
          <div className="container-tight text-center">
            <p className="text-sm font-medium text-[#14739C] uppercase tracking-widest mb-4">
              Investment &amp; Access
            </p>
            <h2 className="heading-display">
              This work should be <span className="text-gradient">within reach.</span>
            </h2>
            <p className="body-large mt-6 max-w-2xl mx-auto">
              Every 1:1 program offers <strong>flexible, interest-free payment plans</strong>,
              and <strong>financing options</strong> are available if you&apos;d like a longer
              runway with a lower monthly payment. Many of my clients also have their coaching
              <strong> sponsored by their employer</strong> — if that might be an option for
              you, ask me on our call and I&apos;ll help you make the case.
            </p>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="section gradient-subtle">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-display">
                Intensive or Signature: <span className="text-gradient">What&apos;s Right for You?</span>
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] bg-white rounded-2xl overflow-hidden shadow-sm">
                <caption className="sr-only">
                  Comparison of The Leadership Intensive and Executive Leadership Coaching programs
                </caption>
                <thead>
                  <tr className="bg-[#F5F5F5]">
                    <th scope="col" className="text-left p-4 font-semibold text-[#1A1A1A]">Category</th>
                    <th scope="col" className="text-left p-4 font-semibold text-[#1A1A1A]">The Leadership Intensive ($3,500)</th>
                    <th scope="col" className="text-left p-4 font-semibold text-[#14739C]">Executive Leadership Coaching ($9,000)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5E5]">
                  {[
                    { cat: "Primary Goal", sprint: "Focused progress on what's in front of you", program: "Deep, sustained transformation" },
                    { cat: "Best For", sprint: "One pressing challenge or decision point", program: "Complex challenges, identity-level growth" },
                    { cat: "Format", sprint: "4 sessions over 6 weeks", program: "12 sessions over 6 months" },
                    { cat: "Support Level", sprint: "High-touch, focused first step", program: "Full support system + between-session access" },
                    { cat: "Ideal Outcome", sprint: "Clear plan, fast traction", program: "Sustained confidence, long-term advancement" },
                  ].map((row) => (
                    <tr key={row.cat}>
                      <th scope="row" className="p-4 font-medium text-[#1A1A1A] text-left">{row.cat}</th>
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
              Not sure which fits?
            </h2>
            <p className="body-large mt-6 max-w-2xl mx-auto">
              Start with a discovery call and we&apos;ll figure it out together — where you
              are right now, where you&apos;re headed, and the best next step for your
              leadership journey.
            </p>
            <div className="mt-10">
              <Link href="/schedule/individuals/" className="btn-primary">
                Book a Discovery Call
              </Link>
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
              <Link href="/schedule/individuals/" className="btn-primary">
                Book Your Free Discovery Call
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
